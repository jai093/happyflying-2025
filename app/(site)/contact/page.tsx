"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2, Clock } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "Indian Tour",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile: formData.phone,
          source: "contact_page"
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          destination: "Indian Tour",
          message: ""
        });
      } else {
        setError(data.error || "Failed to submit enquiry. Please try again.");
      }
    } catch (err) {
      setError("Connection error. Please try again.");
      console.error("Submit error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-8 bg-mist text-ocean dark:bg-[#060C14] dark:text-white">
      <div className="container-premium space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky/40 bg-sky/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky dark:text-sky-300">
            <Mail size={14} /> Direct Inquiry & Support
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Get in Touch with <span className="bg-gradient-to-r from-sky via-sunset to-teal bg-clip-text text-transparent">HappyFlying</span>
          </h1>
          <p className="text-lg text-ocean/80 dark:text-slate-300">
            Have questions about a customized Indian tour package or an international vacation? Our Bangalore travel concierges are ready to help you plan your itinerary.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Details Card */}
          <div className="rounded-[32px] border border-sky/30 bg-ocean p-8 text-white shadow-premium space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">HappyFlying Tours & Travels LLP</h2>
              <p className="text-xs text-slate-300">Registered Head Office • Bengaluru, Karnataka</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white/15 text-sunset">
                  <MapPin size={22} />
                </span>
                <div>
                  <h3 className="font-bold text-white text-sm">Office Address</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    No 145, 3rd Floor, 80 Feet Road, KHB Colony, 5th Block, Koramangala, Bangalore, Karnataka 560034
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white/15 text-sunset">
                  <Phone size={22} />
                </span>
                <div>
                  <h3 className="font-bold text-white text-sm">Phone Support</h3>
                  <p className="text-sm text-slate-300">+91 9900113691</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white/15 text-sunset">
                  <Mail size={22} />
                </span>
                <div>
                  <h3 className="font-bold text-white text-sm">Email Inquiry</h3>
                  <p className="text-sm text-slate-300">operations@happyflyingtravels.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white/15 text-sunset">
                  <Clock size={22} />
                </span>
                <div>
                  <h3 className="font-bold text-white text-sm">Business Hours</h3>
                  <p className="text-sm text-slate-300">Monday – Saturday: 9:30 AM – 5:30 PM (IST)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="rounded-[32px] border border-sky/30 bg-white p-8 shadow-glass dark:bg-ocean/90">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <span className="grid size-16 place-items-center rounded-full bg-emerald-500/20 text-emerald-500 mx-auto">
                  <CheckCircle2 size={36} />
                </span>
                <h3 className="text-2xl font-bold">Inquiry Received!</h3>
                <p className="text-sm text-ocean/80 dark:text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out to HappyFlying. One of our travel experts will contact you via phone or WhatsApp within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-2xl font-bold text-ocean dark:text-white mb-4">Request a Package Quote</h2>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ocean/70 dark:text-slate-300 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-sky/30 bg-mist px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky dark:bg-white/10 dark:text-white"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ocean/70 dark:text-slate-300 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full rounded-2xl border border-sky/30 bg-mist px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky dark:bg-white/10 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ocean/70 dark:text-slate-300 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 9876543210"
                      className="w-full rounded-2xl border border-sky/30 bg-mist px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky dark:bg-white/10 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ocean/70 dark:text-slate-300 mb-1">Tour Preference</label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full rounded-2xl border border-sky/30 bg-mist px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky dark:bg-white/10 dark:text-white"
                  >
                    <option value="Indian Tour">🇮🇳 Indian Tour Package</option>
                    <option value="International Tour">✈️ International Tour Package</option>
                    <option value="Custom Honeymoon">💍 Custom Honeymoon</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ocean/70 dark:text-slate-300 mb-1">Message / Travel Details</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share your travel dates, number of guests, or preferred places..."
                    className="w-full rounded-2xl border border-sky/30 bg-mist px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky dark:bg-white/10 dark:text-white"
                  />
                </div>

                {error && (
                  <div className="rounded-lg bg-red-500/10 border border-red-500/30 p-3">
                    <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-sunset px-6 py-4 font-bold text-ocean shadow-md transition hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <Send size={18} /> {isLoading ? "Submitting..." : "Submit Travel Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
