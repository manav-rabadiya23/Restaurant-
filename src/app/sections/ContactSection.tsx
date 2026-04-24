import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative bg-[#080808] px-4 py-20 text-white sm:px-6 overflow-hidden"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
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
        </motion.div>

        {/* TOP CARDS */}
        <div className="grid gap-6 lg:grid-cols-3">
          <ContactCard
            icon={<MapPin />}
            title="Restaurant Location"
            desc="Sayajigunj, Vadodara, Gujarat 390005"
            link="https://www.google.com/maps/search/?api=1&query=Sayajigunj+Vadodara+Gujarat+390005"
            linkText="Get Directions"
          />

          <ContactCard
            icon={<Phone />}
            title="Call Us"
            desc="For bookings & order support"
            link="tel:+919876543210"
            linkText="+91 98765 43210"
          />

          <ContactCard
            icon={<Mail />}
            title="Email Us"
            desc="For feedback & inquiries"
            link="mailto:info@gujaratirasoi.com"
            linkText="info@gujaratirasoi.com"
          />
        </div>

        {/* MAP + INFO */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-7"
          >
            <h3 className="text-2xl font-bold tracking-tight">
              Why Contact Us?
            </h3>

            <p className="mt-3 text-sm text-white/60">
              We’re here to help you with reservations, order support, and more.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-white/70">
              {[
                "Table reservations & bookings",
                "Order tracking & support",
                "Catering & bulk orders",
                "Feedback & suggestions",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-400" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <div className="my-6 h-px w-full bg-white/10" />

            <div className="flex items-center justify-between text-sm">
              <span className="text-white/60">Opening Hours</span>
              <span className="font-medium text-orange-300">
                Mon - Sun: 11:00 AM – 11:00 PM
              </span>
            </div>
          </motion.div>

          {/* RIGHT MAP */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3"
          >
            <iframe
              title="Gujarati Rasoi location"
              src="https://www.google.com/maps?q=Sayajigunj+Vadodara+Gujarat+390005&output=embed"
              className="h-[320px] w-full rounded-[1.5rem] border-0 sm:h-[420px]"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* 🔥 REUSABLE CARD */
function ContactCard({ icon, title, desc, link, linkText }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      whileHover={{ y: -8, scale: 1.03 }}
      className="group relative rounded-[2rem] border border-white/10 bg-white/5 p-6 transition hover:border-orange-400/40"
    >
      <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-orange-500 to-yellow-400 opacity-0 blur transition duration-500 group-hover:opacity-20" />

      <div className="relative z-10">
        <div className="mb-4 text-orange-400">{icon}</div>

        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-sm text-white/60">{desc}</p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block font-semibold text-orange-400 hover:underline"
        >
          {linkText}
        </a>
      </div>
    </motion.div>
  );
}
