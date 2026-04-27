import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShieldCheck, FileCheck, Thermometer, Volume2, Droplets, Building2, Scale, ScrollText, Landmark, Mail, Copy, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { createFAQSchema } from "@/utils/faq-schema";

const sections = [
  { id: "planning", label: "Planning & LBC", icon: Building2 },
  { id: "article-4", label: "Article 4 & Conservation", icon: Landmark },
  { id: "building-regs", label: "Building Regulations", icon: FileCheck },
  { id: "pas-2035", label: "PAS 2035 / MEES", icon: ScrollText },
  { id: "acoustics", label: "Acoustic Compliance", icon: Volume2 },
  { id: "condensation", label: "Condensation & Moisture", icon: Droplets },
  { id: "fire-security", label: "Fire & Security", icon: ShieldCheck },
];

const planningFAQs = [
  {
    question: "Do I need planning permission for secondary glazing?",
    answer:
      "Secondary glazing is fitted internally and does not alter the external appearance of the building, so it is generally not classed as development under the Town and Country Planning (General Permitted Development) (England) Order 2015. Planning permission is therefore not normally required, even within Conservation Areas or Article 4 Direction zones. We recommend confirming in writing with the Local Planning Authority where Article 4(1) restrictions apply to internal alterations of designated buildings."
  },
  {
    question: "Is Listed Building Consent (LBC) required?",
    answer:
      "Listed Building Consent is required for any works that affect the character of a listed building (Planning (Listed Buildings and Conservation Areas) Act 1990, s.7). Most conservation officers accept slimline aluminium secondary glazing on Grade II listed properties as a reversible, sympathetic intervention. We provide LBC-ready specification packs including method statements, fixing details, sightline drawings (typically 22-40mm frame depth) and reversibility statements aligned with Historic England guidance HEAG 161 (Energy Efficiency and Historic Buildings)."
  },
  {
    question: "How does secondary glazing perform in Conservation Areas?",
    answer:
      "Because installation is on the room side of the existing window, secondary glazing is the preferred energy and acoustic upgrade in Conservation Areas where original timber sash or Crittall steel frames must be retained. Sightlines are typically concealed behind the existing reveal, and powder-coated finishes (RAL or BS 4800) match heritage timber profiles. Local authorities frequently cite secondary glazing in their Conservation Area Appraisals as the recommended approach to thermal upgrades."
  },
  {
    question: "What evidence do specifiers need to submit to the LPA?",
    answer:
      "A typical submission pack includes: existing and proposed window sections at 1:5, manufacturer's technical data sheet, Rw / U-value / W/m²K performance certificates to BS EN ISO 10140-2 and BS EN 12567-1, a heritage impact statement, and confirmation of full reversibility (no irreversible damage to primary joinery). We supply this documentation as standard for listed and Article 4 properties."
  }
];

const buildingRegsFAQs = [
  {
    question: "Which Approved Documents apply to secondary glazing?",
    answer:
      "Approved Document L (Conservation of fuel and power) Volume 1: Dwellings (2021 edition, 2023 amendments) sets the headline requirement: replacement or new window units must achieve a U-value no worse than 1.4 W/m²K (whole-window) or a Window Energy Rating of Band B. Approved Document F (Ventilation), Approved Document K (Protection from falling — restrictors and glass to BS EN 12600 Class 1B1 below 800mm), and Approved Document B (Fire safety — egress sizing 0.33m² minimum, 450mm clear opening) all apply to secondary glazing in habitable rooms."
  },
  {
    question: "Are listed buildings exempt from Part L?",
    answer:
      "Regulation 9 of the Building Regulations 2010 exempts listed buildings, buildings in Conservation Areas, and scheduled monuments from full compliance with Part L where compliance would unacceptably alter character or appearance. Secondary glazing is the recognised compromise: it delivers measurable U-value improvement (centre-pane values typically 1.6-1.9 W/m²K combined with single-glazed primary) without triggering the exemption clause."
  },
  {
    question: "What U-values can secondary glazing achieve?",
    answer:
      "Combined U-values depend on the primary window, cavity depth and secondary glass selection. Typical combined performance: single-glazed primary + 4mm float secondary at 100mm gap = 2.0 W/m²K; single-glazed primary + 6.8mm acoustic laminate secondary at 150mm gap = 1.8 W/m²K; single-glazed primary + Pilkington K Glass low-E secondary at 100mm gap = 1.6 W/m²K. All values measured to BS EN 673."
  },
  {
    question: "Does Approved Document Q (security) apply?",
    answer:
      "Approved Document Q applies to easily accessible windows and doors in new dwellings. Where secondary glazing is specified for security upgrade, units should be tested to PAS 24:2022 with laminated glass meeting BS EN 356 P1A minimum (P4A or higher for high-risk sites). This is increasingly specified in commercial and high-net-worth residential projects to meet insurer requirements."
  }
];

