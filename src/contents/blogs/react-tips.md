---
title: "React開発のコツ"
date: "2024-02-01"
slug: "react-tips"
excerpt: "React開発で役立つTipsとベストプラクティスを紹介します。"
tags: ["react", "javascript", "frontend", "tips"]
---

# React開発のコツ

React開発でよく使われるテクニックやベストプラクティスをまとめました。

## 1. カスタムフック

よく使う処理はカスタムフックにまとめましょう。

```jsx
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
```

## 2. memo でパフォーマンス最適化

不要な再レンダリングを防ぐためにReact.memoを活用しましょう。

```jsx
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* 重い処理 */}</div>;
});
```

## 3. エラーバウンダリー

予期しないエラーをキャッチするためにエラーバウンダリーを設置しましょう。
