import { motion } from "framer-motion";
import gameplayImg from "../assets/gameplay.png";
import codeImg from "../assets/zuzel_code.png";
import designImg from "../assets/design.png";
import alltracksImg from "../assets/AllTracks.png";

export default function Story() {
  const images = [
    { src: gameplayImg, alt: "Żużel Gameplay" },
    { src: codeImg, alt: "Verilog Hardware Code" },
    { src: designImg, alt: "Silicon Layout Design" },
    { src: alltracksImg, alt: "All Tracks Overview" }
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
          1994 → 2026
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          The custom CPU architecture was designed to fit the complete project on an ultra-compact silicon area of just <strong>160 µm x 100 µm</strong>.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <li><strong>7-bit Track Generator CPU</strong> with 3 custom instructions</li>
          <li><strong>Common Player Control Block</strong> generating 15 control signals</li>
          <li><strong>4x Player Simulation Blocks</strong> featuring 4 registers, 2x streaming 1-bit ALUs, and 7x7 sprite generators</li>
          <li><strong>VGA Timing Generator</strong> for real-time video signal output</li>
          <li><strong>Top-Level Logic</strong> for system integration, video generation, and collision detection</li>
        </motion.ul>

        <motion.p
          className="story-footnote"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          What you see on exhibition is an FPGA implementation of the same Verilog code that was synthesized into silicon using the SkyWater 130 nm open-source PDK.
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
            Play Online Version
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
