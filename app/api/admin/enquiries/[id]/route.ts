/**
 * Delete Enquiry Endpoint
 * DELETE /api/admin/enquiries/[id]
 * 
 * Deletes a specific enquiry from the database
 */

import { connectDB } from "@/lib/mongodb";
import Enquiry from "@/lib/models/Enquiry";
import { NextRequest, NextResponse } from "next/server";
import { Types } from "mongoose";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const { id } = resolvedParams;

    console.log(`🗑️ Delete request for ID: ${id}`);

    // Validate MongoDB ObjectId format
    if (!Types.ObjectId.isValid(id)) {
      console.error(`❌ Invalid ObjectId format: ${id}`);
      return NextResponse.json(
        { success: false, error: "Invalid enquiry ID format" },
        { status: 400 }
      );
    }

    await connectDB();

    // Convert to ObjectId for query
    const objectId = new Types.ObjectId(id);
    
    // Check if enquiry exists first
    const enquiry = await Enquiry.findById(objectId);
    if (!enquiry) {
      console.warn(`⚠️  Enquiry not found: ${id}`);
      return NextResponse.json(
        { success: false, error: "Enquiry not found" },
        { status: 404 }
      );
    }

    // Delete the enquiry
    await Enquiry.deleteOne({ _id: objectId });

    console.log(`✅ Deleted enquiry: ${id} from ${enquiry.name}`);

    return NextResponse.json(
      {
        success: true,
        message: `Enquiry from ${enquiry.name} deleted successfully`,
        deletedId: id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error deleting enquiry:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete enquiry" },
      { status: 500 }
    );
  }
}
