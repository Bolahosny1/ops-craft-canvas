import { motion } from "framer-motion";
import { Send, Linkedin, Github, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-sm text-primary mb-2">
            <span className="text-muted-foreground">$</span> ssh contact@moamen
          </div>
          <h2 className="text-4xl font-bold mb-12">
            Get In <span className="gradient-text">Touch</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <label className="font-mono text-xs text-muted-foreground mb-2 block">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground font-mono text-sm focus:outline-none focus:border-primary focus:box-glow transition-all"
                placeholder="your_name"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-muted-foreground mb-2 block">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground font-mono text-sm focus:outline-none focus:border-primary focus:box-glow transition-all"
                placeholder="email@domain.com"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-muted-foreground mb-2 block">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground font-mono text-sm focus:outline-none focus:border-primary focus:box-glow transition-all resize-none"
                placeholder="Let's build something awesome..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 box-glow transition-all"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="bg-card border border-border rounded-xl p-6 border-glow">
              <div className="flex items-center gap-2 mb-6 font-mono text-xs text-muted-foreground">
                <span className="w-3 h-3 rounded-full bg-destructive/80" />
                <span className="w-3 h-3 rounded-full bg-warning/80" />
                <span className="w-3 h-3 rounded-full bg-primary/80" />
                <span className="ml-2">contact.sh</span>
              </div>
              <div className="font-mono text-sm space-y-3">
                <p><span className="text-primary">echo</span> <span className="text-muted-foreground">"Let's connect!"</span></p>
                <div className="flex items-center gap-3 text-foreground">
                  <Linkedin className="h-4 w-4 text-primary" />
                  <a href="https://www.linkedin.com/in/moamen-hakel-401380358/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    linkedin/moamen-hakel
                  </a>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <Github className="h-4 w-4 text-primary" />
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    github/moamen
                  </a>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>moamen@devops.dev</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
