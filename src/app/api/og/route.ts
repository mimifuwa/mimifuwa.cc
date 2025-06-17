import { NextRequest } from "next/server";
import { createElement } from "react";
import satori from "satori";

import { getPostBySlug } from "@/lib/blog";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return new Response("Missing slug parameter", { status: 400 });
  }

  const post = getPostBySlug(slug);

  if (!post) {
    return new Response("Post not found", { status: 404 });
  }

  const svg = await satori(
    createElement(
      "div",
      {
        style: {
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          fontFamily: "system-ui, sans-serif",
        },
      },
      [
        // Header
        createElement(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "40px",
            },
          },
          createElement(
            "div",
            {
              style: {
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                padding: "12px 24px",
                color: "white",
                fontSize: "20px",
                fontWeight: "500",
              },
            },
            "mimifuwa.cc"
          )
        ),
        // Main Content
        createElement(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255, 255, 255, 0.95)",
              borderRadius: "24px",
              padding: "60px",
              margin: "20px",
              maxWidth: "800px",
              textAlign: "center",
            },
          },
          [
            createElement(
              "h1",
              {
                style: {
                  fontSize: "48px",
                  fontWeight: "700",
                  color: "#1f2937",
                  lineHeight: "1.2",
                  margin: "0 0 20px 0",
                  textAlign: "center",
                },
              },
              post.title
            ),
            createElement(
              "p",
              {
                style: {
                  fontSize: "24px",
                  color: "#6b7280",
                  lineHeight: "1.5",
                  margin: "0 0 30px 0",
                  textAlign: "center",
                },
              },
              post.excerpt
            ),
            // Tags
            ...(post.tags.length > 0
              ? [
                  createElement(
                    "div",
                    {
                      style: {
                        display: "flex",
                        gap: "12px",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        marginBottom: "20px",
                      },
                    },
                    post.tags.map((tag, index) =>
                      createElement(
                        "span",
                        {
                          key: index,
                          style: {
                            background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                            color: "white",
                            padding: "8px 16px",
                            borderRadius: "20px",
                            fontSize: "16px",
                            fontWeight: "500",
                          },
                        },
                        `#${tag}`
                      )
                    )
                  ),
                ]
              : []),
            // Date
            createElement(
              "div",
              {
                style: {
                  fontSize: "18px",
                  color: "#9ca3af",
                  fontWeight: "500",
                },
              },
              new Date(post.date).toLocaleDateString("ja-JP", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            ),
          ]
        ),
        // Footer
        createElement(
          "div",
          {
            style: {
              position: "absolute",
              bottom: "30px",
              right: "30px",
              display: "flex",
              alignItems: "center",
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: "16px",
            },
          },
          createElement(
            "div",
            {
              style: {
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                padding: "8px 16px",
              },
            },
            "ブログ記事"
          )
        ),
      ]
    ),
    {
      width: 1200,
      height: 630,
      fonts: [],
    }
  );

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
