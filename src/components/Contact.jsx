import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

      emailjs
        .send(
          import.meta.env.VITE_EMAIL_SERVICE_ID,
          import.meta.env.VITE_EMAIL_TEMPLATE_ID,
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
          },
          import.meta.env.VITE_EMAIL_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log("SUCCESS:", result.text);
            setStatus({ message: "We received your message! We'll get back to you soon.", type: "success" });
            setFormData({ name: "", email: "", message: "" });
          },
          (error) => {
            console.log("FAILED:", error.text);
            setStatus({ message: "Failed to deliver message. Please try again.", type: "error" });
          }
        );
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-6 bg-gray-50 dark:bg-neutral-950 transition-colors"
    >
      <div className="max-w-4xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center text-black dark:text-white"
        >
          We’re Ready! Let’s Work Together
        </motion.h2>

        <form
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-gray-300 dark:border-neutral-700 text-black dark:text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-gray-300 dark:border-neutral-700 text-black dark:text-white"
          />

          <textarea
            name="message"
            placeholder="Tell us about your needs..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-gray-300 dark:border-neutral-700 text-black dark:text-white"
          />

          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black transition hover:scale-105"
          >
            Push to BinaryBase
          </button>

          {status.message && (
            <p
              className={`text-center text-sm font-medium ${
                status.type === "success"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {status.message}
            </p>
          )}
        </form>

      </div>
    </section>
  );
}