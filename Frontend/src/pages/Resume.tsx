
import ResumeHero from "../components/resume/ResumeHero";
import CareerStory from "../components/resume/CareerStory";
import ExperienceTimeline from "../components/resume/ExperienceTimeLine";
import EducationSection from "../components/resume/EducationSection";
import CertificationSection from "../components/resume/CertificationSection";
import SkillsSection from "../components/resume/SkillsSection";
import ProjectShowcase from "../components/resume/ProjectShowcase";

const Resume = () => {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16">
      <div className="mx-auto max-w-7xl space-y-16">

        <ResumeHero />

        <CareerStory />

        <ExperienceTimeline />

        <EducationSection />

        <CertificationSection />

        <SkillsSection />

        <ProjectShowcase />

      </div>
    </main>
  );
};

export default Resume;
