import { OptimizedImage } from "@/components/ui/optimized-image";
import { Leaf, Sun, Clock, Package } from "lucide-react";

const SeasonalStrategy = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">The Seasonal Use Strategy — Your Key Advantage</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="space-y-6">
          <div className="bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <Leaf className="h-8 w-8 text-orange-600" />
              <h3 className="text-xl font-semibold text-orange-700 dark:text-orange-400">Autumn Installation (October)</h3>
            </div>
            <p className="text-muted-foreground">
              When temperatures drop and heating bills start climbing, it's time to install. Your 5-6 months of winter protection delivers <strong>50-60% heat loss reduction</strong> during the coldest months when you need it most.
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <Sun className="h-8 w-8 text-green-600" />
              <h3 className="text-xl font-semibold text-green-700 dark:text-green-400">Spring Removal (April)</h3>
            </div>
            <p className="text-muted-foreground">
              As London warms up and natural ventilation becomes appealing, simply lift out your panels. Store them safely wrapped in your loft or garage, ready for next October.
            </p>
          </div>
        </div>

        <div>
          <OptimizedImage
            src="/images/liftout/liftout-sash-window.jpg"
            alt="Seasonal secondary glazing installation in London property"
            className="rounded-lg shadow-lg w-full h-full min-h-[300px] object-cover"
            width={600}
            height={400}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-muted rounded-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <Clock className="h-6 w-6 text-primary" />
            <h4 className="font-semibold">Quick Removal Process</h4>
          </div>
          <p className="text-muted-foreground mb-2">
            The removal process takes just <strong>5-10 minutes per window</strong>. For a whole house, you're looking at 1-2 hours of work twice a year — a small price for the flexibility of choosing when you want secondary glazing and when you don't.
          </p>
        </div>

        <div className="bg-muted rounded-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <Package className="h-6 w-6 text-primary" />
            <h4 className="font-semibold">Straightforward Storage</h4>
          </div>
          <p className="text-muted-foreground">
            Wrap panels in bubble wrap, store vertically or flat, and label by window. Many homeowners find loft storage ideal — out of sight, protected from damage, and easily accessible twice yearly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SeasonalStrategy;
