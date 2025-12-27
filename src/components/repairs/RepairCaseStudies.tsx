
import { TrendingDown, Clock, CheckCircle2 } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { OptimizedImage } from "@/components/ui/optimized-image";

const RepairCaseStudies = () => {
  const caseStudies = [
    {
      title: "Victorian Kensington – Spiral Balance Rescue",
      problem: "Six vertical sliding windows with sudden spiral balance failure left the sashes dropping dangerously.",
      solution: "Complete spiral balance replacement across all units",
      cost: "£720",
      details: "£85 per window with 10% batch discount plus call-out",
      time: "2.5 hours",
      savings: "Saved £3,480-£7,080 compared to complete replacement"
    },
    {
      title: "Georgian Belgravia Bay Window Revival",
      problem: "Three bay window panels with failed friction stays wouldn't hold open positions.",
      solution: "Friction stay hinge replacement and realignment",
      cost: "£270",
      details: "£65 per panel plus call-out",
      time: "1.5 hours",
      savings: "Saved £930-£1,830 versus new installation"
    },
    {
      title: "Art Deco Hampstead Glass & Seal Upgrade",
      problem: "Accidental damage plus deteriorated seals affecting thermal and acoustic performance.",
      solution: "Glass replacement with acoustic upgrade plus full seal renewal",
      cost: "£295",
      details: "Upgraded to acoustic 6.4mm laminate glass",
      time: "2 hours",
      savings: "Better sound reduction than original installation"
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-4">Real Repair Success Stories</h2>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        See how we've helped London homeowners restore their secondary glazing at a fraction of replacement cost.
      </p>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <div className="space-y-6">
          {caseStudies.map((study, index) => (
            <Card key={index} className="border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{study.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">{study.problem}</p>
                
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center p-2 bg-primary/10 rounded-lg">
                    <p className="text-lg font-bold text-primary">{study.cost}</p>
                    <p className="text-xs text-muted-foreground">Total Cost</p>
                  </div>
                  <div className="text-center p-2 bg-muted/50 rounded-lg">
                    <div className="flex items-center justify-center gap-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <p className="text-lg font-bold">{study.time}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">Duration</p>
                  </div>
                  <div className="text-center p-2 bg-green-100 dark:bg-green-950/30 rounded-lg">
                    <TrendingDown className="h-5 w-5 text-green-600 mx-auto" />
                    <p className="text-xs text-green-700 dark:text-green-400">Savings</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-green-700 dark:text-green-400">{study.savings}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <OptimizedImage
            src="https://cdn.marblism.com/ut7KHmLyjVd.webp"
            alt="Secondary glazing repair case study - restored window"
            className="rounded-lg shadow-lg w-full object-cover h-full max-h-[600px]"
            aspectRatio={3/4}
          />
        </div>
      </div>
    </section>
  );
};

export default RepairCaseStudies;
