import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { assert } from "console";

const Projects = () => {
  const projects = [
    {
      title: "Deploying a React WebApp with Chatbot Integration",
      description: "Developed this current portfolio website using React and integrated a chatbot for enhanced user interaction.",
      image: "/images/react-protofolio-with-chatbot.png",
      technologies: ["React", "Node.js", "TypeScript", "Tailwind CSS", "AWS", "DevOps"],
      githubUrl: "https://github.com/Neethithevan/know-neethi",
      liveUrl: "#"
    },
    {
      title: "Crypto-Gamble: Real-time Meme Coin Analytics Dashboard",
      description: "Built a real-time analytics dashboard for meme coins using Airflow, Kafka, Flink , Postgress and Garfnana to provide users with up-to-date market insights and trends.",
      image: "/images/crypto-gamble-project.png",
      technologies: ["Airflow", "Kafka", "Flink", "PostgreSQL", "Grafana", "Docker", "Kubernetes"],
      githubUrl: "https://github.com/Neethithevan/crypto_gamble",
      liveUrl: "#"
    },
    {
      title: "Hosting Static Website on AWS with CI/CD",
      description: "Hosted a static website on AWS using S3 and CloudFront, implementing CI/CD pipelines with GitHub Actions for automated deployments. Used terraform to provison the infrastructure.",
      image: "/images/static-webapp-project.png", 
      technologies: ["HTML", "CSS", "JavaScript", "AWS S3", "CloudFront", "GitHub Actions", "Terraform"],
      githubUrl: "https://github.com/Neethithevan/portfolio_website",
      liveUrl: "https://neethithevan.com"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating my skills in full-stack development, 
            UI/UX design, and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-0 shadow-card bg-card/80 backdrop-blur-sm hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  width = {400}
                  height = {200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-xl group-hover:text-accent-blue transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button asChild variant="outline" size="sm" className="flex-1 border-primary/20 text-primary hover:border-primary hover:text-primary hover:bg-background">
                    <Link href={project.githubUrl} >
                      <Github className="h-4 w-4 mr-2 group-hover/btn:text-primary transition-colors" />
                      Code
                    </Link>
                  </Button>
                  <Button asChild size="sm" className="flex-1 bg-gradient-to-r from-accent-blue to-accent-purple hover:from-accent-blue/90 hover:to-accent-purple/90">
                    <Link href={project.liveUrl} >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;