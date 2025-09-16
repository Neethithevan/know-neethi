import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "TechCorp Solutions",
      position: "Senior Full Stack Developer",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      description: "Led a team of 5 developers in building scalable web applications. Implemented microservices architecture and improved system performance by 40%.",
      skills: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
      type: "Full-time"
    },
    {
      company: "StartupXYZ",
      position: "Frontend Developer",
      location: "Remote",
      duration: "2020 - 2022",
      description: "Developed responsive web applications using React and TypeScript. Collaborated with UX designers to create intuitive user interfaces.",
      skills: ["React", "TypeScript", "Tailwind CSS", "Jest", "Figma"],
      type: "Full-time"
    },
    {
      company: "Digital Agency Co.",
      position: "Web Developer",
      location: "New York, NY", 
      duration: "2019 - 2020",
      description: "Built custom websites and web applications for clients across various industries. Focused on performance optimization and SEO best practices.",
      skills: ["JavaScript", "PHP", "WordPress", "MySQL", "HTML/CSS"],
      type: "Full-time"
    },
    {
      company: "Freelance",
      position: "Full Stack Developer", 
      location: "Remote",
      duration: "2018 - 2019",
      description: "Worked with various clients to deliver custom web solutions. Managed projects from conception to deployment.",
      skills: ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
      type: "Freelance"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey in software development, showcasing growth and expertise across different roles and technologies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-accent-purple to-accent-emerald" />
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full border-4 border-background shadow-lg" />
                  
                  {/* Experience Card */}
                  <div className="ml-20">
                    <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-card bg-card/60 backdrop-blur-sm group">
                      <CardHeader className="pb-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <CardTitle className="text-xl group-hover:text-accent-blue transition-colors duration-300">
                              {exp.position}
                            </CardTitle>
                            <p className="text-lg font-semibold text-primary mt-1">
                              {exp.company}
                            </p>
                          </div>
                          <Badge variant="outline" className="self-start md:self-center border-accent-blue/30 text-accent-blue">
                            {exp.type}
                          </Badge>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {exp.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;