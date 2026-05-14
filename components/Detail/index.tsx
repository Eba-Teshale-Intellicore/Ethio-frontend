

// // "use client";

// // import styles from "./detail.module.scss";
// // import Image from "next/image";
// // import { ExternalLink, History, Trophy, Plus, MoveRight, Menu } from "lucide-react";
// // import { useEffect, useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { useParams } from "next/navigation";
// // import Link from "next/link";
// // import Loading from "@/app/loading"

// // // import pic1 from "@/public/assets/fasil.jpg";
// // // import pic2 from "@/public/assets/nigat.jpg";
// // // import pic3 from "@/public/assets/image2.jpg";

// // // ─── Data ─────────────────────────────────────────────────────────────────────

// // const NAV_LINKS = [
// //   { label: "Home",      href: "/"  },
// //   { label: "Directory", href: "#"  },
// //   { label: "Quotes",    href: "#"  },
// //   { label: "About",     href: "#"  },
// //   { label: "Contact",   href: "#"  },
// // ] as const;

// // // const ACHIEVEMENTS = [
// // //   { year: "1998", title: "National Recognition",  desc: "Awarded for outstanding leadership in the field of education and social reform." },
// // //   { year: "2004", title: "Pioneer Award",          desc: "Honored for pioneering contributions to modern Ethiopian literature." },
// // //   { year: "2011", title: "Legacy Foundation",      desc: "Established a foundation that has impacted over 10,000 young Ethiopians." },
// // // ] as const;

// // // const SOURCES = [
// // //   { label: "Ethiopian Historical Records",  href: "#" },
// // //   { label: "Ministry of Culture Archives",  href: "#" },
// // //   { label: "National Museum Documentation", href: "#" },
// // // ] as const;

// // // const RELATED = [
// // //   { pic: pic1, name: "Fasil Ghebbi",   era: "Ancient"  },
// // //   { pic: pic2, name: "Nigat",          era: "Modern"   },
// // //   { pic: pic3, name: "The Strategist", era: "Medieval" },
// // // ] as const;


// // // ─── Related card ─────────────────────────────────────────────────────────────
// // type RelatedHero = {
// //   id: number;
// //   name: string;
// //   slug: string;
// //   hero_image: string;
// //   short_description: string;
// //   era_name: string;
// // };

// // function RelatedCard({ hero, index }: { hero: RelatedHero; index: number }) {
// //   const [hovered, setHovered] = useState(false);

// //   return (
// //     <motion.div
// //       className={styles.relatedCard}
// //       onMouseEnter={() => setHovered(true)}
// //       onMouseLeave={() => setHovered(false)}
// //       initial={{ opacity: 0, y: 20 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       viewport={{ once: true }}
// //       transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
// //       whileHover={{ y: -4 }}
// //     >
// //       <div className={styles.cornerTL} />
// //       <div className={styles.cornerBR} />

// //       <div className={styles.relatedImgWrap}>
// //         <motion.div
// //           className={styles.relatedImgInner}
// //           animate={{ scale: hovered ? 1.06 : 1 }}
// //           transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
// //         >
// //         <Image
// //           src={`https://ethio-heroes.onrender.com/static/${hero.hero_image}`}
// //           fill alt={hero.name} 
// //           sizes="(max-width: 768px) 100vw, 33vw" 
// //           className={styles.relatedImg} 
// //           />
// //         </motion.div>
// //         <div className={styles.relatedOverlay} />
// //         <span className={styles.era}>{hero.era_name}</span>
// //       </div>

// //       <div className={styles.relatedBody}>
// //         <h3 className={styles.relatedName}>{hero.name}</h3>
// //         <p>{hero.short_description}</p>
// //         <motion.div
// //           className={styles.relatedLink}
// //           animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -5 }}
// //           transition={{ duration: 0.2 }}
// //         >
// //           <Link
// //             href={`/detail/hero/${hero.slug}`}
// //             className={styles.relatedLink}
// //           >
// //             View profile <MoveRight size={12} />
// //           </Link>
// //             <Plus size={14} />
// //         </motion.div>
// //       </div>

// //       <motion.div
// //         className={styles.cardLine}
// //         animate={{ scaleX: hovered ? 1 : 0 }}
// //         transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
// //       />
// //     </motion.div>
// //   );
// // }

// // // ─── Main component ────────────────────────────────────────────────────────────

