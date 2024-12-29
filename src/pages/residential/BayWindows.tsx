import { MainNav } from "@/components/MainNav";
import BayWindowHeader from "@/components/residential/bay/BayWindowHeader";
import BayWindowStyles from "@/components/residential/bay/BayWindowStyles";
import BayWindowFeatures from "@/components/residential/bay/BayWindowFeatures";
import GlassOptions from "@/components/residential/GlassOptions";

const BayWindows = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <BayWindowHeader />
        <BayWindowStyles />
        <BayWindowFeatures />
        <GlassOptions />
      </div>
    </div>
  );
};

export default BayWindows;