const pas2035FAQs = [
  {
    question: "How does secondary glazing fit within PAS 2035:2023?",
    answer:
      "PAS 2035:2023 (Retrofitting dwellings for improved energy efficiency) classifies secondary glazing as a 'fabric measure' and recommends it specifically for traditional buildings (pre-1919) where the moisture risk of replacement double glazing is unacceptable. Risk Path B (traditional construction) and Risk Path C (protected buildings) require a Retrofit Coordinator to oversee design, with secondary glazing typically installed alongside background ventilation upgrades to manage the fSi (temperature factor) at internal surfaces."
  },
  {
    question: "What MEES obligations does this address?",
    answer:
      "The Minimum Energy Efficiency Standard (MEES) currently requires non-domestic let property to achieve EPC Band E. Government policy (2023 consultation response) targets EPC Band C by 2028 for commercial lettings, with proposed enforcement caps of £10,000 per property. Secondary glazing typically delivers a 5-15 SAP point uplift on heritage and Victorian commercial stock, often the most cost-effective single measure for moving from Band F/G to Band C without facade alterations."
  },
  {
    question: "Is secondary glazing eligible for ECO4 or GBIS funding?",
    answer:
      "ECO4 (Energy Company Obligation 4) and the Great British Insulation Scheme accept secondary glazing as an eligible measure where installed to PAS 2035 by a TrustMark-registered Retrofit Installer working under a Retrofit Coordinator. The measure must be modelled in the SAP/RdSAP assessment with U-value evidence. We can provide installer credentials and product certification suitable for ECO4 submissions."
  },
  {
    question: "What is the HEM and how does it assess secondary glazing?",
    answer:
      "The Home Energy Model (HEM), replacing SAP from 2025/2026, calculates whole-dwelling energy performance with improved treatment of partial-fabric measures. HEM recognises secondary glazing as a distinct intervention with its own U-value input, rather than averaging it into the host window — a significant improvement for heritage retrofit modelling, where previously the benefit was understated."
  }
];

const acousticsFAQs = [
  {
    question: "What acoustic standards apply to commercial specifications?",
    answer:
      "BS 8233:2014 (Guidance on sound insulation and noise reduction for buildings) sets internal ambient noise targets: 35 dB LAeq,16h in living rooms, 30 dB LAeq,8h in bedrooms. ProPG: Planning & Noise (2017) is referenced in many Local Plans for residential developments near transport corridors. For schools, BB93:2015 mandates 30-35 dB LAeq,30min in teaching spaces. Hospitals follow HTM 08-01 with 35-45 dB targets depending on room use."
  },
  {
    question: "What Rw rating do I need to specify?",
    answer:
      "Rw is the weighted sound reduction index measured to BS EN ISO 10140-2 in a laboratory. For a 5 dB internal reduction target on a typical urban facade with 65 dB external road noise, specify Rw 38-42 dB. For aircraft noise corridors (Heathrow, City Airport) target Rw 45-50 dB using 10.8mm Stadip Silence acoustic laminate at a 100-200mm cavity. Always check the C and Ctr spectrum adaptation terms — Ctr is the relevant term for low-frequency traffic noise."
  },
  {
    question: "Does secondary glazing eliminate the coincidence dip?",
    answer:
      "The coincidence dip in single glass typically occurs at 2-4 kHz and reduces real-world performance. Stadip Silence and similar acoustic PVB laminates use a viscoelastic interlayer that damps the coincidence frequency, raising in-situ Rw by 3-5 dB compared to monolithic glass of equivalent mass. The dual-leaf MAM (mass-air-mass) resonance of secondary glazing is tuned by cavity depth — 100mm minimum is required to push resonance below 80 Hz and out of the speech intelligibility range."
  }
];

