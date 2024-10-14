"use client";

import styles from "./styles.module.css";

function Tag({ title, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick(title);
    }
  };

  return (
    <button className={styles.tag} onClick={handleClick}>
      {title}
    </button>
  );
}

export default Tag;
