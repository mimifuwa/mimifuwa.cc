"use client";

import { useEffect, useState } from "react";

import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import type { Heading } from "@/lib/blog";

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const { scrollToElement } = useSmoothScroll();

  useEffect(() => {
    if (headings.length === 0) return;

    const updateActiveHeading = () => {
      // 見出し要素を取得し、存在しないものは除外
      const headingElements = headings
        .map((heading) => {
          const element = document.getElementById(heading.id);
          return element ? { ...heading, element } : null;
        })
        .filter(Boolean) as Array<Heading & { element: HTMLElement }>;

      if (headingElements.length === 0) {
        console.warn(
          "見出し要素が見つかりません:",
          headings.map((h) => h.id)
        );
        return;
      }

      const scrollPosition = window.scrollY + 120; // ヘッダー高さを考慮

      // 現在のスクロール位置より上にある見出しの中で最も下にあるものを見つける
      let activeHeading = headingElements[0];

      for (const headingData of headingElements) {
        const elementTop = headingData.element.offsetTop;
        if (elementTop <= scrollPosition) {
          activeHeading = headingData;
        } else {
          break;
        }
      }

      if (activeHeading.id !== activeId) {
        setActiveId(activeHeading.id);
      }
    };

    // DOM読み込み完了後に実行
    const timer = setTimeout(() => {
      updateActiveHeading();
    }, 200);

    // スクロールイベントリスナー（throttled）
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateActiveHeading();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headings, activeId]);

  const scrollToHeading = (id: string) => {
    scrollToElement(id);
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className="sticky top-24" style={{ zIndex: "var(--z-sticky)" }}>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <svg
            className="w-5 h-5 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
          目次
        </h3>
        <ul className="space-y-2">
          {headings.map((heading, index) => (
            <li key={`${heading.id}-${index}`}>
              <button
                onClick={() => scrollToHeading(heading.id)}
                className={`block w-full text-left transition-all duration-200 rounded-r-lg px-3 py-2 text-sm hover:bg-blue-50 hover:text-blue-700 ${
                  activeId === heading.id
                    ? "bg-blue-50 text-blue-700 border-l-4 border-blue-500 font-medium"
                    : "text-gray-600 hover:text-gray-900 border-l-4 border-transparent"
                }`}
                style={{
                  paddingLeft: `${0.75 + (heading.level - 2) * 0.75}rem`,
                }}
              >
                {heading.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
