import Hero from '@/components/sections/hero';
import VisionMission from '@/components/sections/vision-mission';
import Experience from '@/components/sections/experience';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import EducationAndCourses from '@/components/sections/education-and-courses';
import Contact from '@/components/sections/contact';
import Faq from '@/components/sections/faq';
import { profileData } from '@/lib/data';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero data={profileData.personalInfo} />
      <VisionMission data={profileData.visionAndMission} />
      <Experience data={{ public: profileData.experience_public, private: profileData.experience_private }} />
      <Skills data={profileData.skills} />
      <Projects data={profileData.projects} />
      <EducationAndCourses education={profileData.education} courses={profileData.courses} languages={profileData.languages} />
      <Contact data={profileData.contactInfo} />
      <Faq data={profileData.faq} />
    </div>
  );
}
