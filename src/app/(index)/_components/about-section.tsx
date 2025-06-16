import Link from "next/link";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { SiZenn } from "react-icons/si";

import { GithubContributions } from "./contributions";

export function AboutSection() {
  return (
    <section id="about-section" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            👋 About Me
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
            私について、もう少し詳しく
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left side - Profile info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 mb-8">
                <img
                  src="/icon.webp"
                  alt="mimifuwa"
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-blue-100 shadow-md flex-shrink-0"
                  width={112}
                  height={112}
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">みみ</h3>
                  <p className="text-gray-600 mb-2 text-lg">Kimimichi Shioiri</p>
                  <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                    電気通信大学 情報理工学域
                    <br />
                    CSプログラム
                  </p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8 text-base sm:text-lg">
                フロントエンド開発を中心に、Web技術を使って便利で面白いアプリケーションを作ることが好きです。
                大学では学生団体team411でプロジェクトマネージャーとして活動し、
                大学と社会の課題解決に取り組んでいます。
              </p>

              {/* Social links */}
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
                <Link
                  href="https://github.com/mimifuwa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 sm:px-5 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm sm:text-base font-medium"
                >
                  <FaGithub />
                  <span className="hidden xs:inline">GitHub</span>
                </Link>
                <Link
                  href="https://twitter.com/mimifuwa_dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 sm:px-5 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base font-medium"
                >
                  <FaTwitter />
                  <span className="hidden xs:inline">Twitter</span>
                </Link>
                <Link
                  href="https://zenn.dev/mimifuwa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 sm:px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base font-medium"
                >
                  <SiZenn />
                  <span className="hidden xs:inline">Zenn</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Qualifications */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10">
            <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">🏅 資格・検定</h4>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center gap-3 text-sm sm:text-base">
                <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                応用情報技術者 (2024年度秋)
              </li>
              <li className="flex items-center gap-3 text-sm sm:text-base">
                <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                ITパスポート (2020年度春)
              </li>
              <li className="flex items-center gap-3 text-sm sm:text-base">
                <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                実用数学技能検定 準1級
              </li>
              <li className="flex items-center gap-3 text-sm sm:text-base">
                <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                全珠連 珠算検定 参段
              </li>
              <li className="flex items-center gap-3 text-sm sm:text-base">
                <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                全珠連 暗算検定 準四段
              </li>
            </ul>
          </div>

          {/* Right side - GitHub contributions */}
          <div className="mt-8 lg:mt-0">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10">
              <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-6 sm:mb-8 flex items-center gap-3">
                📈 Recent Activities
              </h4>
              <GithubContributions />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
