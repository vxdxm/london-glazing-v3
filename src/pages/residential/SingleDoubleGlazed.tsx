
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { SingleDoubleGlazedIntro } from "@/components/residential/single-double/SingleDoubleGlazedIntro";
import { SingleDoubleGlazedBenefits } from "@/components/residential/single-double/SingleDoubleGlazedBenefits";
import { SingleDoubleGlazedComparison } from "@/components/residential/single-double/SingleDoubleGlazedComparison";
import { Helmet } from "react-helmet";
import { createPageSchema } from "@/utils/seo";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { FixedPanelIcon } from "@/components/icons/GlazingTypeIcons";

const SingleDoubleGlazed = () => {
  // Define page metadata
  const pageMetadata = {
    title: "Single & Double Glazed Secondary Windows | Heritage Window Solutions",
    description: "Learn about single and double glazed secondary windows - compare options, benefits, and find the perfect solution for your property.",
    canonicalPath: "/residential/single-double-glazed",
    type: "article" as const,
    publishedDate: "2025-05-09",
    modifiedDate: "2025-05-17",
    keywords: ["single glazed", "double glazed", "secondary windows", "thermal insulation", "noise reduction", "window comparison"]
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
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageMetadata.title} />
        <meta name="twitter:description" content={pageMetadata.description} />
        
        {/* JSON-LD structured data */}
        <script type="application/ld+json">{pageSchema}</script>
      </Helmet>
      
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <BreadcrumbNav />
        <div className="flex items-center gap-4 mb-8">
          <FixedPanelIcon size={56} className="text-primary" />
          <h1 className="text-4xl font-bold">Single & Double Glazed Secondary Windows</h1>
        </div>
        <SingleDoubleGlazedIntro />
        <SingleDoubleGlazedBenefits />
        <SingleDoubleGlazedComparison />
      </div>
      <Footer />
    </div>
  );
};

export default SingleDoubleGlazed;
