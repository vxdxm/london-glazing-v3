import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Thermometer, Volume2, Droplets } from "lucide-react";
import { Link } from "react-router-dom";

export function PerformanceComparison() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Performance Comparison</h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Thermometer className="h-5 w-5 text-primary" />
                Thermal Efficiency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-secondary mb-2">Double Glazing</h4>
                  <p className="text-2xl font-bold text-secondary">~90%</p>
                  <p className="text-sm text-muted-foreground">heat loss restriction</p>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Secondary Glazing</h4>
                  <p className="text-2xl font-bold text-primary">65-70%</p>
                  <p className="text-sm text-muted-foreground">heat loss restriction</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  While double glazing edges ahead in pure thermal performance, secondary glazing still delivers 
                  substantial improvements, reducing heating costs by up to 15% annually—a meaningful saving for 
                  large period properties.
                </p>
                <p className="text-sm text-muted-foreground">
                  The thermal performance gap narrows considerably with high-quality secondary glazing systems that use 
                  low-emissivity glass and optimized cavity depths.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-primary">
            <CardHeader className="bg-primary/5">
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="h-5 w-5 text-primary" />
                Noise Reduction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 pt-2">
                <div className="bg-primary/10 p-4 rounded-lg border-2 border-primary">
                  <h4 className="font-semibold text-primary mb-2">Secondary Glazing</h4>
                  <p className="text-2xl font-bold text-primary">Up to 80%</p>
                  <p className="text-sm text-muted-foreground">noise reduction</p>
                  <span className="inline-block mt-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                    WINNER
                  </span>
                </div>
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-secondary mb-2">Double Glazing</h4>
                  <p className="text-2xl font-bold text-secondary">~50%</p>
                  <p className="text-sm text-muted-foreground">noise reduction</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Secondary glazing outperforms double glazing for{" "}
                  <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">noise reduction</Link></strong>. 
                  The superior acoustic performance comes from the larger air gap typically created with secondary glazing systems.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Droplets className="h-5 w-5 text-primary" />
                Condensation & Draughts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Both solutions effectively address condensation and draught issues.
                </p>
                <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Secondary Glazing Benefits</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Creates an airtight seal</li>
                    <li>• Eliminates cold air infiltration</li>
                    <li>• Maintains original windows in stable environment</li>
                    <li>• Actually helps preserve historic fabric</li>
                  </ul>
                </div>
                <p className="text-sm text-muted-foreground">
                  The protective environment created by secondary glazing can extend the lifespan of your original 
                  windows by shielding them from weather exposure and temperature fluctuations.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-8">
          <img
            src="https://cdn.marblism.com/zZXWKGD_IfG.webp"
            alt="Thermal and acoustic performance comparison between secondary glazing and double glazing"
            className="rounded-2xl shadow-lg w-full max-w-3xl mx-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
