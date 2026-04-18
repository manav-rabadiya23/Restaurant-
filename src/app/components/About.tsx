import { Award, Heart, Leaf, Users } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  const features = [
    {
      icon: Award,
      title: "Gujarati Tradition",
      description: "Authentic local flavors",
    },
    {
      icon: Leaf,
      title: "100% Pure Veg",
      description: "Fresh vegetarian ingredients",
    },
    {
      icon: Heart,
      title: "Family Recipes",
      description: "Warm homemade taste",
    },
    {
      icon: Users,
      title: "Loved by Families",
      description: "Comfort dining in Vadodara",
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden px-6 py-24">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4 flex items-center gap-2">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-orange-500"></div>
              <p className="text-sm uppercase tracking-widest text-orange-400">
                About Us
              </p>
            </div>

            <h2 className="mb-6 text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent md:text-6xl">
              Taste the Heart of Gujarat
            </h2>

            <p className="mb-6 text-xl leading-relaxed text-gray-300">
              Rangilo Gujarat brings the authentic taste of Gujarat to your
              plate. From dhokla to undhiyu, every dish is prepared with
              traditional recipes, balanced flavors, and warm hospitality
              inspired by Vadodara’s food culture.
            </p>

            <p className="mb-8 text-lg leading-relaxed text-gray-400">
              We believe food is more than a meal — it is tradition, family, and
              joy. Our menu celebrates classic Gujarati dishes in a modern
              dining space that feels welcoming and real.
            </p>

            <div className="mb-8 grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="group rounded-xl border border-orange-500/20 bg-gradient-to-br from-orange-950/50 to-red-950/50 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-orange-500/40"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Icon className="mx-auto mb-3 h-10 w-10 text-orange-500 transition-transform group-hover:scale-110" />
                    <h3 className="mb-1 text-center font-semibold text-orange-100">
                      {feature.title}
                    </h3>
                    <p className="text-center text-sm text-gray-400">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 flex gap-4">
              <div className="text-center">
                <p className="text-4xl font-bold text-orange-500">15+</p>
                <p className="text-sm text-gray-400">Years of Taste</p>
              </div>
              <div className="w-px bg-orange-500/20"></div>
              <div className="text-center">
                <p className="text-4xl font-bold text-orange-500">500+</p>
                <p className="text-sm text-gray-400">Happy Guests</p>
              </div>
              <div className="w-px bg-orange-500/20"></div>
              <div className="text-center">
                <p className="text-4xl font-bold text-orange-500">6</p>
                <p className="text-sm text-gray-400">Signature Dishes</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br from-orange-500 to-red-500 opacity-30 blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-gradient-to-br from-red-500 to-orange-500 opacity-30 blur-3xl"></div>

            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border-4 border-orange-500/20 shadow-2xl shadow-orange-900/30">
              <img
                src="https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=1000&q=80"
                alt="Gujarati food presentation"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

              <div className="absolute bottom-8 left-8 right-8 rounded-xl border border-orange-500/30 bg-gradient-to-r from-orange-900/90 to-red-900/90 p-6 backdrop-blur-md">
                <p className="text-lg font-semibold text-white">
                  Rangilo Gujarat
                </p>
                <p className="text-sm text-orange-300">
                  Authentic Gujarati Dining
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  Prem thi banavelu bhojan, Gujarat ni pehchan.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
