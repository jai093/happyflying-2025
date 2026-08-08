"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Calendar, Compass, MapPin, Star, Tag,
  ArrowRight, Search, Sparkles,
} from "lucide-react";

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
  tags: string[];
  description: string;
}

export default function PackagesPage() {
  const [packages, setPackages] = useState<PackageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeType, setActiveType] = useState<"All" | "Indian Tour" | "International Tour">("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    fetch("/api/admin/packages")
      .then((r) => r.json())
      .then((data) => setPackages(data.packages ?? []))
      .catch(() => setPackages([]))
      .finally(() => setLoading(false));
  }, []);

  const categories = useMemo(() => {
    const set = new Set<string>();
    packages.forEach((p) => { if (p.category) set.add(p.category); });
    return ["All", ...Array.from(set)];
  }, [packages]);

  const filtered = useMemo(() => {
    return packages.filter((p) => {
      const matchType = activeType === "All" || p.type === activeType;
      const matchCat = selectedCategory === "All" || p.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch = !q || p.title.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
      return matchType && matchCat && matchSearch;
    });
  }, [packages, activeType, selectedCategory, searchQuery]);

  const visible = filtered.slice(0, visibleCount);

  return (
    <div className="min-h-screen pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 px-3 sm:px-4 md:px-8 bg-mist text-ocean dark:bg-[#060C14] dark:text-white">
      <div className="container-premium space-y-6 sm:space-y-8">

        {/* Header */}
        <div className="max-w-3xl space-y-2 sm:space-y-4 px-2 sm:px-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky/40 bg-sky/10 px-3 sm:px-4 py-1 sm:py-1.5 text-xs font-bold uppercase tracking-widest text-sky dark:text-sky-300">
            <Compass size={14} /> Browse All Packages
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight">
            Explore All
            <span className="bg-gradient-to-r from-sky via-sunset to-teal bg-clip-text text-transparent">
              {" "}Tour Packages
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-ocean/80 dark:text-slate-300 leading-relaxed">
            Browse our complete collection of authentic Indian & International travel itineraries with transparent pricing, luxury stays, and 24/7 concierge support.
          </p>
        </div>

        {loading ? (
          <div className="py-20 sm:py-24 text-center text-ocean/50 dark:text-white/30 text-xs sm:text-sm">
            Loading packages…
          </div>
        ) : packages.length === 0 ? (
          <div className="py-20 sm:py-24 text-center text-ocean/50 dark:text-white/30 text-xs sm:text-sm">
            No packages available yet.
          </div>
        ) : (
          <>
            {/* Search & Filters */}
            <div className="rounded-2xl sm:rounded-[32px] border border-sky/30 bg-white p-4 sm:p-6 shadow-premium dark:bg-ocean/90 space-y-4 sm:space-y-6">
              <div className="relative">
                <Search size={18} className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-ocean/40 dark:text-white/40" />
                <input type="text" value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(12); }}
                  placeholder="Search by destination…"
                  className="w-full rounded-xl sm:rounded-2xl border border-sky/20 bg-mist pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3.5 text-xs sm:text-sm font-medium outline-none focus:ring-2 focus:ring-sky dark:bg-white/10 dark:text-white" />
              </div>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3 border-b border-sky/20 pb-3 sm:pb-4">
                {(["All", "Indian Tour", "International Tour"] as const).map((t) => (
                  <button key={t} onClick={() => { setActiveType(t); setVisibleCount(12); }}
                    className={`rounded-full px-3 sm:px-6 py-1.5 sm:py-2.5 text-xs sm:text-sm font-bold transition-all ${
                      activeType === t
                        ? "bg-sunset text-ocean shadow-md ring-2 ring-sunset/50"
                        : "bg-ocean/5 text-ocean/80 hover:bg-sky/20 dark:bg-white/10 dark:text-white text-xs sm:text-sm"
                    }`}>
                    {t === "All" ? "All" : t === "Indian Tour" ? "🇮🇳 Indian" : "✈️ Intl"}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                {categories.map((cat) => (
                  <button key={cat} onClick={() => { setSelectedCategory(cat); setVisibleCount(12); }}
                    className={`rounded-full px-2.5 sm:px-4 py-1 sm:py-2 text-[11px] sm:text-xs font-bold transition-all ${
                      selectedCategory === cat
                        ? "bg-ocean text-white dark:bg-white dark:text-ocean shadow-sm ring-1 ring-sky"
                        : "bg-mist text-ocean/80 border border-sky/20 hover:bg-sky/15 dark:bg-white/10 dark:text-white"
                    }`}>
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Results count */}
            <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-ocean/70 dark:text-slate-300 px-2 sm:px-0">
              <span>Showing {visible.length} of {filtered.length}</span>
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="text-sky underline text-xs">Clear</button>
              )}
            </div>

            {/* Grid */}
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((pkg, idx) => (
                <PackageCard key={pkg._id} pkg={pkg} index={idx} />
              ))}
            </div>

            {/* Load more */}
            {visibleCount < filtered.length && (
              <div className="pt-6 sm:pt-8 text-center">
                <button onClick={() => setVisibleCount((p) => p + 12)}
                  className="inline-flex items-center gap-2 rounded-full bg-ocean px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-bold text-white shadow-premium transition hover:bg-sunset hover:text-ocean dark:bg-white dark:text-ocean">
                  <Sparkles size={16} /> Load More ({filtered.length - visibleCount})
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function PackageCard({ pkg, index }: { pkg: PackageItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3) }}
      className="group relative flex flex-col overflow-hidden rounded-2xl sm:rounded-[28px] border border-sky/30 bg-white shadow-premium transition-all hover:-translate-y-1.5 hover:shadow-glass dark:bg-ocean/90"
    >
      <div className="relative h-40 sm:h-48 md:h-60 w-full overflow-hidden bg-slate-900">
        <img src={pkg.image} alt={pkg.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean/90 via-ocean/20 to-transparent" />
        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4 flex items-center justify-between gap-2 flex-wrap">
          <div className="flex gap-1.5 sm:gap-2">
            <span className="rounded-full bg-sunset px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-extrabold text-ocean shadow-sm">{pkg.type}</span>
            <span className="rounded-full bg-ocean/90 backdrop-blur-md border border-white/20 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-white">{pkg.category}</span>
          </div>
          <span className="flex items-center gap-0.5 sm:gap-1 rounded-full bg-ocean/80 px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold text-sunset backdrop-blur-md border border-white/20">
            <Star size={11} className="fill-sunset text-sunset" /> {pkg.rating}
          </span>
        </div>
        <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-4 right-2 sm:right-4 flex items-center text-white text-xs sm:text-sm font-semibold">
          <span className="flex items-center gap-1 truncate"><MapPin size={12} className="sm:size-4 text-sunset shrink-0" /> {pkg.location}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-3 sm:p-6 space-y-3 sm:space-y-4">
        <div className="space-y-1 sm:space-y-2">
          <h3 className="text-base sm:text-xl font-bold tracking-tight text-ocean dark:text-white group-hover:text-sky transition line-clamp-2">{pkg.title}</h3>
          <p className="line-clamp-2 text-xs sm:text-sm text-ocean/80 dark:text-slate-300">{pkg.description}</p>
        </div>

        {pkg.tags?.length > 0 && (
          <div className="flex flex-wrap gap-1 sm:gap-1.5">
            {pkg.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="inline-flex items-center gap-0.5 sm:gap-1 rounded-lg bg-sky/10 dark:bg-white/10 px-1.5 sm:px-2.5 py-0.5 sm:py-1 text-[9px] sm:text-[11px] font-medium text-ocean dark:text-slate-200">
                <Tag size={8} className="sm:size-3 text-sunset" /> {tag}
              </span>
            ))}
          </div>
        )}

        <div className="pt-2 sm:pt-4 border-t border-sky/20 flex items-center justify-between text-xs sm:text-sm">
          <div>
            <span className="block text-[10px] sm:text-[11px] font-medium uppercase tracking-wider text-ocean/60 dark:text-slate-400">Duration</span>
            <span className="flex items-center gap-0.5 sm:gap-1 font-bold text-ocean dark:text-white">
              <Calendar size={12} className="sm:size-4 text-sky" /> {pkg.duration}
            </span>
          </div>
          <div className="text-right">
            <span className="block text-[10px] sm:text-[11px] font-medium uppercase tracking-wider text-ocean/60 dark:text-slate-400">From</span>
            <span className="text-sm sm:text-base font-extrabold text-sunset">{pkg.price}</span>
          </div>
        </div>

        <Link href={`/packages/${pkg.slug}`}
          className="mt-1 sm:mt-2 flex w-full items-center justify-center gap-1 sm:gap-2 rounded-lg sm:rounded-2xl bg-ocean px-3 sm:px-4 py-2 sm:py-3 font-bold text-xs sm:text-sm text-white transition hover:bg-sunset hover:text-ocean dark:bg-white dark:text-ocean">
          View <span className="hidden sm:inline">Full</span> Itinerary <ArrowRight size={14} className="sm:size-4" />
        </Link>
      </div>
    </motion.div>
  );
}
