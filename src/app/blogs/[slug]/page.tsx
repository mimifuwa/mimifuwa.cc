import Link from "next/link";
import { notFound } from "next/navigation";

import CodeBlock from "@/components/code-block";
import TableOfContents from "@/components/table-of-contents";
import { extractHeadings, getAllSlugs, getPostBySlug, markdownToHtml } from "@/lib/blog";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const contentHtml = await markdownToHtml(post.content);
  const headings = extractHeadings(post.content);

  return (
    <div className="min-h-screen pb-12 bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-4">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link
          href="/blogs"
          className="group inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-10 transition-all duration-200 hover:gap-3"
        >
          <svg
            className="w-4 h-4 transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          ブログ一覧に戻る
        </Link>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* 目次 - スマホでは上に表示、デスクトップでは右に表示 */}
          <div className="lg:hidden">
            <TableOfContents headings={headings} />
          </div>

          {/* メインコンテンツ */}
          <article className="flex-1 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <header className="px-8 py-10 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-100">
              <div className="mb-6">
                <time className="inline-flex items-center gap-2 text-gray-600 text-sm font-medium bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-200">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {new Date(post.date).toLocaleDateString("ja-JP", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                {post.title}
              </h1>

              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-medium rounded-full shadow-sm hover:shadow-md transition-shadow"
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            <div className="px-8 py-10">
              <CodeBlock content={contentHtml} />
            </div>
          </article>

          {/* 目次 - デスクトップでは右側に表示 */}
          <div className="hidden lg:block lg:w-80 flex-shrink-0">
            <TableOfContents headings={headings} />
          </div>
        </div>
      </div>
    </div>
  );
}
