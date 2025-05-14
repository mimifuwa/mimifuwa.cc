import Link from "next/link";
import React from "react";

export interface ZennArticle {
  id: string;
  title: string;
  path: string;
  article_type: string;
  liked_count: number;
  published_at: string;
}

type Props = {
  articles: ZennArticle[];
};

export function ZennArticleList({ articles }: Props) {
  return (
    <ul className="flex flex-col gap-y-3 w-full">
      {articles.slice(0, 5).map((article) => (
        <li key={article.id}>
          <Link
            href={`https://zenn.dev${article.path}`}
            className="flex flex-row items-center gap-2 w-full border-2 border-slate-700 p-3"
          >
            <img
              src="https://static.zenn.studio/images/logo-transparent.png"
              alt="Zenn Logo"
              className="w-8 h-8 mx-2"
            />
            <div>
              <p className="text-xs text-gray-500">
                {new Date(article.published_at).toLocaleDateString("ja-JP", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </p>
              <h3 className="text-lg font-bold">{article.title}</h3>
              <div className="flex flex-row items-center gap-2 mt-1">
                <span className="text-xs bg-slate-700 px-1 py-0.5 text-slate-200">
                  {article.article_type === "tech" ? "Tech" : "Idea"}
                </span>
                <span className="text-xs text-gray-500">{article.liked_count} Likes</span>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
