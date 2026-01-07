import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard. Built with performance and scalability in mind.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "#",
    external: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative project management tool featuring real-time updates, drag-and-drop functionality, and team collaboration features. Designed for maximum productivity.",
    tech: ["TypeScript", "React", "Socket.io", "MongoDB"],
    github: "#",
    external: "#",
  },
  {
    title: "AI Content Generator",
    description:
      "An intelligent content creation platform that leverages AI to help users generate high-quality articles, social media posts, and marketing copy.",
    tech: ["Python", "OpenAI", "FastAPI", "React"],
    github: "#",
    external: "#",
  },
];

const otherProjects = [
  {
    title: "Weather Dashboard",
    description: "A beautiful weather application with location-based forecasts and interactive maps.",
    tech: ["React", "OpenWeather API", "Chart.js"],
    github: "#",
    external: "#",
  },
  {
    title: "Portfolio Template",
    description: "A customizable portfolio template for developers with dark mode and animations.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    github: "#",
    external: "#",
  },
  {
    title: "Budget Tracker",
    description: "Personal finance management app with expense categorization and visual analytics.",
    tech: ["React", "Firebase", "Recharts"],
    github: "#",
    external: "#",
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 flex items-center gap-4">
            <span className="text-primary">02.</span>
            Things I've Built
            <span className="h-px bg-border flex-1 ml-4" />
          </h2>

          {/* Featured Projects */}
          <div className="mt-16 space-y-24">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                className={`relative grid md:grid-cols-12 gap-4 items-center ${
                  index % 2 === 1 ? "md:text-right" : ""
                }`}
              >
                <div
                  className={`md:col-span-7 ${
                    index % 2 === 1 ? "md:col-start-6" : ""
                  }`}
                >
                  <div className="glass rounded-xl p-8 glow-sm hover:glow transition-all duration-500">
                    <p className="text-primary text-sm mb-2 font-medium">Featured Project</p>
                    <h3 className="text-2xl font-heading font-bold mb-4">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <ul className={`flex flex-wrap gap-3 mb-6 ${index % 2 === 1 ? "md:justify-end" : ""}`}>
                      {project.tech.map((tech) => (
                        <li
                          key={tech}
                          className="text-sm text-primary bg-primary/10 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <div className={`flex gap-4 ${index % 2 === 1 ? "md:justify-end" : ""}`}>
                      <a
                        href={project.github}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={22} />
                      </a>
                      <a
                        href={project.external}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={22} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="mt-32">
            <h3 className="text-2xl font-heading font-bold text-center mb-12">
              Other Noteworthy Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * index + 0.5, duration: 0.4 }}
                  className="glass rounded-xl p-6 hover:-translate-y-2 hover:glow-sm transition-all duration-300 group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <Folder className="text-primary" size={40} />
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.external}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  <h4 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <li key={tech} className="text-xs text-muted-foreground">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
