export const translations = {
  pl: {
    hero: {
      title: "ŻUŻEL IN SILICON",
      description: "Klasyczna gra wyścigów motocyklowych z 1994 roku wyrzeźbiona w czystym krzemie w procesie SkyWater 130nm",
      viewSource: "Zobacz Kod"
    },
    story: {
      title: "1994 → 2026",
      description: "Klasyczna gra Żużel zaimplementowana w czystej logice cyfrowej w pastaci fizycznego krzemu wyprodukowanego jako MPW przez Tiny Tapeout.",
      siliconSize: "W 1994 roku Piotr Kamiński stworzył grę w czasach, gdy w Polsce nie obowiązywały jeszcze współczesne przepisy o ochronie własności intelektualnej. Po ponad 30 latach, w ramach OpenSilicon Bootcamp zorganizowanego w Hackerspace Trójmiasto, powstało otwarte IP zaimplementowane bezpośrednio w krzemie. Architektura cyfrowego układu scalonego została zaprojektowana tak, aby zmieścić cały projekt na ultrakompaktowym kawałku krzemu o wielkości zaledwie",
      siliconSize2: ".",
      playOnline: "Graj Online",
      architecture: {
		cpu_bullet: "7-bitowy CPU",  
        cpu: " do generowania tras z 3 niestandardowymi instrukcjami",
        control_bullet: "Wspólny blok",
		control: " gracza generujący 15 sygnałów sterujących",
        players_bullet: "4x bloki gracza",
		players: " z 4 rejestrami, z dwoma 1-bitowymi ALU i generatorami sprite'ów 7x7",
        vga_bullet: "Interfejs VGA",
		vga: " do podłączenia standardowego monitora",
        top_bullet: "System nadrzędny",
		top: " odpowiedzalny za obsługę kontrolerów, generowania wideo i wykrywania kolizji"
      },
      footnote: "To, co widzisz na wystawie, to implementacja FPGA tego samego kodu Verilog, który został zsyntetyzowany w układ VLSI/ASIC przy użyciu otwartoźródłoweg EDA oraz PDK SkyWater 130 nm w ramach inicjatywy IEEE OpenSilicon.",
      features: "Cechy"
    },
    architecture: {
      title: "Architektura",
      customCpu: "Niestandardowy CPU",
      customCpuText: "Architektura specjalnie zoptymalizowana do powierzchni krzemu.",
      vgaEngine: "Silnik VGA",
      vgaEngineText: "Generowanie wideo w czasie rzeczywistym bezpośrednio w krzemie",
      players: "4 Graczy",
      playersText: "Proste 1 bitowe sterowanie zapewniające emocjonujące wyścigi.",
      siliconSize: "160x120 µm",
      siliconSizeText: "Kompletna gra wyścigowa zaimplementowana bezpośrednio w krzemie."
    },
    silicon: {
      title: "120 µm × 160 µm",
      description: "Kompletna gra wyścigowa zaimplementowana bezpośrednio w krzemie.",
      designer: "Hacker projektujący",
      lead: "Hacker wspierający"
    }
  },
  en: {
    hero: {
      title: "ŻUŻEL IN SILICON",
      description: "A 1994 motorcycle racing game reimagined as a custom CPU and fabricated ASIC.",
      viewSource: "View Source"
    },
    story: {
      title: "1994 → 2026",
      description: "A classic Żużel game transformed into pure digital logic and manufactured through Tiny Tapeout.",
      siliconSize: "In 1994, Piotr Kamiński created a game at a time when modern intellectual property protection laws were not yet in place in Poland. More than 30 years later, as part of the OpenSilicon Bootcamp held at Hackerspace Trójmiasto, an open IP was developed and implemented directly in silicon. The architecture of this custom chip tile was designed to fit the entire project onto an ultra-compact silicon area measuring just",
      siliconSize2: ".",
      playOnline: "Play Online Version",
      architecture: {
		cpu_bullet: "7-bit Track Generator",
        cpu: " CPU with 3 custom instructions",
		control_bullet: "Common Player Control Block",
        control: " generating 15 control signals",
		players_bullet: "4x Player Simulation Blocks",
        players: " featuring 4 registers, 2x streaming 1-bit ALUs, and 7x7 sprite generators",
        vga_bullet: "VGA Timing Generator",
		vga: " for real-time video signal output",
		top_bullet: "Top-Level Logic",
        top: " for system integration, video generation, and collision detection"
      },
      footnote: "What you see on exhibition is an FPGA implementation of the same Verilog code that was synthesized into silicon using the SkyWater 130 nm open-source PDK.",
      features: "Features"
    },
    architecture: {
      title: "Architecture",
      customCpu: "Custom CPU",
      customCpuText: "Purpose-built architecture optimized for silicon area.",
      vgaEngine: "VGA Engine",
      vgaEngineText: "Real-time video generation directly from hardware.",
      players: "4 Players",
      playersText: "Simple one-bit controls driving competitive races.",
      siliconSize: "160x120 µm",
      siliconSizeText: "Complete racing game implemented directly in silicon."
    },
    silicon: {
      title: "120 µm × 160 µm",
      description: "Complete racing game implemented directly in silicon.",
      designer: "Designer Hacker",
      lead: "Mentoring Hacker"
    }
  }
};
