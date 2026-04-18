import { Star } from "lucide-react";
import { motion } from "motion/react";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: string;
  badge?: string;
}

export function Menu() {
  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Gujarati Thali",
      description:
        "A complete Gujarati thali with dal, kadhi, rotli, shaak, farsan, rice, and sweet.",
      price: 320,
      image: "/gujarati-thali.jpg",
      category: "Traditional",
      rating: "4.9",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Dhokla",
      description:
        "Soft and fluffy steamed gram flour cakes served with chutney and tempering.",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=900&q=80",
      category: "Snack",
      rating: "4.8",
    },
    {
      id: 3,
      name: "Khandvi",
      description:
        "Delicate gram flour rolls topped with mustard seeds, coconut, and coriander.",
      price: 140,
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
      category: "Farsan",
      rating: "4.7",
    },
    {
      id: 4,
      name: "Undhiyu",
      description:
        "Classic Gujarati mixed vegetable dish cooked with rich spices and seasonal vegetables.",
      price: 260,
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
      category: "Special",
      rating: "4.8",
      badge: "Chef Special",
    },
    {
      id: 5,
      name: "Thepla",
      description:
        "Soft methi thepla served with pickle, curd, and traditional Gujarati flavors.",
      price: 100,
      image:
        "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=900&q=80",
      category: "Bread",
      rating: "4.6",
    },
    {
      id: 6,
      name: "Fafda Jalebi",
      description:
        "Crispy fafda served with sweet jalebi and chutneys, a true Gujarati favorite.",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1601050690117-94f5f6fa0c89?auto=format&fit=crop&w=900&q=80",
      category: "Popular",
      rating: "4.9",
    },
  ];

  return (
    <section id="menu" className="relative overflow-hidden px-6 py-24">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-orange-500 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-red-500 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
              Our Menu
            </p>
            <h2 className="mb-4 text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent md:text-6xl">
              Vadodara ni Special Vangi
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-400">
              Traditional Gujarati flavors crafted with warmth, balance, and
              authentic recipes.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -10 }}
            >
              <div className="overflow-hidden rounded-[28px] border border-orange-500/20 bg-[#120909] shadow-xl shadow-orange-900/20">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40"></div>

                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-md bg-white/90 px-2 py-1 shadow">
                    <div className="flex h-4 w-4 items-center justify-center border-2 border-green-600">
                      <div className="h-2 w-2 rounded-full bg-green-600"></div>
                    </div>
                    <span className="text-xs font-semibold text-green-700">
                      Pure Veg
                    </span>
                  </div>

                  <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-orange-600 to-red-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                    {item.category}
                  </div>

                  {item.badge && (
                    <div className="absolute bottom-4 left-4 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-black">
                      {item.badge}
                    </div>
                  )}
                </div>

                <div className="space-y-3 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold transition-colors group-hover:text-orange-400">
                      {item.name}
                    </h3>
                    <span className="whitespace-nowrap text-xl font-bold text-orange-500">
                      ₹{item.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <div className="flex text-yellow-400">
                      <Star className="h-4 w-4 fill-yellow-400" />
                    </div>
                    <span className="font-medium text-white">
                      {item.rating}
                    </span>
                    <span className="text-gray-500">Guest Rating</span>
                  </div>

                  <p className="leading-relaxed text-gray-400">
                    {item.description}
                  </p>

                  <div className="pt-2">
                    <button className="group/btn flex items-center gap-1 text-sm font-semibold text-orange-500 transition-colors hover:text-orange-400">
                      Order Now
                      <span className="transition-transform group-hover/btn:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
