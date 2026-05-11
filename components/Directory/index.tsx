

// "use client";

// import { ChevronsDown, Search, MoveRight, Plus, ChevronsUp } from "lucide-react";
// import styles from "./directory.module.scss";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // import pic1 from "@/public/assets/fasil.jpg";
// // import pic2 from "@/public/assets/nigat.jpg";
// // import pic3 from "@/public/assets/image1.jpg";
// // import pic4 from "@/public/assets/image2.jpg";
// // import pic5 from "@/public/assets/beynouna.jpg";
// // import pic6 from "@/public/assets/adwamoun3.jpg";
// // import pic7 from "@/public/assets/adwamoun.jpg";

// // ─── Data ─────────────────────────────────────────────────────────────────────

// // const HEROES = [
// //   { pic: pic1, name: "Fasil Ghebbi",   desc: "The architect of a golden empire.",      era: "Ancient",  category: "Leader"    },
// //   { pic: pic2, name: "Nigat",          desc: "A voice that shaped a generation.",       era: "Modern",   category: "Artist"    },
// //   { pic: pic3, name: "The Warrior",    desc: "Defender of the northern highlands.",     era: "Medieval", category: "Warrior"   },
// //   { pic: pic4, name: "The Strategist", desc: "Commander of the Battle of Adwa.",        era: "Ancient",  category: "Leader"    },
// //   { pic: pic5, name: "Beynouna",       desc: "Symbol of resistance and resilience.",    era: "Modern",   category: "Scientist" },
// //   { pic: pic6, name: "Adwa Hero I",    desc: "Forged in the fires of Adwa.",            era: "Medieval", category: "Warrior"   },
// //   { pic: pic7, name: "Adwa Hero II",   desc: "Legacy carved in stone and memory.",      era: "Ancient",  category: "Lecturer"  },
// // ] as const;

// // const ERAS        = ["All Eras",        "Ancient", "Medieval", "Modern"] as const;
// // const CATEGORIES  = ["All Categories",  "Artist",  "Scientist", "Lecturer", "Leader", "Warrior"] as const;
// const NAV_LINKS   = [
//   { label: "Home",       href: "/"   },
//   { label: "Quotes",     href: "#"   },
//   { label: "Directory",  href: "#"   },
//   { label: "All Heroes", href: "#"   },
//   { label: "About Us",   href: "#"   },
// ] as const;


// type Heroes = {
//   id: number;
//   name: string;
//   hero_image: string;
//   short_description: string;
//   era_name: string;
//   categories: string;
// }
// type HeroProps = {
//   hero: Heroes;
//   index: number;
//   featured ?: boolean; 
// };

// type Era = {
//   id: number;
//   name: string;
// }

// type Category = {
//   id: number;
//   name: string;
// }

// // ─── Dropdown ─────────────────────────────────────────────────────────────────

// function Dropdown({ label, options, onSelect }: { label: string; options: readonly string[]; onSelect: (value: string) => void; }) {
//   const [open, setOpen] = useState(false);
//   const [selected, setSelected] = useState(label);

//   return (
//     <div
//       className={styles.dropdown}
//       onMouseEnter={() => setOpen(true)}
//       onMouseLeave={() => setOpen(false)}
//     >
//       <span>{selected}</span>
//       <ChevronsDown size={14} />
//       <AnimatePresence>
//         {open && (
//           <motion.ul
//             initial={{ opacity: 0, y: -6 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -6 }}
//             transition={{ duration: 0.18 }}
//             className={styles.dropdownList}
//           >
//             {options.map((opt) => (
//               <li
//                 key={opt}
//                 onClick={() => { setSelected(opt); onSelect(opt); setOpen(false); }}
//                 className={opt === selected ? styles.dropdownActive : ""}
//               >
//                 {opt}
//               </li>
//             ))}
//           </motion.ul>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// // ─── Hero card ────────────────────────────────────────────────────────────────


// function HeroCard({ hero, index, featured }: HeroProps) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <motion.div
//       className={`${styles.cardItem} ${featured ? styles.featured : ""}`}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       initial={{ opacity: 0, y: 24 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: index * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
//     >
//       {/* Corner accents */}
//       <div className={styles.cornerTL} />
//       <div className={styles.cornerBR} />

//       {/* Image */}
//       <div className={styles.imageWrapper}>
//         <span className={styles.era}>{hero.era_name}</span>
//         <motion.div
//           className={styles.imgInner}
//           animate={{ scale: hovered ? 1.06 : 1 }}
//           transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
//         >
//           <Image
//             src={`https://ethio-heroes.onrender.com/static/${hero.hero_image}`}
//             fill
//             alt={hero.name}
//             placeholder="blur"
//             sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
//             className={styles.image}
//           />
//         </motion.div>
//         <div className={styles.imgOverlay} />
//       </div>

//       {/* Info */}
//       <div className={styles.overlay}>
//         <h2 className={styles.cardName}>{hero.name}</h2>
//         <p className={styles.cardDesc}>{hero.short_description}</p>

