
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Zap, TrendingUp } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { OptimizedImage } from "@/components/ui/optimized-image";

const BenefitsGrid = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Critical Business Benefits for Hotels & Restaurants</h2>
      
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
              Noise is the #1 complaint in hotel guest reviews. Our secondary glazing delivers 70-80% noise reduction, 
              creating the peaceful environment guests expect for quality sleep and comfortable dining.
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
              Hospitality venues typically save 30-50% on heating and cooling costs after installation. 
              For a 50-room hotel, this translates to £8,000-£15,000 annual savings.
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
              Properties often command premium rates after improvements.
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
