"use client";

import { motion, useTransform, useScroll, MotionValue } from "framer-motion";
import styles from "./timeline.module.scss";
import Image from "next/image";
import { useRef } from "react";

import pic1 from "@/public/assets/fasil.jpg";
import pic2 from "@/public/assets/nigat.jpg";
import pic3 from "@/public/assets/image2.jpg";

// ─── Data ─────────────────────────────────────────────────────────────────────

const TIMELINE_DATA = [
  {
    title: "Eba Teshale",
    date: "2010",
    era: "The Beginning",
    desc: "Started journey in technology and leadership — a vision born in the highlands of Ethiopia.",
    img: pic1,
  },
  {
    title: "Foundation Stage",
    date: "2012",
    era: "The Build",
    desc: "Built core programming and problem-solving skills that would define a generation.",
    img: pic2,
  },
  {
    title: "First Project",
    date: "2013",
    era: "The Launch",
    desc: "Created the first web project — a small spark that lit a lasting flame.",
    img: pic3,
  },
] as const;

// ─── Single timeline card ──────────────────────────────────────────────────────

type CardProps = {
  item: (typeof TIMELINE_DATA)[number];
  index: number;
};

function TimelineCard({ item, index }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 30%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y       = useTransform(scrollYProgress, [0, 1], [100, 40]);
  const lineH   = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`${styles.timelineItem} ${isLeft ? styles.left : styles.right}`}
    >
      {/* Animated connector line from dot downward */}
      <motion.div className={styles.connectorLine} style={{ height: lineH }} />

      <motion.div
        className={styles.content}
        style={{ opacity, y }}
        whileHover={{ scale: 1.015 }}
      >
        {/* Corner accents — matching zoom/lhero */}
        <div className={styles.cornerTL} />
        <div className={styles.cornerBR} />

        {/* Era label */}
        <span className={styles.era}>{item.era}</span>

        {/* Image */}
        <div className={styles.imgWrap}>
          <Image
            src={item.img}
            alt={item.title}
            fill
            className={styles.img}
            sizes="(max-width: 768px) 90vw, 25vw"
            placeholder="blur"
          />
          <div className={styles.imgOverlay} />
        </div>

        {/* Text */}
        <h2 className={styles.cardTitle}>{item.title}</h2>
        <span className={styles.date}>{item.date}</span>
        <p className={styles.desc}>{item.desc}</p>
      </motion.div>
    </div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

type Props = { scrollYProgress: MotionValue<number> };

export default function Timeline({ scrollYProgress }: Props) {
  // Entry animation: section fades + slides up into view (matches lhero)
  const sectionY       = useTransform(scrollYProgress, [0, 0.08], [60, 0]);

  return (
    <motion.div
      className={styles.container}
      style={{ y: sectionY }}
    >
      <section className={styles.timeline} id="timeline">

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>Our Nation Journey</span>
          <h1 className={styles.title}>
            Legacy of <span >Ethio Heroes</span>
          </h1>
          <p className={styles.titleSub}>
            Milestones that carved a nation's memory into history.
          </p>
          {/* Decorative line — matches zoom title line */}
          <div className={styles.headerLine} />
        </div>

        {/* Timeline */}
        <div className={styles.timelineContainer}>
          {/* Vertical center line */}
          <div className={styles.centerLine} />

          {TIMELINE_DATA.map((item, index) => (
            <TimelineCard key={index} item={item} index={index} />
          ))}
        </div>

      </section>
    </motion.div>
  );
}