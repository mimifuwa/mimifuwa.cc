import { FaGithub, FaTwitter } from "react-icons/fa";
import { SiZenn } from "react-icons/si";

export const sns = [
  {
    name: "GitHub",
    url: "https://github.com/mimifuwa",
    icon: <FaGithub />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/mimifuwa_dev",
    icon: <FaTwitter />,
  },
  {
    name: "Zenn",
    url: "https://zenn.dev/mimifuwa",
    icon: <SiZenn />,
  },
];

// export const latestArticles = {
//   id: 1,
//   title: "タイトルaaaaaaaaaaaaaaaahogehogehogehogehoge",
//   description: "lorem ipsum dolor sit amet",
//   date: "2023-04-01",
//   tags: ["tag1", "tag2"],
//   image: "https://team411.net/ogp.png",
// };

export const latestArticles: {
  id: number;
  title: string;
  description: string;
  date: string;
  tags: string[];
  image: string;
} | null = null;

export const works = [
  {
    title: "uBoard",
    description: "大学の学生向け情報をまとめたポータルサイト",
    url: "https://uboard.info",
  },
  {
    title: "team411 HP",
    description: "電気通信大学ベンチャー工房team411の公式サイト",
    url: "https://team411.net",
  },
  {
    title: "74th Chofusai",
    description: "第74回調布祭公式サイト",
    url: "https://74th.chofusai.jp",
  },
];

export const skills = [
  {
    name: "HTML",
    image:
      "https://camo.githubusercontent.com/49179b69f7956cc4b5e5e7987d011103b7e3ffc20c55ca4a43c8ff214c3b6796/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d68746d6c",
  },
  {
    name: "CSS",
    image:
      "https://camo.githubusercontent.com/a266b2536a9f4e1b8dc325ca89d9ce8e7f323c1e140f8b830a42f474a56e3b4c/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d637373",
  },
  {
    name: "TypeScript",
    image:
      "https://camo.githubusercontent.com/ea3a367c6ef785b5447cba5462d868ffed003c813a1c2e0d5aed924fc0a7fcda/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d7473",
  },
  {
    name: "React",
    image:
      "https://camo.githubusercontent.com/cb1fa2738a401d7952e8c150707084c5336ba9d544a238fad8c8d4d942353d8a/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d7265616374",
  },
  {
    name: "Next.js",
    image:
      "https://camo.githubusercontent.com/369ce0f9d1b9e5e69b4b6df1752862ce1fc99699d6bb17d84cc2825c75d1e2d6/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d6e6578746a73",
  },
  {
    name: "Tailwind CSS",
    image:
      "https://camo.githubusercontent.com/f383e4b2c5e8c2ca73221c29ef270d55d82eb3beeb79bd6b409dcb6ab64a4b7c/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d7461696c77696e64",
  },
  {
    name: "Docker",
    image:
      "https://camo.githubusercontent.com/869b011ef3778c6dce9288ee988f59caec696153e3afb7219d858c05d317e368/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d646f636b6572",
  },
  {
    name: "Python",
    image:
      "https://camo.githubusercontent.com/1594bb61e85b22739a2e8fa02ea68154f8969efc2f280a47f2602f99d5f0fc0e/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d7079",
  },
  {
    name: "C",
    image:
      "https://camo.githubusercontent.com/53b27cbad05c013d17c92bd9a820d0e7d9f5199f88ffc827dae965b4ac0657ca/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d63",
  },
  {
    name: "C++",
    image:
      "https://camo.githubusercontent.com/33a88742a4c2007e41b467f181b79c7f68650b056f27ac9d38176995f68ad586/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d637070",
  },
  {
    name: "Linux",
    image:
      "https://camo.githubusercontent.com/9de3a0e52bb32397d435c3cd0396f81235fba55ec7bccf5b8202aa1b551e89bf/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d6c696e7578",
  },
  {
    name: "Git",
    image:
      "https://camo.githubusercontent.com/a2322ca134c223fe4b49d637be98c3b8d9b907e8ef9c601c4bc8ce2a5824e269/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d676974",
  },
];

export const activities = [
  {
    date: "2020年4月",
    title: "新宿山吹高校 情報科 入学",
  },
  {
    date: "2020年12月",
    title: "第30回山吹祭 実行委員会",
    description: "コロナ禍によりオンライン開催となった文化祭を、Webサイト作成等の面から支援",
  },
  {
    date: "2021年12月",
    title: "第31回山吹祭 実行委員会 技術担当",
    description:
      "公式サイトの作成を、ストリーミング配信の実施やそこで使用するアプリケーションの開発などを行った",
  },
  {
    date: "2023年4月",
    title: "電気通信大学 I類 入学",
  },
  {
    date: "2023年4月",
    title: "UEC Dashboard(現uBoard) リリース",
    description: "大学入学当初、情報が散財しており不便であったため自分用に開発し、一般にも公開",
  },
  {
    date: "2023年4月",
    title: "team411 入部",
    description:
      "「IT技術を通じて 大学と社会の課題を解決する」電通大の学生団体 team411 に入部。副代表など役員として活動していた",
  },
  {
    date: "2023年8月",
    title: "U☆PoC～UECアイディア実証コンテスト～2023",
    description: "2つのプロジェクトで出展し、ハートビーツ賞・たましん賞を受賞",
  },
  {
    date: "2024年8月",
    title: "U☆PoC～UECアイディア実証コンテスト～2024",
    description:
      "UEC Dashboardをきっかけとしたプロジェクトで出展し、コムサットジャパン賞・きらぼし賞・ハートビーツ賞を受賞",
  },
  {
    date: "2024年10月",
    title: "応用情報技術者試験 合格",
  },
  {
    date: "2024年11月",
    title: "第74回調布祭実行委員会 技術局",
    description: "調布祭公式サイトのデザイン・制作を担当",
  },
  {
    date: "2025年1月",
    title: "バーチャルライブ研究会 入部",
    description:
      "主に技術班として活動。公式サイトの作成・管理や、部内で使用するツールの開発・保守などを行っている",
  },
];
