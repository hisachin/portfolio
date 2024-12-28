import { Github, Linkedin, Mail } from 'lucide-react';
import { SkillChart } from './SkillChart';

export function Hero() {
  return (
    <section 
      aria-label="Introduction"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-dark via-slate-900 to-brand-accent/20 dark:from-slate-100 dark:via-white dark:to-brand-accent/10"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 left-0 w-72 h-72 bg-brand-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-72 h-72 bg-brand-accent/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="flex-1 space-y-10">
            <header className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-primary/10 dark:bg-brand-accent/10">
                <span className="text-brand-primary dark:text-brand-accent font-medium tracking-wider text-sm">
                  Full Stack Developer
                </span>
              </div>
              
              <div className="relative">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-gradient bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">
                  Crafting Digital
                  <br />
                  Excellence
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary/20 via-brand-secondary/20 to-brand-accent/20 blur-xl opacity-50 animate-glow"></div>
              </div>

              <h2 className="text-2xl md:text-3xl text-slate-300 dark:text-slate-700 font-light">
                8+ Years of Innovation & Enterprise Solutions
              </h2>
            </header>
            
            <p className="text-lg md:text-xl text-slate-400 dark:text-slate-600 max-w-xl leading-relaxed">
              Architecting scalable cloud-native applications with modern technologies.
              Delivering enterprise-grade solutions through MERN stack expertise, cloud platforms,
              and DevOps excellence.
            </p>

            <div className="flex flex-col space-y-8">
              <div className="flex gap-4">
                {[
                  { 
                    icon: <Github className="transition-transform group-hover:scale-110" />, 
                    href: 'https://github.com/hisachin',
                    label: 'GitHub Profile',
                    title: 'View GitHub Profile'
                  },
                  { 
                    icon: <Linkedin className="transition-transform group-hover:scale-110" />, 
                    href: 'https://linkedin.com/in/sachinjswl',
                    label: 'LinkedIn Profile',
                    title: 'Connect on LinkedIn'
                  },
                  { 
                    icon: <Mail className="transition-transform group-hover:scale-110" />, 
                    href: 'mailto:sachinjswl2@gmail.com',
                    label: 'Email Contact',
                    title: 'Send Email'
                  }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    title={social.title}
                    className="group p-4 rounded-2xl bg-slate-800/50 dark:bg-slate-200/50 hover:bg-brand-primary/20 dark:hover:bg-brand-primary/20 text-slate-300 dark:text-slate-700 hover:text-brand-primary dark:hover:text-brand-primary transition-all duration-300 hover:-translate-y-1"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-brand-primary text-white rounded-xl hover:bg-brand-primary/90 transition-colors font-medium shadow-lg shadow-brand-primary/20 hover:shadow-xl hover:shadow-brand-primary/30"
                >
                  Get in Touch
                </a>
                <a
                  href="#projects"
                  className="px-8 py-4 border-2 border-slate-600 dark:border-slate-400 text-slate-300 dark:text-slate-700 rounded-xl hover:border-brand-primary hover:text-brand-primary transition-all duration-300 hover:scale-[1.02]"
                >
                  View Projects
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-xl">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-slate-900/50 dark:bg-white/50 backdrop-blur-sm rounded-2xl p-6">
                <SkillChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}