import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
{
  icon: Briefcase,
  role: "DevOps Engineer Trainee",
  company: "Digital Egypt Pioneers Initiative (DEPI)",
  period: "Nov 2025 - Present",
  description: "",
  bullets: [
  "Training on Linux, Bash scripting, Git, and GitHub",
  "Learning containerization using Docker and environment setup",
  "Participating in structured labs and coursework in the DEPI DevOps track"],

  tools: ["Linux", "Bash", "Git", "GitHub", "Docker"]
},
{
  icon: Briefcase,
  role: "Intern — System Administrations",
  company: "PETROBEL",
  period: "Aug 2025 - Sep 2025 · 2 mos",
  location: "Cairo, Egypt",
  description: "System administrations internship, gaining hands-on experience with enterprise IT infrastructure and server management.",
  bullets: [],
  tools: ["System Admin", "Networking", "Servers"]
},
{
  icon: Briefcase,
  role: "Intern — Database",
  company: "PETROBEL",
  period: "Sep 2024 · 1 mo",
  location: "Cairo, Egypt",
  description: "Database internship focused on database management, queries, and enterprise data systems.",
  bullets: [],
  tools: ["Database", "SQL", "Data Management"]
}];


const education = [
{
  icon: GraduationCap,
  role: "Bachelor of Computer Science",
  company: "Faculty of Computers and Information — Future Academy",
  period: "2022 - 2026",
  location: "Cairo, Egypt",
  description: "Grade: Very Good",
  bullets: [],
  tools: []
}];


const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          
          <div className="font-mono text-sm text-primary mb-2">
            <span className="text-muted-foreground">$</span> git log --oneline
          </div>
          <h2 className="text-4xl font-bold mb-12">
            Experience <span className="gradient-text"></span>
          </h2>
        </motion.div>

        <div className="relative mb-20">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative md:pl-20">
              
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
                      {exp.location &&
                    <p className="font-mono text-xs text-muted-foreground">{exp.location}</p>
                    }
                    </div>
                  </div>
                  {exp.description &&
                <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                }
                  {exp.bullets.length > 0 &&
                <ul className="space-y-2 mb-4">
                      {exp.bullets.map((b, bi) =>
                  <li key={bi} className="flex items-start gap-2 text-muted-foreground text-sm leading-relaxed">
                          <span className="text-primary mt-1">▸</span>
                          {b}
                        </li>
                  )}
                    </ul>
                }
                  {exp.tools.length > 0 &&
                <div className="flex flex-wrap gap-2">
                      {exp.tools.map((tool) =>
                  <span
                    key={tool}
                    className="font-mono text-xs px-3 py-1 rounded-full border border-border bg-secondary text-muted-foreground">
                    
                          {tool}
                        </span>
                  )}
                    </div>
                }
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          
          <div className="font-mono text-sm text-primary mb-2">
            <span className="text-muted-foreground">$</span> cat education.md
          </div>
          <h2 className="text-3xl font-bold mb-8">
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          {education.map((edu, i) =>
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative md:pl-20">
            
              <div className="hidden md:flex absolute left-[22px] top-6 w-[13px] h-[13px] rounded-full border-2 border-accent bg-background" />

              <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 hover:box-glow transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-secondary">
                    <edu.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{edu.role}</h3>
                    <p className="font-mono text-sm text-primary">{edu.company}</p>
                    <p className="font-mono text-xs text-muted-foreground">{edu.period} • {edu.location}</p>
                    {edu.description &&
                  <p className="text-muted-foreground mt-2 font-mono text-sm">{edu.description}</p>
                  }
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default ExperienceSection;