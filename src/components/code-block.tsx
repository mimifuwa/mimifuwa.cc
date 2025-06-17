"use client";

import hljs from "highlight.js";
import { useEffect, useRef, useState } from "react";

interface CodeBlockProps {
  content: string;
}

export default function CodeBlock({ content }: CodeBlockProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  useEffect(() => {
    if (contentRef.current) {
      // URLをリンクカードに変換
      const urlRegex =
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
      const walker = document.createTreeWalker(contentRef.current, NodeFilter.SHOW_TEXT, null);

      const textNodes: Text[] = [];
      let node;
      while ((node = walker.nextNode())) {
        if (node.nodeType === Node.TEXT_NODE && node.textContent) {
          textNodes.push(node as Text);
        }
      }

      textNodes.forEach((textNode) => {
        const text = textNode.textContent || "";
        if (urlRegex.test(text)) {
          const parent = textNode.parentNode;
          if (parent && parent.nodeName !== "A" && parent.nodeName !== "CODE") {
            const newHTML = text.replace(urlRegex, (url) => {
              const domain = new URL(url).hostname.replace("www.", "");
              return `<div class="link-card my-6 p-4 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <a href="${url}" target="_blank" rel="noopener noreferrer" class="block no-underline">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="text-sm font-medium text-gray-900 truncate">${domain}</div>
                      <div class="text-xs text-gray-500 truncate">${url}</div>
                    </div>
                  </div>
                </a>
              </div>`;
            });

            const wrapper = document.createElement("div");
            wrapper.innerHTML = newHTML;
            parent.replaceChild(wrapper, textNode);
          }
        }
      });

      // すべてのコードブロックにシンタックスハイライトを適用
      const codeBlocks = contentRef.current.querySelectorAll("pre code");
      codeBlocks.forEach((block, index) => {
        // 明示的にスタイルを設定
        const codeElement = block as HTMLElement;
        codeElement.style.background = "#1e293b";
        codeElement.style.color = "#f1f5f9";
        codeElement.style.padding = "1.5rem";
        codeElement.style.borderRadius = "0.75rem";
        codeElement.style.fontSize = "0.875rem";
        codeElement.style.lineHeight = "1.7";
        codeElement.style.display = "block";
        codeElement.style.overflowX = "auto";

        // preタグのスタイルも設定
        const pre = block.parentElement as HTMLElement;
        if (pre) {
          pre.style.background = "#1e293b";
          pre.style.padding = "0";
          pre.style.margin = "2rem 0";
          pre.style.border = "1px solid #475569";
          pre.style.borderRadius = "0.75rem";
          pre.style.overflow = "hidden";
        }

        hljs.highlightElement(codeElement);

        // コピーボタンを追加
        if (pre && !pre.querySelector(".copy-button")) {
          const copyButton = document.createElement("button");
          const blockId = `code-block-${index}`;
          copyButton.className =
            "copy-button absolute top-3 right-3 p-2 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded-md text-sm transition-colors duration-200 opacity-0 group-hover:opacity-100";
          copyButton.style.zIndex = "var(--z-dropdown)";
          copyButton.innerHTML =
            copiedId === blockId
              ? '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'
              : '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>';

          copyButton.addEventListener("click", () => {
            copyToClipboard(block.textContent || "", blockId);
          });

          pre.style.position = "relative";
          pre.classList.add("group");
          pre.appendChild(copyButton);
        }
      });
    }
  }, [content, copiedId]);

  // コピー状態が変わったときにボタンのアイコンを更新
  useEffect(() => {
    if (contentRef.current) {
      const copyButtons = contentRef.current.querySelectorAll(".copy-button");
      copyButtons.forEach((button, index) => {
        const blockId = `code-block-${index}`;
        button.innerHTML =
          copiedId === blockId
            ? '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'
            : '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>';
      });
    }
  }, [copiedId]);

  return (
    <div
      ref={contentRef}
      className="prose prose-lg prose-slate max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-h4:text-lg prose-h4:mt-5 prose-h4:mb-2 prose-h5:text-base prose-h5:mt-4 prose-h5:mb-2 prose-h6:text-sm prose-h6:mt-4 prose-h6:mb-2 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-700 prose-strong:text-gray-900 prose-em:text-gray-700 prose-em:italic prose-del:text-gray-500 prose-del:line-through prose-code:text-pink-600 prose-code:bg-pink-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-200 prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:italic prose-ul:my-6 prose-ol:my-6 prose-li:my-2 prose-ul:list-disc prose-ol:list-decimal prose-ul>li:marker:text-blue-500 prose-ol>li:marker:text-blue-500 prose-hr:border-gray-300 prose-hr:my-8 prose-table:border-collapse prose-table:border prose-table:border-gray-300 prose-th:border prose-th:border-gray-300 prose-th:bg-gray-50 prose-th:px-4 prose-th:py-2 prose-th:font-semibold prose-td:border prose-td:border-gray-300 prose-td:px-4 prose-td:py-2"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
