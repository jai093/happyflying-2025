import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET!;

export function signToken(payload: object): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "24h" });
}

export function verifyToken(token: string): { username: string } | null {
  try {
    return jwt.verify(token, JWT_SECRET) as { username: string };
  } catch {
    return null;
  }
}

export function getTokenFromRequest(req: NextRequest): string | null {
  // Check Authorization header
  const authHeader = req.headers.get("authorization");
  if (authHeader?.startsWith("Bearer ")) {
    return authHeader.slice(7);
  }
  // Check cookie
  const cookie = req.cookies.get("admin_token");
  return cookie?.value ?? null;
}

export function isAdminAuthenticated(req: NextRequest): boolean {
  const token = getTokenFromRequest(req);
  if (!token) return false;
  const payload = verifyToken(token);
  return payload !== null;
}
