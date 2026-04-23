import React from "react";
import { FaLeaf, FaStar } from "react-icons/fa";
import { GiChiliPepper, GiMeal } from "react-icons/gi";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#140b05] text-[#f8efe2]"
    >
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute left-[-120px] top-[-80px] h-[320px] w-[320px] rounded-full bg-[#b45309]/25 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] h-[360px] w-[360px] rounded-full bg-[#7c2d12]/30 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d97706]/10 blur-3xl" />
      </div>

      {/* Decorative pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 md:grid-cols-2 md:py-24">
        {/* LEFT */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d97706]/40 bg-[#d97706]/10 px-4 py-2 text-sm font-medium text-[#f6c27a]">
            <FaLeaf className="text-[#f59e0b]" />
            Traditional Gujarati Dining Experience
          </div>

          <div className="mt-6">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#d6a15f]">
              Since 1998
            </p>

            <h1 className="max-w-2xl font-serif text-5xl font-bold leading-[1.05] md:text-7xl">
              Taste the
              <span className="mx-2 text-[#f3dfc1]">royal</span>
              flavors of
              <span className="mt-2 block text-[#f59e0b]">Gujarat</span>
            </h1>

            <div className="mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#7c2d12]" />
          </div>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#d8c8b5]">
            From festive thalis to timeless family recipes, enjoy authentic
            Gujarati food served with warmth, culture, and a touch of heritage.
          </p>

          {/* Feature mini row */}
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-[#ffffff1a] bg-[#ffffff08] px-4 py-2 text-[#f6dfc5]">
              Pure Veg
            </span>
            <span className="rounded-full border border-[#ffffff1a] bg-[#ffffff08] px-4 py-2 text-[#f6dfc5]">
              Family Dining
            </span>
            <span className="rounded-full border border-[#ffffff1a] bg-[#ffffff08] px-4 py-2 text-[#f6dfc5]">
              Traditional Taste
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#menu"
              aria-label="Explore menu section"
              className="rounded-full bg-[#d97706] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#d97706]/20 transition hover:scale-105 hover:bg-[#b45309]"
            >
              Explore Menu
            </a>

            <a
              href="#booking"
              aria-label="Reserve a table"
              className="rounded-full border border-[#f8efe233] bg-[#ffffff08] px-7 py-3.5 font-semibold text-[#f8efe2] transition hover:scale-105 hover:border-[#d97706] hover:bg-[#d97706]/10"
            >
              Reserve Now
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#ffffff14] bg-gradient-to-br from-[#ffffff0d] to-[#ffffff05] p-5 backdrop-blur-sm">
              <p className="text-3xl font-bold text-[#f59e0b]">25+</p>
              <p className="mt-1 text-sm text-[#d8c8b5]">Signature Dishes</p>
            </div>

            <div className="rounded-2xl border border-[#ffffff14] bg-gradient-to-br from-[#ffffff0d] to-[#ffffff05] p-5 backdrop-blur-sm">
              <div className="flex items-center gap-1 text-[#f59e0b]">
                <span className="text-3xl font-bold">4.9</span>
                <FaStar className="mt-1" />
              </div>
              <p className="mt-1 text-sm text-[#d8c8b5]">Average Rating</p>
            </div>

            <div className="rounded-2xl border border-[#ffffff14] bg-gradient-to-br from-[#ffffff0d] to-[#ffffff05] p-5 backdrop-blur-sm">
              <p className="text-3xl font-bold text-[#f59e0b]">10k+</p>
              <p className="mt-1 text-sm text-[#d8c8b5]">Happy Guests</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex items-center justify-center">
          {/* Outer decorative ring */}
          <div className="relative h-[340px] w-[340px] rounded-full border border-[#f59e0b]/25 bg-gradient-to-br from-[#5b2d12] to-[#1a1009] p-4 shadow-[0_0_60px_rgba(217,119,6,0.18)] md:h-[470px] md:w-[470px]">
            <div className="absolute inset-3 rounded-full border border-dashed border-[#f59e0b]/20" />
            <div className="absolute inset-8 rounded-full border border-[#ffffff12]" />

            <video
              src="/edited-ready.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full rounded-full object-cover relative"
            />
          </div>

          {/* Floating spice card */}
          <div className="absolute left-0 top-10 rounded-2xl border border-[#ffffff14] bg-[#1f130c]/90 px-4 py-3 shadow-xl backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-[#d97706]/15 p-3 text-[#f59e0b]">
                <GiChiliPepper size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#f8efe2]">
                  Bold Spices
                </p>
                <p className="text-xs text-[#d8c8b5]">Classic Gujarati taste</p>
              </div>
            </div>
          </div>

          {/* Floating meal card */}
          <div className="absolute bottom-8 right-0 rounded-2xl border border-[#ffffff14] bg-[#1f130c]/90 px-4 py-3 shadow-xl backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-[#d97706]/15 p-3 text-[#f59e0b]">
                <GiMeal size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#f8efe2]">
                  Authentic Thali
                </p>
                <p className="text-xs text-[#d8c8b5]">Homestyle experience</p>
              </div>
            </div>
          </div>

          {/* Small cultural badge */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-[#f59e0b]/30 bg-[#2a170d]/95 px-6 py-2 text-sm font-medium text-[#f6c27a] shadow-lg">
            Atithi Devo Bhava
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
