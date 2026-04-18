import { Star } from "lucide-react";

export default function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-1 text-amber-400">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}
