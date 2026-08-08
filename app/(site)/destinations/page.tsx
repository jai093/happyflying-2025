"use client";

import { Compass } from "lucide-react";

export default function DestinationsPage() {
  return (
    <div className="min-h-screen pb-20 bg-mist text-ocean dark:bg-[#060C14] dark:text-white">
      {/* TravelIntell AI Assistant Section */}
      <section className="pt-28 px-4 md:px-8 bg-gradient-to-b from-white via-white to-mist dark:from-[#0A1320] dark:via-[#0A1320] dark:to-[#060C14]">
        <div className="container-premium space-y-8 pb-12">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky/40 bg-sky/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky dark:text-sky-300">
              <Compass size={14} /> Smart Travel Planner
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              HappyFlying
              <span className="block bg-gradient-to-r from-sky via-sunset to-teal bg-clip-text text-transparent">
                TravelIntell AI Assistant
              </span>
            </h1>
            <p className="text-lg text-ocean/80 dark:text-slate-300">
              Plan your custom itinerary, discover curated destination insights, and tailor your holiday in real-time.
            </p>
          </div>

          {/* Embedded TravelIntell */}
          <div style={{ width: "100%", maxWidth: "1400px", margin: "0 auto", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
            <iframe
              src="https://happy-flying.vercel.app/?embed=true"
              title="TravelIntell by HappyFlying Tours & Travels"
              loading="eager"
              // @ts-ignore
              fetchpriority="high"
              style={{ width: "100%", height: "1000px", border: "none", display: "block", minHeight: "900px" }}
              allow="clipboard-write"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
