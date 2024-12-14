import type { Metadata, Viewport } from "next";

import { Patua_One, Noto_Sans_JP } from "next/font/google";

import clsx from "clsx";

const PatuaOne = Patua_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-patua-one",
});

const NotoSansJP = Noto_Sans_JP({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

const NotoSansJP600 = Noto_Sans_JP({
  weight: "600",
  subsets: ["latin"],
  variable: "--font-noto-sans-jp-bold",
});

const appName = "みみちゃんの部屋";

import "reset-css";

import "./general.css";

export const metadata: Metadata = {
  title: {
    template: `%s - ${appName}`,
    default: appName,
  },
  description: "うさぎさんが生息しています",
  openGraph: {
    type: "website",
    title: appName,
    description: "うさぎさんが生息しています",
    siteName: appName,
    url: "https://mimifuwa.cc/",
    images: {
      url: "https://mimifuwa.cc/assets/ogp.png",
      type: "image/png",
      width: 1200,
      height: 630,
    },
  },
  twitter: {
    title: appName,
    description: "うさぎさんが生息しています",
    images: {
      url: "https://mimifuwa.cc/assets/ogp.png",
      type: "image/png",
      width: 1200,
      height: 630,
    },
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  userScalable: false,
  viewportFit: "cover",
};

// set fonts variable to css var

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={clsx(
          PatuaOne.variable,
          NotoSansJP.variable,
          NotoSansJP600.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
