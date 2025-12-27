
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The transformation has been remarkable. Noise complaints dropped to zero, and our TripAdvisor rating improved dramatically. Guests now specifically mention the peaceful rooms in positive reviews.",
      author: "General Manager",
      company: "Mayfair Boutique Hotel"
    },
    {
      quote: "Energy savings exceeded expectations – we're saving over £10,000 annually. The installation was completed during our quiet season with zero impact on operations.",
      author: "Facilities Manager",
      company: "Westminster Hotel"
    },
    {
      quote: "Our restaurant's ambiance improved dramatically. Diners can now enjoy conversation without street noise interruption, and we've had numerous positive mentions about the peaceful atmosphere.",
      author: "Restaurant Owner",
      company: "Covent Garden"
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Client Success Stories</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <Quote className="h-8 w-8 text-primary/40 mb-4" />
              <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
              <div className="border-t border-primary/20 pt-4">
                <p className="font-semibold text-sm">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">{testimonial.company}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
