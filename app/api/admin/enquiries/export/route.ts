/**
 * Excel Export Endpoint
 * POST /api/admin/enquiries/export
 * 
 * Generates and returns an Excel file as a blob for download
 * Works in both npm start and standalone modes
 * Uses in-memory buffer instead of writing to disk
 */

import { connectDB } from "@/lib/mongodb";
import Enquiry from "@/lib/models/Enquiry";
import { NextResponse } from "next/server";
import * as XLSX from "xlsx";

export async function POST() {
  try {
    console.log("📊 Generating Excel export...");
    
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
    const excelData = enquiries.map((e: any, index: number) => ({
      "#": index + 1,
      "Name": e.name,
      "Email": e.email,
      "Mobile": e.mobile,
      "Source": e.source === "homepage_popup" ? "Homepage Popup" : "Contact Page",
      "Submitted Date": new Date(e.createdAt).toLocaleString("en-IN"),
    }));

    // Generate Excel workbook in memory
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(excelData);

    // Set column widths for better readability
    worksheet["!cols"] = [
      { wch: 5 },   // #
      { wch: 20 },  // Name
      { wch: 25 },  // Email
      { wch: 15 },  // Mobile
      { wch: 15 },  // Source
      { wch: 25 },  // Submitted Date
    ];

    XLSX.utils.book_append_sheet(workbook, worksheet, "Enquiries");

    // Generate buffer (NOT writing to disk - works in standalone mode)
    const buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });

    console.log(`✅ Excel file generated: ${excelData.length} enquiries, ${buffer.length} bytes`);

    // Return as downloadable blob
    const filename = `enquiries_${new Date().toISOString().slice(0, 10)}.xlsx`;

    return new Response(buffer, {
      status: 200,
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Content-Length": buffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("❌ Excel export error:", error);
    return NextResponse.json(
      { error: "Failed to generate Excel export" },
      { status: 500 }
    );
  }
}

// Also support GET requests for direct download links
export async function GET() {
  return POST();
}
