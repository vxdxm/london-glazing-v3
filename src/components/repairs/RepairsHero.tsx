
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const RepairsHero = () => {
  return (
    <section className="mb-16">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Expert Secondary Glazing Repair Services London
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Specialized repair services for your secondary glazing systems, with expertise in spiral balances for vertical sliding units.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link to="/quote-request">
                Request Repair Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/learn-about-spiral-balances">
                Learn About Spiral Balances <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="/lovable-uploads/c2f200dd-d56e-45c6-9eaf-0aeb8ccde2a2.png"
            alt="Secondary glazing repair technician fixing a vertical sliding window unit"
            className="rounded-lg shadow-xl w-full object-cover max-h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};
export default RepairsHero;
