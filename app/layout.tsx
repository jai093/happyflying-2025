import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Happy Flying Tours and Travels | Luxury Tours & Bespoke Travel",
  description:
    "Wings to wonder, journeys with heart, and travel crafted around you by Happy Flying Tours and Travels.",
  keywords: ["luxury travel", "bespoke tours", "travel packages", "honeymoon", "adventure travel"],
  openGraph: {
    title: "Happy Flying Tours and Travels | Explore the World Beyond Limits",
    description: "Where every journey takes wing with elegance, care, and unforgettable discovery.",
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
