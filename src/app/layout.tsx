import type { Metadata, Viewport } from "next";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { fonts } from "@/lib/fonts";

import "./globals.css";

const appName = "みみちゃんの部屋";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${fonts.map((font) => font.variable).join(" ")} bg-[url(/bg.png)] bg-[#BABABA]`}
    >
      <body className="text-slate-700 font-normal font-bold">
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
