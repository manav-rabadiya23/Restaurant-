import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { swiggyLink, zomatoLink } from "../data/restaurantData";

export default function OrderSection() {
  return (
    <section id="order" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: false, amount: 0.2 }}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 md:grid md:grid-cols-2 gap-6"
      >
        {/* 🔥 Background glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-orange-500/20 blur-[120px]" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-yellow-400/20 blur-[120px]" />

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
            Order Online
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight">
            Enjoy Gujarati Rasoi at home
          </h2>

          <p className="mt-4 text-white/70 max-w-md">
            Order your favourite thali, farsan, sweets and beverages directly
            from your preferred delivery platform.
          </p>
        </motion.div>

        {/* RIGHT BUTTONS */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center gap-4 sm:flex-row sm:items-center"
        >
          {/* ZOMATO */}
          <motion.a
            href={zomatoLink}
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-red-500 px-6 py-4 font-bold text-white transition"
          >
            <span className="absolute inset-0 bg-white/10 opacity-0 transition group-hover:opacity-100" />
            <ShoppingBag className="h-5 w-5 relative z-10" />
            <span className="relative z-10">Order on Zomato</span>
          </motion.a>

          {/* SWIGGY */}
          <motion.a
            href={swiggyLink}
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-orange-500 px-6 py-4 font-bold text-white transition"
          >
            <span className="absolute inset-0 bg-white/10 opacity-0 transition group-hover:opacity-100" />
            <ShoppingBag className="h-5 w-5 relative z-10" />
            <span className="relative z-10">Order on Swiggy</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
