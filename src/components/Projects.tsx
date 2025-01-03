import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Portfolio',
    description: 'Single Page Portifolio Website using React.js and Tailwind CSS.',
    image: 'https://raw.githubusercontent.com/hisachin/portfolio/refs/heads/main/public/hero_image.png',
    tech: ['React', 'Tailwind'],
    github: 'https://github.com',
    live: 'https://hisachin.github.io/portfolio'
  },
  {
    title: 'ChatHive',
    description: 'Chat With Your Docs',
    image: 'https://raw.githubusercontent.com/hisachin/chathive/refs/heads/master/public/images/main_desktop.png',
    tech: ['Next.js', 'Nodejs','LLM','RAG','OpenAI','Langchain','HuggiingFace','Pinecone','MongoDB','OAuth'],
    github: 'https://github.com/hisachin/chathive',
    live: 'https://github.com/hisachin/chathive'
  },
  {
    title: 'BuildMVP',
    description: 'NextJS Boilerplate to build MVP within 3 days.',
    image: 'https://raw.githubusercontent.com/hisachin/portfolio/refs/heads/main/public/buildmvp.png',
    tech: ['NextJS', 'NodeJS', 'Vercel', 'Taillwind','OAuth'],
    github: 'https://github.com/hisachin/nextjs-saas-boilerplate',
    live: 'https://buildmvp.aidevguru.com/'
  },
  {
    title: 'Aigency',
    description: 'AI Agent Development',
    image: 'https://raw.githubusercontent.com/hisachin/portfolio/refs/heads/main/public/aigency.png',
    tech: ['ReactJs', 'Nodejs','LLM','RAG','OpenAI'],
    github: 'https://github.com/hisachin/aigency',
    live: 'https://aigency-virid.vercel.app/'
  },
  {
    title: 'MyNotes',
    description: 'Simple Notes Application to take notes on your system.',
    image: 'https://raw.githubusercontent.com/hisachin/portfolio/refs/heads/main/public/mynotes.png',
    tech: ['ReactJs', 'Nodejs','Vercel'],
    github: 'https://github.com/hisachin/my-notes_app',
    live: 'https://my-notes-app-sigma.vercel.app/'
  },
  {
    title: 'Nyroboard',
    description: 'Whiteboard Collaboration Application',
    image: 'https://raw.githubusercontent.com/hisachin/portfolio/refs/heads/main/public/nyroboard.png',
    tech: ['ReactJs', 'Nodejs','OAuth'],
    github: 'https://github.com/hisachin/nyroboard',
    live: 'https://hisachin.github.io/nyroboard/'
  }
];

export function Projects() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 dark:from-gray-100 dark:to-white" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white dark:text-gray-900 mb-16">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-900 dark:bg-white shadow-xl transition-transform hover:-translate-y-2"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white dark:text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-400 dark:text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-teal-400/10 text-teal-400 dark:bg-teal-600/10 dark:text-teal-600 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="text-gray-400 hover:text-white dark:text-gray-600 dark:hover:text-gray-900 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={project.live}
                    className="text-gray-400 hover:text-white dark:text-gray-600 dark:hover:text-gray-900 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
