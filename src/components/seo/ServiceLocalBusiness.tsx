import { Helmet } from "react-helmet-async";
import {
  testimonials as defaultTestimonials,
  aggregateFromTestimonials,
  type Testimonial,
} from "@/data/testimonials";

const SITE = "https://secondaryglazingspecialist.com";

/** Boroughs and Home Counties towns covered by the business. */
const SERVED_BOROUGHS = [
  "Westminster",
  "Kensington and Chelsea",
  "Camden",
  "Islington",
  "Hammersmith and Fulham",
  "Richmond upon Thames",
  "Wandsworth",
  "Lambeth",
  "Southwark",
  "Hackney",
  "Tower Hamlets",
  "Haringey",
  "Barnet",
  "Ealing",
  "Merton",
  "Greenwich",
];

const SERVED_TOWNS = [
  "Guildford",
  "Sevenoaks",
  "Tunbridge Wells",
  "Esher",
  "Cobham",
  "Weybridge",
  "Ascot",
  "Virginia Water",
  "Beaconsfield",
  "Gerrards Cross",
  "Marlow",
  "Chorleywood",
  "Rickmansworth",
  "Radlett",
  "Chigwell",
];

const SERVICE_AREA_GEO = {
  "@type": "GeoCircle",
  geoMidpoint: {
    "@type": "GeoCoordinates",
    latitude: 51.5074,
    longitude: -0.1278,
  },
  geoRadius: "80000",
  description: "Greater London and the Home Counties within an 80km radius of central London",
};

const AREA_SERVED = [
  { "@type": "City", name: "London" },
  { "@type": "AdministrativeArea", name: "Greater London" },
  { "@type": "AdministrativeArea", name: "Home Counties" },
  ...SERVED_BOROUGHS.map((name) => ({
    "@type": "AdministrativeArea" as const,
    name,
    containedInPlace: { "@type": "AdministrativeArea", name: "Greater London" },
  })),
  ...SERVED_TOWNS.map((name) => ({ "@type": "City" as const, name })),
];

export interface ServiceLocalBusinessProps {
  /** Canonical URL of the page this schema is emitted on */
  pageUrl: string;
  /** Name of the specific service offered on this page */
  serviceName: string;
  /** Short description of the service */
  serviceDescription: string;
  /** Reviews to mark up. Defaults to the shared testimonial set. */
  reviews?: Testimonial[];
}

/**
 * Emits LocalBusiness NAP + contact schema for a service page, plus a Service
 * node whose provider references the single canonical business @id so Google
 * consolidates all pages onto one business entity.
 */
export const ServiceLocalBusiness = ({
  pageUrl,
  serviceName,
  serviceDescription,
  reviews = defaultTestimonials,
}: ServiceLocalBusinessProps) => {
  const hasReviews = reviews.length > 0;
  const aggregate = hasReviews ? aggregateFromTestimonials(reviews) : null;

  const reviewNodes = reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    datePublished: r.date,
    reviewBody: r.text,
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(r.rating),
      bestRating: "5",
      worstRating: "1",
    },
  }));

  const aggregateNode = aggregate
    ? {
        "@type": "AggregateRating",
        ratingValue: aggregate.ratingValue,
        reviewCount: aggregate.reviewCount,
        bestRating: "5",
        worstRating: "1",
      }
    : undefined;

  const business = {
    "@type": "LocalBusiness",
    "@id": `${SITE}/#business`,
    name: "Secondary Glazing Specialist",
    url: `${SITE}/`,
    image: `${SITE}/lovable-uploads/b39446b8-e7b5-4000-ac4b-a7a691a5bb14.png`,
    telephone: "+44 20 7060 1572",
    email: "info@secondaryglazingspecialist.com",
    priceRange: "££-£££",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Arch 141, MacFarlane Road",
      addressLocality: "London",
      addressRegion: "Greater London",
      postalCode: "W12 7LA",
      addressCountry: "GB",
    },
    geo: { "@type": "GeoCoordinates", latitude: 51.5074, longitude: -0.1278 },
    areaServed: AREA_SERVED,
    serviceArea: SERVICE_AREA_GEO,
    hasMap: "https://www.google.com/maps/search/?api=1&query=51.5074,-0.1278",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/secondaryglazinglondon/",
      "https://www.linkedin.com/in/secondary-glazing-specialist-7500653a2/",
      "https://x.com/Sec0ndaryGlazin",
    ],
  };

  const service = {
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: serviceName,
    description: serviceDescription,
    serviceType: serviceName,
    provider: { "@id": `${SITE}/#business` },
    areaServed: AREA_SERVED,
    serviceArea: SERVICE_AREA_GEO,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${SITE}/quote-request`,
      servicePhone: { "@type": "ContactPoint", telephone: "+44 20 7060 1572" },
      availableLanguage: { "@type": "Language", name: "English" },
      serviceLocation: {
        "@type": "Place",
        name: "Greater London and the Home Counties",
        geo: SERVICE_AREA_GEO,
      },
    },
    url: pageUrl,
    ...(hasReviews ? { aggregateRating: aggregateNode, review: reviewNodes } : {}),
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [business, service],
  };

  return (
    <Helmet>
      <script type="application/ld+json" data-schema="service-localbusiness">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default ServiceLocalBusiness;
