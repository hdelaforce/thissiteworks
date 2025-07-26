import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Mail, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/80" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hudson Delaforce
            <span className="block text-accent">Web Developer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Year 11 student building modern websites for Brisbane businesses. 
            Turning ideas into digital reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => scrollToSection('contact')}
              className="bg-white text-primary hover:bg-white/90"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('projects')}
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              View My Work
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Brisbane, Australia</span>
            </div>
            <div className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              <span>Student Developer</span>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}