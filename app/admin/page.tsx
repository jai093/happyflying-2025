"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Plus, LogOut, Edit2, Trash2, Package, Globe2,
  MapPin, Clock, IndianRupee, Star, Search, RefreshCw
} from "lucide-react";

interface PackageDoc {
  _id: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  type: string;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [packages, setPackages] = useState<PackageDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"All" | "Indian Tour" | "International Tour">("All");
  const [deleting, setDeleting] = useState<string | null>(null);

  function getToken() {
    return typeof window !== "undefined" ? localStorage.getItem("admin_token") : null;
  }

  const fetchPackages = useCallback(async () => {
    const token = getToken();
    if (!token) { router.push("/admin/login"); return; }
    setLoading(true);
    try {
      console.log("📥 Fetching packages from API...");
      const res = await fetch("/api/admin/packages", {
        headers: { Authorization: `Bearer ${token}` },
        // CRITICAL: Force fresh data from server, bypass all caches
        cache: "no-store",
        next: { revalidate: 0 }
      });
      
      if (res.status === 401) { router.push("/admin/login"); return; }
      
      const data = await res.json();
      console.log(`✅ Fetched ${data.packages?.length || 0} packages from API`);
      setPackages(data.packages ?? []);
    } catch (error) {
      console.error("Failed to load packages:", error);
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    const token = getToken();
    if (!token) { router.push("/admin/login"); return; }
    fetchPackages();
  }, [fetchPackages, router]);

  async function handleDelete(id: string, title: string) {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    const token = getToken();
    setDeleting(id);
    try {
      console.log(`🗑️ Deleting package: ${id}`);
      
      // 1. Attempt delete
      const response = await fetch(`/api/admin/packages/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
        // Force no-cache to prevent browser caching the DELETE request
        cache: "no-store",
      });

      // 2. Check if delete succeeded
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Delete failed");
      }

      const result = await response.json();
      console.log(`✅ Delete succeeded:`, result);

      // 3. CRITICAL: Remove from state immediately
      setPackages((prev) => {
        const updated = prev.filter((p) => p._id !== id);
        console.log(`📊 Updated state - removed ${id}, now ${updated.length} packages`);
        return updated;
      });

      // 4. Wait 100ms then force refresh from API with no-cache
      await new Promise(resolve => setTimeout(resolve, 100));
      
      console.log(`🔄 Force refreshing packages list from API...`);
      const refreshRes = await fetch("/api/admin/packages", {
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
        next: { revalidate: 0 }
      });
      
      if (refreshRes.ok) {
        const refreshData = await refreshRes.json();
        console.log(`✅ Refreshed - now ${refreshData.packages?.length || 0} packages in DB`);
        setPackages(refreshData.packages ?? []);
      }

    } catch (error) {
      console.error("❌ Delete error:", error);
      alert(error instanceof Error ? error.message : "Delete failed");

      // On error: Force refresh to sync with DB
      const token = getToken();
      if (token) {
        const refreshRes = await fetch("/api/admin/packages", {
          headers: { Authorization: `Bearer ${token}` },
          cache: "no-store",
          next: { revalidate: 0 }
        });
        if (refreshRes.ok) {
          const refreshData = await refreshRes.json();
          setPackages(refreshData.packages ?? []);
        }
      }

    } finally {
      setDeleting(null);
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    localStorage.removeItem("admin_token");
    router.push("/admin/login");
  }

  const filtered = packages.filter((p) => {
    const matchType = filter === "All" || p.type === filter;
    const q = search.toLowerCase();
    const matchSearch = !q || p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q);
    return matchType && matchSearch;
  });

  const indianCount = packages.filter((p) => p.type === "Indian Tour").length;
  const intlCount = packages.filter((p) => p.type === "International Tour").length;

  return (
    <div className="min-h-screen bg-[#060C14]">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0A1320] px-4 sm:px-6 py-4 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="size-9 rounded-xl bg-sunset grid place-items-center shrink-0">
              <Package size={18} className="text-ocean" />
            </div>
            <div className="min-w-0">
              <h1 className="font-bold text-white text-sm sm:text-base leading-tight truncate">HappyFlying Admin</h1>
              <p className="text-xs text-slate-400">Tour Package Manager</p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <Link
              href="/admin/packages/new"
              className="flex items-center gap-2 rounded-xl bg-sunset px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold text-ocean hover:bg-[#ffe45c] transition flex-1 sm:flex-none justify-center sm:justify-start"
            >
              <Plus size={16} /> <span className="hidden sm:inline">Add Package</span><span className="sm:hidden">Add</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-xl border border-white/10 px-3 sm:px-4 py-2 text-xs sm:text-sm text-slate-300 hover:bg-white/10 transition"
            >
              <LogOut size={16} /> <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {[
            { label: "Total Packages", value: packages.length, icon: Package, color: "text-sunset" },
            { label: "Indian Tours", value: indianCount, icon: MapPin, color: "text-emerald-400" },
            { label: "International", value: intlCount, icon: Globe2, color: "text-sky-400" },
            { label: "Avg Rating", value: packages.length ? (packages.reduce((s, p) => s + p.rating, 0) / packages.length).toFixed(1) : "—", icon: Star, color: "text-yellow-400" },
          ].map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="rounded-[20px] bg-white/5 border border-white/10 p-4 sm:p-5">
              <Icon size={20} className={`${color} mb-2 sm:mb-3`} />
              <div className="text-xl sm:text-2xl font-black text-white">{value}</div>
              <div className="text-xs text-slate-400 mt-0.5 line-clamp-2">{label}</div>
            </div>
          ))}
        </div>

        {/* Toolbar */}
        <div className="flex flex-col gap-3 items-stretch">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search packages…"
              className="w-full rounded-xl bg-white/5 border border-white/10 pl-9 pr-4 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-sunset/50"
            />
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            {(["All", "Indian Tour", "International Tour"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`rounded-xl px-3 sm:px-4 py-2 text-xs font-bold transition whitespace-nowrap ${
                  filter === t ? "bg-sunset text-ocean" : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10"
                }`}
              >
                {t === "All" ? "All" : t === "Indian Tour" ? "🇮🇳 Indian" : "✈️ International"}
              </button>
            ))}
            <button
              onClick={fetchPackages}
              className="rounded-xl border border-white/10 p-2 text-slate-400 hover:bg-white/10 transition ml-auto sm:ml-0"
              title="Refresh"
            >
              <RefreshCw size={16} />
            </button>
          </div>
        </div>

        {/* Table/Cards */}
        <div className="rounded-[24px] border border-white/10 overflow-hidden">
          {loading ? (
            <div className="py-20 text-center text-slate-400 text-sm">Loading packages…</div>
          ) : filtered.length === 0 ? (
            <div className="py-20 text-center">
              <Package size={40} className="text-slate-600 mx-auto mb-3" />
              <p className="text-slate-400">No packages found.</p>
              <Link href="/admin/packages/new" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-sunset px-4 py-2 text-sm font-bold text-ocean">
                <Plus size={14} /> Add your first package
              </Link>
            </div>
          ) : (
            <>
              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white/5 border-b border-white/10">
                    <tr>
                      {["Package", "Type", "Duration", "Price", "Rating", "Actions"].map((h) => (
                        <th key={h} className="px-5 py-3.5 text-left text-xs font-bold uppercase tracking-wider text-slate-400">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filtered.map((pkg) => (
                      <tr key={pkg._id} className="hover:bg-white/[0.03] transition">
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="size-12 rounded-xl overflow-hidden bg-slate-800 shrink-0">
                              <img src={pkg.image} alt={pkg.title} className="size-full object-cover" />
                            </div>
                            <div>
                              <div className="font-semibold text-white text-sm line-clamp-1">{pkg.title}</div>
                              <div className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                                <MapPin size={11} /> {pkg.location}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-4">
                          <span className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-bold ${pkg.type === "Indian Tour" ? "bg-emerald-500/15 text-emerald-400" : "bg-sky-500/15 text-sky-400"}`}>
                            {pkg.type === "Indian Tour" ? "🇮🇳" : "✈️"} {pkg.type}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-sm text-slate-300">
                          <span className="flex items-center gap-1"><Clock size={13} className="text-slate-500" />{pkg.duration}</span>
                        </td>
                        <td className="px-5 py-4 text-sm font-bold text-sunset">
                          <span className="flex items-center gap-1"><IndianRupee size={13} />{pkg.price.replace("₹", "")}</span>
                        </td>
                        <td className="px-5 py-4">
                          <span className="flex items-center gap-1 text-sm text-yellow-400 font-bold">
                            <Star size={13} className="fill-yellow-400" /> {pkg.rating}
                          </span>
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-2">
                            <Link
                              href={`/admin/packages/${pkg._id}/edit`}
                              className="rounded-lg bg-white/10 p-2 text-slate-300 hover:bg-white/20 hover:text-white transition"
                              title="Edit"
                            >
                              <Edit2 size={14} />
                            </Link>
                            <button
                              onClick={() => handleDelete(pkg._id, pkg.title)}
                              disabled={deleting === pkg._id}
                              className="rounded-lg bg-red-500/10 p-2 text-red-400 hover:bg-red-500/20 transition disabled:opacity-50"
                              title="Delete"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile/Tablet Cards */}
              <div className="md:hidden divide-y divide-white/5">
                {filtered.map((pkg) => (
                  <div key={pkg._id} className="p-4 space-y-3 hover:bg-white/[0.03] transition">
                    <div className="flex gap-3">
                      <div className="size-16 rounded-xl overflow-hidden bg-slate-800 shrink-0">
                        <img src={pkg.image} alt={pkg.title} className="size-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-white text-sm line-clamp-2">{pkg.title}</h3>
                        <div className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                          <MapPin size={11} /> {pkg.location}
                        </div>
                        <span className={`inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-bold mt-2 ${pkg.type === "Indian Tour" ? "bg-emerald-500/15 text-emerald-400" : "bg-sky-500/15 text-sky-400"}`}>
                          {pkg.type === "Indian Tour" ? "🇮🇳" : "✈️"} {pkg.type}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="rounded-lg bg-white/5 p-2">
                        <div className="text-slate-400 mb-1">Duration</div>
                        <div className="text-slate-200 font-semibold line-clamp-1">{pkg.duration}</div>
                      </div>
                      <div className="rounded-lg bg-white/5 p-2">
                        <div className="text-slate-400 mb-1">Price</div>
                        <div className="text-sunset font-bold line-clamp-1">{pkg.price.replace("₹", "")}</div>
                      </div>
                      <div className="rounded-lg bg-white/5 p-2">
                        <div className="text-slate-400 mb-1">Rating</div>
                        <div className="text-yellow-400 font-bold flex items-center gap-1">
                          <Star size={11} className="fill-yellow-400" /> {pkg.rating}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2 border-t border-white/10">
                      <Link
                        href={`/admin/packages/${pkg._id}/edit`}
                        className="flex-1 rounded-lg bg-white/10 px-3 py-2 text-center text-xs text-slate-300 hover:bg-white/20 hover:text-white transition font-semibold"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(pkg._id, pkg.title)}
                        disabled={deleting === pkg._id}
                        className="flex-1 rounded-lg bg-red-500/10 px-3 py-2 text-center text-xs text-red-400 hover:bg-red-500/20 transition font-semibold disabled:opacity-50"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <p className="text-xs text-slate-600 text-center">
          Showing {filtered.length} of {packages.length} packages · HappyFlying Admin Portal
        </p>
      </main>
    </div>
  );
}
