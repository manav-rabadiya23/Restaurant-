import { useState, type FormEvent, type ChangeEvent } from "react";
import { FaLeaf, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import type { AuthMode } from "../../../types/auth";

/* ================= TYPES ================= */
type Props = {
  setAuthMode: (mode: AuthMode) => void;
};

/* ================= COMPONENT ================= */
export default function ForgotPassword({ setAuthMode }: Props) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  /* ================= VALIDATION ================= */
  const validate = () => {
    if (!email) {
      setError("Email is required");
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email format");
      return false;
    }

    setError("");
    return true;
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    // 👉 simulate API call
    setTimeout(() => {
      setSuccess("Password reset link sent to your email ✅");
      setEmail("");
      setLoading(false);
    }, 1200);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError("");
    setSuccess("");
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] px-6 py-10 text-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-xl"
      >
        {/* HEADER */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/25 bg-orange-500/10 px-4 py-2 text-sm text-orange-300">
            <FaLeaf /> Gujarati Rasoi
          </span>

          <h2 className="mt-6 text-3xl font-black">Forgot Password</h2>

          <p className="text-white/60 text-sm mt-2">
            Enter your email to receive a reset link
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {/* EMAIL */}
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" />

            <input
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="Email Address"
              className={`h-14 w-full rounded-2xl border pl-12 pr-5 bg-black/30 text-white outline-none transition-all
              ${
                error
                  ? "border-red-500"
                  : "border-white/10 focus:border-orange-400"
              }`}
            />
          </div>

          {/* ERROR */}
          {error && <p className="text-red-400 text-sm text-center">{error}</p>}

          {/* SUCCESS */}
          {success && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-400 text-sm text-center"
            >
              {success}
            </motion.p>
          )}

          {/* BUTTON */}
          <button
            disabled={loading}
            className="w-full rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 px-6 py-4 font-bold text-black transition-all disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        {/* BACK TO LOGIN */}
        <p className="text-center text-sm text-white/60 mt-6">
          Remember your password?{" "}
          <span
            onClick={() => setAuthMode("login")}
            className="text-orange-400 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </motion.div>
    </div>
  );
}
