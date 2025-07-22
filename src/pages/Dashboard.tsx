import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AlertTriangle, Send, MessageSquare, FileText, LogOut, Activity, MapPin, Users, Zap, Clock, CheckCircle, XCircle, Menu } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("trigger");
  const { toast } = useToast();

  const sidebarItems = [
    { id: "trigger", title: "Trigger Alert", icon: AlertTriangle },
    { id: "recent", title: "Recent Alerts", icon: Activity },
    { id: "logs", title: "Delivery Logs", icon: FileText },
    { id: "templates", title: "Message Templates", icon: MessageSquare },
  ];

  const stats = [
    { label: "Active Alerts", value: "12", icon: AlertTriangle, variant: "warning" as const },
    { label: "Messages Sent", value: "1,847", icon: Send, variant: "success" as const },
    { label: "Areas Covered", value: "24", icon: MapPin, variant: "info" as const },
    { label: "Response Rate", value: "94%", icon: Users, variant: "success" as const },
  ];

  const recentAlerts = [
    { id: 1, type: "Flood Warning", lga: "Ikoyi", status: "sent", time: "2 min ago", recipients: 1200 },
    { id: 2, type: "Heat Advisory", lga: "Victoria Island", status: "delivered", time: "15 min ago", recipients: 800 },
    { id: 3, type: "Storm Alert", lga: "Lekki", status: "failed", time: "1 hour ago", recipients: 950 },
  ];

  const handleTriggerAlert = () => {
    toast({
      title: "Alert Triggered!",
      description: "Emergency alert has been sent to selected areas.",
    });
  };

  const AppSidebar = () => (
    <Sidebar className="border-r border-border bg-card">
      <SidebarContent>
        <div className="p-4 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">Climate Dashboard</h2>
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton 
                    asChild
                    isActive={activeSection === item.id}
                  >
                    <button
                      onClick={() => setActiveSection(item.id)}
                      className="flex items-center w-full"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <div className="mt-auto p-4">
          <Button variant="destructive" className="w-full">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  );

  const renderContent = () => {
    switch (activeSection) {
      case "trigger":
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Trigger Emergency Alert</h2>
              <p className="text-muted-foreground">Send immediate alerts to affected areas</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Select Area
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <select className="w-full p-3 rounded-md bg-input border border-border text-foreground">
                    <option>Choose LGA...</option>
                    <option>Ikoyi</option>
                    <option>Victoria Island</option>
                    <option>Lekki</option>
                    <option>Surulere</option>
                  </select>
                  <Button variant="climate" className="w-full" onClick={handleTriggerAlert}>
                    <Send className="w-4 h-4" />
                    Send SMS Alert
                  </Button>
                  <Button variant="emergency" className="w-full" onClick={handleTriggerAlert}>
                    <Zap className="w-4 h-4" />
                    Emergency Call Alert
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-warning" />
                    Alert Type
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="warning" className="h-auto py-4 flex flex-col">
                      <AlertTriangle className="w-6 h-6 mb-2" />
                      Flood
                    </Button>
                    <Button variant="destructive" className="h-auto py-4 flex flex-col">
                      <Zap className="w-6 h-6 mb-2" />
                      Storm
                    </Button>
                    <Button variant="info" className="h-auto py-4 flex flex-col">
                      <Activity className="w-6 h-6 mb-2" />
                      Heat Wave
                    </Button>
                    <Button variant="secondary" className="h-auto py-4 flex flex-col">
                      <Clock className="w-6 h-6 mb-2" />
                      Drought
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      
      case "recent":
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Recent Weather Alerts</h2>
              <p className="text-muted-foreground">Monitor sent messages and delivery status</p>
            </div>
            
            <div className="space-y-4">
              {recentAlerts.map((alert) => (
                <Card key={alert.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <AlertTriangle className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{alert.type}</h3>
                          <p className="text-sm text-muted-foreground">
                            {alert.lga} • {alert.recipients} recipients • {alert.time}
                          </p>
                        </div>
                      </div>
                      <Badge 
                        variant={alert.status === "sent" ? "default" : alert.status === "delivered" ? "secondary" : "destructive"}
                        className="flex items-center gap-1"
                      >
                        {alert.status === "delivered" && <CheckCircle className="w-3 h-3" />}
                        {alert.status === "failed" && <XCircle className="w-3 h-3" />}
                        {alert.status === "sent" && <Clock className="w-3 h-3" />}
                        {alert.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      
      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold text-foreground mb-2">Coming Soon</h2>
            <p className="text-muted-foreground">This section is under development</p>
          </div>
        );
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <main className="flex-1 overflow-hidden">
          <header className="border-b border-border bg-card/50 backdrop-blur-sm p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <SidebarTrigger />
                <h1 className="text-xl font-semibold text-foreground">Climate Alert Dashboard</h1>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="animate-pulse-glow bg-success text-success-foreground">
                  <Activity className="w-3 h-3 mr-1" />
                  System Active
                </Badge>
              </div>
            </div>
          </header>
          
          <div className="p-6 space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="hover:shadow-lg transition-all hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                        <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      </div>
                      <div className={`p-3 rounded-lg bg-${stat.variant}/10`}>
                        <stat.icon className={`w-6 h-6 text-${stat.variant}`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Main Content */}
            {renderContent()}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;