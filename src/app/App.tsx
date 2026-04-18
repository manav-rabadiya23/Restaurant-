import { useEffect, useMemo, useRef, useState } from "react";
import LoginPage from "./components/auth/LoginPage";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { initialReviews, menuItems } from "./data/restaurantData";
import AboutSection from "./sections/AboutSection";
import BookingSection from "./sections/BookingSection";
import CartDrawer from "./sections/CartDrawer";
import ContactSection from "./sections/ContactSection";
import FeaturesSection from "./sections/FeaturesSection";
import FeedbackSection from "./sections/FeedbackSection";
import GallerySection from "./sections/GallerySection";
import HeroSection from "./sections/HeroSection";
import MenuSection from "./sections/MenuSection";
import ReviewsSection from "./sections/ReviewsSection";
import OrderSuccess from "./sections/OrderSuccess";
import ProfilePage from "./sections/ProfilePage";
import type { CartItem, MenuItem, Order } from "./types";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [activeScreen, setActiveScreen] = useState<"home" | "profile">("home");
  const [orderHistory, setOrderHistory] = useState<Order[]>([]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeNav, setActiveNav] = useState("#home");

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState("");
  const [lastOrder, setLastOrder] = useState<Order | null>(null);

  const toastTimeoutRef = useRef<number | null>(null);

  // Load persistent data from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("restaurant-cart");
    const savedOrders = localStorage.getItem("restaurant-orders");
    const savedName = localStorage.getItem("restaurant-user-name");

    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch {
        setCartItems([]);
      }
    }
    if (savedOrders) {
      try {
        setOrderHistory(JSON.parse(savedOrders));
      } catch {
        setOrderHistory([]);
      }
    }
    if (savedName) setUserName(savedName);
  }, []);

  useEffect(() => {
    localStorage.setItem("restaurant-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  /**
   * NAVIGATION HANDLER
   * Switches screen to home and scrolls to target section
   */
  const handleNavigate = (href: string) => {
    setActiveScreen("home");
    setActiveNav(href);

    setTimeout(() => {
      const targetId = href.startsWith("#") ? href.substring(1) : href;
      const element = document.getElementById(targetId);

      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 150);
  };

  const handleUpdateUser = (newName: string) => {
    const upperName = newName.toUpperCase();
    setUserName(upperName);
    localStorage.setItem("restaurant-user-name", upperName);
    showToast("PROFILE UPDATED SUCCESSFULLY");
  };

  const categories = useMemo(
    () => ["All", ...new Set(menuItems.map((item) => item.category))],
    [],
  );

  const filteredMenu = useMemo(
    () =>
      menuItems.filter((item) => {
        const categoryMatch =
          selectedCategory === "All" || item.category === selectedCategory;
        const searchMatch =
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.desc.toLowerCase().includes(searchTerm.toLowerCase());
        return categoryMatch && searchMatch;
      }),
    [searchTerm, selectedCategory],
  );

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  );

  const handleLogin = (name: string) => {
    const upperName = name.toUpperCase();
    setUserName(upperName);
    setIsLoggedIn(true);
    localStorage.setItem("restaurant-user-name", upperName);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
    setActiveScreen("home");
  };

  const showToast = (message: string) => {
    setToast(message);
    if (toastTimeoutRef.current) window.clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = window.setTimeout(() => setToast(""), 2500);
  };

  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((cartItem) => cartItem.name === item.name);
      if (existing) {
        return prev.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      }
      return [...prev, { ...item, id: item.name, quantity: 1 }];
    });
    showToast(`${item.name.toUpperCase()} ADDED TO CART 🛒`);
    setIsCartOpen(true);
  };

  /**
   * PLACE ORDER HANDLER
   * Fixed: Closes cart and triggers Success Modal
   */
  const handlePlaceOrder = (order: Order) => {
    const newHistory = [order, ...orderHistory];
    setOrderHistory(newHistory);
    localStorage.setItem("restaurant-orders", JSON.stringify(newHistory));

    // Reset Cart & Close Drawer
    setCartItems([]);
    setIsCartOpen(false);

    // Show Success Modal
    setLastOrder(order);
    showToast("ORDER PLACED SUCCESSFULLY! 🍽️");
  };

  if (!isLoggedIn) return <LoginPage onLogin={handleLogin} />;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0b0b0b] text-white selection:bg-orange-500/30">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(251,146,60,0.12),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(250,204,21,0.08),_transparent_24%)] pointer-events-none" />

      <Header
        activeNav={activeNav}
        setActiveNav={handleNavigate}
        onLogout={handleLogout}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={cartCount}
        onProfileClick={() => setActiveScreen("profile")}
      />

      <main className="transition-all duration-700 ease-in-out">
        {activeScreen === "profile" ? (
          <ProfilePage
            orders={orderHistory}
            userName={userName}
            onBack={() => setActiveScreen("home")}
            onUpdateUser={handleUpdateUser}
          />
        ) : (
          <>
            <HeroSection userName={userName} setActiveNav={handleNavigate} />
            <FeaturesSection />
            <MenuSection
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              filteredMenu={filteredMenu}
              onAddToCart={handleAddToCart}
            />
            <AboutSection />
            <GallerySection />
            <ReviewsSection customerReviews={initialReviews} />
            <FeedbackSection
              feedbackName={userName}
              setFeedbackName={() => {}}
              feedbackMessage=""
              setFeedbackMessage={() => {}}
              feedbackRating={0}
              setFeedbackRating={() => {}}
              onSubmit={(e) => e.preventDefault()}
            />
            <BookingSection
              bookingName={userName}
              setBookingName={() => {}}
              bookingPhone=""
              setBookingPhone={() => {}}
              bookingGuests="2"
              setBookingGuests={() => {}}
              bookingDate=""
              setBookingDate={() => {}}
              bookingTime=""
              setBookingTime={() => {}}
              specialRequest=""
              setSpecialRequest={() => {}}
              onSubmit={(e) => e.preventDefault()}
            />
            <ContactSection />
          </>
        )}
      </main>

      <Footer onLogout={handleLogout} />

      {/* OVERLAYS */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onIncrease={(name) =>
          setCartItems((prev) =>
            prev.map((i) =>
              i.name === name ? { ...i, quantity: i.quantity + 1 } : i,
            ),
          )
        }
        onDecrease={(name) =>
          setCartItems((prev) =>
            prev
              .map((i) =>
                i.name === name ? { ...i, quantity: i.quantity - 1 } : i,
              )
              .filter((i) => i.quantity > 0),
          )
        }
        onRemove={(name) =>
          setCartItems((prev) => prev.filter((i) => i.name !== name))
        }
        onClearCart={() => setCartItems([])}
        onPlaceOrder={handlePlaceOrder}
      />

      {lastOrder && (
        <OrderSuccess order={lastOrder} onClose={() => setLastOrder(null)} />
      )}

      {toast && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[110] bg-orange-500 px-8 py-4 rounded-full text-black font-black uppercase tracking-widest text-xs shadow-2xl animate-bounce pointer-events-none">
          {toast}
        </div>
      )}
    </div>
  );
}

export default App;
