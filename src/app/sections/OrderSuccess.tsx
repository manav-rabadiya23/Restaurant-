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

  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-[#0b0b0c] text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pointer-events-none fixed inset-x-0 top-16 bottom-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.16),_transparent_45%)]"
      />

      <div className="relative mx-auto flex min-h-full w-full max-w-7xl items-center px-4 py-10 sm:px-6 lg:py-14">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="flex flex-col items-center justify-center space-y-7 lg:col-span-5 lg:items-start">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", damping: 12, stiffness: 100 }}
              className="flex h-24 w-24 items-center justify-center rounded-full bg-orange-500 shadow-[0_0_50px_rgba(249,115,22,0.5)] md:h-28 md:w-28"
            >
              <CheckCircle2 className="h-12 w-12 text-white md:h-14 md:w-14" />
            </motion.div>

            <div className="space-y-3 text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-6xl font-black uppercase leading-none tracking-tighter md:text-8xl"
              >
                Success.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xs font-extrabold uppercase tracking-[0.3em] text-orange-500 md:text-sm"
              >
                Order Verified & Confirmed
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex w-full max-w-md flex-col gap-4"
            >
              <button
                onClick={() => generatePremiumPDF(order)}
                className="group flex items-center justify-center gap-4 rounded-2xl bg-white px-8 py-5 text-sm font-black uppercase tracking-widest text-black shadow-2xl transition-all hover:bg-orange-500 hover:text-white active:scale-95"
              >
                <Download className="h-6 w-6 group-hover:animate-bounce" />
                Download Receipt
              </button>

              <button
                onClick={onClose}
                className="group flex items-center justify-center gap-3 py-2 text-xs font-bold uppercase tracking-[0.3em] text-white/70 transition-colors hover:text-white"
              >
                <Home className="h-4 w-4" />
                Return Home
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-3" />
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex w-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#161618] shadow-2xl lg:col-span-7 lg:rounded-[2.5rem]"
          >
            <div className="flex flex-col items-center justify-between gap-4 border-b border-white/10 bg-white/[0.04] p-5 sm:flex-row md:p-6">
              <div className="flex items-center gap-4">
                <ReceiptText className="h-6 w-6 text-orange-500" />
                <span className="text-sm font-black uppercase tracking-[0.2em]">
                  Summary Report
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-green-500/40 bg-green-500/20 px-4 py-2">
                <ShieldCheck className="h-5 w-5 text-green-400" />
                <span className="text-xs font-bold uppercase text-green-400">
                  Paid & Secured
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6 md:p-8">
              <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="space-y-3 text-center sm:text-left">
                  <p className="text-xs font-black uppercase tracking-widest text-orange-500/80">
                    Destination
                  </p>
                  <p className="text-2xl font-bold md:text-3xl">
                    {order.customer.name}
                  </p>
                  <p className="text-base text-white/60">
                    {order.customer.address}
                  </p>
                </div>

                <div className="space-y-3 text-center sm:text-right">
                  <p className="text-xs font-black uppercase tracking-widest text-orange-500/80">
                    Reference
                  </p>
                  <p className="inline-block rounded-lg bg-white/5 px-3 py-1 font-mono text-lg font-bold md:text-xl">
                    #{order.id.split("-").pop()?.toUpperCase()}
                  </p>
                </div>
              </div>

              <motion.div
                variants={containerVars}
                initial="hidden"
                animate="visible"
                className="custom-scrollbar mb-8 max-h-48 flex-1 space-y-5 overflow-y-auto pr-2"
              >
                {order.items.map((item, i) => {
                  const qty = Number(item.qty || 0);
                  const price = Number(item.price || 0);

                  return (
                    <motion.div
                      key={i}
                      variants={itemVars}
                      className="group flex items-center justify-between border-b border-white/5 pb-5"
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-xl font-bold text-orange-500">
                          {qty}x
                        </span>

                        <span className="text-xl font-bold text-white transition-colors group-hover:text-orange-400 md:text-2xl">
                          {item.name}
                        </span>
                      </div>

                      <span className="shrink-0 text-xl font-black md:text-2xl">
                        ₹{(qty * price).toFixed(2)}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>

              <div className="mt-auto flex flex-col items-center gap-5 border-t-4 border-orange-500 pt-7">
                <div className="text-center">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-white/40">
                    Total Settlement
                  </p>
                  <p className="mt-2 text-5xl font-black tracking-tighter md:text-7xl">
                    ₹{grandTotal}
                  </p>
                </div>

                <div className="rounded-2xl bg-orange-500 px-5 py-3 shadow-lg">
                  <span className="text-sm font-black uppercase tracking-widest text-white">
                    INC. 5% GST
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(249, 115, 22, 0.4);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
