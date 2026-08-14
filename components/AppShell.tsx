"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import {
  Menu,
  MessageCircle,
  PhoneCall,
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
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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


  return (
    <div className="min-h-screen bg-mist text-ocean transition-colors duration-500">
      <motion.div className="fixed left-0 top-0 z-[70] h-0.5 sm:h-1 origin-left bg-gradient-to-r from-sky via-sunset to-teal" style={{ scaleX }} />

      {/* Header - Pill Structured with Scroll Effect */}
      <header className="fixed inset-x-0 top-0 z-50 bg-transparent py-2 sm:py-3">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between gap-4 sm:gap-6">

            {/* Logo - Desktop */}
            <Link href="/" className="hidden lg:flex items-center hover:opacity-90 transition-opacity" aria-label="Happy Flying Tours home">
              <div className="relative w-[210px] h-[65px] flex-shrink-0">
                <Image
                  src="/happyflyinglogo.png"
                  alt="Happy Flying Tours & Travels"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>
            </Link>

            {/* Logo - Mobile & Tablet */}
            <Link href="/" className="flex lg:hidden items-center hover:opacity-90 transition-opacity" aria-label="Happy Flying Tours home">
              <div className="relative w-[180px] h-[55px] xs:w-[190px] xs:h-[60px] flex-shrink-0">
                <Image
                  src="/happyflyinglogo.png"
                  alt="Happy Flying Tours & Travels"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation & Actions Pill */}
            <div className="hidden lg:flex flex-1 items-center justify-between bg-[#FDFDFD] rounded-[28px] pl-2 pr-3 py-2 shadow-sm border border-amber-200/60">
              <nav className="flex items-center gap-1 xl:gap-2">
                {navItems.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className={`rounded-[24px] px-4 xl:px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${pathname === href
                      ? "bg-[#F3B604] text-[#0A1F2E] shadow-sm"
                      : "text-ocean hover:bg-gray-50/50"
                      }`}
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href="tel:9900113691"
                  className={`flex items-center justify-center rounded-[24px] px-6 py-2.5 text-sm font-bold shadow-sm transition-all duration-200 bg-[#F3B604] hover:bg-amber-500 text-[#0A1F2E]`}
                  aria-label="Call +91 9900113691"
                >
                  <span>Call NOW</span>
                </a>
              </div>
            </div>

            {/* Mobile Actions Pill */}
            <div className="flex lg:hidden items-center gap-2 bg-[#FDFDFD] rounded-[24px] px-2 py-1.5 shadow-sm border border-amber-200/60 ml-auto">
              <a
                href="tel:9900113691"
                className={`flex items-center gap-1.5 rounded-[20px] px-3 py-1.5 text-xs font-bold shadow-sm transition-all duration-200 bg-[#F3B604] hover:bg-amber-500 text-[#0A1F2E]`}
                aria-label="Call +91 9900113691"
              >
                <span>Call</span>
              </a>

              <button
                onClick={() => setMenuOpen((value) => !value)}
                className="size-8 flex items-center justify-center rounded-full text-ocean hover:bg-gray-100 transition-all"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 sm:top-20 lg:top-28 z-40 lg:hidden bg-white shadow-2xl border border-gray-200 mx-3 sm:mx-4 rounded-2xl mt-2"
          >
            <div className="max-h-[calc(100vh-100px)] overflow-y-auto p-4 sm:p-5">
              <nav className="space-y-2">
                {navItems.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-200 ${pathname === href
                      ? "bg-amber-400 text-[#0A1F2E] shadow-md"
                      : "text-gray-700 hover:bg-gray-100"
                      }`}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className={pathname === '/' ? "" : "pt-24 sm:pt-28 lg:pt-32"}>{children}</main>

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
          <Link href="/" className="inline-block mb-3 sm:mb-4 hover:opacity-90 transition-opacity" aria-label="Happy Flying Tours & Travels home">
            <div className="mb-3 sm:mb-4 overflow-hidden rounded-lg sm:rounded-[20px] bg-white" style={{ height: "64px", width: "170px" }}>
              <BrandLogo size="sm" />
            </div>
          </Link>

          <p className="max-w-sm text-sm sm:text-base text-white/70">Where every journey takes wing with elegance, care, and unforgettable discovery.</p>
          <p className="mt-2 sm:mt-3 text-xs text-slate-300 leading-relaxed">No 145, 3rd Floor, 80 Feet Road KHB Colony, 5th Block, Koramangala, Bangalore, Karnataka 560034</p>
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-teal font-semibold">Email: operations@happyflyingtravels.com</p>
          <p className="mt-1 text-xs sm:text-sm text-sunset font-semibold">Call: +91 9900113691</p>

          {/* Social Media Icons */}
          <div className="mt-4 sm:mt-6 flex gap-2 sm:gap-3">
            <a
              href="https://www.instagram.com/happyflying.in?igsh=MWFhM201MmZzZWs4OQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="grid size-9 sm:size-10 place-items-center rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:scale-110 transition-all duration-200 shadow-lg"
              aria-label="Visit our Instagram"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="grid size-9 sm:size-10 place-items-center rounded-full bg-red-600 hover:bg-red-700 hover:scale-110 transition-all duration-200 shadow-lg"
              aria-label="Visit our YouTube channel"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
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
                <a key={link} href="#" className="block text-xs sm:text-sm hover:text-white transition-colors">
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
