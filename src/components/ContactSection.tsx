import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  MessageCircle, 
  Clock, 
  MapPin, 
  Phone,
  Github,
  Linkedin,
  Send
} from "lucide-react";

export function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "hudson.delaforce@gmail.com",
      action: "Send Email",
      primary: true
    },
    {
      icon: MessageCircle,
      title: "Discord",
      description: "Quick responses for urgent queries",
      action: "Message on Discord",
      primary: false
    },
    {
      icon: Phone,
      title: "Phone",
      description: "Available during business hours",
      action: "Call Now",
      primary: false
    }
  ];

  const availability = [
    "Monday - Friday: 4:00 PM - 9:00 PM",
    "Saturday: 9:00 AM - 6:00 PM", 
    "Sunday: 10:00 AM - 4:00 PM"
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to take your Brisbane business online? Let's discuss your project 
            and create something amazing together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
              <p className="text-muted-foreground">
                Tell me about your project and I'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <Input placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Business Name</label>
                  <Input placeholder="Your business (optional)" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="your@email.com" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Project Type</label>
                <div className="flex flex-wrap gap-2">
                  {["New Website", "Website Redesign", "Maintenance", "Consultation", "Other"].map((type) => (
                    <Badge key={type} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                  rows={4}
                />
              </div>
              
              <Button size="lg" className="w-full">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary transition-colors">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <method.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{method.title}</h4>
                      <p className="text-muted-foreground text-sm mb-2">{method.description}</p>
                      <Button 
                        size="sm" 
                        variant={method.primary ? "default" : "outline"}
                        className="text-xs"
                      >
                        {method.action}
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Availability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="mb-4">Student Schedule</Badge>
                <ul className="space-y-2 text-sm">
                  {availability.map((time, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      {time}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-xs mt-4">
                  * Emergency support available outside hours for existing clients
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Location & Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Brisbane, Queensland, Australia</span>
                </div>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-muted-foreground text-sm">
                  Serving Brisbane and surrounding areas. Remote collaboration welcome.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}