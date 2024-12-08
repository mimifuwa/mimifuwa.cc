import type React from "react";
import styles from "./Footer.module.css";

import clsx from "clsx";

export const Footer: React.FC = () => {
  return (
    <footer className={clsx(styles.footer)}>
      <div className={styles.copyRight}>© 2024 mimifuwa</div>
    </footer>
  );
};
