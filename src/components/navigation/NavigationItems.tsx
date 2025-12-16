
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
      { title: "Listed Buildings", href: "/commercial/listed-buildings", description: "Conservation-compliant solutions for listed properties.", icon: VerticalSlidingIcon },
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
