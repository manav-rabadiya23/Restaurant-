import { useEffect, useMemo, useRef, useState } from "react";
import LoginPage from "./components/auth/LoginPage";
import SignupPage from "./components/auth/SignupPage";
import ForgotPassword from "./components/auth/ForgotPassword";

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

import type { CartItem, MenuItem, Order, Review } from "./types";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const [authMode, setAuthMode] = useState<"login" | "signup" | "forgot">(
    "login",
  );

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

  // ⭐ FEEDBACK STATE
  const [feedbackName, setFeedbackName] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackRating, setFeedbackRating] = useState(0);

  // ⭐ LIVE REVIEWS STATE (IMPORTANT)
  const [liveReviews, setLiveReviews] = useState<Review[]>(initialReviews);

  // LOAD LOCAL STORAGE
  useEffect(() => {
    const savedCart = localStorage.getItem("restaurant-cart");
    const savedOrders = localStorage.getItem("restaurant-orders");
    const savedName = localStorage.getItem("restaurant-user-name");

    if (savedCart) setCartItems(JSON.parse(savedCart));
    if (savedOrders) setOrderHistory(JSON.parse(savedOrders));

    if (savedName) {
      setUserName(savedName);
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("restaurant-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // NAVIGATION
  const handleNavigate = (href: string) => {
    setActiveScreen("home");
    setActiveNav(href);

    setTimeout(() => {
      const targetId = href.startsWith("#") ? href.substring(1) : href;
      const element = document.getElementById(targetId);

      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.pageYOffset - 80,
          behavior: "smooth",
        });
      }
    }, 150);
  };

  // USER UPDATE
  const handleUpdateUser = (newName: string) => {
    const upperName = newName.toUpperCase();
    setUserName(upperName);
    localStorage.setItem("restaurant-user-name", upperName);
    showToast("PROFILE UPDATED SUCCESSFULLY");
  };

  // MENU FILTER
  const categories = useMemo(
    () => ["All", ...new Set(menuItems.map((item) => item.category))],
    [],
  );

  const filteredMenu = useMemo(() => {
    return menuItems.filter((item) => {
      const categoryMatch =
        selectedCategory === "All" || item.category === selectedCategory;

      const searchMatch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchTerm.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [searchTerm, selectedCategory]);

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  );

  // LOGIN
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

  // TOAST
  const showToast = (message: string) => {
    setToast(message);
    if (toastTimeoutRef.current) window.clearTimeout(toastTimeoutRef.current);

    toastTimeoutRef.current = window.setTimeout(() => setToast(""), 2500);
  };

  // CART
  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.name === item.name);

      if (existing) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i,
        );
      }

      return [...prev, { ...item, id: item.name, quantity: 1 }];
    });

    showToast(`${item.name.toUpperCase()} ADDED TO CART 🛒`);
  };

  // ORDER
  const handlePlaceOrder = (order: Order) => {
    const newHistory = [order, ...orderHistory];

    setOrderHistory(newHistory);
    localStorage.setItem("restaurant-orders", JSON.stringify(newHistory));

    setCartItems([]);
    setLastOrder(order);
    showToast("ORDER PLACED SUCCESSFULLY! 🍽️");
  };

  // ⭐ FEEDBACK SUBMIT (LIVE REVIEW FIX)
  const handleFeedbackSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (feedbackRating === 0) {
      showToast("PLEASE GIVE A RATING ⭐");
      return;
    }

    const newReview: Review = {
      name: feedbackName,
      text: feedbackMessage,
      rating: feedbackRating,
      role: "Customer",
    };

    setLiveReviews((prev) => [newReview, ...prev]);

    setFeedbackName("");
    setFeedbackMessage("");
    setFeedbackRating(0);

    showToast("FEEDBACK ADDED ⭐");
  };

  // AUTH
  if (!isLoggedIn) {
    if (authMode === "login") {
      return <LoginPage onLogin={handleLogin} setAuthMode={setAuthMode} />;
    }
    if (authMode === "signup") {
      return <SignupPage onSignup={handleLogin} setAuthMode={setAuthMode} />;
    }
    if (authMode === "forgot") {
      return <ForgotPassword setAuthMode={setAuthMode} />;
    }
  }

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <Header
        activeNav={activeNav}
        setActiveNav={handleNavigate}
        onLogout={handleLogout}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={cartCount}
        onProfileClick={() => setActiveScreen("profile")}
      />

      <main>
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

            {/* ⭐ LIVE REVIEWS */}
            <ReviewsSection customerReviews={liveReviews} />

            {/* ⭐ FEEDBACK FORM */}
            <FeedbackSection
              feedbackName={feedbackName}
              setFeedbackName={setFeedbackName}
              feedbackMessage={feedbackMessage}
              setFeedbackMessage={setFeedbackMessage}
              feedbackRating={feedbackRating}
              setFeedbackRating={setFeedbackRating}
              onSubmit={handleFeedbackSubmit}
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
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-orange-500 px-6 py-3 rounded-full text-black font-bold">
          {toast}
        </div>
      )}
    </div>
  );
}

export default App;
