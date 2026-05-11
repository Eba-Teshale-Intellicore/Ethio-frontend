
// // // "use client";

// // // import Image from "next/image";
// // // import styles from "./zoom.module.scss";
// // // import { useScroll, useTransform, motion } from "framer-motion";
// // // import { useEffect, useRef, useState } from "react";
// // // import blur from "@/public/assets/blur.jpg"

// // // import pic1 from "@/public/assets/fasil.jpg"
// // // import pic2 from "@/public/assets/nigat.jpg"
// // // import pic3 from "@/public/assets/image1.jpg"
// // // import pic4 from "@/public/assets/image2.jpg"
// // // import pic5 from "@/public/assets/beynouna.jpg"

// // // const pictures = [pic1, pic2, pic3, pic4, pic5];

// // // type Hero = {
// // //   id: number;
// // //   name: string;
// // //   hero_image: string;
// // //   short_description: string;
// // //   era_name: string;
// // //   category_name: string;
// // // };

// // // export default function Index() {
// // //   const container = useRef(null);

// // //   const { scrollYProgress } = useScroll({
// // //     target: container,
// // //     offset: ["start start", "end end"],
// // //   });

// // //   const titleRef = useRef(null);

// // //   const { scrollYProgress: titleProgress } = useScroll({
// // //     target: titleRef,
// // //     offset: ["start start", "end end"],
// // //   });

// // //   // animations
// // //   const imageOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
// // //   const titleOpacity = useTransform(titleProgress, [0, 0.5, 1], [0.9, 0.1, 0]);
// // //   const borderRadius = useTransform(scrollYProgress, [0, 1], ["200px", "20px"]);
// // //   const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

// // //   // scales
// // //   const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
// // //   const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
// // //   const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
// // //   const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
// // //   const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

// // //   const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

// // //   const [heroes, setHeroes] = useState<Hero[]>([]);
// // //   const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
// // //   const [imageStatus, setImageStatus] = useState<Record<number, "loading" | "loaded" | "error">>({});

// // //   // useEffect(() => {
// // //   //   fetch("https://ethio-heroes.onrender.com/api/heroes")
// // //   //     .then((res) => res.json())
// // //   //     .then((data) => setHeroes(data));
// // //   // }, []);

// // //   return (
// // //     <motion.div ref={container} className={styles.container}>
// // //       <div ref={titleRef} className={styles.title}>
// // //         <motion.h1 style={{ opacity: titleOpacity }} className={styles.text}>
// // //           Ethio Heroes
// // //         </motion.h1>
// // //       </div>

// // //       <div className={styles.sticky}>
// // //         {pictures.map((pic, index) => {
// // //           const scale = scales[index % scales.length];

// // //           return (
// // //             <motion.div
// // //               key={index}
// // //               style={{ scale, opacity: imageOpacity, y }}
// // //               className={styles.el}
// // //             >
// // //               <motion.div className={styles.imagecontainer} >

// // //                 {/* LOADING SKELETON
// // //                 {imageStatus[pic] !== "loaded" && imageStatus[hero.id] !== "error" && (
// // //                   <div className={styles.skeleton} />
// // //                 )} */}

// // //                 {/* ERROR PLACEHOLDER */}
// // //                 {/* {imageStatus[pic1] === "error" && (
// // //                   <div className={styles.placeholder}>
// // //                     <span>No Image</span>
// // //                   </div>
// // //                 )} */}

// // //                 <Image
// // //                   // src={`https://ethio-heroes.onrender.com/static/${hero.hero_image}`}
// // //                   src={pic}
// // //                   fill
// // //                   alt="Ethiopian hero"
// // //                   className={styles.image}

// // //                   // onLoad={() =>
// // //                   //   setImageStatus((prev) => ({
// // //                   //     ...prev,
// // //                   //     [hero.id]: "loaded",
// // //                   //   }))
// // //                   // }

// // //                   // onError={() =>
// // //                   //   setImageStatus((prev) => ({
// // //                   //     ...prev,
// // //                   //     [hero.id]: "error",
// // //                   //   }))
// // //                   // }
// // //                 />

// // //               </motion.div>
// // //             </motion.div>
// // //           );
// // //         })}
// // //       </div>
// // //     </motion.div>
// // //   );
// // // }


// // "use client";

// // import Image from "next/image";
// // import styles from "./zoom.module.scss";
// // import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
// // import { useRef } from "react";

