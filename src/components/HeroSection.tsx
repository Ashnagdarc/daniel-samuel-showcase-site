
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SpaceBackground from './SpaceBackground';
import PlanetSphere from './PlanetSphere';
import ProfileCard from './ProfileCard';

const HeroSection = () => {
  const handleContactClick = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Space Background */}
      <SpaceBackground />
      
      {/* Planet at bottom */}
      <PlanetSphere />
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-transparent to-background/60 z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-30">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in">
                Your website <br />
                <span className="text-gradient">brought to life</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl animate-fade-in animation-delay-300">
                Leading full stack developer specializing in modern web development, providing affordable and reliable
                website development solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animation-delay-500">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 transition-all duration-300">
                <Link to="/projects">
                  See our work
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black transition-all duration-300">
                Get a quote
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6 animate-fade-in animation-delay-700">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-white transition-all duration-300 hover:scale-125"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-white transition-all duration-300 hover:scale-125"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:daniel@example.com"
                className="text-muted-foreground hover:text-white transition-all duration-300 hover:scale-125"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right side - Profile Card */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right animation-delay-800">
            <ProfileCard
              name="Daniel Samuel"
              title="Software Developer"
              handle="danielsamuel"
              status="Available for work"
              contactText="Contact Me"
              avatarUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
              onContactClick={handleContactClick}
              enableTilt={true}
              showUserInfo={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
