import React from 'react';
import {
  Code,
  Database,
  Cloud,
  GitBranch,
  Globe,
  Shield,
  Cpu,
  Settings,
  LineChart
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Backend Development',
    icon: <Code className="w-6 h-6" />,
    skills: [
      { name: 'Node.js', level: 'Expert' },
      { name: 'Express.js', level: 'Expert' },
      { name: 'REST APIs', level: 'Expert' },
      { name: 'Microservices', level: 'Intermediate' }
    ]
  },
  {
    title: 'Frontend Development',
    icon: <Globe className="w-6 h-6" />,
    skills: [
      { name: 'React.js', level: 'Advanced' },
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'Next.js', level: 'Intermediate' },
      { name: 'Tailwind CSS', level: 'Beginner' }
    ]
  },
  {
    title: 'Database Systems',
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: 'MongoDB', level: 'Intermediate' },
      { name: 'MySQL', level: 'Intermediate' },
      { name: 'Redis', level: 'Intermediate' }
    ]
  },
  {
    title: 'Cloud & Infrastructure',
    icon: <Cloud className="w-6 h-6" />,
    skills: [
      { name: 'AWS', level: 'Intermediate' },
      { name: 'GCP', level: 'Intermediate' }
    ]
  },
  {
    title: 'DevOps & CI/CD',
    icon: <Settings className="w-6 h-6" />,
    skills: [
      { name: 'Docker', level: 'Intermediate' },
      { name: 'Kubernetes', level: 'Beginner' },
      { name: 'Jenkins', level: 'Advanced' },
      { name: 'Terraform', level: 'Intermediate' },
    ]
  },
  {
    title: 'System Architecture',
    icon: <Cpu className="w-6 h-6" />,
    skills: [
      { name: 'Microservices', level: 'Intermediate' },
      { name: 'Event-Driven', level: 'Intermediate' },
      { name: 'Serverless', level: 'Intermediate' },
      { name: 'System Design', level: 'Advanced' }
    ]
  },
  {
    title: 'Security & Compliance',
    icon: <Shield className="w-6 h-6" />,
    skills: [
      { name: 'OAuth/JWT', level: 'Advanced' },
      { name: 'Cloud Security', level: 'Advanced' },
      { name: 'OWASP', level: 'Advanced' }
    ]
  },
  {
    title: 'Monitoring & Analytics',
    icon: <LineChart className="w-6 h-6" />,
    skills: [
      { name: 'Prometheus', level: 'Beginner' },
      { name: 'Grafana', level: 'Beginner' },
      { name: 'ELK Stack', level: 'Beginner' },
      { name: 'New Relic', level: 'Beginner' }
    ]
  },
  {
    title: 'Version Control & Tools',
    icon: <GitBranch className="w-6 h-6" />,
    skills: [
      { name: 'Git', level: 'Expert' },
      { name: 'GitHub', level: 'Expert' },
      { name: 'BitBucket', level: 'Expert' },
      { name: 'Jira', level: 'Expert' }
    ]
  }
];

const SkillLevel = ({ level }: { level: string }) => {
  const colors:any = {
    Expert: 'bg-green-400',
    Advanced: 'bg-blue-400',
    Intermediate: 'bg-yellow-400',
    Beginner: 'bg-orange-400'
  };

  return (
    <span className={`px-2 py-1 text-xs rounded-full ${colors[level]} bg-opacity-50 text-${colors[level].replace('bg-', '')}`}>
      {level}
    </span>
  );
};

export function Skills() {
  return (
    <section className="py-20 bg-slate-900" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-4">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 bg-slate-800 rounded-lg hover:bg-slate-750 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-teal-400">{category.icon}</div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-slate-300">{skill.name}</span>
                    <SkillLevel level={skill.level} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}