"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft, Upload, Plus, Trash2, Save,
  ImageIcon, AlertCircle, CheckCircle2, Loader2
} from "lucide-react";

interface ItineraryRow { day: string; details: string; }

interface FormState {
  title: string;
  location: string;
  duration: string;
  price: string;
  type: "Indian Tour" | "International Tour";
  category: string;
  rating: number;
  reviews: number;
  image: string;
  tags: string;
  description: string;
  itinerary: ItineraryRow[];
  inclusions: string;
  exclusions: string;
}

const CATEGORIES = [
  "Heritage & Nature", "Heritage & Culture", "Pilgrimage & Spiritual",
  "Beach & Backwaters", "Wildlife & Adventure", "Honeymoon & Luxury",
];

const EMPTY_FORM: FormState = {
  title: "", location: "", duration: "", price: "",
  type: "Indian Tour", category: "Heritage & Nature",
  rating: 4.8, reviews: 0, image: "", tags: "",
  description: "", itinerary: [{ day: "Day 1", details: "" }],
  inclusions: "Private AC Car / Transport\nDaily Breakfast & Meals\n3-Star / 4-Star Verified Stay\nDriver Allowance & Tolls",
  exclusions: "Airfare / Train Tickets\nPersonal Laundry & Drinks\nMonument Entry Fees",
};

function getToken() {
  return typeof window !== "undefined" ? localStorage.getItem("admin_token") : null;
}

