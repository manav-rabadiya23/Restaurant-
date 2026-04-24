import { Facebook, Instagram, LogOut, MapPin, Phone, Mail } from "lucide-react";
import { FaTripadvisor } from "react-icons/fa";
import { restaurantName } from "../../data/restaurantData";

export default function Footer({ onLogout }: { onLogout: () => void }) {
  return (
    <footer className="border-t border-white/10 bg-black/40 px-4 py-12 text-white sm:px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 md:grid-cols-4 md:gap-10">
        {/* BRAND */}
        <div className="col-span-2 text-center md:col-span-1 md:text-left">
          <h2 className="text-2xl font-extrabold text-orange-400 transition hover:text-orange-300">
            {restaurantName}
          </h2>

          <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-white/60 md:mx-0">
            Authentic Gujarati flavors with a modern dining experience in
            Vadodara.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="pl-9 text-left md:pl-0">
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-white md:mb-3 md:text-lg md:normal-case md:tracking-normal">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm text-white/70 md:space-y-2">
            <li>
              <a href="#home" className="transition hover:text-orange-400">
                Home
              </a>
            </li>
            <li>
              <a href="#menu" className="transition hover:text-orange-400">
                Menu
              </a>
            </li>
            <li>
              <a href="#about" className="transition hover:text-orange-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="transition hover:text-orange-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="pr-2 text-left  md:pr-0">
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-white md:mb-3 md:text-lg md:normal-case md:tracking-normal">
            Contact
          </h3>

          <ul className="space-y-3 text-sm text-white/70">
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sayajigunj+Vadodara+Gujarat+390005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 transition hover:text-orange-400"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span className="md:hidden">Sayajigunj</span>
                <span className="hidden md:inline">
                  Sayajigunj, Vadodara, Gujarat 390005
                </span>
              </a>
            </li>

            <li>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 transition hover:text-orange-400"
              >
                <Phone className="h-4 w-4 shrink-0" />
                <span className="md:hidden">Call</span>
                <span className="hidden md:inline">+91 98765 43210</span>
              </a>
            </li>

            <li>
              <a
                href="mailto:info@gujaratirasoi.com"
                className="flex items-center gap-2 transition hover:text-orange-400"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span className="md:hidden">Email</span>
                <span className="hidden md:inline">info@gujaratirasoi.com</span>
              </a>
            </li>
          </ul>
        </div>

        {/* HOURS + SOCIAL */}
        <div className="col-span-2 text-center md:col-span-1 md:text-left">
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-white md:mb-3 md:text-lg md:normal-case md:tracking-normal">
            Opening Hours
          </h3>

          <p className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 md:border-0 md:bg-transparent md:p-0">
            Mon - Sun:{" "}
            <span className="font-semibold text-orange-300">
              11:00 AM – 11:00 PM
            </span>
          </p>

          <div className="mt-5 flex justify-center gap-3 text-white/70 md:justify-start md:gap-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:-translate-y-1 hover:text-orange-400 md:border-0 md:bg-transparent md:p-0"
            >
              <Instagram className="h-5 w-5" />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:-translate-y-1 hover:text-orange-400 md:border-0 md:bg-transparent md:p-0"
            >
              <Facebook className="h-5 w-5" />
            </a>

            <a
              href="https://www.tripadvisor.in/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tripadvisor"
              className="rounded-full border border-white/10 bg-white/5 p-2 text-xl transition hover:-translate-y-1 hover:text-orange-400 md:border-0 md:bg-transparent md:p-0"
            >
              <FaTripadvisor />
            </a>
          </div>

          <button
            onClick={onLogout}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-2 text-sm text-white/80 transition hover:border-orange-400/40 hover:text-orange-300"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {restaurantName}. All rights reserved.
      </div>
    </footer>
  );
}
