import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomeSection from '@/components/sections/HomeSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import EducationSection from '@/components/sections/EducationSection';
import InteractiveSectionsRow from '@/components/sections/InteractiveSectionsRow';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 min-h-dvh">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <HomeSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <InteractiveSectionsRow />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

