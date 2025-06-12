
import { Card } from '@/components/ui/card';

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
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What I <span className="text-gradient">Work With</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={skill.name}
              className="p-6 text-center hover:scale-105 transition-transform duration-200 bg-card/50 backdrop-blur-sm border-border/50"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="font-semibold">{skill.name}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
