import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import gdsRender from "../assets/gds_render.png";
import render3d from "../assets/3dgds.png";

export default function Architecture() {
  const { t } = useLanguage();

  const cards = [
    {
      title: t('architecture.customCpu'),
      text: t('architecture.customCpuText')
    },
    {
      title: t('architecture.vgaEngine'),
      text: t('architecture.vgaEngineText')
    },
    {
      title: t('architecture.players'),
      text: t('architecture.playersText')
    },
    {
      title: t('architecture.siliconSize'),
      text: t('architecture.siliconSizeText')
    }
  ];

  return (
    <section className="architecture">
      <div className="architecture-visuals">
        <motion.img
          src={gdsRender}
          alt="GDS Layout"
          className="gds-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.img
          src={render3d}
          alt="3D GDS Render"
          className="render-3d-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div>

      <div className="cards-container">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            whileHover={{
              y: -10,
              scale: 1.03
            }}
            className="glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}