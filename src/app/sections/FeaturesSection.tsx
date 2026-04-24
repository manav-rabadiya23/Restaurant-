import { FaLeaf } from "react-icons/fa";
import { GiHotMeal } from "react-icons/gi";
import { MdDeliveryDining, MdTableRestaurant } from "react-icons/md";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const features = [
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
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 overflow-hidden">
      <div className="grid gap-6 md:grid-cols-4">
        {features.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.92,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            viewport={{
              once: false,
              amount: 0.2,
              margin: "0px 0px -80px 0px",
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] p-6 backdrop-blur-md hover:border-orange-400/40 hover:bg-white/10"
          >
            {/* GLOW */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.25),transparent_50%)]" />

            {/* ✨ SHINE EFFECT */}
            <motion.div
              animate={{ x: ["-120%", "140%"] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 2,
                delay: index * 0.3,
              }}
              className="absolute inset-y-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            />

            {/* ICON */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
              className="relative z-10 mb-4 inline-flex rounded-2xl bg-orange-500/15 p-4 text-3xl text-orange-400"
            >
              {item.icon}
            </motion.div>

            {/* TITLE */}
            <h3 className="relative z-10 text-lg md:text-xl font-bold text-white">
              {item.title}
            </h3>

            {/* TEXT */}
            <p className="relative z-10 mt-3 text-sm md:text-base text-white/70 leading-relaxed">
              {item.text}
            </p>

            {/* LINE EFFECT */}
            <div className="relative z-10 mt-5 h-[2px] w-0 bg-orange-400 transition-all duration-500 group-hover:w-20" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
