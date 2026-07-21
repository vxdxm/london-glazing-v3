export interface NeighbourhoodData {
  slug: string;
  name: string;
  region: string;
  regionPath: string;
  postcodes: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  propertyTypes: string;
  keyChallenges: { title: string; body: string }[];
  recommendedSpec: {
    frame: string;
    glass: string;
    airGap: string;
    performance: string;
  };
  planningNotes: string;
  nearby: { name: string; path: string }[];
  faqs: { q: string; a: string }[];
}

export const neighbourhoodPages: NeighbourhoodData[] = [
  {
    slug: "mayfair",
    name: "Mayfair",
    region: "Central London",
    regionPath: "/areas/central-london",
    postcodes: "W1J, W1K, W1S",
    metaTitle: "Secondary Glazing Mayfair W1 | Listed & Georgian Specialists",
    metaDescription:
      "Discreet, planning-approved secondary glazing for Mayfair's Grade II listed Georgian townhouses, embassies and luxury retail. 45–54dB noise reduction, Westminster LPA compliant.",
    h1: "Secondary Glazing in Mayfair",
    intro:
      "Mayfair sits inside the Mayfair Conservation Area and holds one of the highest densities of Grade II listed Georgian and early Victorian townhouses in Central London. Traffic noise from Park Lane, Piccadilly and Berkeley Square, combined with heritage constraints on external window replacement, makes reversible secondary glazing the compliant route to modern acoustic and thermal performance.",
    propertyTypes:
      "Grade II listed Georgian townhouses, Edwardian mansion blocks, embassy residences, Bond Street flagship retail, boutique hotels and Mayfair members' clubs.",
    keyChallenges: [
      {
        title: "Traffic and pedestrian noise",
        body: "Park Lane, Piccadilly and Oxford Street carry sustained 70–78 dB LAeq daytime traffic. Original single-glazed sashes attenuate only 25–28 dB Rw — inadequate for hotel and residential use.",
      },
      {
        title: "Grade II listing constraints",
        body: "External appearance of sashes, glazing bars and reveals must be preserved. Listed Building Consent (LBC) via Westminster City Council is mandatory before installation.",
      },
      {
        title: "Deep window reveals",
        body: "Georgian sashes typically sit in reveals 150–220mm deep, giving room for a 100mm optimal cavity — ideal for premium acoustic performance.",
      },
    ],
    recommendedSpec: {
      frame: "Slimline aluminium vertical sliding, colour-matched RAL to existing joinery",
      glass: "10.8mm Stadip Silence acoustic laminate",
      airGap: "100–150mm cavity (typical Mayfair reveal depth)",
      performance: "Rw 45–48 dB, U-value 1.7 W/m²K, ≤80% traffic noise perceived reduction",
    },
    planningNotes:
      "Westminster City Council requires LBC for all listed properties. Article 4 Directions apply across most of Mayfair — even non-listed façade elements are protected. Submit method statements confirming full reversibility, and use the LPA pre-application service for schemes covering more than 3 windows.",
    nearby: [
      { name: "Belgravia", path: "/locations/georgian-belgravia" },
      { name: "Marylebone", path: "/locations/marylebone" },
      { name: "Westminster", path: "/service-areas/westminster" },
      { name: "Notting Hill", path: "/locations/notting-hill-security" },
    ],
    faqs: [
      {
        q: "Do I need Listed Building Consent for secondary glazing in Mayfair?",
        a: "Yes for any listed property, and often recommended for unlisted properties inside the Mayfair Conservation Area. Secondary glazing is internal and reversible, so Westminster City Council typically approves compliant schemes.",
      },
      {
        q: "How much noise reduction can I expect on Park Lane or Piccadilly?",
        a: "With 10.8mm Stadip Silence laminate glass and a 100mm cavity we consistently deliver Rw 45–48 dB — equivalent to roughly 80% perceived noise reduction versus a single-glazed sash.",
      },
    ],
  },
  {
    slug: "marylebone",
    name: "Marylebone",
    region: "Central London",
    regionPath: "/areas/central-london",
    postcodes: "W1G, W1H, W1U, NW1",
    metaTitle: "Secondary Glazing Marylebone W1 | Harley Street & Georgian Homes",
    metaDescription:
      "Secondary glazing for Marylebone's Harley Street clinics, Georgian townhouses and mansion blocks. Discreet acoustic and thermal upgrades approved by Westminster LPA.",
    h1: "Secondary Glazing in Marylebone",
    intro:
      "Marylebone combines dense Georgian and Victorian residential fabric with the Harley Street medical quarter. Marylebone High Street, Baker Street and Marylebone Road generate sustained road noise, and much of the area sits inside the Harley Street or East Marylebone conservation areas where original window fabric must be retained.",
    propertyTypes:
      "Georgian and Regency townhouses, red-brick Edwardian mansion blocks, Harley Street medical consulting rooms, boutique hotels along Baker Street.",
    keyChallenges: [
      {
        title: "Marylebone Road traffic",
        body: "The A501 through-route generates 75+ dB LAeq at first-floor level. Consulting rooms on Harley Street require confidentiality-grade acoustic isolation.",
      },
      {
        title: "Medical confidentiality",
        body: "Consulting rooms need Rw 42+ dB between rooms and to the street to meet BMA privacy guidance.",
      },
      {
        title: "Conservation area status",
        body: "Harley Street and East Marylebone conservation areas restrict external alterations; secondary glazing behind original sashes is the recommended route.",
      },
    ],
    recommendedSpec: {
      frame: "Slimline aluminium horizontal sliders or hinged casements for consulting rooms",
      glass: "10.8mm Stadip Silence acoustic laminate",
      airGap: "80–120mm cavity",
      performance: "Rw 44–47 dB, U-value 1.8 W/m²K, BMA privacy-compliant",
    },
    planningNotes:
      "Westminster City Council administers all Marylebone LPA enquiries. Conservation area consent may be required for visible frame colour changes. LBC required for listed medical practices.",
    nearby: [
      { name: "Mayfair", path: "/locations/mayfair" },
      { name: "Fitzrovia", path: "/locations/fitzrovia" },
      { name: "Bloomsbury", path: "/locations/bloomsbury" },
      { name: "Westminster", path: "/service-areas/westminster" },
    ],
    faqs: [
      {
        q: "Can secondary glazing meet BMA confidentiality standards for Harley Street clinics?",
        a: "Yes. A 10.8mm laminate + 100mm cavity system reliably exceeds Rw 42 dB, meeting BMA privacy guidance for consulting rooms.",
      },
      {
        q: "Will installation disturb clinic operations?",
        a: "Installation is typically 1 day per treatment room with no external works. Most clinics schedule installs on weekends or evenings.",
      },
    ],
  },
  {
    slug: "fitzrovia",
    name: "Fitzrovia",
    region: "Central London",
    regionPath: "/areas/central-london",
    postcodes: "W1T, W1W",
    metaTitle: "Secondary Glazing Fitzrovia W1 | Georgian & Media District Specialists",
    metaDescription:
      "Acoustic and thermal secondary glazing for Fitzrovia's Georgian townhouses, media offices and mansion blocks. Camden and Westminster LPA-approved installations.",
    h1: "Secondary Glazing in Fitzrovia",
    intro:
      "Fitzrovia is split between Westminster (south of Mortimer Street) and Camden (north). Its Georgian and Victorian fabric shelters advertising agencies, media studios and residential mansion blocks that share walls with restaurants and late-night venues along Charlotte Street and Goodge Street.",
    propertyTypes:
      "Georgian townhouses (some converted to offices), red-brick Edwardian mansion blocks, media agency studios, boutique restaurants.",
    keyChallenges: [
      {
        title: "Mixed-use late-night noise",
        body: "Restaurant plant noise and street-drinker noise from Charlotte Street and Goodge Street routinely exceed 65 dB after 22:00. Bedrooms directly above venues need Rw 45+ dB.",
      },
      {
        title: "Media studio acoustics",
        body: "Post-production and voice-over studios need Rw 48+ dB to meet EBU R 128 background-noise floors.",
      },
      {
        title: "Dual LPA area",
        body: "The Camden/Westminster boundary runs east–west through Fitzrovia — check which authority governs each address before submitting.",
      },
    ],
    recommendedSpec: {
      frame: "Slimline aluminium vertical sliders (residential) or fixed panels (studios)",
      glass: "12.8mm Stadip Silence for studios, 10.8mm for residential",
      airGap: "100–150mm cavity",
      performance: "Rw 46–50 dB, U-value 1.7 W/m²K",
    },
    planningNotes:
      "Confirm LPA before submitting: Camden covers north of Mortimer Street, Westminster covers south. Both are secondary-glazing-friendly for listed and conservation properties.",
    nearby: [
      { name: "Bloomsbury", path: "/locations/bloomsbury" },
      { name: "Marylebone", path: "/locations/marylebone" },
      { name: "Camden", path: "/service-areas/camden" },
      { name: "King's Cross", path: "/locations/kings-cross-train-noise" },
    ],
    faqs: [
      {
        q: "Which council covers my Fitzrovia address?",
        a: "Camden Council covers Fitzrovia north of Mortimer Street (W1T postcodes largely). Westminster City Council covers the southern portion. Our team confirms LPA jurisdiction as part of your quote.",
      },
      {
        q: "Can secondary glazing meet EBU R 128 studio requirements?",
        a: "Yes with a 12.8mm laminate + 150mm cavity build. We regularly install for Fitzrovia post-production studios needing NR15–NR20 background noise floors.",
      },
    ],
  },
  {
    slug: "bloomsbury",
    name: "Bloomsbury",
    region: "Central London",
    regionPath: "/areas/central-london",
    postcodes: "WC1A, WC1B, WC1E, WC1H, WC1N",
    metaTitle: "Secondary Glazing Bloomsbury WC1 | Georgian Squares & Colleges",
    metaDescription:
      "Heritage secondary glazing for Bloomsbury's Georgian squares, UCL college buildings and mansion blocks. Camden LPA-approved, fully reversible installs.",
    h1: "Secondary Glazing in Bloomsbury",
    intro:
      "Bloomsbury contains some of London's most intact Georgian squares — Russell Square, Bedford Square, Tavistock Square — plus the University of London and British Museum estates. Almost every property is either Grade II listed or inside the Bloomsbury Conservation Area, so external window replacement is not an option.",
    propertyTypes:
      "Grade II listed Georgian terraces on Bedford, Russell and Tavistock Squares, UCL and University of London teaching buildings, mansion-block flats, hotels along Southampton Row.",
    keyChallenges: [
      {
        title: "Euston Road and A501 noise",
        body: "The A501 corridor on the north edge of Bloomsbury runs at 78+ dB LAeq. Bedford Way and Southampton Row bus routes add sustained mid-frequency noise.",
      },
      {
        title: "University acoustic standards",
        body: "Teaching rooms need to meet BB93 (schools) or BS 8233 (Category A) standards — typically Rw 42–47 dB at the façade.",
      },
      {
        title: "Bedford Estate covenants",
        body: "Several Bloomsbury squares are still subject to Bedford Estate restrictive covenants in addition to Camden LPA and listing consent.",
      },
    ],
    recommendedSpec: {
      frame: "Slimline vertical sliders matched to original sash proportions",
      frameNote: "",
      glass: "10.8mm Stadip Silence acoustic laminate",
      airGap: "100–200mm cavity (Bloomsbury reveals are typically generous)",
      performance: "Rw 45–48 dB, U-value 1.6 W/m²K",
    } as any,
    planningNotes:
      "Camden Council handles LPA and LBC. Bedford Estate covenant checks may be needed on Bedford, Russell, Tavistock and Woburn Squares — confirm through the freeholder before final drawings.",
    nearby: [
      { name: "Fitzrovia", path: "/locations/fitzrovia" },
      { name: "King's Cross", path: "/locations/kings-cross-train-noise" },
      { name: "Camden", path: "/service-areas/camden" },
      { name: "Islington", path: "/service-areas/islington" },
    ],
    faqs: [
      {
        q: "Will Camden Council approve secondary glazing on a listed Bloomsbury townhouse?",
        a: "Yes — Camden explicitly recognises reversible internal secondary glazing as the preferred energy and acoustic upgrade for listed buildings. LBC is required but routinely granted.",
      },
      {
        q: "Do I need Bedford Estate consent as well as Camden LBC?",
        a: "On several Bloomsbury squares, yes. Bedford Estate covenants can require freeholder sign-off. We prepare drawings that satisfy both estate and LPA reviewers.",
      },
    ],
  },
  {
    slug: "pimlico",
    name: "Pimlico",
    region: "Central London",
    regionPath: "/areas/central-london",
    postcodes: "SW1V, SW1P",
    metaTitle: "Secondary Glazing Pimlico SW1 | Regency Terraces & Riverside",
    metaDescription:
      "Secondary glazing for Pimlico's Regency stucco terraces, Dolphin Square mansion flats and Millbank riverside properties. Westminster LPA compliant, planning-approved.",
    h1: "Secondary Glazing in Pimlico",
    intro:
      "Pimlico's Cubitt-planned Regency stucco squares and terraces are among Westminster's most intact 19th-century streetscapes. Nearly the entire area sits inside the Pimlico Conservation Area, with concentrated listing around Warwick Square, Eccleston Square and St George's Square.",
    propertyTypes:
      "Regency and early Victorian stucco terraces, Dolphin Square mansion flats, Millbank riverside apartments, Church of England properties around Vincent Square.",
    keyChallenges: [
      {
        title: "Millbank and Vauxhall Bridge Road noise",
        body: "Vauxhall Bridge Road carries 60,000+ vehicles/day; Millbank riverside properties also face river-taxi horn noise.",
      },
      {
        title: "Stucco façade preservation",
        body: "Original 6-over-6 sashes with fine glazing bars must remain visible from the street — internal-only interventions are essential.",
      },
      {
        title: "Riverside condensation risk",
        body: "Millbank and Grosvenor Road properties face elevated relative humidity from the Thames. Cavity ventilation strategy is critical.",
      },
    ],
    recommendedSpec: {
      frame: "Slimline aluminium vertical sliders, RAL-matched to internal shutters",
      glass: "10.8mm Stadip Silence + optional Pilkington K low-e for riverside U-values",
      airGap: "100mm cavity with trickle-vent option for riverside dew-point control",
      performance: "Rw 45 dB, U-value 1.7 W/m²K",
    },
    planningNotes:
      "Westminster City Council. Pimlico Conservation Area sits under Article 4 — confirm every scheme with the LPA. Riverside properties on Millbank may also fall inside the Westminster River Prospect strategic view corridor.",
    nearby: [
      { name: "Belgravia", path: "/locations/georgian-belgravia" },
      { name: "Chelsea", path: "/locations/chelsea-draught-proofing" },
      { name: "Westminster", path: "/service-areas/westminster" },
      { name: "Mayfair", path: "/locations/mayfair" },
    ],
    faqs: [
      {
        q: "How do I manage condensation on Millbank riverside secondary glazing?",
        a: "We spec a controlled cavity with trickle vents or a rebated dry-air pocket to keep the inner face above dew point year-round. Full method in our Condensation Control guide.",
      },
      {
        q: "Can I keep the original interior shutters?",
        a: "Yes. We install the secondary frame behind the sash but forward of the shutter boxing, so shutters continue to fold and close as designed.",
      },
    ],
  },
  {
    slug: "fulham",
    name: "Fulham",
    region: "West London",
    regionPath: "/areas/west-london",
    postcodes: "SW6, SW10",
    metaTitle: "Secondary Glazing Fulham SW6 | Victorian Terraces & Family Homes",
    metaDescription:
      "Acoustic and thermal secondary glazing for Fulham's Victorian and Edwardian terraces. Hammersmith & Fulham LPA compliant. Save on energy bills and reduce road noise.",
    h1: "Secondary Glazing in Fulham",
    intro:
      "Fulham's grid of late Victorian and Edwardian terraces stretches from Parsons Green to Fulham Palace Road. Family houses on Wandsworth Bridge Road, Fulham Palace Road and New King's Road face heavy through-traffic, while properties near Stamford Bridge experience concentrated match-day noise.",
    propertyTypes:
      "Late Victorian and Edwardian bay-fronted terraces, Peterborough Estate 'Lion Houses', mansion blocks around Parsons Green and Bishop's Park.",
    keyChallenges: [
      {
        title: "A-road traffic",
        body: "New King's Road (A308) and Fulham Palace Road (A219) generate sustained 72–76 dB LAeq. Bedrooms at first-floor level face significant sleep-disturbance risk.",
      },
      {
        title: "EPC bands D–E stock",
        body: "Much of Fulham's Victorian terrace stock sits at EPC D or E. Original single-glazed sashes carry U-values around 4.8 W/m²K — secondary glazing halves that to <2.0 W/m²K.",
      },
      {
        title: "Bay-window geometry",
        body: "Fulham bay windows typically comprise 3 or 5 splayed lights; each pane needs a bespoke frame to preserve the bay's proportions.",
      },
    ],
    recommendedSpec: {
      frame: "Slimline aluminium horizontal sliders (main sashes) + bespoke bay panels",
      glass: "6.8mm Stadip Silence acoustic laminate (mid-spec) or 10.8mm for A-road exposure",
      airGap: "75–100mm cavity",
      performance: "Rw 39–45 dB, U-value 1.8 W/m²K, ~65–75% noise reduction",
    },
    planningNotes:
      "Hammersmith & Fulham Council. Most Fulham streets are inside a conservation area (Walham Green, Peterborough Estate, Bishop's Park). Secondary glazing is internal and typically doesn't need planning consent, but confirm with LPA if façade-visible.",
    nearby: [
      { name: "Chelsea", path: "/locations/chelsea-draught-proofing" },
      { name: "West London", path: "/areas/west-london" },
      { name: "Wimbledon", path: "/locations/wimbledon" },
      { name: "Clapham", path: "/locations/clapham-busy-roads" },
    ],
    faqs: [
      {
        q: "How much noise reduction do I get on New King's Road?",
        a: "With a 10.8mm Stadip Silence + 100mm cavity build we typically hit Rw 45 dB — around 75% perceived noise reduction versus your existing single-glazed sash.",
      },
      {
        q: "Will secondary glazing improve my EPC rating?",
        a: "Yes — a full-house secondary glazing install typically moves a Fulham Victorian terrace up one full EPC band, from D to C, when combined with basic loft insulation.",
      },
    ],
  },
  {
    slug: "wimbledon",
    name: "Wimbledon",
    region: "South London",
    regionPath: "/areas/south-london",
    postcodes: "SW19, SW20",
    metaTitle: "Secondary Glazing Wimbledon SW19 | Village Conservation & Family Homes",
    metaDescription:
      "Heritage secondary glazing for Wimbledon Village conservation properties and Victorian family homes across SW19. Merton LPA-approved, acoustic and thermal upgrades.",
    h1: "Secondary Glazing in Wimbledon",
    intro:
      "Wimbledon combines the Wimbledon Village Conservation Area — with its Georgian and early Victorian High Street properties — with dense Victorian and Edwardian family-home stock around the Common, Merton Park and South Park Gardens. Aircraft noise from the Heathrow corridor and A3 traffic are the two dominant acoustic factors.",
    propertyTypes:
      "Georgian coaching-inn era properties along Wimbledon High Street, Victorian villas around the Common, Edwardian terraces in Merton Park and South Wimbledon, John Corbett Estate houses.",
    keyChallenges: [
      {
        title: "Heathrow flight-path noise",
        body: "Wimbledon sits under the Heathrow easterly landing path. Overflight peaks reach 75–80 dB LAmax at low-frequency dominant profiles requiring laminate glass to attenuate.",
      },
      {
        title: "A3 corridor traffic",
        body: "Properties along Parkside and Copse Hill face constant 70+ dB LAeq A3 traffic including HGVs.",
      },
      {
        title: "Conservation area status",
        body: "Wimbledon Village and Wimbledon West Side conservation areas restrict visible frame changes; John Corbett Estate has covenants on 500+ Merton Park houses.",
      },
    ],
    recommendedSpec: {
      frame: "Slimline aluminium vertical or horizontal sliders",
      glass: "10.8mm Stadip Silence acoustic laminate (low-frequency optimised for aircraft)",
      airGap: "100–150mm cavity",
      performance: "Rw 45 dB overall, +5 dB improvement on low-frequency aircraft profile vs monolithic glass",
    },
    planningNotes:
      "Merton Council handles LPA and LBC. Wimbledon Village Conservation Area is Article 4-affected in parts. John Corbett Estate covenants require freeholder consent on top of any LPA process.",
    nearby: [
      { name: "Clapham", path: "/locations/clapham-busy-roads" },
      { name: "Heathrow Corridor", path: "/locations/heathrow-aircraft" },
      { name: "Richmond", path: "/locations/conservation-richmond" },
      { name: "South London", path: "/areas/south-london" },
    ],
    faqs: [
      {
        q: "Does secondary glazing help with Heathrow aircraft noise?",
        a: "Yes — laminate acoustic glass is 5–8 dB better than monolithic float on the low-frequency profile characteristic of aircraft, which is exactly where standard double glazing underperforms.",
      },
      {
        q: "Will Merton Council approve secondary glazing in the Wimbledon Village Conservation Area?",
        a: "For internal-only, reversible schemes, yes — LBC is required for listed properties on the High Street. Conservation area planning permission is rarely needed for internal work.",
      },
    ],
  },
  {
    slug: "highgate",
    name: "Highgate",
    region: "North London",
    regionPath: "/areas/north-london",
    postcodes: "N6, NW5",
    metaTitle: "Secondary Glazing Highgate N6 | Georgian Village & Conservation Homes",
    metaDescription:
      "Heritage secondary glazing for Highgate Village's Georgian townhouses and Victorian villas. Camden and Haringey LPA-approved, listed-building specialists.",
    h1: "Secondary Glazing in Highgate",
    intro:
      "Highgate Village is one of London's most intact Georgian villages, with Grade II listing across large stretches of Highgate High Street, South Grove and The Grove. The area splits between Camden LPA (south-west) and Haringey LPA (east). Aircraft noise from the northern Heathrow corridor and A1 traffic are the primary acoustic concerns.",
    propertyTypes:
      "Grade II listed Georgian townhouses on The Grove, South Grove and Pond Square; Victorian villas around Highgate Cemetery; Arts and Crafts houses along Bishopswood Road.",
    keyChallenges: [
      {
        title: "A1 Archway Road noise",
        body: "Archway Road on Highgate's eastern edge carries 60,000+ vehicles/day. Properties on Southwood Lane and Jackson's Lane face constant 68–72 dB LAeq.",
      },
      {
        title: "Dual LPA jurisdiction",
        body: "The Camden/Haringey boundary runs through Highgate Village — Camden covers the south-west, Haringey the north-east.",
      },
      {
        title: "Grade II listed density",
        body: "The Grove, Pond Square and South Grove have concentrated Grade II listing; every window intervention needs LBC.",
      },
    ],
    recommendedSpec: {
      frame: "Slimline aluminium vertical sliders to match original sash cadence",
      glass: "10.8mm Stadip Silence acoustic laminate",
      airGap: "100mm cavity (Highgate Georgian reveals typically accommodate this)",
      performance: "Rw 45–47 dB, U-value 1.7 W/m²K",
    },
    planningNotes:
      "Confirm LPA jurisdiction: Camden Council covers the south-west (including much of The Grove), Haringey Council covers the east (Southwood Lane, Jackson's Lane). Both are experienced with heritage secondary glazing schemes.",
    nearby: [
      { name: "Hampstead", path: "/locations/edwardian-hampstead" },
      { name: "Islington", path: "/service-areas/islington" },
      { name: "Camden", path: "/service-areas/camden" },
      { name: "North London", path: "/areas/north-london" },
    ],
    faqs: [
      {
        q: "Which council handles my Highgate planning application?",
        a: "Camden Council covers south-west Highgate including The Grove and much of Highgate West Hill. Haringey Council covers the east including Southwood Lane. We confirm jurisdiction as part of the quote.",
      },
      {
        q: "Can secondary glazing reduce A1 Archway Road noise?",
        a: "Yes — 10.8mm laminate + 100mm cavity reliably delivers Rw 45 dB. For properties directly on Archway Road we may spec a 150mm cavity for an additional 2–3 dB.",
      },
    ],
  },
];

export const getNeighbourhoodBySlug = (slug: string) =>
  neighbourhoodPages.find((n) => n.slug === slug);

export const neighbourhoodSlugs = neighbourhoodPages.map((n) => n.slug);