// // import pic1 from "@/public/assets/fasil.jpg";
// // import pic2 from "@/public/assets/nigat.jpg";
// // import pic3 from "@/public/assets/image1.jpg";
// // import pic4 from "@/public/assets/image2.jpg";
// // import pic5 from "@/public/assets/beynouna.jpg";

// // const pictures = [pic1, pic2, pic3, pic4, pic5];

// // // Per-image config: final zoom scale + subtle rotation for organic feel
// // const IMAGE_CONFIG = [
// //   { scale: 4, rotate: -2 },
// //   { scale: 5, rotate:  1.5 },
// //   { scale: 6, rotate: -1 },
// //   { scale: 5, rotate:  2 },
// //   { scale: 6, rotate: -1.5 },
// // ] as const;

// // // ─── Sub-component so each image owns its own hooks ───────────────────────────
// // type PictureProps = {
// //   pic: (typeof pictures)[number];
// //   index: number;
// //   scrollYProgress: MotionValue<number>;
// //   imageOpacity: MotionValue<number>;
// // };

// // function Picture({ pic, index, scrollYProgress, imageOpacity }: PictureProps) {
// //   const { scale: maxScale, rotate: maxRotate } = IMAGE_CONFIG[index];

// //   const scale  = useTransform(scrollYProgress, [0, 1], [1, maxScale]);
// //   const rotate = useTransform(scrollYProgress, [0, 1], [0, maxRotate]);
// //   const y      = useTransform(scrollYProgress, [0, 1], [0, 160 + index * 12]);

// //   return (
// //     <motion.div
// //       style={{ scale, rotate, opacity: imageOpacity, y }}
// //       className={`${styles.el} ${styles[`el${index + 1}`]}`}
// //     >
// //       <motion.div
// //         className={styles.imagecontainer}
// //         whileHover={{ scale: 1.04 }}
// //         transition={{ type: "spring", stiffness: 300, damping: 20 }}
// //       >
// //         <Image
// //           src={pic}
// //           fill
// //           alt={`Ethiopian hero ${index + 1}`}
// //           className={styles.image}
// //           sizes="(max-width: 768px) 80vw, 35vw"
// //           priority={index === 0}
// //         />
// //         <div className={styles.overlay} />
// //       </motion.div>
// //     </motion.div>
// //   );
// // }

// // // ─── Main component ───────────────────────────────────────────────────────────
// // export default function Zoom() {
// //   const container = useRef<HTMLDivElement>(null);

// //   const { scrollYProgress } = useScroll({
// //     target: container,
// //     offset: ["start start", "end end"],
// //   });

// //   const imageOpacity   = useTransform(scrollYProgress, [0.75, 1],        [1, 0]);
// //   const titleOpacity   = useTransform(scrollYProgress, [0, 0.25, 0.5],   [1, 0.4, 0]);
// //   const titleY         = useTransform(scrollYProgress, [0, 0.5],          [0, -60]);
// //   const titleScale     = useTransform(scrollYProgress, [0, 0.5],          [1, 0.88]);
// //   const subtitleOpacity = useTransform(scrollYProgress, [0, 0.15, 0.35], [1, 0.6, 0]);

// //   return (
// //     <motion.div ref={container} className={styles.container}>

// //       {/* Title */}
// //       <div className={styles.titleWrap}>
// //         <motion.div
// //           className={styles.titleInner}
// //           style={{ opacity: titleOpacity, y: titleY, scale: titleScale }}
// //         >
// //           <h1 className={styles.text}>Ethio Heroes</h1>
// //           <motion.p className={styles.subtitle} style={{ opacity: subtitleOpacity }}>
// //             Scroll to discover
// //           </motion.p>
// //         </motion.div>
// //       </div>

// //       {/* Sticky image collage */}
// //       <div className={styles.sticky}>
// //         {pictures.map((pic, index) => (
// //           <Picture
// //             key={index}
// //             pic={pic}
// //             index={index}
// //             scrollYProgress={scrollYProgress}
// //             imageOpacity={imageOpacity}
// //           />
// //         ))}
// //       </div>

// //     </motion.div>
// //   );
// // }


// "use client";

// import Image from "next/image";
// // import { StaticImageData } from "next/image";
// import styles from "./zoom.module.scss";
// import {
//   useScroll,
//   useTransform,
//   motion,
//   MotionValue,
//   useSpring,
//   useMotionValue,
//   animate,
// } from "framer-motion";
// import { useRef, useEffect, useState } from "react";

// // import pic1 from "@/public/assets/fasil.jpg";
// // import pic2 from "@/public/assets/nigat.jpg";
// // import pic3 from "@/public/assets/image1.jpg";
// // import pic4 from "@/public/assets/image2.jpg";
// // import pic5 from "@/public/assets/beynouna.jpg";


