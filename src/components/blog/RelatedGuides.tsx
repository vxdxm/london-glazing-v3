import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { getAdjacentBlogPosts } from "@/data/blogPosts";

const guides = [
  { title: "Acoustic Glazing Guide", href: "/blog/acoustic-secondary-glazing-guide", description: "10.8mm Stadip Silence glass & 100mm air gaps" },
  { title: "Heritage & Listed Buildings", href: "/blog/listed-building-secondary-glazing-guide", description: "Conservation-approved, fully reversible" },
  { title: "EPC & Energy Efficiency", href: "/blog/epc-energy-efficiency-guide", description: "Cut heating bills 15-30%" },
  { title: "Condensation & Mould", href: "/blog/condensation-mould-prevention-guide", description: "99% condensation reduction" },
];

export const RelatedGuides = ({ currentSlug }: { currentSlug: string }) => {
  const filtered = guides.filter((g) => !g.href.includes(currentSlug));
  const { prev, next, currentPage, totalPages } = getAdjacentBlogPosts(currentSlug);
  const archiveHref = currentPage <= 1 ? "/blog" : `/blog?page=${currentPage}`;

  return (
    <>
      {(prev || next) && (
        <nav
          className="my-12 grid gap-4 sm:grid-cols-2"
          aria-label="Previous and next article in the blog archive"
        >
          {prev ? (
            <Link
              to={`/blog/${prev.slug}`}
              rel="prev"
              className="group flex h-full flex-col justify-between rounded-xl border border-border p-5 hover:border-primary hover:bg-muted/40 transition-colors"
            >
              <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                <ArrowLeft className="h-3.5 w-3.5" /> Previous article
              </span>
              <span className="mt-3 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {prev.title}
              </span>
              <span className="mt-2 text-xs text-muted-foreground">{prev.category} · {prev.readTime}</span>
            </Link>
          ) : (
            <div className="hidden sm:block" aria-hidden="true" />
          )}
          {next ? (
            <Link
              to={`/blog/${next.slug}`}
              rel="next"
              className="group flex h-full flex-col justify-between rounded-xl border border-border p-5 text-right hover:border-primary hover:bg-muted/40 transition-colors"
            >
              <span className="flex items-center justify-end gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Next article <ArrowRight className="h-3.5 w-3.5" />
              </span>
              <span className="mt-3 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {next.title}
              </span>
              <span className="mt-2 text-xs text-muted-foreground">{next.category} · {next.readTime}</span>
            </Link>
          ) : (
            <div className="hidden sm:block" aria-hidden="true" />
          )}
        </nav>
      )}

    <div className="my-12 border border-border rounded-xl p-6">
      <h3 className="text-lg font-bold text-foreground mb-4">Related Expert Guides</h3>
      <div className="grid sm:grid-cols-3 gap-4">
        {filtered.map((g) => (
          <Link key={g.href} to={g.href} className="group">
            <div className="bg-muted/30 rounded-lg p-4 h-full hover:bg-muted/60 transition-colors">
              <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-1">{g.title}</h4>
              <p className="text-xs text-muted-foreground mb-2">{g.description}</p>
              <span className="text-xs text-primary flex items-center gap-1">
                Read <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </Link>
        ))}
      </div>
      <p className="mt-5 text-xs text-muted-foreground">
        Browsing article on page {currentPage} of {totalPages}.{" "}
        <Link to={archiveHref} className="text-primary hover:underline">
          Back to blog archive
        </Link>
        .
      </p>
    </div>
    </>
  );
};
