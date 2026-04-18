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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0b0b0c] text-white p-4 md:p-6 overflow-y-auto">
      {/* Animated background glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.15),_transparent_50%)] pointer-events-none"
      />

      <div className="relative w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-10 md:py-0">
        {/* LEFT COLUMN: STATUS & ACTIONS */}
        <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-start p-4 md:p-8 space-y-6 md:space-y-8">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", damping: 12, stiffness: 100 }}
            className="h-20 w-20 md:h-28 md:w-28 rounded-full bg-orange-500 flex items-center justify-center shadow-[0_0_50px_rgba(249,115,22,0.5)]"
          >
            <CheckCircle2 className="h-10 w-10 md:h-14 md:w-14 text-white" />
          </motion.div>

          <div className="space-y-3 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none"
            >
              Success.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-orange-500 font-extrabold tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm uppercase"
            >
              Order Verified & Confirmed
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="pt-4 flex flex-col gap-4 w-full sm:w-80"
          >
            <button
              onClick={() => generatePremiumPDF(order)}
              className="group flex items-center justify-center gap-4 bg-white text-black px-6 py-4 md:px-8 md:py-5 rounded-2xl font-black uppercase tracking-widest text-xs md:text-sm hover:bg-orange-500 hover:text-white transition-all active:scale-95 shadow-2xl"
            >
              <Download className="h-5 w-5 md:h-6 md:w-6 group-hover:animate-bounce" />
              Download Receipt
            </button>

            <button
              onClick={onClose}
              className="group flex items-center justify-center gap-3 text-white/70 hover:text-white transition-colors uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold py-2"
            >
              <Home className="h-4 w-4" />
              Return Home
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
            </button>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: DATA SLATE (THE INVOICE) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 bg-[#161618] rounded-[1.5rem] md:rounded-[2.5rem] border border-white/10 flex flex-col shadow-2xl overflow-hidden"
        >
          {/* Invoice Header */}
          <div className="bg-white/[0.04] p-6 md:p-8 flex flex-col sm:flex-row justify-between items-center border-b border-white/10 gap-4">
            <div className="flex items-center gap-4">
              <ReceiptText className="h-5 w-5 md:h-6 md:w-6 text-orange-500" />
              <span className="text-xs md:text-sm font-black uppercase tracking-[0.2em]">
                Summary Report
              </span>
            </div>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex items-center gap-3 px-3 py-1.5 md:px-4 md:py-2 bg-green-500/20 border border-green-500/40 rounded-xl"
            >
              <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-green-400" />
              <span className="text-[10px] md:text-xs font-bold uppercase text-green-400">
                Paid & Secured
              </span>
            </motion.div>
          </div>

          <div className="p-6 md:p-10 flex-1 flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 md:mb-12">
              <div className="space-y-2 md:space-y-3 text-center sm:text-left">
                <p className="text-[10px] md:text-sm font-black uppercase text-orange-500/80 tracking-widest">
                  Destination
                </p>
                <p className="text-2xl md:text-3xl font-bold">
                  {order.customer.name}
                </p>
                <p className="text-sm md:text-base text-white/60 line-clamp-2">
                  {order.customer.address}
                </p>
              </div>
              <div className="space-y-2 md:space-y-3 text-center sm:text-right">
                <p className="text-[10px] md:text-sm font-black uppercase text-orange-500/80 tracking-widest">
                  Reference
                </p>
                <p className="text-lg md:text-xl font-mono font-bold bg-white/5 px-3 py-1 rounded-lg inline-block">
                  #{order.id.split("-").pop()?.toUpperCase()}
                </p>
              </div>
            </div>

            {/* Items List */}
            <motion.div
              variants={containerVars}
              initial="hidden"
              animate="visible"
              className="flex-1 space-y-4 md:space-y-6 mb-8 overflow-y-auto pr-2 custom-scrollbar max-h-48 md:max-h-60"
            >
              {order.items.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVars}
                  className="flex justify-between items-center border-b border-white/5 pb-4 group"
                >
                  <div className="flex items-center gap-3 md:gap-6">
                    <span className="text-lg md:text-xl font-mono font-bold text-orange-500">
                      {item.qty}x
                    </span>
                    <span className="text-lg md:text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-lg md:text-2xl font-black shrink-0">
                    ₹{(item.qty * item.price).toFixed(2)}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Grand Total */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="mt-auto pt-6 md:pt-8 border-t-2 md:border-t-4 border-orange-500 flex flex-col sm:flex-row justify-between items-center gap-4"
            >
              <div className="text-center sm:text-left">
                <p className="text-[10px] md:text-sm font-black uppercase text-white/40 tracking-[0.2em]">
                  Total Settlement
                </p>
                <p className="text-5xl md:text-7xl font-black tracking-tighter mt-1">
                  ₹{grandTotal}
                </p>
              </div>
              <div className="px-4 py-2 md:px-5 md:py-3 bg-orange-500 rounded-xl md:rounded-2xl shadow-lg">
                <span className="text-[10px] md:text-sm text-white font-black uppercase tracking-widest">
                  INC. 5% GST
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(249, 115, 22, 0.4);
            border-radius: 10px;
          }
        `}
      </style>
    </div>
  );
}
