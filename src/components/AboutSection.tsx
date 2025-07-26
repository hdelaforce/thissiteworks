import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Target, Star } from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Year 11 Student",
      description: "Balancing studies while building a thriving web development business"
    },
    {
      icon: Briefcase,
      title: "Entrepreneur",
      description: "Founded and operate a web development service for local Brisbane businesses"
    },
    {
      icon: Target,
      title: "Focused Approach",
      description: "Specializing in modern, responsive websites that drive business results"
    },
    {
      icon: Star,
      title: "Quality First",
      description: "Committed to delivering exceptional web solutions on time and on budget"
    }
  ];

  const skills = [
    "React", "TypeScript", "Tailwind CSS", "Node.js", 
    "Responsive Design", "SEO Optimization", "Performance Optimization",
    "UI/UX Design", "Git/GitHub", "Project Management"
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Hudson Delaforce
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate Year 11 student who has turned coding skills into a real business, 
            helping Brisbane businesses establish their digital presence with modern, 
            professional websites.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}