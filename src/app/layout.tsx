import type { Metadata, Viewport } from "next";

const appName = "Bun Template";

export const metadata: Metadata = {
  title: {
    template: `%s - ${appName}`,
    default: appName,
  },
  description: "Bun Template by mimifuwa",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
