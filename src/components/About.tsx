import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Node.js",
  "Tailwind CSS",
  "Python",
  "PostgreSQL",
  "Git",
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 flex items-center gap-4">
            <span className="text-primary">01.</span>
            About Me
            <span className="h-px bg-border flex-1 ml-4" />
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm Prajwal, a passionate developer who loves creating 
                things that live on the internet. My interest in web development 
                started back when I first discovered how websites work, and I've 
                been hooked ever since.
              </p>
              <p>
                Fast-forward to today, I've had the privilege of working on 
                various projects ranging from small business websites to complex 
                web applications. My main focus these days is building accessible, 
                inclusive products and digital experiences.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or expanding my knowledge 
                through online courses and tech communities.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">
                Technologies I've been working with:
              </h3>
              <ul className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <span className="text-primary text-sm">▹</span>
                    {skill}
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-10 relative w-64 h-64 mx-auto md:mx-0"
              >
                <div className="absolute inset-0 rounded-xl bg-primary/20 translate-x-4 translate-y-4" />
                <div className="relative w-full h-full rounded-xl glass overflow-hidden border-2 border-primary/30 flex items-center justify-center">
                  <span className="text-6xl font-heading font-bold text-gradient">PN</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
