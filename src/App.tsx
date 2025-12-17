import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import WhatsAppButton from "@/components/WhatsAppButton";
import GetQuoteButton from "@/components/GetQuoteButton";
import FloatingContactForm from "@/components/FloatingContactForm";
import Index from "./pages/Index";
import ResidentialSolutions from "./pages/ResidentialSolutions";
import CommercialSolutions from "./pages/CommercialSolutions";
import SpecializedServices from "./pages/SpecializedServices";
import OfficeBuildings from "./pages/commercial/OfficeBuildings";
import HospitalitySector from "./pages/commercial/HospitalitySector";
import HealthcareIndustry from "./pages/commercial/HealthcareIndustry";
import EducationalSector from "./pages/commercial/EducationalSector";
import QuoteRequest from "./pages/QuoteRequest";
import Gallery from "./pages/Gallery";
import FAQs from "./pages/FAQs";
import NotFound from "./pages/404";
import SashWindows from "./pages/residential/SashWindows";
import CasementWindows from "./pages/residential/CasementWindows";
import BayWindows from "./pages/residential/BayWindows";
import HorizontalSliding from "./pages/residential/HorizontalSliding";
import LiftOut from "./pages/residential/LiftOut";
import Combination from "./pages/residential/Combination";
import AcousticGlazing from "./pages/specialized/AcousticGlazing";
import ThermalInsulation from "./pages/specialized/ThermalInsulation";
import SecurityGlazing from "./pages/specialized/SecurityGlazing";
import CondensationControl from "./pages/specialized/CondensationControl";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import CookiePolicy from "./pages/CookiePolicy";
import DoubleGlazedUnits from "./pages/specialized/DoubleGlazedUnits";
import AirGapSecondaryGlazing from "./pages/specialized/AirGapSecondaryGlazing";
import AcousticSecondaryGlazingWindows from "./pages/specialized/AcousticSecondaryGlazingWindows";
import SecondaryGlazingBuildingRegulations from "./pages/specialized/SecondaryGlazingBuildingRegulations";
import SecondaryGlazingOriginalWindows from "./pages/specialized/SecondaryGlazingOriginalWindows";
import NoiseReduction from "./pages/specialized/NoiseReduction";
import SoundTransmissionGuide from "./pages/specialized/SoundTransmissionGuide";
import SustainabilityImpactTracker from "./pages/SustainabilityImpactTracker";
import TraditionalOptions from "./pages/residential/TraditionalOptions";
import ModernSolutions from "./pages/residential/ModernSolutions";
import SecondaryGlazingRepairs from "./pages/SecondaryGlazingRepairs";
import SecondaryGlazingNoiseReduction from "./pages/SecondaryGlazingNoiseReduction";
import LearnAboutSpiralBalances from "./pages/LearnAboutSpiralBalances";
import UVProtection from "./pages/specialized/UVProtection";
import InsurancePremiums from "./pages/specialized/InsurancePremiums";
import CrittallWindows from "./pages/residential/CrittallWindows";
import SingleDoubleGlazed from "./pages/residential/SingleDoubleGlazed";
import EnergyPerformance from "./pages/residential/EnergyPerformance";
import ListedBuildings from "./pages/commercial/ListedBuildings";
import FixedSecondaryGlazing from "./pages/residential/FixedSecondaryGlazing";
import Contact from "./pages/Contact";
import CasementModernSolutions from "./pages/residential/casement/ModernSolutions";
import CasementTraditionalOptions from "./pages/residential/casement/TraditionalOptions";
import EntryLevelGlass from "./pages/specialized/glass/EntryLevelGlass";
import EnhancedEntryGlass from "./pages/specialized/glass/EnhancedEntryGlass";
import MediumPerformanceGlass from "./pages/specialized/glass/MediumPerformanceGlass";
import HighPerformanceGlass from "./pages/specialized/glass/HighPerformanceGlass";
import VictorianIslington from "./pages/locations/VictorianIslington";
import EdwardianHampstead from "./pages/locations/EdwardianHampstead";
import ListedKensington from "./pages/locations/ListedKensington";
import GeorgianBelgravia from "./pages/locations/GeorgianBelgravia";
import ConservationRichmond from "./pages/locations/ConservationRichmond";
import CanaryWharfOffices from "./pages/locations/CanaryWharfOffices";
import ClaphamBusyRoads from "./pages/locations/ClaphamBusyRoads";
import HeathrowAircraft from "./pages/locations/HeathrowAircraft";
import KingsCrossTrainNoise from "./pages/locations/KingsCrossTrainNoise";
import ShoreditchUrbanNoise from "./pages/locations/ShoreditchUrbanNoise";
import VictorianTerracesIslington from "./pages/locations/VictorianTerracesIslington";
import { NottingHillSecurity } from "./pages/locations/NottingHillSecurity";
import { HackneyEnergyEfficiency } from "./pages/locations/HackneyEnergyEfficiency";
import { ChelseaDraughtProofing } from "./pages/locations/ChelseaDraughtProofing";
import VirginiaWater from "./pages/locations/VirginiaWater";
import Ascot from "./pages/locations/Ascot";
import Beaconsfield from "./pages/locations/Beaconsfield";
import Weybridge from "./pages/locations/Weybridge";
import Sevenoaks from "./pages/locations/Sevenoaks";
import TunbridgeWells from "./pages/locations/TunbridgeWells";
import Guildford from "./pages/locations/Guildford";
import Marlow from "./pages/locations/Marlow";
import GerrardsCross from "./pages/locations/GerrardsCross";
import Cobham from "./pages/locations/Cobham";
import Esher from "./pages/locations/Esher";
import Rickmansworth from "./pages/locations/Rickmansworth";
import Chorleywood from "./pages/locations/Chorleywood";
import Radlett from "./pages/locations/Radlett";
import Chigwell from "./pages/locations/Chigwell";
import SecondaryVsDoubleGlazing from "./pages/guides/SecondaryVsDoubleGlazing";
import DIYvsProfessional from "./pages/guides/DIYvsProfessional";
import UValuesDBRatings from "./pages/guides/UValuesDBRatings";
import SecondaryGlazingAesthetics from "./pages/guides/SecondaryGlazingAesthetics";

