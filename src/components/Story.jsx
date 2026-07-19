import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import gameplayImg from "../assets/gameplay.png";
import codeImg from "../assets/zuzel_code.png";
import designImg from "../assets/design.png";
import alltracksImg from "../assets/AllTracks.png";

export default function Story() {
  const { t } = useLanguage();

  const images = [
    { src: gameplayImg, alt: t('story.architecture.players') },
    { src: codeImg, alt: t('story.architecture.cpu') },
    { src: designImg, alt: t('story.architecture.top') },
    { src: alltracksImg, alt: t('story.architecture.vga') }
  ];

  return (
    <section className="story">
      <div className="content">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('story.title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t('story.siliconSize')} <strong>160 µm x 120 µm</strong>{t('story.siliconSize2')}
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <li><strong>{t('story.architecture.cpu_bullet')}</strong>{t('story.architecture.cpu')}</li>
          <li><strong>{t('story.architecture.control_bullet')}</strong>{t('story.architecture.control')}</li>
          <li><strong>{t('story.architecture.players_bullet')}</strong>{t('story.architecture.players')}</li>
          <li><strong>{t('story.architecture.vga_bullet')}</strong>{t('story.architecture.vga')}</li>
          <li><strong>{t('story.architecture.top_bullet')}</strong>{t('story.architecture.top')}</li>
        </motion.ul>

        <motion.p
          className="story-footnote"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {t('story.footnote')}
        </motion.p>

        <motion.div
          className="action-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="http://devkk.net/index.php?tag=games&id=39"
            className="btn btn-secondary"
          >
            {t('story.playOnline')}
          </a>
        </motion.div>
      </div>

      <div className="story-image">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="gameplay-image-container"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="gameplay-image"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
