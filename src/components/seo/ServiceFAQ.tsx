import { Helmet } from "react-helmet-async";

export interface ServiceFAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  items: ServiceFAQItem[];
  heading?: string;
  /** Absolute URL of the page, used for the @id of the FAQPage node. */
  canonical?: string;
}

/**
 * Renders a visible FAQ block AND the matching FAQPage JSON-LD.
 * Google only honours FAQ rich results when the same Q&A text is visible
 * on the page, so schema and markup are emitted from a single source.
 */
export const ServiceFAQ = ({ items, heading = "Frequently asked questions", canonical }: ServiceFAQProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(canonical ? { "@id": `${canonical}#faq`, url: canonical } : {}),
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <section aria-labelledby="service-faq-heading" className="mt-12">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <h2 id="service-faq-heading" className="text-2xl font-semibold mt-8 mb-3">
        {heading}
      </h2>
      <div className="not-prose divide-y divide-border rounded-lg border border-border">
        {items.map((item) => (
          <details key={item.question} className="group p-4">
            <summary className="cursor-pointer list-none font-medium text-foreground marker:hidden">
              <span className="mr-2 inline-block transition-transform group-open:rotate-90" aria-hidden="true">
                &rsaquo;
              </span>
              {item.question}
            </summary>
            <p className="mt-3 pl-5 text-muted-foreground">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default ServiceFAQ;