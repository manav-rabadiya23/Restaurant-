import { useState } from "react";
import {
  FaLeaf,
  FaStar,
  FaUtensils,
  FaBirthdayCake,
  FaUserTie,
} from "react-icons/fa";
import { GiMeal, GiPartyPopper } from "react-icons/gi";
import { MdDeliveryDining, MdFamilyRestroom } from "react-icons/md";
import { motion } from "framer-motion";
import { restaurantName } from "../data/restaurantData";

const galleryImages = [
  {
    img: "/family.png",
    title: "Family Dining",
    desc: "Enjoy comfortable seating and premium ambience designed for family lunches, dinners and weekend gatherings.",
  },
  {
    img: "/Festive-Premium-Thali.png",
    title: "Premium Thali",
    desc: "Experience a complete Gujarati thali with farsan, sabzi, dal, rice, roti and sweets.",
  },
  {
    img: "/catering.png",
    title: "Catering Service",
    desc: "We provide catering services for events, birthdays and family functions.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl overflow-hidden px-4 py-8 text-white sm:px-6 lg:py-20"
    >
      <div className="pointer-events-none absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="relative grid items-start gap-8 lg:grid-cols-2 xl:gap-10">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.25 }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl"
        >
          <div className="relative overflow-hidden rounded-[1.5rem]">
            <img
              src="/food.jpg"
              alt="Gujarati Rasoi"
              className="h-[430px] w-full object-cover sm:h-[560px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            <div className="absolute bottom-6 left-5 right-5">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-300">
                Authentic Gujarati Rasoi
              </p>
              <h3 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                Fresh, Warm & Truly Traditional
              </h3>
            </div>
          </div>

          <div className="mt-5 space-y-5">
            {galleryImages.map((item, index) => (
              <ImageRow key={item.title} {...item} index={index} />
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-orange-400/20 bg-orange-500/10 p-4">
            <div className="flex items-center gap-2 text-orange-400">
              <FaStar />
              <span className="font-black">4.8 Rating</span>
            </div>
            <p className="mt-1 text-xs text-white/50">
              Loved by customers for authentic taste, service and fresh food.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-5">
            <Stat value="25+" label="Dishes" />
            <Stat value="100%" label="Fresh" />
            <Stat value="4.8★" label="Rating" />
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.25 }}
          className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl sm:p-6 md:p-8"
        >
          <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-400">
            About Us
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
            Modern dining with{" "}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
              Gujarati soul
            </span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-white/65 sm:text-lg">
            <span className="font-bold text-white">{restaurantName}</span>{" "}
            brings traditional Gujarati flavours into a clean, modern and
            premium restaurant experience.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-white/50 sm:text-base">
            We serve fresh thali, farsan, sweets and beverages with warm
            hospitality. Our restaurant is also available for family parties,
            birthday celebrations, small events and catering orders.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <FlipCard
              icon={<FaUtensils />}
              title="Authentic Taste"
              desc="Experience the real taste of Gujarat with traditional recipes passed down through generations."
              hint="Taste"
            />

            <FlipCard
              icon={<GiMeal />}
              title="Premium Thali"
              desc="Our thali offers a complete meal with variety, balance and presentation."
              hint="Thali"
            />

            <FlipCard
              icon={<FaLeaf />}
              title="Fresh Ingredients"
              desc="We use fresh vegetables, high-quality spices and hygienic preparation methods."
              hint="Fresh"
            />

            <FlipCard
              icon={<FaUserTie />}
              title="Expert Chefs"
              desc="Our chefs bring experience and passion for traditional Gujarati cooking."
              hint="Chefs"
            />
          </div>

          <div className="mt-10 rounded-[1.8rem] border border-orange-400/20 bg-orange-500/10 p-5 sm:p-6">
            <div className="mb-6">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-300">
                We also provide
              </p>
              <h3 className="mt-2 text-2xl font-black">
                Events, parties & catering
              </h3>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <FlipCard
                icon={<GiPartyPopper />}
                title="Party Orders"
                desc="Customized party food orders with delicious menus, proper packaging and timely delivery."
                hint="Party"
                service
              />

              <FlipCard
                icon={<FaBirthdayCake />}
                title="Birthday Events"
                desc="Celebrate birthdays with tasty meals, good ambience and a comfortable dining environment."
                hint="Birthday"
                service
              />

              <FlipCard
                icon={<MdFamilyRestroom />}
                title="Family Functions"
                desc="Perfect place for family get-togethers with spacious seating and authentic Gujarati food."
                hint="Family"
                service
              />

              <FlipCard
                icon={<MdDeliveryDining />}
                title="Catering Service"
                desc="Catering services for events, offices and functions with quality food and smooth service."
                hint="Catering"
                service
              />
            </div>
            <div className="w-full max-w-[480px] overflow-hidden rounded-2xl border border-white/10">
              <br />
              <img
                src="/seating.png"
                alt="Seating"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ImageInfoCard({ img, title }: { img: string; title: string }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-black/35 shadow-xl"
    >
      <div className="relative h-[230px] overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-4 left-4 right-4">
          <h4 className="text-lg font-black text-orange-300">{title}</h4>
        </div>
      </div>
    </motion.div>
  );
}

function ImageRow({
  img,
  title,
  desc,
  index,
}: {
  img: string;
  title: string;
  desc: string;
  index: number;
}) {
  const reverse = index % 2 !== 0;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/40 sm:min-h-[230px] ${
        reverse ? "sm:flex-row-reverse" : "sm:flex-row"
      }`}
    >
      <img
        src={img}
        alt={title}
        className="h-[260px] w-full object-cover sm:h-auto sm:w-[58%]"
      />

      <div className="flex flex-1 flex-col justify-center p-5">
        <h4 className="text-xl font-black text-orange-300">{title}</h4>
        <p className="mt-3 text-sm leading-relaxed text-white/60">{desc}</p>
      </div>
    </motion.div>
  );
}

function FlipCard({
  icon,
  title,
  desc,
  hint,
  service,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  hint: string;
  service?: boolean;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="group h-[260px] [perspective:1200px]">
      <div
        className={`relative h-full w-full rounded-2xl transition-all duration-700 [transform-style:preserve-3d] sm:group-hover:[transform:rotateY(180deg)] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        <div className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10 bg-black/35 p-5 shadow-xl [backface-visibility:hidden]">
          <div className="relative flex h-full flex-col justify-between">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/15 text-2xl text-orange-400">
                {icon}
              </div>

              <h3 className="text-lg font-black uppercase leading-tight tracking-wide">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-white/45">
                Premium {hint.toLowerCase()} experience made for modern Gujarati
                dining.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setFlipped(true)}
              className="rounded-full border border-orange-400/40 bg-orange-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-orange-300 sm:hidden"
            >
              Click Here
            </button>

            <p className="hidden text-xs font-bold uppercase tracking-[0.22em] text-orange-300/80 sm:block">
              More
            </p>
          </div>
        </div>

        <div className="absolute inset-0 rounded-2xl border border-orange-400/40 bg-gradient-to-br from-black via-[#1b1008] to-orange-950/70 p-5 shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="flex h-full flex-col justify-between">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-orange-300">
                {title}
              </p>
              <p className="text-sm leading-relaxed text-white/70">{desc}</p>
            </div>

            <button
              type="button"
              onClick={() => setFlipped(false)}
              className="mt-4 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white/70 transition hover:bg-white hover:text-black sm:hidden"
            >
              Back
            </button>

            <span className="hidden rounded-full border border-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white/50 sm:inline-block">
              {service ? "Service" : "Feature"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -4 }}
      className="rounded-2xl border border-white/10 bg-black/30 p-3 text-center sm:p-4"
    >
      <h4 className="text-lg font-black text-orange-400 sm:text-2xl">
        {value}
      </h4>
      <p className="mt-1 text-[9px] uppercase tracking-widest text-white/40 sm:text-[11px]">
        {label}
      </p>
    </motion.div>
  );
}
