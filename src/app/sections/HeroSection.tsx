import React from "react";
import { Users, Utensils, CalendarCheck, Sparkles } from "lucide-react";
import { FaLeaf } from "react-icons/fa";
import {
  motion,
  useScroll,
  useTransform,
  type Variants,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";

export default function HeroSection({
  userName = "Guest",
  setActiveNav,
}: {
  userName?: string;
  setActiveNav: (href: string) => void;
}) {
  const { scrollYProgress } = useScroll();

  const mouseX = useMotionValue(800);
  const mouseY = useMotionValue(450);

  const springX = useSpring(mouseX, { stiffness: 45, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 45, damping: 22 });

  function handleMouseMove({ clientX, clientY }: React.MouseEvent) {
    mouseX.set(clientX);
    mouseY.set(clientY);
  }

  const heroScale = useTransform(scrollYProgress, [0, 0.35], [1, 0.94]);
  const textY = useTransform(scrollYProgress, [0, 0.35], [0, -80]);
  const videoY = useTransform(scrollYProgress, [0, 0.35], [0, 80]);
  const watermarkY = useTransform(scrollYProgress, [0, 0.35], [0, -45]);
  const watermarkOpacity = useTransform(
    scrollYProgress,
    [0, 0.35],
    [0.07, 0.015],
  );

  const videoRotateX = useTransform(scrollYProgress, [0, 0.35], [0, 7]);
  const videoRotateY = useTransform(scrollYProgress, [0, 0.35], [0, -8]);
  const glowY = useTransform(scrollYProgress, [0, 0.35], [0, 90]);

  const floorRotateY = useTransform(springX, [0, 1600], [-5, 5]);
  const floorY = useTransform(springY, [0, 900], [20, -20]);

  const mouseGlow = useMotionTemplate`
    radial-gradient(
      520px circle at ${springX}px ${springY}px,
      rgba(251,146,60,0.20),
      rgba(245,158,11,0.10) 28%,
      transparent 70%
    )
  `;

  const glowX = useTransform(springX, [0, 1600], [-80, 80]);
  const glowMoveY = useTransform(springY, [0, 900], [-50, 50]);

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.14, delayChildren: 1.8 },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 38, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.85 },
    },
  };

  const videoReveal: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.88,
      y: 50,
      rotateX: 12,
      rotateY: -10,
      filter: "blur(12px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      filter: "blur(0px)",
      transition: { delay: 1.9, duration: 1.1 },
    },
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen w-full flex-col justify-start overflow-x-hidden bg-[#050505] text-white md:justify-center"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,146,60,0.18),transparent_42%),linear-gradient(180deg,#120706_0%,#050505_70%)]" />

        <motion.div
          className="absolute inset-0 z-10 opacity-70"
          style={{ background: mouseGlow }}
        />

        {/* PREMIUM GUJARATI TORAN */}
        <div className="absolute left-0 top-0 z-[20] w-full">
          <div className="mx-auto flex max-w-6xl items-start justify-center gap-2 px-3 pt-1 sm:gap-3">
            {[...Array(21)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, i % 2 === 0 ? 6 : 3, 0],
                  rotate: [0, i % 2 === 0 ? 4 : -4, 0],
                }}
                transition={{
                  duration: 2.4 + i * 0.04,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex flex-col items-center"
              >
                <div className="h-5 w-px bg-yellow-300/80" />
                <div className="relative h-5 w-5 rounded-full bg-orange-500 shadow-[0_0_18px_rgba(251,146,60,0.8)]">
                  <div className="absolute inset-1 rounded-full bg-yellow-300/70" />
                </div>
                <div className="mt-1 h-6 w-4 rounded-b-full bg-gradient-to-b from-green-500 to-green-800 shadow-[0_0_12px_rgba(34,197,94,0.35)]" />
                <div className="mt-1 h-4 w-3 rounded-b-full bg-gradient-to-b from-yellow-300 to-orange-600 shadow-[0_0_12px_rgba(251,191,36,0.55)]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* SIDE ORNAMENTAL CORNERS */}
        <div className="absolute left-3 top-24 z-[8] hidden h-32 w-32 rounded-tl-[3rem] border-l border-t border-orange-300/30 md:block" />
        <div className="absolute right-3 top-24 z-[8] hidden h-32 w-32 rounded-tr-[3rem] border-r border-t border-orange-300/30 md:block" />
        <div className="absolute bottom-8 left-3 z-[8] hidden h-32 w-32 rounded-bl-[3rem] border-b border-l border-orange-300/25 md:block" />
        <div className="absolute bottom-8 right-3 z-[8] hidden h-32 w-32 rounded-br-[3rem] border-b border-r border-orange-300/25 md:block" />

        {/* LEFT PREMIUM MANDALA */}
        <motion.svg
          animate={{ rotate: [0, 10, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          viewBox="0 0 100 100"
          className="absolute -left-16 top-[26%] z-[4] w-60 text-orange-400 opacity-35 sm:-left-8 md:left-5 md:w-72"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="50" cy="50" r="46" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="38" strokeWidth="0.45" />
          <circle cx="50" cy="50" r="26" strokeWidth="0.45" />
          <circle cx="50" cy="50" r="12" strokeWidth="0.45" />
          {[...Array(16)].map((_, i) => (
            <path
              key={i}
              d="M50 5 Q63 27 50 50 Q37 27 50 5"
              transform={`rotate(${i * 22.5} 50 50)`}
              strokeWidth="0.35"
            />
          ))}
          {[...Array(8)].map((_, i) => (
            <circle
              key={`dot-${i}`}
              cx="50"
              cy="12"
              r="1.6"
              transform={`rotate(${i * 45} 50 50)`}
              fill="currentColor"
              strokeWidth="0"
            />
          ))}
        </motion.svg>

        {/* RIGHT PREMIUM MANDALA */}
        <motion.svg
          animate={{ rotate: [0, -10, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          viewBox="0 0 100 100"
          className="absolute -right-16 top-[30%] z-[4] w-60 text-yellow-400 opacity-35 sm:-right-8 md:right-5 md:w-72"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="50" cy="50" r="46" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="38" strokeWidth="0.45" />
          <circle cx="50" cy="50" r="26" strokeWidth="0.45" />
          <circle cx="50" cy="50" r="12" strokeWidth="0.45" />
          {[...Array(16)].map((_, i) => (
            <path
              key={i}
              d="M50 5 Q63 27 50 50 Q37 27 50 5"
              transform={`rotate(${i * 22.5} 50 50)`}
              strokeWidth="0.35"
            />
          ))}
          {[...Array(8)].map((_, i) => (
            <circle
              key={`dot-${i}`}
              cx="50"
              cy="12"
              r="1.6"
              transform={`rotate(${i * 45} 50 50)`}
              fill="currentColor"
              strokeWidth="0"
            />
          ))}
        </motion.svg>

        {/* DIYA GLOW LEFT */}
        <motion.div
          animate={{ opacity: [0.45, 1, 0.45], scale: [1, 1.08, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-8 z-[9] hidden md:block"
        >
          <div className="relative h-12 w-16 rounded-b-full rounded-t-[50%] border border-orange-300/40 bg-orange-700/30">
            <div className="absolute left-1/2 top-[-22px] h-8 w-5 -translate-x-1/2 rounded-full bg-gradient-to-t from-orange-500 via-yellow-300 to-white shadow-[0_0_35px_rgba(251,191,36,0.9)]" />
            <div className="absolute inset-x-2 bottom-1 h-2 rounded-full bg-yellow-300/50" />
          </div>
        </motion.div>

        {/* DIYA GLOW RIGHT */}
        <motion.div
          animate={{ opacity: [0.45, 1, 0.45], scale: [1, 1.08, 1] }}
          transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-8 z-[9] hidden md:block"
        >
          <div className="relative h-12 w-16 rounded-b-full rounded-t-[50%] border border-orange-300/40 bg-orange-700/30">
            <div className="absolute left-1/2 top-[-22px] h-8 w-5 -translate-x-1/2 rounded-full bg-gradient-to-t from-orange-500 via-yellow-300 to-white shadow-[0_0_35px_rgba(251,191,36,0.9)]" />
            <div className="absolute inset-x-2 bottom-1 h-2 rounded-full bg-yellow-300/50" />
          </div>
        </motion.div>

        {/* BOTTOM RANGOLI */}
        <motion.svg
          animate={{ scale: [1, 1.05, 1], opacity: [0.24, 0.42, 0.24] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          viewBox="0 0 100 100"
          className="absolute bottom-[-85px] left-1/2 z-[5] w-80 -translate-x-1/2 text-orange-400 opacity-40 sm:w-[430px]"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="50" cy="50" r="47" strokeWidth="0.45" />
          <circle cx="50" cy="50" r="39" strokeWidth="0.4" />
          <circle cx="50" cy="50" r="29" strokeWidth="0.4" />
          <circle cx="50" cy="50" r="18" strokeWidth="0.4" />
          <circle cx="50" cy="50" r="7" strokeWidth="0.4" />
          {[...Array(20)].map((_, i) => (
            <path
              key={i}
              d="M50 4 Q64 27 50 50 Q36 27 50 4"
              transform={`rotate(${i * 18} 50 50)`}
              strokeWidth="0.3"
            />
          ))}
          {[...Array(20)].map((_, i) => (
            <circle
              key={`rangoli-dot-${i}`}
              cx="50"
              cy="9"
              r="1"
              transform={`rotate(${i * 18} 50 50)`}
              fill="currentColor"
              strokeWidth="0"
            />
          ))}
        </motion.svg>

        {/* FLOATING GUJARATI FOOD SYMBOLS */}
        {["થાળી", "ખમણ", "ફાફડા", "થેપલા"].map((item, i) => (
          <motion.div
            key={item}
            animate={{
              y: [0, -14, 0],
              opacity: [0.12, 0.28, 0.12],
              rotate: [0, i % 2 === 0 ? 4 : -4, 0],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
            className="absolute z-[3] hidden rounded-full border border-orange-300/15 bg-orange-500/5 px-5 py-2 text-sm font-bold text-orange-200/70 backdrop-blur-sm md:block"
            style={{
              left: `${12 + i * 20}%`,
              bottom: `${18 + (i % 2) * 14}%`,
            }}
          >
            {item}
          </motion.div>
        ))}

        {/* LIGHTS */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.4, 1, 0.4], y: [0, 6, 0] }}
            transition={{ duration: 3 + i, repeat: Infinity }}
            className="absolute top-0 z-[6]"
            style={{ left: `${10 + i * 18}%` }}
          >
            <div className="mx-auto h-24 w-px bg-gradient-to-b from-orange-200/40 to-transparent" />
            <div className="h-3 w-3 rounded-full bg-orange-300 shadow-[0_0_25px_rgba(251,191,36,0.9)]" />
          </motion.div>
        ))}

        {/* FLOOR */}
        <motion.div
          style={{ rotateX: 65, rotateY: floorRotateY, y: floorY }}
          className="absolute bottom-[-20%] left-1/2 h-[400px] w-[900px] -translate-x-1/2 rounded-full border border-orange-300/10 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent blur-sm"
        />

        {/* GLOW */}
        <motion.div
          style={{ x: glowX, y: glowMoveY }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute left-[-30%] top-[10%] h-[400px] w-[600px] bg-orange-600/10 blur-[120px]"
        />

        <motion.div
          style={{ y: glowY }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.14, 0.24, 0.14] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute left-[-40%] top-[18%] h-[360px] w-[360px] rounded-full bg-orange-600/10 blur-[90px]"
        />
      </div>

      {/* MAIN CONTENT */}
      <motion.div
        style={{ scale: heroScale }}
        className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-4 pt-28 pb-14 sm:px-6 md:grid-cols-2 md:py-20 lg:gap-16"
      >
        {/* TEXT LEFT */}
        <motion.div
          style={{ y: textY }}
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative order-1 z-20 max-w-full text-center md:order-1 md:text-left"
        >
          <motion.div
            style={{ y: watermarkY, opacity: watermarkOpacity }}
            className="pointer-events-none absolute -top-10 left-1/2 -z-10 -translate-x-1/2 text-7xl font-black text-orange-200 opacity-10 sm:text-8xl md:left-0 md:-translate-x-0 md:text-9xl"
          >
            પધારો
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-orange-400"
          >
            <FaLeaf className="shrink-0 animate-pulse text-orange-500" />
            Pure Veg • Vadodara
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-black leading-[1.08] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="block text-neutral-200">Taste the</span>
            <span className="block font-serif italic text-neutral-100">
              soul of
            </span>
            <span className="block bg-gradient-to-r from-orange-500 via-yellow-200 to-orange-600 bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer-live">
              Gujarat
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-7 max-w-lg text-base leading-relaxed text-neutral-400 md:mx-0 md:text-lg"
          >
            Namaste,{" "}
            <span className="font-semibold text-orange-500">{userName}</span>.
            Experience a royal Gujarati dining journey where tradition meets
            luxury.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col justify-center gap-4 sm:flex-row md:justify-start"
          >
            <motion.button
              onClick={() => setActiveNav("#menu")}
              whileHover={{ scale: 1.06, y: -4 }}
              whileTap={{ scale: 0.94 }}
              className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-orange-600 px-8 py-4 font-bold text-white shadow-xl shadow-orange-900/30 sm:px-10"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative z-10">Explore Menu</span>
              <Utensils size={18} className="relative z-10" />
            </motion.button>

            <motion.button
              onClick={() => setActiveNav("#booking")}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 sm:px-10"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Reserve Table
                <CalendarCheck size={18} />
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* VIDEO RIGHT */}
        <motion.div
          style={{
            y: videoY,
            rotateX: videoRotateX,
            rotateY: videoRotateY,
          }}
          variants={videoReveal}
          initial="hidden"
          animate="visible"
          className="relative order-2 mx-auto flex w-full max-w-full flex-col gap-5 overflow-hidden md:order-2"
        >
          <div className="relative group w-full">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-orange-600 to-yellow-400 opacity-20 blur transition duration-500 group-hover:opacity-40" />

            <div className="relative z-10 overflow-hidden rounded-[1.8rem] border border-white/10 bg-neutral-900 md:rounded-[2.5rem]">
              <video
                src="/edited-ready.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-[240px] w-full object-cover sm:h-[320px] md:h-[430px] lg:h-[440px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            </div>
          </div>

          <motion.div
            className="relative z-20 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md md:p-6"
            whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.06)" }}
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-700 shadow-lg md:h-14 md:w-14">
              <Users className="text-white" size={24} />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400">
                Perfect for
              </p>
              <p className="text-base font-bold text-white md:text-xl">
                Family Celebrations
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <style>{`
        html, body {
          overflow-x: hidden;
        }

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
