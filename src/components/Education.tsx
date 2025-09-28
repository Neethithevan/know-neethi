import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Data Science",
      institution: "University of Colorado Boulder",
      location: "Boulder, CO",
      duration: "2021 - 2023",
      gpa: "3.95/4.0",
      description: "Focused on statistics , machine learning (NLP & CV), data engineering, and big data technologies",
      achievements: [],
      courses: ["Data Structures", "Algorithms", "Database Systems", "Software Engineering", "Machine Learning"]
    },
    {
      degree: "Bachelor of Technology in Mechanical Engineering",
      institution: "Amrita Vishwa Vidyapeetham",
      location: "Bangalore, India",
      duration: "2016 - 2020",
      gpa: "8.4/10",
      description: "Studied core engineering principles in thermodynamics, fluid mechanics, and materials science.",
      courses: ["Thermodynamics", "Fluid Mechanics", "Control Systems", "Matlab"]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Data Engineer - Associate",
      issuer: "Amazon Web Services",
      date: "2025",
      credentialUrl: "https://www.credly.com/badges/6f2074ae-fa07-4061-a4e9-7bf97643fd0e/linked_in_profile"
    },
    {
      name: "AWS Certified Cloud Practitioner -  Foundation",
      issuer: "Amazon Web Services",
      date: "2025",
      credentialUrl : "https://www.credly.com/earner/earned/badge/75acdfa3-299d-4910-bcaf-dee297eb6922"
    },
    {
      name: "Datadog - Configuration Learning Path",
      issuer: "Datadog",
      date: "2025",
      credentialUrl : "https://www.credly.com/earner/earned/badge/e166ab5d-2b9e-4c27-a3c8-17ac01e50c22"
    },

    
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent">
              Work Experience
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
                    
                    {/* <div>
                      <h4 className="font-semibold mb-2 text-primary">Key Achievements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, achievementIndex) => (
                          <Badge key={achievementIndex} className="bg-gradient-to-r from-accent-emerald/20 to-accent-blue/20 text-primary border-0">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div> */}
                    
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
              Certifications
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
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-1 px-2 py-1 text-xs font-semibold text-primary bg-primary/10 rounded hover:bg-primary/20 transition-colors"
                          >
                            Verify
                          </a>
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