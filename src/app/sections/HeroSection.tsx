import React from "react";
import { Users, Utensils } from "lucide-react";
import { FaLeaf } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

export default function HeroSection({
  userName,
  setActiveNav,
}: {
  userName: string;
  setActiveNav: (href: string) => void;
}) {
  const containerVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const lineVariants: Variants = {
    initial: { y: "100%", opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1], // The "Premium" easing curve
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] overflow-hidden bg-[#050505] text-white"
    >
      {/* --- LIVE BACKGROUND ORBS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-5%] top-[-5%] h-[500px] w-[500px] rounded-full bg-orange-600/10 blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute right-[-5%] bottom-[-5%] h-[400px] w-[400px] rounded-full bg-yellow-500/5 blur-[100px]"
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 min-h-[90vh]">
        {/* --- LEFT: ANIMATED CONTENT --- */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div
            variants={lineVariants}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 px-4 py-2 text-xs font-bold tracking-widest text-orange-400 uppercase"
          >
            <FaLeaf className="animate-pulse" /> Pure Veg • Vadodara's Pride
          </motion.div>

          <h1
            className="text-6xl font-black leading-[1.05] sm:text-7xl md:text-8xl tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <div className="overflow-hidden">
              <motion.span variants={lineVariants} className="block">
                Taste the
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span variants={lineVariants} className="block">
                soul of
              </motion.span>
            </div>
            <div className="overflow-hidden py-1">
              <motion.span
                variants={lineVariants}
                className="block bg-gradient-to-r from-orange-500 via-yellow-200 to-orange-600 bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer-live"
              >
                Gujarat
              </motion.span>
            </div>
            <div className="overflow-hidden py-1">
              <motion.span
                variants={lineVariants}
                className="block bg-gradient-to-r from-orange-500 via-yellow-200 to-orange-600 bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer-live"
              >
                in Vadodara
              </motion.span>
            </div>
          </h1>

          <motion.p
            variants={lineVariants}
            className="mt-8 max-w-lg text-lg leading-relaxed text-neutral-400"
          >
            Namaste,{" "}
            <span className="text-orange-500 font-semibold">{userName}</span>.
            Experience an authentic culinary journey through the heart of
            Gujarat.
          </motion.p>

          <motion.div
            variants={lineVariants}
            className="mt-10 flex flex-wrap gap-5"
          >
            <button
              onClick={() => setActiveNav("#menu")}
              className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-orange-600 px-8 py-4 font-bold text-white transition-all hover:bg-orange-500 hover:shadow-[0_0_30px_rgba(234,88,12,0.3)] active:scale-95"
            >
              Explore Menu{" "}
              <Utensils
                size={18}
                className="group-hover:rotate-12 transition-transform"
              />
            </button>
            <button
              onClick={() => setActiveNav("#booking")}
              className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-bold backdrop-blur-md transition-all hover:border-orange-500 hover:bg-white/10 active:scale-95"
            >
              Reserve Table
            </button>
          </motion.div>
        </motion.div>

        {/* --- RIGHT: IMAGE & BADGES --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[3rem] bg-orange-500/10 blur-3xl animate-pulse" />
          <motion.div
            whileHover={{ y: -10 }}
            className="relative overflow-hidden rounded-[2.5rem] border border-white/5 shadow-2xl"
          >
            <img
              src="/food.jpg"
              alt="Thali"
              className="h-[500px] w-full object-cover sm:h-[650px] transition-transform duration-700 hover:scale-110"
            />

            <div className="absolute top-6 left-6 flex items-center gap-3 rounded-full bg-black/40 px-4 py-2 backdrop-blur-xl border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                Now Serving
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur-2xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 shadow-lg">
                <Users className="text-white" size={24} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-400">
                  Perfect for
                </p>
                <p className="font-bold text-white text-sm sm:text-base">
                  Family Celebrations
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes shimmer-live {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .animate-shimmer-live {
          animation: shimmer-live 4s linear infinite;
        }
      `}</style>
    </section>
  );
}
