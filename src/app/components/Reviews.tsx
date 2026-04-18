import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Priya Shah",
    rating: 5,
    text: "Authentic Gujarati taste and beautiful presentation. The thali felt homemade and full of flavor.",
    date: "April 2026",
  },
  {
    name: "Rahul Patel",
    rating: 5,
    text: "Warm atmosphere and pure veg food. Dhokla and khandvi were fresh, soft, and perfectly balanced.",
    date: "March 2026",
  },
  {
    name: "Meera Joshi",
    rating: 4,
    text: "A lovely family dining experience in Vadodara. Traditional taste with a modern restaurant feel.",
    date: "April 2026",
  },
];

export function Reviews() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden px-6 py-32 bg-[#060606]"
    >
      {/* Premium Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.05)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[1px] w-12 bg-orange-500/50" />
            <p className="text-[10px] font-black uppercase tracking-[0.6em] text-orange-400">
              Guest Registry
            </p>
            <div className="h-[1px] w-12 bg-orange-500/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none text-white"
          >
            What Our <span className="text-shimmer">Guests Say</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl text-[11px] font-black uppercase tracking-[0.3em] text-white/30"
          >
            A curated record of traditional dining experiences in Vadodara.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="group relative rounded-[3rem] border border-white/5 bg-white/5 p-10 backdrop-blur-3xl transition-all duration-700 hover:border-orange-500/30 hover:bg-white/[0.08]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              {/* Luxury Quote Icon */}
              <div className="absolute -top-4 -left-4 bg-orange-500 p-4 rounded-2xl text-black shadow-2xl transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110">
                <Quote size={20} fill="currentColor" />
              </div>

              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-black uppercase italic tracking-tighter text-white group-hover:text-orange-400 transition-colors">
                    {review.name}
                  </h3>
                  <p className="text-[9px] font-black uppercase tracking-widest text-white/20 mt-1">
                    {review.date}
                  </p>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={
                        i < review.rating
                          ? "text-orange-400 fill-orange-400"
                          : "text-white/10"
                      }
                    />
                  ))}
                </div>
              </div>

              <p className="text-lg leading-relaxed text-white/50 font-medium italic">
                “{review.text}”
              </p>

              <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500/60">
                  Verified Visit
                </span>
                <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
