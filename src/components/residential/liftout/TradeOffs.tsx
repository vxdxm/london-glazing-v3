import { ArrowRight, ThumbsUp, ThumbsDown } from "lucide-react";

const TradeOffs = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Honest Trade-Offs</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-muted rounded-lg p-6">
          <h3 className="font-semibold text-xl mb-4">Compared to Fixed Systems:</h3>
          
          <div className="space-y-3 mb-4">
            <div className="flex items-start gap-2">
              <ThumbsDown className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
              <p className="text-muted-foreground">Slightly less thermal/acoustic performance due to clip gaps</p>
            </div>
            <div className="flex items-start gap-2">
              <ThumbsDown className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
              <p className="text-muted-foreground">Requires seasonal handling twice yearly</p>
            </div>
            <div className="flex items-start gap-2">
              <ThumbsDown className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
              <p className="text-muted-foreground">Higher cost for the removal mechanism</p>
            </div>
          </div>
          
          <div className="border-t border-border pt-4">
            <div className="flex items-start gap-2">
              <ThumbsUp className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
              <p className="font-medium text-green-700 dark:text-green-400">
                But gains: Complete summer reversibility and easier occasional access
              </p>
            </div>
          </div>
        </div>

        <div className="bg-muted rounded-lg p-6">
          <h3 className="font-semibold text-xl mb-4">Compared to Hinged Systems:</h3>
          
          <div className="space-y-3 mb-4">
            <div className="flex items-start gap-2">
              <ThumbsDown className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
              <p className="text-muted-foreground">Can't just "open" — requires complete removal and storage</p>
            </div>
            <div className="flex items-start gap-2">
              <ThumbsDown className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
              <p className="text-muted-foreground">Not suitable for daily operation</p>
            </div>
          </div>
          
          <div className="border-t border-border pt-4">
            <div className="flex items-start gap-2">
              <ThumbsUp className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
              <p className="font-medium text-green-700 dark:text-green-400">
                But gains: £1,200-£2,400 savings and complete window access when removed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeOffs;
