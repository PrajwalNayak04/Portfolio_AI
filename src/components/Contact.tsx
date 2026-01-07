import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Send } from "lucide-react";

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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="text-primary" size={20} />
              <span>hello@prajwal.dev</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="text-primary" size={20} />
              <span>India</span>
            </div>
          </div>

          <motion.a
            href="mailto:hello@prajwal.dev"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:glow transition-all duration-300"
          >
            <Send size={22} />
            Say Hello
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
