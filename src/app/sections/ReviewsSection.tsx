import { Quote } from "lucide-react";
import StarRating from "../components/common/StarRating";
import type { Review } from "../types";

export default function ReviewsSection({
  customerReviews,
}: {
  customerReviews: Review[];
}) {
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
          Testimonials
        </p>
        <h2 className="mt-4 text-4xl font-black md:text-5xl">
          What guests are saying
        </h2>
        <div className="mt-5 flex items-center justify-center gap-3">
          <StarRating />
          <span className="text-white/80">
            4.9 average rating from 2,400+ diners
          </span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {customerReviews.map((review) => (
          <div
            key={`${review.name}-${review.text}`}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-2 hover:border-orange-400/30"
          >
            <div className="mb-4 flex items-center justify-between">
              <StarRating count={review.rating} />
              <Quote className="h-5 w-5 text-orange-300" />
            </div>
            <p className="leading-7 text-white/75">“{review.text}”</p>
            <h4 className="mt-6 text-lg font-bold text-orange-300">
              {review.name}
            </h4>
            <p className="text-sm text-white/55">{review.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
