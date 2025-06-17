import fs from "fs";
import path from "path";

import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "src/contents/blogs");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string;
}

export interface Heading {
  id: string;
  text: string;
  level: number;
}

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const matterResult = matter(fileContents);

      return {
        slug,
        title: matterResult.data.title || "",
        date: matterResult.data.date || "",
        excerpt: matterResult.data.excerpt || "",
        tags: matterResult.data.tags || [],
        content: matterResult.content,
      };
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      slug,
      title: matterResult.data.title || "",
      date: matterResult.data.date || "",
      excerpt: matterResult.data.excerpt || "",
      tags: matterResult.data.tags || [],
      content: matterResult.content,
    };
  } catch {
    return null;
  }
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(remarkGfm)
    /* eslint-disable @typescript-eslint/no-explicit-any */
    .use(() => (tree: any) => {
      // Remove h1 headings and add IDs to remaining headings
      if (tree.children) {
        tree.children = tree.children.filter(
          (node: any) => !(node.type === "heading" && node.depth === 1)
        );

        // Add IDs to headings with uniqueness check
        const usedIds = new Set<string>();
        let headingCounter = 0;

        tree.children.forEach((node: any) => {
          if (node.type === "heading" && node.children && node.children[0]) {
            // h1は除外（記事タイトルなので）
            if (node.depth > 1) {
              const text = node.children[0].value || "";
              headingCounter++;
              const id = generateHeadingId(text, usedIds, headingCounter);

              node.data = node.data || {};
              node.data.hProperties = node.data.hProperties || {};
              node.data.hProperties.id = id;
            }
          }
        });
      }
    })
    .use(html, { sanitize: false })
    .process(markdown);
  /* eslint-enable @typescript-eslint/no-explicit-any */
  return result.toString();
}

export function getAllSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/, ""));
}

// 共通のID生成関数
function generateHeadingId(text: string, usedIds: Set<string>, counter: number): string {
  let id = text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  // 空のIDの場合はデフォルト値を設定
  if (!id) {
    id = `heading-${counter}`;
  }

  // 重複するIDの場合は番号を付加
  let uniqueId = id;
  let duplicateCounter = 1;
  while (usedIds.has(uniqueId)) {
    uniqueId = `${id}-${duplicateCounter}`;
    duplicateCounter++;
  }
  usedIds.add(uniqueId);

  return uniqueId;
}

export function extractHeadings(markdown: string): Heading[] {
  const headings: Heading[] = [];
  const lines = markdown.split("\n");
  const usedIds = new Set<string>();
  let headingCounter = 0;

  for (const line of lines) {
    const match = line.match(/^(#{1,6})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2].trim();

      // h1は除外（記事タイトルなので）
      if (level > 1) {
        headingCounter++;
        const id = generateHeadingId(text, usedIds, headingCounter);
        headings.push({ id, text, level });
      }
    }
  }

  return headings;
}
