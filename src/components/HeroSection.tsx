
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10 animate-pulse"></div>
      
      {/* Animated background elements */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-primary/20 to-transparent opacity-50 rounded-t-full transform scale-150 animate-pulse"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary/30 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-blue-500/30 rounded-full animate-bounce delay-2000"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-purple-500/30 rounded-full animate-bounce delay-3000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground animate-fade-in opacity-0 animation-delay-300">
              Hi, I'm Daniel Samuel
            </p>
            <h1 className="text-5xl md:text-7xl font-bold animate-scale-in opacity-0 animation-delay-500">
              Software <span className="text-gradient animate-pulse">Developer</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in opacity-0 animation-delay-700">
              Transforming ideas into interactive and seamless digital experiences 
              with cutting-edge frontend development.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-right opacity-0 animation-delay-1000">
            <Button asChild size="lg" className="glow hover:scale-105 transition-all duration-300 group">
              <Link to="/projects">
                View My Work 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="hover:scale-105 transition-all duration-300 hover:bg-primary hover:text-primary-foreground">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>

          <div className="flex justify-center space-x-6 pt-8 animate-fade-in opacity-0 animation-delay-1200">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:daniel@example.com"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
