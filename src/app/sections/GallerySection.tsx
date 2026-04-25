import { motion } from "framer-motion";
import { galleryImages } from "../data/restaurantData";

export default function GallerySection() {
  const displayImages = galleryImages.slice(0, 7);

  const fadeUp = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="gallery" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
          Gallery
        </p>
        <h2 className="mt-4 text-4xl font-black md:text-5xl">
          Food, ambience and moments
        </h2>
      </motion.div>

      {/* GRID */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {/* Column 1 */}
        <div className="grid gap-4">
          <ImageCard src={displayImages[0]} />
          <ImageCard src={displayImages[5]} large />
        </div>

        {/* Column 2 */}
        <div className="grid gap-4">
          <ImageCard src={displayImages[1]} featured />
        </div>

        {/* Column 3 */}
        <div className="grid gap-4">
          <ImageCard src={displayImages[3]} large />
          <ImageCard src={displayImages[4]} />
        </div>

        {/* Column 4 */}
        <div className="grid gap-4">
          <ImageCard src={displayImages[2]} />
          <ImageCard src={displayImages[6]} large />
        </div>
      </div>
    </section>
  );
}

/* 🔥 REUSABLE IMAGE CARD */
function ImageCard({
  src,
  large,
  featured,
}: {
  src: string;
  large?: boolean;
  featured?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: false, amount: 0.2 }}
      whileHover={{ scale: 1.03 }}
      className="group relative overflow-hidden rounded-3xl shadow-xl"
    >
      {/* Glow effect */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-500 to-yellow-400 opacity-0 blur transition duration-500 group-hover:opacity-20" />

      <motion.img
        src={src}
        alt="Gallery"
        className={`relative w-full object-cover bg-neutral-900 transition duration-500 group-hover:scale-110
          ${featured ? "h-[340px] md:h-full" : ""}
          ${large ? "h-64 sm:h-80" : "h-40 sm:h-52"}
        `}
      />

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/20 opacity-0 transition duration-500 group-hover:opacity-100" />
    </motion.div>
  );
}
