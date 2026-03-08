import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Cloud Platforms",
    skills: [
      { name: "AWS", level: 90 },
      { name: "Google Cloud", level: 75 },
      { name: "Azure", level: 70 },
    ],
  },
  {
    title: "Containers & Orchestration",
    skills: [
      { name: "Docker", level: 95 },
      { name: "Kubernetes", level: 85 },
      { name: "Helm", level: 80 },
    ],
  },
  {
    title: "CI/CD & Automation",
    skills: [
      { name: "Jenkins", level: 90 },
      { name: "GitHub Actions", level: 85 },
      { name: "Terraform", level: 88 },
    ],
  },
  {
    title: "Monitoring & Scripting",
    skills: [
      { name: "Prometheus/Grafana", level: 82 },
      { name: "Bash/Python", level: 88 },
      { name: "Ansible", level: 80 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-sm text-primary mb-2">
            <span className="text-muted-foreground">$</span> cat skills.json
          </div>
          <h2 className="text-4xl font-bold mb-12">
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="font-mono text-sm text-primary mb-6">{`// ${cat.title}`}</h3>
              <div className="space-y-5">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: ci * 0.1 + si * 0.15 }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
