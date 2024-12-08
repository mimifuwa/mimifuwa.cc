import styles from "@/styles/article.module.css";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Welcome</h2>
        <p>みみちゃんの部屋へようこそ！</p>
        <p>
          自己紹介 ▶ <Link href="/about">About</Link>
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Portfolio</h2>
        <p>主にWebの技術を触っています。最近競プロを始めました。</p>
        <p>
          制作物・技術スタック ▶ <Link href="/portfolio">Portfolio</Link>
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Blog</h2>
        <p>
          技術を触ったり、オタク（アニメ・音楽）していたり、徒歩をしたりしています。
        </p>
        <p>
          記事一覧 ▶ <Link href="/blog">Blog</Link>
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Latest Posts</h2>
        <p>最新の投稿</p>
        <p>まだなにもありません...</p>
        <p>
          <Link href="/blog">もっと見る</Link>
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Links</h2>
        <p>大学の知り合いなどの相互リンクです。</p>
      </section>
    </>
  );
}
