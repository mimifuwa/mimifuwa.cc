import { useEffect, useState } from "react";

interface OGPData {
  title?: string;
  description?: string;
  image?: string;
  url: string;
  error?: string;
}

interface LinkCardProps {
  url: string;
  title?: string;
  description?: string;
}

export default function LinkCard({ url, title, description }: LinkCardProps) {
  const [ogpData, setOgpData] = useState<OGPData | null>(null);
  const [loading, setLoading] = useState(true);

  const hostname = new URL(url).hostname.replace("www.", "");

  useEffect(() => {
    const fetchOGP = async () => {
      try {
        const response = await fetch(`/api/ogp?url=${encodeURIComponent(url)}`);
        const data = await response.json();
        setOgpData(data);
      } catch (error) {
        console.error("Failed to fetch OGP data:", error);
        setOgpData({ url, title: hostname });
      } finally {
        setLoading(false);
      }
    };

    if (!title && !description) {
      fetchOGP();
    } else {
      setOgpData({ url, title, description });
      setLoading(false);
    }
  }, [url, title, description, hostname]);

  const displayTitle = ogpData?.title || title || hostname;
  const displayDescription = ogpData?.description || description;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: "none",
      }}
      className="group block bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 my-4 no-underline"
    >
      <div className="p-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-500 rounded-xl flex items-center justify-center flex-shrink-0">
            {loading ? (
              <div className="animate-spin w-6 h-6 border-2 border-white border-t-transparent rounded-full" />
            ) : (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {loading ? "Loading..." : displayTitle}
            </span>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="truncate">{hostname}</span>
              <svg
                className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </div>
        </div>
        {displayDescription && (
          <span className="text-gray-600 leading-relaxed">{displayDescription}</span>
        )}
      </div>
    </a>
  );
}
