import { connectDB } from "@/lib/mongodb";
import Enquiry from "@/lib/models/Enquiry";
import { NextRequest, NextResponse } from "next/server";
import * as XLSX from "xlsx";
import * as fs from "fs";
import * as path from "path";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    // Fetch all enquiries from database
    const enquiries = await Enquiry.find()
      .sort({ createdAt: -1 })
      .lean();

    if (enquiries.length === 0) {
      return NextResponse.json(
        { error: "No enquiries to export" },
        { status: 400 }
      );
    }

    // Format data for Excel
    const data = enquiries.map((e: any, index: number) => ({
      "#": index + 1,
      "Name": e.name,
      "Email": e.email,
      "Mobile": e.mobile,
      "Source": e.source === "homepage_popup" ? "Homepage Popup" : "Contact Page",
      "Submitted Date": new Date(e.createdAt).toLocaleString("en-IN"),
      "Timestamp": e.createdAt.toISOString(),
    }));

    // Create workbook and worksheet
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Set column widths
    worksheet["!cols"] = [
      { wch: 5 },    // #
      { wch: 20 },   // Name
      { wch: 25 },   // Email
      { wch: 15 },   // Mobile
      { wch: 15 },   // Source
      { wch: 25 },   // Submitted Date
      { wch: 30 },   // Timestamp
    ];

    XLSX.utils.book_append_sheet(workbook, worksheet, "Enquiries");

    // Generate buffer
    const buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });

    // Save to public folder for persistent access
    const publicDir = path.join(process.cwd(), "public", "enquiries");
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    const timestamp = new Date().toISOString().slice(0, 10);
    const filename = `enquiries_${timestamp}.xlsx`;
    const filepath = path.join(publicDir, filename);

    // Write file to public folder
    fs.writeFileSync(filepath, buffer);

    // Return both download and file info
    return NextResponse.json(
      {
        success: true,
        message: "Enquiries exported successfully",
        total: enquiries.length,
        filename: filename,
        downloadUrl: `/enquiries/${filename}`,
        fileSize: buffer.length,
        createdAt: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error exporting enquiries:", error);
    return NextResponse.json(
      { error: "Failed to export enquiries" },
      { status: 500 }
    );
  }
}

// GET to download the latest enquiries file
export async function HEAD(request: NextRequest) {
  try {
    const publicDir = path.join(process.cwd(), "public", "enquiries");
    
    if (!fs.existsSync(publicDir)) {
      return NextResponse.json(
        { error: "No export files found" },
        { status: 404 }
      );
    }

    // Get latest file
    const files = fs.readdirSync(publicDir)
      .filter(f => f.endsWith('.xlsx'))
      .sort()
      .reverse();

    if (files.length === 0) {
      return NextResponse.json(
        { error: "No export files found" },
        { status: 404 }
      );
    }

    const latestFile = files[0];
    const filepath = path.join(publicDir, latestFile);
    const stats = fs.statSync(filepath);

    return new NextResponse(null, {
      status: 200,
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Length": stats.size.toString(),
        "X-Latest-File": latestFile,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to check export files" },
      { status: 500 }
    );
  }
}
