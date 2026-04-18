import { Users } from "lucide-react";
import { FaLeaf } from "react-icons/fa";

export default function HeroSection({
  userName,
  setActiveNav,
}: {
  userName: string;
  setActiveNav: (href: string) => void;
}) {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-90">
        <div className="animate-pulse-slow absolute left-0 top-12 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="animate-pulse-slow absolute right-8 top-24 h-80 w-80 rounded-full bg-yellow-400/15 blur-3xl" />
        <div className="animate-float-slow absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/25 bg-orange-500/10 px-4 py-2 text-sm text-orange-300">
            <FaLeaf /> Pure Veg • Traditional Gujarati Taste
          </span>

          <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
            Taste the soul of
            <span className="block bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
              Gujarat in Vadodara
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
            Welcome, {userName}. Traditional Gujarati dining with premium
            presentation, rich thalis, festive farsan and easy table booking.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#menu"
              onClick={() => setActiveNav("#menu")}
              className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-orange-400"
            >
              Explore Menu
            </a>
            <a
              href="#booking"
              onClick={() => setActiveNav("#booking")}
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white/90 transition hover:scale-105 hover:border-orange-400 hover:text-orange-300"
            >
              Reserve Now
            </a>
            <a
              href="#order"
              onClick={() => setActiveNav("#order")}
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white/90 transition hover:scale-105 hover:border-orange-400 hover:text-orange-300"
            >
              Order Online
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { value: "28+", label: "Signature Dishes" },
              { value: "4.9★", label: "Guest Rating" },
              { value: "2.4k+", label: "Happy Diners" },
              { value: "100%", label: "Pure Veg" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-md"
              >
                <h3 className="text-2xl font-bold text-orange-400">
                  {stat.value}
                </h3>
                <p className="mt-1 text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-orange-500/20 to-yellow-400/20 blur-2xl" />
          <img
            src="/food.jpg"
            alt="Gujarati food spread"
            className="relative h-[420px] w-full rounded-[2rem] object-cover shadow-2xl sm:h-[560px]"
          />

          <div className="absolute bottom-5 left-5 rounded-2xl border border-white/10 bg-black/55 p-4 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-orange-500/15 p-3 text-orange-400">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-white/60">Most booked for</p>
                <p className="font-semibold">Family dinners & celebrations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
