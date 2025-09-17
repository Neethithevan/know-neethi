import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Connections from "@/components/Connections";
import Chatbot from "@/components/Chatbot";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Dynamically update the <head> */}
      <Helmet>
        <title>Neethi Thevan - Portfolio</title>
        <meta name="description" content="Welcome to Neethi Thevan's professional portfolio. Explore projects, experience, and more." />
      </Helmet>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-sm">
              Neethi Thevan
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#hero" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a>
              <a href="#education" className="text-muted-foreground hover:text-primary transition-colors">Education</a>
              <a href="#connections" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <section id="hero">
          <Hero />
        </section>
        
        <Projects />
        <Experience />
        <Education />
        <Connections />
      </main>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default Index;
