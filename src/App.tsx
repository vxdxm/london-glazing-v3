import React, { lazy, Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";
import GetQuoteButton from "@/components/GetQuoteButton";
import FloatingContactForm from "@/components/FloatingContactForm";
import { AutoBreadcrumbSchema } from "@/components/seo/AutoBreadcrumbSchema";
import { SiteIdentitySchema } from "@/components/seo/SiteIdentitySchema";
import Index from "./pages/Index";

// Route-level code splitting: every page below is loaded on demand
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const Benefits = lazy(() => import("./pages/Benefits"));
const KensingtonChelsea = lazy(() => import("./pages/service-areas/KensingtonChelsea"));
const Westminster = lazy(() => import("./pages/service-areas/Westminster"));
const Camden = lazy(() => import("./pages/service-areas/Camden"));
const Islington = lazy(() => import("./pages/service-areas/Islington"));
const ResidentialSolutions = lazy(() => import("./pages/ResidentialSolutions"));
const CommercialSolutions = lazy(() => import("./pages/CommercialSolutions"));
const SpecializedServices = lazy(() => import("./pages/SpecializedServices"));
const OfficeBuildings = lazy(() => import("./pages/commercial/OfficeBuildings"));
const HospitalitySector = lazy(() => import("./pages/commercial/HospitalitySector"));
const HealthcareIndustry = lazy(() => import("./pages/commercial/HealthcareIndustry"));
const EducationalSector = lazy(() => import("./pages/commercial/EducationalSector"));
const RetailSpaces = lazy(() => import("./pages/commercial/RetailSpaces"));
const QuoteRequest = lazy(() => import("./pages/QuoteRequest"));
const Gallery = lazy(() => import("./pages/Gallery"));
const FAQs = lazy(() => import("./pages/FAQs"));
const NotFound = lazy(() => import("./pages/404"));
const ComplianceHub = lazy(() => import("./pages/ComplianceHub"));
const SashWindows = lazy(() => import("./pages/residential/SashWindows"));
const CasementWindows = lazy(() => import("./pages/residential/CasementWindows"));
const BayWindows = lazy(() => import("./pages/residential/BayWindows"));
const HorizontalSliding = lazy(() => import("./pages/residential/HorizontalSliding"));
const LiftOut = lazy(() => import("./pages/residential/LiftOut"));
const Combination = lazy(() => import("./pages/residential/Combination"));
const AcousticGlazing = lazy(() => import("./pages/specialized/AcousticGlazing"));
const ThermalInsulation = lazy(() => import("./pages/specialized/ThermalInsulation"));
const SecurityGlazing = lazy(() => import("./pages/specialized/SecurityGlazing"));
const CondensationControl = lazy(() => import("./pages/specialized/CondensationControl"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const DoubleGlazedUnits = lazy(() => import("./pages/specialized/DoubleGlazedUnits"));
const AirGapSecondaryGlazing = lazy(() => import("./pages/specialized/AirGapSecondaryGlazing"));
const AcousticSecondaryGlazingWindows = lazy(() => import("./pages/specialized/AcousticSecondaryGlazingWindows"));
const SecondaryGlazingBuildingRegulations = lazy(() => import("./pages/specialized/SecondaryGlazingBuildingRegulations"));
const SecondaryGlazingOriginalWindows = lazy(() => import("./pages/specialized/SecondaryGlazingOriginalWindows"));
const NoiseReduction = lazy(() => import("./pages/specialized/NoiseReduction"));
const SoundTransmissionGuide = lazy(() => import("./pages/specialized/SoundTransmissionGuide"));
const SustainabilityImpactTracker = lazy(() => import("./pages/SustainabilityImpactTracker"));
const TraditionalOptions = lazy(() => import("./pages/residential/TraditionalOptions"));
const ModernSolutions = lazy(() => import("./pages/residential/ModernSolutions"));
const SecondaryGlazingRepairs = lazy(() => import("./pages/SecondaryGlazingRepairs"));
const SecondaryGlazingNoiseReduction = lazy(() => import("./pages/SecondaryGlazingNoiseReduction"));
const LearnAboutSpiralBalances = lazy(() => import("./pages/LearnAboutSpiralBalances"));
const UVProtection = lazy(() => import("./pages/specialized/UVProtection"));
const InsurancePremiums = lazy(() => import("./pages/specialized/InsurancePremiums"));
const CrittallWindows = lazy(() => import("./pages/residential/CrittallWindows"));
const SingleDoubleGlazed = lazy(() => import("./pages/residential/SingleDoubleGlazed"));
const EnergyPerformance = lazy(() => import("./pages/residential/EnergyPerformance"));
const ListedBuildings = lazy(() => import("./pages/commercial/ListedBuildings"));
const FixedSecondaryGlazing = lazy(() => import("./pages/residential/FixedSecondaryGlazing"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const CasementModernSolutions = lazy(() => import("./pages/residential/casement/ModernSolutions"));
const CasementTraditionalOptions = lazy(() => import("./pages/residential/casement/TraditionalOptions"));
const EntryLevelGlass = lazy(() => import("./pages/specialized/glass/EntryLevelGlass"));
const EnhancedEntryGlass = lazy(() => import("./pages/specialized/glass/EnhancedEntryGlass"));
const MediumPerformanceGlass = lazy(() => import("./pages/specialized/glass/MediumPerformanceGlass"));
const HighPerformanceGlass = lazy(() => import("./pages/specialized/glass/HighPerformanceGlass"));
const VictorianIslington = lazy(() => import("./pages/locations/VictorianIslington"));
const EdwardianHampstead = lazy(() => import("./pages/locations/EdwardianHampstead"));
const ListedKensington = lazy(() => import("./pages/locations/ListedKensington"));
const GeorgianBelgravia = lazy(() => import("./pages/locations/GeorgianBelgravia"));
const ConservationRichmond = lazy(() => import("./pages/locations/ConservationRichmond"));
const CanaryWharfOffices = lazy(() => import("./pages/locations/CanaryWharfOffices"));
const ClaphamBusyRoads = lazy(() => import("./pages/locations/ClaphamBusyRoads"));
const HeathrowAircraft = lazy(() => import("./pages/locations/HeathrowAircraft"));
const KingsCrossTrainNoise = lazy(() => import("./pages/locations/KingsCrossTrainNoise"));
const ShoreditchUrbanNoise = lazy(() => import("./pages/locations/ShoreditchUrbanNoise"));
const VictorianTerracesIslington = lazy(() => import("./pages/locations/VictorianTerracesIslington"));
const NottingHillSecurity = lazy(() => import("./pages/locations/NottingHillSecurity").then(m => ({ default: m.NottingHillSecurity })));
const HackneyEnergyEfficiency = lazy(() => import("./pages/locations/HackneyEnergyEfficiency").then(m => ({ default: m.HackneyEnergyEfficiency })));
const ChelseaDraughtProofing = lazy(() => import("./pages/locations/ChelseaDraughtProofing").then(m => ({ default: m.ChelseaDraughtProofing })));
const VirginiaWater = lazy(() => import("./pages/locations/VirginiaWater"));
const Ascot = lazy(() => import("./pages/locations/Ascot"));
const Beaconsfield = lazy(() => import("./pages/locations/Beaconsfield"));
const Weybridge = lazy(() => import("./pages/locations/Weybridge"));
const Sevenoaks = lazy(() => import("./pages/locations/Sevenoaks"));
const TunbridgeWells = lazy(() => import("./pages/locations/TunbridgeWells"));
const Guildford = lazy(() => import("./pages/locations/Guildford"));
const Marlow = lazy(() => import("./pages/locations/Marlow"));
const GerrardsCross = lazy(() => import("./pages/locations/GerrardsCross"));
const Cobham = lazy(() => import("./pages/locations/Cobham"));
const Esher = lazy(() => import("./pages/locations/Esher"));
const Rickmansworth = lazy(() => import("./pages/locations/Rickmansworth"));
const Chorleywood = lazy(() => import("./pages/locations/Chorleywood"));
const Radlett = lazy(() => import("./pages/locations/Radlett"));
const Chigwell = lazy(() => import("./pages/locations/Chigwell"));
const SecondaryVsDoubleGlazing = lazy(() => import("./pages/guides/SecondaryVsDoubleGlazing"));
const DIYvsProfessional = lazy(() => import("./pages/guides/DIYvsProfessional"));
const UValuesDBRatings = lazy(() => import("./pages/guides/UValuesDBRatings"));
const SecondaryGlazingAesthetics = lazy(() => import("./pages/guides/SecondaryGlazingAesthetics"));
const Locations = lazy(() => import("./pages/Locations"));
const ListedBuildingsSecondaryGlazing = lazy(() => import("./pages/specialist/ListedBuildingsSecondaryGlazing"));
const ConservationAreasSecondaryGlazing = lazy(() => import("./pages/specialist/ConservationAreasSecondaryGlazing"));
const VictorianWindowsSecondaryGlazing = lazy(() => import("./pages/specialist/VictorianWindowsSecondaryGlazing"));
const SashWindowSecondaryGlazing = lazy(() => import("./pages/specialist/SashWindowSecondaryGlazing"));
const GeorgianWindowsSecondaryGlazing = lazy(() => import("./pages/specialist/GeorgianWindowsSecondaryGlazing"));
const EdwardianPropertySecondaryGlazing = lazy(() => import("./pages/specialist/EdwardianPropertySecondaryGlazing"));
const ThermalInsulationSecondaryGlazing = lazy(() => import("./pages/specialist/ThermalInsulationSecondaryGlazing"));
const NoiseReductionSecondaryGlazing = lazy(() => import("./pages/specialist/NoiseReductionSecondaryGlazing"));
const CentralLondon = lazy(() => import("./pages/areas/CentralLondon"));
const NorthLondon = lazy(() => import("./pages/areas/NorthLondon"));
const SouthLondon = lazy(() => import("./pages/areas/SouthLondon"));
const EastLondon = lazy(() => import("./pages/areas/EastLondon"));
const WestLondon = lazy(() => import("./pages/areas/WestLondon"));
const GreaterLondon = lazy(() => import("./pages/areas/GreaterLondon"));
const HomeCounties = lazy(() => import("./pages/areas/HomeCounties"));
const Blog = lazy(() => import("./pages/blog/Blog"));
const BlogPost = lazy(() => import("./pages/blog/BlogPost"));
const AcousticSecondaryGlazingGuide = lazy(() => import("./pages/blog/AcousticSecondaryGlazingGuide"));
const ListedBuildingSecondaryGlazingGuide = lazy(() => import("./pages/blog/ListedBuildingSecondaryGlazingGuide"));
const ListedBuildingPlanningApprovedGuide = lazy(() => import("./pages/blog/ListedBuildingPlanningApprovedGuide"));
const BestAcousticGlassSecondaryGlazing = lazy(() => import("./pages/blog/BestAcousticGlassSecondaryGlazing"));
const EnergySavingMistakesOldWindows = lazy(() => import("./pages/blog/EnergySavingMistakesOldWindows"));
const AcousticGlassNoiseReductionComparison = lazy(() => import("./pages/blog/AcousticGlassNoiseReductionComparison"));
const AcousticLaminateThicknessComparison = lazy(() => import("./pages/blog/AcousticLaminateThicknessComparison"));
const EPCEnergyEfficiencyGuide = lazy(() => import("./pages/blog/EPCEnergyEfficiencyGuide"));
const CondensationMouldPreventionGuide = lazy(() => import("./pages/blog/CondensationMouldPreventionGuide"));
const CommercialMEESComplianceGuide = lazy(() => import("./pages/blog/CommercialMEESComplianceGuide"));
const HospitalitySecondaryGlazingGuide = lazy(() => import("./pages/blog/HospitalitySecondaryGlazingGuide"));
const EducationSecondaryGlazingGuide = lazy(() => import("./pages/blog/EducationSecondaryGlazingGuide"));
const LondonBoroughNoiseGuide = lazy(() => import("./pages/blog/LondonBoroughNoiseGuide"));
const LondonCostGuide = lazy(() => import("./pages/blog/LondonCostGuide"));
const SoundproofNurseryGuide = lazy(() => import("./pages/blog/SoundproofNurseryGuide"));
const PhysicsOfSilenceGuide = lazy(() => import("./pages/blog/PhysicsOfSilenceGuide"));
const KensingtonChelseaArea = lazy(() => import("./pages/areas/KensingtonChelsea"));
const CommercialSecondaryGlazingLanding = lazy(() => import("./pages/CommercialSecondaryGlazingLanding"));
const AreasWeServe = lazy(() => import("./pages/areas/AreasWeServe"));
const SashWindowsService = lazy(() => import("./pages/services/SashWindowsService"));
const BayWindowOptions = lazy(() => import("./pages/services/BayWindowOptions"));
const HeritageListed = lazy(() => import("./pages/services/HeritageListed"));
const SoundInsulation = lazy(() => import("./pages/services/SoundInsulation"));
const CostGuide = lazy(() => import("./pages/services/CostGuide"));
const NeighbourhoodPage = lazy(() => import("./pages/locations/NeighbourhoodPage"));

const RouteFallback = () => (
  <div className="min-h-screen flex items-center justify-center" role="status" aria-label="Loading page">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const queryClient = new QueryClient();

const AppRoutes = () => {
  return (
    <>
      <AutoBreadcrumbSchema />
      <SiteIdentitySchema />
      <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/quote-request" element={<QuoteRequest />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/faq" element={<Navigate to="/faqs" replace />} />
        <Route path="/compliance-hub" element={<ComplianceHub />} />
        <Route path="/compliance" element={<Navigate to="/compliance-hub" replace />} />
        <Route path="/quote" element={<Navigate to="/quote-request" replace />} />
        <Route path="/services" element={<Navigate to="/specialized" replace />} />
        <Route path="/areas-we-serve" element={<AreasWeServe />} />
        <Route path="/commercial-secondary-glazing" element={<CommercialSecondaryGlazingLanding />} />
        <Route path="/testimonials" element={<Navigate to="/case-studies" replace />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/benefits" element={<Benefits />} />
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
        <Route path="/commercial/retail-spaces" element={<RetailSpaces />} />
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
        <Route path="/locations" element={<Locations />} />
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
        <Route path="/locations/:slug" element={<NeighbourhoodPage />} />
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
        <Route path="/listed-buildings-secondary-glazing" element={<ListedBuildingsSecondaryGlazing />} />
        <Route path="/conservation-areas-secondary-glazing" element={<ConservationAreasSecondaryGlazing />} />
        <Route path="/victorian-windows-secondary-glazing" element={<VictorianWindowsSecondaryGlazing />} />
        <Route path="/sash-window-secondary-glazing" element={<SashWindowSecondaryGlazing />} />
        <Route path="/georgian-windows-secondary-glazing" element={<GeorgianWindowsSecondaryGlazing />} />
        <Route path="/edwardian-property-secondary-glazing" element={<EdwardianPropertySecondaryGlazing />} />
        <Route path="/thermal-insulation-secondary-glazing" element={<ThermalInsulationSecondaryGlazing />} />
        <Route path="/noise-reduction-secondary-glazing" element={<NoiseReductionSecondaryGlazing />} />
        <Route path="/areas/kensington-chelsea" element={<KensingtonChelseaArea />} />
        <Route path="/areas/central-london" element={<CentralLondon />} />
        <Route path="/areas/north-london" element={<NorthLondon />} />
        <Route path="/areas/south-london" element={<SouthLondon />} />
        <Route path="/areas/east-london" element={<EastLondon />} />
        <Route path="/areas/west-london" element={<WestLondon />} />
        <Route path="/areas/greater-london" element={<GreaterLondon />} />
        <Route path="/areas/home-counties" element={<HomeCounties />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/acoustic-secondary-glazing-guide" element={<AcousticSecondaryGlazingGuide />} />
        <Route path="/blog/listed-building-secondary-glazing-guide" element={<ListedBuildingSecondaryGlazingGuide />} />
        <Route path="/blog/listed-building-planning-approved-guide" element={<ListedBuildingPlanningApprovedGuide />} />
        <Route path="/blog/best-acoustic-glass-secondary-glazing-compared" element={<BestAcousticGlassSecondaryGlazing />} />
        <Route path="/blog/energy-saving-mistakes-old-windows" element={<EnergySavingMistakesOldWindows />} />
        <Route path="/blog/acoustic-glass-noise-reduction-comparison" element={<AcousticGlassNoiseReductionComparison />} />
        <Route path="/blog/10-8mm-acoustic-laminate-vs-6-4mm-laminated-glass" element={<AcousticLaminateThicknessComparison />} />
        <Route path="/blog/epc-energy-efficiency-guide" element={<EPCEnergyEfficiencyGuide />} />
        <Route path="/blog/condensation-mould-prevention-guide" element={<CondensationMouldPreventionGuide />} />
        <Route path="/blog/commercial-mees-compliance-secondary-glazing" element={<CommercialMEESComplianceGuide />} />
        <Route path="/blog/hospitality-secondary-glazing-noise-reduction" element={<HospitalitySecondaryGlazingGuide />} />
        <Route path="/blog/education-secondary-glazing-schools" element={<EducationSecondaryGlazingGuide />} />
        <Route path="/blog/secondary-glazing-london-borough-guide" element={<LondonBoroughNoiseGuide />} />
        <Route path="/blog/secondary-glazing-london-cost-guide" element={<LondonCostGuide />} />
        <Route path="/blog/soundproof-nursery-54db-reduction" element={<SoundproofNurseryGuide />} />
        <Route path="/blog/physics-of-silence-acoustic-glass" element={<PhysicsOfSilenceGuide />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/service-areas/kensington-chelsea" element={<KensingtonChelsea />} />
        <Route path="/service-areas/westminster" element={<Westminster />} />
        <Route path="/service-areas/camden" element={<Camden />} />
        <Route path="/service-areas/islington" element={<Islington />} />
        <Route path="/sash-windows" element={<SashWindowsService />} />
        <Route path="/bay-window-options" element={<BayWindowOptions />} />
        <Route path="/heritage-listed" element={<HeritageListed />} />
        <Route path="/sound-insulation" element={<SoundInsulation />} />
        <Route path="/cost-guide" element={<CostGuide />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
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
