
import React from 'react';
import { Button } from '@/components/ui/button';

const StatsSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Stats and content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-gradient">Experienced developer</span>
                <br />
                <span className="text-foreground">ready to bring your website to life</span>
              </h2>
            </div>

            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">50+ projects</h3>
                <h4 className="text-xl font-semibold">launched</h4>
                <p className="text-muted-foreground">
                  With over 50 successful projects, I bring experience, creativity, and reliability to every new website.
                </p>
                <Button className="mt-4">
                  Get started now
                </Button>
              </div>
            </div>
          </div>

          {/* Right side - Services cards */}
          <div className="space-y-6">
            <div className="text-right mb-8">
              <h3 className="text-2xl font-bold mb-2">About me</h3>
              <p className="text-muted-foreground">
                I specialize in designing and developing full stack websites with a focus on modern development.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-card/40 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:bg-card/60 transition-all duration-300">
                <h4 className="text-lg font-semibold mb-2">Fullstack development</h4>
                <p className="text-sm text-muted-foreground">
                  I deliver complete solutions, from design to development and deployment, with a proven track record of creating impactful, high-performing websites.
                </p>
              </div>

              <div className="bg-card/40 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:bg-card/60 transition-all duration-300">
                <h4 className="text-lg font-semibold mb-2">Quick delivery</h4>
                <p className="text-sm text-muted-foreground">
                  With over a decade of experience, I deliver innovative, timeless designs with a focus on customer satisfaction and speed.
                </p>
              </div>

              <div className="bg-card/40 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:bg-card/60 transition-all duration-300">
                <h4 className="text-lg font-semibold mb-2">Unlimited revisions</h4>
                <p className="text-sm text-muted-foreground">
                  With unlimited revisions and dedicated support, I ensure your vision and website is brought to life exactly as you imagine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
