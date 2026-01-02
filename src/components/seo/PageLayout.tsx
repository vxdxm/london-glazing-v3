import React from "react";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import Breadcrumbs, { BreadcrumbItem } from "./Breadcrumbs";
import RelatedContentSidebar, { RelatedLink } from "./RelatedContentSidebar";
import CTASection from "./CTASection";

interface PageLayoutProps {
  children: React.ReactNode;
  breadcrumbs: BreadcrumbItem[];
  relatedLinks: RelatedLink[];
  relatedTitle?: string;
  showCTA?: boolean;
  ctaTitle?: string;
  ctaDescription?: string;
}

const PageLayout = ({
  children,
  breadcrumbs,
  relatedLinks,
  relatedTitle = "Related Services",
  showCTA = true,
  ctaTitle,
  ctaDescription,
}: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main id="main-content" className="flex-grow" role="main" aria-label="Page content">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbs} />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-6">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {children}
              
              {showCTA && (
                <div className="mt-8">
                  <CTASection 
                    variant="hero" 
                    title={ctaTitle}
                    description={ctaDescription}
                  />
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <RelatedContentSidebar 
                  title={relatedTitle} 
                  links={relatedLinks} 
                />
                
                <CTASection variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
