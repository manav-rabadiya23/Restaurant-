import React from "react";
import { Users, Utensils, CalendarCheck } from "lucide-react";
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

  const bgRotateX = useTransform(springY, [0, 900], [6, -6]);
  const bgRotateY = useTransform(springX, [0, 1600], [-8, 8]);
  const floorRotateY = useTransform(springX, [0, 1600], [-5, 5]);
  const floorY = useTransform(springY, [0, 900], [20, -20]);

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
      className="relative flex min-h-screen w-full flex-col justify-start overflow-x-hidden bg-[#050505] text-white md:justify-center"
    >
      {/* ROYAL MANDALA ENTRY */}
      <motion.div
        initial={{ opacity: 1, pointerEvents: "auto" }}
        animate={{ opacity: 0, pointerEvents: "none" }}
        transition={{ delay: 2.1, duration: 0.9, ease: "easeOut" }}
        className="fixed inset-0 z-[50] flex items-center justify-center bg-[#120706]"
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

      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 z-10 opacity-70"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                520px circle at ${springX}px ${springY}px,
                rgba(251, 146, 60, 0.20),
                rgba(245, 158, 11, 0.10) 28%,
                transparent 70%
              )
            `,
          }}
        />

        {/* LUXURY RESTAURANT 3D BACKGROUND */}
        <div
          className="absolute inset-0 z-0"
          style={{
            perspective: "1400px",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,146,60,0.16),transparent_45%),linear-gradient(180deg,#120706_0%,#050505_65%)]" />

          <motion.div
            style={{
              rotateX: bgRotateX,
              rotateY: bgRotateY,
              transformPerspective: 1400,
            }}
            className="absolute inset-0"
          >
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute rounded-t-full border border-orange-300/20 bg-gradient-to-b from-orange-500/10 via-black/20 to-transparent shadow-[0_0_80px_rgba(251,146,60,0.12)]"
                style={{
                  width: `${260 + i * 110}px`,
                  height: `${420 + i * 90}px`,
                  left: `${4 + i * 18}%`,
                  top: `${12 - i * 3}%`,
                  transform: `translateZ(${120 - i * 35}px)`,
                }}
              />
            ))}
          </motion.div>

          {[...Array(7)].map((_, i) => (
            <motion.div
              key={`light-${i}`}
              animate={{ opacity: [0.45, 1, 0.45], y: [0, 6, 0] }}
              transition={{
                duration: 2.8 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0"
              style={{
                left: `${8 + i * 14}%`,
                transform: `translateZ(${160 - i * 12}px)`,
              }}
            >
              <div className="mx-auto h-28 w-px bg-gradient-to-b from-orange-200/40 to-transparent" />
              <div className="h-4 w-4 rounded-full bg-orange-300 shadow-[0_0_35px_rgba(251,191,36,0.9)]" />
              <div className="mx-auto mt-1 h-16 w-16 rounded-full bg-orange-300/20 blur-2xl" />
            </motion.div>
          ))}

          <motion.div
            style={{
              rotateX: 65,
              rotateY: floorRotateY,
              y: floorY,
            }}
            className="absolute bottom-[-22%] left-1/2 h-[420px] w-[900px] -translate-x-1/2 rounded-full border border-orange-300/15 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent blur-sm"
          />

          {[...Array(7)].map((_, i) => (
            <motion.div
              key={`floor-line-${i}`}
              animate={{ opacity: [0.08, 0.22, 0.08] }}
              transition={{
                duration: 4 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[4%] left-1/2 h-px w-[900px] -translate-x-1/2 bg-gradient-to-r from-transparent via-orange-300/30 to-transparent"
              style={{
                transform: `translateX(-50%) translateZ(${40 - i * 8}px) rotateX(68deg) translateY(${i * 38}px)`,
              }}
            />
          ))}

          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`steam-${i}`}
              animate={{
                y: [80, -120],
                x: [0, i % 2 === 0 ? 30 : -30],
                opacity: [0, 0.22, 0],
                scale: [0.7, 1.4],
              }}
              transition={{
                duration: 7 + i,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut",
              }}
              className="absolute bottom-[8%] h-40 w-10 rounded-full bg-orange-200/20 blur-2xl"
              style={{
                left: `${28 + i * 10}%`,
              }}
            />
          ))}
        </div>

        <motion.div
          style={{
            x: useTransform(springX, [0, 1600], [-80, 80]),
            y: useTransform(springY, [0, 900], [-50, 50]),
          }}
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, 4, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-18%] top-[8%] h-[420px] w-[850px] rounded-full bg-gradient-to-r from-orange-600/18 via-yellow-400/8 to-transparent blur-[110px]"
        />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -left-[35%] -top-[20%] opacity-[0.04] sm:-left-[10%]"
        >
          <svg
            width="800"
            height="800"
            viewBox="0 0 100 100"
            className="fill-none stroke-current text-orange-400"
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

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `radial-gradient(#fb923c 0.5px, transparent 0.5px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <motion.div
          style={{ y: glowY }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.14, 0.3, 0.14] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-45%] top-[10%] h-[420px] w-[420px] rounded-full bg-orange-600/10 blur-[120px] sm:left-[-20%] sm:h-[500px] sm:w-[500px]"
        />
      </div>

      {/* MAIN HERO CONTENT */}
      <motion.div
        style={{
          scale: heroScale,
          transformStyle: "preserve-3d",
        }}
        className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 overflow-hidden px-4 pt-28 pb-14 sm:px-6 md:grid-cols-2 md:py-20 lg:gap-16"
      >
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
          className="relative order-1 mx-auto flex w-full max-w-full flex-col gap-5 overflow-hidden md:order-2"
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

        <motion.div
          style={{ y: textY }}
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative order-2 z-20 max-w-full text-center md:order-1 md:text-left"
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
