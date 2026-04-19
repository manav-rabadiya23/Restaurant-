import { motion } from "framer-motion";
import {
  CheckCircle2,
  Download,
  ShieldCheck,
  ArrowRight,
  Home,
  ReceiptText,
} from "lucide-react";
import type { Order } from "../types";
import { generatePremiumPDF } from "../sections/InvoiceGenerator";

export default function OrderSuccess({
  order,
  onClose,
}: {
  order: Order | null;
  onClose: () => void;
}) {
  if (!order) return null;

  const subtotal = order.total;
  const tax = subtotal * 0.05;
  const grandTotal = (subtotal + tax).toFixed(2);

  // Animation Variants
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    // FIXED: Changed to justify-start on mobile + added py-12 for safe vertical space
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-start lg:justify-center bg-[#0b0b0c] text-white px-4 py-12 overflow-y-auto">
      {/* Animated background glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.15),_transparent_50%)] pointer-events-none"
      />

      {/* FIXED: Added w-full and max-w-lg for mobile to ensure side-spacing */}
      <div className="relative w-full max-w-lg lg:max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* LEFT COLUMN: STATUS & ACTIONS */}
        <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-start space-y-8">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", damping: 12, stiffness: 100 }}
            className="h-24 w-24 md:h-28 md:w-28 rounded-full bg-orange-500 flex items-center justify-center shadow-[0_0_50px_rgba(249,115,22,0.5)]"
          >
            <CheckCircle2 className="h-12 w-12 md:h-14 md:w-14 text-white" />
          </motion.div>

          <div className="space-y-3 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none"
            >
              Success.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-orange-500 font-extrabold tracking-[0.3em] text-xs md:text-sm uppercase"
            >
              Order Verified & Confirmed
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col gap-4 w-full"
          >
            <button
              onClick={() => generatePremiumPDF(order)}
              className="group flex items-center justify-center gap-4 bg-white text-black px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-orange-500 hover:text-white transition-all active:scale-95 shadow-2xl"
            >
              <Download className="h-6 w-6 group-hover:animate-bounce" />
              Download Receipt
            </button>

            <button
              onClick={onClose}
              className="group flex items-center justify-center gap-3 text-white/70 hover:text-white transition-colors uppercase tracking-[0.3em] text-xs font-bold py-2"
            >
              <Home className="h-4 w-4" />
              Return Home
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-3" />
            </button>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: INVOICE SLATE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          // FIXED: Added w-full to ensure it fills but respects the px-4 parent padding
          className="lg:col-span-7 w-full bg-[#161618] rounded-[2.5rem] border border-white/10 flex flex-col shadow-2xl overflow-hidden"
        >
          {/* Header Strip */}
          <div className="bg-white/[0.04] p-8 flex flex-col sm:flex-row justify-between items-center border-b border-white/10 gap-4">
            <div className="flex items-center gap-4">
              <ReceiptText className="h-6 w-6 text-orange-500" />
              <span className="text-sm font-black uppercase tracking-[0.2em]">
                Summary Report
              </span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-green-500/20 border border-green-500/40 rounded-xl">
              <ShieldCheck className="h-5 w-5 text-green-400" />
              <span className="text-xs font-bold uppercase text-green-400">
                Paid & Secured
              </span>
            </div>
          </div>

          <div className="p-8 md:p-10 flex-1 flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              <div className="space-y-3 text-center sm:text-left">
                <p className="text-xs font-black uppercase text-orange-500/80 tracking-widest">
                  Destination
                </p>
                <p className="text-3xl font-bold">{order.customer.name}</p>
                <p className="text-base text-white/60">
                  {order.customer.address}
                </p>
              </div>
              <div className="space-y-3 text-center sm:text-right">
                <p className="text-xs font-black uppercase text-orange-500/80 tracking-widest">
                  Reference
                </p>
                <p className="text-xl font-mono font-bold bg-white/5 px-3 py-1 rounded-lg inline-block">
                  #{order.id.split("-").pop()?.toUpperCase()}
                </p>
              </div>
            </div>

            {/* Items List */}
            <motion.div
              variants={containerVars}
              initial="hidden"
              animate="visible"
              className="flex-1 space-y-6 mb-10 overflow-y-auto pr-2 custom-scrollbar max-h-48"
            >
              {order.items.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVars}
                  className="flex justify-between items-center border-b border-white/5 pb-5 group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xl font-mono font-bold text-orange-500">
                      {item.qty}x
                    </span>
                    <span className="text-xl md:text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-xl md:text-2xl font-black shrink-0">
                    ₹{(item.qty * item.price).toFixed(2)}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Total Section */}
            <div className="mt-auto pt-8 border-t-4 border-orange-500 flex flex-col items-center gap-6">
              <div className="text-center">
                <p className="text-xs font-black uppercase text-white/40 tracking-[0.2em]">
                  Total Settlement
                </p>
                <p className="text-6xl md:text-7xl font-black tracking-tighter mt-2">
                  ₹{grandTotal}
                </p>
              </div>
              <div className="px-5 py-3 bg-orange-500 rounded-2xl shadow-lg">
                <span className="text-sm text-white font-black uppercase tracking-widest">
                  INC. 5% GST
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(249, 115, 22, 0.4); border-radius: 10px; }
      `}</style>
    </div>
  );
}
