// "use client";

// import { useScroll, useTransform, motion } from "framer-motion";
// import styles from "./horscroll.module.scss";
// import { useRef } from "react";
// import Image from "next/image";

// import pic1 from "@/public/assets/fasil.jpg";
// import pic2 from "@/public/assets/nigat.jpg";
// import pic3 from "@/public/assets/beynouna.jpg";
// import pic4 from "@/public/assets/image1.jpg";
// import pic5 from "@/public/assets/image2.jpg";

// export default function HorizontalScroll() {
//   const container = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: container,
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

//   const images = [pic1, pic2, pic3, pic4, pic5, pic3, pic4];

//   return (
//     <div ref={container} className={styles.container}>
//       <div className={styles.contentContainer}>
//         <motion.div style={{ x }} className={styles.images}>
//           {images.map((pic, index) => (
//             <div key={index} className={styles.imagesItems}>
//               <Image
//                 src={pic}
//                 fill
//                 alt="Ethiopian hero"
//                 placeholder="blur"
//                 className={styles.image}
//               />
//               <h1>Eba Teshale</h1>
//               <p>Some Explanation</p>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import styles from "./horscroll.module.scss";
import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import pic1 from "@/public/assets/fasil.jpg";
import pic2 from "@/public/assets/nigat.jpg";
import pic3 from "@/public/assets/beynouna.jpg";
import pic4 from "@/public/assets/image1.jpg";
import pic5 from "@/public/assets/image2.jpg";

// ─── Data ─────────────────────────────────────────────────────────────────────

const HEROES = [
  { pic: pic1, name: "Fasil Ghebbi",  era: "17th Century", role: "Emperor"   },
  { pic: pic2, name: "Nigat",         era: "Modern Era",   role: "Visionary" },
  { pic: pic3, name: "Beynouna",      era: "Legend",       role: "Warrior"   },
  { pic: pic4, name: "The Guardian",  era: "Ancient",      role: "Defender"  },
  { pic: pic5, name: "The Strategist",era: "Medieval",     role: "Commander" },
  { pic: pic3, name: "The Spirit",    era: "Timeless",     role: "Symbol"    },
  { pic: pic4, name: "The Founder",   era: "Origin",       role: "Pioneer"   },
] as const;

// ─── Hero card ────────────────────────────────────────────────────────────────

type CardProps = {
  hero: (typeof HEROES)[number];
  index: number;
};

function HeroCard({ hero, index }: CardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={styles.card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Corner accents */}
      <div className={styles.cornerTL} />
      <div className={styles.cornerBR} />

      {/* Image */}
      <div className={styles.imgWrap}>
        <motion.div
          className={styles.imgInner}
          animate={{ scale: hovered ? 1.07 : 1 }}
        >
          <Image
            src={hero.pic}
            fill
            alt={hero.name}
            placeholder="blur"
            sizes="300px"
            className={styles.image}
          />
        </motion.div>
        <div className={styles.imgOverlay} />
      </div>

      {/* Info */}
      <div className={styles.cardBody}>
        <span className={styles.cardEra}>{hero.era}</span>
        <h2 className={styles.cardName}>{hero.name}</h2>
        <span className={styles.cardRole}>{hero.role}</span>

        {/* Hover CTA */}
        <motion.div
          className={styles.cardCta}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
          transition={{ duration: 0.25 }}
        >
          <span>View story</span>
          <ArrowUpRight size={13} />
        </motion.div>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className={styles.cardLine}
        animate={{ scaleX: hovered ? 1 : 0 }}
      />
    </motion.div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

export default function HorizontalScroll() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Spring-smooth the horizontal translation
  const rawX   = useTransform(scrollYProgress, [0, 1], ["0%", "-52%"]);
  const x      = useSpring(rawX, { stiffness: 80, damping: 20 });

  // Section entry
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const sectionY       = useTransform(scrollYProgress, [0, 0.04], [40, 0]);

  // Progress indicator width
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      ref={container}
      className={styles.container}
      style={{ opacity: sectionOpacity, y: sectionY }}
    >
      <div className={styles.sticky}>

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.span}>Hall of Heroes</span>
          <h1 className={styles.title}>
            Meet the <span className={styles.titleAccent}>Legends</span>
          </h1>
        </div>

        {/* Cards track */}
        <motion.div style={{ x }} className={styles.track}>
          {HEROES.map((hero, index) => (
            <HeroCard key={index} hero={hero} index={index} />
          ))}
        </motion.div>

        {/* Scroll progress bar at bottom */}
        <div className={styles.progressWrap}>
          <motion.div className={styles.progressBar} style={{ scaleX: progressWidth, transformOrigin: "left" }} />
        </div>

        {/* Scroll hint */}
        <motion.p
          className={styles.hint}
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
        >
          Scroll to explore ↓
        </motion.p>
      </div>
    </motion.div>
  );
}