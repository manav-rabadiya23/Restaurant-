import { FaUtensils } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
import { restaurantName } from "../data/restaurantData";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 md:grid-cols-2 items-center overflow-hidden"
    >
      {/* Image with Floating Animation */}
      <div className="relative group animate-in fade-in slide-in-from-left-10 duration-1000">
        <div className="absolute -inset-4 bg-orange-500/10 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <img
          src="/food.jpg"
          alt="Restaurant interior"
          className="relative h-full w-full rounded-[2.5rem] object-cover shadow-2xl border border-white/10 transition-transform duration-700 group-hover:scale-[1.02]"
        />
        {/* Decorative Badge */}
        <div className="absolute -bottom-6 -right-6 bg-orange-500 text-black px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl animate-bounce-slow">
          Est. 2026
        </div>
      </div>

      <div className="flex flex-col justify-center animate-in fade-in slide-in-from-right-10 duration-1000 delay-200">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-400 mb-4 flex items-center gap-4">
          <div className="h-px w-8 bg-orange-400" />
          The Essence
        </p>

        <h2 className="text-4xl font-black md:text-6xl uppercase italic tracking-tighter leading-none">
          Tradition served <br />
          <span className="text-shimmer">with elegance</span>
        </h2>

        <p className="mt-8 text-lg leading-relaxed text-white/50 font-medium">
          {restaurantName} blends authentic regional recipes with a refined
          dining atmosphere in Vadodara. From comfort food to festive thalis,
          the focus is traditional taste with{" "}
          <span className="text-white">polished presentation</span>.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {/* Live Feature Card 1 */}
          <div className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-500 hover:border-orange-500/50 hover:bg-white/[0.08]">
            <div className="mb-4 text-orange-400 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
              <FaUtensils size={28} />
            </div>
            <h3 className="font-black uppercase tracking-widest text-xs text-white mb-2">
              Traditional Recipes
            </h3>
            <p className="text-sm text-white/40 leading-relaxed font-medium">
              Home-style flavours inspired by authentic Gujarati kitchens.
            </p>
          </div>

          {/* Live Feature Card 2 */}
          <div className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-500 hover:border-orange-500/50 hover:bg-white/[0.08]">
            <div className="mb-4 text-orange-400 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
              <GiMeal size={28} />
            </div>
            <h3 className="font-black uppercase tracking-widest text-xs text-white mb-2">
              Premium Experience
            </h3>
            <p className="text-sm text-white/40 leading-relaxed font-medium">
              Clean interiors, modern presentation and customer-first service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
