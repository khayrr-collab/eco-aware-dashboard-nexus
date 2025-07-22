import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import { MapPin, Thermometer, Droplets, Wind, AlertTriangle, TrendingUp } from "lucide-react";

const Index = () => {
  const [weatherData, setWeatherData] = useState({
    temperature: "28°C",
    humidity: "75%",
    windSpeed: "12 km/h",
    condition: "Partly Cloudy"
  });

  const [stats, setStats] = useState({
    totalCases: 1247,
    statesCovered: 12,
    activeAlerts: 3
  });

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        totalCases: prev.totalCases + Math.floor(Math.random() * 3)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <main className="pt-20">
        <div className="relative min-h-screen bg-gradient-to-br from-background via-card to-muted/30">
          {/* Background overlay */}
          <div className="absolute inset-0 bg-[url('/lovable-uploads/e9ef915c-272a-4919-b8d9-a7f3df0119f8.png')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/70" />
          
          <div className="relative z-10 container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
              {/* Left Column - Hero Content */}
              <div className="space-y-8 animate-fade-in">
                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                    Spot an Environmental Issue?
                    <br />
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      We Are Here For You.
                    </span>
                  </h1>
                  
                  <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                    Advanced environmental monitoring and rapid alert systems protecting communities 
                    across Nigeria through real-time data and instant notifications.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="climate" size="lg" className="text-lg px-8 py-6">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Report it Here
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                    <MapPin className="w-5 h-5 mr-2" />
                    View Map
                  </Button>
                </div>
                
                {/* Weather Widget */}
                <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div className="flex items-center gap-2">
                        <Thermometer className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Temperature</p>
                          <p className="font-semibold text-foreground">{weatherData.temperature}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Droplets className="w-5 h-5 text-accent" />
                        <div>
                          <p className="text-sm text-muted-foreground">Humidity</p>
                          <p className="font-semibold text-foreground">{weatherData.humidity}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Wind className="w-5 h-5 text-info" />
                        <div>
                          <p className="text-sm text-muted-foreground">Wind</p>
                          <p className="font-semibold text-foreground">{weatherData.windSpeed}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-success" />
                        <div>
                          <p className="text-sm text-muted-foreground">Status</p>
                          <Badge variant="secondary" className="bg-success/20 text-success-foreground">
                            {weatherData.condition}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Right Column - Stats Cards */}
              <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <Card className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-border/50 hover:shadow-[var(--shadow-glow)] transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-foreground">Total Cases Resolved</h3>
                      <div className="p-3 rounded-lg bg-primary/20">
                        <AlertTriangle className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="mb-2">
                      <p className="text-4xl font-bold text-foreground">{stats.totalCases.toLocaleString()}</p>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{ width: "85%" }} />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">85% completion rate</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-border/50 hover:shadow-[var(--shadow-glow)] transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-foreground">States Covered</h3>
                      <div className="p-3 rounded-lg bg-accent/20">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                    <div className="mb-2">
                      <p className="text-4xl font-bold text-foreground">{stats.statesCovered}</p>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-to-r from-accent to-primary h-2 rounded-full" style={{ width: "60%" }} />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">60% national coverage</p>
                  </CardContent>
                </Card>
                
                {/* Active Alerts Card */}
                <Card className="bg-gradient-to-br from-warning/10 to-destructive/10 backdrop-blur-sm border-warning/30 animate-pulse-glow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Active Alerts</h3>
                        <p className="text-2xl font-bold text-warning">{stats.activeAlerts}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-warning animate-pulse" />
                        <span className="text-sm text-warning font-medium">Live</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
