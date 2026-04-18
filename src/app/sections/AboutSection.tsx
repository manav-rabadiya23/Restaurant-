import { FaUtensils } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
import { restaurantName } from "../data/restaurantData";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-2"
    >
      <div>
        <img
          src="/food.jpg"
          alt="Restaurant interior"
          className="h-full w-full rounded-[2rem] object-cover shadow-2xl"
        />
      </div>

      <div className="flex flex-col justify-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
          About Us
        </p>
        <h2 className="mt-4 text-4xl font-black md:text-5xl">
          Tradition served with elegance
        </h2>
        <p className="mt-6 text-lg leading-8 text-white/70">
          {restaurantName} blends authentic regional recipes with a refined
          dining atmosphere in Vadodara. From comfort food to festive thalis,
          the focus is traditional taste with polished presentation.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="mb-3 text-orange-400">
              <FaUtensils size={24} />
            </div>
            <h3 className="font-bold">Traditional Recipes</h3>
            <p className="mt-2 text-sm text-white/70">
              Home-style flavours inspired by authentic Gujarati kitchens.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="mb-3 text-orange-400">
              <GiMeal size={24} />
            </div>
            <h3 className="font-bold">Premium Experience</h3>
            <p className="mt-2 text-sm text-white/70">
              Clean interiors, modern presentation and customer-first service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
