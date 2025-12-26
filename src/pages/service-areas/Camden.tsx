import React from "react";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  CheckCircle, 
  Landmark, 
  Shield, 
  Thermometer,
  Volume2,
  Clock,
  Award
} from "lucide-react";

const Camden = () => {
  const conservationAreas = [
    "Bloomsbury Conservation Area",
    "Hampstead Conservation Area",
    "Highgate Conservation Area",
    "Belsize Conservation Area",
    "Primrose Hill Conservation Area",
    "Gospel Oak Conservation Area",
    "Dartmouth Park Conservation Area",
    "Camden Town Conservation Area",
    "St Pancras Conservation Area",
    "King's Cross Conservation Area"
  ];

  const services = [
    { title: "Listed Buildings Secondary Glazing", href: "/listed-buildings-secondary-glazing", icon: Landmark },
    { title: "Conservation Areas Secondary Glazing", href: "/conservation-areas-secondary-glazing", icon: Shield },
    { title: "Victorian Windows Secondary Glazing", href: "/victorian-windows-secondary-glazing", icon: Clock },
    { title: "Georgian Windows Secondary Glazing", href: "/georgian-windows-secondary-glazing", icon: Award },
    { title: "Sash Window Secondary Glazing", href: "/sash-window-secondary-glazing", icon: CheckCircle },
    { title: "Thermal Insulation Secondary Glazing", href: "/thermal-insulation-secondary-glazing", icon: Thermometer },
    { title: "Noise Reduction Secondary Glazing", href: "/noise-reduction-secondary-glazing", icon: Volume2 },
    { title: "Edwardian Property Secondary Glazing", href: "/edwardian-property-secondary-glazing", icon: Landmark },
  ];

  const windowTypes = [
    { title: "Sash Windows", href: "/sash-window-secondary-glazing" },
    { title: "Casement Windows", href: "/residential/casement-windows" },
    { title: "Bay Windows", href: "/residential/bay-windows" },
    { title: "Fixed Secondary Glazing", href: "/residential/fixed-secondary-glazing" },
    { title: "Horizontal Sliding", href: "/residential/horizontal-sliding" },
    { title: "Crittall Windows", href: "/residential/crittall-windows" },
  ];

  const otherAreas = [
    { title: "Kensington & Chelsea", href: "/service-areas/kensington-chelsea" },
    { title: "Westminster", href: "/service-areas/westminster" },
    { title: "Islington", href: "/service-areas/islington" },
    { title: "North London", href: "/areas/north-london" },
    { title: "Central London", href: "/areas/central-london" },
    { title: "West London", href: "/areas/west-london" },
  ];

  const nearbyLocations = [
    { title: "Edwardian Hampstead", href: "/locations/edwardian-hampstead" },
    { title: "Victorian Islington", href: "/locations/victorian-islington" },
    { title: "Listed Kensington", href: "/locations/listed-kensington" },
    { title: "Georgian Belgravia", href: "/locations/georgian-belgravia" },
    { title: "Kings Cross Train Noise", href: "/locations/kings-cross-train-noise" },
  ];

  return (
    <div className="min-h-screen">
      {/* SEO CONTENT - Hidden from users, visible to crawlers */}
      <div style={{ display: 'none' }} className="seo-content" aria-hidden="true">
        {/* CAMDEN SECONDARY GLAZING PAGE */}
        {/* URL: /service-areas/camden */}
        {/* Target: 2,100+ words, 24+ internal links */}

        <article className="service-area-content">
          
          <header className="page-header">
            <h1>Camden Secondary Glazing | Heritage Property Specialists</h1>
            <p className="lead">Expert secondary glazing for Camden's listed buildings, conservation areas, and period properties. Preserving architectural character in Bloomsbury, Hampstead, Kentish Town, and across the borough.</p>
          </header>

          {/* Introduction */}
          <section className="intro-section">
            <h2>Secondary Glazing for Camden's Heritage Properties</h2>
            <p>Camden is home to some of London's most architecturally significant properties, from the Georgian squares of Bloomsbury to the village charm of Hampstead. With over 35 conservation areas and thousands of listed buildings, Camden property owners face unique challenges when improving thermal efficiency and reducing noise pollution.</p>
            
            <p>Secondary glazing offers the ideal solution for Camden properties. Unlike replacement windows, secondary glazing installs a discreet inner pane behind your original windows, preserving their historic character while delivering modern performance. This approach satisfies conservation requirements while dramatically improving comfort and energy efficiency.</p>
            
            <p>Whether you own a <a href="/georgian-windows-secondary-glazing">Georgian townhouse in Bloomsbury</a>, a <a href="/victorian-windows-secondary-glazing">Victorian villa in Kentish Town</a>, or a listed property in Hampstead, secondary glazing provides heritage-compliant improvements without compromising architectural integrity.</p>
          </section>

          {/* Why Camden Properties Need Secondary Glazing */}
          <section className="benefits-section">
            <h2>Why Camden Properties Need Secondary Glazing</h2>
            
            <p>Camden presents specific challenges that make secondary glazing particularly valuable:</p>
            
            <h3>Historic Building Density</h3>
            <p>Camden contains exceptional concentrations of Georgian, Victorian, and Edwardian properties. These period buildings feature single-glazed <a href="/sash-window-secondary-glazing">sash windows</a> that are beautiful but thermally inefficient. Secondary glazing preserves original windows while reducing heat loss by up to 60%.</p>
            
            <h3>Conservation Area Restrictions</h3>
            <p>With 35+ <a href="/conservation-areas-secondary-glazing">conservation areas</a> across Camden, planning restrictions typically prevent window replacement. Secondary glazing requires no external alterations, making it the approved solution for protected properties throughout the borough.</p>
            
            <h3>Urban Noise Pollution</h3>
            <p>Major roads including Euston Road, Camden High Street, and Finchley Road generate significant traffic noise. Secondary glazing can reduce noise pollution by 70-80%, creating peaceful interiors even in busy locations. Our <a href="/noise-reduction-secondary-glazing">acoustic secondary glazing</a> is particularly effective for Camden's noisiest areas.</p>
            
            <h3>Listed Building Requirements</h3>
            <p>Camden contains approximately 4,000 <a href="/listed-buildings-secondary-glazing">listed buildings</a> ranging from Grade I architectural landmarks to locally listed properties. Secondary glazing is the only practical thermal improvement method that satisfies Listed Building Consent requirements while protecting original historic fabric.</p>
            
            <h3>Energy Efficiency Demands</h3>
            <p>Period properties in Camden often have high heating costs due to single glazing and solid wall construction. Secondary glazing provides substantial <a href="/thermal-insulation-secondary-glazing">thermal insulation improvement</a> without the cost and disruption of full window replacement, reducing energy bills while maintaining character.</p>
          </section>

          {/* Areas We Serve in Camden */}
          <section className="areas-served">
            <h2>Camden Areas We Serve</h2>
            
            <p>We provide specialist secondary glazing throughout Camden borough, with extensive experience in the area's most significant heritage neighborhoods:</p>
            
            <h3>Bloomsbury</h3>
            <p>The jewel of Georgian London, Bloomsbury contains magnificent squares including Russell Square, Bedford Square, and Tavistock Square. The area's distinctive <a href="/georgian-windows-secondary-glazing">Georgian architecture</a> features elegant sash windows that must be preserved. Secondary glazing maintains the refined appearance of Bloomsbury's townhouses while delivering modern thermal and acoustic performance. The British Museum Quarter and university areas particularly benefit from reduced street noise.</p>
            
            <h3>Hampstead</h3>
            <p>Hampstead village retains exceptional architectural character with strict conservation controls. Properties range from Georgian villas to Victorian and <a href="/edwardian-property-secondary-glazing">Edwardian houses</a> on Hampstead Heath's fringes. Secondary glazing preserves the village atmosphere while improving comfort in properties exposed to Hampstead's elevated, windy location. Flask Walk, Church Row, and the surrounding streets contain numerous listed buildings where secondary glazing is the approved improvement method.</p>
            
            <h3>Kentish Town</h3>
            <p>Kentish Town's <a href="/victorian-windows-secondary-glazing">Victorian terraces</a> and Edwardian conversions face noise from the busy A400 and rail corridors. Secondary glazing dramatically reduces transport noise while improving thermal efficiency in these solid-walled properties. The Gospel Oak and Dartmouth Park conservation areas contain particularly fine Victorian housing stock that benefits from heritage-compliant secondary glazing.</p>
            
            <h3>Primrose Hill</h3>
            <p>This exclusive neighborhood features Regency and Victorian villas with large sash windows offering park views. Secondary glazing preserves these elegant windows while reducing heating costs in properties that can be expensive to warm. The Primrose Hill Conservation Area has strict planning requirements that make secondary glazing the practical choice for thermal improvement.</p>
            
            <h3>King's Cross & St Pancras</h3>
            <p>The regenerated King's Cross area retains significant Victorian warehouse conversions and period housing. Properties near major transport hubs face extreme noise pollution from railways and roads. Acoustic secondary glazing creates liveable interiors in these challenging locations while respecting industrial heritage character.</p>
            
            <h3>Highgate</h3>
            <p>Highgate village (Camden's portion) contains Georgian, Victorian, and Edwardian properties with extensive conservation protections. Secondary glazing suits Highgate's architectural character while providing thermal improvement in this elevated, exposed location. Listed buildings on Highgate High Street and surrounding areas particularly benefit from heritage-compliant glazing solutions.</p>
            
            <h3>Belsize Park</h3>
            <p>Belsize Park's Edwardian mansion blocks and Victorian villas feature large windows that lose considerable heat. Secondary glazing improves thermal efficiency while maintaining the area's distinctive architectural character. Conservation areas around Belsize Square and Belsize Park Gardens require sensitive improvement approaches that secondary glazing provides.</p>
            
            <h3>Camden Town</h3>
            <p>Camden Town's canal-side location and market area generate significant noise pollution. Victorian terraces and converted industrial buildings benefit from acoustic secondary glazing that creates peaceful residential spaces. Listed buildings around Camden Lock and Regent's Canal require sympathetic thermal improvements that preserve historic character.</p>
          </section>

          {/* Conservation Areas in Camden */}
          <section className="conservation-section">
            <h2>Conservation Areas in Camden</h2>
            
            <p>Camden contains 35 designated <a href="/conservation-areas-secondary-glazing">conservation areas</a> protecting the borough's architectural heritage. These areas have strict planning controls that typically prevent replacement windows but allow secondary glazing as a reversible, non-harmful improvement.</p>
            
            <p><strong>Major Camden Conservation Areas include:</strong></p>
            <ul>
              <li><strong>Bloomsbury Conservation Area</strong> – Georgian squares and townhouses</li>
              <li><strong>Hampstead Conservation Area</strong> – Village character and listed buildings</li>
              <li><strong>Highgate Conservation Area</strong> – Georgian and Victorian village properties</li>
              <li><strong>Belsize Conservation Area</strong> – Edwardian mansion blocks and Victorian villas</li>
              <li><strong>Primrose Hill Conservation Area</strong> – Regency and Victorian residential streets</li>
              <li><strong>Gospel Oak Conservation Area</strong> – Victorian terraces and housing stock</li>
              <li><strong>Dartmouth Park Conservation Area</strong> – Victorian and Edwardian properties</li>
              <li><strong>Camden Town Conservation Area</strong> – Victorian commercial and residential buildings</li>
              <li><strong>St Pancras Conservation Area</strong> – Victorian railway heritage</li>
              <li><strong>King's Cross Conservation Area</strong> – Industrial heritage and conversions</li>
            </ul>
            
            <p>If your Camden property is located within a conservation area, secondary glazing offers the most practical route to thermal and acoustic improvement. Our installations respect conservation requirements while delivering substantial performance benefits.</p>
            
            <p>We work closely with Camden Council's planning department and understand the specific requirements for conservation area consent. Our experience with <a href="/service-areas/kensington-chelsea">Kensington & Chelsea</a> and <a href="/service-areas/westminster">Westminster</a> conservation areas translates directly to Camden's similar architectural character and planning requirements.</p>
          </section>

          {/* Listed Buildings in Camden */}
          <section className="listed-buildings-section">
            <h2>Listed Buildings in Camden</h2>
            
            <p>Camden contains approximately 4,000 <a href="/listed-buildings-secondary-glazing">listed buildings</a>, representing one of London's most significant concentrations of protected architecture. These range from Grade I landmarks like the British Museum and St Pancras Station to thousands of Grade II listed Georgian, Victorian, and Edwardian houses.</p>
            
            <p><strong>Camden's listed building stock includes:</strong></p>
            <ul>
              <li><strong>Grade I Listed Buildings</strong> – Including the British Museum, St Pancras Station, and significant churches</li>
              <li><strong>Grade II* Listed Buildings</strong> – Major architectural landmarks including Georgian townhouses in Bloomsbury</li>
              <li><strong>Grade II Listed Buildings</strong> – Thousands of listed properties across all periods and styles</li>
              <li><strong>Locally Listed Buildings</strong> – Additional properties of local architectural or historical interest</li>
            </ul>
            
            <p>If you own a listed building in Camden, Listed Building Consent is required for most alterations. Secondary glazing is generally approved because it:</p>
            <ul>
              <li>Makes no alterations to original historic windows</li>
              <li>Is fully reversible without leaving damage</li>
              <li>Installs entirely internally with no external impact</li>
              <li>Preserves historic fabric while improving thermal efficiency</li>
              <li>Protects original windows from condensation and decay</li>
            </ul>
            
            <p>We have extensive experience with Listed Building Consent applications and can provide the technical information Camden Council requires to approve secondary glazing installations. Our work on <a href="/georgian-windows-secondary-glazing">Georgian properties</a> in Bloomsbury and <a href="/victorian-windows-secondary-glazing">Victorian buildings</a> throughout Camden demonstrates our understanding of heritage requirements.</p>
          </section>

          {/* Benefits for Camden Properties */}
          <section className="specific-benefits">
            <h2>Benefits of Secondary Glazing for Camden Properties</h2>
            
            <p>Secondary glazing delivers specific advantages for Camden's architectural character and environmental challenges:</p>
            
            <h3>Dramatic Noise Reduction</h3>
            <p>Camden's major roads, railway lines, and entertainment venues generate significant noise pollution. <a href="/noise-reduction-secondary-glazing">Acoustic secondary glazing</a> reduces traffic noise by 70-80%, creating peaceful interiors even on Euston Road, Camden High Street, or near St Pancras Station. The acoustic cavity between original and secondary glazing provides superior sound insulation compared to replacement double glazing.</p>
            
            <h3>Substantial Thermal Improvement</h3>
            <p>Period properties in Camden often face heating costs of £2,000-£3,000+ annually due to single glazing and solid walls. Secondary glazing reduces heat loss through windows by up to 60%, cutting energy bills substantially. The <a href="/thermal-insulation-secondary-glazing">thermal performance improvement</a> is particularly noticeable in Camden's exposed hilltop locations like Hampstead and Highgate.</p>
            
            <h3>Heritage Character Preservation</h3>
            <p>Camden's architectural significance demands sensitive improvement approaches. Secondary glazing maintains the external appearance of Georgian sash windows, Victorian bay windows, and Edwardian casements while delivering modern performance. This preservation-first approach satisfies conservation officers while improving comfort.</p>
            
            <h3>Condensation Reduction</h3>
            <p>Single-glazed windows in heated Camden properties often suffer severe condensation, leading to timber decay and decoration damage. Secondary glazing eliminates most condensation by raising the inner glass temperature, protecting original window frames and extending their lifespan.</p>
            
            <h3>Enhanced Security</h3>
            <p>Secondary glazing adds a second barrier to entry, improving home security without visible external bars or shutters. Ground floor properties in Camden benefit from the additional protection while maintaining architectural appearance.</p>
            
            <h3>Cost-Effective Solution</h3>
            <p>Compared to full window replacement (often impossible in Camden's conservation areas), secondary glazing costs 40-60% less while delivering comparable thermal and superior acoustic performance. Installation is quick, clean, and non-disruptive to historic fabric.</p>
          </section>

          {/* Property Types in Camden */}
          <section className="property-types">
            <h2>Camden Property Types</h2>
            
            <p>Secondary glazing suits all of Camden's characteristic architectural periods:</p>
            
            <h3>Georgian Properties (1714-1830)</h3>
            <p>Camden's <a href="/georgian-windows-secondary-glazing">Georgian architecture</a> centers on Bloomsbury's magnificent squares. These properties feature tall sash windows with slender glazing bars, timber paneling, and classical proportions. Secondary glazing preserves these refined windows while improving thermal efficiency in properties that can be cold and expensive to heat. Our slim-profile secondary glazing maintains the elegant appearance of Georgian sash windows while delivering modern performance.</p>
            
            <h3>Victorian Properties (1837-1901)</h3>
            <p>Camden contains extensive <a href="/victorian-windows-secondary-glazing">Victorian housing stock</a>, from grand Hampstead villas to Kentish Town terraces. Victorian properties typically feature large sash windows, bay windows, and decorative brickwork. Secondary glazing suits these properties perfectly, reducing noise from busy roads while improving thermal efficiency in solid-walled buildings. Victorian bay windows particularly benefit from tailored secondary glazing that follows their curved or angled profiles.</p>
            
            <h3>Edwardian Properties (1901-1918)</h3>
            <p>Belsize Park and Primrose Hill contain fine <a href="/edwardian-property-secondary-glazing">Edwardian properties</a> including mansion blocks and semi-detached villas. These properties feature large windows, Arts & Crafts detailing, and spacious rooms that can be challenging to heat. Secondary glazing improves thermal efficiency while maintaining the characteristic appearance of Edwardian casement and sash windows.</p>
            
            <h3>Regency & Early Victorian</h3>
            <p>Primrose Hill and parts of Camden Town contain Regency and early Victorian properties with distinctive architectural character. These properties benefit from secondary glazing that respects their refined proportions while improving comfort and reducing heating costs.</p>
          </section>

          {/* Planning & Conservation Guidance */}
          <section className="planning-guidance">
            <h2>Planning & Conservation in Camden</h2>
            
            <p>Camden Council's planning department takes architectural heritage seriously, with strict controls on alterations within <a href="/conservation-areas-secondary-glazing">conservation areas</a> and to <a href="/listed-buildings-secondary-glazing">listed buildings</a>.</p>
            
            <h3>Conservation Area Consent</h3>
            <p>If your Camden property is in a conservation area (35 designated areas borough-wide), you may need Conservation Area Consent for external alterations. Secondary glazing typically doesn't require consent because it:</p>
            <ul>
              <li>Installs entirely internally</li>
              <li>Makes no external changes to window appearance</li>
              <li>Is reversible without damage</li>
              <li>Preserves original windows and architectural character</li>
            </ul>
            
            <p>However, planning requirements vary, and we recommend checking with Camden Council before proceeding with any work.</p>
            
            <h3>Listed Building Consent</h3>
            <p>Listed buildings in Camden require Listed Building Consent for most alterations. Secondary glazing is generally approved because it makes no changes to historic fabric and is fully reversible. We can provide technical drawings and specifications to support your consent application.</p>
            
            <h3>Working with Camden Council</h3>
            <p>Camden Council's Conservation & Design team are knowledgeable about appropriate improvement methods for historic properties. We have extensive experience working within Camden's planning framework and understand the documentation required for successful applications. Our installations in neighboring <a href="/service-areas/kensington-chelsea">Kensington & Chelsea</a> and <a href="/service-areas/westminster">Westminster</a> demonstrate our expertise with London's most stringent conservation requirements.</p>
          </section>

          {/* Related Services & Internal Links Hub */}
          <section className="related-services">
            <h2>Related Services for Camden Properties</h2>
            
            <p>We provide comprehensive secondary glazing solutions for all Camden property types and requirements:</p>
            
            <h3>By Property Type</h3>
            <ul>
              <li><a href="/georgian-windows-secondary-glazing">Georgian Property Secondary Glazing</a> – Bloomsbury squares and townhouses</li>
              <li><a href="/victorian-windows-secondary-glazing">Victorian Property Secondary Glazing</a> – Kentish Town, Hampstead, and Gospel Oak</li>
              <li><a href="/edwardian-property-secondary-glazing">Edwardian Property Secondary Glazing</a> – Belsize Park and Primrose Hill</li>
            </ul>
            
            <h3>By Window Type</h3>
            <ul>
              <li><a href="/sash-window-secondary-glazing">Sash Window Secondary Glazing</a> – Georgian and Victorian sash windows throughout Camden</li>
            </ul>
            
            <h3>By Legal Status</h3>
            <ul>
              <li><a href="/listed-buildings-secondary-glazing">Listed Building Secondary Glazing</a> – 4,000+ listed properties in Camden</li>
              <li><a href="/conservation-areas-secondary-glazing">Conservation Area Secondary Glazing</a> – 35 conservation areas borough-wide</li>
            </ul>
            
            <h3>By Benefit</h3>
            <ul>
              <li><a href="/noise-reduction-secondary-glazing">Noise Reduction Secondary Glazing</a> – Euston Road, Camden High Street, major transport routes</li>
              <li><a href="/thermal-insulation-secondary-glazing">Thermal Insulation Secondary Glazing</a> – Reducing heating costs in period properties</li>
            </ul>
            
            <h3>Other Service Areas</h3>
            <ul>
              <li><a href="/service-areas/kensington-chelsea">Kensington & Chelsea Secondary Glazing</a></li>
              <li><a href="/service-areas/westminster">Westminster Secondary Glazing</a></li>
            </ul>
          </section>

          {/* Call to Action */}
          <section className="cta-section">
            <h2>Get Your Free Camden Secondary Glazing Survey</h2>
            
            <p>We offer free, no-obligation surveys for Camden properties. During your survey, we'll:</p>
            <ul>
              <li>Assess your property's specific requirements</li>
              <li>Measure windows and recommend optimal solutions</li>
              <li>Discuss conservation and planning requirements</li>
              <li>Provide detailed written quotation</li>
              <li>Answer all your questions about secondary glazing</li>
            </ul>
            
            <p>Our Camden installations include properties in Bloomsbury, Hampstead, Kentish Town, Primrose Hill, and across the borough. We understand Camden's architectural character and conservation requirements.</p>
            
            <p><strong><a href="/quote-request">Request your free survey</a></strong> or <strong><a href="/contact">contact us</a></strong> to discuss your Camden property's secondary glazing requirements.</p>
            
            <p>Preserving Camden's architectural heritage while improving comfort, efficiency, and acoustic performance – that's what we do.</p>
          </section>

        </article>
      </div>

      <Helmet>
        <title>Camden Secondary Glazing | Heritage Property Specialists</title>
        <meta 
          name="description" 
          content="Expert secondary glazing for Camden's listed buildings, conservation areas, and period properties. Specialists in Bloomsbury, Hampstead, Kentish Town. Free surveys."
        />
        <meta 
          name="keywords" 
          content="secondary glazing Camden, Hampstead secondary glazing, Bloomsbury glazing, Camden conservation area, Victorian windows Camden, Georgian windows Camden, listed buildings Camden, heritage glazing North London"
        />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/service-areas/camden" />
      </Helmet>

      <MainNav />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">London Borough of Camden</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Camden Secondary Glazing | Heritage Property Specialists
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Expert secondary glazing for Camden's <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">listed buildings</Link>, 
              <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline"> conservation areas</Link>, and period properties. 
              Preserving architectural character in Bloomsbury, Hampstead, Kentish Town, and across the borough.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/quote-request">Get Free Heritage Survey</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:02070601572">
                  <Phone className="mr-2 h-4 w-4" />
                  020 7060 1572
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Info Grid */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 justify-center">
              <MapPin className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold">Coverage Area</p>
                <p className="text-sm text-muted-foreground">All Camden Postcodes</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <Phone className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold">Call Us Today</p>
                <a href="tel:02070601572" className="text-sm text-primary hover:underline">020 7060 1572</a>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <Clock className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold">Response Time</p>
                <p className="text-sm text-muted-foreground">Same-day quotes available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Introduction */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6">Secondary Glazing for Camden's Heritage Properties</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Camden is home to some of London's most architecturally significant properties, from the 
                  <Link to="/georgian-windows-secondary-glazing" className="text-primary hover:underline"> Georgian squares of Bloomsbury</Link> to 
                  the village charm of Hampstead. With over 35 conservation areas and thousands of listed buildings, 
                  Camden property owners face unique challenges when improving thermal efficiency and reducing noise pollution.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Secondary glazing offers the ideal solution for Camden properties. Unlike replacement windows, 
                  secondary glazing installs a discreet inner pane behind your original windows, preserving their 
                  historic character while delivering modern performance. This approach satisfies conservation requirements 
                  while dramatically improving comfort and energy efficiency.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Whether you own a <Link to="/georgian-windows-secondary-glazing" className="text-primary hover:underline">Georgian townhouse in Bloomsbury</Link>, 
                  a <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian villa in Kentish Town</Link>, 
                  or a listed property in Hampstead, secondary glazing provides heritage-compliant improvements without 
                  compromising architectural integrity.
                </p>
              </div>

              {/* Why Camden Properties Need Secondary Glazing */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6">Why Camden Properties Need Secondary Glazing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Camden presents specific challenges that make secondary glazing particularly valuable:
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Historic Building Density</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Camden contains exceptional concentrations of Georgian, Victorian, and Edwardian properties. 
                  These period buildings feature single-glazed <Link to="/sash-window-secondary-glazing" className="text-primary hover:underline">sash windows</Link> that 
                  are beautiful but thermally inefficient. Secondary glazing preserves original windows while reducing heat loss by up to 60%.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Conservation Area Restrictions</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With 35+ <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">conservation areas</Link> across 
                  Camden, planning restrictions typically prevent window replacement. Secondary glazing requires no external alterations, 
                  making it the approved solution for protected properties throughout the borough.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Urban Noise Pollution</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Major roads including Euston Road, Camden High Street, and Finchley Road generate significant traffic noise. 
                  Secondary glazing can reduce noise pollution by 70-80%, creating peaceful interiors even in busy locations. 
                  Our <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">acoustic secondary glazing</Link> is 
                  particularly effective for Camden's noisiest areas.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Listed Building Requirements</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Camden contains approximately 4,000 <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">listed buildings</Link> ranging 
                  from Grade I architectural landmarks to locally listed properties. Secondary glazing is the only practical 
                  thermal improvement method that satisfies Listed Building Consent requirements while protecting original historic fabric.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Energy Efficiency Demands</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Period properties in Camden often have high heating costs due to single glazing and solid wall construction. 
                  Secondary glazing provides substantial <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline">thermal insulation improvement</Link> without 
                  the cost and disruption of full window replacement, reducing energy bills while maintaining character.
                </p>
              </div>

              {/* Areas We Serve */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6">Camden Areas We Serve</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We provide specialist secondary glazing throughout Camden borough, with extensive experience 
                  in the area's most significant heritage neighborhoods:
                </p>

                <div className="grid md:grid-cols-2 gap-6 not-prose">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Bloomsbury</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        The jewel of Georgian London with magnificent squares including Russell Square, Bedford Square, 
                        and Tavistock Square. <Link to="/georgian-windows-secondary-glazing" className="text-primary hover:underline">Georgian architecture</Link> with 
                        elegant sash windows that must be preserved.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Hampstead</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Exceptional architectural character with strict conservation controls. Properties range from Georgian villas 
                        to Victorian and <Link to="/edwardian-property-secondary-glazing" className="text-primary hover:underline">Edwardian houses</Link> on 
                        Hampstead Heath's fringes.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Kentish Town</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian terraces</Link> and 
                        Edwardian conversions facing noise from the busy A400 and rail corridors. Gospel Oak and Dartmouth Park 
                        conservation areas contain fine Victorian housing stock.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Primrose Hill</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Exclusive neighborhood featuring Regency and Victorian villas with large sash windows offering park views. 
                        Strict planning requirements make secondary glazing the practical choice.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">King's Cross & St Pancras</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Victorian warehouse conversions and period housing near major transport hubs facing extreme noise pollution. 
                        Acoustic secondary glazing creates liveable interiors in challenging locations.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Highgate</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Georgian, Victorian, and Edwardian properties with extensive conservation protections. Elevated, exposed 
                        location benefits particularly from thermal improvement solutions.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Belsize Park</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Edwardian mansion blocks and Victorian villas with large windows. Conservation areas around Belsize Square 
                        require sensitive improvement approaches that secondary glazing provides.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Camden Town</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Canal-side location and market area generating significant noise pollution. Victorian terraces and industrial 
                        conversions benefit from acoustic secondary glazing creating peaceful spaces.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Conservation Areas */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Conservation Areas in Camden</h2>
                <p className="text-muted-foreground mb-6">
                  Camden contains 35 designated <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">conservation areas</Link> protecting 
                  the borough's architectural heritage. These areas have strict planning controls that typically prevent 
                  replacement windows but allow secondary glazing as a reversible, non-harmful improvement.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                  {conservationAreas.map((area, index) => (
                    <div key={index} className="bg-muted/50 px-4 py-3 rounded text-sm">
                      <strong>{area}</strong>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground">
                  We work closely with Camden Council's planning department and understand the specific requirements for 
                  conservation area consent. Our experience with <Link to="/service-areas/kensington-chelsea" className="text-primary hover:underline">Kensington & Chelsea</Link> and 
                  <Link to="/service-areas/westminster" className="text-primary hover:underline"> Westminster</Link> conservation areas translates 
                  directly to Camden's similar architectural character and planning requirements.
                </p>
              </div>

              {/* Listed Buildings */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6">Listed Buildings in Camden</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Camden contains approximately 4,000 <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">listed buildings</Link>, 
                  representing one of London's most significant concentrations of protected architecture. These range from 
                  Grade I landmarks like the British Museum and St Pancras Station to thousands of Grade II listed Georgian, 
                  Victorian, and Edwardian houses.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you own a listed building in Camden, Listed Building Consent is required for most alterations. 
                  Secondary glazing is generally approved because it makes no alterations to original historic windows, 
                  is fully reversible without leaving damage, and preserves historic fabric while improving thermal efficiency.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We have extensive experience with Listed Building Consent applications and can provide the technical 
                  information Camden Council requires to approve secondary glazing installations.
                </p>
              </div>

              {/* Benefits Section */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Benefits of Secondary Glazing for Camden Properties</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <Volume2 className="h-6 w-6 text-primary" />
                        <CardTitle className="text-lg">
                          <Link to="/noise-reduction-secondary-glazing" className="hover:text-primary">Dramatic Noise Reduction</Link>
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Reduces traffic noise by 70-80%, creating peaceful interiors even on Euston Road, 
                        Camden High Street, or near St Pancras Station.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <Thermometer className="h-6 w-6 text-primary" />
                        <CardTitle className="text-lg">
                          <Link to="/thermal-insulation-secondary-glazing" className="hover:text-primary">Substantial Thermal Improvement</Link>
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Reduces heat loss through windows by up to 60%, cutting energy bills substantially. 
                        Particularly noticeable in exposed locations like Hampstead and Highgate.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <Landmark className="h-6 w-6 text-primary" />
                        <CardTitle className="text-lg">
                          <Link to="/listed-buildings-secondary-glazing" className="hover:text-primary">Heritage Preservation</Link>
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Maintains external appearance of Georgian sash windows, Victorian bay windows, and 
                        Edwardian casements while delivering modern performance.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <Shield className="h-6 w-6 text-primary" />
                        <CardTitle className="text-lg">Enhanced Security</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Adds a second barrier to entry, improving home security without visible external bars 
                        or shutters. Ground floor properties benefit from additional protection.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-muted-foreground mt-6">
                  Compared to full window replacement (often impossible in Camden's conservation areas), secondary glazing 
                  costs 40-60% less while delivering comparable thermal and superior acoustic performance. Installation is 
                  quick, clean, and non-disruptive to historic fabric.
                </p>
              </div>

              {/* Property Types */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6">Camden Property Types</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Secondary glazing suits all of Camden's characteristic architectural periods:
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Georgian Properties (1714-1830)</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Camden's <Link to="/georgian-windows-secondary-glazing" className="text-primary hover:underline">Georgian architecture</Link> centers 
                  on Bloomsbury's magnificent squares. These properties feature tall sash windows with slender glazing bars, 
                  timber paneling, and classical proportions. Our slim-profile secondary glazing maintains the elegant 
                  appearance of Georgian sash windows while delivering modern performance.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Victorian Properties (1837-1901)</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Camden contains extensive <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian housing stock</Link>, 
                  from grand Hampstead villas to Kentish Town terraces. Victorian bay windows particularly benefit from 
                  tailored secondary glazing that follows their curved or angled profiles.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Edwardian Properties (1901-1918)</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Belsize Park and Primrose Hill contain fine <Link to="/edwardian-property-secondary-glazing" className="text-primary hover:underline">Edwardian properties</Link> including 
                  mansion blocks and semi-detached villas. Secondary glazing improves thermal efficiency while maintaining 
                  the characteristic appearance of Edwardian casement and sash windows.
                </p>
              </div>

              {/* Window Types */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Window Types We Work With</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {windowTypes.map((type, index) => (
                    <Link
                      key={index}
                      to={type.href}
                      className="bg-muted/50 hover:bg-muted px-4 py-3 rounded-lg text-center transition-colors"
                    >
                      {type.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Get Your Free Camden Secondary Glazing Survey</h2>
                <p className="mb-4 opacity-90">
                  We offer free, no-obligation surveys for Camden properties. During your survey, we'll assess 
                  your property's specific requirements, measure windows, discuss conservation and planning 
                  requirements, and provide a detailed written quotation.
                </p>
                <p className="mb-6 opacity-90">
                  Our Camden installations include properties in Bloomsbury, Hampstead, Kentish Town, Primrose Hill, 
                  and across the borough. We understand Camden's architectural character and conservation requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="secondary">
                    <Link to="/quote-request">Request Free Survey</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Our Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {services.map((service, index) => (
                      <li key={index}>
                        <Link 
                          to={service.href}
                          className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                        >
                          <service.icon className="h-4 w-4 text-primary" />
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Other Areas We Cover</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {otherAreas.map((area, index) => (
                      <li key={index}>
                        <Link to={area.href} className="text-sm text-primary hover:underline">
                          {area.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Nearby Locations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {nearbyLocations.map((location, index) => (
                      <li key={index}>
                        <Link to={location.href} className="text-sm text-primary hover:underline">
                          {location.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li><Link to="/quote-request" className="text-sm text-primary hover:underline">Request a Quote</Link></li>
                    <li><Link to="/gallery" className="text-sm text-primary hover:underline">View Gallery</Link></li>
                    <li><Link to="/case-studies" className="text-sm text-primary hover:underline">Case Studies</Link></li>
                    <li><Link to="/benefits" className="text-sm text-primary hover:underline">Benefits of Secondary Glazing</Link></li>
                    <li><Link to="/faqs" className="text-sm text-primary hover:underline">FAQs</Link></li>
                    <li><Link to="/contact" className="text-sm text-primary hover:underline">Contact Us</Link></li>
                    <li><Link to="/secondary-glazing-repairs" className="text-sm text-primary hover:underline">Repairs & Maintenance</Link></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-primary-foreground">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm opacity-90">Ready to improve your Camden property?</p>
                  <a href="tel:02070601572" className="flex items-center gap-2 text-sm hover:underline">
                    <Phone className="h-4 w-4" />
                    020 7060 1572
                  </a>
                  <Button asChild variant="secondary" className="w-full">
                    <Link to="/quote-request">Free Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Camden;
