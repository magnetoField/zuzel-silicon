import { motion } from "framer-motion";

export default function Silicon() {
  return (
    <section className="silicon">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Designer Hacker
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        KK a.k.a Krzysiek-K a.k.a Kejki
      </motion.p>
	  <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Lead Hacker
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        magnetoField a.k.a Jakub Rachoń
      </motion.p>
    </section>
  );
}