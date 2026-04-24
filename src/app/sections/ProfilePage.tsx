import React, { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Edit2,
  Check,
  X,
  ArrowLeft,
  PackageCheck,
  Clock,
  Truck,
  ReceiptText,
  Trash2,
} from "lucide-react";
import { motion } from "framer-motion";
import type { Order } from "../types";

export default function ProfilePage({
  userName,
  orders = [],
  onBack,
  onUpdateUser,
  onDeleteOrder,
  onClearOrders,
}: {
  userName: string;
  orders: Order[];
  onBack: () => void;
  onUpdateUser: (name: string) => void;
  onDeleteOrder?: (orderId: string) => void;
  onClearOrders?: () => void;
}) {
  const [isEditing, setIsEditing] = useState(false);

  const [userData, setUserData] = useState({
    name: userName,
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
    const updatedUser = {
      ...userData,
      name: userData.name.toUpperCase(),
    };

    onUpdateUser(updatedUser.name);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUserData(updatedUser);
    setIsEditing(false);
  };

  const getGSTDetails = (subtotal: number) => {
    const gst = subtotal * 0.05;
    const total = subtotal + gst;

    return {
      beforeGST: subtotal,
      gst,
      afterGST: total,
    };
  };

  const getOrderTime = (order: Order) => {
    const dateSource = order.createdAt || order.date;
    const date = new Date(dateSource);

    if (Number.isNaN(date.getTime())) {
      return {
        date: order.date || "Not available",
        time: "Not available",
      };
    }

    return {
      date: date.toLocaleDateString("en-IN"),
      time: date.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
  };

  return (
    <div className="min-h-screen bg-[#060606] px-4 pb-24 pt-28 text-white sm:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <button
          onClick={() => {
            onBack();
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }, 0);
          }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-bold text-orange-300 transition hover:border-orange-400/40 hover:bg-orange-500/10"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl md:p-8">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-yellow-400 text-5xl font-black text-black shadow-[0_0_45px_rgba(249,115,22,0.35)]">
              {userData.name?.[0] || "U"}
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-center gap-3 md:justify-start">
                {isEditing ? (
                  <>
                    <input
                      value={userData.name}
                      onChange={(e) =>
                        setUserData({ ...userData, name: e.target.value })
                      }
                      className="w-full max-w-sm border-b border-orange-400 bg-transparent text-3xl font-bold outline-none"
                    />

                    <Check
                      onClick={handleSave}
                      className="cursor-pointer text-green-400"
                    />

                    <X
                      onClick={() => setIsEditing(false)}
                      className="cursor-pointer text-red-400"
                    />
                  </>
                ) : (
                  <>
                    <h1 className="text-3xl font-black">{userData.name}</h1>
                    <Edit2
                      onClick={() => setIsEditing(true)}
                      className="cursor-pointer text-orange-300"
                    />
                  </>
                )}
              </div>

              <p className="mt-2 text-white/50">
                Manage your profile, orders and delivery tracking.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <InfoCard
            title="Email"
            icon={<Mail size={17} />}
            isEditing={isEditing}
            value={userData.email}
            placeholder="Not added"
            onChange={(value) => setUserData({ ...userData, email: value })}
          />

          <InfoCard
            title="Phone"
            icon={<Phone size={17} />}
            isEditing={isEditing}
            value={userData.phone}
            placeholder="Not added"
            onChange={(value) => setUserData({ ...userData, phone: value })}
          />

          <InfoCard
            title="Address"
            icon={<MapPin size={17} />}
            isEditing={isEditing}
            value={userData.address}
            placeholder="Not added"
            onChange={(value) => setUserData({ ...userData, address: value })}
            full
          />
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-400">
                Order History
              </p>
              <h2 className="mt-2 text-3xl font-black">Your Orders</h2>
            </div>

            {orders.length > 0 && onClearOrders && (
              <button
                onClick={onClearOrders}
                className="rounded-full border border-red-400/30 bg-red-500/10 px-5 py-2 text-sm font-bold text-red-300 transition hover:bg-red-500/20"
              >
                Clear All
              </button>
            )}
          </div>

          {orders.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-black/30 p-10 text-center text-white/50">
              No orders yet.
            </div>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => {
                const { beforeGST, gst, afterGST } = getGSTDetails(order.total);
                const orderDateTime = getOrderTime(order);

                return (
                  <motion.div
                    key={order.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/35"
                  >
                    <div className="flex flex-col justify-between gap-4 border-b border-white/10 bg-white/[0.03] p-5 md:flex-row md:items-center">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-400">
                          Order #{order.id.split("-").pop()}
                        </p>

                        <div className="mt-2 flex flex-wrap gap-4 text-sm text-white/60">
                          <span>Date: {orderDateTime.date}</span>
                          <span>Time: {orderDateTime.time}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="rounded-full bg-green-500/15 px-4 py-2 text-xs font-bold uppercase text-green-400">
                          {order.status || "Placed"}
                        </span>

                        {onDeleteOrder && (
                          <button
                            onClick={() => onDeleteOrder(order.id)}
                            className="rounded-full bg-red-500/10 p-2 text-red-300 hover:bg-red-500/20"
                          >
                            <Trash2 size={17} />
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="grid items-start gap-6 p-5 lg:grid-cols-[minmax(0,1fr)_260px]">
                      <div className="space-y-5">
                        <div className="space-y-4">
                          {order.items.map((item, index) => (
                            <div
                              key={`${item.name}-${index}`}
                              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                            >
                              <img
                                src={item.image || "/fallback.png"}
                                alt={item.name}
                                className="h-20 w-20 rounded-2xl object-cover"
                              />

                              <div className="flex-1">
                                <h3 className="text-lg font-bold">
                                  {item.name}
                                </h3>

                                <p className="mt-1 text-sm text-white/50">
                                  Qty: {item.qty}
                                </p>
                              </div>

                              <p className="font-black text-orange-300">
                                ₹{(item.price * item.qty).toFixed(2)}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="grid gap-5 md:grid-cols-2">
                          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                            <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-orange-400">
                              Customer Details
                            </p>

                            <div className="space-y-3 text-sm text-white/70">
                              <p>Name: {order.customer.name}</p>
                              <p>Email: {order.customer.email}</p>
                              <p>Phone: {order.customer.phone}</p>
                              <p>Address: {order.customer.address}</p>
                              <p>Payment: {order.customer.payment}</p>
                            </div>
                          </div>

                          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                            <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-orange-400">
                              Bill Summary
                            </p>

                            <div className="space-y-3 text-sm">
                              <BillRow
                                label="Before GST"
                                value={`₹${beforeGST.toFixed(2)}`}
                              />
                              <BillRow
                                label="GST (5%)"
                                value={`₹${gst.toFixed(2)}`}
                              />

                              <div className="border-t border-white/10 pt-3">
                                <BillRow
                                  label="After GST"
                                  value={`₹${afterGST.toFixed(2)}`}
                                  highlight
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <OrderTracker status={order.status || "placed"} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function InfoCard({
  title,
  icon,
  value,
  placeholder,
  isEditing,
  onChange,
  full,
}: {
  title: string;
  icon: React.ReactNode;
  value: string;
  placeholder: string;
  isEditing: boolean;
  onChange: (value: string) => void;
  full?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`rounded-2xl bg-white/5 p-5 text-left ${
        full ? "sm:col-span-2" : ""
      }`}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-orange-400">
        {title}
      </p>

      {isEditing ? (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full border-b border-white/20 bg-transparent pb-2 text-white outline-none"
        />
      ) : (
        <div className="flex items-center gap-3 text-white">
          <span className="text-white/70">{icon}</span>
          <span className="break-all">{value || placeholder}</span>
        </div>
      )}
    </motion.div>
  );
}

function BillRow({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex justify-between gap-4 ${
        highlight ? "text-lg font-black text-orange-300" : "text-white/65"
      }`}
    >
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

function OrderTracker({ status }: { status: string }) {
  const steps = [
    { key: "placed", label: "Placed", icon: <ReceiptText size={16} /> },
    { key: "preparing", label: "Preparing", icon: <Clock size={16} /> },
    { key: "out-for-delivery", label: "On Way", icon: <Truck size={16} /> },
    { key: "delivered", label: "Delivered", icon: <PackageCheck size={16} /> },
  ];

  const currentIndex = Math.max(
    0,
    steps.findIndex((step) => step.key === status),
  );

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <p className="mb-5 text-xs font-black uppercase tracking-[0.25em] text-orange-400">
        Tracking Order
      </p>

      <div className="space-y-4">
        {steps.map((step, index) => {
          const active = index <= currentIndex;

          return (
            <div key={step.key} className="flex items-center gap-3">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full ${
                  active
                    ? "bg-orange-500 text-black"
                    : "bg-white/10 text-white/40"
                }`}
              >
                {step.icon}
              </div>

              <p
                className={`font-bold ${
                  active ? "text-white" : "text-white/40"
                }`}
              >
                {step.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
