import { motion } from "framer-motion";
import { Container, Terminal, GitBranch, Settings, FileCode, Server } from "lucide-react";

const services = [
  {
    icon: Container,
    title: "Docker Containerization",
    description: "Containerize your applications using Docker for consistent environments across development, testing, and production.",
  },
  {
    icon: FileCode,
    title: "Dockerfile & Compose Setup",
    description: "Write optimized Dockerfiles and Docker Compose configurations to run multi-container applications easily.",
  },
  {
    icon: Terminal,
    title: "Linux Server Setup",
    description: "Set up and configure Linux servers, install packages, manage users, and ensure your environment is production-ready.",
  },
  {
    icon: GitBranch,
    title: "Git & GitHub Workflow",
    description: "Organize your codebase with proper Git branching strategies, pull request workflows, and GitHub Actions basics.",
  },
  {
    icon: Settings,
    title: "Bash Scripting & Automation",
    description: "Automate repetitive tasks with Bash scripts — from backups to deployments, saving you time and reducing errors.",
  },
  {
    icon: Server,
    title: "Basic CI/CD Pipelines",
    description: "Set up simple CI/CD pipelines using GitHub Actions to automate testing and deployment of your projects.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-sm text-primary mb-2">
            <span className="text-muted-foreground">$</span> ls services/
          </div>
          <h2 className="text-4xl font-bold mb-4">
            What I Can <span className="gradient-text">Do For You</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mb-12">
            As a junior DevOps engineer, here are the services I can help you with to get your projects running smoothly.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:box-glow transition-all group"
            >
              <div className="p-3 rounded-lg bg-secondary w-fit mb-4 group-hover:bg-primary/10 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
