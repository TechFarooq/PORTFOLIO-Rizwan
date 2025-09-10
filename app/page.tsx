import { HeroSection } from '@/components/sections/hero-section';
import { SkillsRadar } from '@/components/sections/skills-radar';
import { TechStackSwitcher } from '@/components/sections/tech-stack-switcher';
import { Timeline } from '@/components/sections/timeline';
import { ProjectsSection } from '@/components/sections/projects';
import { ContactSection } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { RizwanBot } from '@/components/sections/chatbot';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SkillsRadar />
      <TechStackSwitcher />
      <Timeline />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <RizwanBot />
    </main>
  );
}