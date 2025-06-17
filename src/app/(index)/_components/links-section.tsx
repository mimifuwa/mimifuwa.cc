"use client";

import Link from "next/link";

interface LinkItem {
  name: string;
  url: string;
  description: string;
  image?: string;
}

const links: LinkItem[] = [
  {
    name: "kanaru.me",
    url: "https://kanaru.me",
    description: "リロードしないとまともに表示されないサイト。早く直して",
  },
  {
    name: "Keita Ito",
    url: "https://keitaito.net",
    description: "本名はえぐちじゃないらしい",
  },
  {
    name: "Syougo Matsunaga",
    url: "https://portfolio.akaaku.net/",
    description: "令和最新版デザイン。ブログシステム待ってます。",
  },
  {
    name: "かとうのHomePage",
    url: "https://kat0h.com/",
    description: "古き良きデザイン。更新待ってます。",
  },
  {
    name: "はんかくくんのページ",
    url: "https://kqiita.github.io/",
    description: "きーたちゃん♡",
  },
  {
    name: "ゆいのページ",
    url: "https://yuino.dev/",
    description: "ゆいのフレームワークを早く公開してください。",
  },
  {
    name: "へる破壊財団",
    url: "https://helkun.dev/",
    description: "へるーれっとにお世話になっております。",
  },
  {
    name: "あづみのメモ帳",
    url: "https://azumino.pages.dev/",
    description: "一生工事中らしいです。",
  },
  {
    name: "すしのへや",
    url: "https://sushichan.live/",
    description: "技術強すぎ人類。",
  },
  {
    name: "エリンギ@McbeEringi",
    url: "https://mcbeeringi.github.io/",
    description: "Arch Linuxは最高だよね。",
  },
  {
    name: "y-chan's website",
    url: "https://y-chan.dev/",
    description: "可愛いエンジニア。",
  },
];

export function LinksSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">相互リンク</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            知り合いのオタクのサイトたちです
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {link.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="truncate">
                        {new URL(link.url).hostname.replace("www.", "")}
                      </span>
                      <svg
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{link.description}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="https://x.com/mimifuwa_dev"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200"
          >
            <svg
              className="w-5 h-5 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
            <span className="text-blue-700 font-medium">
              相互リンクの追加はTwitterのDMなどへ...
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
