import { Star } from "lucide-react";
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
        <div>
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

          <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold">Why this helps</h3>
            <div className="mt-4 space-y-3 text-white/70">
              <p>• Builds trust for new visitors</p>
              <p>• Makes the website feel interactive</p>
              <p>• Shows star ratings clearly</p>
              <p>• Adds fresh customer feedback to reviews instantly</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-8"
        >
          <div>
            <label className="mb-2 block text-sm text-white/70">
              Your Name
            </label>
            <input
              type="text"
              value={feedbackName}
              onChange={(e) => setFeedbackName(e.target.value)}
              placeholder="Enter your name"
              className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none focus:border-orange-400"
              required
            />
          </div>

          <div className="mt-5">
            <label className="mb-3 block text-sm text-white/70">
              Your Rating
            </label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  type="button"
                  onClick={() => setFeedbackRating(rating)}
                  className="transition hover:scale-110"
                >
                  <Star
                    className={`h-8 w-8 ${
                      rating <= feedbackRating
                        ? "fill-amber-400 text-amber-400"
                        : "text-white/30"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm text-white/70">
              Your Feedback
            </label>
            <textarea
              value={feedbackMessage}
              onChange={(e) => setFeedbackMessage(e.target.value)}
              placeholder="Tell us about your experience..."
              className="min-h-[140px] w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none focus:border-orange-400"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 px-6 py-4 font-bold text-black transition hover:scale-[1.02]"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </section>
  );
}
