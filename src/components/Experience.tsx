import React from 'react';

const experiences = [
  {
    period: '2024 - Present',
    role: 'Consultant',
    company: 'Rakuten',
    description: 'Developing cloud-native LMS applications using MERN stack and microservices architecture.'
  },
  {
    period: '2020 - 2023',
    role: 'Member of Technical Staff',
    company: 'Oracle',
    description: 'Worked on Oracle for Startup And OCSM Product. Build Different Module on OCSM using React.js, Node.js and Python and Deployed it on OCI.'
  },
  {
    period: '2018 - 2020',
    role: 'Full Stack Developer',
    company: 'Edufied',
    description: 'Developed and maintained blockchain baased web applications using React, Node.js, and MongoDB and deployed on AWS.'
  },
  {
    period: '2016 - 2018',
    role: 'Software Engineer',
    company: '247around',
    description: 'Build after sales CRM using React, Node.js, and MongoDB and deployed on AWS.'
  }
];

export function Experience() {
  return (
    <section className="py-20 bg-gray-800" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Professional Journey</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              <div className="absolute left-0 top-0 h-full w-0.5 bg-teal-400"></div>
              <div className="absolute left-[-4px] top-2 w-3 h-3 rounded-full bg-teal-400"></div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <span className="text-teal-400 font-medium">{exp.period}</span>
                <h3 className="text-xl font-bold text-white mt-1">{exp.role}</h3>
                <p className="text-gray-400 mt-1">{exp.company}</p>
                <p className="text-gray-300 mt-3">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}