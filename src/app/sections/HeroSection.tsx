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

  const heroScale = useTransform(scrollYProgress, [0, 0.35], [1, 0.97]);
  const textY = useTransform(scrollYProgress, [0, 0.35], [0, -35]);
  const videoY = useTransform(scrollYProgress, [0, 0.35], [0, 35]);

  const mouseGlow = useMotionTemplate`
    radial-gradient(
      560px circle at ${springX}px ${springY}px,
      rgba(251,146,60,0.18),
      rgba(245,158,11,0.08) 35%,
      transparent 72%
    )
  `;

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.16, delayChildren: 0.2 },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 34, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const titleLine: Variants = {
    hidden: { opacity: 0, y: 55, rotateX: 18, filter: "blur(14px)" },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const videoReveal: Variants = {
    hidden: { opacity: 0, scale: 0.94, y: 42, filter: "blur(12px)" },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
    >
      {/* PREMIUM PADHARO MANDAL */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, pointerEvents: "none" }}
        transition={{ delay: 2.2, duration: 0.9 }}
        className="fixed inset-0 z-[999] flex items-center justify-center bg-[#120706]"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-[120px]"
        />

        <motion.svg
          initial={{ scale: 0.6, rotate: 0, opacity: 0 }}
          animate={{ scale: 1, rotate: 360, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewBox="0 0 100 100"
          className="absolute h-[320px] w-[320px] text-orange-300 md:h-[430px] md:w-[430px]"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="50" cy="50" r="46" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="36" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="26" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="14" strokeWidth="0.5" />

          {[...Array(24)].map((_, i) => (
            <path
              key={i}
              d="M50 6 Q64 30 50 50 Q36 30 50 6"
              transform={`rotate(${i * 15} 50 50)`}
              strokeWidth="0.4"
            />
          ))}

          {[...Array(24)].map((_, i) => (
            <circle
              key={`dot-${i}`}
              cx="50"
              cy="10"
              r="1.3"
              transform={`rotate(${i * 15} 50 50)`}
              fill="currentColor"
              strokeWidth="0"
            />
          ))}
        </motion.svg>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute h-[260px] w-[260px] rounded-full border border-orange-300/40 md:h-[340px] md:w-[340px]"
        />

        <motion.div
          initial={{ scale: 0.75, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-30 text-center"
        >
          <div className="absolute inset-[-34px] rounded-full border border-yellow-300/25 bg-black/70 shadow-[0_0_55px_rgba(251,191,36,0.28)] backdrop-blur-2xl" />

          <motion.div
            animate={{
              boxShadow: [
                "0 0 25px rgba(251,191,36,0.25)",
                "0 0 55px rgba(251,191,36,0.55)",
                "0 0 25px rgba(251,191,36,0.25)",
              ],
            }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-[-18px] rounded-full border border-orange-300/25"
          />

          <p
            className="relative bg-gradient-to-b from-yellow-100 via-orange-200 to-orange-500 bg-clip-text text-6xl font-black text-transparent drop-shadow-[0_8px_30px_rgba(251,146,60,0.55)] md:text-7xl"
            style={{
              fontFamily: "'Playfair Display', serif",
              WebkitTextStroke: "0.7px rgba(255, 237, 213, 0.45)",
            }}
          >
            પધારો
          </p>

          <div className="relative mx-auto mt-3 h-px w-36 bg-gradient-to-r from-transparent via-yellow-300 to-transparent" />

          <p className="relative mt-3 text-[10px] font-black uppercase tracking-[0.5em] text-yellow-200/90">
            Gujarati Rasoi
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 6, opacity: 0 }}
          transition={{ delay: 1.2, duration: 1.3 }}
          className="absolute h-[320px] w-[320px] rounded-full border-2 border-orange-300/60"
        />
      </motion.div>

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(234,88,12,0.14),transparent_35%),linear-gradient(180deg,#130604_0%,#050505_68%)]" />

        <motion.div
          className="absolute inset-0 opacity-70"
          style={{ background: mouseGlow }}
        />

        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          viewBox="0 0 100 100"
          className="absolute -left-28 top-[32%] w-72 text-orange-500/20 md:left-4"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="50" cy="50" r="46" strokeWidth="0.45" />
          <circle cx="50" cy="50" r="34" strokeWidth="0.45" />
          {[...Array(18)].map((_, i) => (
            <path
              key={i}
              d="M50 5 Q64 27 50 50 Q36 27 50 5"
              transform={`rotate(${i * 20} 50 50)`}
              strokeWidth="0.35"
            />
          ))}
        </motion.svg>

        <motion.svg
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          viewBox="0 0 100 100"
          className="absolute -right-28 top-[36%] w-72 text-yellow-400/20 md:right-4"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="50" cy="50" r="46" strokeWidth="0.45" />
          <circle cx="50" cy="50" r="34" strokeWidth="0.45" />
          {[...Array(18)].map((_, i) => (
            <path
              key={i}
              d="M50 5 Q64 27 50 50 Q36 27 50 5"
              transform={`rotate(${i * 20} 50 50)`}
              strokeWidth="0.35"
            />
          ))}
        </motion.svg>

        <div className="absolute bottom-[-18%] left-1/2 h-[390px] w-[920px] -translate-x-1/2 rounded-full border border-orange-300/10 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent blur-sm" />
      </div>

      {/* MAIN CONTENT */}
      <motion.div
        style={{ scale: heroScale }}
        className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-4 pt-32 pb-16 sm:px-6 md:grid-cols-2 md:pt-36 lg:gap-16"
      >
        {/* TEXT */}
        <motion.div
          style={{ y: textY }}
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-black/30 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-orange-300 backdrop-blur-xl"
          >
            <FaLeaf className="text-orange-400" />
            Pure Veg • Vadodara
          </motion.div>

          {/* PREMIUM TITLE EFFECT */}
          <motion.h1
            className="relative text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            style={{
              fontFamily: "'Playfair Display', serif",
              perspective: 1000,
            }}
          >
            <motion.span
              variants={titleLine}
              className="block text-neutral-100 drop-shadow-[0_8px_30px_rgba(255,255,255,0.08)]"
            >
              Taste the
            </motion.span>

            <motion.span
              variants={titleLine}
              className="block font-serif italic text-neutral-100 drop-shadow-[0_8px_30px_rgba(255,255,255,0.08)]"
            >
              soul of
            </motion.span>

            <motion.span
              variants={titleLine}
              animate={{
                backgroundPosition: ["0% center", "200% center", "0% center"],
                textShadow: [
                  "0 0 20px rgba(251,146,60,0.25)",
                  "0 0 42px rgba(251,191,36,0.45)",
                  "0 0 20px rgba(251,146,60,0.25)",
                ],
              }}
              transition={{
                backgroundPosition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                },
                textShadow: {
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="relative block bg-gradient-to-r from-orange-400 via-yellow-200 via-50% to-orange-600 bg-[length:220%_auto] bg-clip-text text-transparent"
            >
              Gujarat
              <motion.span
                animate={{ x: ["-120%", "120%"] }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute bottom-2 left-0 h-2 w-full rounded-full bg-gradient-to-r from-transparent via-yellow-300/50 to-transparent blur-md"
              />
            </motion.span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-6 h-px w-64 bg-gradient-to-r from-transparent via-orange-400/70 to-transparent md:w-80"
          />

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-neutral-300 md:mx-0 md:text-lg"
          >
            Namaste,{" "}
            <span className="font-bold text-orange-400">{userName}</span>.
            Experience authentic Gujarati thali, farsan, sweets and family
            dining in a premium traditional ambience.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col justify-center gap-4 sm:flex-row md:justify-start"
          >
            <motion.button
              onClick={() => setActiveNav("#menu")}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-4 font-bold text-white shadow-2xl shadow-orange-900/40"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative z-10">Explore Menu</span>
              <Utensils size={18} className="relative z-10" />
            </motion.button>

            <motion.button
              onClick={() => setActiveNav("#booking")}
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-full border border-orange-300/25 bg-white/[0.04] px-8 py-4 font-bold text-white backdrop-blur-xl transition hover:bg-white/[0.08]"
            >
              <span className="flex items-center justify-center gap-3">
                Reserve Table
                <CalendarCheck size={18} />
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* VIDEO CARD */}
        <motion.div
          style={{ y: videoY }}
          variants={videoReveal}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-orange-500/20 via-yellow-300/10 to-transparent blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-orange-300/20 bg-black/50 p-3 shadow-2xl shadow-black/70 backdrop-blur-xl md:rounded-[2.8rem]">
            <div className="absolute left-6 top-6 z-20 rounded-full border border-orange-300/20 bg-black/50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-orange-300 backdrop-blur">
              Signature Dining
            </div>

            <video
              src="/edited-ready.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-[260px] w-full rounded-[1.5rem] object-cover sm:h-[340px] md:h-[430px] md:rounded-[2.2rem]"
            />

            <div className="absolute inset-3 rounded-[1.5rem] bg-gradient-to-t from-black/60 via-transparent to-black/15 md:rounded-[2.2rem]" />
          </div>

          <div className="relative z-20 mx-auto mt-5 grid max-w-xl gap-4 rounded-3xl border border-white/10 bg-black/45 p-4 backdrop-blur-xl sm:grid-cols-2">
            <MiniFeature
              icon={<Users size={22} />}
              label="Perfect For"
              title="Family Celebrations"
            />
            <MiniFeature
              icon={<Sparkles size={22} />}
              label="Experience"
              title="Tradition. Taste. Togetherness."
            />
          </div>
        </motion.div>
      </motion.div>

      <style>{`
        html, body {
          overflow-x: hidden;
        }
      `}</style>
    </section>
  );
}

function MiniFeature({
  icon,
  label,
  title,
}: {
  icon: React.ReactNode;
  label: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-700 shadow-lg shadow-orange-900/40">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-orange-400">
          {label}
        </p>
        <p className="text-base font-bold text-white">{title}</p>
      </div>
    </div>
  );
}
