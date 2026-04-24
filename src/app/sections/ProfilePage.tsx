import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Edit2, Check, X } from "lucide-react";
import { motion } from "framer-motion";

export default function ProfilePage({ userName, onBack, onUpdateUser }: any) {
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
      <div className="max-w-5xl mx-auto space-y-10">
        {/* BACK */}
        <button onClick={onBack} className="text-orange-400 font-bold">
          ← Back
        </button>

        {/* PROFILE HEADER */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center text-4xl font-bold">
            {userData.name?.[0] || "U"}
          </div>

          <div className="flex items-center gap-3">
            {isEditing ? (
              <>
                <input
                  value={userData.name}
                  onChange={(e) =>
                    setUserData({ ...userData, name: e.target.value })
                  }
                  className="bg-transparent border-b border-orange-400 text-3xl font-bold outline-none"
                />
                <Check onClick={handleSave} className="cursor-pointer" />
                <X
                  onClick={() => setIsEditing(false)}
                  className="cursor-pointer"
                />
              </>
            ) : (
              <>
                <h1 className="text-3xl font-bold">{userData.name}</h1>
                <Edit2
                  onClick={() => setIsEditing(true)}
                  className="cursor-pointer"
                />
              </>
            )}
          </div>
        </div>

        {/* INFO CARDS (FIXED UI) */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* EMAIL */}
          <motion.div
            whileHover={{ y: -5 }}
            className="rounded-2xl bg-white/5 p-5 text-left"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-orange-400">
              Email
            </p>

            {isEditing ? (
              <input
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                className="w-full bg-transparent border-b border-white/20 pb-2 outline-none text-white"
              />
            ) : (
              <div className="flex items-center gap-3 text-white">
                <Mail size={16} className="text-white/70" />
                <span className="break-all">
                  {userData.email || "Not added"}
                </span>
              </div>
            )}
          </motion.div>

          {/* PHONE */}
          <motion.div
            whileHover={{ y: -5 }}
            className="rounded-2xl bg-white/5 p-5 text-left"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-orange-400">
              Phone
            </p>

            {isEditing ? (
              <input
                value={userData.phone}
                onChange={(e) =>
                  setUserData({ ...userData, phone: e.target.value })
                }
                className="w-full bg-transparent border-b border-white/20 pb-2 outline-none text-white"
              />
            ) : (
              <div className="flex items-center gap-3 text-white">
                <Phone size={16} className="text-white/70" />
                <span>{userData.phone || "Not added"}</span>
              </div>
            )}
          </motion.div>

          {/* ADDRESS */}
          <motion.div
            whileHover={{ y: -5 }}
            className="rounded-2xl bg-white/5 p-5 text-left sm:col-span-2"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-orange-400">
              Address
            </p>

            {isEditing ? (
              <input
                value={userData.address}
                onChange={(e) =>
                  setUserData({ ...userData, address: e.target.value })
                }
                className="w-full bg-transparent border-b border-white/20 pb-2 outline-none text-white"
              />
            ) : (
              <div className="flex items-center gap-3 text-white">
                <MapPin size={16} className="text-white/70" />
                <span>{userData.address || "Not added"}</span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
