import { connectDB } from "@/lib/mongodb";
import Enquiry from "@/lib/models/Enquiry";
import { NextRequest, NextResponse } from "next/server";

// POST: Create a new enquiry
export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const { name, email, mobile, source = "homepage_popup" } = body;

    // Validation
    if (!name || !email || !mobile) {
      return NextResponse.json(
        { error: "Name, email, and mobile are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Mobile validation (basic - accepts various formats)
    const mobileRegex = /^[0-9]{10,}$/;
    if (!mobileRegex.test(mobile.replace(/[\s\-()]/g, ""))) {
      return NextResponse.json(
        { error: "Invalid mobile number" },
        { status: 400 }
      );
    }

    // Create enquiry
    const enquiry = new Enquiry({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      mobile: mobile.trim(),
      source: source || "homepage_popup",
    });

    await enquiry.save();

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry submitted successfully",
        enquiry: {
          id: enquiry._id,
          name: enquiry.name,
          email: enquiry.email,
          createdAt: enquiry.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating enquiry:", error);
    return NextResponse.json(
      { error: "Failed to submit enquiry" },
      { status: 500 }
    );
  }
}

// GET: Retrieve all enquiries (for admin/export functionality)
export async function GET(request: NextRequest) {
  try {
    // Add authentication check in production
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    await connectDB();

    const enquiries = await Enquiry.find()
      .sort({ createdAt: -1 })
      .lean();

    // Format for export
    const formatted = enquiries.map((e: any) => ({
      name: e.name,
      email: e.email,
      mobile: e.mobile,
      source: e.source,
      submittedAt: new Date(e.createdAt).toLocaleString("en-IN"),
    }));

    return NextResponse.json(
      {
        success: true,
        total: formatted.length,
        enquiries: formatted,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching enquiries:", error);
    return NextResponse.json(
      { error: "Failed to fetch enquiries" },
      { status: 500 }
    );
  }
}
