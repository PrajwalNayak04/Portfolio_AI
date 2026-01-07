import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Send, Phone, Linkedin, Github } from "lucide-react";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium mb-4">
            <span className="text-primary">03.</span> What's Next?
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question, a project idea, or just want to say hi, 
            I'll do my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
            <a
              href="mailto:prajwalnayak2309@gmail.com"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="text-primary" size={20} />
              <span className="text-sm sm:text-base">prajwalnayak2309@gmail.com</span>
            </a>
            <a
              href="tel:+918879635057"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="text-primary" size={20} />
              <span>+91 8879635057</span>
            </a>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="text-primary" size={20} />
              <span>Mumbai, India</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-12">
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

          <motion.a
            href="mailto:prajwalnayak2309@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-xl bg-primary text-primary-foreground font-semibold text-base sm:text-lg hover:glow transition-all duration-300"
          >
            <Send size={22} />
            Say Hello
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
