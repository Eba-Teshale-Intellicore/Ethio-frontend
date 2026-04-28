"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./horscroll.module.scss";
import { useRef } from "react";
import Image from "next/image";

import pic1 from "@/public/assets/fasil.jpg";
import pic2 from "@/public/assets/nigat.jpg";
import pic3 from "@/public/assets/beynouna.jpg";
import pic4 from "@/public/assets/image1.jpg";
import pic5 from "@/public/assets/image2.jpg";

export default function HorizontalScroll() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  const images = [pic1, pic2, pic3, pic4, pic5, pic3, pic4];

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.contentContainer}>
        <motion.div style={{ x }} className={styles.images}>
          {images.map((pic, index) => (
            <div key={index} className={styles.imagesItems}>
              <Image
                src={pic}
                fill
                alt="Ethiopian hero"
                placeholder="blur"
                className={styles.image}
              />
              <h1>Eba Teshale</h1>
              <p>Some Explanation</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}