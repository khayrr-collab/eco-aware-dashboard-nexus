import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Camera, MapPin, Clock, Send } from "lucide-react";

const Report = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Report Environmental Issues</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Help us protect our environment by reporting issues in your area
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning" />
                  Quick Report
                </CardTitle>
                <CardDescription>Report an issue immediately</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="warning" className="h-20 flex flex-col">
                    <AlertTriangle className="w-6 h-6 mb-2" />
                    Flooding
                  </Button>
                  <Button variant="destructive" className="h-20 flex flex-col">
                    <AlertTriangle className="w-6 h-6 mb-2" />
                    Storm Damage
                  </Button>
                  <Button variant="info" className="h-20 flex flex-col">
                    <AlertTriangle className="w-6 h-6 mb-2" />
                    Pollution
                  </Button>
                  <Button variant="secondary" className="h-20 flex flex-col">
                    <AlertTriangle className="w-6 h-6 mb-2" />
                    Other
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="w-5 h-5 text-primary" />
                  Detailed Report
                </CardTitle>
                <CardDescription>Provide comprehensive information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="climate" className="w-full h-16">
                  <Camera className="w-6 h-6 mr-2" />
                  Upload Photos & Details
                </Button>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Add Location
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Time & Date
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Report;