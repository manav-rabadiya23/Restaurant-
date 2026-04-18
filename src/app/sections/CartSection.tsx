import { Minus, Plus, Trash2 } from "lucide-react";
import type { CartItem } from "../types";

export default function CartSection({
  cartItems,
  onIncrease,
  onDecrease,
  onRemove,
}: {
  cartItems: CartItem[];
  onIncrease: (name: string) => void;
  onDecrease: (name: string) => void;
  onRemove: (name: string) => void;
}) {
  const getPriceNumber = (price: string) =>
    Number(price.replace(/[^\d]/g, "") || 0);

  const total = cartItems.reduce(
    (sum, item) => sum + getPriceNumber(item.price) * item.quantity,
    0,
  );

  return (
    <section id="order" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
          Your Cart
        </p>
        <h2 className="mt-4 text-4xl font-black md:text-5xl">
          Online Order Cart
        </h2>
      </div>

      {cartItems.length === 0 ? (
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center text-white/70">
          Your cart is empty.
        </div>
      ) : (
        <div className="grid gap-6">
          {cartItems.map((item) => (
            <div
              key={item.name}
              className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-5 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 rounded-2xl object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="mt-1 text-white/60">{item.category}</p>
                  <p className="mt-2 font-semibold text-orange-300">
                    {item.price}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onDecrease(item.name)}
                  className="rounded-full border border-white/15 p-2 text-white hover:border-orange-400/40 hover:text-orange-300"
                >
                  <Minus className="h-4 w-4" />
                </button>

                <span className="min-w-[32px] text-center text-lg font-bold">
                  {item.quantity}
                </span>

                <button
                  onClick={() => onIncrease(item.name)}
                  className="rounded-full border border-white/15 p-2 text-white hover:border-orange-400/40 hover:text-orange-300"
                >
                  <Plus className="h-4 w-4" />
                </button>

                <button
                  onClick={() => onRemove(item.name)}
                  className="ml-2 rounded-full bg-red-500/15 p-2 text-red-300 hover:bg-red-500/25"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}

          <div className="rounded-[2rem] border border-orange-400/20 bg-orange-500/10 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-black">Total</h3>
              <span className="text-2xl font-black text-orange-300">
                ₹{total}
              </span>
            </div>

            <button className="mt-5 w-full rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 px-6 py-4 font-bold text-black transition hover:scale-[1.01]">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
