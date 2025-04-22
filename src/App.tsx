import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import WhatsAppButton from "@/components/WhatsAppButton";
import GetQuoteButton from "@/components/GetQuoteButton";
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

const queryClient = new QueryClient();

const BASE_URL = "https://secondaryglazingspecialist.com";

const serveFile = (fileName: string) => {
  window.location.href = `/${fileName}`;
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Helmet>
        <link rel="canonical" href={`${BASE_URL}${window.location.pathname}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <base href="/" />
      </Helmet>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quote-request" element={<QuoteRequest />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/sustainability-impact-tracker-secondary-glazing" element={<SustainabilityImpactTracker />} />
          <Route path="/secondary-glazing-repairs" element={<SecondaryGlazingRepairs />} />
          <Route path="/learn-about-spiral-balances" element={<LearnAboutSpiralBalances />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/residential" element={<ResidentialSolutions />} />
          <Route path="/residential/sash-windows" element={<SashWindows />} />
          <Route path="/residential/casement-windows" element={<CasementWindows />} />
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
          <Route path="/specialized" element={<SpecializedServices />} />
          <Route path="/specialized/acoustic-glazing" element={<AcousticGlazing />} />
          <Route path="/specialized/noise-reduction" element={<NoiseReduction />} />
          <Route path="/specialized/sound-transmission-guide" element={<SoundTransmissionGuide />} />
          <Route path="/specialized/thermal-insulation" element={<ThermalInsulation />} />
          <Route path="/specialized/security-glazing" element={<SecurityGlazing />} />
          <Route path="/specialized/condensation-control" element={<CondensationControl />} />
          <Route path="/specialized/double-glazed-units" element={<DoubleGlazedUnits />} />
          <Route path="/specialized/air-gap-secondary-glazing" element={<AirGapSecondaryGlazing />} />
          <Route path="/specialized/acoustic-secondary-glazing-windows" element={<AcousticSecondaryGlazingWindows />} />
          <Route path="/specialized/secondary-glazing-building-regulations" element={<SecondaryGlazingBuildingRegulations />} />
          <Route path="/specialized/secondary-glazing-original-windows" element={<SecondaryGlazingOriginalWindows />} />
          <Route path="/secondary-glazing-noise-reduction" element={<SecondaryGlazingNoiseReduction />} />
          <Route path="/noise-calculator" element={<Navigate to="/specialized/noise-reduction#calculator" replace />} />
          <Route path="/sustainability-impact-tracker" element={<Navigate to="/sustainability-impact-tracker-secondary-glazing" replace />} />
          <Route path="/secondary-glazing-building-regulations" element={<Navigate to="/specialized/secondary-glazing-building-regulations" replace />} />
          <Route path="/air-gap-secondary-glazing" element={<Navigate to="/specialized/air-gap-secondary-glazing" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <GetQuoteButton />
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
