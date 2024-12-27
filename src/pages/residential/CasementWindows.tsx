import { MainNav } from "@/components/MainNav";
import GlassOptions from "@/components/residential/GlassOptions";
import Hero from "@/components/casement/Hero";
import Overview from "@/components/casement/Overview";
import Benefits from "@/components/casement/Benefits";
import Specifications from "@/components/casement/Specifications";
import Installation from "@/components/casement/Installation";
import Maintenance from "@/components/casement/Maintenance";
import Solutions from "@/components/casement/Solutions";

const CasementWindows = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
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
    </div>
  );
};

export default CasementWindows;