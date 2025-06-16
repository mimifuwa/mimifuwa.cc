---
title: "TypeScript ベストプラクティス"
date: "2024-03-01"
slug: "typescript-best-practices"
excerpt: "TypeScriptを効果的に使うためのベストプラクティスとパターン集。"
tags: ["typescript", "javascript", "types", "best-practices"]
---

# TypeScript ベストプラクティス

TypeScriptを効果的に活用するためのベストプラクティスをまとめました。

## 1. 型定義のベストプラクティス

### Union Types を活用する

```typescript
type Status = "loading" | "success" | "error";

interface ApiResponse<T> {
  status: Status;
  data?: T;
  error?: string;
}
```

### Utility Types を使う

```typescript
// Partial で一部のプロパティを任意にする
type UpdateUser = Partial<User>;

// Pick で必要なプロパティだけ選択
type UserSummary = Pick<User, "id" | "name">;

// Omit で不要なプロパティを除外
type CreateUser = Omit<User, "id" | "createdAt">;
```

## 2. 関数の型定義

```typescript
// ジェネリクスを使った再利用可能な関数
function fetchData<T>(url: string): Promise<T> {
  return fetch(url).then((res) => res.json());
}

// 関数オーバーロード
function format(value: string): string;
function format(value: number): string;
function format(value: string | number): string {
  return String(value);
}
```

## 3. エラーハンドリング

```typescript
type Result<T, E = Error> = { success: true; data: T } | { success: false; error: E };

async function safeApiCall<T>(apiCall: () => Promise<T>): Promise<Result<T>> {
  try {
    const data = await apiCall();
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error : new Error("Unknown error"),
    };
  }
}
```
