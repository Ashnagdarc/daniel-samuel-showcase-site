
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SkillsSection = () => {
  const skills = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'HTML5', icon: '🏗️' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'JavaScript', icon: '💛' },
    { name: 'Git', icon: '🔄' },
    { name: 'Supabase', icon: '⚡' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'Bash', icon: '💻' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-scale-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            What I <span className="text-gradient">Work With</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-150">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="relative px-12 animate-slide-in-right">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {skills.map((skill, index) => (
                <CarouselItem key={skill.name} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Card
                    className="p-6 text-center hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 hover:glow group cursor-pointer"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                      {skill.icon}
                    </div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors duration-200">
                      {skill.name}
                    </h3>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hover:scale-110 transition-transform duration-200" />
            <CarouselNext className="hover:scale-110 transition-transform duration-200" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