const condensationFAQs = [
  {
    question: "Will secondary glazing cause interstitial condensation?",
    answer:
      "Properly designed secondary glazing reduces surface condensation on the primary window by raising its internal surface temperature. The risk to manage is interstitial condensation within the cavity. BS 5250:2021 (Management of moisture in buildings) recommends a vented cavity (small drilled vents to outside) or a hygroscopic primary surface (timber). Sealed cavities should incorporate desiccant strips. We design to maintain the temperature factor (fSi) above 0.75 at all interfaces — the BRE Information Paper IP 1/06 mould-growth threshold."
  },
  {
    question: "How does humidity control interact with the design?",
    answer:
      "Internal RH should be maintained between 40% and 60% (CIBSE Guide A). Above 65% RH at 20°C, the dew point rises to ~13°C and condensation occurs on any surface below that temperature. Trickle ventilators (Approved Document F: 8000mm² equivalent area per habitable room) and MVHR systems are recommended in conjunction with secondary glazing on heritage properties to maintain hygrothermal balance."
  },
  {
    question: "Is secondary glazing compatible with breathable construction?",
    answer:
      "Yes — secondary glazing affects only the window opening, not the surrounding wall fabric, so vapour-open lime plaster and breathable wall build-ups remain unaffected. This is the principal reason Historic England, SPAB and the National Trust prefer secondary glazing over IGU replacement on traditional pre-1919 stock."
  }
];

const fireSecurityFAQs = [
  {
    question: "Does secondary glazing affect means of escape?",
    answer:
      "Approved Document B Volume 1 requires escape windows in habitable rooms above ground floor to provide an unobstructed openable area of at least 0.33m² with a minimum dimension of 450mm. Hinged or vertical/horizontal sliding secondary glazing units are designed to match the primary opening and must not reduce the egress aperture below this threshold. Lift-out panels are not permitted on designated escape windows above ground floor."
  },
  {
    question: "What fire ratings can be achieved?",
    answer:
      "Where the secondary system is required to contribute to compartmentation (e.g. flats over commercial use, escape corridors), Pyrobel or Pyroguard fire-rated laminates can be specified to E30, EI30 or EI60 to BS EN 1364-1. This is uncommon in domestic contexts but frequent in HMO conversions and listed commercial buildings."
  },
  {
    question: "Which security ratings should I specify?",
    answer:
      "BS EN 356 classifies impact resistance from P1A (drop-ball) to P8B (axe attack). Typical insurer-accepted upgrades use P2A or P4A laminates. LPS 1175 SR2 is required for high-risk commercial; PAS 24:2022 for residential new-build under Approved Document Q. Combine with multipoint locking on opening lights and key-locked handles to satisfy underwriter requirements on Hiscox / Chubb high-net-worth policies."
  }
];

const allFAQs = [
  ...planningFAQs,
  ...buildingRegsFAQs,
  ...pas2035FAQs,
  ...acousticsFAQs,
  ...condensationFAQs,
  ...fireSecurityFAQs,
];