//         <div className={styles.cardFooter}>
//           <span className={styles.categoryTag}>{hero.categories}</span>
//           <motion.a
//             href="#"
//             className={styles.readMore}
//             animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -6 }}
//             transition={{ duration: 0.2 }}
//           >
//             Read More <MoveRight size={13} />
//           </motion.a>
//           <motion.button
//             className={styles.addBtn}
//             whileHover={{ scale: 1.15 }}
//             whileTap={{ scale: 0.92 }}
//             aria-label="Add to list"
//           >
//             <Plus size={14} />
//           </motion.button>
//         </div>
//       </div>

//       {/* Bottom accent line on hover */}
//       <motion.div
//         className={styles.cardLine}
//         animate={{ scaleX: hovered ? 1 : 0 }}
//         transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
//       />
//     </motion.div>
//   );
// }

// // ─── Main component ────────────────────────────────────────────────────────────

// export default function Directory() {
//   const [query, setQuery] = useState("");

//   const [heroes, setHeroes] = useState<Heroes[]>([]);
//   const [eras, setEra] = useState<Era[]>([])
//   const [categories, setCategories] = useState<Category[]>([])
//   const [visibleCount, setVisibleCount] = useState(6);
//   const [selectedEra, setSelectedEra] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("");
  
//     // useEffect(() => {
//     //   fetch("https://ethio-heroes.onrender.com/api/director")
//     //     .then((res) => res.json())
//     //     .then((data) => setHeroes(data));
//     // }, []);
//     // useEffect(() => {
//     //   fetch("https://ethio-heroes.onrender.com/api/search")
//     //     .then((res) => res.json())
//     //     .then((data) => {
//     //       setHeroes(data.heroes);
//     //       setCategories(data.categories);
//     //       setEra(data.eras);
//     //     });
//     // }, []);

//     useEffect(() => {
//         const url =
//           `https://ethio-heroes.onrender.com/api/search?q=${query}&category=${selectedCategory}&era=${selectedEra}`;

//         fetch(url)
//           .then((res) => res.json())
//           .then((data) => {
//             setHeroes(data.heroes);
//             setCategories(data.categories);
//             setEra(data.eras);
//           });
//       }, [query, selectedCategory, selectedEra]);

//   return (
//     <div className={styles.container}>

//       {/* ── Header ── */}
//       <header className={styles.header}>

//         {/* Nav */}
//         <nav className={styles.nav}>
//           <ul>
//             {NAV_LINKS.map((link) => (
//               <li key={link.label}>
//                 <a href={link.href}>{link.label}</a>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Hero copy */}
//         <div className={styles.hero}>
//           <div className={styles.content}>
//             <span className={styles.eyebrow}>Digital Archive</span>
//             <h1 className={styles.heading}>Directory</h1>
//             <p className={styles.subheading}>
//               A curated archive of the men and women who forged the Ethiopian
//               narrative — from the builders of Axum to the pioneers of the modern age.
//             </p>

//             {/* Search */}
//             <div className={styles.searchbox}>
//               <Search size={13} className={styles.searchIcon} />
//               <input
//                 type="text"
//                 placeholder="Search heroes..."
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//               />
              
//               <div className={styles.selection}>
//                 <Dropdown
//                   label="All Eras"
//                   options={eras.map((e) => e.name)}
//                   onSelect={setSelectedEra}
//                 />

//                 <Dropdown
//                   label="All Categories"
//                   options={categories.map((c) => c.name)}
//                   onSelect={setSelectedCategory}
//                 />

//                 <button className={styles.refine}>Refine</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* ── Cards grid ── */}
//       <main className={styles.main}>
//         <div className={styles.cards}>
//           {heroes.slice(0, visibleCount).map((hero, index) => (
//             <HeroCard
//               key={hero.id}
//               hero={hero}
//               index={index}
//               featured={index === 0}
//             />
//           ))}
//         </div>

//         {/* Load more */}
//         <div className={styles.loadMore}>
//           {visibleCount < heroes.length && (
//             <motion.button
//               className={styles.loadMoreBtn}
//               whileHover={{ scale: 1.04 }}
//               whileTap={{ scale: 0.96 }}
//               onClick={() => setVisibleCount((prev) => prev + 6)} >
//               Discover More <ChevronsDown size={15} />
//             </motion.button>
//           )}

//           {visibleCount > 6 && (
//             <motion.button
//               className={styles.loadMoreBtn}
//               whileHover={{ scale: 1.04 }}
//               whileTap={{ scale: 0.96 }}
//               onClick={() => setVisibleCount((prev) => prev - 6)}
//             >
//               Discover Less <ChevronsUp size={15} />
//             </motion.button>
//           )}

//         </div>
//       </main>
//     </div>
//   );
// }




"use client";

