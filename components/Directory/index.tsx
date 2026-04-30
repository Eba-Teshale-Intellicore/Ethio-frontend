"use client";

import { Car, ChevronsDown, Search } from "lucide-react";
import styles from "./directory.module.scss";
import Image from "next/image";
import pic1 from "@/public/assets/fasil.jpg"
import pic2 from "@/public/assets/nigat.jpg"
import pic3 from "@/public/assets/image1.jpg"
import pic4 from "@/public/assets/image2.jpg"
import pic5 from "@/public/assets/beynouna.jpg"


export default function Directory() {
  const images = [pic1, pic2, pic3, pic4, pic5];

  return (
    <div className={styles.container}>
        <div className={styles.header}>
        <div className={styles.nav}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#">Quetes</a></li>
                <li><a href="#">Directory</a></li>
                <li><a href="#">All heroes</a></li>
                <li><a href="#">About us</a></li>
            </ul>
        </div>
      <div className={styles.hero}>
        <div className={styles.content}>
          
          <div className={styles.text}>
            <h1>Directory</h1>
            <p>
              A curated digital archive of the men and women who forged the 
              Ethiopian narrative — from the builders of Axum to the pioneers of the modern age.
            </p>
          </div>

          <div className={styles.searchbox}>
            <Search size={12} />

            <input type="text" placeholder="Search heroes..." />

            <div className={styles.selection}>

              {/* Era */}
              <div className={styles.dropdown}>
                <span>All Eras</span>
                <ChevronsDown size={18} />

                <ul>
                  <li>Ancient</li>
                  <li>Middle</li>
                  <li>Modern</li>
                </ul>
              </div>

              {/* Category */}
              <div className={styles.dropdown}>
                <span>All Categories</span>
                <ChevronsDown size={18} />

                <ul>
                  <li>Artist</li>
                  <li>Scientist</li>
                  <li>Lecturer</li>
                  <li>Lawyer</li>
                  <li>Leader</li>
                </ul>
              </div>

              <button className={styles.refine}>Refine</button>
            </div>

          </div>
        </div>
      </div>
      </div>
      <div className={styles.main}>
        <div className={styles.cards}>
            {images.map((pic, index) => (
            <div key={index} className={styles.cardItem}>
              <div className={styles.imageWrapper}>
                <Image
                src={pic}
                fill
                alt="Ethiopian hero"
                placeholder="blur"
                className={styles.image}
                />
                </div>
                <div className={styles.overlay}>
                <h1>Eba Teshale</h1>
                <p>Some Explanation</p>
                </div>
            </div>
            ))}
        </div>
        </div>
    </div>
  );
}