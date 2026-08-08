import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Admin from "@/lib/models/Admin";
import { isAdminAuthenticated, getTokenFromRequest, verifyToken } from "@/lib/auth";

// GET admin profile (authenticated admin only)
export async function GET(req: NextRequest) {
  if (!isAdminAuthenticated(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const token = getTokenFromRequest(req);
    if (!token) {
      return NextResponse.json({ error: "No token" }, { status: 401 });
    }

    const payload = verifyToken(token);
    if (!payload) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    const admin = await Admin.findOne({ username: payload.username }).select("-passwordHash").lean();
    if (!admin) {
      return NextResponse.json({ error: "Admin not found" }, { status: 404 });
    }

    return NextResponse.json({ admin });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to fetch profile";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
