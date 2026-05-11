"use client";
// "What is happening in my system right now?"
import {
  Eye,
  Folder,
  MessageCircle,
  Users,
  Shield,
  TrendingUp,
  Clock,
  Star,
  Award,
  MapPin,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Flame,
  BookOpen,
} from "lucide-react";
import styles from "./styles/admin.module.scss";

// ─── Mock Data (replace with real API calls) ───────────────────────────────

const stats = [
  {
    label: "Total Heroes",
    value: 48,
    prev: 40,
    icon: Shield,
    accent: "#C8960C",
  },
  {
    label: "Registered Users",
    value: 1_284,
    prev: 1_100,
    icon: Users,
    accent: "#2563EB",
  },
  {
    label: "Total Comments",
    value: 3_870,
    prev: 3_200,
    icon: MessageCircle,
    accent: "#16A34A",
  },
  {
    label: "Total Views",
    value: 94_210,
    prev: 80_000,
    icon: Eye,
    accent: "#9333EA",
  },
  {
    label: "Categories",
    value: 10,
    prev: 10,
    icon: Folder,
    accent: "#EA580C",
  },
  {
    label: "Eras",
    value: 3,
    prev: 3,
    icon: BookOpen,
    accent: "#0891B2",
  },
];

const topHeroes = [
  { rank: 1, name: "Abebe Bikila", views: 12_400, category: "Athlete", trend: "up" },
  { rank: 2, name: "Haile Gebrselassie", views: 10_870, category: "Athlete", trend: "up" },
  { rank: 3, name: "Menelik II", views: 9_340, category: "Leader", trend: "down" },
  { rank: 4, name: "Empress Taytu Betul", views: 8_120, category: "Leader", trend: "up" },
  { rank: 5, name: "Kenenisa Bekele", views: 7_890, category: "Athlete", trend: "up" },
  { rank: 6, name: "Abiy Ahmed", views: 6_530, category: "Leader", trend: "down" },
];

const recentComments = [
  {
    id: 1,
    user: "Yohannes T.",
    avatar: "YT",
    hero: "Abebe Bikila",
    text: "A true legend. His story still gives me chills every time I read it.",
    time: "2 min ago",
  },
  {
    id: 2,
    user: "Selam A.",
    avatar: "SA",
    hero: "Empress Taytu Betul",
    text: "She was decades ahead of her time. Ethiopia owes so much to her vision.",
    time: "14 min ago",
  },
  {
    id: 3,
    user: "Bereket M.",
    avatar: "BM",
    hero: "Haile Gebrselassie",
    text: "Best athlete Ethiopia has ever produced. World record after world record.",
    time: "1 hr ago",
  },
  {
    id: 4,
    user: "Tigist H.",
    avatar: "TH",
    hero: "Rediet Abebe",
    text: "So proud to have an Ethiopian woman leading AI equity research globally!",
    time: "3 hr ago",
  },
];

const categoryBreakdown = [
  { name: "Athlete", count: 8, color: "#2563EB" },
  { name: "Leader", count: 10, color: "#C8960C" },
  { name: "Scientist", count: 10, color: "#16A34A" },
  { name: "Freedom Fighter", count: 2, color: "#DC2626" },
  { name: "Artist", count: 5, color: "#9333EA" },
  { name: "Educator", count: 5, color: "#EA580C" },
  { name: "Engineer", count: 3, color: "#0891B2" },
  { name: "Activist", count: 2, color: "#DB2777" },
  { name: "Doctor", count: 1, color: "#059669" },
  { name: "Inventor", count: 2, color: "#7C3AED" },
];
const totalCatCount = categoryBreakdown.reduce((a, c) => a + c.count, 0);

const recentHeroes = [
  { name: "Sossina Haile", category: "Scientist", era: "Modern", addedAgo: "3 days ago" },
  { name: "Betelhem Dessie", category: "Engineer", era: "Modern", addedAgo: "1 week ago" },
  { name: "Rediet Abebe", category: "Scientist", era: "Modern", addedAgo: "1 week ago" },
  { name: "Dereje Agonafer", category: "Engineer", era: "Modern", addedAgo: "2 weeks ago" },
];

const eraStats = [
  { name: "Ancient", heroes: 5, color: "#C8960C" },
  { name: "Medieval", heroes: 13, color: "#EA580C" },
  { name: "Modern", heroes: 30, color: "#2563EB" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────

function fmt(n: number) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1) + "K";
  return n.toString();
}

function pct(cur: number, prev: number) {
  if (prev === 0) return 0;
  return Math.round(((cur - prev) / prev) * 100);
}

// ─── Sub-components ───────────────────────────────────────────────────────

function StatCard({ stat }: { stat: (typeof stats)[0] }) {
  const Icon = stat.icon;
  const change = pct(stat.value, stat.prev);
  const isUp = change >= 0;

  return (
    <div className={styles.statCard} style={{ "--accent": stat.accent } as React.CSSProperties}>
      <div className={styles.statTop}>
        <div className={styles.statIcon}>
          <Icon size={22} />
        </div>
        <span className={`${styles.statBadge} ${isUp ? styles.up : styles.down}`}>
          {isUp ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />}
          {Math.abs(change)}%
        </span>
      </div>
      <div className={styles.statBottom}>
        <p className={styles.statValue}>{fmt(stat.value)}</p>
        <p className={styles.statLabel}>{stat.label}</p>
      </div>
      <div className={styles.statBar} />
    </div>
  );
}

