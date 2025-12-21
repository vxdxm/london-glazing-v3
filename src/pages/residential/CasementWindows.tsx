
import { MainNav } from "@/components/MainNav";
import GlassOptions from "@/components/residential/GlassOptions";
import Hero from "@/components/casement/Hero";
import Overview from "@/components/casement/Overview";
import Benefits from "@/components/casement/Benefits";
import Specifications from "@/components/casement/Specifications";
import Installation from "@/components/casement/Installation";
import Maintenance from "@/components/casement/Maintenance";
import Solutions from "@/components/casement/Solutions";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { createPageSchema } from "@/utils/seo";
import { CasementIcon } from "@/components/icons/GlazingTypeIcons";

const CasementWindows = () => {
  // Define the page metadata for SEO
  const pageMetadata = {
    title: "Casement Window Secondary Glazing | Heritage Window Solutions",
    description: "Expert casement window secondary glazing solutions for period properties. Improve thermal insulation and noise reduction while preserving the original character of your windows.",
    canonicalPath: "/residential/casement-windows",
    imageUrl: "/lovable-uploads/3bfb7e32-d21b-47d7-91e3-f374ca8d25c0.png",
    type: "article" as const,
    publishedDate: "2026-01-01",
    modifiedDate: "2026-01-01",
    keywords: ["casement window", "secondary glazing", "thermal insulation", "noise reduction", "period property", "heritage windows"]
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
        <div className="flex items-center gap-4 mb-6">
          <CasementIcon size={56} className="text-primary" />
          <h1 className="text-4xl font-bold">Casement Window Secondary Glazing</h1>
        </div>
        <article className="prose lg:prose-xl max-w-none">
          <Hero />
          <Overview />
          <GlassOptions />
          <Benefits />
          <Specifications />
          <Installation />
          <Maintenance />
          <Solutions />
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default CasementWindows;
