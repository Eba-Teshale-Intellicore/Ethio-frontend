

import Image from "next/image";
import Navbar from "../Navbar";
import styles from "./lhero.module.scss"
import pic1 from "@/public/assets/beynouna.jpg";
import pic2 from "@/public/assets/fasil.jpg";
import pic3 from "@/public/assets/nigat.jpg"
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";






export default function Index({scrollYProgres}) {

  const scalepage = useTransform(scrollYProgres , [0, 1], [1, 1])

  const container = useRef(null)
  const menu = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  const { scrollYProgress: menuprogress } = useScroll({
    target: menu,
    offset: ['start start', 'end end']
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.9, 1])

  const menuscale = useTransform(menuprogress, [0, 1], [0, 3])
  const rotate = useTransform(menuprogress, [0,1], [0, -10])


  return (
    <motion.div style={{scale: scalepage}} ref={container} className={styles.container}>
      
      {/* LEFT - STICKY STORY */}
      <div className={styles.content}>
          <h1>Ethio Heroes</h1>

          <p className={styles.subtitle}>
            A digital archive of courage, leadership, and legacy.
          </p>

          <p className={styles.description}>
            From ancient warriors to modern visionaries, this platform
            preserves the stories that shaped Ethiopia’s identity and future.
          </p>

          <div className={styles.cta}>
            <button>Explore Heroes</button>
            <button>Start Journey</button>
          </div>
      </div>

      {/* RIGHT - SCROLL TIMELINE */}
      <div ref={menu} className={styles.menu}>

        {/* 1st scene */}
        <motion.section style={{rotate}} className={styles.scene}>
            <motion.div style={{ opacity, rotate}} className={styles.imageWrapper}>
              <Image
                src={pic1}
                fill
                alt="Ethiopian hero"
                placeholder="blur"
                className="object-cover"
              />
            </motion.div>

            <motion.div style={{scale: scale, opacity}}  className={styles.imageWrapper}>
              <Image
                src={pic2}
                fill
                alt="Ethiopian hero"
                placeholder="blur"
                className="object-cover"
              />
            </motion.div>

            <motion.div style={{scale: scale, opacity}} className={styles.imageWrapper}>
              <Image
                src={pic3}
                fill
                alt="Ethiopian hero"
                placeholder="blur"
                className="object-cover"
              />
            </motion.div>
        </motion.section>

        {/* spacer */}

        {/* menu scroll section */}
        <section ref={menu} className={styles.menuList}>
          <motion.ul style={{ scale: menuscale }}>
            <li>
              <a href="#" className="flex items-center gap-1">
                Home
                 <ArrowUpRight className="w-4 h-4" />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-1">
                Heroes
                 <ArrowUpRight className="w-4 h-4" />
              </a>
            </li>
            <li>
              <a href="#timeline" className="flex items-center gap-1">
                Timeline
                 <ArrowUpRight className="w-4 h-4" />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-1">
                Archive
                 <ArrowUpRight className="w-4 h-4" />
              </a>
            </li>
            <li>
              <a href="/login" className="flex items-center gap-1">
                Join us
                 <ArrowUpRight className="w-4 h-4" />
              </a>
            </li>

          </motion.ul>
        </section>

      </div>

    </motion.div>
  );
}