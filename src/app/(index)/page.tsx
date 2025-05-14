import Link from "next/link";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { SiZenn } from "react-icons/si";

import Card from "@/components/card";
import Frame from "@/components/frame";

import { GithubContributions } from "./_components/contributions";
import { ZennArticle, ZennArticleList } from "./_components/zenn-articles";
import { activities, skills, works } from "./data";

async function getZennArticles(): Promise<ZennArticle[]> {
  const res = await fetch("https://zenn.dev/api/articles?username=mimifuwa&order=latest");

  if (!res.ok) {
    // エラーハンドリングを忘れずに
    console.error("Failed to fetch Zenn articles");
    return [];
  }

  const data = await res.json();

  return data.articles;
}

export default async function Page() {
  const zennArticles = await getZennArticles();

  return (
    <>
      <div className="px-4 my-4 max-w-7xl mx-auto font-normal">
        <div className="flex flex-col gap-y-4">
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            <Frame emoji="🔍" title="About me">
              <div className="flex gap-6 items-start sm:items-center flex-col sm:flex-row w-full">
                <img
                  src="/icon.png"
                  alt="mimifuwa"
                  className="mx-auto sm:mx-2 w-32 h-32 aspect-square p-1 border-3 border-slate-700 rounded-full hover:scale-105 transition-transform cursor-pointer duration-300"
                  width={128}
                  height={128}
                />
                <div>
                  <table>
                    <tbody>
                      <tr className="align-baseline">
                        <th className="text-right pr-3">名前</th>
                        <td className="text-slate-600">
                          みみ
                          <br /> Kimimichi Shioiri
                        </td>
                      </tr>
                      <tr className="align-baseline">
                        <th className="text-right pr-3">所属</th>
                        <td className="text-slate-600">
                          電気通信大学 情報理工学域
                          <br />
                          コンピュータサイエンスプログラム
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="flex gap-2 mt-4">
                    <Link
                      href="https://github.com/mimifuwa"
                      className="flex items-center p-2 border-2 border-slate-700 gap-2 hover:bg-slate-700 transition-colors duration-300 hover:text-slate-200"
                    >
                      <div className="text-xl">
                        <FaGithub />
                      </div>
                      <div className="text-xs">GitHub</div>
                    </Link>
                    <Link
                      href="https://twitter.com/mimifuwa_dev"
                      className="flex items-center p-2 border-2 border-slate-700 gap-2 hover:bg-slate-700 transition-colors duration-300 hover:text-slate-200"
                    >
                      <div className="text-xl">
                        <FaTwitter />
                      </div>
                      <div className="text-xs">Twitter</div>
                    </Link>
                    <Link
                      href="https://zenn.dev/mimifuwa"
                      className="flex items-center p-2 border-2 border-slate-700 gap-2 hover:bg-slate-700 transition-colors duration-300 hover:text-slate-200"
                    >
                      <div className="text-xl">
                        <SiZenn />
                      </div>
                      <div className="text-xs">Zenn</div>
                    </Link>
                  </div>
                </div>
              </div>
            </Frame>
            <Frame emoji="📈" title="Recent Activities">
              <GithubContributions />
            </Frame>
          </div>
          <div className="grid grid-cols-1 gap-y-4 gap-x-0 lg:gap-y-4 lg:gap-x-4 lg:grid-cols-[3fr_2fr]">
            <Frame emoji="✏️" title="Skills">
              <div className="grid gap-3 sm:grid-cols-3 h-full w-full">
                <div className="flex flex-col items-start p-2 border-2 border-slate-700 h-full">
                  <h3 className="text-md px-1 mb-3 font-bold font-heading text-slate-200 bg-slate-700 w-auto">
                    Languages
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.languages.map((skill, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center bg-slate-200 p-1.5 group relative"
                      >
                        <img
                          width={24}
                          height={24}
                          src={skill.image}
                          alt={skill.name}
                          className="w-6 h-6"
                        />
                        <span className="absolute top-full mt-1 hidden group-hover:block bg-slate-400 text-xs px-2 py-1 rounded z-10 shadow-md before:content-[''] before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-transparent before:border-b-slate-400">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-start p-2 border-2 border-slate-700 h-full">
                  <h3 className="text-md px-1 mb-3 font-bold font-heading text-slate-200 bg-slate-700 w-auto">
                    Frameworks
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.frameworks.map((skill, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center bg-slate-200 group relative p-1.5"
                      >
                        <img
                          width={24}
                          height={24}
                          src={skill.image}
                          alt={skill.name}
                          className="w-6 h-6"
                        />
                        <span className="absolute top-full mt-1 hidden group-hover:block bg-slate-400 text-xs px-2 py-1 rounded z-10 shadow-md before:content-[''] before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-transparent before:border-b-slate-400">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-start p-2 border-2 border-slate-700 h-full">
                  <h3 className="text-md px-1 mb-3 font-bold font-heading text-slate-200 bg-slate-700 w-auto">
                    Tools
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.tools.map((skill, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center bg-slate-200 group relative p-1.5"
                      >
                        <img
                          width={24}
                          height={24}
                          src={skill.image}
                          alt={skill.name}
                          className="w-6 h-6"
                        />
                        <span className="absolute top-full mt-1 hidden group-hover:block bg-slate-400 text-xs px-2 py-1 rounded z-10 shadow-md before:content-[''] before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-transparent before:border-b-slate-400">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Frame>
            <Frame emoji="🏅" title="Qualifications" className="sm:col-span-2 lg:col-span-1">
              <ul>
                <li>全珠連 珠算検定 参段</li>
                <li>全珠連 暗算検定 準四段</li>
                <li>実用数学技能検定 準1級</li>
                <li>ITパスポート (2020年度春)</li>
                <li>応用情報技術者 (2024年度秋)</li>
              </ul>
            </Frame>
          </div>
          <Frame emoji="🚶‍♂️" title="Experience">
            <ol className="relative border-s-2 border-slate-700 ml-2">
              {activities.map((activity) => (
                <li key={activity.title} className="mb-4 ms-4">
                  <div className="absolute w-3 h-3 bg-slate-700 rounded-full mt-1.5 -start-[0.4375rem] border border-slate-200"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-slate-500">
                    {activity.date}
                  </time>
                  <h3 className="text-base font-semibold text-slate-700">{activity.title}</h3>
                  <p className="mb-4 text-sm font-normal text-slate-600">{activity.description}</p>
                </li>
              ))}
            </ol>
          </Frame>
          <Frame emoji="⭐" title="Works">
            <div className="grid sm:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-3">
              {works.map((work, index) => (
                <Card image={work.image} title={work.title} key={index} href={work.url}>
                  <p className="text-slate-600">{work.description}</p>
                </Card>
              ))}
            </div>

            <Link
              href="https://github.com/mimifuwa"
              className="p-2 border-2 text-sm border-slate-700 items-center gap-2 inline-flex mt-4 hover:bg-slate-700 transition-colors duration-300 hover:text-slate-200"
            >
              <FaGithub className="text-xl" />
              GitHubを見る
            </Link>
          </Frame>
          <Frame emoji="📝" title="Articles">
            <ZennArticleList articles={zennArticles} />
            <Link
              href="https://zenn.dev/mimifuwa"
              className="p-2 border-2 text-sm border-slate-700 items-center gap-2 inline-flex mt-4 hover:bg-slate-700 transition-colors duration-300 hover:text-slate-200"
            >
              <SiZenn className="text-xl" />
              Zennの記事一覧を見る
            </Link>
          </Frame>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1fr]">
            <Frame emoji="📍" title="Activities">
              <h3 className="font-heading text-xl">電気通信大学</h3>
              <p>
                23年度入学。コンピュータサイエンスプログラムにいます。実は中学生の頃から第一志望でした（なんで？）。
              </p>
              <h3 className="font-heading text-xl mt-4">team411</h3>
              <p>
                電気通信大学のベンチャー工房所属の学生団体です。「IT技術を通じて
                大学と社会の課題を解決する」ことを目標にチームで活動しています。
              </p>
              <p>
                現在は{" "}
                <a
                  href="https://uecdashboard.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  uBoard
                </a>{" "}
                というプロジェクトのPMをやっています。
              </p>
              <h3 className="font-heading text-xl mt-4">工学研究部</h3>
              <p>2年間居座ってます。特に何もやってません。</p>
              <h3 className="font-heading text-xl mt-4">バーチャルライブ研究会</h3>
              <p>最近入りました。公式サイト等技術関連のお仕事をしています。</p>
            </Frame>
            <Frame emoji="🎶" title="Hobby">
              <h3 className="font-heading text-xl">Otaku</h3>
              <p>観測者ヰ組。少女革命計画を追い始めるなどしています。</p>
              <h3 className="font-heading text-xl mt-4">Music</h3>
              <p>たくさん。</p>
              <ul className="list-disc list-inside">
                <li>ヰ世界情緒</li>
                <li>VWP</li>
                <li>Vivid BAD SQUAD</li>
              </ul>

              <h3 className="font-heading text-xl mt-4">Light Novel</h3>
              <p>文字を読むのが苦手ですが、ラノベは読めます。</p>
              <p>こちまつのLunaさん可愛すぎませんか？？？</p>
              <ul className="list-disc list-inside">
                <li>
                  <a
                    href="https://www.kadokawa.co.jp/product/321909000804/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    スパイ教室
                  </a>
                </li>
                <li>
                  <a
                    href="https://dengekibunko.jp/product/shumatuteitai/322403000379.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    こちら週末停滞委員会
                  </a>
                </li>
              </ul>
            </Frame>
          </div>
        </div>
      </div>
    </>
  );
}
