import { Button } from "@/components/ui/button";
import { Github, Mail, MapPin, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Hudson Delaforce</h3>
            <p className="text-primary-foreground/80 mb-4">
              Year 11 student creating modern websites for Brisbane businesses. 
              Turning ideas into digital reality.
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/60">
              <MapPin className="h-4 w-4" />
              <span>Brisbane, Australia</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "About", id: "about" },
                { label: "Services", id: "services" },
                { label: "Projects", id: "projects" },
                { label: "Contact", id: "contact" }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <Button 
                variant="secondary" 
                size="sm"
                onClick={() => scrollToSection('contact')}
                className="w-full justify-start"
              >
                <Mail className="mr-2 h-4 w-4" />
                Send Message
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
            © {currentYear} Hudson Delaforce Web Development. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-primary-foreground/60 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-accent fill-current" />
            <span>for Brisbane businesses</span>
          </div>
        </div>
      </div>
    </footer>
  );
}