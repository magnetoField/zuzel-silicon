import { motion } from "framer-motion";
import heroBg from "../assets/hero.png";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

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
        <h1>{t('hero.title')}</h1>

        <p>
          {t('hero.description')}
        </p>

        <a
          href="https://github.com/magnetoField/ttsky-zuzel-ieee"
          className="btn"
        >
          {t('hero.viewSource')}
        </a>
      </motion.div>
    </section>
  );
}