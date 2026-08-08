/**
 * Admin Login Endpoint
 * POST /api/admin/login
 * 
 * Authenticates against MongoDB admins collection with bcrypt password verification
 * Falls back to environment variables if MongoDB is unavailable
 */

import { NextRequest, NextResponse } from "next/server";
import { signToken } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import Admin from "@/lib/models/Admin";
import bcryptjs from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: "Username and password are required" },
        { status: 400 }
      );
    }

    let isValidCredential = false;
    let adminUsername = username;

    // Try to authenticate against MongoDB first
    try {
      await connectDB();
      const admin = await Admin.findOne({ username });

      if (admin) {
        // Compare password with bcrypt hash
        isValidCredential = await bcryptjs.compare(password, admin.passwordHash);
        if (isValidCredential) {
          console.log(`✅ Admin "${username}" authenticated via MongoDB`);
          // Update last login timestamp
          admin.lastLogin = new Date();
          await admin.save();
        }
      } else {
        console.log(`⚠️  Admin "${username}" not found in MongoDB, trying env vars`);
      }
    } catch (dbError) {
      console.warn("⚠️  MongoDB connection failed, falling back to environment variables:", dbError);
      // Will fall through to env var check below
    }

    // Fallback to environment variables if no MongoDB match or DB unavailable
    if (!isValidCredential) {
      const envUsername = process.env.ADMIN_USERNAME;
      const envPassword = process.env.ADMIN_PASSWORD;

      if (!envUsername || !envPassword) {
        console.error("❌ Missing required environment variables: ADMIN_USERNAME or ADMIN_PASSWORD");
        return NextResponse.json(
          { error: "Server configuration error" },
          { status: 500 }
        );
      }

      if (username === envUsername && password === envPassword) {
        console.log(`✅ Admin "${username}" authenticated via environment variables`);
        isValidCredential = true;
      }
    }

    // Return 401 without revealing if user exists or not
    if (!isValidCredential) {
      console.warn(`❌ Authentication failed for username: ${username}`);
      return NextResponse.json(
        { error: "Invalid username or password" },
        { status: 401 }
      );
    }

    // Create JWT token
    const token = signToken({ username: adminUsername });

    const response = NextResponse.json({ success: true, token });

    // Set secure cookie
    const isProduction = process.env.NODE_ENV === "production";
    const host = req.headers.get("host") || "";
    const isLocalhost = host.includes("localhost") || host.includes("127.0.0.1");

    response.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: isProduction && !isLocalhost, // Allow HTTP on localhost
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("❌ Login error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
