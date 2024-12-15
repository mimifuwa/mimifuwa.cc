import styles from "@/styles/article.module.css";

import Link from "next/link";

import clsx from "clsx";

export default function Home() {
  return (
    <>
      <section className={styles.section}>
        <h2 className={clsx(styles.sectionTitle, styles.topPage)}>Portfolio</h2>
        <p>工事中です</p>
      </section>
    </>
  );
}
