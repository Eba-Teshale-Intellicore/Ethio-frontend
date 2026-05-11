

"use client";

import styles from "./detail.module.scss";
import Image from "next/image";
import { ExternalLink, History, Trophy, Plus, MoveRight, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "next/navigation";
import Link from "next/link";
import Loading from "@/app/loading"

// import pic1 from "@/public/assets/fasil.jpg";
// import pic2 from "@/public/assets/nigat.jpg";
// import pic3 from "@/public/assets/image2.jpg";

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home",      href: "/"  },
  { label: "Directory", href: "#"  },
  { label: "Quotes",    href: "#"  },
  { label: "About",     href: "#"  },
  { label: "Contact",   href: "#"  },
] as const;

// const ACHIEVEMENTS = [
//   { year: "1998", title: "National Recognition",  desc: "Awarded for outstanding leadership in the field of education and social reform." },
//   { year: "2004", title: "Pioneer Award",          desc: "Honored for pioneering contributions to modern Ethiopian literature." },
//   { year: "2011", title: "Legacy Foundation",      desc: "Established a foundation that has impacted over 10,000 young Ethiopians." },
// ] as const;

// const SOURCES = [
//   { label: "Ethiopian Historical Records",  href: "#" },
//   { label: "Ministry of Culture Archives",  href: "#" },
//   { label: "National Museum Documentation", href: "#" },
// ] as const;

// const RELATED = [
//   { pic: pic1, name: "Fasil Ghebbi",   era: "Ancient"  },
//   { pic: pic2, name: "Nigat",          era: "Modern"   },
//   { pic: pic3, name: "The Strategist", era: "Medieval" },
// ] as const;


// ─── Related card ─────────────────────────────────────────────────────────────
type RelatedHero = {
  id: number;
  name: string;
  hero_image: string;
  era_name: string;
  short_description: string;
};

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
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
    >
      <div className={styles.cornerTL} />
      <div className={styles.cornerBR} />

      <div className={styles.relatedImgWrap}>
        <motion.div
          className={styles.relatedImgInner}
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image 
          src={`https://ethio-heroes.onrender.com/static/${hero.hero_image}`}
          fill alt={hero.name} 
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, 33vw" 
          className={styles.relatedImg} 
          />
        </motion.div>
        <div className={styles.relatedOverlay} />
        <span className={styles.era}>{hero.era_name}</span>
      </div>

      <div className={styles.relatedBody}>
        <h3 className={styles.relatedName}>{hero.name}</h3>
        <p>{hero.short_description}</p>
        <motion.div
          className={styles.relatedLink}
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -5 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            href={`/detail/hero/${hero.id}`}
            className={styles.relatedLink}
          >
            View profile <MoveRight size={12} />
          </Link>
        </motion.div>
      </div>

      <motion.div
        className={styles.cardLine}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

export default function Detail() {
  const [navOpen, setNavOpen] = useState(false);
  const [comment, setComment] = useState("");
  const params = useParams();
  const id = params.id;

  const [hero, setHero] = useState<any>(null);
  const [relatedHeroes, setRelatedHeroes] = useState<RelatedHero[]>([]);

  useEffect(() => {
    fetch(`https://ethio-heroes.onrender.com/api/hero/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setHero(data);
        setRelatedHeroes(data.related_heroes);
      });
  }, [id]);

  if (!hero) return <p><Loading/></p>;

  return (
    <div className={styles.page}>

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className={styles.hero}>
        {/* Background image */}
          <Image
            src={`https://ethio-heroes.onrender.com/static/${hero.hero.hero_image}`}
            fill
            alt={hero.hero.name}
            className={styles.heroBg}
            sizes="100vw"
            placeholder="blur"
            priority
          />
        <div className={styles.heroGradient} />

        {/* Nav */}
        <header className={styles.heroHeader}>
          <nav className={styles.nav}>
            <button
              className={styles.menuBtn}
              onClick={() => setNavOpen((p) => !p)}
              aria-label="Toggle navigation"
            >
              <Menu size={20} />
            </button>
            <ul className={styles.navList}>
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile nav */}
          <AnimatePresence>
            {navOpen && (
              <motion.ul
                className={styles.mobileNav}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {NAV_LINKS.map((link) => (
                  <li key={link.label}><a href={link.href}>{link.label}</a></li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </header>

        {/* Hero content */}
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <span className={styles.heroEra}>
              {hero.hero.era_name}
            </span>
            <h1 className={styles.heroTitle}>
              {hero.hero.name}
            </h1>
            <p className={styles.heroDesc}>
              {hero.hero.short_description}
            </p>
          </div>
          <div className={styles.heroRight}>
            <span className={styles.timesLabel}>Active Period</span>
            <span className={styles.timesValue}>1990 – Present</span>
          </div>
        </div>
      </section>

      {/* ══ DETAIL CONTENT ════════════════════════════════════════════════════ */}
      <div className={styles.content}>
        <div className={styles.detailGrid}>

          {/* Main */}
          <main className={styles.mainCol}>

            {/* Biography */}
            <section className={styles.contentBox}>
              <h2 className={styles.boxTitle}>
                <History size={24} /> Biography
              </h2>
              <div className={styles.bodyText}>
                <p>
                  {hero.hero.name}
                </p>
                <p>
                  {hero.hero.full_history}
                </p>
                <p>
                  {hero.hero.full_biography}
                </p>
              </div>
            </section>

            {/* Achievements */}
            <section className={styles.contentBox}>
              <h2 className={styles.boxTitle}>
                <Trophy size={24} /> Key Achievements
              </h2>
              <div className={styles.timeline}>
                {hero.achievements.map((a: any, i: number) => (
                  <motion.div
                    key={a.id}
                    className={styles.timelineItem}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.5
                    }}
                  >
                    <div className={styles.tYear}>
                      {a.year}
                    </div>

                    <div className={styles.tContent}>
                      <strong>{a.title}</strong>
                      <p>{a.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <aside className={styles.sidebar}>

            {/* References */}
            <div className={styles.sidebarBox}>
              <h3 className={styles.sidebarTitle}>References</h3>
              <ul className={styles.sourceList}>
                {hero.sources.map((s: any) => (
                  <li key={s.id}>
                    <a
                      href={s.source_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink size={13} />
                      {s.source_title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Comments */}
            <div className={styles.sidebarBox}>
              <h3 className={styles.sidebarTitle}>Comments</h3>
              <div className={styles.commentForm}>
                <textarea
                  placeholder="Share your thoughts..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={4}
                />
                <motion.button
                  className={styles.btnPrimary}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Post Comment
                </motion.button>
              </div>

              <div className={styles.commentsList}>
                <p className={styles.emptyState}>No comments yet. Be the first!</p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ══ RELATED HEROES ════════════════════════════════════════════════════ */}
      <section className={styles.related}>
        <div className={styles.relatedHeader}>
          <span className={styles.eyebrow}>Discover More</span>
          <h2 className={styles.relatedTitle}>
            Related <span className={styles.titleAccent}>Heroes</span>
          </h2>
        </div>
        {/* helated hero */}
        <div className={styles.relatedGrid}>
          {relatedHeroes.map((hero, index) => (
            <RelatedCard key={hero.id} hero={hero} index={index} />
          ))}
        </div>
      </section>

    </div>
  );
}