const ComplianceHub = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const lpaEmailSubject = "Pre-application enquiry: internal secondary glazing — [Property address, Postcode]";
  const lpaEmailBody = `Dear [Conservation Officer / Planning Team],

I am writing to confirm the planning and Listed Building Consent (LBC) position for the proposed installation of internal secondary glazing at the address below.

Property: [Full address, postcode]
Designation: [Grade II listed / within [Name] Conservation Area / subject to Article 4(1) Direction dated [date]]
UPRN / Planning Ref (if known): [____]
Applicant / Agent: [Name, role]

Proposal summary
- Installation of slimline aluminium secondary glazing on the room side of existing windows.
- Frame depth approx. 22–40mm, finished in [RAL / heritage colour] to recede behind primary reveal.
- Glass build-up: [e.g. 6.8mm Stadip Silence acoustic laminate] at a [100–200mm] cavity.
- Mechanical fixings into existing staff bead / sub-frame / window lining only — no fixings into primary joinery, masonry reveal, or historic plasterwork.
- Fully reversible: all components removable without trace and without damage to the host fabric.
- No alteration to the external elevation; no change to opening lights, sightlines, glazing bars, shutters, architraves or sash boxes as viewed from outside.

Confirmation requested
1. Planning permission: Please confirm that the works fall outside the definition of "development" under the Town and Country Planning Act 1990 s.55, and that any Article 4(1) Direction in force at this address does not extend to internal alterations of this nature.
2. Listed Building Consent: Please confirm whether LBC is required under the Planning (Listed Buildings and Conservation Areas) Act 1990 s.7, given the reversible internal nature of the works and their alignment with Historic England guidance HEAG 161 (Energy Efficiency and Historic Buildings) and HEAG 326 (Traditional Windows: Their Care, Repair and Upgrading, 2017).
3. Conservation Area Appraisal: Please confirm whether the relevant Conservation Area Appraisal or Management Plan identifies secondary glazing as an acceptable thermal/acoustic upgrade route.
4. Submission requirements: If LBC is required, please confirm the documents you wish to receive (we can supply: 1:5 sightline section, manufacturer datasheet, Rw / U-value certification to BS EN ISO 10140-2 and BS EN 12567-1, heritage impact statement, reversibility schedule, method statement).
5. Pre-application fee: Please confirm any applicable pre-app fee and expected response timescale.

I would be grateful for written confirmation that we can append to the project record. Please contact me on [phone] or [email] if any clarification is needed before formal submission.

Yours faithfully,

[Name]
[Practice / Company]
[RIBA / RICS / CIAT membership number, if applicable]
[Phone] | [Email]`;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(`Subject: ${lpaEmailSubject}\n\n${lpaEmailBody}`);
      setCopied(true);
      toast({ title: "Email template copied", description: "Paste into your mail client and replace the bracketed fields." });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      toast({ title: "Copy failed", description: "Please select the text manually and copy.", variant: "destructive" });
    }
  };

  const faqSchema = createFAQSchema(allFAQs, {
    includeAIOptimization: true,
    audience: "architects, specifiers, retrofit coordinators and property owners",
    language: "en-GB",
  });

  return (
    <div className="min-h-screen bg-background">
      <EnhancedSEO
        title="Secondary Glazing Compliance Hub | Planning, Part L, PAS 2035 & Acoustics"
        description="Specifier-focused FAQ and compliance reference for secondary glazing: planning permission, Listed Building Consent, Approved Documents L/F/K/Q, PAS 2035, MEES, BS 8233 and condensation control."
        canonicalPath="/compliance-hub"
        type="article"
        keywords={[
          "secondary glazing planning permission",
          "listed building consent secondary glazing",
          "approved document L secondary glazing",
          "PAS 2035 secondary glazing",
          "MEES secondary glazing compliance",
          "BS 8233 secondary glazing",
          "secondary glazing condensation",
        ]}
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "Secondary Glazing Compliance Hub",
            about: [
              "Planning permission",
              "Listed Building Consent",
              "Building Regulations Part L",
              "PAS 2035:2023",
              "MEES",
              "BS 8233:2014",
              "BS 5250:2021",
              "BS EN 356",
            ],
            audience: { "@type": "Audience", audienceType: "Architects, specifiers, retrofit coordinators" },
            inLanguage: "en-GB",
          })}
        </script>
      </Helmet>

      <MainNav />

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Hero */}
        <header className="mb-12 text-center">
          <Badge variant="secondary" className="mb-4">Specifier Reference</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Compliance Hub: Planning, Building Regs &amp; Performance
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A technical reference for architects, retrofit coordinators and property managers
            covering the regulatory framework, performance standards and design principles
            governing secondary glazing in the UK.
          </p>
        </header>

        {/* Quick nav */}
        <nav aria-label="Compliance topics" className="mb-12">
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {sections.map(({ id, label, icon: Icon }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="flex items-center gap-2 p-3 rounded-lg border border-border bg-card hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-medium"
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Standards-at-a-glance table */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="h-5 w-5" />
              Standards at a glance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 px-3 font-semibold">Domain</th>
                    <th className="text-left py-2 px-3 font-semibold">Standard / Document</th>
                    <th className="text-left py-2 px-3 font-semibold">Key requirement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="py-2 px-3">Thermal</td>
                    <td className="py-2 px-3">Approved Doc L (2021/23)</td>
                    <td className="py-2 px-3">U ≤ 1.4 W/m²K (replacement); secondary as exempt-route equivalent</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">Heritage</td>
                    <td className="py-2 px-3">P(LB&amp;CA)A 1990 s.7</td>
                    <td className="py-2 px-3">Listed Building Consent for character-affecting works</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">Retrofit</td>
                    <td className="py-2 px-3">PAS 2035:2023</td>
                    <td className="py-2 px-3">Risk Path B/C; Retrofit Coordinator oversight</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">Acoustics</td>
                    <td className="py-2 px-3">BS 8233:2014 / BB93:2015</td>
                    <td className="py-2 px-3">35 dB LAeq living; 30 dB LAeq bedroom</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">Moisture</td>
                    <td className="py-2 px-3">BS 5250:2021</td>
                    <td className="py-2 px-3">fSi &gt; 0.75; managed cavity ventilation</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">Security</td>
                    <td className="py-2 px-3">BS EN 356 / PAS 24:2022</td>
                    <td className="py-2 px-3">P1A–P8B impact; PAS 24 for ADQ compliance</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">Egress</td>
                    <td className="py-2 px-3">Approved Doc B / K</td>
                    <td className="py-2 px-3">≥ 0.33 m² aperture; 450mm clear; restrictors below 800mm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Sections */}
        <section id="planning" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Planning &amp; Listed Building Consent</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Secondary glazing is the preferred fabric upgrade for designated heritage assets
            because it leaves the external elevation unchanged. This section covers planning
            permission thresholds, LBC documentation and Conservation Area considerations.
          </p>
          <Accordion type="single" collapsible className="w-full faq-content">
            {planningFAQs.map((faq, i) => (
              <AccordionItem key={i} value={`planning-${i}`}>
                <AccordionTrigger className="faq-question text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="faq-answer text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section id="building-regs" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3 mb-4">
            <FileCheck className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Building Regulations</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Approved Documents L, F, K, Q and B all bear on secondary glazing specification.
            The exemption pathway under Regulation 9 is the principal route for listed and
            traditionally constructed buildings.
          </p>
          <Accordion type="single" collapsible className="w-full faq-content">
            {buildingRegsFAQs.map((faq, i) => (
              <AccordionItem key={i} value={`br-${i}`}>
                <AccordionTrigger className="faq-question text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="faq-answer text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section id="pas-2035" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3 mb-4">
            <ScrollText className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">PAS 2035 &amp; MEES</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            PAS 2035:2023 is the governing standard for funded retrofit. Secondary glazing
            features prominently as the recommended measure for traditional and protected
            buildings under Risk Paths B and C.
          </p>
          <Accordion type="single" collapsible className="w-full faq-content">
            {pas2035FAQs.map((faq, i) => (
              <AccordionItem key={i} value={`pas-${i}`}>
                <AccordionTrigger className="faq-question text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="faq-answer text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section id="acoustics" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3 mb-4">
            <Volume2 className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Acoustic Compliance</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Acoustic performance is specified by Rw (with C and Ctr adaptation terms) and
            verified against BS 8233, ProPG, BB93 or HTM 08-01 as appropriate to the building
            use class.
          </p>
          <Accordion type="single" collapsible className="w-full faq-content">
            {acousticsFAQs.map((faq, i) => (
              <AccordionItem key={i} value={`ac-${i}`}>
                <AccordionTrigger className="faq-question text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="faq-answer text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section id="condensation" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3 mb-4">
            <Droplets className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Condensation &amp; Moisture</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            BS 5250:2021 governs moisture management. Cavity ventilation strategy and
            internal RH control are the two principal levers for avoiding interstitial and
            surface condensation in secondary glazed assemblies.
          </p>
          <Accordion type="single" collapsible className="w-full faq-content">
            {condensationFAQs.map((faq, i) => (
              <AccordionItem key={i} value={`cond-${i}`}>
                <AccordionTrigger className="faq-question text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="faq-answer text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section id="fire-security" className="mb-16 scroll-mt-24">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Fire, Egress &amp; Security</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Approved Documents B, K and Q define the life-safety envelope. Security
            specifications additionally need to satisfy insurer requirements under BS EN 356
            and LPS 1175.
          </p>
          <Accordion type="single" collapsible className="w-full faq-content">
            {fireSecurityFAQs.map((faq, i) => (
              <AccordionItem key={i} value={`fs-${i}`}>
                <AccordionTrigger className="faq-question text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="faq-answer text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* CTA */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <Thermometer className="h-10 w-10 mx-auto mb-4 opacity-90" />
            <h2 className="text-2xl font-bold mb-3">Need a specification pack for your project?</h2>
            <p className="mb-6 opacity-90 max-w-2xl mx-auto">
              We supply LBC-ready submission packs, U-value certificates, Rw test data and
              PAS 2035-aligned product datasheets for architects and retrofit coordinators.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link to="/quote-request">Request a Specification Pack</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/contact">Speak to a Technical Advisor</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default ComplianceHub;