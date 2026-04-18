import { Facebook, Instagram, LogOut } from "lucide-react";
import { FaTripadvisor } from "react-icons/fa";
import { restaurantName } from "../../data/restaurantData";

export default function Footer({ onLogout }: { onLogout: () => void }) {
  return (
    <footer className="border-t border-white/10 bg-black/40 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <h2 className="text-2xl font-extrabold text-orange-400">
            {restaurantName}
          </h2>
          <p className="mt-2 text-sm text-white/60">
            Authentic taste. Elegant experience. Now set for Vadodara.
          </p>
        </div>

        <div className="flex items-center gap-4 text-xl text-white/70">
          <a
            href="#"
            className="transition hover:text-orange-400"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="transition hover:text-orange-400"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="transition hover:text-orange-400"
            aria-label="Tripadvisor"
          >
            <FaTripadvisor />
          </a>
          <button
            onClick={onLogout}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm transition hover:border-orange-400/40 hover:text-orange-300"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </div>
    </footer>
  );
}
