"use client";

import Image from "next/image";
import styles from "./zoom.module.scss";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import blur from "@/public/assets/blur.jpg"

type Hero = {
  id: number;
  name: string;
  hero_image: string;
  short_description: string;
  era_name: string;
  category_name: string;
};

export default function Index() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const titleRef = useRef(null);

  const { scrollYProgress: titleProgress } = useScroll({
    target: titleRef,
    offset: ["start start", "end end"],
  });

  // animations
  const imageOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const titleOpacity = useTransform(titleProgress, [0, 0.5, 1], [0.9, 0.1, 0]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["200px", "20px"]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // scales
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  useEffect(() => {
    fetch("https://ethio-heroes.onrender.com/api/heroes")
      .then((res) => res.json())
      .then((data) => setHeroes(data));
  }, []);

  return (
    <motion.div ref={container} className={styles.container}>
      <div ref={titleRef} className={styles.title}>
        <motion.h1 style={{ opacity: titleOpacity }} className={styles.text}>
          Ethio Heroes
        </motion.h1>
      </div>

      <div className={styles.sticky}>
        {heroes.map((hero, index) => {
          const scale = scales[index % scales.length];

          return (
            <motion.div
              key={hero.id}
              style={{ scale, opacity: imageOpacity, y }}
              className={styles.el}
            >
              <motion.div className={styles.imagecontainer} style={{ borderRadius }}>
  
                    {!loadedImages[hero.id] && (
                      <div className={styles.skeleton} />
                    )}

                    <Image
                      src={`https://ethio-heroes.onrender.com/static/${hero.hero_image}`}
                      fill
                      alt={hero.name}
                      className={styles.image}
                      onLoadingComplete={() =>
                        setLoadedImages((prev) => ({
                          ...prev,
                          [hero.id]: true,
                        }))
                      }
                      priority={index === 0}
                    />
                  </motion.div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}