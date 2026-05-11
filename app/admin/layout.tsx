import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";
import styles from "./styles/admin.module.scss";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.adminLayout}>
      <Sidebar />
      <div className={styles.main}>
        <Header />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
}