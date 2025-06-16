---
title: "Next.js 15の新機能"
date: "2024-02-15"
slug: "nextjs-guide"
excerpt: "Next.js 15で追加された新機能について詳しく解説します。"
tags: ["nextjs", "react", "ssr", "performance"]
---

# Next.js 15の新機能

Next.js 15では多くの新機能が追加され、パフォーマンスが大幅に向上しました。

## 主な新機能

### 1. Turbopack（stable）

開発サーバーがさらに高速化されました。

```bash
pnpm dev --turbopack
```

### 2. 改善されたServer Components

Server Componentsの安定性とパフォーマンスが向上しました。

### 3. Enhanced Image Optimization

画像最適化がさらに強化され、自動的に最適なフォーマットを選択します。

```jsx
import Image from "next/image";

export default function MyImage() {
  return <Image src="/hero.jpg" alt="Hero" width={800} height={600} priority />;
}
```

## パフォーマンス向上

- バンドルサイズの削減
- ビルド時間の短縮
- ランタイムパフォーマンスの改善
