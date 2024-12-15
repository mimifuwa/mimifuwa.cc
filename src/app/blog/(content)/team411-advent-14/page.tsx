import * as MDXFile from "@/content/blog/team411-advent-14/page.mdx";

import { BlogLayout } from "@/layouts/Blog";

export function generateMetadata() {
  return {
    title: MDXFile.meta.title,
    description: MDXFile.meta.description,
    openGraph: {
      type: "website",
      title: MDXFile.meta.title,
      description: MDXFile.meta.description,
      url: "https://mimifuwa.cc/",
      siteName: "みみちゃんの部屋",
      images: {
        url: `https://mimifuwa.cc/images/blog/${MDXFile.meta.id}/ogp.png`,
        type: "image/png",
        width: 1200,
        height: 630,
      },
    },
    twitter: {
      title: MDXFile.meta.title,
      description: MDXFile.meta.description,
      images: {
        url: `https://mimifuwa.cc/images/blog/${MDXFile.meta.id}/ogp.png`,
        type: "image/png",
        width: 1200,
        height: 630,
      },
      card: "summary",
    },
  };
}

export default function Page() {
  return (
    <>
      <BlogLayout meta={MDXFile.meta}>
        <MDXFile.default />
      </BlogLayout>
    </>
  );
}
