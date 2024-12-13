import * as MDXFile from "@/content/blog/20241214/page.mdx";

import { BlogLayout } from "@/layouts/Blog";

export default function Page() {
  return (
    <>
      <BlogLayout meta={MDXFile.meta}>
        <MDXFile.default />
      </BlogLayout>
    </>
  );
}
