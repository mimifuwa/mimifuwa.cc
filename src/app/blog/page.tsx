import cardStyles from "@/styles/card.module.css";
import articleStyles from "@/styles/article.module.css";

import fs from "node:fs";
import path from "node:path";
import meta from "gray-matter";

import Link from "next/link";

import Image from "next/image";

import clsx from "clsx";

export default function Home() {
  const contentDirectory = path.join(process.cwd(), "src/content/blog");

  function getBlogList() {
    const fileNames = fs.readdirSync(contentDirectory, { withFileTypes: true });
    const allPostData = fileNames.map((fileName) => {
      if (fileName.isDirectory()) {
        const fullPath = path.join(
          contentDirectory,
          fileName.name,
          "/page.mdx"
        );
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const metaRegex = /\{([\s\S]*?)\}/;
        const match = fileContents.match(metaRegex);

        if (match) {
          const metaContent = match[0]
            .replace(/([a-zA-Z0-9_]+):/g, '"$1":')
            .replace(/:\s*(true|false|null)\s*(?=,|\})/g, ": $1")
            .replace(/:\s*(\d+)\s*(?=,|\})/g, ": $1")
            .replace(/:\s*("[^"]*")\s*(?=,|\})/g, ": $1")
            .replace(/,\s*}/, "}");
          // 末尾のカンマを削除

          console.log(metaContent);
          const metaObject = JSON.parse(metaContent);
          console.log(metaObject);

          return {
            data: metaObject,
            fileName: fileName.name,
          };
        }
      }
    });
    return allPostData;
  }

  const blogList = getBlogList();
  console.log(blogList);

  return (
    <>
      <section className={articleStyles.section}>
        <h2 className={clsx(articleStyles.sectionTitle, articleStyles.topPage)}>Blog</h2>
        <p className={articleStyles.paragraph}>
          技術を触ったり、オタク（アニメ・音楽）していたり、徒歩をしたりしています。
        </p>
      </section>

      <div className={cardStyles.cardList}>
        {blogList.map(
          (blog) =>
            blog && (
              <Link
                href={`/blog/${blog.fileName}`}
                key={blog?.fileName}
                className={cardStyles.card}
              >
                <Image
                  src={`/images/blog/${blog.data.id}/${blog.data.cover}`}
                  alt=""
                  width={400}
                  height={400}
                  className={cardStyles.cover}
                />
                <p className={cardStyles.date}>{blog.data.date}</p>
                <h3 className={cardStyles.title}>{blog.data.title}</h3>
                <p className={cardStyles.description}>
                  {blog.data.description}
                </p>
                {
                  <ul className={cardStyles.tags}>
                    {blog.data.tags.map((tag: string) => (
                      <li key={tag} className={cardStyles.tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                }
              </Link>
            )
        )}
      </div>
    </>
  );
}
