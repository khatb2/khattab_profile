import Hero from '@/components/sections/hero';
import VisionMission from '@/components/sections/vision-mission';
import Solutions from '@/components/sections/solutions';
import SuccessStories from '@/components/sections/success-stories';
import HowIWork from '@/components/sections/how-i-work';
import WhyIStandOut from '@/components/sections/why-i-stand-out';
import Contact from '@/components/sections/contact';
import Faq from '@/components/sections/faq';
import { profileData } from '@/lib/data';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Executive Identity */}
      <Hero data={profileData.personalInfo} />
      {/* Vision & Mission */}
      <VisionMission data={profileData.visionAndMission} />
      {/* What I Execute (Services) */}
      <Solutions data={profileData.solutions} />
      {/* Results & Impact (Case Studies) */}
      <SuccessStories />
      {/* How I Work */}
      <HowIWork data={profileData.howItWorks} />
      {/* Why I Stand Out */}
      <WhyIStandOut />
      {/* Contact */}
      <Contact data={profileData.contactInfo} />
      <Faq data={profileData.faq} />
    </div>
  );
}