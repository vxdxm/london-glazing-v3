import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { EducationHero } from "@/components/commercial/education/EducationHero";
import { WhyChallenges } from "@/components/commercial/education/WhyChallenges";
import { LearningBenefits } from "@/components/commercial/education/LearningBenefits";
import { RegulatoryCompliance } from "@/components/commercial/education/RegulatoryCompliance";
import { FacilityTypes } from "@/components/commercial/education/FacilityTypes";
import { EnergySavings } from "@/components/commercial/education/EnergySavings";
import { FundingSupport } from "@/components/commercial/education/FundingSupport";
import { InstallationProcess } from "@/components/commercial/education/InstallationProcess";
import { LondonChallenges } from "@/components/commercial/education/LondonChallenges";
import { CaseStudies } from "@/components/commercial/education/CaseStudies";
import { WhyChooseUs } from "@/components/commercial/education/WhyChooseUs";
import { EducationFAQ } from "@/components/commercial/education/EducationFAQ";
import { EducationCTA } from "@/components/commercial/education/EducationCTA";
import { EducationSEO } from "@/components/commercial/education/EducationSEO";

const EducationalSector = () => {
  return (
    <div className="min-h-screen bg-background">
      <EducationSEO />
      <MainNav />
      <main>
        <EducationHero />
        <WhyChallenges />
        <LearningBenefits />
        <RegulatoryCompliance />
        <FacilityTypes />
        <EnergySavings />
        <FundingSupport />
        <InstallationProcess />
        <LondonChallenges />
        <CaseStudies />
        <WhyChooseUs />
        <EducationFAQ />
        <EducationCTA />
      </main>
      <Footer />
    </div>
  );
};

export default EducationalSector;
