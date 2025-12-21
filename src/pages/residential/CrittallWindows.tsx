
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { CrittallIntro } from "@/components/residential/crittall/CrittallIntro";
import { CrittallDetails } from "@/components/residential/crittall/CrittallDetails";
import { CrittallBenefits } from "@/components/residential/crittall/CrittallBenefits";
import { CrittallPreservation } from "@/components/residential/crittall/CrittallPreservation";
import { CrittallFAQ } from "@/components/residential/crittall/CrittallFAQ";
import { Helmet } from "react-helmet";
import { createPageSchema } from "@/utils/seo";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { FixedPanelIcon } from "@/components/icons/GlazingTypeIcons";

const CrittallWindows = () => {
  // Define page metadata
  const pageMetadata = {
    title: "Secondary Glazing for Crittall Windows | Heritage Window Solutions",
    description: "Discover how secondary glazing enhances Crittall windows with improved energy efficiency, noise reduction, and value preservation. Perfect for listed buildings and heritage properties.",
    canonicalPath: "/residential/crittall-windows",
    imageUrl: "/lovable-uploads/5592528a-f976-44e2-a6af-e79c4a3c3f18.png",
    type: "article" as const,
    publishedDate: "2026-01-01",
    modifiedDate: "2026-01-01",
    keywords: ["crittall windows", "secondary glazing", "energy efficiency", "noise reduction", "heritage windows", "window insulation"]
  };

  const pageSchema = createPageSchema(pageMetadata);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{pageMetadata.title}</title>
        <meta name="description" content={pageMetadata.description} />
        <meta name="keywords" content={pageMetadata.keywords?.join(", ")} />
        <link rel="canonical" href={`https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}`} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={pageMetadata.title} />
        <meta property="og:description" content={pageMetadata.description} />
        <meta property="og:type" content={pageMetadata.type} />
        <meta property="og:url" content={`https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}`} />
        {pageMetadata.imageUrl && <meta property="og:image" content={`https://secondaryglazingspecialist.com${pageMetadata.imageUrl}`} />}
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageMetadata.title} />
        <meta name="twitter:description" content={pageMetadata.description} />
        {pageMetadata.imageUrl && <meta name="twitter:image" content={`https://secondaryglazingspecialist.com${pageMetadata.imageUrl}`} />}
        
        {/* JSON-LD structured data */}
        <script type="application/ld+json">{pageSchema}</script>
      </Helmet>
      
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <BreadcrumbNav />
        <div className="flex items-center gap-4 mb-8">
          <FixedPanelIcon size={56} className="text-primary" />
          <h1 className="text-4xl font-bold">{pageMetadata.title}</h1>
        </div>
        <CrittallIntro />
        <CrittallBenefits />
        <CrittallDetails />
        <CrittallPreservation />
        <CrittallFAQ />
      </div>
      <Footer />
    </div>
  );
};

export default CrittallWindows;
