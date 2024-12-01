import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SkillChart } from './SkillChart';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-dark via-slate-900 to-brand-accent/20 dark:from-slate-100 dark:via-white dark:to-brand-accent/10">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <span className="text-brand-primary dark:text-brand-accent font-semibold tracking-wider uppercase">
                Full Stack Developer
              </span>
              <div className="relative">
                <h1 className="text-5xl md:text-7xl font-bold animate-gradient bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">
                  Crafting Digital
                  <br />
                  Excellence
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary/20 via-brand-secondary/20 to-brand-accent/20 blur-lg opacity-50 animate-glow"></div>
              </div>
              <h2 className="text-2xl md:text-3xl text-slate-300 dark:text-slate-700 font-light">
                8+ Years of Innovation & Expertise
              </h2>
            </div>
            
            <p className="text-lg text-slate-400 dark:text-slate-600 max-w-xl animate-float">
              Specialized in building scalable cloud-native applications with modern technologies.
              From concept to deployment, I bring ideas to life using MERN stack, cloud platforms,
              and DevOps best practices.
            </p>

            <div className="flex gap-6">
              {[
                { 
                  icon: <Github size={24} />, 
                  href: 'https://github.com/hisachin',
                  label: 'GitHub Profile'
                },
                { 
                  icon: <Linkedin size={24} />, 
                  href: 'https://linkedin.com/in/sachinjswl',
                  label: 'LinkedIn Profile'
                },
                { 
                  icon: <Mail size={24} />, 
                  href: 'mailto:sachinjswl2@gmail.com',
                  label: 'Email Contact'
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-3 rounded-lg bg-slate-800/50 dark:bg-slate-200/50 hover:bg-brand-primary/20 dark:hover:bg-brand-primary/20 text-slate-300 dark:text-slate-700 hover:text-brand-primary dark:hover:text-brand-primary transition-all duration-300 transform hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-primary/90 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-slate-600 dark:border-slate-400 text-slate-300 dark:text-slate-700 rounded-lg hover:border-brand-primary hover:text-brand-primary transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
          
          <div className="flex-1">
            <SkillChart />
          </div>
        </div>
      </div>
    </section>
  );
}