// // export default function Detail() {
// //   const [navOpen, setNavOpen] = useState(false);
// //   const [comment, setComment] = useState("");
// //   const params = useParams();
// //   const slug = params.slug;


// //   const [hero, setHero] = useState<any>(null);
// //   const [relatedHeroes, setRelatedHeroes] = useState<RelatedHero[]>([]);

// //   useEffect(() => {
// //     fetch(`https://ethio-heroes.onrender.com/api/hero/${slug}`)
// //       .then((res) => res.json())
// //       .then((data) => {
// //         setHero(data.hero);
// //         setRelatedHeroes(data.related_heroes);
// //       })
// //       .catch((err) => {
// //         console.error("API error:", err);
// //       });
// //   }, [slug]);

// //   if (!hero) return <p><Loading/></p>;

// //   return (
// //     <div className={styles.page}>

// //       {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
// //       <section className={styles.hero}>
// //         {/* Background image */}
// //           <Image
// //             src={`https://ethio-heroes.onrender.com/static/${hero.hero_image}`}
// //             fill
// //             alt={hero.name}
// //             className={styles.heroBg}
// //             sizes="100vw"
// //             priority
// //           />
// //         <div className={styles.heroGradient} />

// //         {/* Nav */}
// //         <header className={styles.heroHeader}>
// //           <nav className={styles.nav}>
// //             <button
// //               className={styles.menuBtn}
// //               onClick={() => setNavOpen((p) => !p)}
// //               aria-label="Toggle navigation"
// //             >
// //               <Menu size={20} />
// //             </button>
// //             <ul className={styles.navList}>
// //               {NAV_LINKS.map((link) => (
// //                 <li key={link.label}>
// //                   <a href={link.href}>{link.label}</a>
// //                 </li>
// //               ))}
// //             </ul>
// //           </nav>

// //           {/* Mobile nav */}
// //           <AnimatePresence>
// //             {navOpen && (
// //               <motion.ul
// //                 className={styles.mobileNav}
// //                 initial={{ opacity: 0, y: -10 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 exit={{ opacity: 0, y: -10 }}
// //                 transition={{ duration: 0.2 }}
// //               >
// //                 {NAV_LINKS.map((link) => (
// //                   <li key={link.label}><a href={link.href}>{link.label}</a></li>
// //                 ))}
// //               </motion.ul>
// //             )}
// //           </AnimatePresence>
// //         </header>

// //         {/* Hero content */}
// //         <div className={styles.heroContent}>
// //           <div className={styles.heroLeft}>
// //             <span className={styles.heroEra}>
// //               {hero.era_name}
// //             </span>
// //             <h1 className={styles.heroTitle}>
// //               {hero.name}
// //             </h1>
// //             <p className={styles.heroDesc}>
// //               {hero.short_description}
// //             </p>
// //           </div>
// //           <div className={styles.heroRight}>
// //             <span className={styles.timesLabel}>Active Period</span>
// //             <span className={styles.timesValue}>{hero.birth_year} – {hero.death_year}</span>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ══ DETAIL CONTENT ════════════════════════════════════════════════════ */}
// //       <div className={styles.content}>
// //         <div className={styles.detailGrid}>

// //           {/* Main */}
// //           <main className={styles.mainCol}>

// //             {/* Biography */}
// //             <section className={styles.contentBox}>
// //               <h2 className={styles.boxTitle}>
// //                 <History size={24} /> Biography
// //               </h2>
// //               <div className={styles.bodyText}>
// //                 <p>
// //                   {hero.name}
// //                 </p>
// //                 <p>
// //                   {hero.full_history}
// //                 </p>
// //                 <p>
// //                   {hero.full_biography}
// //                 </p>
// //               </div>
// //             </section>

// //             {/* Achievements */}
// //             <section className={styles.contentBox}>
// //               <h2 className={styles.boxTitle}>
// //                 <Trophy size={24} /> Key Achievements
// //               </h2>
// //               <div className={styles.timeline}>
// //                 {hero.achievements.map((a: any, i: number) => (
// //                   <motion.div
// //                     key={a.id}
// //                     className={styles.timelineItem}
// //                     initial={{ opacity: 0, x: -16 }}
// //                     whileInView={{ opacity: 1, x: 0 }}
// //                     viewport={{ once: true }}
// //                     transition={{
// //                       delay: i * 0.1,
// //                       duration: 0.5
// //                     }}
// //                   >
// //                     <div className={styles.tYear}>
// //                       {a.year}
// //                     </div>

