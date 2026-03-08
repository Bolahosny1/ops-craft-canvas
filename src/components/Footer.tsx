import { Terminal } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
        <Terminal className="h-4 w-4 text-primary" />
        moamen@devops ~
      </div>
      <p className="font-mono text-xs text-muted-foreground">
        © 2026 Moamen Hakel. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
