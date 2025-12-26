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
    <aside className="bg-secondary/50 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              to={link.href}
              className="group flex items-start gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowRight className="w-4 h-4 mt-1 text-primary group-hover:translate-x-1 transition-transform" />
              <div>
                <span className="font-medium text-foreground">{link.title}</span>
                {link.description && (
                  <p className="text-sm mt-0.5">{link.description}</p>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default RelatedContentSidebar;
