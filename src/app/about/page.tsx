import styles from "@/styles/article.module.css";

import Link from "next/link";

import clsx from "clsx";


export default function Home() {
  return (
    <>
      <section className={styles.section}>
        <h2 className={clsx(styles.sectionTitle, styles.topPage)}>About Me</h2>
        <p>電気通信大学情報理工学域 I 類に在学</p>
        <p>専攻はコンピュータサイエンス</p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Hobby</h2>
        <h3 className={styles.subsectionTitle}>Music</h3>
        <p>色々聴きます。アニソン多め。</p>
        <ul className={styles.list}>
          <li>
            <Link href="https://nonoc.bitfan.id/">nonoc</Link>
          </li>
          <li>
            <Link href="https://azuna-riko.com/">安月名莉子</Link>
          </li>
          <li>
            <Link href="https://kamitsubaki.jp/artist/v-w-p/">V.W.P</Link>
          </li>
        </ul>
        <h3 className={styles.subsectionTitle}>Light Novel</h3>
        <p>
          大学に入ってからラノベにハマりました。いろんなオタクに布教活動をしています。
        </p>
        <ul className={styles.list}>
          <li>
            <Link href="https://www.kadokawa.co.jp/product/321909000804/">
              スパイ教室
            </Link>
          </li>
          <li>
            <Link href="https://www.kadokawa.co.jp/product/322403000379/">
              こちら終末停滞委員会
            </Link>
          </li>
        </ul>
        <h3 className={styles.subsectionTitle}>Anime</h3>
        <p>
          色々見ています。こちら終末停滞委員会のアニメ化はよ。2025冬アニメは色々「面白そうなもの」が多いようで期待。
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Activities</h2>
        <h3 className={styles.subsectionTitle}>team411</h3>
        <p>
          電気通信大学のベンチャー工房帰属のサークルのようなものです。いろんなアプリを作っていたり、鯖をいじっていたり、サービスを売り込む営業っぽいことをやっていたり。
        </p>
        <p>
          私は <Link href="https://uecdashboard.app">UEC Dashboard</Link>{" "}
          とかいうプロジェクトのPMをやっていたり、諸々の管理をする管理本部長とかいう謎の役職をやっていたりします。
        </p>
        <h3 className={styles.subsectionTitle}>工学研究部</h3>
        <p>不自由なOSを撲滅する運動をしています。</p>
        <p>
          <s>いい加減電子工作やろうね</s>
        </p>
        <h3 className={styles.subsectionTitle}>第74回調布祭実行委員会</h3>
        <p>
          2024年度第74回調布祭に技術局のメンバーとして関わりました。主に{" "}
          <Link href="https://chofusai.jp">調布祭のWebページ</Link>{" "}
          作成を行いました。
        </p>
      </section>
    </>
  );
}
