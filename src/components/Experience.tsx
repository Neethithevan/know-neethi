import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Enlitic, Inc.",
      position: "Machine Learning Engineer",
      location: "Fort Collins, CO",
      duration: "June 2023 - Jan 2024",
      description: "Implemented DataOps pipelines using AWS services to streamline data processing and model deployment. Led the migration of legacy systems to cloud-based solutions, improving scalability and reliability.",
      skills: ["Python", "SQL", "Spark", "DICOM", "PyTorch", "Computer Vison", "NLP",
        "Data Warehouse", "Docker", "DevOps", "Terraform","AWS (S3, Lambda, Glue, Step Functions, Athena)", "CI/CD"],
      type: "Full-time"
    },
    {
      company: "Enlitic, Inc.",
      position: "Data Scientist",
      location: "Remote",
      duration: "June 2022 - May 2023",
      description: "Build tools and frameworks to support ML model development and deployment.",
      skills: ["Python", "SQL", "PyTorch", "Docker", "AWS", "MLOps", "Flask App", "ECS", "Flask API", "GRPC"],
      type: "Full-time"
    },
    {
      company: "Fellowship.AI.",
      position: "Machine Learning Intern",
      location: "Boulder, CO", 
      duration: "2019 - 2020",
      description: "R&D work to extend a pose estimation model to work on videos.",
      skills: ["Python", "R", "OpenCV", "Keras", "MediaPipe"],
      type: "Intern"
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
            My professional journey in AI & Cloud space, showcasing growth and expertise across different roles and technologies.
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