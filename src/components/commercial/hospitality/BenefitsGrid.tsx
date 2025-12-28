
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Zap, TrendingUp } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Link } from "react-router-dom";

const BenefitsGrid = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Critical Business Benefits for Hotels & Restaurants</h2>
      
      <p className="text-muted-foreground mb-6">
        Guest comfort depends on <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">noise reduction</Link> and{' '}
        <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline">temperature control</Link>. Our secondary glazing delivers both, 
        creating the peaceful, comfortable environment your guests expect.
      </p>
      
      <AspectRatio ratio={2 / 1} className="mb-8">
        <OptimizedImage 
          src="https://cdn.marblism.com/1bctBqkW9EX.webp" 
          alt="Elegant hotel interior with secondary glazing showing guest comfort and luxury ambiance" 
          className="rounded-lg object-cover w-full h-full" 
        />
      </AspectRatio>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="border-primary/20">
          <CardHeader>
            <Star className="h-10 w-10 text-primary mb-2" />
            <CardTitle>Guest Satisfaction & Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Noise is the #1 complaint in hotel guest reviews. Our secondary glazing delivers 70-80%{' '}
              <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">noise reduction</Link>, 
              creating the peaceful environment guests expect. <Link to="/specialized/sound-transmission-guide" className="text-primary hover:underline">Essential sound transmission information for hotels</Link>.
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              <Link to="/blog/thermal-efficiency-benefits" className="text-primary hover:underline">Prevent condensation on windows that affects guest perception</Link>.
            </p>
            <p className="text-sm font-medium text-primary">
              Properties report ratings jumping from 3.5 to 4.5 stars within months
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-primary/20">
          <CardHeader>
            <Zap className="h-10 w-10 text-primary mb-2" />
            <CardTitle>Energy Cost Reduction</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline">Improve thermal insulation to reduce energy bills</Link>. 
              Hospitality venues typically save 30-50% on heating and cooling costs after installation. 
              For a 50-room hotel, this translates to £8,000-£15,000 annual savings.
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              <Link to="/specialized/air-gap-secondary-glazing" className="text-primary hover:underline">Understanding air gap sizing for hospitality</Link>.
            </p>
            <p className="text-sm font-medium text-primary">
              Typical payback period of 2-4 years with 20+ years of value
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-primary/20">
          <CardHeader>
            <TrendingUp className="h-10 w-10 text-primary mb-2" />
            <CardTitle>Revenue Protection & Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Better guest comfort leads to positive reviews, increased direct bookings, and higher guest loyalty. 
              Properties often command premium rates after improvements. <Link to="/security-secondary-glazing" className="text-primary hover:underline">Ground-floor security glazing for hotels</Link> adds peace of mind. <Link to="/blog/secondary-glazing-cost-london" className="text-primary hover:underline">Read our complete guide to secondary glazing costs</Link>.
            </p>
            <p className="text-sm font-medium text-primary">
              Reduced complaints eliminate costly refunds and compensation claims
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BenefitsGrid;
