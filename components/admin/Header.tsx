"use client";

import { Bell, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import styles from "@/components/admin/styles/header.module.scss";

export default function Header() {
  const pathname = usePathname();

  const getTitle = () => {
    if (pathname === "/admin") return "Dashboard";
    if (pathname.includes("/heroes")) return "Heroes";
    if (pathname.includes("/categories")) return "Categories";
    if (pathname.includes("/eras")) return "Eras";
    if (pathname.includes("/users")) return "Users";
    if (pathname.includes("/comments")) return "Comments";
    return "Admin";
  };

  return (
    <header className={styles.header}>
      
      {/* LEFT */}
      <div className={styles.left}>
        <h1>{getTitle()}</h1>
      </div>

      {/* RIGHT */}
      <div className={styles.right}>
        
        {/* Search */}
        <div className={styles.searchBox}>
          <Search size={18} />
          <input type="text" placeholder="Search..." />
        </div>

        {/* Notifications */}
        <div className={styles.icon}>
          <Bell size={20} />
          <span className={styles.badge}>3</span>
        </div>

        {/* Profile */}
        <div className={styles.profile}>
          <div className={styles.avatar}>E</div>
          <div className={styles.info}>
            <p>Eba Teshale</p>
            <span>Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
}