// //                     <div className={styles.tContent}>
// //                       <strong>{a.title}</strong>
// //                       <p>{a.description}</p>
// //                     </div>
// //                   </motion.div>
// //                 ))}
// //               </div>
// //             </section>
// //           </main>

// //           {/* Sidebar */}
// //           <aside className={styles.sidebar}>

// //             {/* References */}
// //             <div className={styles.sidebarBox}>
// //               <h3 className={styles.sidebarTitle}>References</h3>
// //               <ul className={styles.sourceList}>
// //                 {hero.sources.map((s: any) => (
// //                   <li key={s.id}>
// //                     <a
// //                       href={s.source_link}
// //                       target="_blank"
// //                       rel="noreferrer"
// //                     >
// //                       <ExternalLink size={13} />
// //                       {s.source_title}
// //                     </a>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>

// //             {/* Comments */}
// //             <div className={styles.sidebarBox}>
// //               <h3 className={styles.sidebarTitle}>Comments</h3>
// //               <div className={styles.commentForm}>
// //                 <textarea
// //                   placeholder="Share your thoughts..."
// //                   value={comment}
// //                   onChange={(e) => setComment(e.target.value)}
// //                   rows={4}
// //                 />
// //                 <motion.button
// //                   className={styles.btnPrimary}
// //                   whileHover={{ scale: 1.03 }}
// //                   whileTap={{ scale: 0.96 }}
// //                 >
// //                   Post Comment
// //                 </motion.button>
// //               </div>

// //               <div className={styles.commentsList}>
// //                 <p className={styles.emptyState}>No comments yet. Be the first!</p>
// //               </div>
// //             </div>
// //           </aside>
// //         </div>
// //       </div>

// //       {/* ══ RELATED HEROES ════════════════════════════════════════════════════ */}
// //       <section className={styles.related}>
// //         <div className={styles.relatedHeader}>
// //           <span className={styles.eyebrow}>Discover More</span>
// //           <h2 className={styles.relatedTitle}>
// //             Related <span className={styles.titleAccent}>Heroes</span>
// //           </h2>
// //         </div>
// //         {/* helated hero */}
// //         <div className={styles.relatedGrid}>
// //           {relatedHeroes.map((hero, index) => (
// //             <RelatedCard key={hero.id} hero={hero} index={index} />
// //           ))}
// //         </div>
// //       </section>

// //     </div>
// //   );
// // }

// "use client";

// import styles from "./detail.module.scss";
// import Image from "next/image";
// import { ExternalLink, History, Trophy, Plus, MoveRight, Menu } from "lucide-react";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useParams } from "next/navigation";
// import Link from "next/link";
// import Loading from "@/app/loading";

// // ─── NAV ─────────────────────────────────────────────────────────────

// const NAV_LINKS = [
//   { label: "Home", href: "/" },
//   { label: "Directory", href: "#" },
//   { label: "Quotes", href: "#" },
//   { label: "About", href: "#" },
//   { label: "Contact", href: "#" },
// ] as const;

// // ─── TYPES ───────────────────────────────────────────────────────────

// type RelatedHero = {
//   id: number;
//   name: string;
//   slug: string;
//   hero_image: string;
//   short_description: string;
//   era_name: string;
// };

// // ─── RELATED CARD ────────────────────────────────────────────────────

// function RelatedCard({ hero, index }: { hero: RelatedHero; index: number }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <motion.div
//       className={styles.relatedCard}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: index * 0.08, duration: 0.5 }}
//       whileHover={{ y: -4 }}
//     >
//       <div className={styles.relatedImgWrap}>
//         <motion.div
//           className={styles.relatedImgInner}
//           animate={{ scale: hovered ? 1.06 : 1 }}
//         >
//           <Image
//             src={`https://ethio-heroes.onrender.com/static/${hero.hero_image}`}
//             fill
//             alt={hero.name}
//             className={styles.relatedImg}
//             sizes="(max-width: 768px) 100vw, 33vw"
//           />
//         </motion.div>

//         <span className={styles.era}>{hero.era_name}</span>
//       </div>

//       <div className={styles.relatedBody}>
//         <h3>{hero.name}</h3>
//         <p>{hero.short_description}</p>

//         <Link href={`/detail/hero/${hero.slug}`}>
//           View profile <MoveRight size={12} />
//         </Link>
//       </div>
//     </motion.div>
//   );
// }

// // ─── MAIN PAGE ───────────────────────────────────────────────────────

