import { FaLeaf } from "react-icons/fa";
import { GiHotMeal } from "react-icons/gi";
import { MdDeliveryDining, MdTableRestaurant } from "react-icons/md";

export default function FeaturesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="grid gap-6 md:grid-cols-4">
        {[
          {
            icon: <GiHotMeal />,
            title: "Freshly Prepared",
            text: "Traditional dishes cooked fresh every day with consistent taste and presentation.",
          },
          {
            icon: <MdTableRestaurant />,
            title: "Elegant Dining",
            text: "Comfortable seating, warm lights and a family-friendly premium restaurant vibe.",
          },
          {
            icon: <MdDeliveryDining />,
            title: "Fast Service",
            text: "Smooth dine-in flow, takeaway support and easy group bookings.",
          },
          {
            icon: <FaLeaf />,
            title: "Pure Vegetarian",
            text: "A fully vegetarian Gujarati experience for everyday meals and festive outings.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-2 hover:border-orange-400/40 hover:bg-white/10"
          >
            <div className="mb-4 inline-flex rounded-2xl bg-orange-500/15 p-4 text-2xl text-orange-400">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="mt-2 text-white/70">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
