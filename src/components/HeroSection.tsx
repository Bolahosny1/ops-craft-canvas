import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Github, Mail, Download } from "lucide-react";
import moamenPhoto from "@/assets/moamen-photo.jpeg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="font-mono text-sm text-primary mb-4">
              <span className="text-muted-foreground">$</span> whoami
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              Moamen<br />
              <span className="gradient-text">Ahmed Hakel</span>
            </h1>

            <div className="font-mono text-lg md:text-xl text-primary text-glow mb-6">
              DevOps Engineer
              <span className="terminal-cursor ml-1">▊</span>
            </div>

            <p className="text-muted-foreground text-lg max-w-lg mb-8 leading-relaxed">
              Building resilient infrastructure, automating everything, and bridging the gap between development and operations. I turn complex deployments into smooth CI/CD pipelines using Docker, Kubernetes, Terraform &amp; more.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <a
                href="https://www.linkedin.com/in/moamen-hakel-401380358/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-lg border border-border bg-secondary hover:border-primary hover:box-glow transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-lg border border-border bg-secondary hover:border-primary hover:box-glow transition-all"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="mailto:moamen.ahmedhakel123@gmail.com"
                className="flex items-center justify-center w-12 h-12 rounded-lg border border-border bg-secondary hover:border-primary hover:box-glow transition-all"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-foreground" />
              </a>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 box-glow transition-all"
              >
                Hire Me
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowDown className="h-4 w-4 animate-bounce" />
                scroll down
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 blur-xl" />
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-border box-glow">
                <img
                  src={moamenPhoto}
                  alt="Moamen Ahmed Hakel - DevOps Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating terminal badge */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 bg-card border border-border rounded-lg px-4 py-2 font-mono text-xs text-primary box-glow"
              >
                <span className="text-muted-foreground">status:</span> available ●
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-4 -left-4 bg-card border border-border rounded-lg px-4 py-2 font-mono text-xs text-accent box-glow"
              >
                <span className="text-muted-foreground">uptime:</span> 99.9%
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Cloud Platforms", value: "3+" },
            { label: "Tools Mastered", value: "15+" },
            { label: "Pipelines Built", value: "50+" },
            { label: "Uptime Goal", value: "99.9%" },
          ].map((stat) => (
            <div key={stat.label} className="bg-card border border-border rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-primary text-glow">{stat.value}</div>
              <div className="font-mono text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
