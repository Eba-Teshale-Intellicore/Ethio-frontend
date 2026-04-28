"use client";

import { motion, useTransform } from "framer-motion";
import styles from "./timeline.module.scss";
import Image from "next/image";
import pic1 from "@/public/assets/fasil.jpg"
import pic2 from "@/public/assets/nigat.jpg"
import pic3 from "@/public/assets/image2.jpg"
const timelineData = [
{ title: "Eba Teshale", date: "2010", desc: "Started journey in technology and leadership.", img: pic1 },
//   { title: "Biruktawit Gutema", date: "2011", desc: "Focused on academic growth and discipline.", img: pic1 },
  { title: "Foundation Stage", date: "2012", desc: "Built core programming and problem-solving skills.", img: pic2 },
  { title: "First Project", date: "2013", desc: "Created first small web project.", img: pic3 },
];

export default function Timeline({ scrollYProgres }) {


  const scalePage = useTransform(scrollYProgres, [0, 1], [0, 1.4]);

  return (
    <motion.div style={{ scale: scalePage }} className={styles.container} >
      
      <motion.section className={styles.timeline}>
        <h1 className={styles.title} id="timeline">Legacy of <span>Ethio Heroes</span></h1>

        <div className={styles.timelineContainer}>
            {timelineData.map((item, index) => (
                <div
                key={index}
                className={`${styles.timelineItem} ${
                    index % 2 === 0 ? styles.left : styles.right
                }`}
                >
                <div className={styles.content}>
                    <Image
                        src={item.img}
                        alt={item.title}
                        width={200}
                        height={200}
                        />
                    <h2>{item.title}</h2>
                    <span className={styles.date}>{item.date}</span>
                    <p>{item.desc}</p>
                </div>
                </div>
            ))}
            </div>
      </motion.section>
     
    </motion.div>
  );
}