import { useMemo, useState } from "react";
import { Search, ShoppingCart, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { MenuItem } from "../types";
import StarRating from "../components/common/StarRating";

export default function MenuSection({
  menuItems,
  onAddToCart,
}: {
  menuItems: MenuItem[];
  onAddToCart: (item: MenuItem) => void;
}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = useMemo(
    () => ["All", ...new Set(menuItems.map((item) => item.category))],
    [menuItems],
  );

  const filteredMenu = useMemo(() => {
    const words = searchTerm.trim().toLowerCase().split(" ").filter(Boolean);

    return menuItems.filter((item) => {
      const categoryMatch =
        selectedCategory === "All" || item.category === selectedCategory;

      const searchableText = `
        ${item.name}
        ${item.desc}
        ${item.category}
        ${item.badge}
        ${item.price}
      `.toLowerCase();

      const searchMatch =
        words.length === 0 ||
        words.every((word) => searchableText.includes(word));

      return categoryMatch && searchMatch;
    });
  }, [menuItems, searchTerm, selectedCategory]);

  const hasSearch = searchTerm.trim().length > 0;

  return (
    <section
      id="menu"
      className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20"
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="mb-8 text-center md:mb-12"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
          Our Menu
        </p>

        <h2 className="mt-4 text-3xl font-black md:text-5xl">
          Bigger, Better Gujarati Menu
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-white/70">
          Search your favourite Gujarati dishes, sweets, breads and beverages.
        </p>
      </motion.div>

      {/* SEARCH */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="mx-auto mb-8 max-w-2xl"
      >
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-orange-500/5 backdrop-blur-xl transition focus-within:border-orange-400/60 focus-within:shadow-orange-500/20">
          <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-orange-300" />

          <input
            type="text"
            placeholder="Search thali, dhokla, chaas, sweet..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-16 w-full bg-transparent pl-14 pr-14 text-white outline-none placeholder:text-white/40"
          />

          {hasSearch && (
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-orange-500 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </motion.div>

      {/* CATEGORY BUTTONS */}
      <div className="mb-6 flex flex-wrap justify-center gap-3 md:mb-8">
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

      {/* RESULT COUNT */}
      <p className="mb-6 text-center text-sm text-white/50">
        Showing{" "}
        <span className="font-bold text-orange-300">{filteredMenu.length}</span>{" "}
        item{filteredMenu.length !== 1 ? "s" : ""}
        {hasSearch && (
          <>
            {" "}
            for <span className="font-bold text-white">“{searchTerm}”</span>
          </>
        )}
      </p>

      {/* MENU GRID */}
      {filteredMenu.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence>
            {filteredMenu.map((item, index) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, y: 45, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.45,
                  delay: (index % 8) * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
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

                <div className="p-5 md:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold">{item.name}</h3>

                      <div className="mt-2 flex items-center gap-2">
                        <StarRating count={Math.round(item.rating)} />
                        <span className="text-sm text-white/70">
                          {item.rating}
                        </span>
                      </div>
                    </div>

                    <span className="rounded-full bg-orange-500/15 px-4 py-2 text-base font-bold text-orange-300">
                      {item.price}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-white/70">
                    {item.desc}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onAddToCart(item)}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 px-4 py-3 font-semibold text-black transition"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="mx-auto mt-10 max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
          <p className="text-4xl">🔍</p>

          <h3 className="mt-4 text-2xl font-black">No dish found</h3>

          <p className="mt-2 text-sm text-white/50">
            Try searching for thali, farsan, dessert, bread or beverage.
          </p>

          <button
            type="button"
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All");
            }}
            className="mt-5 rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
          >
            Reset Search
          </button>
        </div>
      )}
    </section>
  );
}
