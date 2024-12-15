import type { MDXComponents } from "mdx/types";

import styles from "@/styles/article.module.css";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    h2: (props) => <h2 {...props} className={styles.sectionTitle} />,
    h3: (props) => <h3 {...props} className={styles.subsectionTitle} />,
    p: (props) => <p {...props} className={styles.paragraph} />,
    code: (props) => (
      <div className={styles.codeBlock}>
        <code {...props} />
      </div>
    ),
    ...components,
    blockquote: (props) => (
      <blockquote {...props} className={styles.quote} />
    ),
  };
}
