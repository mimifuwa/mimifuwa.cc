import Content, { meta } from "@/content/blog/20241214/page.mdx";

import { BlogLayout } from "@/layouts/Blog";

export default function Page() {
  return (
    <>
      <BlogLayout meta={meta}>
        <Content />
      </BlogLayout>
    </>
  );
}
