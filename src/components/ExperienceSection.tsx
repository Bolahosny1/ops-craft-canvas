import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "DevOps Engineer",
    company: "Building & Automating",
    period: "Present",
    description: "Designing and managing CI/CD pipelines, container orchestration with Kubernetes, and Infrastructure as Code with Terraform. Monitoring production systems with Prometheus & Grafana.",
    tools: ["AWS", "Kubernetes", "Terraform", "Jenkins", "Docker"],
  },
  {
    role: "Cloud Infrastructure",
    company: "Projects & Deployments",
    period: "Ongoing",
    description: "Setting up scalable cloud architectures, automating deployments, implementing security best practices, and optimizing costs across multi-cloud environments.",
    tools: ["GCP", "Ansible", "GitHub Actions", "Helm", "Prometheus"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-sm text-primary mb-2">
            <span className="text-muted-foreground">$</span> git log --oneline
          </div>
          <h2 className="text-4xl font-bold mb-12">
            Experience <span className="gradient-text">&amp; Projects</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative md:pl-20"
              >
                <div className="hidden md:flex absolute left-[22px] top-6 w-[13px] h-[13px] rounded-full border-2 border-primary bg-background" />

                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-secondary">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                      <p className="font-mono text-sm text-primary">{exp.company}</p>
                      <p className="font-mono text-xs text-muted-foreground">{exp.period}</p>
                    </div>
                  </div>
                  <p className="text-secondary-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tools.map((tool) => (
                      <span
                        key={tool}
                        className="font-mono text-xs px-3 py-1 rounded-full border border-border bg-secondary text-muted-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
