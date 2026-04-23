import { useState, type FormEvent } from "react";
import {
  FaLeaf,
  FaEye,
  FaEyeSlash,
  FaUser,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";
import { motion } from "framer-motion";
import type { AuthMode } from "../../../types/auth";

/* ================= FLOATING INPUT ================= */
const FloatingInput = ({
  label,
  type = "text",
  value,
  onChange,
  error,
  icon,
}: any) => (
  <div className="relative">
    {/* ICON */}
    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50">
      {icon}
    </span>

    {/* INPUT */}
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder=" "
      autoComplete="off"
      className={`peer h-14 w-full rounded-2xl border pl-12 pr-5 pt-6 pb-2 bg-black/30 text-white outline-none transition-all
      ${error ? "border-red-500" : "border-white/10 focus:border-orange-400"}`}
    />

    {/* LABEL */}
    <label
      className="absolute left-12 top-2 text-xs text-orange-400 transition-all
      peer-placeholder-shown:top-4 
      peer-placeholder-shown:text-base 
      peer-placeholder-shown:text-white/40
      peer-focus:top-2 
      peer-focus:text-xs 
      peer-focus:text-orange-400"
    >
      {label}
    </label>

    {/* ERROR */}
    {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
  </div>
);

/* ================= LOGIN PAGE ================= */
export default function LoginPage({
  onLogin,
  setAuthMode,
}: {
  onLogin: (name: string) => void;
  setAuthMode: (mode: AuthMode) => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  /* ================= VALIDATION ================= */
  const validate = () => {
    const newErrors = { name: "", email: "", password: "" };
    let isValid = true;

    if (!name) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  /* ================= SUBMIT ================= */
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    onLogin(name);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#0b0b0b] px-6 text-white overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-yellow-400/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-5xl grid lg:grid-cols-2 gap-10"
      >
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center space-y-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-orange-400/25 bg-orange-500/10 px-4 py-2 text-sm text-orange-300">
            <FaLeaf /> Gujarati Rasoi
          </span>

          <h1 className="text-5xl font-black leading-tight">
            Welcome Back 👋
            <span className="block bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
              Let’s get you in
            </span>
          </h1>

          <p className="text-gray-300 max-w-lg">
            Login to explore delicious Gujarati dishes, reserve your table, and
            enjoy a premium dining experience.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
          <h2 className="text-3xl font-black">Login</h2>

          <form onSubmit={submit} className="mt-8 space-y-6">
            {/* NAME */}
            <FloatingInput
              label="Full Name"
              value={name}
              onChange={(e: any) => setName(e.target.value)}
              error={errors.name}
              icon={<FaUser />}
            />

            {/* EMAIL */}
            <FloatingInput
              label="Email Address"
              type="email"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              error={errors.email}
              icon={<FaEnvelope />}
            />

            {/* PASSWORD */}
            <div className="relative">
              <FloatingInput
                label="Password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
                error={errors.password}
                icon={<FaLock />}
              />

              {/* TOGGLE */}
              <motion.span
                className="absolute right-4 top-4 cursor-pointer text-white/60 hover:text-orange-400"
                onClick={() => setShowPassword(!showPassword)}
                whileTap={{ scale: 0.8 }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </motion.span>
            </div>

            {/* LINKS */}
            <div className="flex justify-between text-sm">
              <span
                onClick={() => setAuthMode("signup")}
                className="text-orange-400 cursor-pointer hover:underline"
              >
                Create account
              </span>

              <span
                onClick={() => setAuthMode("forgot")}
                className="text-orange-400 cursor-pointer hover:underline"
              >
                Forgot password?
              </span>
            </div>

            {/* BUTTON */}
            <button className="w-full rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 px-6 py-4 font-bold text-black hover:scale-[1.02] active:scale-95 transition-all">
              Continue
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
