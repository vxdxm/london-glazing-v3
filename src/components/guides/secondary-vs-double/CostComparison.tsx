import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PoundSterling, TrendingDown, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export function CostComparison() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Cost Comparison</h2>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-4xl">
          Secondary glazing typically costs about half the price of quality double glazing, with additional 
          savings from avoiding planning application fees. For{" "}
          <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">listed buildings</Link>, 
          these cost savings can reach <strong className="text-primary">80%</strong> compared to conservation-grade double glazing.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card className="border-primary">
            <CardHeader className="bg-primary/10">
              <CardTitle className="flex items-center gap-2">
                <PoundSterling className="h-5 w-5 text-primary" />
                Secondary Glazing Costs
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                  <span className="font-medium">Standard installation</span>
                  <span className="text-primary font-bold">£200-£600 per window</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                  <span className="font-medium">Planning fees</span>
                  <span className="text-green-600 font-bold">Usually £0</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                  <span className="font-medium">Heritage consultants</span>
                  <span className="text-green-600 font-bold">Not required</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-green-600" />
                  <h4 className="font-semibold text-green-700 dark:text-green-400">Installation Time</h4>
                </div>
                <p className="text-sm text-muted-foreground">Completed within days, minimal disruption</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-secondary">
            <CardHeader className="bg-secondary/10">
              <CardTitle className="flex items-center gap-2">
                <PoundSterling className="h-5 w-5 text-secondary" />
                Double Glazing Costs (Listed Buildings)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-secondary/5 rounded-lg">
                  <span className="font-medium">Conservation-grade units</span>
                  <span className="text-secondary font-bold">£600-£1,500+ per window</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-secondary/5 rounded-lg">
                  <span className="font-medium">Planning applications</span>
                  <span className="text-red-600 font-bold">£1,000-£3,000+</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-secondary/5 rounded-lg">
                  <span className="font-medium">Heritage consultants</span>
                  <span className="text-red-600 font-bold">£2,000-£5,000+</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-red-50 dark:bg-red-950/30 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-red-600" />
                  <h4 className="font-semibold text-red-700 dark:text-red-400">Total Before Installation</h4>
                </div>
                <p className="text-sm text-muted-foreground">Often £10,000+ before installation begins. Many applications rejected.</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="bg-primary/5 border-primary">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <TrendingDown className="h-10 w-10 text-primary flex-shrink-0" />
              <div>
                <h4 className="text-xl font-semibold mb-2">Bottom Line for Listed Buildings</h4>
                <p className="text-muted-foreground">
                  Total savings choosing secondary glazing over conservation-grade double glazing typically range from 
                  <strong className="text-primary"> £5,000-£20,000+</strong> for a typical period property, with no risk 
                  of planning rejection after months of waiting.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-8">
          <img
            src="https://cdn.marblism.com/5DTXv4w0zZp.webp"
            alt="Cost savings comparison for listed building window solutions"
            className="rounded-2xl shadow-lg w-full max-w-3xl mx-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
