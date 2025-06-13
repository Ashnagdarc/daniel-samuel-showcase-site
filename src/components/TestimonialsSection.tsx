
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'John Smith',
      company: 'TechCorp',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      text: 'Daniel absolutely nailed it! His professionalism in website development made the process smooth and enjoyable.'
    },
    {
      name: 'Sarah Johnson',
      company: 'DesignStudio',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',
      text: 'Expert developer! He built a scalable, high-performing platform with seamless features. Highly recommended!'
    },
    {
      name: 'Mike Wilson',
      company: 'StartupLab',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      text: "We've had an amazing experience with Daniel - excellent communication, efficiency, and a deep understanding of our goals."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-muted-foreground mb-4">Custom Applications</h2>
            <h3 className="text-2xl font-bold text-muted-foreground mb-4">UI/UX Design</h3>
            <h4 className="text-2xl font-bold text-muted-foreground">Front-End Development</h4>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            What our <span className="text-gradient">clients</span> say
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            With hundreds of websites completed, I bring a proven track record of developing
            websites and delivering exceptional solutions for clients across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card/40 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:bg-card/60 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-muted-foreground">{testimonial.text}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <Button variant="outline" size="icon" className="rounded-full">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
