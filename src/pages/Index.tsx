
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WhatIDoSection from '@/components/WhatIDoSection';
import SkillsSection from '@/components/SkillsSection';

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navigation />
      <main className="animate-fade-in">
        <HeroSection />
        <WhatIDoSection />
        <SkillsSection />
      </main>
    </div>
  );
};

export default Index;
