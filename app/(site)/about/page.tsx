"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Award,
  Compass,
  Globe2,
  HeartHandshake,
  MapPin,
  MessageSquare,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Users,
  CheckCircle2
} from "lucide-react";
import { team, timeline } from "@/data/travel";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-8 bg-mist text-ocean dark:bg-[#060C14] dark:text-white">
      <div className="container-premium space-y-16">
        {/* Hero Section */}
        <div className="max-w-4xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky/40 bg-sky/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky dark:text-sky-300">
            <Sparkles size={14} /> About HappyFlying Tours & Travels LLP
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-tight">
            Crafting Unforgettable <span className="bg-gradient-to-r from-sky via-sunset to-teal bg-clip-text text-transparent">Indian & International</span> Experiences
          </h1>
          <p className="text-lg text-ocean/80 dark:text-slate-300 leading-relaxed">
            HappyFlying Tours & Travels LLP is a premier travel agency headquartered in Koramangala, Bangalore. We specialize in handcrafted domestic tours across India and bespoke international holidays tailored to your rhythm, comfort, and budget.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { value: "42+", label: "Countries Covered", icon: Globe2 },
            { value: "38,000+", label: "Happy Travelers", icon: Users },
            { value: "4.9 / 5", label: "Guest Rating", icon: Award },
            { value: "100%", label: "Verified Stays", icon: ShieldCheck }
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="rounded-[28px] border border-sky/30 bg-white p-6 shadow-premium dark:bg-ocean/90 text-center space-y-2">
                <Icon size={24} className="mx-auto text-sunset" />
                <div className="text-3xl font-black text-ocean dark:text-white">{stat.value}</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-ocean/60 dark:text-slate-400">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Our Mission & Values */}
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="rounded-[32px] border border-sky/30 bg-white p-8 shadow-glass dark:bg-ocean/90 space-y-6">
            <h2 className="text-3xl font-bold">Our Mission & Guarantee</h2>
            <p className="text-sm text-ocean/80 dark:text-slate-300 leading-relaxed">
              At HappyFlying Tours & Travels, our vision is simple: to make every trip seamless, authentic, and inspiring. Whether it’s a serene backwater houseboat cruise in Kerala, a spiritual Himalayan pilgrimage, a luxury desert safari in Dubai, or a romantic European vacation, we take care of every detail.
            </p>
            <div className="space-y-3">
              {[
                "100% Transparent Pricing with No Hidden Charges",
                "24/7 Dedicated On-Ground Guest Support",
                "Handpicked 4-Star & 5-Star Hotel & Resort Partnerships",
                "Customized Itineraries for Families, Couples & Groups"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-semibold">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-sky/30 bg-ocean p-8 text-white space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-sunset/20 px-3.5 py-1 text-xs font-bold text-sunset">
              <MapPin size={14} /> Registered Head Office
            </span>
            <h2 className="text-2xl font-bold">Visit Us in Bangalore</h2>
            <div className="space-y-2 text-sm text-slate-300 leading-relaxed">
              <p className="font-semibold text-white">HappyFlying Tours & Travels LLP</p>
              <p>No 145, 3rd Floor, 80 Feet Road, KHB Colony</p>
              <p>5th Block, Koramangala, Bangalore</p>
              <p>Karnataka 560034</p>
            </div>
            <div className="pt-4 border-t border-white/15 flex flex-wrap gap-3">
              <a
                href="tel:9900113691"
                className="flex items-center gap-2 rounded-full bg-sunset px-5 py-2.5 text-xs font-bold text-ocean shadow-md transition hover:scale-105"
              >
                <PhoneCall size={14} /> Call +91 9900113691
              </a>
              <a
                href="https://wa.me/919900113691"
                className="flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-xs font-bold text-white shadow-md transition hover:scale-105"
              >
                <MessageSquare size={14} /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-3xl font-bold">Our Journey of Excellence</h2>
            <p className="text-sm text-ocean/70 dark:text-slate-400">Milestones of creating memorable journeys around the world.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map(([year, text], i) => (
              <div key={i} className="rounded-[28px] border border-sky/30 bg-white p-6 shadow-premium dark:bg-ocean/90 space-y-3">
                <span className="inline-block text-2xl font-black text-sunset">{year}</span>
                <p className="text-sm text-ocean/80 dark:text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
