import React, { useState, useEffect } from "react";
import { Users, Utensils } from "lucide-react";
import { FaLeaf } from "react-icons/fa";
import {
  motion,
  useScroll,
  useTransform,
  Variants,
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

  // MOUSE INTERACTION LOGIC
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  function handleMouseMove({ clientX, clientY }: React.MouseEvent) {
    mouseX.set(clientX);
    mouseY.set(clientY);
  }

  // SCROLL MICRO-INTERACTIONS
  const heroScale = useTransform(scrollYProgress, [0, 0.35], [1, 0.94]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0.25]);
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
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
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
      transition: { delay: 1.9, duration: 1.1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full overflow-hidden bg-[#050505] text-white flex flex-col justify-start md:justify-center"
    >
      {/* ROYAL MANDALA ENTRY (Same as before) */}
      <motion.div
        initial={{ opacity: 1, pointerEvents: "auto" }}
        animate={{ opacity: 0, pointerEvents: "none" }}
        transition={{ delay: 2.1, duration: 0.9, ease: "easeOut" }}
        className="fixed inset-0 z-[999] flex items-center justify-center bg-[#120706]"
      >
        <motion.div
          initial={{ scale: 0.75, rotate: 0, opacity: 0 }}
          animate={{ scale: 1, rotate: 180, opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute h-56 w-56 rounded-full border border-orange-300/50 shadow-[0_0_80px_rgba(251,146,60,0.35)] md:h-80 md:w-80"
        />
        <motion.div
          initial={{ scale: 1, rotate: 0, opacity: 1 }}
          animate={{ scale: 5, rotate: 120, opacity: 0 }}
          transition={{ delay: 0.8, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex h-48 w-48 items-center justify-center rounded-full border-2 border-orange-300/70 md:h-72 md:w-72"
        >
          <div className="absolute inset-4 rounded-full border border-yellow-200/40" />
          <div className="absolute inset-8 rounded-full border border-orange-400/40" />
          {[...Array(12)].map((_, i) => (
            <span
              key={i}
              className="absolute h-3 w-3 rounded-full bg-orange-300"
              style={{ transform: `rotate(${i * 30}deg) translateY(-90px)` }}
            />
          ))}
          <div className="z-10 text-center">
            <p
              className="text-4xl font-black text-orange-200 md:text-6xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              પધારો
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* NEW: INTERACTIVE BACKGROUND EFFECTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Dynamic Mouse Glow */}
        <motion.div
          className="absolute inset-0 z-10 opacity-40"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${springX}px ${springY}px,
                rgba(251, 146, 60, 0.12),
                transparent 80%
              )
            `,
          }}
        />

        {/* Slow Rotating Mandala Texture */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -left-[10%] -top-[10%] opacity-[0.04]"
        >
          <svg
            width="800"
            height="800"
            viewBox="0 0 100 100"
            className="text-orange-400 fill-none stroke-current"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              strokeWidth="0.1"
              strokeDasharray="1 2"
            />
            <circle
              cx="50"
              cy="50"
              r="35"
              strokeWidth="0.1"
              strokeDasharray="2 4"
            />
            <path
              d="M50 5 L55 45 L95 50 L55 55 L50 95 L45 55 L5 50 L45 45 Z"
              strokeWidth="0.1"
            />
          </svg>
        </motion.div>

        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `radial-gradient(#fb923c 0.5px, transparent 0.5px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Corner Glows */}
        <motion.div
          style={{ y: glowY }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.14, 0.3, 0.14] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-20%] top-[10%] h-[500px] w-[500px] rounded-full bg-orange-600/10 blur-[120px]"
        />
      </div>

      {/* MAIN HERO CONTENT */}
      <motion.div
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pt-28 pb-14 sm:px-6 md:grid-cols-2 md:py-20 lg:gap-20"
      >
        {/* VIDEO SIDE (kept your original structure) */}
        <motion.div
          style={{
            y: videoY,
            rotateX: videoRotateX,
            rotateY: videoRotateY,
            transformPerspective: 1200,
          }}
          variants={videoReveal}
          initial="hidden"
          animate="visible"
          className="relative order-1 md:order-2 w-full max-w-[430px] mx-auto md:max-w-none flex flex-col gap-5"
        >
          <div className="relative group">
            {/* Hover Glow Effect */}
            <div className="absolute -inset-1 rounded-[2.6rem] bg-gradient-to-r from-orange-600 to-yellow-400 opacity-20 blur transition duration-500 group-hover:opacity-40" />

            <div className="relative z-10 overflow-hidden rounded-[1.8rem] border border-white/10 bg-neutral-900 md:rounded-[2.5rem]">
              <video
                src="/edited-ready.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-[300px] w-full object-cover sm:h-[360px] md:h-[430px] lg:h-[440px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

              <div className="absolute top-4 left-4 flex items-center gap-3 rounded-full border border-white/10 bg-black/70 px-4 py-2 backdrop-blur-xl">
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Now Serving
                </span>
              </div>
            </div>
          </div>

          {/* INFO BADGE */}
          <motion.div
            className="relative z-20 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md md:p-6"
            whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.06)" }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-700 shadow-lg md:h-14 md:w-14">
              <Users className="text-white" size={24} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-orange-400 font-bold">
                Perfect for
              </p>
              <p className="font-bold text-white text-base md:text-xl">
                Family Celebrations
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* CONTENT SIDE */}
        <motion.div
          style={{ y: textY }}
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative order-2 z-20 text-center md:order-1 md:text-left"
        >
          <motion.div
            style={{ y: watermarkY, opacity: watermarkOpacity }}
            className="pointer-events-none absolute -top-12 left-1/2 -z-10 -translate-x-1/2 text-8xl font-black text-orange-200 md:left-0 md:-translate-x-0 md:text-9xl opacity-10"
          >
            પધારો
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-orange-400"
          >
            <FaLeaf className="animate-pulse text-orange-500" />
            Pure Veg • Vadodara
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl font-black leading-[1.1] tracking-tight sm:text-7xl lg:text-8xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="block text-neutral-200">Taste the</span>
            <span className="block italic font-serif text-neutral-100">
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
            <button
              onClick={() => setActiveNav("#menu")}
              className="flex items-center justify-center gap-3 rounded-full bg-orange-600 px-10 py-4 font-bold text-white transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-orange-900/20"
            >
              Explore Menu <Utensils size={18} />
            </button>
            <button
              onClick={() => setActiveNav("#booking")}
              className="rounded-full border border-white/10 bg-white/5 px-10 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/10"
            >
              Reserve Table
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes shimmer-live {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .animate-shimmer-live { animation: shimmer-live 4s linear infinite; }
      `}</style>
    </section>
  );
}
