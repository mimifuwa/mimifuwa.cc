"use client";

import { skills } from "../data";

const skillCategories = [
  { key: "languages", title: "Languages", emoji: "💻", color: "blue" },
  { key: "frameworks", title: "Frameworks", emoji: "⚡", color: "green" },
  { key: "tools", title: "Tools", emoji: "🛠️", color: "purple" },
] as const;

export function SkillsSection() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            ✨ スキル & ツール
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl">普段使っている技術スタックです</p>
        </div>

        {/* Skills by category */}
        <div className="space-y-6">
          {skillCategories.map((category) => (
            <div key={category.key}>
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10">
                <div className="flex items-center mb-4 border-gray-200 sm:pb-6">
                  <span className="text-2xl mr-3">{category.emoji}</span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                    {category.title}
                  </h3>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6">
                  {skills[category.key].map((skill, index) => (
                    <div
                      key={skill.name}
                      className="group flex flex-col items-center p-3 pt-4 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="relative mb-3 sm:mb-4">
                        <img
                          src={skill.image}
                          alt={skill.name}
                          width={48}
                          height={48}
                          className="w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-700 text-center leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
