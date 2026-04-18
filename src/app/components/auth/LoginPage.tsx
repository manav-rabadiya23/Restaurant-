import { useState, type FormEvent } from "react";
import { FaLeaf } from "react-icons/fa";

export default function LoginPage({
  onLogin,
}: {
  onLogin: (name: string) => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please fill your name and email.");
      return;
    }
    onLogin(name);
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] px-6 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:grid lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-orange-400/25 bg-orange-500/10 px-4 py-2 text-sm text-orange-300">
            <FaLeaf /> Welcome to Gujarati Rasoi
          </span>
          <h1 className="mt-6 text-5xl font-black leading-tight md:text-6xl">
            Login to continue your
            <span className="block bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
              dining experience
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            Explore our menu, reserve a table and discover authentic Gujarati
            flavours in Vadodara.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="text-3xl font-black">Login / Register</h2>
          <p className="mt-2 text-white/60">
            Simple demo login for your restaurant website.
          </p>

          <form onSubmit={submit} className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm text-white/70">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none focus:border-orange-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/70">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none focus:border-orange-400"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 px-6 py-4 font-bold text-black transition hover:scale-[1.02]"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
