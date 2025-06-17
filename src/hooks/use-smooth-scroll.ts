import { useCallback } from "react";

export const useSmoothScroll = () => {
  const scrollToElement = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      // ヘッダーの高さ（64px）+ マージン（20px）
      const yOffset = -84;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  return { scrollToElement };
};
