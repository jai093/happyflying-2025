"use client";

import { useState, useEffect } from "react";
import { X, Send, AlertCircle, CheckCircle } from "lucide-react";

interface EnquiryModalProps {
  delay?: number;
  displayDuration?: number;
}

export default function EnquiryModal({
  delay = 3000,
  displayDuration = 60000,
}: EnquiryModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error" | null;
    text: string;
  }>({ type: null, text: "" });
  const [timeLeft, setTimeLeft] = useState(60);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  // Ensure component is mounted before rendering (prevents hydration mismatch)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto-open modal after delay
  useEffect(() => {
    if (!isMounted) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, isMounted]);

  // Auto-close modal after displayDuration and countdown
  useEffect(() => {
    if (!isOpen || !isMounted) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsOpen(false);
          setTimeLeft(60);
          return 60;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen, isMounted]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setMessage({ type: "error", text: "Please enter your name" });
      return false;
    }
    if (!formData.email.trim()) {
      setMessage({ type: "error", text: "Please enter your email" });
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setMessage({ type: "error", text: "Please enter a valid email" });
      return false;
    }
    if (!formData.mobile.trim()) {
      setMessage({ type: "error", text: "Please enter your mobile number" });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setMessage({ type: null, text: "" });

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          mobile: formData.mobile.trim(),
          source: "homepage_popup",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({
          type: "success",
          text: "Thank you! We'll contact you soon.",
        });
        setFormData({ name: "", email: "", mobile: "" });

        setTimeout(() => {
          setIsOpen(false);
          setMessage({ type: null, text: "" });
        }, 2000);
      } else {
        setMessage({
          type: "error",
          text: data.error || "Failed to submit enquiry. Please try again.",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Connection error. Please try again.",
      });
      console.error("Enquiry submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Prevent rendering until mounted (hydration safety)
  if (!isMounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-end sm:items-center justify-center sm:justify-end p-4 sm:p-6 md:p-8 pointer-events-none">
      <div className="relative w-full max-w-sm rounded-[28px] border border-sky/30 bg-white shadow-2xl dark:bg-[#0A1320] dark:border-sky/40 overflow-hidden animate-in fade-in slide-in-from-right-5 duration-300 pointer-events-auto">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-ocean dark:text-white transition"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Countdown Timer */}
        <div className="absolute right-16 top-4 text-xs font-semibold text-sky dark:text-sky-300">
          {timeLeft}s
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">
          <div className="mb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ocean dark:text-white mb-1">
              Plan Your Journey
            </h2>
            <p className="text-sm text-ocean/70 dark:text-white/70">
              Get personalized travel recommendations from our experts
            </p>
          </div>

          {/* Form or Success Message */}
          {message.type === "success" ? (
            <div className="flex flex-col items-center justify-center py-6">
              <CheckCircle
                size={40}
                className="text-teal mb-4 animate-bounce"
              />
              <p className="text-center text-sm text-teal font-semibold">
                {message.text}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2.5">
              {/* Name Input */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-ocean dark:text-white mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-2 rounded-lg border border-sky/30 bg-white/50 dark:bg-white/5 text-ocean dark:text-white placeholder:text-ocean/40 dark:placeholder:text-white/40 focus:outline-none focus:border-sky focus:ring-2 focus:ring-sky/20 transition disabled:opacity-50"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-ocean dark:text-white mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-2 rounded-lg border border-sky/30 bg-white/50 dark:bg-white/5 text-ocean dark:text-white placeholder:text-ocean/40 dark:placeholder:text-white/40 focus:outline-none focus:border-sky focus:ring-2 focus:ring-sky/20 transition disabled:opacity-50"
                />
              </div>

              {/* Mobile Input */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-ocean dark:text-white mb-1">
                  Mobile *
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder="+91 XXXXXXXXXX"
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-2 rounded-lg border border-sky/30 bg-white/50 dark:bg-white/5 text-ocean dark:text-white placeholder:text-ocean/40 dark:placeholder:text-white/40 focus:outline-none focus:border-sky focus:ring-2 focus:ring-sky/20 transition disabled:opacity-50"
                />
              </div>

              {/* Error Message */}
              {message.type === "error" && (
                <div className="flex gap-2 rounded-lg bg-red-500/10 border border-red-500/30 p-2 sm:p-2.5">
                  <AlertCircle
                    size={16}
                    className="sm:size-[18px] text-red-500 flex-shrink-0 mt-0.5"
                  />
                  <p className="text-xs text-red-600 dark:text-red-400">
                    {message.text}
                  </p>
                </div>
              )}

              {/* Submit Button - Original Sky/Sunset/Teal Gradient */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-4 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-sky via-sunset to-teal px-6 py-2 font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition"
              >
                <Send size={16} />
                {isLoading ? "Submitting..." : "Get Travel Plan"}
              </button>

              <p className="text-xs text-center text-ocean/60 dark:text-white/60">
                We'll never spam you. Promise!
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
