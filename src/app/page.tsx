"use client";

import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Connections from "@/components/Connections";
import Chatbot from "@/components/Chatbot";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";



export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (window.location.pathname !== "/" || window.location.hash || window.location.search) {
      window.history.replaceState(null, "", "/");
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }
  , []);

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed inset-x-0 top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-sm">
              Neethi Thevan
            </div>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            <div className="hidden md:flex items-center gap-8">
              <a href="#hero" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a>
              <a href="#education" className="text-muted-foreground hover:text-primary transition-colors">Education</a>
              <a href="#connections" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          <div className={`${menuOpen ? "flex" : "hidden"} flex-col gap-4 pt-4 md:hidden`}>
            <a onClick={() => setMenuOpen(false)} href="#hero" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a onClick={() => setMenuOpen(false)} href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
            <a onClick={() => setMenuOpen(false)} href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a>
            <a onClick={() => setMenuOpen(false)} href="#education" className="text-muted-foreground hover:text-primary transition-colors">Education</a>
            <a onClick={() => setMenuOpen(false)} href="#connections" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <section id="hero">
          <Hero />
        </section>
        <Projects />
        <Experience />
        <Education />
        <Connections />
      </main>

      Chatbot
      <div id="chatbot" className="fixed bottom-6 right-6 z-50">
        <Chatbot />
      </div>
    </div>
  );
}
