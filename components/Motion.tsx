"use client";

import { motion } from "framer-motion";

export function Reveal({
  children,
  delay = 0,
  className = ""
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-sky">{eyebrow}</p>
      <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl text-ocean dark:text-white">{title}</h2>
      {text && <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-ocean/70 dark:text-white/70">{text}</p>}
    </Reveal>
  );
}

export function MagneticButton({
  children,
  variant = "primary",
  className = ""
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const classes =
    variant === "primary"
      ? "bg-sunset text-ocean shadow-premium hover:bg-[#ffe45c]"
      : "border border-white/60 bg-white/15 text-white backdrop-blur-xl hover:bg-white/25";

  return (
    <motion.button whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }} className={`rounded-full px-6 py-3 font-semibold transition ${classes} ${className}`}>
      {children}
    </motion.button>
  );
}
