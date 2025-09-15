import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Professional developer workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-background/60 to-accent-blue/70" />
      </div>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/8 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple p-1">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-4xl font-bold text-primary">
              JD
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent-blue to-accent-purple bg-clip-text text-transparent">
            John Doe
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Full Stack Developer & UI/UX Designer
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Passionate about creating beautiful, functional digital experiences. 
            I specialize in modern web technologies and love turning complex problems into simple, elegant solutions.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary-light transition-all duration-300 shadow-lg hover:shadow-xl">
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              Download Resume
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a href="#" className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-lg group">
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="#" className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-lg group">
              <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="#" className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-lg group">
              <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;