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

  // 初期化時にアクティブな見出しを設定
  useEffect(() => {
    if (headings.length > 0) {
      const handleInitialScroll = () => {
        const headingElements = headings
          .map((heading) => document.getElementById(heading.id))
          .filter(Boolean) as HTMLElement[];

        const scrollPosition = window.scrollY + 100;

        let activeHeading = headingElements[0];
        for (const element of headingElements) {
          if (element.offsetTop <= scrollPosition) {
            activeHeading = element;
          } else {
            break;
          }
        }

        if (activeHeading) {
          setActiveId(activeHeading.id);
        }
      };

      // DOM が準備できてから実行
      const timer = setTimeout(handleInitialScroll, 100);
      return () => clearTimeout(timer);
    }
  }, [headings]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // 現在表示されている見出しを取得
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (visibleEntries.length > 0) {
          // 最も上に位置する見出しを選択
          const topEntry = visibleEntries.reduce((prev, current) => {
            return prev.boundingClientRect.top < current.boundingClientRect.top ? prev : current;
          });
          setActiveId(topEntry.target.id);
        } else {
          // どの見出しも表示されていない場合、スクロール位置から最適な見出しを推測
          const headingElements = headings
            .map((heading) => document.getElementById(heading.id))
            .filter(Boolean) as HTMLElement[];

          const scrollPosition = window.scrollY + window.innerHeight * 0.3;

          let activeHeading = headingElements[0];
          for (const element of headingElements) {
            if (element.offsetTop <= scrollPosition) {
              activeHeading = element;
            } else {
              break;
            }
          }

          if (activeHeading) {
            setActiveId(activeHeading.id);
          }
        }
      },
      {
        rootMargin: "-10% 0% -60% 0%",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    const handleScroll = () => {
      // スクロール時の追加チェック
      const headingElements = headings
        .map((heading) => document.getElementById(heading.id))
        .filter(Boolean) as HTMLElement[];

      const scrollPosition = window.scrollY + 100;

      let activeHeading = headingElements[0];
      for (const element of headingElements) {
        if (element.offsetTop <= scrollPosition) {
          activeHeading = element;
        } else {
          break;
        }
      }

      if (activeHeading) {
        setActiveId(activeHeading.id);
      }
    };

    // 要素の監視を開始
    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    // スクロールイベントリスナーを追加（throttling付き）
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [headings]);

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
