import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Phone, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[hsl(260,100%,65%)]/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative flex-shrink-0"
          >
            <div className="absolute inset-0 rounded-full bg-primary/30 translate-x-3 translate-y-3 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64" />
            <img
              src={profilePhoto}
              alt="Prajwal Nayak"
              className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary/50 shadow-2xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl text-center lg:text-left"
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
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-4"
            >
              Prajwal Nayak
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-muted-foreground mb-8"
            >
              B.Sc. IT Graduate
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed mx-auto lg:mx-0"
            >
              A passionate web developer from Mumbai with expertise in HTML, CSS, JavaScript, and Core Java. 
              Currently building innovative web applications and seeking opportunities to grow.
            </motion.p>

            {/* Contact Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 text-sm sm:text-base"
            >
              <a
                href="mailto:prajwalnayak2309@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={18} />
                <span className="hidden sm:inline">prajwalnayak2309@gmail.com</span>
                <span className="sm:hidden">Email</span>
              </a>
              <a
                href="tel:+918879635057"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={18} />
                <span>+91 8879635057</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6"
            >
              <a
                href="#projects"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base sm:text-lg hover:glow transition-all duration-300 hover:scale-105"
              >
                View My Work
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg glass border border-primary/30 font-semibold text-base sm:text-lg hover:bg-primary/10 transition-all duration-300"
              >
                <Download size={20} />
                Resume
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
                  href="https://linkedin.com/in/prajwal-nayak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

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