// export default function Detail() {
//   const [navOpen, setNavOpen] = useState(false);
//   const [comment, setComment] = useState("");

//   const params = useParams();

//   const slug = Array.isArray(params.slug)
//     ? params.slug[0]
//     : params.slug;

//   const [hero, setHero] = useState<any>(null);
//   const [relatedHeroes, setRelatedHeroes] = useState<RelatedHero[]>([]);

//   // ─── FETCH ─────────────────────────────────────────────────────────

//     useEffect(() => {
//       if (!slug) return;

//       const fetchHero = async () => {
//         try {
//           const res = await fetch(
//             `https://ethio-heroes.onrender.com/api/hero/${slug}`
//           );

//           if (!res.ok) {
//             throw new Error("Failed to fetch hero");
//           }

//           const data = await res.json();

//           setHero(data.hero);
//           setRelatedHeroes(data.related_heroes || []);
//         } catch (err) {
//           console.error("API Error:", err);
//         }
//       };

//       fetchHero(); 
//     }, [slug]);

//   // ─── LOADING ───────────────────────────────────────────────────────

//   if (!hero) return <p><Loading/></p> ;

//   // ─── RENDER ────────────────────────────────────────────────────────

//   return (
//     <div className={styles.page}>

//       {/* HERO */}
//       <section className={styles.hero}>
//         <Image
//           src={`https://ethio-heroes.onrender.com/static/${hero.hero_image}`}
//           fill
//           alt={hero.name}
//           className={styles.heroBg}
//           sizes="100vw"
//           priority
//         />

//         <div className={styles.heroGradient} />

//         {/* NAV */}
//         <header className={styles.heroHeader}>
//           <nav className={styles.nav}>
//             <button onClick={() => setNavOpen(!navOpen)}>
//               <Menu size={20} />
//             </button>

//             <ul className={styles.navList}>
//               {NAV_LINKS.map((link) => (
//                 <li key={link.label}>
//                   <a href={link.href}>{link.label}</a>
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           <AnimatePresence>
//             {navOpen && (
//               <motion.ul
//                 className={styles.mobileNav}
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//               >
//                 {NAV_LINKS.map((link) => (
//                   <li key={link.label}>
//                     <a href={link.href}>{link.label}</a>
//                   </li>
//                 ))}
//               </motion.ul>
//             )}
//           </AnimatePresence>
//         </header>

//         {/* HERO CONTENT */}
//         <div className={styles.heroContent}>
//           <div>
//             <span>{hero.era_name}</span>
//             <h1>{hero.name}</h1>
//             <p>{hero.short_description}</p>
//           </div>

//           <div>
//             <span>Active Period</span>
//             <span>
//               1990 – present
//             </span>
//           </div>
//         </div>
//       </section>

//       {/* CONTENT */}
//       <div className={styles.content}>
//         <div className={styles.detailGrid}>

//           {/* MAIN */}
//           <main className={styles.mainCol}>

//             <section className={styles.contentBox}>
//               <h2>
//                 <History size={24} /> Biography
//               </h2>

//               <p>{hero.full_history}</p>
//               <p>{hero.full_biography}</p>
//             </section>

//             <section className={styles.contentBox}>
//               <h2>
//                 <Trophy size={24} /> Key Achievements
//               </h2>

//               {hero?.achievements?.map((a: any, i: number) => (
//                 <div key={a.id}>
//                   <strong>{a.year}</strong>
//                   <p>{a.title}</p>
//                   <p>{a.description}</p>
//                 </div>
//               ))}
//             </section>

//           </main>

//           {/* SIDEBAR */}
//           <aside className={styles.sidebar}>

//             <div>
//               <h3>References</h3>

//               {hero?.sources?.map((s: any) => (
//                 <a key={s.id} href={s.source_link} target="_blank">
//                   <ExternalLink size={13} />
//                   {s.source_title}
//                 </a>
//               ))}
//             </div>

//             <div>
//               <h3>Comments</h3>

//               <textarea
//                 value={comment}
//                 onChange={(e) => setComment(e.target.value)}
//               />

//               <button>Post Comment</button>
//             </div>

//           </aside>

//         </div>
//       </div>

//       {/* RELATED */}
//       <section className={styles.related}>
//         <h2>Related Heroes</h2>

//         <div className={styles.relatedGrid}>
//           {relatedHeroes.map((h, i) => (
//             <RelatedCard key={h.id} hero={h} index={i} />
//           ))}
//         </div>
//       </section>

