import Link from "next/link";
import { FaRegFileAlt, FaRegStar } from "react-icons/fa";

import Card from "@/components/card";

import { activities, latestArticles, skills, sns, works } from "./data";

export default function Page() {
  return (
    <>
      <div className="px-4 my-4 max-w-7xl mx-auto">
        <div className="flex flex-col gap-y-4">
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1fr_1fr]">
            <Card emoji="🔍" title="About me">
              <div className="flex gap-6 items-start sm:items-center flex-col sm:flex-row">
                <img
                  src="/icon.png"
                  alt="mimifuwa"
                  className="mx-auto sm:mx-2 w-32 h-32 p-1 border-3 border-slate-700 rounded-full hover:scale-105 transition-transform cursor-pointer duration-300"
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
                    {sns.map((sn, index) => (
                      <Link
                        key={index}
                        href={sn.url}
                        className="flex items-center p-2 border-2 border-slate-700  gap-2 hover:bg-slate-700 transition-colors duration-300 hover:text-slate-200"
                      >
                        <div className="text-xl">{sn.icon}</div>
                        <div className="text-xs">{sn.name}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
            <Card emoji="📝" title="Latest Article">
              {latestArticles ? (
                <Link
                  href={`/blogs/${latestArticles.id}`}
                  className="flex flex-col sm:flex-row border-2 border-slate-700 overflow-hidden sm:items-center hover:shadow-sm transition-shadow relative"
                >
                  <img
                    width={400}
                    height={200}
                    src={latestArticles.image}
                    alt={latestArticles.title}
                    className="sm:h-32 aspect-[1.91] object-cover bg-slate-700"
                  />
                  <time className="text-xs px-2 py-0.5  text-slate-200 bg-slate-700 absolute top-2 left-2">
                    {latestArticles.date}
                  </time>
                  <div className="flex flex-col p-4 gap-2 truncate">
                    <h3 className="text-lg font-bold text-slate-700 truncate">
                      {latestArticles.title}
                    </h3>
                    <p className="text-sm text-slate-600 truncate">{latestArticles.description}</p>
                    <ul className="flex gap-2">
                      {latestArticles.tags.map((tag) => (
                        <li
                          key={tag}
                          className="inline-block px-1.5 py-0.5 text-xs bg-slate-700 text-slate-200 "
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              ) : (
                <p>記事がありません</p>
              )}

              <Link
                href="/blogs"
                className="p-2 border-2 text-sm border-slate-700 items-center gap-2 inline-flex  mt-4 hover:bg-slate-700 transition-colors duration-300 hover:text-slate-200"
              >
                <FaRegFileAlt className="text-xl" />
                記事一覧
              </Link>
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_2fr] lg:grid-cols-[2fr_4fr_3fr]">
            <Card emoji="✏️" title="Skills">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <img
                      width={32}
                      height={32}
                      src={skill.image}
                      alt={skill.name}
                      className="w-8 h-8"
                    />
                  </div>
                ))}
              </div>
            </Card>
            <Card emoji="⭐" title="Works">
              <div className="grid sm:grid-cols-[1fr_1fr_1fr] gap-2">
                {works.map((work, index) => (
                  <Link href={work.url} key={index} className="border-2 border-slate-700">
                    <h3 className="text-sm font-bold text-slate-200 bg-slate-700 px-2 h-14 flex items-center">
                      {work.title}
                    </h3>
                    <p className="text-xs text-slate-600 p-2">{work.description}</p>
                  </Link>
                ))}
              </div>
              <Link
                href="/works"
                className="p-2 border-2 text-sm border-slate-700 items-center gap-2 inline-flex  mt-4 hover:bg-slate-700 transition-colors duration-300 hover:text-slate-200"
              >
                <FaRegStar className="text-xl" />
                作品一覧
              </Link>
            </Card>
            <Card emoji="🏅" title="Qualifications" className="sm:col-span-2 lg:col-span-1">
              <ul>
                <li>全珠連 珠算検定 参段</li>
                <li>全珠連 暗算検定 準四段</li>
                <li>実用数学技能検定 準1級</li>
                <li>ITパスポート (2020年度春)</li>
                <li>応用情報技術者 (2024年度秋)</li>
              </ul>
            </Card>
          </div>
          <Card emoji="🚶‍♂️" title="Experience">
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
          </Card>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1fr]">
            <Card emoji="📍" title="Activities">
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
            </Card>
            <Card emoji="🎶" title="Hobby">
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
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
