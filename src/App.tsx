import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { About } from './components/About';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-gray-900 dark:bg-gray-100 transition-colors duration-300">
        <Navigation />
        <Hero />
        <About/>
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;