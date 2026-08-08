"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Compass, MapPin, Play, X } from "lucide-react";
import { useState } from "react";
import { galleryItems } from "@/data/travel";
import { Reveal, SectionHeading } from "@/components/Motion";

export default function GalleryPage() {
  const [active, setActive] = useState<(typeof galleryItems)[0] | null>(null);

  return (
    <section className="section pt-32">
      <div className="container-premium">
        <SectionHeading eyebrow="Gallery" title="Moments worth expanding" text="A curated showcase of cinematic destination moments, high-altitude scenes, and luxury travel textures." />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {galleryItems.concat(galleryItems).map((item, index) => {
            const ItemIcon = item.icon;
            return (
              <Reveal key={`${item.title}-${index}`}>
                <button
                  onClick={() => setActive(item)}
                  className="group relative w-full text-left p-6 rounded-[28px] bg-gradient-to-br from-[#0B192C] via-[#0077B6]/30 to-[#070F1E] border border-sky/30 text-white shadow-premium flex flex-col justify-between min-h-[220px] transition hover:scale-105"
                >
                  <div className="flex items-center justify-between">
                    <ItemIcon className="size-9 text-sunset" />
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-white/15 px-3 py-1 rounded-full text-sky backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-white/70 flex items-center gap-1">
                      <MapPin size={12} className="text-sunset" /> {item.location}
                    </p>
                    <h3 className="text-xl font-semibold text-white mt-1">{item.title}</h3>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] grid place-items-center bg-ocean/90 p-5 backdrop-blur-lg"
            onClick={() => setActive(null)}
          >
            <button className="absolute right-5 top-5 grid size-12 place-items-center rounded-full bg-sunset text-ocean font-bold" aria-label="Close preview">
              <X />
            </button>
            <motion.div
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              className="relative p-10 max-w-xl w-full rounded-[34px] bg-gradient-to-br from-[#0B192C] via-[#0077B6] to-[#070F1E] border border-sunset/40 text-white shadow-glass"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 inline-grid size-16 place-items-center rounded-2xl bg-white/15 text-sunset">
                <active.icon size={36} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-sunset block mb-1">{active.category}</span>
              <h2 className="text-4xl font-bold">{active.title}</h2>
              <p className="mt-2 text-lg text-white/80 flex items-center gap-2"><MapPin size={16} className="text-sunset" /> {active.location}</p>
              <p className="mt-6 text-sm leading-relaxed text-white/75">
                Bespoke travel experience organized by HappyFlying Tours & Travels LLP. Contact our concierge to customize your private route to {active.location}.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

