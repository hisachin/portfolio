import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-20 bg-gray-900" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Get In Touch</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-300 mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="flex justify-center gap-8">
            <a
              href="mailto:sachinjswl2@gmail.com"
              className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors"
            >
              <Mail className="w-6 h-6" />
              <span>Email</span>
            </a>
            <a
              href="https://linkedin.com/in/sachinjswl"
              className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/hisachin"
              className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors"
            >
              <Github className="w-6 h-6" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}