"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import type { BlogPost } from "@/lib/blog";

interface BlogSearchProps {
  posts: BlogPost[];
}

export default function BlogSearch({ posts }: BlogSearchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // URLパラメータから初期値を設定
  useEffect(() => {
    const query = searchParams.get("q") || "";
    const tagsParam = searchParams.get("tags") || "";
    setSearchQuery(query);
    setSelectedTags(tagsParam ? tagsParam.split(",") : []);
  }, [searchParams]);

  // URLパラメータを更新する関数
  const updateUrl = (query: string, tags: string[]) => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (tags.length > 0) params.set("tags", tags.join(","));
    const newUrl = params.toString() ? `?${params.toString()}` : "/blogs";
    router.replace(newUrl, { scroll: false });
  };

  // 検索クエリ変更時の処理
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    updateUrl(value, selectedTags);
  };

  // タグ選択/選択解除の処理
  const handleTagToggle = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(newTags);
    updateUrl(searchQuery, newTags);
  };

  // すべてのタグを取得
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach((post) => {
      post.tags.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, [posts]);

  // フィルタリングされた投稿
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchLower) ||
        post.excerpt.toLowerCase().includes(searchLower) ||
        post.content.toLowerCase().includes(searchLower) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchLower));

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((selectedTag) => post.tags.includes(selectedTag));

      return matchesSearch && matchesTags;
    });
  }, [posts, searchQuery, selectedTags]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
    updateUrl("", []);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">ブログ</h1>

      {/* 検索とフィルタのコントロール */}
      <div className="mb-8 space-y-4">
        {/* 検索バー */}
        <div>
          <input
            type="text"
            placeholder="記事を検索..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* タグ選択エリア */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">タグで絞り込み:</h3>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagToggle(tag)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  selectedTags.includes(tag)
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* アクティブなフィルタの表示とクリア */}
        {(searchQuery || selectedTags.length > 0) && (
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="text-gray-600">アクティブなフィルタ:</span>
            {searchQuery && (
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                検索: &quot;{searchQuery}&quot;
              </span>
            )}
            {selectedTags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 rounded-full"
              >
                #{tag}
                <button
                  onClick={() => handleTagToggle(tag)}
                  className="hover:text-green-900 ml-1"
                  title="このタグを削除"
                >
                  ×
                </button>
              </span>
            ))}
            <button
              onClick={clearFilters}
              className="px-2 py-1 text-gray-500 hover:text-gray-700 underline"
            >
              全てクリア
            </button>
          </div>
        )}

        {/* 結果数の表示 */}
        <div className="text-sm text-gray-600">
          {filteredPosts.length}件の記事
          {filteredPosts.length !== posts.length && ` (全${posts.length}件中)`}
        </div>
      </div>

      {/* 記事一覧 */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">
            {searchQuery || selectedTags.length > 0
              ? "条件に一致する記事が見つかりませんでした。"
              : "まだブログ投稿がありません。"}
          </p>
          {(searchQuery || selectedTags.length > 0) && (
            <button onClick={clearFilters} className="text-blue-600 hover:text-blue-800 underline">
              フィルタをクリアして全ての記事を表示
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <article key={post.slug} className="border-b border-gray-200 pb-6">
              <h2 className="text-2xl font-semibold mb-2">
                <Link
                  href={`/blogs/${post.slug}`}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>

              <div className="text-gray-500 text-sm mb-3">
                {new Date(post.date).toLocaleDateString("ja-JP", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>

              <p className="text-gray-700 mb-3">{post.excerpt}</p>

              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => handleTagToggle(tag)}
                      className={`px-2 py-1 text-xs rounded-full transition-colors cursor-pointer ${
                        selectedTags.includes(tag)
                          ? "bg-blue-100 text-blue-800 hover:bg-blue-200"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
