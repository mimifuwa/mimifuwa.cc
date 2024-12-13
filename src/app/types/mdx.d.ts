declare module "*.mdx" {
  import type { MDXProps } from "mdx/types";
  export const meta: BlogMeta; // `meta` の型を定義
  let MDXComponent: (props: MDXProps) => JSX.Element;
  export default MDXComponent;
}
