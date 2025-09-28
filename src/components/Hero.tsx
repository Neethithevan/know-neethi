import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/images/hero-bg.jpg" 
          alt="Professional developer workspace"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/30" />
      </div>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-accent p-1 shadow-glow">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-4xl font-bold text-primary">
              NT
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-white drop-shadow-lg">
            Neethi Thevan
          </h1>

          <p className="text-xl md:text-2xl text-white font-semibold mb-4 drop-shadow-md">
            AI , Data and Cloud Engineer
          </p>

          <p className="text-lg text-white max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow-sm">
            I am passionate about building stuff that matters.<br />
            I specialize in AI, Data and Cloud technologies to create innovative solutions that drive success.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#projects" className="mx-auto sm:mx-0">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-light transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a href="https://github.com/Neethithevan" className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-lg group">
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/neethi-thangiah/" className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-lg group">
              <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="mailto:contact@neethithevan.com" className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-lg group">
              <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div> */}
    </section>
  );
};

export default Hero;