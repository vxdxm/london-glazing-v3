import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export interface RelatedLink {
  title: string;
  href: string;
  description?: string;
}

interface RelatedContentSidebarProps {
  title?: string;
  links: RelatedLink[];
}

const RelatedContentSidebar = ({ 
  title = "Related Services", 
  links 
}: RelatedContentSidebarProps) => {
  return (
    <aside className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      <div className="border-b border-border bg-secondary/50 px-5 py-3">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">{title}</h3>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-px bg-border">
        {links.map((link) => (
          <li key={link.href} className="bg-card">
            <Link
              to={link.href}
              className="group flex h-full items-center justify-between gap-3 px-4 py-3 transition-colors hover:bg-secondary/60"
            >
              <div className="min-w-0">
                <span className="block text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {link.title}
                </span>
                {link.description && (
                  <p className="mt-0.5 text-xs text-muted-foreground line-clamp-2">{link.description}</p>
                )}
              </div>
              <ArrowRight className="w-4 h-4 shrink-0 text-primary opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </Link>
          </li>
        ))}
      </ul>

    </aside>
  );

};

export default RelatedContentSidebar;