// // ─── TYPES ─────────────────────────────────────────

// type Hero = {
//   id: number;
//   name: string;
//   hero_image: string;
//   short_description: string;
//   era_name: string;
//   category_name: string;
// };

// // type PictureProps = {
// //   pic: StaticImageData;
// //   index: number;
// //   scrollYProgress: MotionValue<number>;
// //   imageOpacity: MotionValue<number>;
// //   heroes: Hero[];
// // };
// type PictureProps = {
//   hero: Hero;
//   index: number;
//   scrollYProgress: MotionValue<number>;
//   imageOpacity: MotionValue<number>;
// };

// // ─── DATA ─────────────────────────────────────────

// // const Pictures = [pic1, pic2, pic3, pic4, pic5];

// // ─── CUSTOM CURSOR ────────────────────────────────

// function CustomCursor() {
//   const cursorX = useMotionValue(-100);
//   const cursorY = useMotionValue(-100);
//   const springX = useSpring(cursorX);
//   const springY = useSpring(cursorY);
//   const [hovering, setHovering] = useState(false);

//   useEffect(() => {
//     const move = (e: MouseEvent) => {
//       cursorX.set(e.clientX);
//       cursorY.set(e.clientY);
//     };

//     const over = (e: MouseEvent) => {
//       if ((e.target as HTMLElement).closest("[data-cursor-hover]")) {
//         setHovering(true);
//       }
//     };

//     const out = () => setHovering(false);

//     window.addEventListener("mousemove", move);
//     window.addEventListener("mouseover", over);
//     window.addEventListener("mouseout", out);

//     return () => {
//       window.removeEventListener("mousemove", move);
//       window.removeEventListener("mouseover", over);
//       window.removeEventListener("mouseout", out);
//     };
//   }, [cursorX, cursorY]);

//   return (
//     <>
//       <motion.div className={styles.cursorDot} style={{ x: cursorX, y: cursorY }} />
//       <motion.div
//         className={styles.cursorRing}
//         style={{ x: springX, y: springY }}
//         animate={{ scale: hovering ? 2 : 1, opacity: hovering ? 0.6 : 1 }}
//       />
//     </>
//   );
// }

// // ─── COUNTER ──────────────────────────────────────

// function Counter({ from = 0, to, suffix = "" }: { from?: number; to: number; suffix?: string }) {
//   const ref = useRef<HTMLSpanElement>(null);

//   useEffect(() => {
//     const ctrl = animate(from, to, {
//       duration: 2,
//       ease: "easeOut",
//       onUpdate: (v) => {
//         if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
//       },
//     });

//     return () => ctrl.stop();
//   }, [from, to, suffix]);

//   return <span ref={ref}>{from}{suffix}</span>;
// }

// // ─── PICTURE CARD ─────────────────────────────────

//   function Picture({
//   hero,
//   index,
//   scrollYProgress,
//   imageOpacity,
// }: PictureProps) {
//   const [hovered, setHovered] = useState(false);

//   // SCALE per index (IMPORTANT FIX)
//   const scaleValues = [
//     useTransform(scrollYProgress, [0, 1], [1, 4]),
//     useTransform(scrollYProgress, [0, 1], [1, 5]),
//     useTransform(scrollYProgress, [0, 1], [1, 6]),
//     useTransform(scrollYProgress, [0, 1], [1, 5]),
//     useTransform(scrollYProgress, [0, 1], [1, 6]),
//   ];

//   const scale = scaleValues[index] || scaleValues[0];

//   const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
//   const drift = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [0, (index % 2 === 0 ? -1 : 1) * 40]
//   );

//   return (
//     <motion.div
//       style={{ scale, opacity: imageOpacity, y, x: drift }}
//       className={styles.el }
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <motion.div
//         className={styles.imagecontainer}
//         animate={{ scale: hovered ? 1.05 : 1 }}
//         transition={{ type: "spring", stiffness: 260, damping: 22 }}
//       > 
//        <Image
//             src={`https://ethio-heroes.onrender.com/static/${hero.hero_image}`}
//             fill
//             alt="hero"
//             className={styles.image}
//             sizes="(max-width: 768px) 90vw, 35vw"
//           />
//         <div className={styles.vignette} />

//         {/* Corner accent */} 
//         <div className={styles.cornerTL} /> 
//         <div className={styles.cornerBR} />
//       </motion.div>
//     </motion.div>
//   );
// }

