/**
 * Environment Variable Loader
 * Ensures environment variables are properly loaded in all modes
 * Works with npm start, node .next/standalone/server.js, and Vercel
 */

// Fallback defaults - MUST be set via environment variables!
// DO NOT USE DEFAULTS IN PRODUCTION - Always set ADMIN_USERNAME and ADMIN_PASSWORD in env vars
const defaults = {
  MONGODB_URI: "mongodb+srv://ssanjay67372_db_user:q5dREEI9nSYdgjPD@cluster0.uouykyr.mongodb.net/happyflying?retryWrites=true&w=majority",  // REQUIRED - Must be set
  JWT_SECRET: "tfG4qyIsR29YabeYDVSExRgbl8jY4Mr6BGurpe3jBf0",   // REQUIRED - Must be set
  JWT_REFRESH_SECRET: "Ly(;3u,48*CIflb!a[h+UhIaJRO:N=f7){eP4|[V00+",  // REQUIRED - Must be set
  ADMIN_USERNAME: "",  // REQUIRED - Must be set
  ADMIN_PASSWORD: "",  // REQUIRED - Must be set
  NODE_ENV: "development",
};

/**
 * Get environment variable with fallback
 */
export function getEnv(key: keyof typeof defaults): string {
  const value = process.env[key];
  
  if (!value && defaults[key] === "") {
    throw new Error(`🚨 CRITICAL: Environment variable ${key} is not set and has no safe default`);
  }
  
  if (!value) {
    console.warn(`⚠️  Environment variable ${key} not set, using default`);
    return defaults[key];
  }
  
  return value;
}

/**
 * Validate that all required environment variables are set
 */
export function validateEnv(): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // MongoDB URI is critical
  if (!process.env.MONGODB_URI) {
    errors.push("❌ MONGODB_URI environment variable is not set - Database connection required");
  }

  // JWT Secret is critical for authentication
  if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 10) {
    errors.push("❌ JWT_SECRET environment variable is not set or too short (min 10 chars)");
  }

  if (!process.env.JWT_REFRESH_SECRET || process.env.JWT_REFRESH_SECRET.length < 10) {
    errors.push("❌ JWT_REFRESH_SECRET environment variable is not set or too short (min 10 chars)");
  }

  // Admin credentials for login
  if (!process.env.ADMIN_USERNAME) {
    errors.push("❌ ADMIN_USERNAME environment variable is not set");
  }

  if (!process.env.ADMIN_PASSWORD) {
    errors.push("❌ ADMIN_PASSWORD environment variable is not set");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Log environment status (for debugging)
 */
export function logEnvStatus() {
  const nodeEnv = process.env.NODE_ENV || "development";
  const mongoUri = process.env.MONGODB_URI ? "✅ Set" : "❌ NOT SET";
  const jwtSecret = process.env.JWT_SECRET ? "✅ Set" : "❌ NOT SET";
  const jwtRefresh = process.env.JWT_REFRESH_SECRET ? "✅ Set" : "❌ NOT SET";
  const adminUsername = process.env.ADMIN_USERNAME ? "✅ Set" : "❌ NOT SET";
  const adminPassword = process.env.ADMIN_PASSWORD ? "✅ Set" : "❌ NOT SET";

  console.log("\n📊 Environment Configuration Status:");
  console.log(`   NODE_ENV: ${nodeEnv}`);
  console.log(`   MONGODB_URI: ${mongoUri}`);
  console.log(`   JWT_SECRET: ${jwtSecret}`);
  console.log(`   JWT_REFRESH_SECRET: ${jwtRefresh}`);
  console.log(`   ADMIN_USERNAME: ${adminUsername}`);
  console.log(`   ADMIN_PASSWORD: ${adminPassword}`);
  console.log("");

  const validation = validateEnv();
  if (!validation.valid) {
    console.error("❌ Environment validation failed:");
    validation.errors.forEach(err => console.error(`   ${err}`));
    process.exit(1);
  }
  
  console.log("✅ All required environment variables are set\n");
}

export default {
  getEnv,
  validateEnv,
  logEnvStatus,
};
