"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Download, RefreshCw, Database, Trash2 } from "lucide-react";

interface Enquiry {
  id: string;
  index: number;
  name: string;
  email: string;
  mobile: string;
  source: string;
  submittedAt: string;
}

export default function EnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [exporting, setExporting] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    // Initial fetch
    fetchEnquiries();
    
    // Poll for new enquiries every 3 seconds for real-time updates
    const pollInterval = setInterval(() => {
      console.log("🔄 Polling for new enquiries...");
      fetchEnquiries();
    }, 3000);
    
    return () => clearInterval(pollInterval);
  }, []);

  const fetchEnquiries = async () => {
    try {
      setLoading(true);
      setError("");
      
      console.log("📥 Fetching enquiries with cache bypass...");
      
      // CRITICAL: Add timestamp to URL to bypass browser cache
      const timestamp = new Date().getTime();
      const response = await fetch(`/api/admin/enquiries-list?t=${timestamp}`, {
        // Force fresh data from server
        cache: "no-store",
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          "Pragma": "no-cache",
          "Expires": "0"
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      
      const data = await response.json();

      if (data.success) {
        console.log(`✅ Loaded ${data.enquiries?.length || 0} enquiries (fresh from DB)`);
        setEnquiries(data.enquiries || []);
      } else {
        setError(data.message || "Failed to fetch enquiries");
      }
    } catch (err) {
      console.error("❌ Fetch error:", err);
      setError(`Connection error: ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    console.log("🔄 Manual refresh triggered");
    fetchEnquiries();
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Delete enquiry from ${name}?`)) return;

    try {
      setDeleting(id);
      setError("");
      
      console.log(`🗑️ Deleting enquiry: ${id}`);
      const response = await fetch(`/api/admin/enquiries/${id}`, {
        method: "DELETE",
        cache: "no-store"
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }

      const data = await response.json();
      
      if (data.success) {
        console.log(`✅ Deleted enquiry ${id}`);
        
        // Remove from state immediately
        setEnquiries((prev) => {
          const updated = prev.filter(e => e.id !== id);
          console.log(`📊 Updated state - removed ${id}, now ${updated.length} enquiries`);
          return updated;
        });
        
        setSuccess(`Deleted enquiry from ${name}`);
        setTimeout(() => setSuccess(""), 3000);
        
        // Force refresh from API with cache bypass
        await new Promise(resolve => setTimeout(resolve, 100));
        console.log("🔄 Force refreshing enquiries...");
        
        const timestamp = new Date().getTime();
        const refreshRes = await fetch(`/api/admin/enquiries-list?t=${timestamp}`, {
          cache: "no-store",
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            "Pragma": "no-cache",
            "Expires": "0"
          }
        });
        
        if (refreshRes.ok) {
          const refreshData = await refreshRes.json();
          console.log(`✅ Refreshed - now ${refreshData.enquiries?.length || 0} enquiries in DB`);
          setEnquiries(refreshData.enquiries || []);
        }
      } else {
        setError(data.error || "Failed to delete enquiry");
      }
    } catch (err) {
      console.error("❌ Delete error:", err);
      setError(`Failed to delete: ${err instanceof Error ? err.message : 'Unknown error'}`);
      
      // Also refresh to ensure UI is in sync
      await new Promise(resolve => setTimeout(resolve, 100));
      const timestamp = new Date().getTime();
      const refreshRes = await fetch(`/api/admin/enquiries-list?t=${timestamp}`, {
        cache: "no-store",
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          "Pragma": "no-cache",
          "Expires": "0"
        }
      });
      
      if (refreshRes.ok) {
        const refreshData = await refreshRes.json();
        setEnquiries(refreshData.enquiries || []);
      }
    } finally {
      setDeleting(null);
    }
  };

  const handleExport = async () => {
    try {
      setExporting(true);
      setError("");
      
      console.log("📊 Requesting Excel export...");
      const response = await fetch("/api/admin/enquiries/export", { method: "POST" });

      if (!response.ok) {
        throw new Error(`Export failed: HTTP ${response.status}`);
      }

      const blob = await response.blob();
      console.log(`✅ Excel file generated: ${blob.size} bytes`);

      // Trigger browser download
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `enquiries_${new Date().toISOString().slice(0, 10)}.xlsx`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      console.log("✅ Download initiated");
      setSuccess("Excel file downloaded successfully");
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      console.error("❌ Export error:", err);
      setError(`Failed to export Excel: ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-8 bg-mist text-ocean dark:bg-[#060C14] dark:text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Database size={32} className="text-sky" />
            <h1 className="text-4xl font-bold">Enquiries Management</h1>
          </div>
          <p className="text-lg text-ocean/70 dark:text-white/70">
            View and manage all customer enquiries. Export data for AI voice agent integration.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="rounded-[32px] border border-sky/30 bg-white p-6 shadow-premium dark:bg-ocean/90 flex flex-wrap gap-4">
          <button
            onClick={handleExport}
            disabled={exporting || enquiries.length === 0}
            className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-sky via-sunset to-teal px-6 py-3 font-bold text-white shadow-md transition hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download size={20} />
            {exporting ? "Exporting..." : "Export to Excel"}
          </button>
          <button
            onClick={handleRefresh}
            disabled={loading}
            className="flex items-center gap-2 rounded-2xl bg-sky/20 px-6 py-3 font-semibold text-sky transition hover:bg-sky/30 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <RefreshCw size={20} className={loading ? "animate-spin" : ""} />
            {loading ? "Refreshing..." : "Refresh"}
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="rounded-[32px] border border-red-300/50 bg-red-50 p-4 dark:bg-red-900/20 dark:border-red-700/50">
            <p className="text-red-700 dark:text-red-400">❌ {error}</p>
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="rounded-[32px] border border-green-300/50 bg-green-50 p-4 dark:bg-green-900/20 dark:border-green-700/50">
            <p className="text-green-700 dark:text-green-400">✅ {success}</p>
          </div>
        )}

        {/* Enquiries Table */}
        <div className="rounded-[32px] border border-sky/30 bg-white shadow-premium dark:bg-ocean/90 overflow-hidden">
          <div className="p-6 border-b border-sky/20">
            <h2 className="text-2xl font-bold">All Enquiries</h2>
            <p className="text-sm text-ocean/60 dark:text-white/60 mt-1">
              Total: <strong>{enquiries.length}</strong> enquiries
            </p>
          </div>

          {loading ? (
            <div className="p-8 text-center">
              <div className="inline-block">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sky"></div>
              </div>
              <p className="text-ocean/70 dark:text-white/70 mt-3">Loading enquiries...</p>
            </div>
          ) : enquiries.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-ocean/70 dark:text-white/70">No enquiries yet.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-mist dark:bg-white/5 border-b border-sky/20">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-ocean/70 dark:text-white/70">#</th>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-ocean/70 dark:text-white/70">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-ocean/70 dark:text-white/70">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-ocean/70 dark:text-white/70">Mobile</th>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-ocean/70 dark:text-white/70">Source</th>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-ocean/70 dark:text-white/70">Date</th>
                    <th className="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider text-ocean/70 dark:text-white/70">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sky/10">
                  {enquiries.map((enquiry) => (
                    <tr key={enquiry.id} className="hover:bg-mist/50 dark:hover:bg-white/5 transition">
                      <td className="px-6 py-4 text-sm font-semibold text-sky">{enquiry.index}</td>
                      <td className="px-6 py-4 text-sm font-medium text-ocean dark:text-white">{enquiry.name}</td>
                      <td className="px-6 py-4 text-sm text-ocean/70 dark:text-white/70">{enquiry.email}</td>
                      <td className="px-6 py-4 text-sm text-ocean/70 dark:text-white/70">{enquiry.mobile}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                          enquiry.source === "Homepage Popup"
                            ? "bg-sky/20 text-sky"
                            : "bg-sunset/20 text-sunset"
                        }`}>
                          {enquiry.source}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-ocean/60 dark:text-white/60">{enquiry.submittedAt}</td>
                      <td className="px-6 py-4 text-sm text-center">
                        <button
                          onClick={() => handleDelete(enquiry.id, enquiry.name)}
                          disabled={deleting === enquiry.id}
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-red-500/20 text-red-600 dark:text-red-400 hover:bg-red-500/30 transition disabled:opacity-50 disabled:cursor-not-allowed text-xs font-semibold"
                        >
                          <Trash2 size={14} />
                          {deleting === enquiry.id ? "Deleting..." : "Delete"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* AI Agent Integration Info */}
        <div className="rounded-[32px] border border-sunset/30 bg-sunset/5 p-6 dark:bg-sunset/10">
          <h3 className="font-bold text-sunset mb-3">🤖 AI Voice Agent Integration</h3>
          <ol className="space-y-2 text-sm text-ocean/70 dark:text-white/70">
            <li><strong>1.</strong> Click "Export to Excel" to download the latest enquiry data</li>
            <li><strong>2.</strong> Use the file with your AI voice agent tool</li>
            <li><strong>3.</strong> Come back anytime to export fresh data</li>
          </ol>
        </div>

        {/* Back to Admin */}
        <div className="text-center">
          <Link
            href="/admin"
            className="inline-flex items-center gap-2 rounded-2xl bg-sky/20 px-6 py-3 font-semibold text-sky transition hover:bg-sky/30"
          >
            ← Back to Admin Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
