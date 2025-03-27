
import { Helmet } from "react-helmet";
import { MainNav } from "@/components/MainNav";
import { PageHeader } from "@/components/specialized/PageHeader";
import { ServiceCards } from "@/components/specialized/ServiceCards";
import WhatsAppButton from "@/components/WhatsAppButton";
import GetQuoteButton from "@/components/GetQuoteButton";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { InfoCard } from "@/components/ui/info-card";

const SpecializedServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Specialized Secondary Glazing Services | Acoustic & Thermal Solutions</title>
        <meta name="description" content="Expert specialized secondary glazing services including acoustic glazing, thermal insulation, and security solutions. Professional installation for specific requirements." />
        <meta name="keywords" content="specialized glazing, acoustic glazing, thermal insulation, security glazing, noise reduction, energy efficiency, London specialist, air gap secondary glazing" />
        <meta property="og:title" content="Specialized Secondary Glazing Services" />
        <meta property="og:description" content="Advanced secondary glazing solutions for specific requirements. Expert installation in London." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/specialized" />
      </Helmet>
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <BreadcrumbNav />
        <PageHeader />
        <ServiceCards />
      </div>
      <WhatsAppButton />
      <GetQuoteButton />
    </div>
  );
};

export default SpecializedServices;
