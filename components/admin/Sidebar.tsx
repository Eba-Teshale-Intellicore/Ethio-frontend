"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Calendars,
  ChartBarStacked,
  LayoutDashboard,
  LogOut,
  MessageSquareDiff,
  NotebookTabs,
  Settings,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import styles from "./styles/sidebar.module.scss";
import Image from "next/image";
import logo from "@/public/vercel.svg";

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const menu = [
    { name: "Dashboard", icon: <LayoutDashboard />, path: "/admin" },
    { name: "Heroes", icon: <NotebookTabs />, path: "/admin/heroes" },
    { name: "Categories", icon: <ChartBarStacked />, path: "/admin/categories" },
    { name: "Eras", icon: <Calendars />, path: "/admin/eras" },
    { name: "Users", icon: <Users />, path: "/admin/users" },
    { name: "Comments", icon: <MessageSquareDiff />, path: "/admin/comments" },
    { name: "Settings", icon: <Settings />, path: "/admin/settings" },
  ];

  return (
    <div className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""}`}>
      
      {/* Header */}
      <div className={styles.sidebarheader}>
        {!collapsed && (
          <Image src={logo} alt="Logo" className={styles.logo} />
        )}

        <button onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </div>

      {/* Menu */}
      <div className={styles.sidebarcontent}>
        <ul>
          {menu.map((item) => (
            <li
              key={item.name}
              className={pathname === item.path ? styles.active : ""}
            >
              <Link href={item.path}>
                <span>{item.icon}</span>
                {!collapsed && <p>{item.name}</p>}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className={styles.sidebarfooter}>
        <span className={styles.avatar}>E</span>

        {!collapsed && (
          <div>
            <p>Eba Teshale</p>
            <span>Admin</span>
          </div>
        )}

        <LogOut />
      </div>
    </div>
  );
}