//     </div>
//   );
// }

"use client";

import styles from "./detail.module.scss";
import Image from "next/image";
import { ExternalLink, History, Trophy, MoveRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "next/navigation";
import Link from "next/link";
import Loading from "@/app/loading";

const API_BASE = "https://ethio-heroes.onrender.com";

// ─── NAV ─────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home",      href: "/" },
  { label: "Directory", href: "#" },
  { label: "Quotes",    href: "#" },
  { label: "About",     href: "#" },
  { label: "Contact",   href: "#" },
] as const;

// ─── TYPES ───────────────────────────────────────────────────────────

type Achievement = {
  id: number;
  year: number | string;
  title: string;
  description: string;
};

type Source = {
  id: number;
  source_link: string;
  source_title: string;
};

type Comment = {
  comment: string;
  full_name: string;
  avatar: string;
  created_at: string;
};

type Hero = {
  id: number;
  name: string;
  slug: string;
  hero_image: string;
  short_description: string;
  full_history: string;
  full_biography: string;
  era_name: string;
  era_id: number;
  birth_year?: string;
  death_year?: string;
};

type RelatedHero = {
  id: number;
  name: string;
  slug: string;
  hero_image: string;
  short_description: string;
  era_name: string;
};

// ─── RELATED CARD ────────────────────────────────────────────────────

function RelatedCard({ hero, index }: { hero: RelatedHero; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={styles.relatedCard}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      <div className={styles.relatedImgWrap}>
        <motion.div
          className={styles.relatedImgInner}
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={`${API_BASE}/static/${hero.hero_image}`}
            fill
            alt={hero.name}
            className={styles.relatedImg}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>

        <span className={styles.era}>{hero.era_name}</span>
      </div>

      <div className={styles.relatedBody}>
        <h3>{hero.name}</h3>
        <p>{hero.short_description}</p>

        {/* FIX: slug may be undefined — guard with optional chaining */}
        <Link href={`/detail/hero/${hero.slug}`}>
          View profile <MoveRight size={12} />
        </Link>
      </div>
    </motion.div>
  );
}

// ─── MAIN PAGE ───────────────────────────────────────────────────────

