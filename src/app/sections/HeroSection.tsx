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
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#050505] text-white flex items-center"
    >
      {/* --- LIVE BACKGROUND ORBS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-10%] top-[-10%] h-[300px] w-[300px] md:h-[600px] md:w-[600px] rounded-full bg-orange-600/10 blur-[80px] md:blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], x: [0, -30, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute right-[-10%] bottom-[-10%] h-[250px] w-[250px] md:h-[500px] md:w-[500px] rounded-full bg-yellow-500/5 blur-[80px] md:blur-[120px]"
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-12 md:grid-cols-2 lg:gap-20 w-full">
        {/* --- LEFT: CONTENT --- */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="order-2 md:order-1 text-center md:text-left"
        >
          <motion.div
            variants={lineVariants}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 px-4 py-2 text-[10px] md:text-xs font-bold tracking-widest text-orange-400 uppercase"
          >
            <FaLeaf className="animate-pulse text-orange-500" /> Pure Veg •
            Vadodara's Pride
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

            {/* --- "SOUL OF" EFFECT --- */}
            <div className="overflow-hidden py-2">
              <motion.span
                variants={lineVariants}
                animate={{
                  y: [0, -5, 0],
                  textShadow: [
                    "0 0 0px rgba(255,255,255,0)",
                    "0 0 20px rgba(255,255,255,0.2)",
                    "0 0 0px rgba(255,255,255,0)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="block italic font-serif text-neutral-100 opacity-90"
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
            className="mt-8 max-w-lg mx-auto md:mx-0 text-base md:text-lg leading-relaxed text-neutral-400 font-light"
          >
            Namaste,{" "}
            <span className="text-orange-500 font-semibold">{userName}</span>.
            Experience an authentic culinary journey through the heart of
            Vadodara.
          </motion.p>

          <motion.div
            variants={lineVariants}
            className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-5"
          >
            <button
              onClick={() => setActiveNav("#menu")}
              className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-orange-600 px-10 py-4 font-bold text-white transition-all hover:bg-orange-500 hover:shadow-[0_0_40px_rgba(234,88,12,0.4)] active:scale-95"
            >
              Explore Menu{" "}
              <Utensils
                size={18}
                className="group-hover:rotate-12 transition-transform"
              />
            </button>
            <button
              onClick={() => setActiveNav("#booking")}
              className="rounded-full border border-white/10 bg-white/5 px-10 py-4 font-bold backdrop-blur-md transition-all hover:border-orange-500 hover:bg-white/10 active:scale-95"
            >
              Reserve Table
            </button>
          </motion.div>
        </motion.div>

        {/* --- RIGHT: IMAGE & ANIMATED BADGES --- */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="relative order-1 md:order-2 w-full max-w-[500px] mx-auto md:max-w-none"
        >
          <div className="relative group">
            {/* Outer Glow */}
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-orange-600 to-yellow-600 opacity-20 blur-2xl group-hover:opacity-40 transition duration-1000"></div>

            <motion.div
              whileInView={{ scale: [0.98, 1] }}
              whileTap={{ scale: 0.97 }} // Feedback for mobile users
              className="relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl bg-neutral-900 z-10"
            >
              <img
                src="/food.jpg"
                alt="Gujarati Thali"
                className="h-[400px] w-full object-cover md:h-[600px] lg:h-[650px] transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Now Serving Badge */}
              <div className="absolute top-6 left-6 flex items-center gap-3 rounded-full bg-black/60 px-4 py-2 backdrop-blur-xl border border-white/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                  Now Serving
                </span>
              </div>
            </motion.div>

            {/* --- FLOATING BADGE (Fixed position) --- */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="relative z-20 -mt-10 mx-auto w-[85%] md:w-auto md:mx-8 flex items-center gap-5 rounded-2xl border border-white/10 bg-[#121212]/95 p-5 md:p-6 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            >
              <div className="flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-700 shadow-lg">
                <Users className="text-white" size={24} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-orange-400 font-bold mb-1">
                  Perfect for
                </p>
                <p className="font-bold text-white text-base md:text-xl">
                  Family Celebrations
                </p>
              </div>
            </motion.div>
          </div>
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
