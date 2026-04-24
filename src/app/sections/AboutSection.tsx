import { FaUtensils, FaLeaf } from "react-icons/fa";
import { GiMeal, GiCook } from "react-icons/gi";
import { motion } from "framer-motion";
import { restaurantName } from "../data/restaurantData";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative mx-auto grid max-w-7xl items-center gap-14 overflow-hidden px-4 py-24 sm:px-6 md:grid-cols-2"
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-[100px]" />

      {/* IMAGE SECTION */}
      <motion.div
        initial={{ opacity: 0, x: -60, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: false, amount: 0.25 }}
        className="relative group"
      >
        <div className="absolute -inset-4 rounded-[2.5rem] bg-orange-500/10 blur-2xl opacity-0 transition duration-700 group-hover:opacity-100" />

        <motion.img
          src="/food.jpg"
          alt="Delicious traditional food"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.5 }}
          className="relative h-[360px] w-full rounded-[2.5rem] border border-white/10 object-cover shadow-2xl sm:h-[420px]"
        />

        {/* Floating image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            opacity: { duration: 0.6 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          viewport={{ once: true }}
          className="absolute -bottom-10 left-6 hidden sm:block"
        >
          <img
            src="/restaurant.jpg"
            alt="Restaurant ambience"
            className="h-32 w-44 rounded-2xl border-4 border-black object-cover shadow-xl"
          />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute -bottom-6 -right-2 rounded-xl bg-orange-500 px-6 py-3 text-xs font-bold text-black shadow-lg sm:-right-4"
        >
          Est. 2026
        </motion.div>
      </motion.div>

      {/* CONTENT SECTION */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="mb-6">
          <p className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-orange-400">
            <span className="h-px w-8 bg-orange-400"></span>
            About Us
          </p>

          <h2 className="text-4xl font-black uppercase italic leading-tight md:text-5xl">
            Tradition meets <br />
            <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
              modern taste
            </span>
          </h2>
        </div>

        <p className="text-lg leading-relaxed text-white/60">
          <span className="font-semibold text-white">{restaurantName}</span> is
          a premium dining destination in Vadodara, bringing together authentic
          Indian flavors with a modern dining experience.
        </p>

        <p className="mt-4 leading-relaxed text-white/50">
          From traditional Gujarati dishes to carefully crafted meals, every
          plate is prepared using fresh ingredients, rich spices, and attention
          to detail.
        </p>

        {/* FEATURES */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Feature
            icon={<FaUtensils size={26} />}
            title="Authentic Taste"
            desc="Traditional recipes inspired by real home kitchens."
          />
          <Feature
            icon={<GiMeal size={28} />}
            title="Premium Dining"
            desc="Elegant ambience with warm Gujarati hospitality."
          />
          <Feature
            icon={<FaLeaf size={24} />}
            title="Fresh Ingredients"
            desc="High-quality ingredients used in every dish."
          />
          <Feature
            icon={<GiCook size={28} />}
            title="Expert Chefs"
            desc="Prepared by experienced chefs with passion."
          />
        </div>

        {/* STATS */}
        <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-6">
          <Stat value="50+" label="Dishes" />
          <Stat value="100%" label="Fresh" />
          <Stat value="4.8★" label="Rating" />
        </div>
      </motion.div>
    </section>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: false, amount: 0.25 }}
      whileHover={{ y: -6, scale: 1.03 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-orange-500/50 hover:bg-orange-500/10"
    >
      <div className="mb-3 text-orange-400">{icon}</div>
      <h3 className="mb-1 text-sm font-bold uppercase">{title}</h3>
      <p className="text-xs text-white/50">{desc}</p>
    </motion.div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: false, amount: 0.3 }}
      whileHover={{ scale: 1.08 }}
    >
      <h4 className="text-xl font-bold text-orange-400">{value}</h4>
      <p className="text-xs uppercase text-white/40">{label}</p>
    </motion.div>
  );
}
