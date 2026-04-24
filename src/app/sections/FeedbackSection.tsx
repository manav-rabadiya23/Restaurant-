import { Star } from "lucide-react";
import { motion } from "framer-motion";
import type { FormEvent } from "react";

export default function FeedbackSection({
  feedbackName,
  setFeedbackName,
  feedbackMessage,
  setFeedbackMessage,
  feedbackRating,
  setFeedbackRating,
  onSubmit,
}: {
  feedbackName: string;
  setFeedbackName: (value: string) => void;
  feedbackMessage: string;
  setFeedbackMessage: (value: string) => void;
  feedbackRating: number;
  setFeedbackRating: (value: number) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <section id="feedback" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false, amount: 0.25 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
            Customer Feedback
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Share your dining experience
          </h2>

          <p className="mt-4 max-w-xl text-white/70">
            Let customers leave a review directly on the site. This makes the
            restaurant page feel more real and interactive.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            viewport={{ once: false, amount: 0.25 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 transition hover:border-orange-400/40"
          >
            <h3 className="text-xl font-bold">Why this helps</h3>

            <div className="mt-4 space-y-3 text-white/70">
              <p>• Builds trust for new visitors</p>
              <p>• Makes the website feel interactive</p>
              <p>• Shows star ratings clearly</p>
              <p>• Adds fresh customer feedback to reviews instantly</p>
            </div>
          </motion.div>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 50, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false, amount: 0.25 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-orange-500/20 blur-3xl" />

          <div className="relative z-10">
            <label className="mb-2 block text-sm text-white/70">
              Your Name
            </label>
            <input
              type="text"
              value={feedbackName}
              onChange={(e) => setFeedbackName(e.target.value)}
              placeholder="Enter your name"
              className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none transition focus:border-orange-400 focus:shadow-[0_0_18px_rgba(251,146,60,0.25)]"
              required
            />
          </div>

          <div className="relative z-10 mt-5">
            <label className="mb-3 block text-sm text-white/70">
              Your Rating
            </label>

            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((rating) => (
                <motion.button
                  key={rating}
                  type="button"
                  whileHover={{ scale: 1.22, rotate: 8 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setFeedbackRating(rating)}
                  className="transition"
                >
                  <Star
                    className={`h-8 w-8 ${
                      rating <= feedbackRating
                        ? "fill-amber-400 text-amber-400"
                        : "text-white/30"
                    }`}
                  />
                </motion.button>
              ))}
            </div>
          </div>

          <div className="relative z-10 mt-5">
            <label className="mb-2 block text-sm text-white/70">
              Your Feedback
            </label>

            <textarea
              value={feedbackMessage}
              onChange={(e) => setFeedbackMessage(e.target.value)}
              placeholder="Tell us about your experience..."
              className="min-h-[140px] w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition focus:border-orange-400 focus:shadow-[0_0_18px_rgba(251,146,60,0.25)]"
              required
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 mt-6 w-full rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 px-6 py-4 font-bold text-black transition"
          >
            Submit Feedback
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
