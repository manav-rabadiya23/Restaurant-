import { useState } from "react";
import { Menu, X, UtensilsCrossed } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "menu", label: "Menu" },
    { id: "about", label: "About" },
    { id: "reviews", label: "Reviews" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-orange-500/20 bg-gradient-to-r from-orange-950/95 to-red-950/95 backdrop-blur-md shadow-lg shadow-orange-900/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="group flex items-center gap-2 text-2xl font-bold text-orange-400 transition-colors hover:text-orange-300"
          >
            <UtensilsCrossed className="h-6 w-6 group-hover:rotate-6 transition-transform" />
            <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
              Rangilo Gujarat
            </span>
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative text-orange-100 transition-colors hover:text-orange-400"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange-400 transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-orange-400 transition-colors hover:bg-orange-500/10 md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-orange-500/20 bg-gradient-to-b from-orange-950 to-red-950 md:hidden">
          <div className="flex flex-col gap-4 px-6 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="rounded px-2 py-2 text-left text-orange-100 transition-colors hover:bg-orange-500/10 hover:text-orange-400"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
