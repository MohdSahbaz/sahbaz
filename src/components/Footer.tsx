import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const Footer = () => {
  const socialLinks = [
    { icon: Github, url: portfolioData.social.github, label: "GitHub" },
    { icon: Linkedin, url: portfolioData.social.linkedin, label: "LinkedIn" },
    { icon: Mail, url: portfolioData.social.email, label: "Email" },
  ];

  return (
    <footer className="relative glass-card mt-20 py-8" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-primary/10 transition-colors group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
