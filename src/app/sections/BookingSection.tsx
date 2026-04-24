import { Clock3, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import type { FormEvent } from "react";
import {
  mapsLink,
  restaurantAddress,
  restaurantPhone,
} from "../data/restaurantData";

export default function BookingSection({
  bookingName,
  setBookingName,
  bookingPhone,
  setBookingPhone,
  bookingGuests,
  setBookingGuests,
  bookingDate,
  setBookingDate,
  bookingTime,
  setBookingTime,
  specialRequest,
  setSpecialRequest,
  onSubmit,
}: {
  bookingName: string;
  setBookingName: (value: string) => void;
  bookingPhone: string;
  setBookingPhone: (value: string) => void;
  bookingGuests: string;
  setBookingGuests: (value: string) => void;
  bookingDate: string;
  setBookingDate: (value: string) => void;
  bookingTime: string;
  setBookingTime: (value: string) => void;
  specialRequest: string;
  setSpecialRequest: (value: string) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <section id="booking" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: false, amount: 0.2 }}
        className="grid overflow-visible rounded-[2rem] border border-white/10 bg-white/5 md:grid-cols-2"
      >
        {/* LEFT PANEL */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-orange-500 to-yellow-400 p-8 text-black sm:p-10"
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em]">
            Booking
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Reserve your dining experience
          </h2>

          <p className="mt-4 text-black/80">
            Clean and simple booking with native date and time selection.
          </p>

          <div className="mt-8 space-y-5">
            <motion.div
              whileHover={{ x: 6 }}
              className="flex items-center gap-3"
            >
              <Clock3 className="h-5 w-5" />
              <span>Open daily: 11:00 AM – 11:00 PM</span>
            </motion.div>

            <motion.div
              whileHover={{ x: 6 }}
              className="flex items-center gap-3"
            >
              <Phone className="h-5 w-5" />
              <span>{restaurantPhone}</span>
            </motion.div>

            <motion.div
              whileHover={{ x: 6 }}
              className="flex items-center gap-3"
            >
              <MapPin className="h-5 w-5" />
              <span>{restaurantAddress}</span>
            </motion.div>
          </div>

          <motion.a
            href={mapsLink}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-flex rounded-full bg-black px-5 py-3 font-semibold text-white transition"
          >
            Open Location
          </motion.a>
        </motion.div>

        {/* FORM PANEL */}
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative space-y-5 p-8 sm:p-10"
        >
          {/* Glow effect */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-orange-500/20 blur-3xl" />

          {/* NAME */}
          <InputField
            label="Full Name"
            value={bookingName}
            onChange={setBookingName}
            placeholder="Enter your name"
          />

          {/* PHONE */}
          <InputField
            label="Phone Number"
            value={bookingPhone}
            onChange={setBookingPhone}
            placeholder="Enter your phone number"
          />

          {/* ROW */}
          <div className="grid gap-5 md:grid-cols-3">
            <InputField
              label="Guests"
              value={bookingGuests}
              onChange={setBookingGuests}
              type="number"
            />

            <InputField
              label="Date"
              value={bookingDate}
              onChange={setBookingDate}
              type="date"
            />

            <InputField
              label="Time"
              value={bookingTime}
              onChange={setBookingTime}
              type="time"
            />
          </div>

          {/* TEXTAREA */}
          <div>
            <label className="mb-2 block text-sm text-white/70">
              Special Request
            </label>

            <textarea
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
              className="min-h-[110px] w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition focus:border-orange-400 focus:shadow-[0_0_18px_rgba(251,146,60,0.25)]"
            />
          </div>

          {/* BUTTON */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="w-full rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 px-6 py-4 font-bold text-black"
          >
            Confirm Booking
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}

/* 🔥 REUSABLE INPUT */
function InputField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <label className="mb-2 block text-sm text-white/70">{label}</label>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none transition focus:border-orange-400 focus:shadow-[0_0_18px_rgba(251,146,60,0.25)]"
        required
      />
    </motion.div>
  );
}
