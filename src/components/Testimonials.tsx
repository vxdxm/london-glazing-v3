
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { createReviewSchema } from "@/utils/structuredData";
import { Helmet } from "react-helmet-async";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Kensington, London",
    rating: "5",
    text: "Absolutely fantastic service! The secondary glazing has transformed our Victorian home. The noise reduction is incredible - we can barely hear the traffic from the main road now. The installation was professional and clean, and the team respected our period features perfectly."
  },
  {
    name: "Michael Chen",
    location: "Canary Wharf, London",
    rating: "5", 
    text: "Outstanding results for our office building. The secondary glazing has significantly improved our working environment - much quieter and more comfortable temperature control. The project was completed on schedule and within budget. Highly recommended for commercial properties."
  },
  {
    name: "Emma Thompson",
    location: "Hampstead, London",
    rating: "5",
    text: "We were skeptical about adding glazing to our listed building, but the team provided a solution that satisfied both conservation requirements and our comfort needs. The reduction in condensation and drafts has been remarkable. Professional service from start to finish."
  }
];

export const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <Helmet>
        {testimonials.map((testimonial, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(createReviewSchema(testimonial.name, testimonial.rating, testimonial.text))}
          </script>
        ))}
      </Helmet>
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(parseInt(testimonial.rating))].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
