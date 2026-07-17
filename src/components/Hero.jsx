import { motion } from "framer-motion";
import heroBg from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-bg"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        animate={{
          scale: [1, 1.25],
          rotate: [0, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="overlay" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>ŻUŻEL IN SILICON</h1>

        <p>
          A 1994 motorcycle racing game reimagined
          as a custom CPU and fabricated ASIC.
        </p>

        <a
          href="https://github.com/magnetoField/ttsky-zuzel-ieee"
          className="btn"
        >
          View Source
        </a>
      </motion.div>
    </section>
  );
}