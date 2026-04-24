import React from "react";
import { ArrowLeft, X } from "lucide-react";
import type { CartItem } from "../types";

interface CheckoutSectionProps {
  cartItems: CartItem[];
  onBack: () => void; // 🔥 ADD THIS
}

const GST_RATE = 0.05;

const CheckoutSection = ({ cartItems, onBack }: CheckoutSectionProps) => {
  const getPriceNumber = (price: number | string) => {
    if (typeof price === "number") return price;
    return Number(price.replace(/[^\d]/g, "") || 0);
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + getPriceNumber(item.price) * item.quantity,
    0,
  );

  const gst = subtotal * GST_RATE;
  const total = subtotal + gst;

  return (
    <div className="relative rounded-3xl border border-white/10 bg-[#111] p-6 text-white shadow-xl">
      {/* 🔥 CLOSE BUTTON (TOP RIGHT) */}
      <button
        onClick={onBack}
        className="absolute right-4 top-4 rounded-full bg-white/5 p-2 text-white/70 transition hover:bg-red-500/20 hover:text-red-400"
      >
        <X className="h-5 w-5" />
      </button>

      {/* 🔥 BACK BUTTON */}
      <button
        onClick={onBack}
        className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-orange-400/40 hover:text-orange-300"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </button>

      {/* TITLE */}
      <h2 className="text-xl font-bold mb-4">🧾 Checkout Summary</h2>

      {/* ITEMS */}
      <div className="space-y-3 border-b border-white/10 pb-4">
        {cartItems.length === 0 ? (
          <p className="text-gray-400 text-center">No items in cart</p>
        ) : (
          cartItems.map((item) => {
            const price = getPriceNumber(item.price);

            return (
              <div
                key={item.id || item.name}
                className="flex justify-between items-center"
              >
                <span className="text-gray-300">
                  {item.name} x{item.quantity}
                </span>

                <span className="font-semibold">
                  ₹{(price * item.quantity).toFixed(2)}
                </span>
              </div>
            );
          })
        )}
      </div>

      {/* BILL */}
      <div className="mt-4 space-y-2 text-sm">
        <div className="flex justify-between text-gray-400">
          <span>Subtotal</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-gray-400">
          <span>GST (5%)</span>
          <span>₹{gst.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-lg font-bold text-orange-400 border-t border-white/10 pt-2">
          <span>Total</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
      </div>

      {/* CHECKOUT BUTTON */}
      <button className="mt-6 w-full rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 px-6 py-4 font-bold text-black transition hover:scale-[1.02] active:scale-95">
        Proceed to Payment
      </button>
    </div>
  );
};

export default CheckoutSection;
