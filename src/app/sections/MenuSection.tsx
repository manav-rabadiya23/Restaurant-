import { Search, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import type { MenuItem } from "../types";
import StarRating from "../components/common/StarRating";

export default function MenuSection({
  categories,
  selectedCategory,
  setSelectedCategory,
  searchTerm,
  setSearchTerm,
  filteredMenu,
  onAddToCart,
}: {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  filteredMenu: MenuItem[];
  onAddToCart: (item: MenuItem) => void;
}) {
  return (
    <section id="menu" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
          Our Menu
        </p>

        <h2 className="mt-4 text-4xl font-black md:text-5xl">
          Bigger, Better Gujarati Menu
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-white/70">
          More items in each category, better balance and a cleaner browsing
          experience.
        </p>
      </motion.div>

      {/* SEARCH */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="mx-auto mb-6 max-w-xl"
      >
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50" />

          <input
            type="text"
            placeholder="Search dishes, sweets, beverages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 pl-12 pr-4 text-white outline-none transition focus:border-orange-400 focus:shadow-[0_0_20px_rgba(251,146,60,0.3)]"
          />
        </div>
      </motion.div>

      {/* CATEGORY BUTTONS */}
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {categories.map((category, index) => (
          <motion.button
            key={category}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: index * 0.04,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              selectedCategory === category
                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                : "border border-white/10 bg-white/5 text-white/80 hover:border-orange-400/40 hover:text-orange-300"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* MENU GRID */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredMenu.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 45, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.55,
              delay: (index % 8) * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: false, amount: 0.05 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-xl transition duration-300 hover:border-orange-400/30"
          >
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                {item.badge}
              </span>

              <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                {item.category}
              </span>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">{item.name}</h3>

                  <div className="mt-2 flex items-center gap-2">
                    <StarRating count={Math.round(item.rating)} />
                    <span className="text-sm text-white/70">{item.rating}</span>
                  </div>
                </div>

                <span className="rounded-full bg-orange-500/15 px-4 py-2 text-base font-bold text-orange-300">
                  {item.price}
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-white/70">
                {item.desc}
              </p>

              <div className="mt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onAddToCart(item)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 px-4 py-3 font-semibold text-black transition"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
