import { Minus, Plus, Trash2, ArrowLeft, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { CartItem } from "../types";

export default function CartSection({
  cartItems,
  onIncrease,
  onDecrease,
  onRemove,
  onClose,
}: {
  cartItems: CartItem[];
  onIncrease: (name: string) => void;
  onDecrease: (name: string) => void;
  onRemove: (name: string) => void;
  onClose: () => void;
}) {
  const getPriceNumber = (price: string | number) =>
    typeof price === "number"
      ? price
      : Number(price.replace(/[^\d]/g, "") || 0);

  const total = cartItems.reduce(
    (sum, item) => sum + getPriceNumber(item.price) * item.quantity,
    0,
  );

  return (
    <section
      id="order"
      className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6"
    >
      {/* CLOSE BUTTON */}
      <button
        onClick={onClose}
        className="absolute right-4 top-6 z-20 rounded-full border border-white/10 bg-white/5 p-3 text-white/80 transition hover:border-orange-400/40 hover:bg-orange-500/10 hover:text-orange-300"
      >
        <X className="h-5 w-5" />
      </button>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="mb-10 text-center"
      >
        <button
          onClick={onClose}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-white/80 transition hover:border-orange-400/40 hover:text-orange-300"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
          Your Cart
        </p>

        <h2 className="mt-4 text-4xl font-black md:text-5xl">
          Online Order Cart
        </h2>
      </motion.div>

      {cartItems.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center text-white/70"
        >
          Your cart is empty.
        </motion.div>
      ) : (
        <div className="grid gap-6">
          <AnimatePresence>
            {cartItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, x: -80, scale: 0.9 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="group relative flex flex-col gap-4 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 md:flex-row md:items-center md:justify-between"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-500/0 blur-3xl transition duration-500 group-hover:bg-orange-500/20" />

                <div className="relative z-10 flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-24 rounded-2xl object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div>
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="mt-1 text-white/60">{item.category}</p>
                    <p className="mt-2 font-semibold text-orange-300">
                      {item.price}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 flex flex-wrap items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => onDecrease(item.name)}
                    className="rounded-full border border-white/15 p-2 text-white hover:border-orange-400/40 hover:text-orange-300"
                  >
                    <Minus className="h-4 w-4" />
                  </motion.button>

                  <motion.span
                    key={item.quantity}
                    initial={{ scale: 0.7 }}
                    animate={{ scale: 1 }}
                    className="min-w-[32px] text-center text-lg font-bold"
                  >
                    {item.quantity}
                  </motion.span>

                  <motion.button
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => onIncrease(item.name)}
                    className="rounded-full border border-white/15 p-2 text-white hover:border-orange-400/40 hover:text-orange-300"
                  >
                    <Plus className="h-4 w-4" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.12, rotate: 8 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => onRemove(item.name)}
                    className="ml-2 rounded-full bg-red-500/15 p-2 text-red-300 hover:bg-red-500/25"
                  >
                    <Trash2 className="h-4 w-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: false }}
            className="rounded-[2rem] border border-orange-400/20 bg-orange-500/10 p-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-black">Total</h3>
              <motion.span
                key={total}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="text-2xl font-black text-orange-300"
              >
                ₹{total}
              </motion.span>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              className="mt-5 w-full rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 px-6 py-4 font-bold text-black transition"
            >
              Proceed to Checkout
            </motion.button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
