import type { Metadata, Viewport } from "next";

import { Patua_One, Noto_Sans_JP } from "next/font/google";

import clsx from "clsx";

export const PatuaOne = Patua_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-patua-one",
});

export const NotoSansJP = Noto_Sans_JP({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const NotoSansJP600 = Noto_Sans_JP({
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
