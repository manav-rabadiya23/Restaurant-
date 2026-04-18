import { motion } from "motion/react";

const reviews = [
  {
    name: "Priya Shah",
    rating: "★★★★★",
    text: "Authentic Gujarati taste and beautiful presentation. The thali felt homemade and full of flavor.",
  },
  {
    name: "Rahul Patel",
    rating: "★★★★★",
    text: "Warm atmosphere and pure veg food. Dhokla and khandvi were fresh, soft, and perfectly balanced.",
  },
  {
    name: "Meera Joshi",
    rating: "★★★★☆",
    text: "A lovely family dining experience in Vadodara. Traditional taste with a modern restaurant feel.",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
            Guest Reviews
          </p>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            What Our <span className="text-orange-400">Guests Say</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Real feedback from people who enjoyed our traditional Gujarati
            dining experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="group rounded-[28px] border border-orange-500/20 bg-[#120909]/90 p-7 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-orange-400/40 hover:shadow-orange-500/10"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">{review.name}</h3>
                <span className="text-yellow-400">{review.rating}</span>
              </div>

              <p className="leading-7 text-gray-300">“{review.text}”</p>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>

              <p className="mt-4 text-sm font-medium text-orange-300">
                Verified Guest Review
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
