import React, { useState } from "react";
import { Order } from "../types";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  ArrowLeft,
  Edit2,
  Check,
  X,
  MapPin,
  Calendar,
  Crown,
  Mail,
  Phone,
  ShoppingBag,
  ShieldCheck,
} from "lucide-react";

interface ProfilePageProps {
  orders: Order[];
  userName: string;
  onBack: () => void;
  onUpdateUser: (newName: string) => void;
}

const ProfilePage = ({
  orders,
  userName,
  onBack,
  onUpdateUser,
}: ProfilePageProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(userName);

  const handleSave = () => {
    onUpdateUser(tempName.toUpperCase());
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-[#060606] text-white pt-24 pb-32 px-8 animate-in fade-in duration-1000">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* PROPER VISIBLE EXIT BUTTON */}
        <button
          onClick={onBack}
          className="group flex items-center gap-4 text-orange-400 font-black tracking-[0.5em] uppercase text-[11px] transition-all hover:text-white"
        >
          <div className="h-[2px] w-12 bg-orange-400 group-hover:bg-white transition-colors" />
          EXIT TO LOUNGE
        </button>

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative group animate-luxury-float">
              <div className="absolute -inset-4 bg-orange-500/20 rounded-full blur-3xl opacity-50" />
              <div className="relative w-64 h-64 rounded-full p-[2px] bg-gradient-to-b from-orange-400 to-yellow-400">
                <div className="w-full h-full rounded-full bg-[#0b0b0b] flex items-center justify-center border border-white/10">
                  <span className="text-8xl font-black text-white uppercase tracking-tighter drop-shadow-2xl">
                    {userName[0]}
                  </span>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 bg-orange-500 p-3 rounded-full text-black shadow-2xl animate-mini-float">
                <Crown size={20} />
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-[10px] font-black tracking-[0.3em] uppercase">
                <ShieldCheck size={12} /> Gold Member Status
              </div>

              {/* NAME WITH PROPER VISIBILITY PROTECTION */}
              <div className="flex items-center justify-center lg:justify-start gap-8">
                {isEditing ? (
                  <div className="flex flex-col lg:flex-row items-center gap-6 animate-in slide-in-from-left-4">
                    <input
                      value={tempName}
                      onChange={(e) =>
                        setTempName(e.target.value.toUpperCase())
                      }
                      className="bg-transparent border-b-2 border-orange-500 text-6xl font-black uppercase tracking-tighter focus:outline-none text-white w-full py-2"
                      autoFocus
                    />
                    <div className="flex gap-4">
                      <button
                        onClick={handleSave}
                        className="p-4 bg-white text-black rounded-full hover:scale-110 transition-transform"
                      >
                        <Check size={24} />
                      </button>
                      <button
                        onClick={() => setIsEditing(false)}
                        className="p-4 bg-white/5 border border-white/10 rounded-full text-white"
                      >
                        <X size={24} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h1
                      className="text-7xl md:text-8xl lg:text-9xl font-black uppercase italic tracking-tighter text-shimmer leading-none drop-shadow-2xl"
                      style={{
                        WebkitTextStroke: "0.8px rgba(255,255,255,0.1)",
                      }}
                    >
                      {userName}
                    </h1>
                    <button
                      onClick={() => setIsEditing(true)}
                      className="text-white/20 hover:text-orange-400 transition-colors"
                    >
                      <Edit2 size={28} />
                    </button>
                  </>
                )}
              </div>

              {/* VISIBLE CONTACT DETAILS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 border-t border-white/10">
                <div className="p-6 rounded-3xl bg-white/5 border border-white/5 space-y-2">
                  <p className="text-[10px] font-black text-orange-400 uppercase tracking-[0.4em]">
                    Email Base
                  </p>
                  <div className="flex items-center gap-4 text-base font-black tracking-widest text-white uppercase">
                    <Mail size={18} className="text-orange-400" />{" "}
                    manav@example.com
                  </div>
                </div>
                <div className="p-6 rounded-3xl bg-white/5 border border-white/5 space-y-2">
                  <p className="text-[10px] font-black text-orange-400 uppercase tracking-[0.4em]">
                    Phone Line
                  </p>
                  <div className="flex items-center gap-4 text-base font-black tracking-widest text-white">
                    <Phone size={18} className="text-orange-400" /> +91 98765
                    43210
                  </div>
                </div>
                <div className="p-6 rounded-3xl bg-white/5 border border-white/5 md:col-span-2 space-y-2">
                  <p className="text-[10px] font-black text-orange-400 uppercase tracking-[0.4em]">
                    Geographical Base
                  </p>
                  <div className="flex items-center gap-4 text-base font-black tracking-widest text-white uppercase">
                    <MapPin size={18} className="text-orange-400" /> Surat,
                    Gujarat, India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PROPER VISIBLE CULINARY REGISTRY */}
        <div className="space-y-12">
          <div className="flex items-center justify-between border-b border-white/10 pb-8">
            <h2 className="text-[13px] font-black tracking-[0.8em] text-white uppercase">
              CULINARY REGISTRY
            </h2>
            <div className="flex items-center gap-4 text-[11px] font-black uppercase tracking-widest text-orange-400 italic">
              <ShoppingBag size={16} /> Total Records: {orders.length}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {orders.length === 0 ? (
              <div className="col-span-full py-32 rounded-[4rem] border border-dashed border-white/10 text-center opacity-30">
                <p className="text-white font-black tracking-[0.6em] uppercase text-xs">
                  Waiting for first entry...
                </p>
              </div>
            ) : (
              orders.map((order) => (
                <Card
                  key={order.id}
                  className="bg-[#111111]/50 backdrop-blur-3xl border border-white/10 rounded-[3.5rem] overflow-hidden hover:border-orange-500/50 transition-all duration-500"
                >
                  <div className="p-10 space-y-10">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <p className="text-[9px] font-black text-orange-400 uppercase tracking-widest">
                          Tracking Ref.
                        </p>
                        <p className="text-4xl font-black italic tracking-tighter uppercase text-white">
                          #{order.id}
                        </p>
                      </div>
                      <Badge className="bg-white text-black font-black px-6 py-2 rounded-full text-[10px] tracking-widest uppercase">
                        Preparing
                      </Badge>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-white/5">
                      {order.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between text-[11px] font-black uppercase tracking-[0.2em] text-white/50 border-b border-white/5 pb-2"
                        >
                          <span>
                            {item.name}{" "}
                            <span className="text-orange-400 ml-3">
                              x{item.qty}
                            </span>
                          </span>
                          <span className="text-white">
                            ₹{item.price * item.qty}
                          </span>
                        </div>
                      ))}
                      <div className="pt-8 flex justify-between items-center">
                        <span className="text-[10px] font-black tracking-[0.5em] text-white/20 uppercase italic">
                          Total Valuation
                        </span>
                        <span className="text-5xl font-black text-orange-400 italic tracking-tighter">
                          ₹{order.total}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
