import { NextRequest, NextResponse } from "next/server";

interface OGPData {
  title?: string;
  description?: string;
  image?: string;
  url: string;
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "URL parameter is required" }, { status: 400 });
  }

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; OGP-Bot/1.0)",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const html = await response.text();
    const ogpData: OGPData = { url };

    // OGPタグを抽出
    const ogTitleMatch = html.match(/<meta\s+property="og:title"\s+content="([^"]*)"[^>]*>/i);
    const ogDescriptionMatch = html.match(
      /<meta\s+property="og:description"\s+content="([^"]*)"[^>]*>/i
    );
    const ogImageMatch = html.match(/<meta\s+property="og:image"\s+content="([^"]*)"[^>]*>/i);

    // フォールバック: 通常のHTMLタグから抽出
    const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
    const descriptionMatch = html.match(/<meta\s+name="description"\s+content="([^"]*)"[^>]*>/i);

    ogpData.title = ogTitleMatch?.[1] || titleMatch?.[1] || new URL(url).hostname;
    ogpData.description = ogDescriptionMatch?.[1] || descriptionMatch?.[1];
    ogpData.image = ogImageMatch?.[1];

    // 相対URLを絶対URLに変換
    if (ogpData.image && !ogpData.image.startsWith("http")) {
      const baseUrl = new URL(url);
      ogpData.image = new URL(ogpData.image, baseUrl.origin).href;
    }

    return NextResponse.json(ogpData);
  } catch (error) {
    console.error("Error fetching OGP data:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch OGP data",
        url,
        title: new URL(url).hostname,
      },
      { status: 500 }
    );
  }
}
