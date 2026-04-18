import { useState } from "react";
import { LogOut, ChevronDown, ShoppingCart, Menu, X, User } from "lucide-react";
import { restaurantName } from "../../data/restaurantData";

export default function Header({
  activeNav,
  setActiveNav,
  onLogout,
  onOpenCart,
  cartCount,
  onProfileClick, // Added prop for profile navigation
}: {
  activeNav: string;
  setActiveNav: (href: string) => void;
  onLogout: () => void;
  onOpenCart: () => void;
  cartCount: number;
  onProfileClick: () => void; // Added type definition
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              setActiveNav("#home");
            }}
            className="text-xl font-black text-orange-400 sm:text-2xl"
          >
            {restaurantName}
          </a>

          <nav className="hidden items-center gap-3 text-sm font-medium lg:flex">
            {/* Desktop Profile Link */}
            <button
              onClick={onProfileClick}
              className="flex items-center gap-2 rounded-full px-4 py-2 text-white/80 transition hover:bg-white/5 hover:text-orange-400"
            >
              <User className="h-4 w-4" />
              Profile
            </button>

            <a
              href="#menu"
              onClick={() => setActiveNav("#menu")}
              className={`rounded-full px-4 py-2 transition ${
                activeNav === "#menu"
                  ? "bg-orange-500/15 text-orange-400"
                  : "text-white/80 hover:bg-white/5 hover:text-orange-400"
              }`}
            >
              Menu
            </a>

            <div className="group relative">
              <button className="flex items-center gap-2 rounded-full px-4 py-2 text-white/80 transition hover:bg-white/5 hover:text-orange-400">
                About
                <ChevronDown className="h-4 w-4" />
              </button>

              <div className="invisible absolute left-0 top-full mt-3 w-52 rounded-2xl border border-white/10 bg-[#111111] p-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                {[
                  { label: "About", href: "#about" },
                  { label: "Gallery", href: "#gallery" },
                  { label: "Reviews", href: "#reviews" },
                  { label: "Feedback", href: "#feedback" },
                  { label: "Contact", href: "#contact" },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setActiveNav(item.href)}
                    className="block rounded-xl px-4 py-3 text-white/80 transition hover:bg-white/5 hover:text-orange-400"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="#booking"
              onClick={() => setActiveNav("#booking")}
              className={`rounded-full px-4 py-2 transition ${
                activeNav === "#booking"
                  ? "bg-orange-500/15 text-orange-400"
                  : "text-white/80 hover:bg-white/5 hover:text-orange-400"
              }`}
            >
              Booking
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCart}
              className="relative hidden items-center gap-2 rounded-full border border-orange-400/30 px-4 py-2 text-sm font-semibold text-orange-300 transition hover:bg-orange-500/10 sm:inline-flex"
            >
              <ShoppingCart className="h-4 w-4" />
              Order Online
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-6 min-w-[24px] items-center justify-center rounded-full bg-orange-500 px-1 text-xs font-bold text-black shadow-lg">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={onLogout}
              className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 px-4 py-2 text-sm font-semibold text-black shadow-lg shadow-orange-500/30 transition hover:scale-105 sm:inline-flex"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex rounded-full border border-white/10 p-2 text-white transition hover:border-orange-400/30 hover:text-orange-300 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition ${
          mobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        } lg:hidden`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed right-0 top-0 z-[70] h-full w-full max-w-sm transform border-l border-white/10 bg-[#0f0f0f] shadow-2xl transition-transform duration-300 lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <h2 className="text-xl font-bold text-white">Menu</h2>
            <button
              onClick={closeMobileMenu}
              className="rounded-full border border-white/10 p-2 text-white/70 transition hover:border-orange-400/30 hover:text-orange-300"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-5">
            <div className="space-y-3">
              {/* Mobile Profile Link */}
              <button
                onClick={() => {
                  onProfileClick();
                  closeMobileMenu();
                }}
                className="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/85 transition hover:border-orange-400/30 hover:text-orange-300 text-left"
              >
                <User className="h-5 w-5 text-orange-400" />
                <span className="font-medium">My Profile & Orders</span>
              </button>

              <a
                href="#menu"
                onClick={() => {
                  setActiveNav("#menu");
                  closeMobileMenu();
                }}
                className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/85 transition hover:border-orange-400/30 hover:text-orange-300"
              >
                Menu
              </a>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <p className="mb-3 px-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                  About
                </p>
                <div className="space-y-2">
                  {[
                    { label: "About", href: "#about" },
                    { label: "Gallery", href: "#gallery" },
                    { label: "Reviews", href: "#reviews" },
                    { label: "Feedback", href: "#feedback" },
                    { label: "Contact", href: "#contact" },
                  ].map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setActiveNav(item.href);
                        closeMobileMenu();
                      }}
                      className="block rounded-xl px-4 py-3 text-white/80 transition hover:bg-white/5 hover:text-orange-400"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <a
                href="#booking"
                onClick={() => {
                  setActiveNav("#booking");
                  closeMobileMenu();
                }}
                className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/85 transition hover:border-orange-400/30 hover:text-orange-300"
              >
                Booking
              </a>
            </div>
          </div>

          <div className="space-y-3 border-t border-white/10 px-5 py-5">
            <button
              onClick={() => {
                onOpenCart();
                closeMobileMenu();
              }}
              className="relative inline-flex w-full items-center justify-center gap-2 rounded-full border border-orange-400/30 px-4 py-3 text-sm font-semibold text-orange-300 transition hover:bg-orange-500/10"
            >
              <ShoppingCart className="h-4 w-4" />
              Order Online
              {cartCount > 0 && (
                <span className="absolute right-4 top-1/2 flex h-6 min-w-[24px] -translate-y-1/2 items-center justify-center rounded-full bg-orange-500 px-1 text-xs font-bold text-black shadow-lg">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={onLogout}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 px-4 py-3 text-sm font-semibold text-black shadow-lg shadow-orange-500/30 transition hover:scale-[1.02]"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
