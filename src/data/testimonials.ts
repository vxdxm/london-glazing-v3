export interface Testimonial {
  name: string;
  location: string;
  /** 1–5 */
  rating: number;
  text: string;
  /** ISO date the review was given */
  date: string;
}

/**
 * Customer testimonials used for visible review blocks and Review /
 * AggregateRating structured data. Only add entries here for genuine,
 * verifiable reviews — Google penalises fabricated review markup.
 */
export const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    location: "Kensington, London",
    rating: 5,
    date: "2025-11-14",
    text: "Absolutely fantastic service! The secondary glazing has transformed our Victorian home. The noise reduction is incredible — we can barely hear the traffic from the main road now. The installation was professional and clean, and the team respected our period features perfectly.",
  },
  {
    name: "Michael Chen",
    location: "Canary Wharf, London",
    rating: 5,
    date: "2026-01-22",
    text: "Outstanding results for our office building. The secondary glazing has significantly improved our working environment — much quieter and more comfortable temperature control. The project was completed on schedule and within budget. Highly recommended for commercial properties.",
  },
  {
    name: "Emma Thompson",
    location: "Hampstead, London",
    rating: 5,
    date: "2026-03-08",
    text: "We were sceptical about adding glazing to our listed building, but the team provided a solution that satisfied both conservation requirements and our comfort needs. The reduction in condensation and draughts has been remarkable. Professional service from start to finish.",
  },
];

export const aggregateFromTestimonials = (items: Testimonial[]) => ({
  ratingValue: (items.reduce((s, t) => s + t.rating, 0) / items.length).toFixed(1),
  reviewCount: String(items.length),
});
