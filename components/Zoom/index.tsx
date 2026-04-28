"use client";
import Image from "next/image"
import styles from "./zoom.module.scss"
import { useScroll, useTransform, motion} from "framer-motion"
import { useEffect, useRef } from "react"
import pic1 from "@/public/assets/image1.jpg"
import pic2 from "@/public/assets/image2.jpg"
import pic3 from "@/public/assets/adwamoun.jpg"
import pic4 from "@/public/assets/adwamoun3.jpg"
import pic5 from "@/public/assets/image1.jpg"
import pic6 from "@/public/assets/image2.jpg"
import pic7 from "@/public/assets/adwamoun.jpg"

export default function index (){

const container = useRef(null)

const { scrollYProgress } = useScroll({
  target: container,
  offset: ['start start', 'end end']
})

const titleRef = useRef(null)

const { scrollYProgress: titleProgress } = useScroll({
  target: titleRef,
  offset: ['start start', 'end end']
})

// scales
const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

// animations
const imageOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
const titleOpacity = useTransform(titleProgress, [0, 0.5, 1], [0.9, 0.1, 0])
const borderRadius = useTransform(scrollYProgress, [0, 1], ["200px", "20px"])
const y = useTransform(scrollYProgress, [0, 1], [0, 200])

  const pictures =[
    {
        src: pic1,
        scale: scale4
    },
    {
        src: pic2,
        scale: scale5
    },
    {
        src: pic3,
        scale: scale6
    },
      {
        src: pic4,
        scale: scale5
    },
    {
        src: pic5,
        scale: scale6
    },
    {
        src: pic6,
        scale: scale8
    },
    {
        src: pic7,
        scale: scale9
    },
]
return (
  <>
    <motion.div ref={container} className={styles.container}>
      <div ref={titleRef} className={styles.title}>
        <motion.h1 style={{ opacity: titleOpacity }} className={styles.text}>
          Ethio Heroes
        </motion.h1>
      </div>
      <div className={styles.sticky}>
        {
        pictures.map(({src, scale}, index)=>{
          
            return <motion.div style={{ scale, opacity: imageOpacity, y }} key={index} className={styles.el}>
              <motion.div className={styles.imagecontainer} style={{borderRadius}}>
            <Image 
              src={src}
              fill
              alt='image'
              placeholder='blur'
              
            />
          </motion.div>  
        </motion.div>
          })
        }
        
      </div>
    </motion.div>
    </>
  )
}


