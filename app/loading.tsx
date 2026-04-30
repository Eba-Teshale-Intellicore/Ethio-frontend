import styles from "./custom.module.scss";

export default function Loading() {
    return (
        <div className={styles.fcontainer}>
            <h1 className={styles.title}>Loading...</h1>
            <p className={styles.message}>
                Please wait while we load the content for you.
            </p>
        </div>
    );
}