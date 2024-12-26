import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Thompson",
    location: "Kensington",
    text: "The difference in noise reduction is remarkable. I can finally enjoy peace and quiet in my period property.",
    rating: 5,
  },
  {
    name: "James Wilson",
    location: "Chelsea",
    text: "Professional service from start to finish. The thermal improvement in my home is noticeable.",
    rating: 5,
  },
  {
    name: "Emma Roberts",
    location: "Islington",
    text: "Excellent craftsmanship and attention to detail. Would highly recommend their services.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardHeader>
                <div className="flex gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};