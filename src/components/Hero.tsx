import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[hsl(260,100%,65%)]/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-medium mb-4 tracking-wider"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-4"
          >
            Prajwal Nayak
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-muted-foreground mb-8"
          >
            I build things for the web.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
          >
            I'm a passionate developer focused on building exceptional digital experiences. 
            Currently, I'm creating innovative web applications that combine beautiful design 
            with powerful functionality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center gap-6"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:glow transition-all duration-300 hover:scale-105"
            >
              View My Work
            </a>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/PrajwalNayak04"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:hello@prajwal.dev"
                className="p-3 rounded-lg glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown size={28} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
