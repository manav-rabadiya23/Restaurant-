import { CreditCard, MapPin, ShoppingBag, User } from "lucide-react";
import { useMemo, type FormEvent } from "react";
import type { CartItem } from "../types";

export default function CheckoutSection({
  cartItems,
  checkoutName,
  setCheckoutName,
  checkoutPhone,
  setCheckoutPhone,
  checkoutAddress,
  setCheckoutAddress,
  paymentMethod,
  setPaymentMethod,
  onIncrease,
  onDecrease,
  onRemove,
  onPlaceOrder,
}: {
  cartItems: CartItem[];
  checkoutName: string;
  setCheckoutName: (value: string) => void;
  checkoutPhone: string;
  setCheckoutPhone: (value: string) => void;
  checkoutAddress: string;
  setCheckoutAddress: (value: string) => void;
  paymentMethod: string;
  setPaymentMethod: (value: string) => void;
  onIncrease: (name: string) => void;
  onDecrease: (name: string) => void;
  onRemove: (name: string) => void;
  onPlaceOrder: (e: FormEvent<HTMLFormElement>) => void;
}) {
  const getPriceNumber = (price: string) =>
    Number(price.replace(/[^\d]/g, "") || 0);

  const subtotal = useMemo(
    () =>
      cartItems.reduce(
        (sum, item) => sum + getPriceNumber(item.price) * item.quantity,
        0,
      ),
    [cartItems],
  );

  const deliveryFee = cartItems.length > 0 ? 40 : 0;
  const grandTotal = subtotal + deliveryFee;

  return (
    <section id="checkout" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
          Checkout
        </p>
        <h2 className="mt-4 text-4xl font-black md:text-5xl">
          Complete your order
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/70">
          Clean checkout page with delivery details, payment method and order
          summary.
        </p>
      </div>

      {cartItems.length === 0 ? (
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center text-white/70">
          Your cart is empty. Add items from the menu first.
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form
            onSubmit={onPlaceOrder}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8"
          >
            <h3 className="mb-6 text-2xl font-black text-white">
              Delivery Details
            </h3>

            <div className="space-y-5">
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm text-white/70">
                  <User className="h-4 w-4" />
                  Full Name
                </label>
                <input
                  type="text"
                  value={checkoutName}
                  onChange={(e) => setCheckoutName(e.target.value)}
                  placeholder="Enter your name"
                  className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none focus:border-orange-400"
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm text-white/70">
                  <ShoppingBag className="h-4 w-4" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={checkoutPhone}
                  onChange={(e) => setCheckoutPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none focus:border-orange-400"
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm text-white/70">
                  <MapPin className="h-4 w-4" />
                  Delivery Address
                </label>
                <textarea
                  value={checkoutAddress}
                  onChange={(e) => setCheckoutAddress(e.target.value)}
                  placeholder="Enter your full address"
                  className="min-h-[140px] w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none focus:border-orange-400"
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm text-white/70">
                  <CreditCard className="h-4 w-4" />
                  Payment Method
                </label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none focus:border-orange-400"
                >
                  <option>Cash on Delivery</option>
                  <option>UPI</option>
                  <option>Card</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 px-6 py-4 font-bold text-black transition hover:scale-[1.01]"
            >
              Place Order
            </button>
          </form>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8">
            <h3 className="mb-6 text-2xl font-black text-white">
              Order Summary
            </h3>

            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.name}
                  className="rounded-3xl border border-white/10 bg-black/20 p-4"
                >
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 rounded-2xl object-cover"
                    />

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="line-clamp-1 text-lg font-bold text-white">
                            {item.name}
                          </h4>
                          <p className="mt-1 text-sm text-white/60">
                            {item.price}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => onRemove(item.name)}
                          className="rounded-full border border-red-400/20 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-300 transition hover:bg-red-500/20"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="mt-4 flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => onDecrease(item.name)}
                          className="rounded-full border border-white/15 px-3 py-1 text-white transition hover:border-orange-400/40 hover:text-orange-300"
                        >
                          -
                        </button>
                        <span className="min-w-[24px] text-center font-bold text-white">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onIncrease(item.name)}
                          className="rounded-full border border-white/15 px-3 py-1 text-white transition hover:border-orange-400/40 hover:text-orange-300"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-3 rounded-3xl border border-orange-400/20 bg-orange-500/10 p-5">
              <div className="flex items-center justify-between text-white/80">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex items-center justify-between text-white/80">
                <span>Delivery Fee</span>
                <span>₹{deliveryFee}</span>
              </div>
              <div className="border-t border-white/10 pt-3">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-white">
                    Grand Total
                  </span>
                  <span className="text-2xl font-black text-orange-300">
                    ₹{grandTotal}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
