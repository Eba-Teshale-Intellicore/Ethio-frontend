import styles from "./custom.module.scss";


export default function Loading() {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.spinner}>
          <span className={styles.ring} />
          <span className={styles.ring} />
          <span className={styles.ring} />
        </div>
        <p className={styles.text}>Loading</p>
        <div className={styles.dots}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}