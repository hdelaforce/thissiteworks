import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "pstream.mov",
      description: "Self-hosted video streaming platform with modern UI and optimized performance. Built with React and custom video compression algorithms.",
      tech: ["React", "Node.js", "Video Processing", "Real-time Streaming"],
      featured: true,
      demoUrl: "#",
      githubUrl: "#",
      status: "Live & Self-Hosted"
    },
    {
      title: "Brisbane Cafe Website",
      description: "Modern, mobile-first website for a local Brisbane cafe featuring online ordering, location finder, and social media integration.",
      tech: ["React", "Tailwind CSS", "Stripe API", "Google Maps"],
      featured: false,
      demoUrl: "#",
      status: "Client Project"
    },
    {
      title: "Local Business Directory",
      description: "Comprehensive directory website for small Brisbane businesses with search functionality, business profiles, and contact management.",
      tech: ["TypeScript", "React", "Database Design", "SEO"],
      featured: false,
      demoUrl: "#",
      status: "In Development"
    },
    {
      title: "Restaurant Management System",
      description: "Full-stack web application helping a local restaurant manage orders, inventory, and customer data with intuitive admin dashboard.",
      tech: ["React", "Node.js", "Database", "Admin Panel"],
      featured: false,
      demoUrl: "#",
      status: "Client Project"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of recent work including personal projects and professional 
            websites built for Brisbane businesses.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-xl transition-all duration-300 ${
                project.featured ? 'ring-2 ring-accent/20 md:col-span-2' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                      {project.featured && (
                        <Badge className="ml-2 bg-accent text-accent-foreground">
                          Featured
                        </Badge>
                      )}
                    </CardTitle>
                    <Badge variant="outline" className="mb-3">
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.demoUrl && (
                    <Button size="sm" className="flex-1">
                      <Play className="mr-2 h-4 w-4" />
                      View Live
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button size="sm" variant="outline">
                      <Github className="h-4 w-4" />
                    </Button>
                  )}
                  <Button size="sm" variant="outline">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Interested in seeing more of my work?
          </p>
          <Button variant="outline" size="lg">
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}