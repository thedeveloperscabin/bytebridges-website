import CursorGlow from "./components/CursorGlow";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Pricing from "./components/Pricing";
import Process from "./components/Process";
import CaseStudies from "./components/CaseStudies";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <motion.div
    
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-neutral-950 dark:to-black transition-colors duration-500"
    >
      <CursorGlow />
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      <div className="absolute top-20 left-10 w-72 h-72 md:w-96 md:h-96 bg-indigo-500/20 rounded-full blur-3xl float-slow"></div>

      <div className="absolute bottom-20 right-10 w-72 h-72 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl float-slow delay-1000"></div>

    </div>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChoose />
        <Pricing />
        <Process />
        <CaseStudies />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}