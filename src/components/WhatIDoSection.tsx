
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const WhatIDoSection = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const services = [
    {
      id: 'web-dev',
      title: 'Web Development',
      description: 'Creating responsive and interactive web applications using modern frameworks like React, Next.js, and TypeScript. Building scalable solutions with clean, maintainable code.',
      icon: '🌐'
    },
    {
      id: 'mobile-dev',
      title: 'Mobile Development',
      description: 'Developing cross-platform mobile applications with React Native and Progressive Web Apps (PWAs) that provide native-like experiences across all devices.',
      icon: '📱'
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Design & Prototyping',
      description: 'Designing user-centered interfaces and creating interactive prototypes using Figma, Adobe XD, and modern design principles to ensure optimal user experience.',
      icon: '🎨'
    },
  ];

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            What I <span className="text-gradient">Do?</span>
          </h2>
        </div>

        <div className="space-y-4">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="border border-border/50 rounded-lg overflow-hidden bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <button
                onClick={() => toggleService(service.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-primary/5 transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{service.icon}</span>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </div>
                <ChevronDown 
                  className={`h-5 w-5 transition-transform duration-200 ${
                    expandedService === service.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  expandedService === service.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4 pl-14">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDoSection;
