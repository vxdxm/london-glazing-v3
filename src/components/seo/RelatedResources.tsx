import React from "react";
import { Link } from "react-router-dom";

export interface RelatedResource {
  title: string;
  href: string;
  description: string;
}

interface RelatedResourcesProps {
  title?: string;
  intro?: string;
  links: RelatedResource[];
  columns?: 2 | 3;
}

/**
 * Contextual internal-linking block. Use near the end of a page to pass
 * crawl equity to closely related technical, location and service pages.
 */
export const RelatedResources: React.FC<RelatedResourcesProps> = ({
  title = "Related technical resources",
  intro,
  links,
  columns = 3,
}) => (
  <section aria-label={title} className="my-12">
    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
    {intro && <p className="text-muted-foreground mb-6 max-w-3xl">{intro}</p>}
    <div
      className={`grid gap-4 ${
        columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {links.map((l) => (
        <Link
          key={l.href}
          to={l.href}
          className="block rounded-lg border bg-card p-4 transition-shadow hover:shadow-md"
        >
          <h3 className="font-semibold text-primary mb-1">{l.title}</h3>
          <p className="text-sm text-muted-foreground">{l.description}</p>
        </Link>
      ))}
    </div>
  </section>
);

export default RelatedResources;