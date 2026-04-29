"use client";

import Image from "next/image";
import Navbar from "../Navbar";
import styles from "./lhero.module.scss";
import pic1 from "@/public/assets/beynouna.jpg";
import pic2 from "@/public/assets/fasil.jpg";
import pic3 from "@/public/assets/nigat.jpg";

import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

// ✅ Proper props type
type Props = {
  scrollYProgress: MotionValue<number>;
};

export default function Index({ scrollYProgress }: Props) {
  // ✅ fixed spelling + type-safe
  const scalePage = useTransform(scrollYProgress, [0, 1], [1, 1]);

  // ✅ typed refs
  const container = useRef<HTMLDivElement | null>(null);
  const menu = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress: containerProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: menuProgress } = useScroll({
    target: menu,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(containerProgress, [0, 1], [1, 0]);
  const opacity = useTransform(containerProgress, [0, 1], [0.9, 1]);

  const menuScale = useTransform(menuProgress, [0, 1], [0, 3]);
  const rotate = useTransform(menuProgress, [0, 1], [0, -10]);

  return (
    <motion.div
      style={{ scale: scalePage }}
      ref={container}
      className={styles.container}
    >
      {/* LEFT */}
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

      {/* RIGHT */}
      <div ref={menu} className={styles.menu}>
        <motion.section style={{ rotate }} className={styles.scene}>
          <motion.div style={{ opacity, rotate }} className={styles.imageWrapper}>
            <Image
              src={pic1}
              fill
              alt="Ethiopian hero"
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, 33vw" // ✅ fix warning
              className="object-cover"
            />
          </motion.div>

          <motion.div style={{ scale, opacity }} className={styles.imageWrapper}>
            <Image
              src={pic2}
              fill
              alt="Ethiopian hero"
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div style={{ scale, opacity }} className={styles.imageWrapper}>
            <Image
              src={pic3}
              fill
              alt="Ethiopian hero"
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </motion.div>
        </motion.section>

        {/* MENU */}
        <section className={styles.menuList}>
          <motion.ul style={{ scale: menuScale }}>
            <li>
              <a href="#" className="flex items-center gap-1">
                Home <ArrowUpRight className="w-4 h-4" />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-1">
                Heroes <ArrowUpRight className="w-4 h-4" />
              </a>
            </li>
            <li>
              <a href="#timeline" className="flex items-center gap-1">
                Timeline <ArrowUpRight className="w-4 h-4" />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-1">
                Archive <ArrowUpRight className="w-4 h-4" />
              </a>
            </li>
            <li>
              <a href="/login" className="flex items-center gap-1">
                Join us <ArrowUpRight className="w-4 h-4" />
              </a>
            </li>
          </motion.ul>
        </section>
      </div>
    </motion.div>
  );
}