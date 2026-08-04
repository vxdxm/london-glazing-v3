import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials as defaultTestimonials, aggregateFromTestimonials, type Testimonial } from "@/data/testimonials";

interface ServiceReviewsProps {
  heading?: string;
  items?: Testimonial[];
}

/**
 * Visible customer review block. The matching Review / AggregateRating
 * structured data is emitted by <ServiceLocalBusiness /> from the same
 * source data, so markup and on-page content always agree.
 */
export const ServiceReviews = ({
  heading = "What our clients say",
  items = defaultTestimonials,
}: ServiceReviewsProps) => {
  if (items.length === 0) return null;
  const { ratingValue, reviewCount } = aggregateFromTestimonials(items);

  return (
    <section aria-labelledby="service-reviews-heading" className="mt-12 not-prose">
      <h2 id="service-reviews-heading" className="text-2xl font-semibold mb-2">
        {heading}
      </h2>
      <p className="text-sm text-muted-foreground mb-6">
        Rated {ratingValue} out of 5 from {reviewCount} client reviews across London.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((t) => (
          <Card key={t.name} className="h-full">
            <CardContent className="p-6">
              <div className="flex mb-3" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic mb-4">"{t.text}"</p>
              <div className="border-t pt-3">
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServiceReviews;