function TopHeroRow({ hero }: { hero: (typeof topHeroes)[0] }) {
  return (
    <div className={styles.topHeroRow}>
      <span className={styles.rank}>#{hero.rank}</span>
      <div className={styles.heroInfo}>
        <p className={styles.heroName}>{hero.name}</p>
        <span className={styles.heroCat}>{hero.category}</span>
      </div>
      <div className={styles.heroViews}>
        <Eye size={13} />
        {fmt(hero.views)}
      </div>
      <span className={`${styles.trendBadge} ${hero.trend === "up" ? styles.up : styles.down}`}>
        {hero.trend === "up" ? <TrendingUp size={13} /> : <ArrowDownRight size={13} />}
      </span>
    </div>
  );
}

function CommentCard({ c }: { c: (typeof recentComments)[0] }) {
  return (
    <div className={styles.commentCard}>
      <div className={styles.commentAvatar}>{c.avatar}</div>
      <div className={styles.commentBody}>
        <div className={styles.commentMeta}>
          <span className={styles.commentUser}>{c.user}</span>
          <span className={styles.commentHero}>on {c.hero}</span>
          <span className={styles.commentTime}>
            <Clock size={11} /> {c.time}
          </span>
        </div>
        <p className={styles.commentText}>{c.text}</p>
      </div>
    </div>
  );
}

// ─── Main Dashboard ───────────────────────────────────────────────────────

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      {/* ── Page Header ── */}
      <div className={styles.dashHeader}>
          <h1>
            <Flame size={22} className={styles.flamIcon} /> Admin Dashboard
          </h1>
          <p>
            Ethiopian Heroes — system overview & live metrics
          </p>
      </div>

      {/* ── Stat Cards ── */}
      <section className={styles.statsGrid}>
        {stats.map((s) => (
          <StatCard key={s.label} stat={s} />
        ))}
      </section>

      {/* ── Main Content Grid ── */}
      <div className={styles.mainGrid}>

        {/* Left col: Top Heroes + Recent Heroes */}
        <div className={styles.leftCol}>

          {/* Top Heroes by Views */}
          <div className={styles.panel}>
            <div className={styles.panelHead}>
              <h2><Award size={16} /> Top Heroes by Views</h2>
              <button className={styles.moreBtn}><MoreHorizontal size={16} /></button>
            </div>
            <div className={styles.topHeroesList}>
              {topHeroes.map((h) => (
                <TopHeroRow key={h.rank} hero={h} />
              ))}
            </div>
          </div>

          {/* Recently Added Heroes */}
          <div className={styles.panel}>
            <div className={styles.panelHead}>
              <h2><Clock size={16} /> Recently Added Heroes</h2>
            </div>
            <table className={styles.recentTable}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Era</th>
                  <th>Added</th>
                </tr>
              </thead>
              <tbody>
                {recentHeroes.map((h) => (
                  <tr key={h.name}>
                    <td className={styles.boldCell}>{h.name}</td>
                    <td><span className={styles.pill}>{h.category}</span></td>
                    <td>{h.era}</td>
                    <td className={styles.mutedCell}>{h.addedAgo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right col: Categories + Eras + Comments */}
        <div className={styles.rightCol}>

          {/* Category Breakdown */}
          <div className={styles.panel}>
            <div className={styles.panelHead}>
              <h2><Folder size={16} /> Heroes by Category</h2>
            </div>
            <div className={styles.catList}>
              {categoryBreakdown.map((c) => (
                <div key={c.name} className={styles.catRow}>
                  <span className={styles.catDot} style={{ background: c.color }} />
                  <span className={styles.catName}>{c.name}</span>
                  <div className={styles.catBarWrap}>
                    <div
                      className={styles.catBarFill}
                      style={{
                        width: `${(c.count / totalCatCount) * 100}%`,
                        background: c.color,
                      }}
                    />
                  </div>
                  <span className={styles.catCount}>{c.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Era Distribution */}
          <div className={styles.panel}>
            <div className={styles.panelHead}>
              <h2><MapPin size={16} /> Heroes by Era</h2>
            </div>
            <div className={styles.eraList}>
              {eraStats.map((e) => (
                <div key={e.name} className={styles.eraCard} style={{ "--era-color": e.color } as React.CSSProperties}>
                  <span className={styles.eraName}>{e.name}</span>
                  <span className={styles.eraCount}>{e.heroes}</span>
                  <p className={styles.eraLabel}>heroes</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Comments */}
          <div className={styles.panel}>
            <div className={styles.panelHead}>
              <h2><MessageCircle size={16} /> Recent Comments</h2>
              <button className={styles.moreBtn}><MoreHorizontal size={16} /></button>
            </div>
            <div className={styles.commentsList}>
              {recentComments.map((c) => (
                <CommentCard key={c.id} c={c} />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Quick Actions ── */}
      <section className={styles.quickActions}>
        <h2 className={styles.qaTitle}><Star size={16} /> Quick Actions</h2>
        <div className={styles.qaGrid}>
          {[
            { label: "Add Hero", href: "/admin/heroes/create", icon: Shield },
            { label: "Add Category", href: "/admin/categories", icon: Folder },
            { label: "Manage Users", href: "/admin/users", icon: Users },
            { label: "View Comments", href: "/admin/comments", icon: MessageCircle },
          ].map((a) => {
            const Icon = a.icon;
            return (
              <a key={a.label} href={a.href} className={styles.qaCard}>
                <Icon size={20} />
                <span>{a.label}</span>
                <ArrowUpRight size={14} className={styles.qaArrow} />
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
}