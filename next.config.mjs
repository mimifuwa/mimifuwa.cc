import withMDX from "@next/mdx";

const mdxConfig = withMDX({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["mdx", "jsx", "js", "ts", "tsx"],
  reactStrictMode: true,
  experimental: {
    mdxRs: true,
  },
};

export default mdxConfig(nextConfig);
