
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { CrittallIntro } from "@/components/residential/crittall/CrittallIntro";
import { CrittallDetails } from "@/components/residential/crittall/CrittallDetails";
import { CrittallBenefits } from "@/components/residential/crittall/CrittallBenefits";
import { CrittallPreservation } from "@/components/residential/crittall/CrittallPreservation";
import { CrittallFAQ } from "@/components/residential/crittall/CrittallFAQ";

const CrittallWindows = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Secondary Glazing for Crittall Windows | Heritage Window Solutions</title>
        <meta 
          name="description" 
          content="Discover how secondary glazing enhances Crittall windows with improved energy efficiency, noise reduction, and value preservation. Perfect for listed buildings and heritage properties." 
        />
        <meta name="keywords" content="crittall windows, secondary glazing, energy efficiency, noise reduction, heritage windows, window insulation" />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/residential/crittall-windows" />
      </Helmet>
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Secondary Glazing for Crittall Windows</h1>
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
