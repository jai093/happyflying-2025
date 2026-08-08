"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Heart, MapPin, Play, Search, ShieldCheck, Star, Users, Calendar, Sparkles } from "lucide-react";
import { packages, experiences, galleryItems, trustItems } from "@/data/travel";
import { MagneticButton, Reveal, SectionHeading } from "@/components/Motion";
import EnquiryModal from "@/components/EnquiryModal";

const partners = [
  { name: "Emirates", mark: "E", style: "font-serif text-4xl italic", accent: "bg-[#C8102E]" },
  { name: "Qatar Airways", mark: "QA", style: "text-2xl font-black tracking-tight", accent: "bg-[#5C0D34]" },
  { name: "Taj Hotels", mark: "T", style: "font-serif text-4xl", accent: "bg-[#B78C2A]" },
  { name: "Marriott Bonvoy", mark: "M", style: "font-serif text-4xl", accent: "bg-[#A6192E]" },
  { name: "Hilton", mark: "H", style: "text-4xl font-light", accent: "bg-[#003E7E]" },
  { name: "Air India", mark: "AI", style: "text-2xl font-black", accent: "bg-[#DA291C]" },
  { name: "Oberoi Hotels", mark: "O", style: "font-serif text-4xl", accent: "bg-[#8B6F3D]" }
];

export default function HomePage() {
  return (
    <>
      <EnquiryModal delay={3000} displayDuration={60000} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden px-4 sm:px-5 pb-8 sm:pb-10 pt-24 sm:pt-28 text-white">
        <video
          className="absolute inset-0 size-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(10,19,32,0.85),rgba(140,183,204,0.35),rgba(10,19,32,0.9))]" />
        <div className="absolute inset-x-0 bottom-0 h-32 sm:h-48 bg-gradient-to-t from-mist to-transparent dark:from-[#060C14]" />

        <div className="container-premium relative z-10 min-h-[calc(100vh-7rem)] flex items-center px-2 sm:px-4">
          <motion.div initial={{ opacity: 0, y: 42 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="max-w-2xl w-full">
            <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-sky/40 bg-ocean/40 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm backdrop-blur-xl">
              <Play size={14} className="text-sunset flex-shrink-0" />
              <span className="hidden sm:inline">HappyFlying Tours & Travels LLP</span>
              <span className="sm:hidden">HappyFlying Tours & Travels</span>
            </div>
            <h1 className="text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight sm:leading-[1.02] tracking-tight">Explore the World Beyond Limits</h1>
            <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-white/90">Wings to wonder, Indian heritage trails & bespoke international holidays crafted around you.</p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/packages"><MagneticButton>Explore Packages</MagneticButton></Link>
              <Link href="/contact"><MagneticButton variant="ghost">Contact Us</MagneticButton></Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enquiry Modal - Imported and rendered in layout */}

      {/* Smart Travel Planner Section */}
      <section className="section bg-gradient-to-b from-white via-white to-mist dark:from-[#0A1320] dark:via-[#0A1320] dark:to-[#060C14] px-4 sm:px-5">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky/40 bg-sky/10 px-3 sm:px-4 py-1 sm:py-1.5 text-xs font-bold uppercase tracking-widest text-sky dark:text-sky-300">
              <Compass size={14} /> Smart Travel Planner
            </span>
            <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
              HappyFlying
              <span className="block bg-gradient-to-r from-sky via-sunset to-teal bg-clip-text text-transparent">
                TravelIntell AI Assistant
              </span>
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-ocean/80 dark:text-slate-300 px-2 sm:px-0">
              Plan your custom itinerary, discover curated destination insights, and tailor your holiday in real-time.
            </p>
          </div>

          {/* Screenshot/Preview Image */}
          <div className="rounded-2xl sm:rounded-[32px] overflow-hidden border border-sky/30 shadow-premium bg-white dark:bg-ocean/90 mb-6 sm:mb-8">
            <img 
              src="/assets/travelintelll.png" 
              alt="TravelIntell AI Assistant Preview"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* CTA Link to Destinations */}
          <div className="text-center">
            <Link href="/destinations"
              className="inline-flex items-center gap-2 rounded-full bg-ocean px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-bold text-white shadow-premium transition hover:bg-sunset hover:text-ocean dark:bg-white dark:text-ocean">
              <Sparkles size={16} /> Try AI Travel Planner
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted Partners - DARK SECTION */}
      <section className="section overflow-hidden bg-[#0A1320] text-white py-12 sm:py-16 px-4 sm:px-5">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 space-y-4 px-2 sm:px-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky/40 bg-sky/10 px-3 sm:px-4 py-1 sm:py-1.5 text-xs font-bold uppercase tracking-widest text-sky">
              Trusted Partners
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Global travel &
              <span className="block bg-gradient-to-r from-sky via-sunset to-teal bg-clip-text text-transparent">
                airline partners that elevate every journey
              </span>
            </h2>
            <p className="text-base sm:text-lg text-white/80">
              Connecting top-tier airlines, luxury resorts, and on-ground logistics for seamless travel.
            </p>
          </div>
          <div className="relative overflow-x-auto rounded-xl sm:rounded-[34px] border border-sky/40 bg-white/5 py-4 sm:py-6 shadow-glass px-3 sm:px-0">
            <div className="partner-marquee flex w-max gap-3 sm:gap-4 px-3 sm:px-0">
              {[...partners, ...partners].map((partner, index) => (
                <div key={`${partner.name}-${index}`} className="flex h-20 sm:h-24 min-w-48 sm:min-w-56 items-center justify-center rounded-xl sm:rounded-[28px] border border-sky/30 bg-white/10 px-3 sm:px-5 text-center backdrop-blur-xl flex-shrink-0">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className={`grid size-10 sm:size-12 place-items-center rounded-lg sm:rounded-xl text-white shadow-sm flex-shrink-0 ${partner.accent}`}>
                      <span className={partner.style}>{partner.mark}</span>
                    </span>
                    <span className="text-left font-semibold text-white text-xs sm:text-sm">{partner.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - WHITE SECTION */}
      <section className="section bg-white dark:bg-white py-12 sm:py-16 px-4 sm:px-5">
        <div className="container-premium grid gap-8 sm:gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="mb-3 text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-sky">Why Choose HappyFlying</p>
            <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-ocean">Your trusted Bangalore travel partner for domestic & global holidays</h2>
            <p className="mt-4 sm:mt-5 text-base sm:text-lg leading-7 sm:leading-8 text-ocean/70">Headquartered in Koramangala, Bangalore, we bring 10+ years of travel expertise, 100% verified hotels, and 24/7 on-ground assistance to every trip.</p>
          </Reveal>
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
            {trustItems.map(({ icon: Icon, ...item }) => (
              <Reveal key={item.label} className="rounded-xl sm:rounded-[26px] bg-mist p-4 sm:p-6 shadow-sm border border-sky/20">
                <Icon className="mb-2 sm:mb-4 text-sunset" size={24} />
                <h3 className="text-base sm:text-lg font-bold text-ocean">{item.label}</h3>
                <p className="mt-1 text-xs sm:text-sm text-ocean/70">Verified assistance from booking to safe return.</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
