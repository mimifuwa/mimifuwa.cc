import Link from "next/link";

import { getAllPosts } from "@/lib/blog";

export function BlogPreviewSection() {
  const recentPosts = getAllPosts().slice(0, 6);

  if (recentPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            📝 最新のブログ記事
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl">技術やプロジェクトについて書いています</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-6 sm:p-8">
                <div className="text-xs sm:text-sm text-gray-500 mb-3">
                  {new Date(post.date).toLocaleDateString("ja-JP", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3 items-center">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className="text-xs text-gray-400">+{post.tags.length - 3}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm sm:text-base"
          >
            <span>すべての記事を見る</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
