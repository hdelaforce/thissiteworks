import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Smartphone, 
  Search, 
  Zap, 
  Users, 
  BarChart3,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Custom Website Development",
      description: "Modern, responsive websites built with the latest technologies",
      features: ["React & TypeScript", "Mobile-First Design", "SEO Optimized", "Fast Loading"],
      price: "From $1,500"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Websites that look perfect on all devices and screen sizes",
      features: ["Responsive Layout", "Touch Optimized", "App-Like Experience", "Cross-Browser"],
      price: "Included"
    },
    {
      icon: Search,
      title: "SEO & Performance",
      description: "Optimized for search engines and lightning-fast performance",
      features: ["Google Analytics", "Page Speed Optimization", "SEO Best Practices", "Performance Monitoring"],
      price: "From $500"
    },
    {
      icon: Zap,
      title: "Maintenance & Support",
      description: "Ongoing support to keep your website running smoothly",
      features: ["Regular Updates", "Security Monitoring", "Content Updates", "Technical Support"],
      price: "From $200/month"
    }
  ];

  const businessTypes = [
    "Cafes & Restaurants",
    "Retail Stores", 
    "Professional Services",
    "Local Services",
    "Creative Agencies",
    "Health & Wellness"
  ];

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Services for Brisbane Businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized web development services tailored for small to medium businesses 
            in Brisbane. Quality work at student-friendly prices.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow h-full">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <Badge variant="outline" className="mb-4">{service.price}</Badge>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 text-sm">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Perfect for Brisbane Businesses</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Small to Medium Businesses</h4>
              <p className="text-muted-foreground text-sm">
                Affordable solutions designed for growing Brisbane businesses
              </p>
            </div>
            <div className="text-center">
              <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Results-Driven</h4>
              <p className="text-muted-foreground text-sm">
                Websites that convert visitors into customers and drive growth
              </p>
            </div>
            <div className="text-center">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Fast Delivery</h4>
              <p className="text-muted-foreground text-sm">
                Quick turnaround times without compromising on quality
              </p>
            </div>
          </div>
          
          <div className="text-center mb-8">
            <h4 className="text-lg font-semibold mb-4">Industries I Work With:</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {businessTypes.map((type, index) => (
                <Badge key={index} variant="secondary" className="px-4 py-2">
                  {type}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}