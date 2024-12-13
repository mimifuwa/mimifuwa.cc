import type React from "react";

import styles from "./Blog.module.css";

import type { BlogMeta } from "@/app/types/BlogMeta";

import Image from "next/image";

interface Props {
  children: React.ReactNode;
  meta: BlogMeta;
}

export const BlogLayout: React.FC<Props> = ({ children, meta }) => {
  return (
    <>
      <div className={styles.titleSection}>
        <p className={styles.date}>{meta.date}</p>
        <h1 className={styles.title}>{meta.title}</h1>
        <p className={styles.description}>{meta.description}</p>
        {meta.tags.length > 0 && (
          <ul className={styles.tags}>
            {meta.tags.map((tag) => (
              <li key={tag} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>
        )}
        {meta.cover && (
          <Image
            className={styles.cover}
            src={`/images/blog/${meta.id}/${meta.cover}`}
            alt=""
            width={1980}
            height={1980}
          />
        )}
      </div>
      <div>{children}</div>
    </>
  );
};
