/**
 * Package Management Endpoint
 * GET /api/admin/packages/[id] - Get single package
 * PUT /api/admin/packages/[id] - Update package
 * DELETE /api/admin/packages/[id] - Delete package
 */

import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Package from "@/lib/models/Package";
import { Types } from "mongoose";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: "Invalid package ID" },
        { status: 400 }
      );
    }

    await connectDB();
    const pkg = await Package.findById(id);

    if (!pkg) {
      return NextResponse.json(
        { error: "Package not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ package: pkg }, { status: 200 });
  } catch (error) {
    console.error("Error fetching package:", error);
    return NextResponse.json(
      { error: "Failed to fetch package" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: "Invalid package ID" },
        { status: 400 }
      );
    }

    const body = await req.json();
    await connectDB();

    const pkg = await Package.findByIdAndUpdate(
      id,
      body,
      { new: true, runValidators: true }
    );

    if (!pkg) {
      return NextResponse.json(
        { error: "Package not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ package: pkg }, { status: 200 });
  } catch (error) {
    console.error("Error updating package:", error);
    return NextResponse.json(
      { error: "Failed to update package" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    console.log(`🗑️  Deleting package with ID: ${id}`);

    // Validate MongoDB ObjectId
    if (!Types.ObjectId.isValid(id)) {
      console.error(`❌ Invalid ObjectId format: ${id}`);
      return NextResponse.json(
        { error: "Invalid package ID format" },
        { status: 400 }
      );
    }

    await connectDB();

    // Convert to ObjectId
    const objectId = new Types.ObjectId(id);

    // Check if package exists first
    const pkg = await Package.findById(objectId);
    if (!pkg) {
      console.warn(`⚠️  Package not found: ${id}`);
      return NextResponse.json(
        { error: "Package not found" },
        { status: 404 }
      );
    }

    // Delete the package
    await Package.deleteOne({ _id: objectId });

    console.log(`✅ Deleted package: ${id} - "${pkg.title}"`);

    return NextResponse.json(
      {
        success: true,
        message: `Package "${pkg.title}" deleted successfully`,
        deletedId: id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error deleting package:", error);
    return NextResponse.json(
      { error: "Failed to delete package" },
      { status: 500 }
    );
  }
}
