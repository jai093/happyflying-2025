import { connectDB } from "@/lib/mongodb";
import Enquiry from "@/lib/models/Enquiry";
import { NextRequest, NextResponse } from "next/server";
import * as XLSX from "xlsx";
import * as fs from "fs";
import * as path from "path";

/**
 * Formats date to DD-MM-YYYY, HH:MM AM/PM format
 * Expected by frontend: "07-08-2026, 4:35 PM"
 */
function formatDateToIndianIST(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  
  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }
  
  const timeStr = `${hours}:${minutes} ${ampm}`;
  return `${day}-${month}-${year}, ${timeStr}`;
}

export async function GET(request: NextRequest) {
  try {
    console.log("📥 [Enquiries-List API] Starting request...");
    
    // Optional: Add authentication check
    const authHeader = request.headers.get("authorization");
    const token = authHeader?.replace("Bearer ", "");

    // Step 1: Connect to database
    console.log("🔗 [DB] Connecting to MongoDB...");
    const mongoConnection = await connectDB();
    console.log("✅ [DB] MongoDB connection successful");

    // Step 2: Verify Enquiry model is loaded
    console.log("📋 [Model] Enquiry model loaded");

    // Step 3: Query the database
    console.log("🔍 [Query] Executing Enquiry.find()...");
    const enquiries = await Enquiry.find()
      .sort({ createdAt: -1 })
      .lean();

    console.log(`✅ [Query] Found ${enquiries.length} enquiries in database`);

    // Step 4: Handle empty result
    if (!enquiries || enquiries.length === 0) {
      console.log("ℹ️  [Result] No enquiries found - returning empty array");
      return NextResponse.json(
        {
          success: true,
          total: 0,
          enquiries: [],
          message: "No enquiries found in database"
        },
        { status: 200 }
      );
    }

    // Step 5: Format data for frontend
    console.log("📝 [Format] Formatting enquiry data...");
    const formatted = enquiries.map((e: any, index: number) => {
      try {
        // Determine source display name
        let sourceDisplay = "Unknown";
        if (e.source === "homepage_popup") {
          sourceDisplay = "Homepage Popup";
        } else if (e.source === "contact_page") {
          sourceDisplay = "Contact Page";
        } else {
          sourceDisplay = e.source || "Unknown";
        }

        // Format the date properly
        const createdDate = new Date(e.createdAt);
        const formattedDate = formatDateToIndianIST(createdDate);

        return {
          id: e._id?.toString() || "",
          index: index + 1,
          name: e.name || "",
          email: e.email || "",
          mobile: e.mobile || "",
          source: sourceDisplay,
          submittedAt: formattedDate,
          timestamp: e.createdAt?.toISOString() || new Date().toISOString(),
        };
      } catch (formatError) {
        console.warn(`⚠️  [Format] Error formatting enquiry ${e._id}:`, formatError);
        return {
          id: e._id?.toString() || "",
          index: index + 1,
          name: e.name || "",
          email: e.email || "",
          mobile: e.mobile || "",
          source: e.source || "Unknown",
          submittedAt: "Invalid Date",
          timestamp: e.createdAt?.toISOString() || new Date().toISOString(),
        };
      }
    });

    console.log(`✅ [Format] Formatted ${formatted.length} enquiries successfully`);

    // Step 6: Generate and save Excel file
    let exportFile = null;
    try {
      console.log("📊 [Excel] Generating Excel workbook...");
      const workbook = XLSX.utils.book_new();
      const worksheet = XLSX.utils.json_to_sheet(
        formatted.map(e => ({
          "#": e.index,
          "Name": e.name,
          "Email": e.email,
          "Mobile": e.mobile,
          "Source": e.source,
          "Submitted Date": e.submittedAt,
        }))
      );

      worksheet["!cols"] = [
        { wch: 5 },
        { wch: 20 },
        { wch: 25 },
        { wch: 15 },
        { wch: 15 },
        { wch: 25 },
      ];

      XLSX.utils.book_append_sheet(workbook, worksheet, "Enquiries");
      const buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
      console.log(`✅ [Excel] Workbook generated: ${buffer.length} bytes`);

      // Determine correct public directory path
      let publicDir: string;
      
      // Check if we're in standalone mode
      const isStandalone = process.cwd().includes(".next/standalone");
      if (isStandalone) {
        // In standalone: ./public is relative to current directory
        publicDir = path.join(process.cwd(), "public", "enquiries");
      } else {
        // In development/regular build: use project root
        publicDir = path.join(process.cwd(), "public", "enquiries");
      }

      // Ensure directory exists
      if (!fs.existsSync(publicDir)) {
        console.log(`📁 [File] Creating directory: ${publicDir}`);
        fs.mkdirSync(publicDir, { recursive: true });
      }

      const timestamp = new Date().toISOString().slice(0, 10);
      const filename = `enquiries_${timestamp}.xlsx`;
      const filepath = path.join(publicDir, filename);

      fs.writeFileSync(filepath, buffer);
      console.log(`✅ [File] Excel file saved: ${filepath}`);

      exportFile = {
        filename: filename,
        url: `/enquiries/${filename}`,
        size: buffer.length,
        createdAt: new Date().toISOString(),
      };
    } catch (excelError) {
      console.warn("⚠️  [Excel] Warning: Could not generate Excel file:", excelError);
      // Still return enquiries even if Excel creation fails
      // This allows the app to function without file system write access
    }

    // Step 7: Return response
    console.log(`📤 [Response] Returning ${formatted.length} enquiries to client`);
    return NextResponse.json(
      {
        success: true,
        total: formatted.length,
        enquiries: formatted,
        exportFile: exportFile,
        message: `✅ Enquiries loaded successfully (${formatted.length} records)`
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ [Error] Fatal error in enquiries-list endpoint:", error);
    
    // Detailed error logging
    if (error instanceof Error) {
      console.error("  Error Message:", error.message);
      console.error("  Error Stack:", error.stack);
    }

    return NextResponse.json(
      { 
        success: false,
        error: "Failed to fetch enquiries",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
