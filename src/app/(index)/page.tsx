import { AboutSection } from "./_components/about-section";
import { BlogPreviewSection } from "./_components/blog-preview";
import { HeroSection } from "./_components/hero-section";
import { LinksSection } from "./_components/links-section";
import { ProjectsSection } from "./_components/projects-section";
import { SkillsSection } from "./_components/skills-section";

export default function Page() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <BlogPreviewSection />
      <LinksSection />
    </>
  );
}
