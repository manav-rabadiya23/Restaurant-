import { Award, Heart, Leaf, Users } from "lucide-react";
import { motion } from "framer-motion";

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
    <section
      id="about"
      className="relative overflow-hidden px-6 py-24 bg-[#060606]"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-orange-500"></div>
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-400">
                The Essence
              </p>
            </div>

            <h2 className="mb-8 text-5xl font-black uppercase italic tracking-tighter leading-none md:text-7xl">
              Taste the <span className="text-shimmer">Heart of Gujarat</span>
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-white/50 font-medium">
              Rangilo Gujarat brings the authentic taste of Gujarat to your
              plate. From dhokla to undhiyu, every dish is prepared with
              traditional recipes, balanced flavors, and warm hospitality
              inspired by Vadodara’s food culture.
            </p>

            {/* Live Animated Feature Cards */}
            <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="group relative rounded-[2rem] border border-white/5 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-orange-500/30 hover:bg-white/[0.08]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Icon className="mb-4 h-10 w-10 text-orange-500 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
                    <h3 className="mb-2 font-black uppercase tracking-widest text-xs text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed font-medium">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Statistics Section */}
            <div className="flex flex-wrap gap-12 border-t border-white/10 pt-10">
              <div className="space-y-1">
                <p className="text-4xl font-black tracking-tighter text-orange-500">
                  15+
                </p>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/30">
                  Years of Taste
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-4xl font-black tracking-tighter text-orange-500">
                  500+
                </p>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/30">
                  Happy Guests
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-4xl font-black tracking-tighter text-orange-500">
                  06
                </p>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/30">
                  Signatures
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated Glow Backdrops */}
            <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-orange-500/10 blur-[100px] animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-red-500/10 blur-[100px] animate-pulse"></div>

            <div className="relative group aspect-[3/4] overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl transition-all duration-700 hover:border-orange-500/30">
              <img
                src="https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=1000&q=80"
                alt="Gujarati food presentation"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>

              {/* Floating Content Card */}
              <div className="absolute bottom-8 left-8 right-8 rounded-[2rem] border border-white/10 bg-black/60 p-8 backdrop-blur-2xl animate-float">
                <p className="text-xl font-black uppercase italic tracking-tighter text-white">
                  Rangilo Gujarat
                </p>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-400 mt-1">
                  Authentic Curation
                </p>
                <p className="mt-4 text-xs font-medium leading-relaxed text-white/40">
                  Prem thi banavelu bhojan, <br />
                  Gujarat ni pehchan.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
