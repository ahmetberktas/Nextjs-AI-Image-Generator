import styles from "./styles.module.css";

function Loading() {
  return (
    <div className={styles.spinner}>
      <div className={styles.spinnerin}></div>
    </div>
  );
}

export default Loading;
