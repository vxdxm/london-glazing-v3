
import type { FC } from "react";
import {
  VerticalSlidingIcon,
  CasementIcon,
  HingedPanelIcon,
  HorizontalSlidingIcon,
  LiftOutIcon,
  TiltTurnIcon,
  MagneticIcon,
  FixedPanelIcon,
} from "@/components/icons/GlazingTypeIcons";

interface NavItem {
  title: string;
  href: string;
  description: string;
  icon?: FC<{ className?: string; size?: number }>;
}

interface GlazingSection {
  title: string;
  description: string;
  mainLink: string;
  items: NavItem[];
}

export const glazingOptions: GlazingSection[] = [
  {
    title: "Residential",
    description: "Explore our residential glazing solutions.",
    mainLink: "/residential",
    items: [
      { title: "Sash Windows", href: "/residential/sash-windows", description: "Traditional sash window solutions.", icon: VerticalSlidingIcon },
      { title: "Casement Windows", href: "/residential/casement-windows", description: "Modern casement window options.", icon: CasementIcon },
      { title: "Bay Windows", href: "/residential/bay-windows", description: "Beautiful bay window installations.", icon: HingedPanelIcon },
      { title: "Horizontal Sliding", href: "/residential/horizontal-sliding", description: "Smooth-operating horizontal sliding solutions.", icon: HorizontalSlidingIcon },
      { title: "Lift Out", href: "/residential/lift-out", description: "Removable panels for easy maintenance.", icon: LiftOutIcon },
      { title: "Fixed Secondary Glazing", href: "/residential/fixed-secondary-glazing", description: "Maximum performance permanent glazing solutions.", icon: FixedPanelIcon },
      { title: "Combination Units", href: "/residential/combination", description: "Versatile mixed-style window solutions.", icon: TiltTurnIcon },
      { title: "Energy Performance", href: "/residential/energy-performance", description: "Maximize home energy efficiency with secondary glazing.", icon: MagneticIcon },
      { title: "Modern Solutions", href: "/residential/modern-solutions", description: "Contemporary window design and functionality.", icon: HorizontalSlidingIcon },
      { title: "Traditional Options", href: "/residential/traditional-options", description: "Classic window styles preserved with modern technology.", icon: VerticalSlidingIcon },
      { title: "Crittall Windows", href: "/residential/crittall-windows", description: "Heritage-sensitive solutions for Crittall windows.", icon: FixedPanelIcon },
      { title: "Single & Double Glazed", href: "/residential/single-double-glazed", description: "Compare glazing options for your home.", icon: FixedPanelIcon }
    ],
  },
  {
    title: "Commercial",
    description: "Discover our commercial glazing services.",
    mainLink: "/commercial",
    items: [
      { title: "Office Buildings", href: "/commercial/office-buildings", description: "Glazing solutions for office buildings.", icon: FixedPanelIcon },
      { title: "Hospitality Sector", href: "/commercial/hospitality-sector", description: "Premium solutions for hotels and restaurants.", icon: HingedPanelIcon },
      { title: "Healthcare Industry", href: "/commercial/healthcare-industry", description: "Premium solutions for healthcare facilities.", icon: FixedPanelIcon },
      { title: "Educational Sector", href: "/commercial/educational-sector", description: "Specialized solutions for educational institutions.", icon: CasementIcon },
      { title: "Retail Spaces", href: "/commercial/retail-spaces", description: "Solutions for shops and retail environments.", icon: FixedPanelIcon },
    ],
  },
  {
    title: "Areas",
    description: "Find secondary glazing specialists in your area.",
    mainLink: "/locations",
    items: [
      { title: "Central London", href: "/areas/central-london", description: "Westminster, City, Kensington & Chelsea.", icon: FixedPanelIcon },
      { title: "North London", href: "/areas/north-london", description: "Camden, Islington, Barnet, Hampstead.", icon: FixedPanelIcon },
      { title: "South London", href: "/areas/south-london", description: "Wandsworth, Greenwich, Richmond.", icon: FixedPanelIcon },
      { title: "West London", href: "/areas/west-london", description: "Hammersmith, Ealing, Hounslow.", icon: FixedPanelIcon },
      { title: "East London", href: "/areas/east-london", description: "Hackney, Tower Hamlets, Newham.", icon: FixedPanelIcon },
      { title: "Home Counties", href: "/areas/home-counties", description: "Surrey, Kent, Hertfordshire, Buckinghamshire.", icon: FixedPanelIcon },
      { title: "Kensington & Chelsea", href: "/areas/kensington-chelsea", description: "Stucco terraces & listed buildings.", icon: FixedPanelIcon },
      { title: "Westminster", href: "/service-areas/westminster", description: "Georgian townhouses & Mayfair.", icon: FixedPanelIcon },
      { title: "Camden", href: "/service-areas/camden", description: "Victorian terraces & Primrose Hill.", icon: FixedPanelIcon },
      { title: "Islington", href: "/service-areas/islington", description: "Georgian squares & Canonbury.", icon: FixedPanelIcon },
      { title: "Belgravia", href: "/locations/georgian-belgravia", description: "Georgian stucco & embassy quarter.", icon: FixedPanelIcon },
      { title: "Chelsea", href: "/locations/chelsea-draught-proofing", description: "Sash windows & draught proofing.", icon: FixedPanelIcon },
      { title: "Notting Hill", href: "/locations/notting-hill-security", description: "Security glazing for stucco terraces.", icon: FixedPanelIcon },
      { title: "Hampstead", href: "/locations/edwardian-hampstead", description: "Edwardian villas near the Heath.", icon: FixedPanelIcon },
      { title: "Richmond", href: "/locations/conservation-richmond", description: "Riverside conservation areas.", icon: FixedPanelIcon },
      { title: "Shoreditch", href: "/locations/shoreditch-urban-noise", description: "Converted warehouses & urban noise.", icon: FixedPanelIcon },
      { title: "Clapham", href: "/locations/clapham-busy-roads", description: "Victorian terraces on busy roads.", icon: FixedPanelIcon },
      { title: "King's Cross", href: "/locations/kings-cross-train-noise", description: "Train & platform noise mitigation.", icon: FixedPanelIcon },
      { title: "Canary Wharf", href: "/locations/canary-wharf-offices", description: "Corporate towers & tall buildings.", icon: FixedPanelIcon },
      { title: "Heathrow Corridor", href: "/locations/heathrow-aircraft", description: "Aircraft noise reduction.", icon: FixedPanelIcon },
      { title: "Mayfair", href: "/locations/mayfair", description: "Grade II Georgian townhouses W1.", icon: FixedPanelIcon },
      { title: "Marylebone", href: "/locations/marylebone", description: "Harley Street & Georgian homes.", icon: FixedPanelIcon },
      { title: "Fitzrovia", href: "/locations/fitzrovia", description: "Media district & Georgian terraces.", icon: FixedPanelIcon },
      { title: "Bloomsbury", href: "/locations/bloomsbury", description: "Georgian squares & UCL estate.", icon: FixedPanelIcon },
      { title: "Pimlico", href: "/locations/pimlico", description: "Regency stucco terraces SW1.", icon: FixedPanelIcon },
      { title: "Fulham", href: "/locations/fulham", description: "Victorian & Edwardian family homes.", icon: FixedPanelIcon },
      { title: "Wimbledon", href: "/locations/wimbledon", description: "Village conservation & family homes.", icon: FixedPanelIcon },
      { title: "Highgate", href: "/locations/highgate", description: "Georgian village N6 conservation.", icon: FixedPanelIcon },
      { title: "All Areas We Serve", href: "/areas-we-serve", description: "Full directory of London coverage.", icon: FixedPanelIcon },
    ],
  },
  {
    title: "Specialized",
    description: "Learn about our specialized glazing options.",
    mainLink: "/specialized",
    items: [
      { title: "Acoustic Glazing", href: "/specialized/acoustic-glazing", description: "Reduce noise with our acoustic solutions.", icon: FixedPanelIcon },
      { title: "Thermal Insulation", href: "/specialized/thermal-insulation", description: "Improve energy efficiency with thermal glazing.", icon: MagneticIcon },
      { title: "Security Glazing", href: "/specialized/security-glazing", description: "Enhance security with our specialized glass.", icon: FixedPanelIcon },
      { title: "UV Protection", href: "/specialized/uv-protection", description: "Protect furnishings from UV damage.", icon: FixedPanelIcon },
      { title: "Condensation Control", href: "/specialized/condensation-control", description: "Prevent condensation with our solutions.", icon: MagneticIcon },
      { title: "Insurance Premiums", href: "/specialized/insurance-premiums", description: "Reduce insurance costs with security glazing.", icon: FixedPanelIcon },
      { title: "Building Regulations", href: "/specialized/secondary-glazing-building-regulations", description: "Compliance guide for secondary glazing installations.", icon: FixedPanelIcon },
      { title: "Sound Transmission Guide", href: "/specialized/sound-transmission-guide", description: "Understanding decibels and sound insulation.", icon: FixedPanelIcon },
      { title: "Sustainability Impact", href: "/sustainability-impact-tracker-secondary-glazing", description: "Track environmental benefits of secondary glazing.", icon: MagneticIcon },
      { title: "Glazing Repairs", href: "/secondary-glazing-repairs", description: "Expert repair services for secondary glazing systems.", icon: HingedPanelIcon },
      { title: "Original Windows", href: "/specialized/secondary-glazing-original-windows", description: "Solutions for historic window preservation.", icon: VerticalSlidingIcon },
      { title: "Air Gap Secondary Glazing", href: "/specialized/air-gap-secondary-glazing", description: "Optimize air gap for maximum performance.", icon: HorizontalSlidingIcon },
    ],
  },
];
