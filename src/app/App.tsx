import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
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
import type { CartItem, MenuItem, Order } from "./types";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeNav, setActiveNav] = useState("#home");

  const [bookingName, setBookingName] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");
  const [bookingGuests, setBookingGuests] = useState("2");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");

  const [feedbackName, setFeedbackName] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackRating, setFeedbackRating] = useState(0);
  const [customerReviews, setCustomerReviews] = useState(initialReviews);

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState("");
  const [lastOrder, setLastOrder] = useState<Order | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const toastTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const savedCart = localStorage.getItem("restaurant-cart");
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch {
        setCartItems([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("restaurant-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    audioRef.current = new Audio(
      "https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3",
    );

    return () => {
      if (toastTimeoutRef.current) {
        window.clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

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
          item.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.category.toLowerCase().includes(searchTerm.toLowerCase());

        return categoryMatch && searchMatch;
      }),
    [searchTerm, selectedCategory],
  );

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  );

  const handleBooking = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !bookingName ||
      !bookingPhone ||
      !bookingGuests ||
      !bookingDate ||
      !bookingTime
    ) {
      alert("Please fill all booking details.");
      return;
    }
    alert(
      `Booking confirmed for ${bookingName} (${bookingGuests} guests) on ${bookingDate} at ${bookingTime}.`,
    );
  };

  const handleLogin = (name: string) => {
    setUserName(name);
    setIsLoggedIn(true);
    setBookingName(name);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
    setBookingName("");
  };

  const handleFeedbackSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!feedbackName || !feedbackMessage || !feedbackRating) {
      alert("Please fill your name, feedback and rating.");
      return;
    }
    const newReview = {
      name: feedbackName,
      role: "Customer Feedback",
      text: feedbackMessage,
      rating: feedbackRating,
    };
    setCustomerReviews((prev) => [newReview, ...prev]);
    setFeedbackName("");
    setFeedbackMessage("");
    setFeedbackRating(0);
    alert("Thank you for your feedback!");
  };

  const showToast = (message: string) => {
    setToast(message);
    if (toastTimeoutRef.current) window.clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = window.setTimeout(() => setToast(""), 2000);
  };

  const playAddSound = async () => {
    try {
      if (!audioRef.current) return;
      audioRef.current.currentTime = 0;
      await audioRef.current.play();
    } catch {}
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
    playAddSound();
    showToast(`${item.name} added to cart 🛒`);
    setIsCartOpen(true);
  };

  const handleIncreaseQuantity = (name: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const handleDecreaseQuantity = (name: string) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const handleRemoveItem = (name: string) => {
    setCartItems((prev) => prev.filter((item) => item.name !== name));
  };

  const handleClearCart = () => {
    setCartItems([]);
    showToast("Cart cleared");
  };

  const handlePlaceOrder = (order: Order) => {
    setLastOrder(order);
    showToast("Order placed! Generating invoice...");
  };

  if (!isLoggedIn) return <LoginPage onLogin={handleLogin} />;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0b0b0b] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(251,146,60,0.12),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(250,204,21,0.08),_transparent_24%),linear-gradient(180deg,#0b0b0b_0%,#111111_50%,#0b0b0b_100%)]" />

      <Header
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        onLogout={handleLogout}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={cartCount}
      />
      <HeroSection userName={userName} setActiveNav={setActiveNav} />
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
      <ReviewsSection customerReviews={customerReviews} />
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
        bookingName={bookingName}
        setBookingName={setBookingName}
        bookingPhone={bookingPhone}
        setBookingPhone={setBookingPhone}
        bookingGuests={bookingGuests}
        setBookingGuests={setBookingGuests}
        bookingDate={bookingDate}
        setBookingDate={setBookingDate}
        bookingTime={bookingTime}
        setBookingTime={setBookingTime}
        specialRequest={specialRequest}
        setSpecialRequest={setSpecialRequest}
        onSubmit={handleBooking}
      />
      <ContactSection />
      <Footer onLogout={handleLogout} />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onIncrease={handleIncreaseQuantity}
        onDecrease={handleDecreaseQuantity}
        onRemove={handleRemoveItem}
        onClearCart={handleClearCart}
        onPlaceOrder={handlePlaceOrder}
      />
      <OrderSuccess order={lastOrder} onClose={() => setLastOrder(null)} />

      {toast && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center px-4 pointer-events-none">
          <div className="rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-400 px-6 py-4 text-center font-semibold text-black shadow-2xl animate-[scaleIn_.25s_ease]">
            {toast}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
