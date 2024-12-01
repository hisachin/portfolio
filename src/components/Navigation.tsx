import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all ${
      isScrolled ? 'bg-slate-900/95 dark:bg-white/95 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-bold text-white dark:text-slate-900">Sachin's Portfolio</a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#skills" className="text-slate-300 dark:text-slate-600 hover:text-white dark:hover:text-slate-900 transition-colors">Skills</a>
            <a href="#projects" className="text-slate-300 dark:text-slate-600 hover:text-white dark:hover:text-slate-900 transition-colors">Projects</a>
            <a href="#experience" className="text-slate-300 dark:text-slate-600 hover:text-white dark:hover:text-slate-900 transition-colors">Experience</a>
            <a href="#contact" className="text-slate-300 dark:text-slate-600 hover:text-white dark:hover:text-slate-900 transition-colors">Contact</a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              className="text-white dark:text-slate-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#skills"
                className="block px-3 py-2 text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-200 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-200 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#experience"
                className="block px-3 py-2 text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-200 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-200 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}