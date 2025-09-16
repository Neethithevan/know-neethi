import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      location: "San Francisco, CA",
      duration: "2015 - 2019",
      gpa: "3.8/4.0",
      description: "Focused on software engineering, algorithms, and data structures. Completed senior capstone project on machine learning applications.",
      achievements: ["Dean's List", "Computer Science Honor Society", "Outstanding Senior Project Award"],
      courses: ["Data Structures", "Algorithms", "Database Systems", "Software Engineering", "Machine Learning"]
    },
    {
      degree: "Associate Degree in Web Development",
      institution: "Community College of Design",
      location: "Los Angeles, CA",
      duration: "2013 - 2015",
      gpa: "3.9/4.0",
      description: "Comprehensive program covering front-end and back-end web development technologies with hands-on project experience.",
      achievements: ["Valedictorian", "Web Development Excellence Award"],
      courses: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "Web Design"]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-CSA-2023-001"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      credentialId: "GCP-PD-2022-015"
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2021",
      credentialId: "META-RC-2021-089"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent-emerald bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic background and professional certifications that form the foundation of my technical expertise.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-primary flex items-center gap-3">
              <GraduationCap className="h-7 w-7" />
              Academic Education
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-card bg-card/60 backdrop-blur-sm group">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl group-hover:text-accent-emerald transition-colors duration-300">
                      {edu.degree}
                    </CardTitle>
                    <p className="text-lg font-semibold text-primary">
                      {edu.institution}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {edu.duration}
                      </div>
                      <div className="font-medium text-accent-emerald">
                        GPA: {edu.gpa}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Key Achievements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, achievementIndex) => (
                          <Badge key={achievementIndex} className="bg-gradient-to-r from-accent-emerald/20 to-accent-blue/20 text-primary border-0">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Relevant Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, courseIndex) => (
                          <Badge key={courseIndex} variant="secondary" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-primary flex items-center gap-3">
              <Award className="h-7 w-7" />
              Professional Certifications
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-card bg-gradient-to-br from-card to-accent-blue/5 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 group-hover:from-accent-blue/30 group-hover:to-accent-purple/30 transition-all duration-300">
                        <Award className="h-6 w-6 text-accent-blue" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary group-hover:text-accent-blue transition-colors duration-300">
                          {cert.name}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {cert.issuer}
                        </p>
                        <div className="text-xs text-muted-foreground">
                          <p>Issued: {cert.date}</p>
                          <p className="font-mono">ID: {cert.credentialId}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;