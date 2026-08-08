import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Calendar,
  CheckCircle2,
  ChevronLeft,
  Clock,
  MapPin,
  MessageSquare,
  PhoneCall,
  ShieldCheck,
  Star,
  XCircle
} from "lucide-react";
import { connectDB } from "@/lib/mongodb";
import Package from "@/lib/models/Package";

interface PackageItem {
  _id: string;
  slug: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  type: string;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  itinerary: Array<{ day: string; details: string } | [string, string]>;
  inclusions: string[];
  exclusions: string[];
}

// Helper function to get base URL for internal fetches
function getBaseUrl(): string {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  if (process.env.NEXTAUTH_URL) {
    return process.env.NEXTAUTH_URL;
  }
  return "http://localhost:3000";
}

// Direct MongoDB query as fallback when API fetch fails
async function getPackagesFromDB(): Promise<PackageItem[]> {
  try {
    await connectDB();
    const packages = await Package.find({}).sort({ createdAt: -1 }).lean();
    console.log(`✅ Fetched ${packages.length} packages from MongoDB`);
    return packages as unknown as PackageItem[];
  } catch (error) {
    console.error("❌ Failed to fetch packages from MongoDB:", error);
    return [];
  }
}

export async function generateStaticParams() {
  try {
    const baseUrl = getBaseUrl();
    console.log(`📍 Using base URL for static params: ${baseUrl}`);
    
    // Try API fetch first (works better on Vercel)
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
      
      const response = await fetch(`${baseUrl}/api/admin/packages`, {
        signal: controller.signal,
        next: { revalidate: 3600 },
        headers: { "Content-Type": "application/json" }
      });
      
      clearTimeout(timeoutId);
      
      if (response.ok) {
        const text = await response.text();
        // Check if response is valid JSON
        if (text && text.trim().length > 0) {
          try {
            const data = JSON.parse(text);
            const packages = (data.packages || []).map((pkg: PackageItem) => ({
              slug: pkg.slug
            }));
            console.log(`✅ Generated static params for ${packages.length} packages via API`);
            return packages;
          } catch (jsonError) {
            console.warn(`⚠️  Invalid JSON response from API:`, text.substring(0, 100));
          }
        }
      } else {
        console.warn(`⚠️  API returned status ${response.status}, trying MongoDB fallback...`);
      }
    } catch (apiError) {
      console.warn(`⚠️  API fetch failed (${apiError instanceof Error ? apiError.message : 'Unknown error'}), trying MongoDB fallback...`);
    }
    
    // Fallback: Query MongoDB directly
    try {
      const packages = await getPackagesFromDB();
      const params = packages.map((pkg) => ({ slug: pkg.slug }));
      console.log(`✅ Generated static params for ${params.length} packages via MongoDB`);
      return params;
    } catch (dbError) {
      console.warn(`⚠️  MongoDB fallback also failed:`, dbError);
    }
    
    // If both fail, return empty array (ISR will handle dynamic rendering)
    console.warn(`⚠️  All methods failed. Returning empty params - pages will be generated on-demand via ISR.`);
    return [];
  } catch (error) {
    console.warn(`⚠️  Error generating static params: ${error instanceof Error ? error.message : 'Unknown error'}. Using ISR fallback.`);
    return [];
  }
}

async function getPackage(slug: string): Promise<PackageItem | null> {
  try {
    const baseUrl = getBaseUrl();
    
    // Try API fetch first
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
      
      const response = await fetch(`${baseUrl}/api/admin/packages`, {
        signal: controller.signal,
        next: { revalidate: 300 }, // Revalidate every 5 minutes
        headers: { "Content-Type": "application/json" }
      });
      
      clearTimeout(timeoutId);
      
      if (response.ok) {
        const data = await response.json();
        const pkg = (data.packages || []).find((p: PackageItem) => p.slug === slug);
        if (pkg) return pkg;
      }
    } catch (apiError) {
      console.warn(`⚠️  API fetch failed, trying MongoDB...`);
    }
    
    // Fallback: Query MongoDB directly
    await connectDB();
    const pkg = await Package.findOne({ slug }).lean();
    return (pkg as unknown as PackageItem) || null;
  } catch (error) {
    console.error("❌ Error fetching package:", error);
    return null;
  }
}

