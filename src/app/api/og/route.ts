import fs from "fs";
import path from "path";

import { NextRequest } from "next/server";
import { createElement } from "react";
import satori from "satori";

import { getPostBySlug } from "@/lib/blog";

export const runtime = "nodejs";

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

  // ローカルのNoto Sans JPフォントを使用
  const normalFontPath = path.join(process.cwd(), "public/fonts/NotoSansJP-Regular.ttf");
  const normalFontData = fs.readFileSync(normalFontPath);

  const boldFontPath = path.join(process.cwd(), "public/fonts/NotoSansJP-Bold.ttf");
  const boldFontData = fs.readFileSync(boldFontPath);

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
          fontFamily: "Noto Sans JP, sans-serif",
          padding: "2rem",
        },
      },
      [
        // Main Content
        createElement(
          "div",
          {
            style: {
              display: "flex",
              width: "100%",
              height: "100%",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255, 255, 255, 0.95)",
              borderRadius: "24px",
              textAlign: "center",
            },
          },
          [
            createElement(
              "h1",
              {
                style: {
                  fontSize: "64px",
                  fontWeight: "bolder",
                  color: "#1f2937",
                  lineHeight: "1.2",
                  margin: "0 0 20px 0",
                  padding: "0 4rem",
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
                  padding: "0 4rem",
                  textAlign: "center",
                },
              },
              post.excerpt
            ),
            createElement(
              "p",
              {
                style: {
                  fontSize: "36px",
                  color: "#6b7280",
                  lineHeight: "1.5",
                  fontWeight: "bold",
                  textAlign: "center",
                },
              },
              "mimifuwa.cc"
            ),
            // Tags
            ...(post.tags.length > 0
              ? [
                  createElement(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        top: "2rem",
                        left: "2rem",
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
                            borderRadius: "1rem",
                            fontSize: "1.5rem",
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
                  position: "absolute",
                  bottom: "2rem",
                  right: "2rem",
                  fontSize: "1.5rem",
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
      fonts: [
        {
          name: "Noto Sans JP",
          data: normalFontData,
          weight: 400,
          style: "normal",
        },
        {
          name: "Noto Sans JP",
          data: boldFontData,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
