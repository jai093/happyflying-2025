"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import {
  Heart,
  Menu,
  MessageCircle,
  Moon,
  PhoneCall,
  Plane,
  Search,
  ShoppingBag,
  Sun,
  UserRound,
  X
} from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  ["Home", "/"],
  ["Packages", "/packages"],
  ["Destinations", "/destinations"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Contact", "/contact"]
];

function BrandLogo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  // Logo JPEG is a wide banner ~3.5:1 ratio with white background
  const dims = {
    sm: "w-[200px] h-[58px]",
    md: "w-[280px] h-[80px]",
    lg: "w-[260px] h-[74px]",
  };
  return (
    <div className={`relative flex-shrink-0 ${dims[size]}`}>
      <Image
        src="/happyflyinglogo.png"
        alt="HappyFlying Tours & Travels LLP"
        fill
        sizes="(max-width: 768px) 200px, 280px"
        className="object-contain object-left"
        priority
      />
    </div>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <div className="min-h-screen bg-mist text-ocean transition-colors duration-500 dark:bg-[#060C14] dark:text-white">
      <motion.div className="fixed left-0 top-0 z-[70] h-0.5 sm:h-1 origin-left bg-gradient-to-r from-sky via-sunset to-teal" style={{ scaleX }} />
      <header className="fixed inset-x-0 top-2 sm:top-3 z-50 px-2 sm:px-3">
        <div className="container-premium flex items-center gap-2 sm:gap-3">
          <Link
            href="/"
            className="shrink-0 overflow-hidden rounded-2xl sm:rounded-[30px] border border-sky/40 bg-white shadow-premium"
            style={{ height: "64px", width: "150px" }}
            aria-label="Happy Flying Tours and Travels home"
          >
            <BrandLogo size="sm" />
          </Link>

          <nav className="glass flex h-14 sm:h-16 flex-1 items-center justify-end rounded-xl sm:rounded-[28px] border-sky/40 px-2 sm:px-4 lg:justify-between gap-1 sm:gap-2">
            <div className="hidden items-center gap-0 lg:gap-1 lg:flex">
              {navItems.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className={`rounded-full px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition hover:bg-sky/15 dark:hover:bg-white/10 ${
                    pathname === href ? "bg-sunset text-ocean shadow-sm dark:bg-sunset dark:text-ocean" : ""
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-1 sm:gap-2">
              <a
                href="tel:9900113691"
                className="hidden items-center gap-1 sm:gap-2 rounded-full bg-sunset px-2 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold text-ocean shadow-sm hover:scale-105 sm:flex"
              >
                <PhoneCall size={12} className="sm:hidden" />
                <span className="hidden sm:inline">Call NOW</span>
              </a>
              <button
                onClick={() => setDark((value) => !value)}
                className="grid size-9 sm:size-10 place-items-center rounded-full bg-white/70 transition hover:scale-105 dark:bg-white/10"
                aria-label="Toggle color mode"
              >
                {dark ? <Sun size={16} className="sm:size-5" /> : <Moon size={16} className="sm:size-5" />}
              </button>
              <button
                onClick={() => setMenuOpen((value) => !value)}
                className="grid size-9 sm:size-10 place-items-center rounded-full bg-white/70 dark:bg-white/10 lg:hidden"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={18} className="sm:size-5" /> : <Menu size={18} className="sm:size-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="fixed inset-x-2 sm:inset-x-3 top-24 sm:top-28 z-40 rounded-xl sm:rounded-[28px] border border-white/30 bg-white/95 p-3 sm:p-4 shadow-premium backdrop-blur-2xl dark:bg-ocean/95 lg:hidden max-h-[calc(100vh-120px)] overflow-y-auto"
          >
            {navItems.map(([label, href]) => (
              <Link key={href} href={href} className="block rounded-lg sm:rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 font-medium text-sm sm:text-base hover:bg-mist dark:hover:bg-white/10">
                {label}
              </Link>
            ))}
            <a
              href="tel:9900113691"
              className="mt-2 sm:mt-3 flex items-center justify-center gap-2 rounded-lg sm:rounded-2xl bg-sunset px-3 sm:px-4 py-2.5 sm:py-3 font-bold text-ocean text-sm sm:text-base shadow-sm"
            >
              <PhoneCall size={14} className="sm:size-4" /> Call NOW
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <main>{children}</main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

function FloatingActions() {
  return (
    <div className="fixed bottom-3 sm:bottom-5 right-3 sm:right-5 z-50 flex flex-col items-end gap-2 sm:gap-3">
      <a
        href="tel:9900113691"
        className="grid size-11 sm:size-14 place-items-center rounded-full bg-sunset text-ocean shadow-premium ring-2 ring-white/60 transition hover:scale-105"
        aria-label="Call us at 9900113691"
        title="Call: +91 9900113691"
      >
        <PhoneCall size={20} className="sm:size-6" />
      </a>
      <a
        href="https://wa.me/919900113691"
        className="grid size-11 sm:size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-premium transition hover:scale-105"
        aria-label="Open WhatsApp"
        title="WhatsApp: +91 9900113691"
      >
        <MessageCircle size={20} className="sm:size-6" />
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-sky/30 bg-[#0A1320] px-4 sm:px-5 py-10 sm:py-14 text-white">
      <div className="container-premium grid gap-6 sm:gap-10 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-3 sm:mb-4 overflow-hidden rounded-lg sm:rounded-[20px] bg-white" style={{ height: "64px", width: "170px" }}>
            <BrandLogo size="sm" />
          </div>
          <p className="max-w-sm text-sm sm:text-base text-white/70">Where every journey takes wing with elegance, care, and unforgettable discovery.</p>
          <p className="mt-2 sm:mt-3 text-xs text-slate-300 leading-relaxed">No 145, 3rd Floor, 80 Feet Road KHB Colony, 5th Block, Koramangala, Bangalore, Karnataka 560034</p>
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-teal font-semibold">Email: operations@happyflyingtravels.com</p>
          <p className="mt-1 text-xs sm:text-sm text-sunset font-semibold">Call: +91 9900113691</p>
          <div className="mt-4 sm:mt-6 flex gap-2 sm:gap-3">
            {["IG", "FB", "X", "YT"].map((item) => (
              <a key={item} href="#" className="grid size-8 sm:size-10 place-items-center rounded-full bg-white/10 text-xs sm:text-sm font-bold hover:bg-white/20">
                {item}
              </a>
            ))}
          </div>
        </div>
        {[
          ["Explore", "Destinations", "Packages", "Services"],
          ["Company", "About"],
          ["Support", "Contact"]
        ].map(([title, ...links]) => (
          <div key={title}>
            <h3 className="mb-3 sm:mb-4 font-semibold text-xs sm:text-base text-sunset">{title}</h3>
            <div className="space-y-2 sm:space-y-3 text-white/70">
              {links.map((link) => (
                <a key={link} href="#" className="block text-xs sm:text-sm hover:text-white">
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}