export default async function PackageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = await getPackage(slug);

  if (!pkg) {
    notFound();
  }

  // Handle image URL - ensure it's properly formatted
  let imageUrl = pkg.image;
  
  // If image starts with /uploads, keep it as-is (public folder)
  // If it's a full URL, keep it as-is
  // Otherwise, assume it's a local path and prepend /uploads if needed
  if (!imageUrl.startsWith('http') && !imageUrl.startsWith('/')) {
    imageUrl = `/uploads/${imageUrl}`;
  }
  
  // Fallback to placeholder if image URL is empty
  if (!imageUrl) {
    imageUrl = '/placeholder-package.jpg';
  }

  return (
    <div className="min-h-screen bg-mist pt-28 pb-20 text-ocean dark:bg-[#060C14] dark:text-white">
      <div className="container-premium space-y-8 px-4 md:px-8">
        {/* Back Button */}
        <div>
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 rounded-full border border-sky/30 bg-white/80 px-4 py-2 text-xs font-bold text-ocean shadow-sm transition hover:bg-sunset hover:text-ocean dark:bg-white/10 dark:text-white"
          >
            <ChevronLeft size={16} /> Back to All Packages
          </Link>
        </div>

        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-[36px] border border-sky/30 bg-ocean text-white shadow-premium">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-72 lg:h-auto min-h-[340px] bg-slate-900 overflow-hidden">
              <img
                src={imageUrl}
                alt={pkg.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean/90 via-ocean/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-ocean" />
            </div>

            <div className="flex flex-col justify-between p-8 lg:p-12 space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-sunset px-3.5 py-1 text-xs font-extrabold text-ocean">
                    {pkg.type}
                  </span>
                  <span className="rounded-full bg-white/20 backdrop-blur-md border border-white/20 px-3.5 py-1 text-xs font-medium text-white">
                    {pkg.category}
                  </span>
                  <span className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-sunset">
                    <Star size={14} className="fill-sunset text-sunset" /> {pkg.rating} ({pkg.reviews} reviews)
                  </span>
                </div>

                <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                  {pkg.title}
                </h1>

                <p className="flex items-center gap-2 text-sm text-sky-200">
                  <MapPin size={16} className="text-sunset" /> {pkg.location}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/15">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-slate-400">Duration</span>
                  <span className="flex items-center gap-1.5 text-lg font-bold text-white">
                    <Calendar size={18} className="text-sunset" /> {pkg.duration}
                  </span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-slate-400">Package Rate</span>
                  <span className="text-2xl font-black text-sunset">{pkg.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Details (Itinerary & Inclusions) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Itinerary */}
            <div className="rounded-[32px] border border-sky/30 bg-white p-6 md:p-8 shadow-premium dark:bg-ocean/90 space-y-6">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-2xl bg-sky/15 text-sky">
                  <Clock size={20} />
                </span>
                <h2 className="text-2xl font-bold">Detailed Day-by-Day Itinerary</h2>
              </div>

              <div className="space-y-6 relative before:absolute before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-sky/30">
                {pkg.itinerary.map((item, i) => {
                  // Handle both object format { day, details } and tuple format [dayTitle, dayDesc]
                  const dayTitle = Array.isArray(item) ? item[0] : item.day;
                  const dayDesc = Array.isArray(item) ? item[1] : item.details;
                  
                  return (
                    <div key={i} className="relative pl-10 space-y-1">
                      <span className="absolute left-2 top-1.5 size-4 rounded-full border-2 border-sunset bg-white dark:bg-ocean" />
                      <h3 className="text-base font-bold text-ocean dark:text-white">{dayTitle}</h3>
                      <p className="text-sm leading-relaxed text-ocean/80 dark:text-slate-300">{dayDesc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Inclusions */}
              <div className="rounded-[28px] border border-emerald-500/30 bg-emerald-500/5 p-6 space-y-4">
                <h3 className="flex items-center gap-2 font-bold text-emerald-700 dark:text-emerald-400">
                  <CheckCircle2 size={18} /> Tour Inclusions
                </h3>
                <ul className="space-y-2 text-sm text-ocean/80 dark:text-slate-200">
                  {pkg.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-emerald-500" /> {inc}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="rounded-[28px] border border-rose-500/30 bg-rose-500/5 p-6 space-y-4">
                <h3 className="flex items-center gap-2 font-bold text-rose-700 dark:text-rose-400">
                  <XCircle size={18} /> Tour Exclusions
                </h3>
                <ul className="space-y-2 text-sm text-ocean/80 dark:text-slate-200">
                  {pkg.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-rose-500" /> {exc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar CTA Box */}
          <div className="space-y-6">
            <div className="sticky top-28 rounded-[32px] border border-sky/30 bg-white p-6 shadow-glass dark:bg-ocean/95 space-y-6">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-sunset/20 px-3 py-1 text-xs font-bold text-sunset">
                  <ShieldCheck size={14} /> Certified Tour Guarantee
                </span>
                <h3 className="text-xl font-bold">Book & Customise This Tour</h3>
                <p className="text-xs text-ocean/70 dark:text-slate-300">
                  Speak directly with our Bangalore travel concierges for instant seat holds, custom dates, or group discounts.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={`https://wa.me/919900113691?text=Hi%20HappyFlying!%20I'm%20interested%20in%20the%20${encodeURIComponent(pkg.title)}%20package.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-3.5 font-bold text-white shadow-md transition hover:scale-105"
                >
                  <MessageSquare size={18} /> Inquire on WhatsApp
                </a>

                <a
                  href="tel:9900113691"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-sunset px-4 py-3.5 font-bold text-ocean shadow-md transition hover:scale-105"
                >
                  <PhoneCall size={18} /> Call Advisor (+91 9900113691)
                </a>
              </div>

              <div className="pt-4 border-t border-sky/20 text-center text-xs text-ocean/60 dark:text-slate-400">
                HappyFlying Tours & Travels LLP • No 145, 3rd Floor, 80 Feet Road KHB Colony, 5th Block, Koramangala, Bangalore, Karnataka 560034
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
