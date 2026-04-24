import { useState, type FormEvent } from "react";
import { Minus, Plus, ShoppingCart, Trash2, X } from "lucide-react";
import type { CartItem, Order } from "../types";

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onIncrease,
  onDecrease,
  onRemove,
  onClearCart,
  onPlaceOrder,
}: {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onIncrease: (name: string) => void;
  onDecrease: (name: string) => void;
  onRemove: (name: string) => void;
  onClearCart: () => void;
  onPlaceOrder: (order: Order) => void;
}) {
  const loggedInUser = JSON.parse(localStorage.getItem("user") || "{}");

  const [customerName, setCustomerName] = useState(loggedInUser.name || "");
  const [customerPhone, setCustomerPhone] = useState(loggedInUser.phone || "");
  const [customerEmail, setCustomerEmail] = useState(loggedInUser.email || "");
  const [customerAddress, setCustomerAddress] = useState(
    loggedInUser.address || "",
  );

  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");

  const getPriceNumber = (price: number | string) =>
    typeof price === "number"
      ? price
      : Number(price.replace(/[^\d]/g, "") || 0);

  const total = cartItems.reduce(
    (sum, item) => sum + getPriceNumber(item.price) * item.quantity,
    0,
  );

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!customerName || !customerPhone || !customerEmail || !customerAddress) {
      alert("Please fill all checkout details.");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const order: Order = {
      id: "ORD-" + Date.now(),
      date: new Date().toLocaleString(),
      createdAt: new Date().toISOString(),
      status: "placed",
      customer: {
        name: customerName,
        phone: customerPhone,
        email: customerEmail,
        address: customerAddress,
        payment: paymentMethod,
      },
      items: cartItems.map((item) => ({
        id: item.id || item.name,
        name: item.name,
        price: getPriceNumber(item.price),
        qty: item.quantity,
        image: item.image,
      })),
      total,
    };

    onPlaceOrder(order);

    setCustomerName("");
    setCustomerPhone("");
    setCustomerEmail("");
    setCustomerAddress("");
    setPaymentMethod("Cash on Delivery");

    onClearCart();
    onClose();
  };

  return (
    <>
      {/* OVERLAY BELOW NAVBAR */}
      <div
        onClick={onClose}
        className={`fixed inset-x-0 top-[88px] bottom-0 z-30 bg-black/60 backdrop-blur-sm transition ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      {/* DRAWER BELOW NAVBAR */}
      <div
        className={`fixed right-0 top-[88px] z-40 h-[calc(100vh-88px)] w-full max-w-md transform border-l border-white/10 bg-[#0f0f0f] shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-orange-500/15 p-2 text-orange-400">
                <ShoppingCart className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">Your Cart</h2>
                <p className="text-sm text-white/60">{totalItems} items</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="rounded-full border border-white/10 p-2 text-white/70 transition hover:border-orange-400/30 hover:text-orange-300"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4">
            {cartItems.length === 0 ? (
              <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-white/70">
                Your cart is empty.
              </div>
            ) : (
              <>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">Items</h3>
                  <button
                    onClick={onClearCart}
                    className="rounded-full border border-red-400/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-300 transition hover:bg-red-500/20"
                  >
                    Clear Cart
                  </button>
                </div>

                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.name}
                      className="rounded-3xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="flex gap-4">
                        <img
                          src={item.image || "/fallback.png"}
                          alt={item.name}
                          className="h-20 w-20 rounded-2xl object-cover"
                        />

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <h3 className="line-clamp-1 text-base font-bold text-white">
                                {item.name}
                              </h3>
                              <p className="mt-1 text-sm text-white/60">
                                {item.category}
                              </p>
                              <p className="mt-2 font-semibold text-orange-300">
                                ₹{getPriceNumber(item.price)}
                              </p>
                            </div>

                            <button
                              onClick={() => onRemove(item.name)}
                              className="rounded-full bg-red-500/15 p-2 text-red-300 transition hover:bg-red-500/25"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>

                          <div className="mt-4 flex items-center gap-3">
                            <button
                              onClick={() => onDecrease(item.name)}
                              className="rounded-full border border-white/15 p-2 text-white transition hover:border-orange-400/40 hover:text-orange-300"
                            >
                              <Minus className="h-4 w-4" />
                            </button>

                            <span className="min-w-[28px] text-center text-lg font-bold text-white">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() => onIncrease(item.name)}
                              className="rounded-full border border-white/15 p-2 text-white transition hover:border-orange-400/40 hover:text-orange-300"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <form
                  onSubmit={handleCheckout}
                  className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="text-lg font-bold text-white">
                    Checkout Details
                  </h3>

                  <div className="mt-4 space-y-4">
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Enter your name"
                      className="h-12 w-full rounded-2xl border border-white/10 bg-black/30 px-4 text-white outline-none focus:border-orange-400"
                    />

                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="Enter your phone number"
                      className="h-12 w-full rounded-2xl border border-white/10 bg-black/30 px-4 text-white outline-none focus:border-orange-400"
                    />

                    <input
                      type="email"
                      required
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="h-12 w-full rounded-2xl border border-white/10 bg-black/30 px-4 text-white outline-none focus:border-orange-400"
                    />

                    <textarea
                      required
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      placeholder="Enter your address"
                      className="min-h-[100px] w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-orange-400"
                    />

                    <select
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="h-12 w-full rounded-2xl border border-white/10 bg-black/30 px-4 text-white outline-none focus:border-orange-400"
                    >
                      <option>Cash on Delivery</option>
                      <option>UPI</option>
                      <option>Card</option>
                    </select>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-white/70">Total</span>
                    <span className="text-2xl font-black text-orange-300">
                      ₹{total}
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="mt-5 w-full rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 px-6 py-4 font-bold text-black transition hover:scale-[1.01]"
                    disabled={cartItems.length === 0}
                  >
                    Place Order
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
