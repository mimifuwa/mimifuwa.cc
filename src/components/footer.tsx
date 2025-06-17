import Link from "next/link";
import { FaGithub, FaHeart, FaTwitter } from "react-icons/fa";
import { SiZenn } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">mimifuwa.cc</h3>
            <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
              電気通信大学でコンピュータサイエンスを学びながら、
              Web技術を使って面白いものを作っています。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="#about-section"
                  className="text-gray-400 hover:text-white transition-colors text-base sm:text-lg"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-gray-400 hover:text-white transition-colors text-base sm:text-lg"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/mimifuwa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-base sm:text-lg"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="https://zenn.dev/mimifuwa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-base sm:text-lg"
                >
                  Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Connect</h3>
            <div className="flex gap-4 sm:gap-6">
              <Link
                href="https://github.com/mimifuwa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl sm:text-2xl" />
              </Link>
              <Link
                href="https://twitter.com/mimifuwa_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="text-xl sm:text-2xl" />
              </Link>
              <Link
                href="https://zenn.dev/mimifuwa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Zenn"
              >
                <SiZenn className="text-xl sm:text-2xl" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 sm:pt-10 text-center">
          <p className="text-gray-400 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base">
            <span>© 2025 mimifuwa.cc</span>
            <span className="hidden sm:inline">-</span>
            <span className="flex items-center gap-1 sm:gap-2">
              Made with <FaHeart className="text-red-500" /> and Next.js
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
