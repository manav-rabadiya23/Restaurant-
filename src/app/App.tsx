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
  const [activeNav, setActiveNav] = useState("#home");

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [toast, setToast] = useState("");
  const toastTimeoutRef = useRef<number | null>(null);

  const [lastOrder, setLastOrder] = useState<Order | null>(null);

  const [bookingName, setBookingName] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");
  const [bookingGuests, setBookingGuests] = useState("2");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");

  const [feedbackName, setFeedbackName] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackRating, setFeedbackRating] = useState(0);
  const [liveReviews, setLiveReviews] = useState<Review[]>(initialReviews);

  useEffect(() => {
    const savedCart = localStorage.getItem("restaurant-cart");
    const savedOrders = localStorage.getItem("restaurant-orders");
    const savedName = localStorage.getItem("restaurant-user-name");
    const savedUser = localStorage.getItem("user");

    if (savedCart) setCartItems(JSON.parse(savedCart));
    if (savedOrders) setOrderHistory(JSON.parse(savedOrders));

    if (savedName) {
      setUserName(savedName);
      setIsLoggedIn(true);
      setBookingName(savedName);
    }

    if (savedUser) {
      const user = JSON.parse(savedUser);
      setBookingName(user.name || savedName || "");
      setBookingPhone(user.phone || "");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("restaurant-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const showToast = (msg: string) => {
    setToast(msg);
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = window.setTimeout(() => setToast(""), 2000);
  };

  const handleNavigate = (href: string) => {
    setActiveScreen("home");
    setActiveNav(href);
    setLastOrder(null);

    setTimeout(() => {
      const id = href.startsWith("#") ? href.substring(1) : href;
      const element = document.getElementById(id);

      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.pageYOffset - 80,
          behavior: "smooth",
        });
      }
    }, 150);
  };

  const handleUpdateUser = (name: string) => {
    const upper = name.toUpperCase();
    setUserName(upper);
    setBookingName(upper);
    localStorage.setItem("restaurant-user-name", upper);
    showToast("Profile updated");
  };

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  );

  const handleLogin = (name: string) => {
    const upper = name.toUpperCase();
    setUserName(upper);
    setBookingName(upper);
    setIsLoggedIn(true);
    localStorage.setItem("restaurant-user-name", upper);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
    setActiveScreen("home");
  };

  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const exist = prev.find((cartItem) => cartItem.name === item.name);

      if (exist) {
        return prev.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      }

      return [...prev, { ...item, id: item.name, quantity: 1 }];
    });

    showToast(`${item.name.toUpperCase()} ADDED TO CART 🛒`);
  };

  const handlePlaceOrder = (order: Order) => {
    const newOrder: Order = {
      ...order,
      createdAt: new Date().toISOString(),
      status: "placed",
    };

    const newHistory: Order[] = [newOrder, ...orderHistory];

    setOrderHistory(newHistory);
    localStorage.setItem("restaurant-orders", JSON.stringify(newHistory));

    setCartItems([]);
    setLastOrder(newOrder);
    setIsCartOpen(false);

    showToast("Order placed 🍽️");
  };

  const handleDeleteOrder = (orderId: string) => {
    const updated = orderHistory.filter((order) => order.id !== orderId);
    setOrderHistory(updated);
    localStorage.setItem("restaurant-orders", JSON.stringify(updated));
    showToast("Order deleted 🗑️");
  };

  const handleClearOrders = () => {
    setOrderHistory([]);
    localStorage.removeItem("restaurant-orders");
    showToast("All orders cleared 🧹");
  };

  const handleFeedbackSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (feedbackRating === 0) {
      showToast("Please give a rating ⭐");
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
    showToast("Feedback added ⭐");
  };

  const handleBookingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showToast("Table booked successfully 🍽️");

    setBookingGuests("2");
    setBookingDate("");
    setBookingTime("");
    setSpecialRequest("");
  };

  if (!isLoggedIn) {
    if (authMode === "login") {
      return <LoginPage onLogin={handleLogin} setAuthMode={setAuthMode} />;
    }

    if (authMode === "signup") {
      return <SignupPage onSignup={handleLogin} setAuthMode={setAuthMode} />;
    }

    return <ForgotPassword setAuthMode={setAuthMode} />;
  }

  return (
    <div className="min-h-screen bg-black pt-16 sm:pt-20 text-white">
      <Header
        activeNav={activeNav}
        setActiveNav={handleNavigate}
        onLogout={handleLogout}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={cartCount}
        onProfileClick={() => setActiveScreen("profile")}
      />

      {activeScreen === "profile" ? (
        <ProfilePage
          orders={orderHistory}
          userName={userName}
          onBack={() => setActiveScreen("home")}
          onUpdateUser={handleUpdateUser}
          onDeleteOrder={handleDeleteOrder}
          onClearOrders={handleClearOrders}
        />
      ) : (
        <>
          <HeroSection userName={userName} setActiveNav={handleNavigate} />

          <FeaturesSection />

          <MenuSection menuItems={menuItems} onAddToCart={handleAddToCart} />

          <AboutSection />
          <GallerySection />

          <ReviewsSection customerReviews={liveReviews} />

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
            bookingName={bookingName || userName}
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
            onSubmit={handleBookingSubmit}
          />

          <ContactSection />
        </>
      )}

      <Footer onLogout={handleLogout} />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onIncrease={(name) =>
          setCartItems((prev) =>
            prev.map((item) =>
              item.name === name
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            ),
          )
        }
        onDecrease={(name) =>
          setCartItems((prev) =>
            prev
              .map((item) =>
                item.name === name
                  ? { ...item, quantity: item.quantity - 1 }
                  : item,
              )
              .filter((item) => item.quantity > 0),
          )
        }
        onRemove={(name) =>
          setCartItems((prev) => prev.filter((item) => item.name !== name))
        }
        onClearCart={() => setCartItems([])}
        onPlaceOrder={handlePlaceOrder}
      />

      {lastOrder && (
        <OrderSuccess order={lastOrder} onClose={() => setLastOrder(null)} />
      )}

      {toast && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center pointer-events-none">
          <div className="bg-gradient-to-r from-orange-500 to-yellow-400 text-black px-10 py-5 rounded-2xl font-bold shadow-2xl text-lg">
            {toast}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
