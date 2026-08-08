import { ArrowRight } from "lucide-react";
import { services } from "@/data/travel";
import { Reveal, SectionHeading } from "@/components/Motion";

const serviceImages: Record<string, string> = {
  "International Tours": "/assets/services/international_tours.jpeg",
  "Domestic Tours (India)": "/assets/services/domestic-tours-india.jpeg",
  "Visa Assistance": "/assets/services/visa-assistance.jpeg",
  "Flight Booking": "/assets/services/flight-booking.jpeg",
  "Hotel & Resort Reservations": "/assets/services/hotel-resort-reservations.jpeg",
  "Corporate Travel & MICE": "/assets/services/corporate-travel-mice.jpeg",
  "Honeymoon Packages": "/assets/services/honeymoon-packages.jpeg",
  "Pilgrimage & Spiritual Tours": "/assets/services/pilgrimage-spiritual-tours.jpeg"
};

export default function ServicesPage() {
  return (
    <section className="section pt-32">
      <div className="container-premium">
        <SectionHeading eyebrow="Services" title="Every travel service wrapped in one premium planning layer" text="From visa paperwork to private yachts, each service is designed to reduce decisions while increasing delight." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ ...service }, index) => {
            const imagePath = serviceImages[service.title];
            return (
              <Reveal key={service.title} delay={index * 0.03} className="group flex flex-col overflow-hidden rounded-[30px] bg-white shadow-premium transition hover:-translate-y-2 dark:bg-white/10">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal to-sunset opacity-0 transition group-hover:opacity-100 z-10" />
                
                {/* Image Container - Full Width, No Icon */}
                <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-slate-200 to-slate-100 dark:from-white/10 dark:to-white/5">
                  {imagePath && (
                    <img
                      src={imagePath}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  )}
                </div>
                
                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h2 className="text-2xl font-semibold text-ocean dark:text-white">{service.title}</h2>
                  <p className="mt-3 flex-1 leading-7 text-ocean/66 dark:text-white/66 text-base">{service.text}</p>
                  <button className="mt-6 flex items-center gap-2 font-semibold text-teal hover:gap-3 transition-all w-fit">
                    Explore <ArrowRight size={17} />
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
