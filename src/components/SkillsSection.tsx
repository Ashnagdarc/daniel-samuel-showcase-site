
import { useEffect, useRef } from 'react';

const SkillsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

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

  // Duplicate skills for infinite scroll
  const duplicatedSkills = [...skills, ...skills, ...skills];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position when we've scrolled through one complete set
      if (scrollPosition >= scrollContainer.scrollWidth / 3) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pause animation on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

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

        <div className="overflow-hidden mask-gradient">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden"
            style={{ width: 'fit-content' }}
          >
            {duplicatedSkills.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="flex-shrink-0 w-48 p-6 text-center bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg hover:bg-card/70 hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {skill.icon}
                </div>
                <h3 className="font-semibold group-hover:text-primary transition-colors duration-200">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
