
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The installation team worked seamlessly around our 24/7 trading floor operations. The noise reduction has been transformational for our client meetings, and the energy savings exceeded projections.",
      author: "Facilities Manager",
      company: "Investment Bank, Canary Wharf"
    },
    {
      quote: "As property managers, we needed guaranteed minimal disruption. The weekend installation was flawless, and tenant satisfaction scores improved significantly following completion.",
      author: "Senior Property Manager",
      company: "West End Office Portfolio"
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Client Testimonials</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-muted/50">
            <CardContent className="pt-6">
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-primary">{testimonial.company}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
