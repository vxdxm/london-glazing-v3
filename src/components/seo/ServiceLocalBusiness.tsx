import { Helmet } from "react-helmet-async";

const SITE = "https://secondaryglazingspecialist.com";

export interface ServiceLocalBusinessProps {
  /** Canonical URL of the page this schema is emitted on */
  pageUrl: string;
  /** Name of the specific service offered on this page */
  serviceName: string;
  /** Short description of the service */
  serviceDescription: string;
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
}: ServiceLocalBusinessProps) => {
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
    areaServed: [
      { "@type": "City", name: "London" },
      { "@type": "AdministrativeArea", name: "Greater London" },
      { "@type": "AdministrativeArea", name: "Home Counties" },
    ],
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
    areaServed: { "@type": "City", name: "London" },
    url: pageUrl,
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