// // ─── PROGRESS BAR ─────────────────────────────────

// function ProgressBar({ progress }: { progress: MotionValue<number> }) {
//   const scaleX = useSpring(progress);

//   return (
//     <motion.div
//       className={styles.progressBar}
//       style={{ scaleX, transformOrigin: "left" }}
//     />
//   );
// }

// // ─── MAIN COMPONENT ───────────────────────────────

// export default function Zoom() {
//   const container = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start start", "end end"],
//   });

//   const [heroes, setHeroes] = useState<Hero[]>([]);

//   // fetch ONCE (fixed)
//   useEffect(() => {
//     fetch("https://ethio-heroes.onrender.com/api/heroes")
//       .then((res) => res.json())
//       .then((data) => setHeroes(data));
//   }, []);

//   // const imageOpacity = useTransform(scrollYProgress, [0.7, 0.95], [1, 0]);
//   const titleOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
//   const titleY = useTransform(scrollYProgress, [0, 0.4], [0, -80]);
//   const lineWidth = useTransform(scrollYProgress, [0, 0.4], ["0%", "60%"]);

//   // const endOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);
//   const imageOpacity = useTransform(scrollYProgress, [0.6, 0.8], [1, 0]);
//   // const endOpacity   = useTransform(scrollYProgress, [0.75, 0.95], [0, 1]);
//   const endOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.9])

//   return (
//     <>
//       <CustomCursor />

//       <motion.div ref={container} className={styles.container}>
//         <ProgressBar progress={scrollYProgress} />

//         {/* TITLE */}
//         <motion.div
//           className={styles.titleWrap}
//           style={{ opacity: titleOpacity, y: titleY }}
//         >
//             <motion.div className={styles.titleLine} style={{ width: lineWidth }} />
//           <h1 className={styles.text}>Ethio Heroes</h1>
//           <div className={styles.titleInner}>
//           <p className={styles.subtitle}>
//             Honoring the heroes who shaped a nations
//           </p>
//           <div className={styles.statsRow}>
//             <div className={styles.stat}>
//               <Counter to={3000} suffix="+" /> Years
//             </div>
//             <div className={styles.stat}>
//               <Counter to={5} /> Legends
//             </div>
//             <div className={styles.stat}>
//               <Counter to={1} suffix=" Nation" /> Countries
//             </div>
//           </div>
//           </div>
//         </motion.div>

//         {/* IMAGES */}
//         <div className={styles.sticky}>
//           {heroes.map((hero, index) => (
//             <Picture
//               key={hero.id}
//               hero={hero}
//               index={index}
//               scrollYProgress={scrollYProgress}
//               imageOpacity={imageOpacity}
//             />
//           ))}
//         </div>

//         {/* END */}
//         <motion.div className={styles.endScreen} style={{ opacity: endOpacity }}>
//           <h2>“I crave for knowledge. I envy tolerant, peaceful folks.  I am frightened by ignorance. <br />I loathe violence.”</h2>
//           <p> — Poet Laureate, Tsegaye Gebre-Medhin</p>
          
//         </motion.div>
//       </motion.div>
//     </>
//   );
// }

"use client";

import Image from "next/image";
import styles from "./zoom.module.scss";

import {
  useScroll,
  useTransform,
  motion,
  MotionValue,
  useSpring,
  useMotionValue,
  animate,
} from "framer-motion";

import { useRef, useEffect, useState } from "react";

// ─── TYPES ─────────────────────────────────────────

type Hero = {
  id: number;
  name: string;
  hero_image: string;
  short_description: string;
  era_name: string;
  category_name: string;
};

type PictureProps = {
  hero: Hero;
  index: number;
  scrollYProgress: MotionValue<number>;
  imageOpacity: MotionValue<number>;
};

// ─── CUSTOM CURSOR ────────────────────────────────

function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX);
  const springY = useSpring(cursorY);

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("[data-cursor-hover]")) {
        setHovering(true);
      }
    };

    const out = () => setHovering(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout", out);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout", out);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className={styles.cursorDot}
        style={{ x: cursorX, y: cursorY }}
      />

      <motion.div
        className={styles.cursorRing}
        style={{ x: springX, y: springY }}
        animate={{
          scale: hovering ? 2 : 1,
          opacity: hovering ? 0.6 : 1,
        }}
      />
    </>
  );
}

// ─── COUNTER ──────────────────────────────────────

