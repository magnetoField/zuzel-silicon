import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Silicon() {
  const { t } = useLanguage();

  return (
    <footer className="silicon">
      <div className="silicon-divider">
        <div className="trace-line" />
        <div className="trace-dot" />
        <div className="trace-line" />
      </div>

      <div className="credits-container">
        <motion.div
          className="credit-role"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>{t("silicon.designer")}</h3>
          <p className="name">KK</p>
          <p className="alias">a.k.a Krzysztof Kluczek</p>
        </motion.div>

        <motion.div
          className="credit-role"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>{t("silicon.lead")}</h3>
          <p className="name">magnetoField</p>
          <p className="alias">a.k.a Jakub Rachoń</p>
        </motion.div>
      </div>

      <div className="footer-bottom">
        <p>RTL to GDS flow provider: <strong>Tiny Tapeout & Wokwi</strong>. Special thanks to Matt Venn and Uri Shaked and HackerSpace Trójmiasto!</p>
      </div>
    </footer>
  );
}