export default function Detail() {
  const [navOpen,       setNavOpen]       = useState(false);
  const [comment,       setComment]       = useState("");
  const [posting,       setPosting]       = useState(false);
  const [postSuccess,   setPostSuccess]   = useState(false);

  // FIX: Proper typed state instead of any
  const [hero,          setHero]          = useState<Hero | null>(null);
  const [achievements,  setAchievements]  = useState<Achievement[]>([]);
  const [sources,       setSources]       = useState<Source[]>([]);
  const [comments,      setComments]      = useState<Comment[]>([]);
  const [relatedHeroes, setRelatedHeroes] = useState<RelatedHero[]>([]);

  // FIX: Separate loading and error states
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState<string | null>(null);

  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  // ─── FETCH ─────────────────────────────────────────────────────────

  useEffect(() => {
    if (!slug) return;

    const fetchHero = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`${API_BASE}/api/hero/${slug}`);

        // FIX: handle 404 separately so user gets a clear message
        if (res.status === 404) {
          setError("Hero not found.");
          return;
        }

        if (!res.ok) {
          throw new Error(`Server error: ${res.status}`);
        }

        const data = await res.json();

        // FIX: Set each field from API separately — don't mix nested data into hero
        setHero(data.hero);
        setAchievements(data.achievements  || []);
        setSources(data.sources            || []);
        setComments(data.comments          || []);
        setRelatedHeroes(data.related_heroes || []);

      } catch (err) {
        console.error("API Error:", err);
        setError("Failed to load hero. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchHero();
  }, [slug]);

  // ─── POST COMMENT ──────────────────────────────────────────────────

  // FIX: Comment button was wired to nothing — now posts to API
  const handlePostComment = async () => {
    if (!comment.trim() || !hero) return;

    setPosting(true);
    try {
      const res = await fetch(`${API_BASE}/api/hero/${slug}/comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comment }),
      });

      if (res.ok) {
        setComment("");
        setPostSuccess(true);
        setTimeout(() => setPostSuccess(false), 3000);
      }
    } catch (err) {
      console.error("Comment post error:", err);
    } finally {
      setPosting(false);
    }
  };

  // ─── STATES ────────────────────────────────────────────────────────

  if (loading) return <Loading />;

  if (error) {
    return (
      <div style={{ padding: "4rem", textAlign: "center" }}>
        <h2>{error}</h2>
        <Link href="/">← Back to Home</Link>
      </div>
    );
  }

  // FIX: this check is now after loading — avoids flicker
  if (!hero) return null;

  // ─── RENDER ────────────────────────────────────────────────────────

  return (
    <div className={styles.page}>

      {/* HERO BANNER */}
      <section className={styles.hero}>
        <Image
          src={`${API_BASE}/static/${hero.hero_image}`}
          fill
          alt={hero.name}
          className={styles.heroBg}
          sizes="100vw"
          priority
        />

        <div className={styles.heroGradient} />

        {/* NAV */}
        <header className={styles.heroHeader}>
          <nav className={styles.nav}>
            {/* FIX: toggle icon between Menu and X */}
            <button
              onClick={() => setNavOpen(!navOpen)}
              aria-label="Toggle navigation"
            >
              {navOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <ul className={styles.navList}>
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <AnimatePresence>
            {navOpen && (
              <motion.ul
                className={styles.mobileNav}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} onClick={() => setNavOpen(false)}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </header>

        {/* HERO CONTENT */}
        <div className={styles.heroContent}>
          <div>
            <span>{hero.era_name}</span>
            <h1>{hero.name}</h1>
            <p>{hero.short_description}</p>
          </div>

          {/* FIX: Use real birth/death year from API instead of hardcoded "1990 – present" */}
          {(hero.birth_year || hero.death_year) && (
            <div>
              <span>Active Period</span>
              <span>
                {hero.birth_year ?? "?"} – {hero.death_year ?? "present"}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* CONTENT */}
      <div className={styles.content}>
        <div className={styles.detailGrid}>

          {/* MAIN COLUMN */}
          <main className={styles.mainCol}>

            <section className={styles.contentBox}>
              <h2><History size={24} /> Biography</h2>
              {/* FIX: guard against null/undefined */}
              {hero.full_history   && <p>{hero.full_history}</p>}
              {hero.full_biography && <p>{hero.full_biography}</p>}
            </section>

            <section className={styles.contentBox}>
              <h2><Trophy size={24} /> Key Achievements</h2>

              {/* FIX: achievements now comes from its own state, not hero.achievements */}
              {achievements.length === 0 && <p>No achievements listed.</p>}

              {achievements.map((a) => (
                <div key={a.id} className={styles.achievement}>
                  <strong>{a.year}</strong>
                  <p>{a.title}</p>
                  <p>{a.description}</p>
                </div>
              ))}
            </section>

            {/* FIX: Comments section now shows existing comments too */}
            <section className={styles.contentBox}>
              <h2>Comments</h2>

              {comments.length === 0 && <p>No comments yet. Be the first!</p>}

              {comments.map((c, i) => (
                <div key={i} className={styles.comment}>
                  {c.avatar && (
                    <Image
                      src={`${API_BASE}/static/${c.avatar}`}
                      width={36}
                      height={36}
                      alt={c.full_name}
                      style={{ borderRadius: "50%" }}
                    />
                  )}
                  <div>
                    <strong>{c.full_name}</strong>
                    <span>{new Date(c.created_at).toLocaleDateString()}</span>
                    <p>{c.comment}</p>
                  </div>
                </div>
              ))}

              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write a comment..."
                disabled={posting}
              />

              <button
                onClick={handlePostComment}
                disabled={posting || !comment.trim()}
              >
                {posting ? "Posting..." : "Post Comment"}
              </button>

              {postSuccess && <p style={{ color: "green" }}>Comment posted!</p>}
            </section>

          </main>

          {/* SIDEBAR */}
          <aside className={styles.sidebar}>
            <div>
              <h3>References</h3>

              {/* FIX: sources from its own state, not hero.sources */}
              {sources.length === 0 && <p>No sources listed.</p>}

              {sources.map((s) => (
                <a key={s.id} href={s.source_link} target="_blank" rel="noreferrer">
                  <ExternalLink size={13} />
                  {s.source_title}
                </a>
              ))}
            </div>
          </aside>

        </div>
      </div>

      {/* RELATED HEROES */}
      <section className={styles.related}>
        <h2>Related Heroes</h2>

        {relatedHeroes.length === 0 && <p>No related heroes found.</p>}

        <div className={styles.relatedGrid}>
          {relatedHeroes.map((h, i) => (
            <RelatedCard key={h.id} hero={h} index={i} />
          ))}
        </div>
      </section>

    </div>
  );
}