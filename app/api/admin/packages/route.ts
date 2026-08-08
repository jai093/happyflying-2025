import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Package from "@/lib/models/Package";
import { isAdminAuthenticated } from "@/lib/auth";

// GET all packages (public — used by destinations page)
export async function GET() {
  try {
    await connectDB();
    const packages = await Package.find({}).sort({ createdAt: -1 }).lean();
    return NextResponse.json({ packages });
  } catch {
    return NextResponse.json({ error: "Failed to fetch packages" }, { status: 500 });
  }
}

// POST create new package (admin only)
export async function POST(req: NextRequest) {
  if (!isAdminAuthenticated(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const body = await req.json();

    // Auto-generate slug from title if not provided
    if (!body.slug && body.title) {
      body.slug = body.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
    }

    const pkg = await Package.create(body);
    return NextResponse.json({ package: pkg }, { status: 201 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to create package";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
