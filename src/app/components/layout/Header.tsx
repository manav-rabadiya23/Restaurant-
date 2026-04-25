import { useState, useEffect, useRef } from "react";
import { LogOut, ChevronDown, ShoppingCart, Menu, X, User } from "lucide-react";
import { restaurantName } from "../../data/restaurantData";

export default function Header({
  activeNav,
  setActiveNav,
  onLogout,
  onOpenCart,
  cartCount,
  onProfileClick,
}: {
  activeNav: string;
  setActiveNav: (href: string) => void;
  onLogout: () => void;
  onOpenCart: () => void;
  cartCount: number;
  onProfileClick: () => void;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });

  const navRef = useRef<HTMLElement | null>(null);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const aboutLinks = [
    "#about",
    "#gallery",
    "#reviews",
    "#feedback",
    "#contact",
  ];

  const activeKey =
    activeNav === "#menu"
      ? "menu"
      : activeNav === "#booking"
        ? "booking"
        : aboutLinks.includes(activeNav)
          ? "about"
          : "";

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (totalHeight <= 0) {
        setScrollProgress(0);
        return;
      }

      setScrollProgress((window.scrollY / totalHeight) * 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    const updatePill = () => {
      if (!navRef.current || !activeKey) {
        setPillStyle({ left: 0, width: 0 });
        return;
      }

      const activeItem = navRef.current.querySelector(
        `[data-nav-key="${activeKey}"]`,
      ) as HTMLElement | null;

      if (!activeItem) return;

      const navRect = navRef.current.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();

      setPillStyle({
        left: itemRect.left - navRect.left,
        width: itemRect.width,
      });
    };

    updatePill();
    window.addEventListener("resize", updatePill);

    return () => window.removeEventListener("resize", updatePill);
  }, [activeKey]);

  const navItemClass =
    "relative z-10 rounded-full px-5 py-2.5 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:text-orange-300";

  const activeClass = "text-orange-300";

  const handleNav = (href: string) => {
    setActiveNav(href);
    closeMobileMenu();

    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <header className="fixed left-0 top-0 z-[9999] h-16 w-full border-b border-orange-400/10 bg-black/70 shadow-[0_10px_40px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-yellow-400/10" />
        <div className="absolute bottom-0 left-1/2 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-orange-400/40 to-transparent" />

        <div className="relative mx-auto flex h-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNav("#home");
            }}
            className="group relative text-lg font-black text-orange-400 sm:text-2xl"
          >
            <span className="absolute -inset-3 rounded-2xl bg-orange-500/10 opacity-0 blur-xl transition group-hover:opacity-100" />
            <span className="relative bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">
              {restaurantName}
            </span>
          </a>

          <nav
            ref={navRef}
            className="relative hidden items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-sm font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_45px_rgba(0,0,0,0.45)] backdrop-blur-xl lg:flex"
          >
            {activeKey && (
              <span
                className="absolute top-2 h-[calc(100%-16px)] rounded-full border border-orange-300/25 bg-gradient-to-r from-orange-500/20 via-yellow-400/15 to-orange-500/20 shadow-[0_0_28px_rgba(249,115,22,0.25)] transition-all duration-500 ease-out"
                style={{
                  left: pillStyle.left,
                  width: pillStyle.width,
                }}
              />
            )}

            <button
              onClick={onProfileClick}
              className={`${navItemClass} hover:bg-white/10`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <User className="h-4 w-4" />
                Profile
              </span>
            </button>

            <a
              data-nav-key="menu"
              href="#menu"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#menu");
              }}
              className={`${navItemClass} ${
                activeKey === "menu" ? activeClass : ""
              }`}
            >
              <span className="relative z-10">Menu</span>
            </a>

            <div data-nav-key="about" className="group relative z-10">
              <button
                onClick={() => handleNav("#about")}
                className={`${navItemClass} ${
                  activeKey === "about" ? activeClass : ""
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  About
                  <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
                </span>
              </button>

              <div className="invisible absolute left-0 top-full mt-4 w-56 translate-y-2 rounded-3xl border border-orange-300/15 bg-black/90 p-2 opacity-0 shadow-2xl shadow-black/60 backdrop-blur-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
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
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(item.href);
                    }}
                    className="block rounded-2xl px-4 py-3 text-white/80 transition hover:bg-orange-500/10 hover:text-orange-300"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <a
              data-nav-key="booking"
              href="#booking"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#booking");
              }}
              className={`${navItemClass} ${
                activeKey === "booking" ? activeClass : ""
              }`}
            >
              <span className="relative z-10">Booking</span>
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onProfileClick}
              className="inline-flex rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:border-orange-400/30 hover:text-orange-300 lg:hidden"
            >
              <User className="h-5 w-5" />
            </button>

            <button
              onClick={onOpenCart}
              className="relative inline-flex rounded-full border border-orange-400/30 bg-white/5 p-2 text-orange-300 transition hover:bg-orange-500/10 lg:hidden"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-bold text-black">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenCart}
              className="relative hidden items-center gap-2 rounded-full border border-orange-400/40 bg-black/20 px-5 py-3 text-sm font-bold text-orange-300 shadow-[0_0_25px_rgba(249,115,22,0.12)] backdrop-blur-xl transition hover:bg-orange-500/10 sm:inline-flex lg:inline-flex max-lg:hidden"
            >
              <ShoppingCart className="h-4 w-4" />
              Order Online
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-6 min-w-[24px] items-center justify-center rounded-full bg-orange-500 px-1 text-xs font-bold text-black">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={onLogout}
              className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 px-5 py-3 text-sm font-bold text-black shadow-lg shadow-orange-500/35 transition hover:scale-105 sm:inline-flex"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:border-orange-400/30 hover:text-orange-300 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-[2px] w-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-orange-500 via-yellow-300 to-orange-500 shadow-[0_0_18px_rgba(249,115,22,0.8)] transition-all duration-300 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[9998] bg-black/70 backdrop-blur-md transition ${
          mobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        } lg:hidden`}
        onClick={closeMobileMenu}
      />

      <aside
        className={`fixed right-0 top-0 z-[9999] h-full w-full max-w-sm transform border-l border-orange-300/15 bg-black/95 shadow-2xl backdrop-blur-2xl transition-transform duration-300 lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center justify-between border-b border-white/10 px-5">
            <h2 className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-xl font-black text-transparent">
              Menu
            </h2>

            <button
              onClick={closeMobileMenu}
              className="rounded-full border border-white/10 p-2 text-white/70 transition hover:border-orange-400/30 hover:text-orange-300"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-5">
            <div className="space-y-3">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav("#home");
                }}
                className="block rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white/85 transition hover:border-orange-400/30 hover:bg-orange-500/10 hover:text-orange-300"
              >
                Home
              </a>

              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav("#menu");
                }}
                className="block rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white/85 transition hover:border-orange-400/30 hover:bg-orange-500/10 hover:text-orange-300"
              >
                Menu
              </a>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
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
                      onClick={(e) => {
                        e.preventDefault();
                        handleNav(item.href);
                      }}
                      className="block rounded-xl px-4 py-3 text-white/80 transition hover:bg-orange-500/10 hover:text-orange-300"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <a
                href="#booking"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav("#booking");
                }}
                className="block rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white/85 transition hover:border-orange-400/30 hover:bg-orange-500/10 hover:text-orange-300"
              >
                Booking
              </a>
            </div>
          </div>

          <div className="space-y-3 border-t border-white/10 p-5">
            <button
              onClick={() => {
                onLogout();
                closeMobileMenu();
              }}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-400 px-4 py-3 font-bold text-black"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
