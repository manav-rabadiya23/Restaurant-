import { galleryImages } from "../data/restaurantData";

export default function GallerySection() {
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
        <div className="grid gap-4">
          <img
            src={galleryImages[0]}
            className="h-64 w-full rounded-3xl object-cover transition duration-300 hover:scale-[1.02] sm:h-80"
            alt="gallery"
          />
          <img
            src={galleryImages[1]}
            className="h-40 w-full rounded-3xl object-cover transition duration-300 hover:scale-[1.02] sm:h-52"
            alt="gallery"
          />
        </div>
        <div className="grid gap-4">
          <img
            src={galleryImages[2]}
            className="h-40 w-full rounded-3xl object-cover transition duration-300 hover:scale-[1.02] sm:h-52"
            alt="gallery"
          />
          <img
            src={galleryImages[3]}
            className="h-64 w-full rounded-3xl object-cover transition duration-300 hover:scale-[1.02] sm:h-80"
            alt="gallery"
          />
        </div>
        <div className="grid gap-4">
          <img
            src={galleryImages[4]}
            className="h-64 w-full rounded-3xl object-cover transition duration-300 hover:scale-[1.02] sm:h-80"
            alt="gallery"
          />
          <img
            src={galleryImages[5]}
            className="h-40 w-full rounded-3xl object-cover transition duration-300 hover:scale-[1.02] sm:h-52"
            alt="gallery"
          />
        </div>
        <div className="hidden gap-4 md:grid">
          <div className="flex h-full items-center justify-center rounded-3xl border border-dashed border-orange-400/30 bg-orange-500/5 p-8 text-center">
            <div>
              <h3 className="text-2xl font-bold text-orange-300">
                Real Restaurant Photos
              </h3>
              <p className="mt-3 text-white/70">
                Replace stock images later with your own food and ambience
                photos for a final business-ready version.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
