import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AlertTriangle, Send, MessageSquare, FileText, LogOut, Activity, MapPin, Users, Zap, Clock, CheckCircle, XCircle, Menu, Home, Cloud } from "lucide-react";
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
        {/* Clickable Header/Logo */}
        <Link to="/" className="p-4 border-b border-border hover:bg-muted/50 transition-colors">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg">
              <Cloud className="w-5 h-5 text-primary-foreground" />
            </div>
            <h2 className="text-lg font-semibold text-foreground">ClimateAlert</h2>
          </div>
        </Link>
        
        {/* Navigation Menu */}
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                    <Home className="w-4 h-4" />
                    <span>Back to Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        {/* Dashboard Menu */}
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
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
          <Link to="/">
            <Button variant="outline" className="w-full mb-2">
              <Home className="w-4 h-4 mr-2" />
              Exit Dashboard
            </Button>
          </Link>
          <Button variant="destructive" className="w-full">
            <LogOut className="w-4 h-4 mr-2" />
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
      
      case "logs":
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Delivery Logs</h2>
              <p className="text-muted-foreground">Track message delivery success and failure reports</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Success Rate</p>
                      <p className="text-2xl font-bold text-success">94.2%</p>
                    </div>
                    <CheckCircle className="w-8 h-8 text-success" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Failed Deliveries</p>
                      <p className="text-2xl font-bold text-destructive">156</p>
                    </div>
                    <XCircle className="w-8 h-8 text-destructive" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Pending</p>
                      <p className="text-2xl font-bold text-warning">23</p>
                    </div>
                    <Clock className="w-8 h-8 text-warning" />
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-4">
              {[
                { id: "LOG001", message: "Flood alert sent to Ikoyi residents", status: "delivered", recipients: 1200, timestamp: "2024-01-22 14:30:15", deliveryTime: "2.3s" },
                { id: "LOG002", message: "Heat advisory for Victoria Island", status: "delivered", recipients: 800, timestamp: "2024-01-22 13:45:22", deliveryTime: "1.8s" },
                { id: "LOG003", message: "Storm warning for Lekki area", status: "failed", recipients: 950, timestamp: "2024-01-22 12:15:08", deliveryTime: "-", error: "Network timeout" },
                { id: "LOG004", message: "Air quality alert for Surulere", status: "pending", recipients: 670, timestamp: "2024-01-22 11:30:45", deliveryTime: "-" },
                { id: "LOG005", message: "Emergency evacuation notice", status: "delivered", recipients: 2100, timestamp: "2024-01-22 10:45:30", deliveryTime: "3.1s" }
              ].map((log) => (
                <Card key={log.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-muted">
                          <FileText className="w-5 h-5 text-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{log.message}</h3>
                          <p className="text-sm text-muted-foreground">
                            ID: {log.id} • {log.recipients} recipients • {log.timestamp}
                          </p>
                        </div>
                      </div>
                      <Badge 
                        variant={log.status === "delivered" ? "secondary" : log.status === "failed" ? "destructive" : "outline"}
                        className="flex items-center gap-1"
                      >
                        {log.status === "delivered" && <CheckCircle className="w-3 h-3" />}
                        {log.status === "failed" && <XCircle className="w-3 h-3" />}
                        {log.status === "pending" && <Clock className="w-3 h-3" />}
                        {log.status}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Delivery Time:</span>
                        <p className="font-medium text-foreground">{log.deliveryTime}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Recipients:</span>
                        <p className="font-medium text-foreground">{log.recipients}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Method:</span>
                        <p className="font-medium text-foreground">SMS + Voice</p>
                      </div>
                      {log.error && (
                        <div>
                          <span className="text-muted-foreground">Error:</span>
                          <p className="font-medium text-destructive">{log.error}</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      
      case "templates":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Message Templates</h2>
                <p className="text-muted-foreground">Manage pre-written alert messages for quick deployment</p>
              </div>
              <Button variant="climate" onClick={() => toast({ title: "New Template", description: "Template creation form would open here" })}>
                <MessageSquare className="w-4 h-4 mr-2" />
                Create Template
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  id: "TEMP001",
                  name: "Flood Emergency",
                  category: "Emergency",
                  message: "🚨 FLOOD ALERT: Immediate evacuation required in {AREA}. Move to higher ground now. Emergency services contacted. Stay safe!",
                  usage: 45,
                  lastUsed: "2 hours ago",
                  type: "SMS + Voice"
                },
                {
                  id: "TEMP002", 
                  name: "Heat Advisory",
                  category: "Weather",
                  message: "🌡️ HEAT ADVISORY: High temperatures expected in {AREA} today. Stay hydrated, seek shade, avoid outdoor activities 12-4 PM.",
                  usage: 23,
                  lastUsed: "1 day ago",
                  type: "SMS"
                },
                {
                  id: "TEMP003",
                  name: "Storm Warning",
                  category: "Weather", 
                  message: "⛈️ STORM WARNING: Severe weather approaching {AREA}. Secure loose objects, stay indoors, avoid travel if possible.",
                  usage: 67,
                  lastUsed: "3 days ago",
                  type: "SMS + Voice"
                },
                {
                  id: "TEMP004",
                  name: "Air Quality Alert",
                  category: "Health",
                  message: "💨 AIR QUALITY ALERT: Poor air quality in {AREA}. Limit outdoor activities, wear masks, especially vulnerable persons.",
                  usage: 12,
                  lastUsed: "1 week ago", 
                  type: "SMS"
                },
                {
                  id: "TEMP005",
                  name: "Evacuation Notice",
                  category: "Emergency",
                  message: "🚨 EVACUATION NOTICE: Immediate evacuation ordered for {AREA}. Proceed to designated safe zones. Take essential items only.",
                  usage: 8,
                  lastUsed: "2 weeks ago",
                  type: "SMS + Voice + Call"
                },
                {
                  id: "TEMP006",
                  name: "Drought Advisory", 
                  category: "Weather",
                  message: "🌵 DROUGHT ADVISORY: Water conservation measures in effect for {AREA}. Limit non-essential water use. More info: [link]",
                  usage: 15,
                  lastUsed: "1 month ago",
                  type: "SMS"
                }
              ].map((template) => (
                <Card key={template.id} className="hover:shadow-lg transition-all hover:scale-[1.02]">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <div className={`p-2 rounded-lg ${template.category === 'Emergency' ? 'bg-destructive/20' : template.category === 'Weather' ? 'bg-warning/20' : 'bg-info/20'}`}>
                          <MessageSquare className={`w-4 h-4 ${template.category === 'Emergency' ? 'text-destructive' : template.category === 'Weather' ? 'text-warning' : 'text-info'}`} />
                        </div>
                        {template.name}
                      </CardTitle>
                      <Badge variant="outline">{template.category}</Badge>
                    </div>
                    <CardDescription>
                      ID: {template.id} • Used {template.usage} times • {template.lastUsed}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="p-3 rounded-lg bg-muted/50 border">
                      <p className="text-sm text-foreground italic">{template.message}</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {template.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {template.message.length} characters
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => toast({ title: "Template Edited", description: `${template.name} template updated` })}>
                          Edit
                        </Button>
                        <Button variant="climate" size="sm" onClick={() => toast({ title: "Template Used", description: `${template.name} template deployed` })}>
                          Use Now
                        </Button>
                      </div>
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