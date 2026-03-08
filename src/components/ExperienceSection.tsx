import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    role: "DevOps Engineer",
    company: "Infrastructure & Automation",
    period: "Present",
    description: "Designing and managing CI/CD pipelines, container orchestration with Kubernetes, and Infrastructure as Code with Terraform. Monitoring production systems with Prometheus & Grafana. Automating repetitive tasks to boost team productivity by 40%.",
    tools: ["AWS", "Kubernetes", "Terraform", "Jenkins", "Docker"],
  },
  {
    icon: Briefcase,
    role: "Cloud Infrastructure Engineer",
    company: "Cloud Architecture & Deployments",
    period: "Ongoing",
    description: "Setting up scalable cloud architectures on AWS and GCP, automating deployments with Ansible and GitHub Actions, implementing security best practices (DevSecOps), and optimizing cloud costs across multi-cloud environments.",
    tools: ["GCP", "Ansible", "GitHub Actions", "Helm", "Prometheus"],
  },
  {
    icon: Award,
    role: "Linux System Administration",
    company: "Server Management",
    period: "Ongoing",
    description: "Managing Linux servers, configuring Nginx/Apache, setting up firewalls, automating backups, and ensuring high availability of services. Scripting with Bash and Python for system automation.",
    tools: ["Linux", "Bash", "Python", "Nginx", "Systemd"],
  },
  {
    icon: GraduationCap,
    role: "Continuous Learning",
    company: "Certifications & Training",
    period: "Always",
    description: "Continuously expanding knowledge through hands-on projects, online courses, and pursuing industry certifications in cloud and DevOps technologies.",
    tools: ["AWS Cert", "Docker Cert", "K8s", "CI/CD", "IaC"],
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
            Experience <span className="gradient-text">&amp; Journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative md:pl-20"
              >
                <div className="hidden md:flex absolute left-[22px] top-6 w-[13px] h-[13px] rounded-full border-2 border-primary bg-background" />

                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 hover:box-glow transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-secondary">
                      <exp.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                      <p className="font-mono text-sm text-primary">{exp.company}</p>
                      <p className="font-mono text-xs text-muted-foreground">{exp.period}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
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