const queryClient = new QueryClient();

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/quote-request" element={<QuoteRequest />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sustainability-impact-tracker-secondary-glazing" element={<SustainabilityImpactTracker />} />
        <Route path="/secondary-glazing-repairs" element={<SecondaryGlazingRepairs />} />
        <Route path="/learn-about-spiral-balances" element={<LearnAboutSpiralBalances />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/residential" element={<ResidentialSolutions />} />
        <Route path="/residential/sash-windows" element={<SashWindows />} />
        <Route path="/residential/casement-windows" element={<CasementWindows />} />
        <Route path="/residential/casement-windows/modern-solutions" element={<CasementModernSolutions />} />
        <Route path="/residential/casement-windows/traditional-options" element={<CasementTraditionalOptions />} />
        <Route path="/residential/bay-windows" element={<BayWindows />} />
        <Route path="/residential/horizontal-sliding" element={<HorizontalSliding />} />
        <Route path="/residential/lift-out" element={<LiftOut />} />
        <Route path="/residential/combination" element={<Combination />} />
        <Route path="/residential/traditional-options" element={<TraditionalOptions />} />
        <Route path="/residential/modern-solutions" element={<ModernSolutions />} />
        <Route path="/commercial" element={<CommercialSolutions />} />
        <Route path="/commercial/office-buildings" element={<OfficeBuildings />} />
        <Route path="/commercial/hospitality-sector" element={<HospitalitySector />} />
        <Route path="/commercial/healthcare-industry" element={<HealthcareIndustry />} />
        <Route path="/commercial/educational-sector" element={<EducationalSector />} />
        <Route path="/commercial/listed-buildings" element={<ListedBuildings />} />
        <Route path="/specialized" element={<SpecializedServices />} />
        <Route path="/specialized/acoustic-glazing" element={<AcousticGlazing />} />
        <Route path="/specialized/noise-reduction" element={<NoiseReduction />} />
        <Route path="/specialized/sound-transmission-guide" element={<SoundTransmissionGuide />} />
        <Route path="/specialized/thermal-insulation" element={<ThermalInsulation />} />
        <Route path="/specialized/security-glazing" element={<SecurityGlazing />} />
        <Route path="/specialized/condensation-control" element={<CondensationControl />} />
        <Route path="/specialized/double-glazed-units" element={<DoubleGlazedUnits />} />
        <Route path="/specialized/air-gap-secondary-glazing" element={<AirGapSecondaryGlazing />} />
        <Route path="/specialized/glass/entry-level" element={<EntryLevelGlass />} />
        <Route path="/specialized/glass/enhanced-entry" element={<EnhancedEntryGlass />} />
        <Route path="/specialized/glass/medium-performance" element={<MediumPerformanceGlass />} />
        <Route path="/specialized/glass/high-performance" element={<HighPerformanceGlass />} />
        <Route path="/specialized/acoustic-secondary-glazing-windows" element={<AcousticSecondaryGlazingWindows />} />
        <Route path="/specialized/secondary-glazing-building-regulations" element={<SecondaryGlazingBuildingRegulations />} />
        <Route path="/specialized/secondary-glazing-original-windows" element={<SecondaryGlazingOriginalWindows />} />
        <Route path="/secondary-glazing-noise-reduction" element={<SecondaryGlazingNoiseReduction />} />
        <Route path="/noise-calculator" element={<Navigate to="/specialized/noise-reduction#calculator" replace />} />
        <Route path="/sustainability-impact-tracker" element={<Navigate to="/sustainability-impact-tracker-secondary-glazing" replace />} />
        <Route path="/secondary-glazing-building-regulations" element={<Navigate to="/specialized/secondary-glazing-building-regulations" replace />} />
        <Route path="/air-gap-secondary-glazing" element={<Navigate to="/specialized/air-gap-secondary-glazing" replace />} />
        <Route path="/residential/energy-efficiency" element={<Navigate to="/residential/energy-performance" replace />} />
        <Route path="/specialized/uv-protection" element={<UVProtection />} />
        <Route path="/specialized/insurance-premiums" element={<InsurancePremiums />} />
        <Route path="/residential/crittall-windows" element={<CrittallWindows />} />
        <Route path="/residential/single-double-glazed" element={<SingleDoubleGlazed />} />
        <Route path="/residential/energy-performance" element={<EnergyPerformance />} />
        <Route path="/residential/fixed-secondary-glazing" element={<FixedSecondaryGlazing />} />
        <Route path="/locations/victorian-islington" element={<VictorianIslington />} />
        <Route path="/locations/edwardian-hampstead" element={<EdwardianHampstead />} />
        <Route path="/locations/listed-kensington" element={<ListedKensington />} />
        <Route path="/locations/georgian-belgravia" element={<GeorgianBelgravia />} />
        <Route path="/locations/conservation-richmond" element={<ConservationRichmond />} />
        <Route path="/locations/canary-wharf-offices" element={<CanaryWharfOffices />} />
        <Route path="/locations/clapham-busy-roads" element={<ClaphamBusyRoads />} />
        <Route path="/locations/heathrow-aircraft" element={<HeathrowAircraft />} />
        <Route path="/locations/kings-cross-train-noise" element={<KingsCrossTrainNoise />} />
        <Route path="/locations/shoreditch-urban-noise" element={<ShoreditchUrbanNoise />} />
        <Route path="/locations/victorian-terraces-islington" element={<VictorianTerracesIslington />} />
        <Route path="/locations/notting-hill-security" element={<NottingHillSecurity />} />
        <Route path="/locations/hackney-energy-efficiency" element={<HackneyEnergyEfficiency />} />
        <Route path="/locations/chelsea-draught-proofing" element={<ChelseaDraughtProofing />} />
        <Route path="/locations/virginia-water" element={<VirginiaWater />} />
        <Route path="/locations/ascot" element={<Ascot />} />
        <Route path="/locations/beaconsfield" element={<Beaconsfield />} />
        <Route path="/locations/weybridge" element={<Weybridge />} />
        <Route path="/locations/sevenoaks" element={<Sevenoaks />} />
        <Route path="/locations/tunbridge-wells" element={<TunbridgeWells />} />
        <Route path="/locations/guildford" element={<Guildford />} />
        <Route path="/locations/marlow" element={<Marlow />} />
        <Route path="/locations/gerrards-cross" element={<GerrardsCross />} />
        <Route path="/locations/cobham" element={<Cobham />} />
        <Route path="/locations/esher" element={<Esher />} />
        <Route path="/locations/rickmansworth" element={<Rickmansworth />} />
        <Route path="/locations/chorleywood" element={<Chorleywood />} />
        <Route path="/locations/radlett" element={<Radlett />} />
        <Route path="/locations/chigwell" element={<Chigwell />} />
        <Route path="/guides/secondary-vs-double-glazing" element={<SecondaryVsDoubleGlazing />} />
        <Route path="/guides/diy-vs-professional" element={<DIYvsProfessional />} />
        <Route path="/guides/u-values-db-ratings" element={<UValuesDBRatings />} />
        <Route path="/guides/secondary-glazing-aesthetics" element={<SecondaryGlazingAesthetics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/">
        <AppRoutes />
        <GetQuoteButton />
        <FloatingContactForm />
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
