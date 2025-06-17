---
title: "Claude Code Proを契約した"
date: "2025-06-17"
slug: "claude-code-pro"
excerpt: "Claude Code Proを契約して何か作りたかったのでサイトをアップデートしました"
tags: ["技術"]
---

こんにちは、みみです。

## Claude Code Proを契約した

技術界隈でClaude Code Proが流行っていた（気がする）ので、契約してみることにしました。

### セットアップ

とりあえず、インストールしてみます。

```bash
pnpm install -g @anthropic-ai/claude-code
```

~~npmパッケージでしか入れられないのが気に食わないですね。~~

ついでに、利用状況を可視化できるツール（ccusage）も入れておきます。

```bash
pnpm install -g ccusage
```

https://zenn.dev/ryoppippi/articles/6c9a8fe6629cd6

### Pro Plan 契約

Proでは

> 会話が比較的短い場合（約200の英語文、1文あたり約15-20語と仮定）、5時間ごとに約45メッセージを送信できることが期待でき、Claudeの現在の容量によってはそれ以上になることもよくあります。

らしいです。とりあえず契約してみます。

![Pro Plan](/images/blogs/claude-code-pro/claude-pro.png)

契約しました。月20ドル(約2800円)です。
最初買った時は高く感じましたが、使っていると結構安いことに気づきました。

## 使ってみる

早速使ってみました。このサイトのアップデートをさせてみたところ結構いい感じにやってくれました。

2日使ってみてこんな感じです（値段が破格な気がします）。

![使用状況](/images/blogs/claude-code-pro/usage.png)
