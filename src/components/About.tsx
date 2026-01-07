import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const skills = [
  "Core Java",
  "HTML",
  "CSS",
  "JavaScript",
  "SQL",
  "PHP",
];

const softSkills = [
  "Problem-Solving",
  "Adaptability",
  "Communication",
  "Team Collaboration",
];

const education = [
  {
    institution: "University of Mumbai",
    degree: "B.Sc. in Information Technology",
    period: "2022 – 2025",
    location: "Mumbai, India",
    details: "Overall Percentage: 71.50%",
  },
  {
    institution: "MVM Junior College of Commerce",
    degree: "Higher Secondary Education",
    period: "2022",
    details: "Percentage: 80.83%",
  },
  {
    institution: "St. Anthony's High School",
    degree: "Secondary School Education",
    period: "2020",
    details: "Percentage: 73.60%",
  },
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
                Hello! I'm Prajwal, a B.Sc. IT graduate from the University of Mumbai 
                with a passion for web development. My journey in tech started with 
                exploring how websites work, and I've been building digital experiences ever since.
              </p>
              <p>
                I've worked on various projects including a banking system during my 
                internship at The Sparks Foundation and a food delivery platform as 
                my final year project. I'm always eager to learn new technologies 
                and improve my skills.
              </p>
              <p>
                <strong className="text-foreground">Achievement:</strong> Maintained consistent 
                academic performance with strong semester-wise CGPA throughout my course.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">
                Technical Skills:
              </h3>
              <ul className="grid grid-cols-2 gap-3 mb-8">
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

              <h3 className="text-lg font-semibold mb-6">
                Professional Skills:
              </h3>
              <ul className="grid grid-cols-2 gap-3">
                {softSkills.map((skill, index) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.1 * index + 0.4, duration: 0.4 }}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <span className="text-primary text-sm">▹</span>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-heading font-bold mb-8 flex items-center gap-4">
              <span className="text-primary">Education</span>
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 * index + 0.6, duration: 0.4 }}
                  className="glass rounded-xl p-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h4 className="text-lg font-semibold">{edu.institution}</h4>
                    <span className="text-primary text-sm">{edu.period}</span>
                  </div>
                  <p className="text-muted-foreground">{edu.degree}</p>
                  {edu.location && (
                    <p className="text-muted-foreground text-sm">{edu.location}</p>
                  )}
                  <p className="text-primary text-sm mt-2">{edu.details}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
