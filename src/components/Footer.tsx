import { Twitter, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-primary/20">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Legendary KC. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Telegram"
            >
              <Send className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
