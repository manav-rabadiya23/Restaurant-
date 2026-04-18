import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content:
        "Shop No. 5, Alkapuri Main Road\nNear Centre Square Mall\nVadodara, Gujarat 390007",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 98765 43210\n+91 265 245 6789",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@rangilogujarat.com\nreservations@rangilogujarat.com",
    },
    {
      icon: Clock,
      title: "Hours",
      content:
        "Mon-Thu: 11:00 AM - 10:30 PM\nFri-Sun: 11:00 AM - 11:30 PM\nPure Veg Dining",
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-orange-500 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 h-96 w-96 rounded-full bg-red-500 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-orange-500"></div>
            <p className="text-sm uppercase tracking-widest text-orange-400">
              Contact Us
            </p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-orange-500"></div>
          </div>
          <h2 className="mb-4 text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent md:text-6xl">
            Visit Us Today
          </h2>
          <p className="text-xl text-gray-400">
            Reserve your table or reach out with any questions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="mb-8 text-2xl font-semibold text-orange-100">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={index}
                      className="group cursor-pointer rounded-xl p-4 transition-all hover:bg-orange-950/30"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 rounded-lg bg-gradient-to-br from-orange-600 to-red-600 p-3 shadow-lg shadow-orange-900/30 transition-all duration-300 group-hover:scale-110 group-hover:from-orange-500 group-hover:to-red-500">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="mb-1 font-semibold text-orange-100">
                            {info.title}
                          </h4>
                          <p className="whitespace-pre-line leading-relaxed text-gray-400">
                            {info.content}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.div
              className="relative h-64 overflow-hidden rounded-2xl border border-orange-500/20 shadow-xl shadow-orange-900/20"
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-950 to-red-950"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin className="h-16 w-16 text-orange-500/50" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-semibold text-orange-300">
                  Alkapuri, Vadodara
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-orange-100"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full rounded-lg border border-orange-500/20 bg-[#1a1a1a]/50 px-4 py-3 text-white outline-none transition-all placeholder:text-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-orange-100"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full rounded-lg border border-orange-500/20 bg-[#1a1a1a]/50 px-4 py-3 text-white outline-none transition-all placeholder:text-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-orange-100"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="w-full rounded-lg border border-orange-500/20 bg-[#1a1a1a]/50 px-4 py-3 text-white outline-none transition-all placeholder:text-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-orange-100"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  className="w-full resize-none rounded-lg border border-orange-500/20 bg-[#1a1a1a]/50 px-4 py-3 text-white outline-none transition-all placeholder:text-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  placeholder="Your message or reservation request..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-orange-600 to-red-600 px-8 py-4 font-semibold text-white shadow-xl shadow-orange-500/30 transition-all hover:from-orange-500 hover:to-red-500"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
