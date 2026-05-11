"use client";
import styles from "./custom.module.scss";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.message}>
        Oops! The page you're looking for doesn't exist.
      </p>
    </div>
  );
}