import { motion, useScroll, useTransform } from "framer-motion";
import gameplayImg from "../assets/gameplay.png";
import codeImg from "../assets/zuzel_code.png";
import designImg from "../assets/design.png";
import alltracksImg from "../assets/AllTracks.png";

export default function Story() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -300]);

  return (
    <section className="story">
      <motion.div
        className="story-image"
        style={{ y }}
      >
        <img
          src={gameplayImg}
          alt="Żużel gameplay"
          className="gameplay-image"
        />
		<img
          src={codeImg}
          alt="Żużel code"
          className="gameplay-image"
        />
		<img
          src={designImg}
          alt="Żużel code"
          className="gameplay-image"
        />
		<img
          src={alltracksImg}
          alt="Żużel code"
          className="gameplay-image"
        />
      </motion.div>

      <div className="content">
        <h2>1994 → 2026</h2>

        <p>
Custom CPU architecture was designed to fit the complete project on a small area of silicon (160 um x 100 um). Featuring:

7-bit track generator CPU (with 3 custom instructions)
Common player control block (generating 15 control signals)
4x player simulation block (each featuring 4 registers, 2x streaming 1-bit ALUs and a 7x7 sprite generator)
VGA timing generator
Top level logic (tying everything together, generating final video signal and performing collision detection)
Playable online version & (upcoming) writeup: <a
          href="http://devkk.net/index.php?tag=games&id=39"
          className="btn"
        >
          Play online
        </a>
		
What you see on exhibition is a FPGA implementation of the same verilog code that was synthesized into silicon in SkyWater 130 nm process.
        </p>
      </div>
    </section>
  );
}
