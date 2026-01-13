import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <Hero />
      <motion.div {...fadeInUp}>
        <About />
      </motion.div>
      <motion.div {...fadeInUp}>
        <Skills />
      </motion.div>
      <motion.div {...fadeInUp}>
        <Projects />
      </motion.div>
      <motion.div {...fadeInUp}>
        <Timeline />
      </motion.div>
      <motion.div {...fadeInUp}>
        <Certifications />
      </motion.div>
      <motion.div {...fadeInUp}>
        <Testimonials />
      </motion.div>
      <motion.div {...fadeInUp}>
        <Contact />
      </motion.div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
