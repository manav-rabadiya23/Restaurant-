import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import StarRating from "../components/common/StarRating";
import type { Review } from "../types";

export default function ReviewsSection({
  customerReviews,
}: {
  customerReviews: Review[];
}) {
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
          Testimonials
        </p>

        <h2 className="mt-4 text-4xl font-black md:text-5xl">
          What guests are saying
        </h2>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <StarRating />
          <span className="text-white/80">
            4.9 average rating from 2,400+ diners
          </span>
        </div>
      </motion.div>

      {/* REVIEWS GRID */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {customerReviews.map((review, index) => (
          <motion.div
            key={`${review.name}-${review.text}`}
            initial={{ opacity: 0, y: 45, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.55,
              delay: index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: false, amount: 0.15 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-orange-400/30"
          >
            {/* Hover Glow */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-500/0 blur-3xl transition duration-500 group-hover:bg-orange-500/20" />

            <div className="relative z-10 mb-4 flex items-center justify-between">
              <StarRating count={review.rating} />
              <Quote className="h-5 w-5 text-orange-300 transition duration-300 group-hover:scale-125" />
            </div>

            <p className="relative z-10 leading-7 text-white/75">
              “{review.text}”
            </p>

            <h4 className="relative z-10 mt-6 text-lg font-bold text-orange-300">
              {review.name}
            </h4>

            <p className="relative z-10 text-sm text-white/55">{review.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
