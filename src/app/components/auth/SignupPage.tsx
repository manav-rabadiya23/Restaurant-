import { useState, type FormEvent, type ChangeEvent } from "react";
import {
  FaLeaf,
  FaEye,
  FaEyeSlash,
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
} from "react-icons/fa";
import { motion } from "framer-motion";
import type { AuthMode } from "../../../types/auth";

/* ================= TYPES ================= */
type InputProps = {
  label: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  icon: React.ReactNode;
};

/* ================= FLOATING INPUT ================= */
const FloatingInput = ({
  label,
  type = "text",
  value,
  onChange,
  error,
  icon,
}: InputProps) => (
  <div className="relative">
    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50">
      {icon}
    </span>

    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder=" "
      autoComplete="off"
      className={`peer h-14 w-full rounded-2xl border pl-12 pr-5 pt-6 pb-2 bg-black/30 text-white outline-none transition-all
      ${error ? "border-red-500" : "border-white/10 focus:border-orange-400"}`}
    />

    <label
      className="absolute left-12 top-2 text-xs text-orange-400 transition-all
      peer-placeholder-shown:top-4 
      peer-placeholder-shown:text-base 
      peer-placeholder-shown:text-white/40
      peer-focus:top-2 
      peer-focus:text-xs"
    >
      {label}
    </label>

    {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
  </div>
);

/* ================= SIGNUP PAGE ================= */
export default function SignupPage({
  setAuthMode,
  onSignup,
}: {
  setAuthMode: (mode: AuthMode) => void;
  onSignup: (name: string) => void;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [show, setShow] = useState({
    password: false,
    confirmPassword: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  /* ================= HANDLE CHANGE ================= */
  const handleChange =
    (field: string) => (e: ChangeEvent<HTMLInputElement>) => {
      const value =
        field === "phone" ? e.target.value.replace(/\D/g, "") : e.target.value;

      setForm((prev) => ({ ...prev, [field]: value }));
    };

  /* ================= VALIDATION ================= */
  const validate = () => {
    const e: Record<string, string> = {};

    if (!form.name) e.name = "Name is required";
    if (!form.email) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";

    if (!form.phone) e.phone = "Mobile number required";
    else if (!/^\d{10}$/.test(form.phone))
      e.phone = "Enter valid 10-digit number";

    if (!form.password) e.password = "Password required";
    else if (form.password.length < 6) e.password = "Minimum 6 characters";

    if (!form.confirmPassword) e.confirmPassword = "Confirm your password";
    else if (form.password !== form.confirmPassword)
      e.confirmPassword = "Passwords do not match";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  /* ================= SUBMIT ================= */
  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      // ✅ SAVE USER DATA HERE (IMPORTANT PART)
      const userData = {
        name: form.name,
        email: form.email,
        phone: form.phone,
      };

      localStorage.setItem("user", JSON.stringify(userData));

      onSignup(form.name); // optional UI update
      setLoading(false);

      alert("Account Created Successfully!");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white px-6 py-10 flex items-start justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid max-w-5xl w-full lg:grid-cols-2 gap-12"
      >
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center space-y-6 pt-10 lg:pt-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/25 bg-orange-500/10 px-4 py-2 text-sm text-orange-300 w-fit">
            <FaLeaf /> Join Gujarati Rasoi
          </span>

          <h1 className="text-5xl font-black leading-tight">
            Create your account
            <span className="block bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
              start your journey
            </span>
          </h1>

          <p className="text-gray-400 max-w-md">
            Discover authentic flavors, book tables, and manage your orders with
            a seamless experience.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
          <h2 className="text-3xl font-black">Sign Up</h2>

          <form onSubmit={handleSignup} className="mt-8 space-y-6">
            <FloatingInput
              label="Full Name"
              value={form.name}
              onChange={handleChange("name")}
              error={errors.name}
              icon={<FaUser />}
            />

            <FloatingInput
              label="Email Address"
              type="email"
              value={form.email}
              onChange={handleChange("email")}
              error={errors.email}
              icon={<FaEnvelope />}
            />

            <FloatingInput
              label="Mobile Number"
              type="tel"
              value={form.phone}
              onChange={handleChange("phone")}
              error={errors.phone}
              icon={<FaPhone />}
            />

            {/* PASSWORD */}
            <div className="relative">
              <FloatingInput
                label="Password"
                type={show.password ? "text" : "password"}
                value={form.password}
                onChange={handleChange("password")}
                error={errors.password}
                icon={<FaLock />}
              />

              <span
                className="absolute right-4 top-4 cursor-pointer text-white/60"
                onClick={() =>
                  setShow((p) => ({ ...p, password: !p.password }))
                }
              >
                {show.password ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="relative">
              <FloatingInput
                label="Confirm Password"
                type={show.confirmPassword ? "text" : "password"}
                value={form.confirmPassword}
                onChange={handleChange("confirmPassword")}
                error={errors.confirmPassword}
                icon={<FaLock />}
              />

              <span
                className="absolute right-4 top-4 cursor-pointer text-white/60"
                onClick={() =>
                  setShow((p) => ({
                    ...p,
                    confirmPassword: !p.confirmPassword,
                  }))
                }
              >
                {show.confirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <p className="text-center text-sm text-gray-300">
              Already have an account?{" "}
              <span
                className="cursor-pointer text-orange-400 hover:underline"
                onClick={() => setAuthMode("login")}
              >
                Login
              </span>
            </p>

            <button
              disabled={loading}
              className="w-full rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 py-4 font-bold text-black transition hover:scale-[1.02] disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Account"}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
