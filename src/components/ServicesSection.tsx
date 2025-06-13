
import React from 'react';

const ServicesSection = () => {
  const services = [
    'AI/ML Development',
    'Custom Applications',
    'UI/UX Design',
    'Front-End Development',
    'Back-End Development',
    'Database Design'
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Complete <span className="text-gradient">end-to-end</span> website
            <br />
            development
          </h2>
          
          <div className="text-right">
            <h3 className="text-2xl font-bold mb-4">Services</h3>
            <p className="text-muted-foreground max-w-md ml-auto">
              I offer a range of services that include UI/UX design, front-end and back-end development, and AI/ML.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <div
              key={service}
              className="text-center p-8 rounded-2xl bg-card/20 backdrop-blur-sm border border-border/30 hover:bg-card/40 transition-all duration-500 hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <h3 className="text-2xl font-bold text-muted-foreground/60 hover:text-foreground transition-colors duration-300">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
