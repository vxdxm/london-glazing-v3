import { Helmet } from "react-helmet";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { SingleDoubleGlazedIntro } from "@/components/residential/single-double/SingleDoubleGlazedIntro";
import { SingleDoubleGlazedBenefits } from "@/components/residential/single-double/SingleDoubleGlazedBenefits";
import { SingleDoubleGlazedComparison } from "@/components/residential/single-double/SingleDoubleGlazedComparison";
const SingleDoubleGlazed = () => {
  return <div className="min-h-screen bg-background">
      <Helmet>
        <title>Single & Double Glazed Secondary Windows | Heritage Window Solutions</title>
        <meta name="description" content="Learn about single and double glazed secondary windows - compare options, benefits, and find the perfect solution for your property." />
      </Helmet>
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Single (4mm Toughened Glass) &amp; Double Glazed (mm Low E/Argon Gas Filled Cavity/4mm Toughened Glass) Secondary Windows</h1>
        <SingleDoubleGlazedIntro />
        <SingleDoubleGlazedBenefits />
        <SingleDoubleGlazedComparison />
      </div>
      <Footer />
    </div>;
};
export default SingleDoubleGlazed;