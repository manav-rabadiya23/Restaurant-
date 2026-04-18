import { ShoppingBag } from "lucide-react";
import { swiggyLink, zomatoLink } from "../data/restaurantData";

export default function OrderSection() {
  return (
    <section id="order" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
            Order Online
          </p>
          <h2 className="mt-4 text-4xl font-black">
            Enjoy Gujarati Rasoi at home
          </h2>
          <p className="mt-4 text-white/70">
            Order your favourite thali, farsan, sweets and beverages directly
            from your preferred delivery platform.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
          <a
            href={zomatoLink}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-6 py-4 font-bold text-white transition hover:scale-[1.02]"
          >
            <ShoppingBag className="h-5 w-5" />
            Order on Zomato
          </a>
          <a
            href={swiggyLink}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-4 font-bold text-white transition hover:scale-[1.02]"
          >
            <ShoppingBag className="h-5 w-5" />
            Order on Swiggy
          </a>
        </div>
      </div>
    </section>
  );
}
