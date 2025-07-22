import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, CheckCircle, AlertTriangle, XCircle, MapPin } from "lucide-react";

const Status = () => {
  const systemStatus = [
    { service: "Alert System", status: "operational", uptime: "99.9%" },
    { service: "SMS Gateway", status: "operational", uptime: "99.8%" },
    { service: "Voice Calls", status: "maintenance", uptime: "95.2%" },
    { service: "Weather API", status: "operational", uptime: "99.9%" },
  ];

  const recentIncidents = [
    { date: "2024-01-20", issue: "SMS Gateway Timeout", status: "resolved", duration: "15 min" },
    { date: "2024-01-18", issue: "Weather API Rate Limit", status: "resolved", duration: "5 min" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">System Status</h1>
            <p className="text-xl text-muted-foreground">
              Real-time status of our climate alert services
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" />
                  Service Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {systemStatus.map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                      <div className="flex items-center gap-3">
                        {service.status === "operational" && <CheckCircle className="w-5 h-5 text-primary" />}
                        {service.status === "maintenance" && <AlertTriangle className="w-5 h-5 text-warning" />}
                        {service.status === "down" && <XCircle className="w-5 h-5 text-destructive" />}
                        <span className="font-medium text-foreground">{service.service}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground">Uptime: {service.uptime}</span>
                        <Badge 
                          variant={service.status === "operational" ? "secondary" : service.status === "maintenance" ? "outline" : "destructive"}
                        >
                          {service.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Incidents</CardTitle>
                <CardDescription>Past issues and their resolution times</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentIncidents.map((incident, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                      <div>
                        <h4 className="font-medium text-foreground">{incident.issue}</h4>
                        <p className="text-sm text-muted-foreground">{incident.date}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground">Duration: {incident.duration}</span>
                        <Badge variant="secondary">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {incident.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Status;