function Counter({
  from = 0,
  to,
  suffix = "",
}: {
  from?: number;
  to: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctrl = animate(from, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) {
          ref.current.textContent = `${Math.round(v)}${suffix}`;
        }
      },
    });

    return () => ctrl.stop();
  }, [from, to, suffix]);

  return (
    <span ref={ref}>
      {from}
      {suffix}
    </span>
  );
}

// ─── PICTURE ──────────────────────────────────────

function Picture({
  hero,
  index,
  scrollYProgress,
  imageOpacity,
}: PictureProps) {
  const [hovered, setHovered] = useState(false);

  const scaleValues = [
    useTransform(scrollYProgress, [0, 1], [1, 4]),
    useTransform(scrollYProgress, [0, 1], [1, 5]),
    useTransform(scrollYProgress, [0, 1], [1, 6]),
    useTransform(scrollYProgress, [0, 1], [1, 5]),
    useTransform(scrollYProgress, [0, 1], [1, 6]),
  ];

  const scale = scaleValues[index % scaleValues.length];

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const drift = useTransform(
    scrollYProgress,
    [0, 1],
    [0, (index % 2 === 0 ? -40 : 40)]
  );

  return (
    <motion.div
      style={{
        scale,
        opacity: imageOpacity,
        y,
        x: drift,
      }}
      className={styles.el}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className={styles.imagecontainer}
        animate={{
          scale: hovered ? 1.05 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 22,
        }}
      >
        <Image
          src={`https://ethio-heroes.onrender.com/static/${hero.hero_image}`}
          fill
          alt={hero.name}
          className={styles.image}
          sizes="(max-width: 768px) 90vw, 35vw"
        />

        <div className={styles.vignette} />

        <div className={styles.cornerTL} />
        <div className={styles.cornerBR} />
      </motion.div>
    </motion.div>
  );
}

// ─── PROGRESS BAR ─────────────────────────────────

function ProgressBar({
  progress,
}: {
  progress: MotionValue<number>;
}) {
  const scaleX = useSpring(progress);

  return (
    <motion.div
      className={styles.progressBar}
      style={{
        scaleX,
        transformOrigin: "left",
      }}
    />
  );
}

// ─── MAIN ─────────────────────────────────────────

export default function Zoom() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const [heroes, setHeroes] = useState<Hero[]>([]);

  useEffect(() => {
    fetch("https://ethio-heroes.onrender.com/api/heroes")
      .then((res) => res.json())
      .then((data) => setHeroes(data));
  }, []);

  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.4],
    [1, 0]
  );

  const titleY = useTransform(
    scrollYProgress,
    [0, 0.4],
    [0, -80]
  );

  const lineWidth = useTransform(
    scrollYProgress,
    [0, 0.4],
    ["0%", "60%"]
  );

  const imageOpacity = useTransform(
    scrollYProgress,
    [0.6, 0.8],
    [1, 0]
  );

  const endOpacity = useTransform(
    scrollYProgress,
    [0, 0.1],
    [1, 0.9]
  );

  return (
    <>
      <CustomCursor />

      <motion.div
        ref={container}
        className={styles.container}
      >
        <ProgressBar progress={scrollYProgress} />

        <motion.div
          className={styles.titleWrap}
          style={{
            opacity: titleOpacity,
            y: titleY,
          }}
        >
          <motion.div
            className={styles.titleLine}
            style={{ width: lineWidth }}
          />

          <h1 className={styles.text}>Ethio Heroes</h1>

          <div className={styles.titleInner}>
            <p className={styles.subtitle}>
              Honoring the heroes who shaped a nation
            </p>

            <div className={styles.statsRow}>
              <div className={styles.stat}>
                <Counter to={3000} suffix="+" /> Years
              </div>

              <div className={styles.stat}>
                <Counter to={heroes.length} /> Legends
              </div>

              <div className={styles.stat}>
                <Counter to={1} suffix=" Nation" />
              </div>
            </div>
          </div>
        </motion.div>

        <div className={styles.sticky}>
          {heroes.map((hero, index) => (
            <Picture
              key={hero.id}
              hero={hero}
              index={index}
              scrollYProgress={scrollYProgress}
              imageOpacity={imageOpacity}
            />
          ))}
        </div>

        <motion.div
          className={styles.endScreen}
          style={{ opacity: endOpacity }}
        >
          <h2>
            “I crave for knowledge. I envy tolerant,
            peaceful folks. I am frightened by ignorance.
            <br />
            I loathe violence.”
          </h2>

          <p>— Poet Laureate, Tsegaye Gebre-Medhin</p>
        </motion.div>
      </motion.div>
    </>
  );
}