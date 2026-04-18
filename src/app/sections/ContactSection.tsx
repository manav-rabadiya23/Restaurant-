import { Clock3, MapPin, Phone } from "lucide-react";
import { restaurantAddress, restaurantPhone } from "../data/restaurantData";

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
          Contact
        </p>
        <h2 className="mt-4 text-4xl font-black md:text-5xl">
          Visit us in Vadodara
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_1.2fr]">
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <MapPin className="h-6 w-6 text-orange-400" />
            <h3 className="mt-4 text-xl font-bold">Location</h3>
            <p className="mt-2 text-white/70">{restaurantAddress}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <Phone className="h-6 w-6 text-orange-400" />
            <h3 className="mt-4 text-xl font-bold">Call Us</h3>
            <p className="mt-2 text-white/70">{restaurantPhone}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <Clock3 className="h-6 w-6 text-orange-400" />
            <h3 className="mt-4 text-xl font-bold">Opening Hours</h3>
            <p className="mt-2 text-white/70">Daily • 11:00 AM – 11:00 PM</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3">
          <iframe
            title="Vadodara restaurant location"
            src="https://www.google.com/maps?q=RC%20Dutt%20Road,%20Alkapuri,%20Vadodara,%20Gujarat%20390007&z=15&output=embed"
            className="h-[320px] w-full rounded-[1.5rem] border-0 sm:h-[380px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
