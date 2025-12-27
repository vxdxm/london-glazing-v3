
import { Sparkles, CheckCircle, Calendar } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { OptimizedImage } from "@/components/ui/optimized-image";

const MaintenancePrevention = () => {
  const maintenanceTips = [
    "Lubricate hinges and tracks every 6 months with silicone spray",
    "Vacuum brush seals quarterly to remove debris",
    "Wipe glass and frames monthly",
    "Test locks and handles regularly",
    "Never force stuck windows – investigate the cause"
  ];

  return (
    <section className="mb-16">
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-semibold">Preventing Future Repairs</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Proper maintenance extends spiral balance life to 15+ years and keeps all components operating smoothly.
          </p>

          <Card className="bg-primary/5 border-primary/20 mb-6">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Annual Maintenance Service</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary mb-2">£120-£180 per property</p>
              <p className="text-muted-foreground text-sm mb-4">
                Our comprehensive service lubricates all mechanisms, cleans tracks and seals, tests operation, 
                and catches wear before it becomes expensive repairs.
              </p>
              <Button asChild>
                <Link to="/quote-request">Book Maintenance Service</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">DIY Maintenance Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {maintenanceTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground text-sm">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <OptimizedImage
          src="https://cdn.marblism.com/0ALMPtLX_Tg.webp"
          alt="Secondary glazing maintenance - keeping windows in perfect condition"
          className="rounded-lg shadow-lg w-full object-cover h-full max-h-[500px]"
          aspectRatio={4/5}
        />
      </div>
    </section>
  );
};

export default MaintenancePrevention;
