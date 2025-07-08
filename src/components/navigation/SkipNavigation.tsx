import React from 'react';

/**
 * Skip Navigation component for enhanced accessibility and SEO
 * Allows users to skip to main content, improving UX and Core Web Vitals
 */
export const SkipNavigation: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 
                 bg-white text-black px-4 py-2 rounded-md shadow-lg z-50 
                 font-medium border-2 border-primary focus:outline-none"
      onFocus={(e) => {
        // Ensure the link is visible when focused
        e.currentTarget.classList.remove('sr-only');
      }}
      onBlur={(e) => {
        // Hide the link when not focused
        e.currentTarget.classList.add('sr-only');
      }}
    >
      Skip to main content
    </a>
  );
};

/**
 * Enhanced Breadcrumb Navigation with structured data and accessibility
 */
interface BreadcrumbItem {
  name: string;
  url: string;
  current?: boolean;
}

interface EnhancedBreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const EnhancedBreadcrumb: React.FC<EnhancedBreadcrumbProps> = ({ 
  items, 
  className = '' 
}) => {
  return (
    <nav 
      aria-label="Breadcrumb navigation"
      className={`flex items-center space-x-2 text-sm text-muted-foreground ${className}`}
    >
      <ol className="flex items-center space-x-2" itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((item, index) => (
          <li 
            key={item.url} 
            className="flex items-center"
            itemProp="itemListElement" 
            itemScope 
            itemType="https://schema.org/ListItem"
          >
            {index > 0 && (
              <span className="mx-2 text-muted-foreground" aria-hidden="true">/</span>
            )}
            
            {item.current ? (
              <span 
                className="font-medium text-foreground"
                itemProp="name"
                aria-current="page"
              >
                {item.name}
              </span>
            ) : (
              <a
                href={item.url}
                className="hover:text-primary transition-colors"
                itemProp="item"
              >
                <span itemProp="name">{item.name}</span>
              </a>
            )}
            
            <meta itemProp="position" content={String(index + 1)} />
          </li>
        ))}
      </ol>
    </nav>
  );
};