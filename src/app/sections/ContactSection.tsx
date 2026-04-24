import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#080808] px-4 py-20 text-white sm:px-6"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
            Contact Us
          </p>
          <h2 className="mt-3 text-4xl font-black sm:text-5xl">
            Visit Gujarati Rasoi
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Have questions, want to reserve a table, or need help with an order?
            We are always happy to serve you.
          </p>
        </div>

        {/* TOP CARDS */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* LOCATION */}
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <MapPin className="mb-4 h-6 w-6 text-orange-400" />
            <h3 className="text-xl font-bold">Restaurant Location</h3>
            <p className="mt-2 text-sm text-white/60">
              Sayajigunj, Vadodara, Gujarat 390005
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Sayajigunj+Vadodara+Gujarat+390005"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-orange-400 hover:underline"
            >
              Get Directions
            </a>
          </div>

          {/* PHONE */}
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <Phone className="mb-4 h-6 w-6 text-orange-400" />
            <h3 className="text-xl font-bold">Call Us</h3>
            <p className="mt-2 text-sm text-white/60">
              For bookings & order support
            </p>
            <a
              href="tel:+919876543210"
              className="mt-4 block text-lg font-bold text-orange-400"
            >
              +91 98765 43210
            </a>
          </div>

          {/* EMAIL */}
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <Mail className="mb-4 h-6 w-6 text-orange-400" />
            <h3 className="text-xl font-bold">Email Us</h3>
            <p className="mt-2 text-sm text-white/60">
              For feedback & inquiries
            </p>
            <a
              href="mailto:info@gujaratirasoi.com"
              className="mt-4 block text-lg font-bold text-orange-400"
            >
              info@gujaratirasoi.com
            </a>
          </div>
        </div>

        {/* MAP + INFO */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT → WHY CONTACT */}
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-7">
            <h3 className="text-2xl font-bold tracking-tight">
              Why Contact Us?
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-white/60">
              We’re here to help you with reservations, order support, and more.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-400" />
                Table reservations & bookings
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-400" />
                Order tracking & support
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-400" />
                Catering & bulk orders
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-400" />
                Feedback & suggestions
              </li>
            </ul>

            <div className="my-6 h-px w-full bg-white/10" />

            <div className="flex items-center justify-between text-sm">
              <span className="text-white/60">Opening Hours</span>
              <span className="font-medium text-orange-300">
                Mon - Sun: 11:00 AM – 11:00 PM
              </span>
            </div>
          </div>

          {/* RIGHT → MAP */}
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3">
            <iframe
              title="Gujarati Rasoi location"
              src="https://www.google.com/maps?q=Sayajigunj+Vadodara+Gujarat+390005&output=embed"
              className="h-[320px] w-full rounded-[1.5rem] border-0 sm:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
