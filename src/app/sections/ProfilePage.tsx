import React, { useState } from "react";
import { Order } from "../types";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Edit2,
  Check,
  X,
  MapPin,
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
    <div className="min-h-screen bg-[#060606] text-white pt-20 pb-24 px-4 sm:px-8 animate-in fade-in duration-1000">
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        {/* --- EXIT BUTTON WITH ANIMATION --- */}
        <button
          onClick={onBack}
          className="group flex items-center gap-3 md:gap-4 text-orange-400 font-black tracking-[0.3em] md:tracking-[0.5em] uppercase text-[9px] md:text-[11px] transition-all hover:text-white"
        >
          <div className="h-[1px] md:h-[2px] w-8 md:w-12 bg-orange-400 group-hover:bg-white group-hover:w-16 transition-all duration-500" />
          EXIT TO LOUNGE
        </button>

        {/* --- HEADER SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* AVATAR WITH LUXURY FLOAT ANIMATION */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative group animate-luxury-float">
              <div className="absolute -inset-4 bg-orange-500/20 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full p-[2px] bg-gradient-to-b from-orange-400 to-yellow-400 shadow-[0_0_50px_rgba(234,88,12,0.2)]">
                <div className="w-full h-full rounded-full bg-[#0b0b0b] flex items-center justify-center border border-white/10 overflow-hidden">
                  <span className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter drop-shadow-2xl">
                    {userName[0]}
                  </span>
                </div>
              </div>
              {/* MINI FLOAT CROWN */}
              <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-orange-500 p-2 md:p-3 rounded-full text-black shadow-2xl animate-mini-float">
                <Crown size={18} />
              </div>
            </div>
          </div>

          {/* USER INFO SECTION */}
          <div className="lg:col-span-8 space-y-8 md:space-y-10 text-center lg:text-left">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 md:gap-3 px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-[9px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase">
                <ShieldCheck size={12} className="animate-pulse" /> Gold Member
                Status
              </div>

              {/* NAME WITH EDITING TRANSITIONS */}
              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4 md:gap-8">
                {isEditing ? (
                  <div className="flex flex-col sm:flex-row items-center gap-4 w-full animate-in slide-in-from-left-8 duration-500">
                    <input
                      value={tempName}
                      onChange={(e) =>
                        setTempName(e.target.value.toUpperCase())
                      }
                      className="bg-transparent border-b-2 border-orange-500 text-4xl md:text-6xl font-black uppercase tracking-tighter focus:outline-none text-white w-full py-2 text-center lg:text-left"
                      autoFocus
                    />
                    <div className="flex gap-4 shrink-0">
                      <button
                        onClick={handleSave}
                        className="p-3 md:p-4 bg-white text-black rounded-full hover:scale-110 active:scale-90 transition-all shadow-xl"
                      >
                        <Check size={20} />
                      </button>
                      <button
                        onClick={() => setIsEditing(false)}
                        className="p-3 md:p-4 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 transition-all"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-4 md:gap-6 group">
                    <h1
                      className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase italic tracking-tighter leading-none drop-shadow-2xl text-shimmer"
                      style={{
                        WebkitTextStroke: "0.5px rgba(255,255,255,0.1)",
                      }}
                    >
                      {userName}
                    </h1>
                    <button
                      onClick={() => setIsEditing(true)}
                      className="opacity-0 group-hover:opacity-100 focus:opacity-100 text-white/20 hover:text-orange-400 transition-all p-2"
                    >
                      <Edit2 size={24} />
                    </button>
                  </div>
                )}
              </div>

              {/* CONTACT DETAILS (Responsive Grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-8 md:pt-10 border-t border-white/10">
                <div className="p-4 md:p-6 rounded-[2rem] bg-white/5 border border-white/5 space-y-1 md:space-y-2 text-left hover:bg-white/10 transition-colors duration-500">
                  <p className="text-[8px] md:text-[10px] font-black text-orange-400 uppercase tracking-[0.3em] md:tracking-[0.4em]">
                    Email
                  </p>
                  <div className="flex items-center gap-3 text-sm md:text-base font-black tracking-wider text-white uppercase truncate">
                    <Mail size={16} className="text-orange-400 shrink-0" />{" "}
                    manav@example.com
                  </div>
                </div>
                <div className="p-4 md:p-6 rounded-[2rem] bg-white/5 border border-white/5 space-y-1 md:space-y-2 text-left hover:bg-white/10 transition-colors duration-500">
                  <p className="text-[8px] md:text-[10px] font-black text-orange-400 uppercase tracking-[0.3em] md:tracking-[0.4em]">
                    Phone Line
                  </p>
                  <div className="flex items-center gap-3 text-sm md:text-base font-black tracking-wider text-white">
                    <Phone size={16} className="text-orange-400 shrink-0" /> +91
                    98765 43210
                  </div>
                </div>
                <div className="p-4 md:p-6 rounded-[2rem] bg-white/5 border border-white/5 sm:col-span-2 space-y-1 md:space-y-2 text-left hover:bg-white/10 transition-colors duration-500">
                  <p className="text-[8px] md:text-[10px] font-black text-orange-400 uppercase tracking-[0.3em] md:tracking-[0.4em]">
                    Address
                  </p>
                  <div className="flex items-center gap-3 text-sm md:text-base font-black tracking-wider text-white uppercase">
                    <MapPin size={16} className="text-orange-400 shrink-0" />{" "}
                    Vadodara, Gujarat, India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- CULINARY REGISTRY --- */}
        <div className="space-y-8 md:space-y-12">
          <div className="flex flex-col sm:flex-row items-center justify-between border-b border-white/10 pb-6 gap-4 text-center sm:text-left">
            <h2 className="text-[11px] md:text-[13px] font-black tracking-[0.5em] md:tracking-[0.8em] text-white uppercase">
              CULINARY REGISTRY
            </h2>
            <div className="flex items-center gap-3 text-[10px] md:text-[11px] font-black uppercase tracking-widest text-orange-400 italic">
              <ShoppingBag size={14} className="animate-bounce" /> Total
              Records: {orders.length}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {orders.length === 0 ? (
              <div className="col-span-full py-20 md:py-32 rounded-[2.5rem] md:rounded-[4rem] border border-dashed border-white/10 text-center opacity-30 px-6 animate-pulse">
                <p className="text-white font-black tracking-[0.4em] md:tracking-[0.6em] uppercase text-[10px] md:text-xs">
                  Waiting for first entry...
                </p>
              </div>
            ) : (
              orders.map((order, index) => (
                <Card
                  key={order.id}
                  style={{ animationDelay: `${index * 100}ms` }}
                  className="bg-[#111111]/50 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden hover:border-orange-500/50 transition-all duration-700 animate-in slide-in-from-bottom-10"
                >
                  <div className="p-6 md:p-10 space-y-6 md:space-y-10">
                    <div className="flex justify-between items-start gap-4">
                      <div className="space-y-1">
                        <p className="text-[8px] font-black text-orange-400 uppercase tracking-widest">
                          Tracking Ref.
                        </p>
                        <p className="text-2xl md:text-4xl font-black italic tracking-tighter uppercase text-white">
                          #{order.id}
                        </p>
                      </div>
                      <Badge className="bg-white text-black font-black px-4 md:px-6 py-1.5 md:py-2 rounded-full text-[8px] md:text-[10px] tracking-widest uppercase shrink-0">
                        Preparing
                      </Badge>
                    </div>

                    <div className="space-y-3 md:space-y-4 pt-4 border-t border-white/5">
                      {order.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between text-[10px] md:text-[11px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-white/50 border-b border-white/5 pb-2 gap-4"
                        >
                          <span className="truncate">
                            {item.name}{" "}
                            <span className="text-orange-400 ml-2 md:ml-3">
                              x{item.qty}
                            </span>
                          </span>
                          <span className="text-white shrink-0">
                            ₹{item.price * item.qty}
                          </span>
                        </div>
                      ))}
                      <div className="pt-6 md:pt-8 flex justify-between items-center">
                        <span className="text-[8px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.5em] text-white/20 uppercase italic">
                          Total Valuation
                        </span>
                        <span className="text-3xl md:text-5xl font-black text-orange-400 italic tracking-tighter">
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
