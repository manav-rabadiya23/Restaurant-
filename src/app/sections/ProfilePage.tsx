import React, { useState, useEffect } from "react";
import { Order } from "../types";
import { Edit2, Check, X, MapPin, Mail, Phone, Trash2 } from "lucide-react";

interface ProfilePageProps {
  orders: Order[];
  userName: string;
  onBack: () => void;
  onUpdateUser: (name: string) => void;
  onDeleteOrder: (id: string) => void;
  onClearOrders: () => void;
}

const GST_RATE = 0.05;

const statusMap: Record<
  "placed" | "preparing" | "onway" | "delivered",
  { text: string; color: string }
> = {
  placed: { text: "Placed 🧾", color: "bg-yellow-500" },
  preparing: { text: "Preparing 👨‍🍳", color: "bg-orange-500" },
  onway: { text: "On the Way 🚚", color: "bg-blue-500" },
  delivered: { text: "Delivered ✅", color: "bg-green-500" },
};

const ProfilePage = ({
  orders,
  userName,
  onBack,
  onUpdateUser,
  onDeleteOrder,
  onClearOrders,
}: ProfilePageProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const [userData, setUserData] = useState({
    name: userName,
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

    setUserData({
      name: userName,
      email: storedUser.email || "",
      phone: storedUser.phone || "",
      address: storedUser.address || "",
    });
  }, [userName]);

  const handleSave = () => {
    onUpdateUser(userData.name);
    localStorage.setItem("user", JSON.stringify(userData));
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-[#060606] text-white pt-20 pb-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <button onClick={onBack} className="text-orange-400 font-bold">
          ← Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-48 h-48 rounded-full bg-orange-500 flex items-center justify-center text-6xl font-bold uppercase">
              {userData.name?.[0] || "U"}
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              {isEditing ? (
                <>
                  <input
                    value={userData.name}
                    onChange={(e) =>
                      setUserData({ ...userData, name: e.target.value })
                    }
                    className="bg-transparent border-b border-orange-400 text-4xl font-bold outline-none"
                  />
                  <button onClick={handleSave}>
                    <Check />
                  </button>
                  <button onClick={() => setIsEditing(false)}>
                    <X />
                  </button>
                </>
              ) : (
                <>
                  <h1 className="text-5xl font-bold uppercase">
                    {userData.name}
                  </h1>
                  <button onClick={() => setIsEditing(true)}>
                    <Edit2 />
                  </button>
                </>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-xs text-orange-400">Email</p>
                {isEditing ? (
                  <input
                    value={userData.email}
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                    className="w-full bg-transparent border-b mt-1 outline-none"
                  />
                ) : (
                  <div className="flex gap-2 items-center">
                    <Mail size={16} />
                    {userData.email || "Not added"}
                  </div>
                )}
              </div>

              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-xs text-orange-400">Phone</p>
                {isEditing ? (
                  <input
                    value={userData.phone}
                    onChange={(e) =>
                      setUserData({ ...userData, phone: e.target.value })
                    }
                    className="w-full bg-transparent border-b mt-1 outline-none"
                  />
                ) : (
                  <div className="flex gap-2 items-center">
                    <Phone size={16} />
                    {userData.phone || "Not added"}
                  </div>
                )}
              </div>

              <div className="p-4 bg-white/5 rounded-xl sm:col-span-2">
                <p className="text-xs text-orange-400">Address</p>
                {isEditing ? (
                  <input
                    value={userData.address}
                    onChange={(e) =>
                      setUserData({ ...userData, address: e.target.value })
                    }
                    className="w-full bg-transparent border-b mt-1 outline-none"
                  />
                ) : (
                  <div className="flex gap-2 items-center">
                    <MapPin size={16} />
                    {userData.address || "Not added"}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <h2 className="text-lg font-bold tracking-widest uppercase">
              Orders ({orders.length})
            </h2>

            {orders.length > 0 && (
              <button
                onClick={onClearOrders}
                className="text-red-400 hover:text-red-500 text-sm font-bold"
              >
                Clear All 🧹
              </button>
            )}
          </div>

          {orders.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-white/10 rounded-3xl text-gray-500">
              No orders yet 🍽️
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {orders.map((order) => {
                const orderStatus = order.status ?? "placed";
                const status = statusMap[orderStatus];

                const subtotal = order.items.reduce(
                  (sum, item) => sum + item.price * item.qty,
                  0,
                );

                const gst = subtotal * GST_RATE;
                const finalTotal = subtotal + gst;

                return (
                  <div
                    key={order.id}
                    className="bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-orange-500/50 transition-all duration-500 hover:scale-[1.02]"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="text-xs text-orange-400 uppercase tracking-widest">
                          Order ID
                        </p>
                        <h3 className="text-xl font-bold">#{order.id}</h3>
                      </div>

                      <div className="flex items-center gap-3">
                        <span
                          className={`px-4 py-1 text-xs rounded-full text-black font-bold uppercase ${status.color}`}
                        >
                          {status.text}
                        </span>

                        <button
                          onClick={() => onDeleteOrder(order.id)}
                          className="text-red-400 hover:text-red-600"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>

                    <p className="text-xs text-gray-400 mb-4">
                      📅{" "}
                      {order.createdAt
                        ? new Date(order.createdAt).toLocaleDateString()
                        : order.date || "No date"}{" "}
                      ⏰{" "}
                      {order.createdAt
                        ? new Date(order.createdAt).toLocaleTimeString()
                        : ""}
                    </p>

                    <div className="mb-4">
                      <div className="flex justify-between text-xs mb-1">
                        <span>🧾</span>
                        <span>👨‍🍳</span>
                        <span>🚚</span>
                        <span>✅</span>
                      </div>

                      <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-orange-500 ${
                            orderStatus === "placed"
                              ? "w-1/4"
                              : orderStatus === "preparing"
                                ? "w-2/4"
                                : orderStatus === "onway"
                                  ? "w-3/4"
                                  : "w-full"
                          }`}
                        />
                      </div>
                    </div>

                    <div className="space-y-3 border-t border-white/10 pt-3">
                      {order.items.map((item, i) => {
                        const price = Number(item.price || 0);
                        const qty = Number(item.qty || 0);

                        return (
                          <div key={i} className="flex justify-between">
                            <div className="flex items-center gap-3">
                              <img
                                src={item.image || "/fallback.png"}
                                className="w-12 h-12 rounded"
                              />
                              <span>
                                {item.name} x{qty}
                              </span>
                            </div>
                            <span>₹{price * qty}</span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-6 border-t border-white/10 pt-4 space-y-2 text-sm">
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
                        <span>₹{finalTotal.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
