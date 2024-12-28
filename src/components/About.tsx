export function About() {
  return (
    <section id='about' className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-dark via-slate-900 to-brand-accent/20 dark:from-slate-100 dark:via-white dark:to-brand-accent/10">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto py-16">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 relative max-w-[380px] aspect-square">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent to-brand-dark rounded-full blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
              <img
                src="https://pbs.twimg.com/profile_images/1565024514115006464/S2GHz63M_400x400.jpg"
                alt="about sachin"
                className="relative w-full h-full object-cover rounded-full shadow-2xl transition-all duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          <div className="flex-1 space-y-6">
          <p className="text-lg leading-relaxed text-slate-300 dark:text-slate-700">
              As a Senior Full-Stack Developer and AI Solutions Architect with 8+ years of experience, I specialize in developing AI-powered applications and enterprise-grade web solutions. My expertise includes React.js, Next.js, Node.js, TypeScript, and Python, complemented by extensive experience with AWS and GCP cloud platforms. I've successfully delivered complex projects integrating OpenAI GPT, LangChain for clients across various industries.
            </p>

            <p className="text-lg leading-relaxed text-slate-300 dark:text-slate-700">
              In AI development, I excel at implementing Large Language Models (LLMs), RAG applications, and AI agents using frameworks like LangChain, LlamaIndex, and OpenAI APIs. My solutions include chatbots, content generation systems, document processing pipelines, and AI-powered analytics dashboards. I ensure production-ready implementations with proper testing, monitoring, and scalability considerations.
            </p>

            <p className="text-lg leading-relaxed text-slate-300 dark:text-slate-700">
              I specialize in microservices architecture, web application development, SaaS Development, MVP Development and containerized applications using Docker and Kubernetes. My approach focuses on delivering scalable, maintainable solutions while ensuring optimal performance and cost-effectiveness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}