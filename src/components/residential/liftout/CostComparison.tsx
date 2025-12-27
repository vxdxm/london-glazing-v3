import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PoundSterling, TrendingDown, Calendar } from "lucide-react";

const CostComparison = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Cost and Value Comparison</h2>
      
      <p className="text-muted-foreground mb-6 text-lg">
        Lift-out secondary glazing sits perfectly in the middle of the cost spectrum:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="border-primary border-2">
          <CardHeader className="bg-primary/10">
            <CardTitle className="text-center">Lift-Out</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 text-center">
            <p className="text-3xl font-bold text-primary mb-2">£300-£500</p>
            <p className="text-muted-foreground">per window</p>
            <div className="mt-4 px-3 py-1 bg-primary/20 rounded-full text-sm font-medium inline-block">
              Mid-Range
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">Fixed</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 text-center">
            <p className="text-3xl font-bold mb-2">£250-£550</p>
            <p className="text-muted-foreground">per window</p>
            <div className="mt-4 px-3 py-1 bg-muted rounded-full text-sm font-medium inline-block">
              Cheapest
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">Hinged</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 text-center">
            <p className="text-3xl font-bold mb-2">£400-£700</p>
            <p className="text-muted-foreground">per window</p>
            <div className="mt-4 px-3 py-1 bg-muted rounded-full text-sm font-medium inline-block">
              Most Expensive
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-muted rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">For a Typical 12-Window Property:</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-background rounded-lg p-4 border-2 border-primary">
            <p className="font-semibold text-primary">Lift-Out</p>
            <p className="text-2xl font-bold">£3,600-£6,000</p>
          </div>
          <div className="bg-background rounded-lg p-4">
            <p className="font-semibold">Fixed</p>
            <p className="text-2xl font-bold">£3,000-£6,600</p>
          </div>
          <div className="bg-background rounded-lg p-4">
            <p className="font-semibold">Hinged</p>
            <p className="text-2xl font-bold">£4,800-£8,400</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
          <CardContent className="pt-6 flex items-center gap-4">
            <TrendingDown className="h-12 w-12 text-green-600" />
            <div>
              <p className="font-bold text-xl text-green-700 dark:text-green-400">Save £1,200-£2,400</p>
              <p className="text-muted-foreground">compared to hinged systems</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
          <CardContent className="pt-6 flex items-center gap-4">
            <Calendar className="h-12 w-12 text-blue-600" />
            <div>
              <p className="font-bold text-xl text-blue-700 dark:text-blue-400">4-6 Year Payback</p>
              <p className="text-muted-foreground">through £400-£800 annual heating savings</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CostComparison;