export default function PackageForm({
  mode,
  packageId,
}: {
  mode: "create" | "edit";
  packageId?: string;
}) {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [loadingPackage, setLoadingPackage] = useState(mode === "edit");
  const [toast, setToast] = useState<{ type: "success" | "error"; msg: string } | null>(null);
  const [imagePreview, setImagePreview] = useState("");

  // Load existing package for edit mode
  useEffect(() => {
    if (mode !== "edit" || !packageId) return;
    const token = getToken();
    if (!token) { router.push("/admin/login"); return; }

    fetch(`/api/admin/packages/${packageId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => r.json())
      .then((data) => {
        const p = data.package;
        if (!p) return;
        setForm({
          title: p.title ?? "",
          location: p.location ?? "",
          duration: p.duration ?? "",
          price: p.price ?? "",
          type: p.type ?? "Indian Tour",
          category: p.category ?? "Heritage & Nature",
          rating: p.rating ?? 4.8,
          reviews: p.reviews ?? 0,
          image: p.image ?? "",
          tags: (p.tags ?? []).join(", "),
          description: p.description ?? "",
          itinerary: (p.itinerary ?? []).map((it: { day: string; details: string }) => ({
            day: it.day,
            details: it.details,
          })),
          inclusions: (p.inclusions ?? []).join("\n"),
          exclusions: (p.exclusions ?? []).join("\n"),
        });
        setImagePreview(p.image ?? "");
      })
      .catch(() => showToast("error", "Failed to load package"))
      .finally(() => setLoadingPackage(false));
  }, [mode, packageId, router]);

  function showToast(type: "success" | "error", msg: string) {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 4000);
  }

  function set(key: keyof FormState, value: unknown) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  // Itinerary helpers
  function addItineraryRow() {
    setForm((prev) => ({
      ...prev,
      itinerary: [
        ...prev.itinerary,
        { day: `Day ${prev.itinerary.length + 1}`, details: "" },
      ],
    }));
  }

  function removeItineraryRow(i: number) {
    setForm((prev) => ({
      ...prev,
      itinerary: prev.itinerary.filter((_, idx) => idx !== i),
    }));
  }

  function updateItinerary(i: number, key: keyof ItineraryRow, val: string) {
    setForm((prev) => {
      const rows = [...prev.itinerary];
      rows[i] = { ...rows[i], [key]: val };
      return { ...prev, itinerary: rows };
    });
  }

  // Image upload
  async function handleImageUpload(file: File) {
    const token = getToken();
    if (!token) { router.push("/admin/login"); return; }
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("image", file);
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: fd,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Upload failed");
      set("image", data.url);
      setImagePreview(data.url);
      showToast("success", "Image uploaded successfully");
    } catch (err: unknown) {
      showToast("error", err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const token = getToken();
    if (!token) { router.push("/admin/login"); return; }

    if (!form.image) {
      showToast("error", "Please upload a package image");
      return;
    }

    setSaving(true);
    try {
      const payload = {
        ...form,
        tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
        inclusions: form.inclusions.split("\n").map((s) => s.trim()).filter(Boolean),
        exclusions: form.exclusions.split("\n").map((s) => s.trim()).filter(Boolean),
      };

      const url = mode === "create"
        ? "/api/admin/packages"
        : `/api/admin/packages/${packageId}`;
      const method = mode === "create" ? "POST" : "PUT";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Save failed");

      showToast("success", mode === "create" ? "Package created!" : "Package updated!");
      setTimeout(() => router.push("/admin"), 1200);
    } catch (err: unknown) {
      showToast("error", err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  }

  if (loadingPackage) {
    return (
      <div className="min-h-screen bg-[#060C14] flex items-center justify-center">
        <Loader2 size={32} className="text-sunset animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#060C14]">
      {/* Toast */}
      {toast && (
        <div className={`fixed top-5 right-5 z-50 flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold shadow-xl ${
          toast.type === "success" ? "bg-emerald-500 text-white" : "bg-red-500 text-white"
        }`}>
          {toast.type === "success" ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
          {toast.msg}
        </div>
      )}

      {/* Header */}
      <header className="border-b border-white/10 bg-[#0A1320] px-4 sm:px-6 py-4 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link href="/admin" className="rounded-xl border border-white/10 p-2 text-slate-400 hover:bg-white/10 transition shrink-0">
              <ArrowLeft size={16} />
            </Link>
            <h1 className="font-bold text-white text-sm sm:text-base truncate">
              {mode === "create" ? "Add New Package" : "Edit Package"}
            </h1>
          </div>
          <button
            form="package-form"
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 rounded-xl bg-sunset px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold text-ocean hover:bg-[#ffe45c] transition disabled:opacity-60 w-full sm:w-auto justify-center sm:justify-start"
          >
            {saving ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />}
            {saving ? "Saving…" : "Save Package"}
          </button>
        </div>
      </header>

      <form id="package-form" onSubmit={handleSubmit} className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8 pb-10">

        {/* ── Section: Basic Info ── */}
        <Section title="Basic Information">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            <Field label="Package Title *">
              <input required value={form.title} onChange={(e) => set("title", e.target.value)}
                placeholder="e.g. Kerala Backwaters Tour" className={inputCls} />
            </Field>
            <Field label="Location / Destination *">
              <input required value={form.location} onChange={(e) => set("location", e.target.value)}
                placeholder="e.g. Kerala, India" className={inputCls} />
            </Field>
            <Field label="Duration *">
              <input required value={form.duration} onChange={(e) => set("duration", e.target.value)}
                placeholder="e.g. 5 Days / 4 Nights" className={inputCls} />
            </Field>
            <Field label="Price *">
              <input required value={form.price} onChange={(e) => set("price", e.target.value)}
                placeholder="e.g. ₹18,300 / person" className={inputCls} />
            </Field>
            <Field label="Tour Type *">
              <select value={form.type} onChange={(e) => set("type", e.target.value as FormState["type"])} className={inputCls}>
                <option value="Indian Tour">🇮🇳 Indian Tour</option>
                <option value="International Tour">✈️ International Tour</option>
              </select>
            </Field>
            <Field label="Category *">
              <select value={form.category} onChange={(e) => set("category", e.target.value)} className={inputCls}>
                {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </Field>
            <Field label="Rating (0–5)">
              <input type="number" min={0} max={5} step={0.1} value={form.rating}
                onChange={(e) => set("rating", parseFloat(e.target.value))} className={inputCls} />
            </Field>
            <Field label="Review Count">
              <input type="number" min={0} value={form.reviews}
                onChange={(e) => set("reviews", parseInt(e.target.value))} className={inputCls} />
            </Field>
            <Field label="Tags (comma-separated)" className="col-span-1 sm:col-span-2">
              <input value={form.tags} onChange={(e) => set("tags", e.target.value)}
                placeholder="e.g. Heritage & Nature, 5 Days, Indian Tour" className={inputCls} />
            </Field>
          </div>
        </Section>

        {/* ── Section: Image ── */}
        <Section title="Package Image">
          <div className="flex flex-col sm:flex-row gap-5 items-start">
            {/* Preview */}
            <div className="w-full sm:w-48 h-40 sm:h-36 rounded-2xl overflow-hidden bg-white/5 border border-white/10 shrink-0 flex items-center justify-center">
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" className="w-full h-full object-cover"
                  onError={() => setImagePreview("")} />
              ) : (
                <ImageIcon size={32} className="text-slate-600" />
              )}
            </div>

            <div className="flex-1 w-full space-y-3">
              <input ref={fileRef} type="file" accept="image/jpeg,image/png,image/webp"
                className="hidden"
                onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImageUpload(f); }} />
              <button type="button" onClick={() => fileRef.current?.click()}
                disabled={uploading}
                className="flex items-center gap-2 rounded-xl border border-dashed border-white/20 bg-white/5 px-4 sm:px-5 py-3 text-xs sm:text-sm text-slate-300 hover:bg-white/10 transition disabled:opacity-50 w-full justify-center">
                {uploading ? <Loader2 size={16} className="animate-spin" /> : <Upload size={16} />}
                {uploading ? "Uploading…" : "Upload Image (JPG / PNG / WebP, max 5MB)"}
              </button>
              <p className="text-xs text-slate-500">Or enter an image URL directly:</p>
              <input value={form.image} onChange={(e) => { set("image", e.target.value); setImagePreview(e.target.value); }}
                placeholder="/assets/images/coorg.jpeg or https://..." className={inputCls} />
            </div>
          </div>
        </Section>

        {/* ── Section: Description ── */}
        <Section title="Description *">
          <textarea required rows={4} value={form.description}
            onChange={(e) => set("description", e.target.value)}
            placeholder="Short summary of the tour shown on the package card…"
            className={`${inputCls} resize-none`} />
        </Section>

        {/* ── Section: Itinerary ── */}
        <Section title="Day-by-Day Itinerary">
          <div className="space-y-3">
            {form.itinerary.map((row, i) => (
              <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-4 space-y-3">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <input value={row.day} onChange={(e) => updateItinerary(i, "day", e.target.value)}
                    placeholder="Day 1 – Arrival" className={`${inputCls} flex-1`} />
                  <button type="button" onClick={() => removeItineraryRow(i)}
                    disabled={form.itinerary.length === 1}
                    className="rounded-xl bg-red-500/10 p-2 text-red-400 hover:bg-red-500/20 transition disabled:opacity-30 w-full sm:w-auto">
                    <Trash2 size={14} />
                  </button>
                </div>
                <textarea rows={3} value={row.details}
                  onChange={(e) => updateItinerary(i, "details", e.target.value)}
                  placeholder="Describe the day's activities…"
                  className={`${inputCls} resize-none`} />
              </div>
            ))}
            <button type="button" onClick={addItineraryRow}
              className="flex items-center gap-2 rounded-xl border border-dashed border-white/20 bg-white/5 px-4 py-3 text-xs sm:text-sm text-slate-400 hover:bg-white/10 transition w-full justify-center">
              <Plus size={16} /> Add Day
            </button>
          </div>
        </Section>

        {/* ── Section: Inclusions & Exclusions ── */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
          <Section title="Inclusions (one per line)">
            <textarea rows={5} value={form.inclusions}
              onChange={(e) => set("inclusions", e.target.value)}
              placeholder="Private AC Car / Transport&#10;Daily Breakfast & Meals"
              className={`${inputCls} resize-none`} />
          </Section>
          <Section title="Exclusions (one per line)">
            <textarea rows={5} value={form.exclusions}
              onChange={(e) => set("exclusions", e.target.value)}
              placeholder="Airfare / Train Tickets&#10;Personal Expenses"
              className={`${inputCls} resize-none`} />
          </Section>
        </div>

      </form>
    </div>
  );
}

// ── Helpers ────────────────────────────────────────────
const inputCls =
  "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-sunset/50";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 space-y-4">
      <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">{title}</h2>
      {children}
    </div>
  );
}

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`space-y-1.5 ${className}`}>
      <label className="block text-xs font-semibold text-slate-400">{label}</label>
      {children}
    </div>
  );
}
