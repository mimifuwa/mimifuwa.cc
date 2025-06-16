import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import { works } from "../data";

export function ProjectsSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            🚀 プロジェクト
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl">これまでに作ってきたものの一部です</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {works.map((work) => (
            <div
              key={work.title}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project image */}
              <div className="relative overflow-hidden bg-gray-100 h-48 sm:h-56">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>

              {/* Project content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors">
                  {work.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                  {work.description}
                </p>

                {/* Project links */}
                <div className="flex gap-3 sm:gap-4">
                  <Link
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-xs sm:text-sm font-medium flex-1 justify-center"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    <span>Visit</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more projects */}
        <div className="text-center">
          <Link
            href="https://github.com/mimifuwa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium text-sm sm:text-base"
          >
            <FaGithub className="text-base sm:text-lg" />
            <span className="hidden xs:inline">GitHubで他のプロジェクトを見る</span>
            <span className="xs:hidden">GitHub</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
