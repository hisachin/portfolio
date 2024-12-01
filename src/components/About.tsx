import React from 'react';

export function About() {
  return (
    <section id='about' className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-dark via-slate-900 to-brand-accent/20 dark:from-slate-100 dark:via-white dark:to-brand-accent/10">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 relative max-w-[320px] aspect-square animate-float">
            <img
              src="https://pbs.twimg.com/profile_images/1565024514115006464/S2GHz63M_400x400.jpg"
              alt="about sachin"
              className="w-64 h-64 object-cover transition-transform group-hover:scale-110 rounded-full"
            />
          </div>
          <div className="flex-1 text-left">
            <p className="text-lg text-slate-400 dark:text-slate-600 w-full">
              With 8 years of experience in the tech industry, I’ve had the privilege of wearing many hats, from crafting dynamic web applications as a full-stack MERN developer to streamlining workflows with DevOps practices.</p>
            <p className="text-lg text-slate-400 dark:text-slate-600 w-full mt-2">My journey began with a passion for building efficient systems, which evolved into a deep dive into cloud platforms like AWS and GCP, where I specialize in architecting scalable and secure solutions.</p>
            <p className="text-lg text-slate-400 dark:text-slate-600 w-full mt-2">
              Over the years, I’ve honed my skills in designing intuitive applications, optimizing CI/CD pipelines, and implementing best practices in security to ensure systems are robust and future-ready. Whether it’s solving complex challenges or collaborating on innovative projects, I’m driven by a commitment to deliver impactful, technology-driven solutions that make a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}