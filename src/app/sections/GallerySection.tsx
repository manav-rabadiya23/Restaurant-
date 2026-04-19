import { galleryImages } from "../data/restaurantData";

export default function GallerySection() {
  // Take exactly 7 unique images from your data
  const displayImages = galleryImages.slice(0, 7);

  return (
    <section id="gallery" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
          Gallery
        </p>
        <h2 className="mt-4 text-4xl font-black md:text-5xl">
          Food, ambience and moments
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {/* Column 1 */}
        <div className="grid gap-4">
          <img
            src={displayImages[0]}
            className="h-40 w-full rounded-3xl object-cover transition duration-300 hover:scale-[1.02] sm:h-52 bg-neutral-900 shadow-xl"
            alt="Gallery 1"
          />
          <img
            src={displayImages[1]}
            className="h-64 w-full rounded-3xl object-cover transition duration-300 hover:scale-[1.02] sm:h-80 bg-neutral-900 shadow-xl"
            alt="Gallery 2"
          />
        </div>

        {/* Column 2: Large Featured Image */}
        <div className="grid gap-4">
          <img
            src={displayImages[5]}
            className="h-[340px] md:h-full w-full rounded-3xl object-cover transition duration-300 hover:scale-[1.01] bg-neutral-900 shadow-xl"
            alt="Gallery 3"
          />
        </div>

        {/* Column 3 */}
        <div className="grid gap-4">
          <img
            src={displayImages[3]}
            className="h-64 w-full rounded-3xl object-cover transition duration-300 hover:scale-[1.02] sm:h-80 bg-neutral-900 shadow-xl"
            alt="Gallery 4"
          />
          <img
            src={displayImages[4]}
            className="h-40 w-full rounded-3xl object-cover transition duration-300 hover:scale-[1.02] sm:h-52 bg-neutral-900 shadow-xl"
            alt="Gallery 5"
          />
        </div>

        {/* Column 4 */}
        <div className="grid gap-4">
          <img
            src={displayImages[2]}
            className="h-40 w-full rounded-3xl object-cover transition duration-300 hover:scale-[1.02] sm:h-52 bg-neutral-900 shadow-xl"
            alt="Gallery 6"
          />
          <img
            src={displayImages[6]}
            className="h-64 w-full rounded-3xl object-cover transition duration-300 hover:scale-[1.02] sm:h-80 bg-neutral-900 shadow-xl"
            alt="Gallery 7"
          />
        </div>
      </div>
    </section>
  );
}
