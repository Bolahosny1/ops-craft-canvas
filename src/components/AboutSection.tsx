import { motion } from "framer-motion";
import { Server, GitBranch, Cloud, Shield } from "lucide-react";

const highlights = [
  { icon: Server, label: "Infrastructure", desc: "AWS, GCP, Azure" },
  { icon: GitBranch, label: "CI/CD", desc: "Jenkins, GitHub Actions" },
  { icon: Cloud, label: "Containers", desc: "Docker, Kubernetes" },
  { icon: Shield, label: "Security", desc: "DevSecOps practices" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-sm text-primary mb-2">
            <span className="text-muted-foreground">$</span> cat about.md
          </div>
          <h2 className="text-4xl font-bold mb-12">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card border border-border rounded-xl p-6 border-glow">
              <div className="flex items-center gap-2 mb-4 font-mono text-xs text-muted-foreground">
                <span className="w-3 h-3 rounded-full bg-destructive/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-primary/80" />
                <span className="ml-2">about.md</span>
              </div>
              <div className="space-y-4 text-secondary-foreground leading-relaxed">
                <p>
                  I'm a passionate DevOps Engineer who thrives on automating infrastructure and streamlining deployment pipelines. My mission is to make software delivery faster, safer, and more reliable.
                </p>
                <p>
                  With hands-on experience in cloud platforms, containerization, and CI/CD, I help teams ship code with confidence. I believe in Infrastructure as Code, monitoring everything, and continuous improvement.
                </p>
                <p>
                  When I'm not optimizing pipelines, I'm exploring new tools and contributing to the DevOps community.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:box-glow transition-all group"
              >
                <item.icon className="h-8 w-8 text-primary mb-3 group-hover:text-glow transition-all" />
                <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                <p className="font-mono text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
