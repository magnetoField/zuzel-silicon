import { motion } from "framer-motion";

export default function Silicon() {
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
          <h3>Designer Hacker</h3>
          <p className="name">KK</p>
          <p className="alias">a.k.a Krzysiek-K a.k.a Kejki</p>
        </motion.div>

        <motion.div
          className="credit-role"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Lead Hacker</h3>
          <p className="name">magnetoField</p>
          <p className="alias">a.k.a Jakub Rachoń</p>
        </motion.div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Żużel in Silicon project. Fabricated in SkyWater 130nm process.</p>
      </div>
    </footer>
  );
}