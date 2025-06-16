import { Suspense } from "react";

import BlogSearch from "@/components/blog-search";
import { getAllPosts } from "@/lib/blog";

function BlogContent() {
  const posts = getAllPosts();
  return <BlogSearch posts={posts} />;
}

export default function Page() {
  return (
    <Suspense fallback={<div className="max-w-4xl mx-auto px-4 py-8">読み込み中...</div>}>
      <BlogContent />
    </Suspense>
  );
}
