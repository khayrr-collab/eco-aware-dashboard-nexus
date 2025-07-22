import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Globe, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Early Warning System",
      description: "Advanced algorithms detect environmental threats before they become critical"
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Designed to protect communities through rapid alert distribution"
    },
    {
      icon: Globe,
      title: "Wide Coverage",
      description: "Monitoring environmental conditions across multiple regions"
    },
    {
      icon: Zap,
      title: "Instant Alerts",
      description: "SMS and voice call notifications delivered within seconds"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">About Climate Alert</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're dedicated to protecting communities through advanced environmental monitoring 
              and rapid alert systems that save lives and property.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10">
              <CardHeader>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground text-lg leading-relaxed">
                  Climate Alert is committed to building resilient communities through innovative 
                  environmental monitoring technology. We believe that timely information saves lives, 
                  and our platform serves as a critical bridge between environmental data and 
                  community preparedness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;