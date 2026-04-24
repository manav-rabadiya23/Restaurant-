import React from "react";
import type { CartItem } from "../types";

interface CheckoutSectionProps {
  cartItems: CartItem[];
}

const GST_RATE = 0.05;

const CheckoutSection = ({ cartItems }: CheckoutSectionProps) => {
  // 🔥 Handle both number & string safely
  const getPriceNumber = (price: number | string) => {
    if (typeof price === "number") return price;
    return Number(price.replace(/[^\d]/g, "") || 0);
  };

  // 🔥 Subtotal
  const subtotal = cartItems.reduce(
    (sum, item) => sum + getPriceNumber(item.price) * item.quantity,
    0,
  );

  // 🔥 GST + Total
  const gst = subtotal * GST_RATE;
  const total = subtotal + gst;

  return (
    <div className="rounded-3xl border border-white/10 bg-[#111] p-6 text-white">
      <h2 className="text-xl font-bold mb-4">🧾 Checkout Summary</h2>

      {/* ITEMS */}
      <div className="space-y-3 border-b border-white/10 pb-4">
        {cartItems.length === 0 ? (
          <p className="text-gray-400">No items in cart</p>
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

                <span className="font-semibold">₹{price * item.quantity}</span>
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
    </div>
  );
};

export default CheckoutSection;
