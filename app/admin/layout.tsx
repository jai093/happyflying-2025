import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin – HappyFlying Tours & Travels",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  // Completely standalone — no AppShell, no navbar, no footer
  return (
    <div className="min-h-screen bg-[#060C14] text-white">
      {children}
    </div>
  );
}
