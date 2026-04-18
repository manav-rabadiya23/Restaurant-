import React from "react";
import { Users, Utensils } from "lucide-react";
import { FaLeaf } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

export default function HeroSection({
  userName = "Guest",
  setActiveNav,
}: {
  userName?: string;
  setActiveNav: (href: string) => void;
}) {
  const containerVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const lineVariants: Variants = {
    initial: { y: "100%", opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#050505] text-white flex flex-col justify-start md:justify-center"
    >
      {/* --- BACKGROUND ORBS (Pointer events none to prevent blocking clicks) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-10%] top-[-10%] h-[300px] w-[300px] md:h-[600px] md:w-[600px] rounded-full bg-orange-600/10 blur-[80px] md:blur-[150px]"
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-6 pt-28 pb-12 md:py-20 md:grid-cols-2 lg:gap-20 w-full">
        {/* --- RIGHT: IMAGE (Shows first on mobile) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative order-1 md:order-2 w-full max-w-[450px] mx-auto md:max-w-none"
        >
          <div className="relative group">
            <div className="absolute -inset-1 rounded-[2.5rem] bg-orange-600/20 blur-2xl group-hover:opacity-40 transition duration-1000"></div>

            <motion.div
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border border-white/10 shadow-2xl bg-neutral-900 z-10"
            >
              <img
                src="/food.jpg"
                alt="Gujarati Thali"
                className="h-[300px] sm:h-[400px] md:h-[600px] lg:h-[650px] w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 flex items-center gap-3 rounded-full bg-black/60 px-4 py-2 backdrop-blur-xl border border-white/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                  Now Serving
                </span>
              </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="relative z-20 -mt-8 md:-mt-10 mx-auto w-[90%] md:w-auto md:mx-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-[#121212]/95 p-4 md:p-6 backdrop-blur-2xl shadow-2xl"
            >
              <div className="flex h-10 w-10 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-700 shadow-lg">
                <Users className="text-white" size={20} />
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-orange-400 font-bold mb-0.5">
                  Perfect for
                </p>
                <p className="font-bold text-white text-sm md:text-xl">
                  Family Celebrations
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* --- LEFT: CONTENT --- */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="order-2 md:order-1 text-center md:text-left relative z-20"
        >
          <motion.div
            variants={lineVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 px-4 py-2 text-[10px] md:text-xs font-bold tracking-widest text-orange-400 uppercase"
          >
            <FaLeaf className="animate-pulse text-orange-500" /> Pure Veg •
            Vadodara
          </motion.div>

          <h1
            className="text-5xl font-black leading-[1.1] sm:text-7xl lg:text-8xl tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <div className="overflow-hidden">
              <motion.span
                variants={lineVariants}
                className="block text-neutral-200"
              >
                Taste the
              </motion.span>
            </div>

            <div className="overflow-hidden py-2">
              <motion.span
                variants={lineVariants}
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.7, 1, 0.7],
                  textShadow: [
                    "0 0 0px rgba(255,165,0,0)",
                    "0 0 20px rgba(255,165,0,0.4)",
                    "0 0 0px rgba(255,165,0,0)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="block italic font-serif text-neutral-100"
              >
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
          </h1>

          <motion.p
            variants={lineVariants}
            className="mt-6 max-w-lg mx-auto md:mx-0 text-base md:text-lg leading-relaxed text-neutral-400 font-light"
          >
            Namaste,{" "}
            <span className="text-orange-500 font-semibold">{userName}</span>.
            Experience an authentic culinary journey.
          </motion.p>

          <motion.div
            variants={lineVariants}
            className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4 relative z-50"
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                setActiveNav("#menu");
              }}
              className="group cursor-pointer relative z-50 flex items-center justify-center gap-3 rounded-full bg-orange-600 px-8 py-4 font-bold text-white hover:bg-orange-500 transition-all active:scale-95 shadow-lg shadow-orange-600/20"
            >
              Explore Menu <Utensils size={18} />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setActiveNav("#booking");
              }}
              className="cursor-pointer relative z-50 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-bold backdrop-blur-md hover:bg-white/10 transition-all active:scale-95 text-white"
            >
              Reserve Table
            </button>
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
