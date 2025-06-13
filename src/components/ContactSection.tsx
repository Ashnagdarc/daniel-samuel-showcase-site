
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let's Build Something <span className="text-gradient">Great Together</span>
          </h2>
        </div>

        <div className="bg-card/30 backdrop-blur-sm rounded-3xl p-12 border border-border/50">
          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
                  1
                </div>
                <div className="w-16 h-px bg-border ml-4"></div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-semibold">
                  2
                </div>
                <div className="w-16 h-px bg-border ml-4"></div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-semibold">
                  3
                </div>
                <div className="w-16 h-px bg-border ml-4"></div>
              </div>
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-semibold">
                4
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-8">Basic Information</h3>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium mb-2 block">First Name *</label>
                <Input 
                  placeholder="John" 
                  className="bg-background/50 border-border/50"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Last Name *</label>
                <Input 
                  placeholder="Doe" 
                  className="bg-background/50 border-border/50"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Email *</label>
              <Input 
                type="email"
                placeholder="example@email.com" 
                className="bg-background/50 border-border/50"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Company Name</label>
                <Input 
                  placeholder="Apple" 
                  className="bg-background/50 border-border/50"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Company Website</label>
                <Input 
                  placeholder="apple.com" 
                  className="bg-background/50 border-border/50"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Project Summary</label>
              <Textarea 
                placeholder="Tell me about your project..."
                className="bg-background/50 border-border/50 min-h-32"
              />
            </div>

            <div className="flex justify-end pt-6">
              <Button size="lg" className="px-8">
                Continue
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
