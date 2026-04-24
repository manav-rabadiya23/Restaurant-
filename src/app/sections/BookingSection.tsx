import { Clock3, MapPin, Phone } from "lucide-react";
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
      <div className="grid overflow-visible rounded-[2rem] border border-white/10 bg-white/5 md:grid-cols-2">
        <div className="bg-gradient-to-br from-orange-500 to-yellow-400 p-8 text-black sm:p-10">
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
            <div className="flex items-center gap-3">
              <Clock3 className="h-5 w-5" />
              <span>Open daily: 11:00 AM – 11:00 PM</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5" />
              <span>{restaurantPhone}</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5" />
              <span>{restaurantAddress}</span>
            </div>
          </div>

          <a
            href={mapsLink}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-black px-5 py-3 font-semibold text-white transition hover:scale-105"
          >
            Open Location
          </a>
        </div>

        <form onSubmit={onSubmit} className="space-y-5 p-8 sm:p-10">
          <div>
            <label className="mb-2 block text-sm text-white/70">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={bookingName}
              onChange={(e) => setBookingName(e.target.value)}
              className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none focus:border-orange-400"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/70">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={bookingPhone}
              onChange={(e) => setBookingPhone(e.target.value)}
              className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none focus:border-orange-400"
              required
            />
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm text-white/70">Guests</label>
              <input
                type="number"
                min="1"
                max="50"
                value={bookingGuests}
                onChange={(e) => setBookingGuests(e.target.value)}
                className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none focus:border-orange-400"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/70">Date</label>
              <input
                type="date"
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none focus:border-orange-400"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/70">Time</label>
              <input
                type="time"
                value={bookingTime}
                onChange={(e) => setBookingTime(e.target.value)}
                className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none focus:border-orange-400"
                required
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/70">
              Special Request
            </label>
            <textarea
              placeholder="Birthday, anniversary, large group, window seat..."
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
              className="min-h-[110px] w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none focus:border-orange-400"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 px-6 py-4 font-bold text-black transition hover:scale-[1.02]"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </section>
  );
}