import { ChevronsDown, Search, MoveRight, Plus, ChevronsUp } from "lucide-react";
import styles from "./directory.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS   = [
  { label: "Home",       href: "/"   },
  { label: "Quotes",     href: "#"   },
  { label: "Directory",  href: "#"   },
  { label: "All Heroes", href: "#"   },
  { label: "About Us",   href: "#"   },
] as const;


type Heroes = {
  id: number;
  name: string;
  hero_image: string;
  short_description: string;
  era_name: string;
  categories: string;
}
type HeroProps = {
  hero: Heroes;
  index: number;
  featured ?: boolean; 
};

type Era = {
  id: number;
  name: string;
}

type Category = {
  id: number;
  name: string;
}



// ─── Dropdown ─────────────────────────────────────────────────────────────────

function Dropdown({ label, options, onSelect }: { label: string; options: readonly string[]; onSelect: (value: string) => void; }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(label);

  return (
    <div
      className={styles.dropdown}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span>{selected}</span>
      <ChevronsDown size={14} />
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className={styles.dropdownList}
          >
            {options.map((opt) => (
              <li
                key={opt}
                onClick={() => { setSelected(opt); onSelect(opt); setOpen(false); }}
                className={opt === selected ? styles.dropdownActive : ""}
              >
                {opt}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Hero card ────────────────────────────────────────────────────────────────


function HeroCard({ hero, index, featured }: HeroProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={`${styles.cardItem} ${featured ? styles.featured : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Corner accents */}
      <div className={styles.cornerTL} />
      <div className={styles.cornerBR} />

      {/* Image */}
      <div className={styles.imageWrapper}>
        <span className={styles.era}>{hero.era_name}</span>
        <motion.div
          className={styles.imgInner}
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={`https://ethio-heroes.onrender.com/static/${hero.hero_image}`}
            fill
            alt={hero.name}
            placeholder="blur"
            sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
            className={styles.image}
          />
        </motion.div>
        <div className={styles.imgOverlay} />
      </div>

      {/* Info */}
      <div className={styles.overlay}>
        <h2 className={styles.cardName}>{hero.name}</h2>
        <p className={styles.cardDesc}>{hero.short_description}</p>

        <div className={styles.cardFooter}>
          <span className={styles.categoryTag}>{hero.categories}</span>
          <motion.a
            href="#"
            className={styles.readMore}
            animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -6 }}
            transition={{ duration: 0.2 }}
          >
            Read More <MoveRight size={13} />
          </motion.a>
          <motion.button
            className={styles.addBtn}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Add to list"
          >
            <Plus size={14} />
          </motion.button>
        </div>
      </div>

      {/* Bottom accent line on hover */}
      <motion.div
        className={styles.cardLine}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

export default function Directory() {
  const [query, setQuery] = useState("");

  const [heroes, setHeroes] = useState<Heroes[]>([]);
  const [eras, setEra] = useState<Era[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [visibleCount, setVisibleCount] = useState(5);
  const [selectedEra, setSelectedEra] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        const url =
          `https://ethio-heroes.onrender.com/api/search?q=${query}&category=${selectedCategory}&era=${selectedEra}`;

        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setHeroes(data.heroes);
            setCategories(data.categories);
            setEra(data.eras);
          });
      }, [query, selectedCategory, selectedEra]);

  return (
    <div className={styles.container}>

      {/* ── Header ── */}
      <header className={styles.header}>

        {/* Nav */}
        <nav className={styles.nav}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hero copy */}
        <div className={styles.hero}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>Digital Archive</span>
            <h1 className={styles.heading}>Directory</h1>
            <p className={styles.subheading}>
              A curated archive of the men and women who forged the Ethiopian
              narrative — from the builders of Axum to the pioneers of the modern age.
            </p>

            {/* Search */}
            <div className={styles.searchbox}>
              <Search size={13} className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search heroes..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              
              <div className={styles.selection}>
                <Dropdown
                  label="All Eras"
                  options={eras.map((e) => e.name)}
                  onSelect={setSelectedEra}
                />

                <Dropdown
                  label="All Categories"
                  options={categories.map((c) => c.name)}
                  onSelect={setSelectedCategory}
                />

                <button className={styles.refine}>Refine</button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Cards grid ── */}
      <main className={styles.main}>
        <div className={styles.cards}>
          {heroes.slice(0, visibleCount).map((hero, index) => (
            <HeroCard
              key={hero.id}
              hero={hero}
              index={index}
              featured={index === 0}
            />
          ))}
        </div>

        {/* Load more */}
        <div className={styles.loadMore}>
          {visibleCount < heroes.length && (
            <motion.button
              className={styles.loadMoreBtn}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setVisibleCount((prev) => prev + 5)} >
              Discover More <ChevronsDown size={15} />
            </motion.button>
          )}

          {visibleCount > 4 && (
            <motion.button
              className={styles.loadMoreBtn}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setVisibleCount((prev) => prev - 5)}
            >
              Discover Less <ChevronsUp size={15} />
            </motion.button>
          )}

        </div>
      </main>
    </div>
  );
}
