import React from "react";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  CheckCircle, 
  Landmark, 
  Shield, 
  ThermometerSun,
  Volume2,
  Clock,
  Award
} from "lucide-react";

const KensingtonChelsea = () => {
  const kensingtonAreas = [
    "South Kensington", "High Street Kensington", "Holland Park", "Earls Court", "West Kensington"
  ];
  
  const chelseaAreas = [
    "Kings Road", "Cheyne Walk", "Chelsea Embankment", "Sloane Square", "Worlds End"
  ];

  const knightsbridgeAreas = [
    "Brompton Road", "Knightsbridge proper", "Hans Place/Hans Crescent"
  ];

  const nottingHillAreas = [
    "Ladbroke Grove", "Portobello Road", "Pembridge Villas/Square", "Westbourne Grove"
  ];

  const conservationAreas = [
    "Boltons Conservation Area", "Brompton Conservation Area", "Cheyne Conservation Area",
    "Ladbroke Conservation Area", "Queens Gate Conservation Area", "Royal Hospital Conservation Area", "Stanley Conservation Area"
  ];

  const services = [
    { title: "Listed Buildings Secondary Glazing", href: "/listed-buildings-secondary-glazing", icon: Landmark },
    { title: "Conservation Areas Secondary Glazing", href: "/conservation-areas-secondary-glazing", icon: Shield },
    { title: "Victorian Windows Secondary Glazing", href: "/victorian-windows-secondary-glazing", icon: Clock },
    { title: "Georgian Windows Secondary Glazing", href: "/georgian-windows-secondary-glazing", icon: Award },
    { title: "Sash Window Secondary Glazing", href: "/sash-window-secondary-glazing", icon: CheckCircle },
    { title: "Thermal Insulation Secondary Glazing", href: "/thermal-insulation-secondary-glazing", icon: ThermometerSun },
    { title: "Noise Reduction Secondary Glazing", href: "/noise-reduction-secondary-glazing", icon: Volume2 },
    { title: "Edwardian Property Secondary Glazing", href: "/edwardian-property-secondary-glazing", icon: Landmark },
  ];

  const windowTypes = [
    { title: "Sash Windows", href: "/residential/sash-windows" },
    { title: "Casement Windows", href: "/residential/casement-windows" },
    { title: "Bay Windows", href: "/residential/bay-windows" },
    { title: "Fixed Secondary Glazing", href: "/residential/fixed-secondary-glazing" },
    { title: "Horizontal Sliding", href: "/residential/horizontal-sliding" },
    { title: "Crittall Windows", href: "/residential/crittall-windows" },
  ];

  const otherAreas = [
    { title: "Westminster", href: "/service-areas/westminster" },
    { title: "Camden", href: "/service-areas/camden" },
    { title: "Islington", href: "/service-areas/islington" },
    { title: "Central London", href: "/areas/central-london" },
    { title: "West London", href: "/areas/west-london" },
    { title: "South London", href: "/areas/south-london" },
    { title: "Home Counties", href: "/areas/home-counties" },
  ];

  return (
    <div className="min-h-screen">
      {/* SEO CONTENT - Hidden from users, visible to crawlers */}
      <div style={{ display: 'none' }} className="seo-content">
        {/* SEO Content Block for Kensington & Chelsea Secondary Glazing */}

        <h1>Secondary Glazing Kensington &amp; Chelsea | Expert Heritage Window Solutions</h1>

        <h2>Specialist Secondary Glazing Services Across Kensington &amp; Chelsea</h2>

        <p>The <strong>Royal Borough of Kensington &amp; Chelsea</strong> is home to some of London's most prestigious properties, featuring exceptional Georgian, Victorian, and Edwardian architecture. <a href="/"><strong>Secondary Glazing Specialist</strong></a> provides expert <strong>secondary glazing services throughout Kensington &amp; Chelsea</strong>, offering sympathetic solutions that preserve the borough's architectural heritage while delivering outstanding thermal insulation, noise reduction, and enhanced security.</p>

        <p>With over 70 Conservation Areas and countless <a href="/listed-buildings-secondary-glazing"><strong>listed buildings</strong></a> throughout the borough, properties in <strong>Kensington &amp; Chelsea</strong> require specialist expertise when improving window performance. Our bespoke secondary glazing systems are designed to work within the strict planning requirements of this historic borough, preserving period features while providing modern comfort and efficiency.</p>

        <h2>Areas We Serve in Kensington &amp; Chelsea</h2>

        <p>We provide comprehensive <strong>secondary glazing services</strong> across all areas of the Royal Borough of Kensington &amp; Chelsea:</p>

        <h3>Knightsbridge</h3>

        <p><strong>Knightsbridge</strong> is renowned for its grand mansion blocks, elegant terraces, and prestigious garden squares. Properties in this area often feature large <a href="/sash-window-secondary-glazing"><strong>sash windows</strong></a> and are frequently located within Conservation Areas. Our secondary glazing solutions are perfect for reducing traffic noise from Knightsbridge, Brompton Road, and Sloane Street while maintaining the area's architectural character.</p>

        <h3>Chelsea</h3>

        <p><strong>Chelsea</strong> features beautiful Georgian and Victorian terraces along streets like Royal Avenue, Cheyne Walk, and the King's Road. Many Chelsea properties are <a href="/listed-buildings-secondary-glazing"><strong>listed buildings</strong></a> or within <a href="/conservation-areas-secondary-glazing"><strong>Conservation Areas</strong></a> such as Chelsea Park &amp; Carlyle and the Royal Hospital. Our specialist secondary glazing preserves the area's historic windows while dramatically improving comfort.</p>

        <h3>South Kensington</h3>

        <p><strong>South Kensington</strong> is characterized by grand Victorian stucco terraces, red-brick mansion blocks, and elegant garden squares such as Onslow Square and Pelham Crescent. Properties in South Kensington often require sympathetic window improvements that respect the area's uniform architectural character. Our slim-profile secondary glazing systems are ideal for this historic neighborhood.</p>

        <h3>Kensington</h3>

        <p><strong>Kensington</strong> encompasses areas including Kensington Church Street, Phillimore Estate, and the streets around Kensington Palace. The area features exceptional <a href="/georgian-windows-secondary-glazing"><strong>Georgian</strong></a> and <a href="/victorian-windows-secondary-glazing"><strong>Victorian architecture</strong></a> with numerous Conservation Areas. We provide bespoke secondary glazing that complements the area's period properties while reducing noise from Kensington High Street.</p>

        <h3>Notting Hill</h3>

        <p><strong>Notting Hill</strong> is famous for its colorful Victorian terraces, particularly around Portobello Road and Ladbroke Grove. The <strong>Ladbroke Estate Conservation Area</strong> is one of the finest examples of Victorian villa development in London. Our secondary glazing solutions preserve the distinctive character of Notting Hill's <a href="/victorian-windows-secondary-glazing"><strong>Victorian windows</strong></a> while providing excellent thermal and acoustic performance.</p>

        <h3>Holland Park</h3>

        <p><strong>Holland Park</strong> features some of the borough's most substantial Victorian villas and Edwardian mansion blocks, with streets lined with mature trees and elegant architecture. Properties in this prestigious area often have large bay windows and period features requiring specialist care. Our secondary glazing installations respect the architectural quality while improving energy efficiency.</p>

        <h3>Earl's Court</h3>

        <p><strong>Earl's Court</strong> features predominantly Victorian and Edwardian mansion blocks and terraced houses. Many properties in Earl's Court face busy roads and benefit significantly from the noise reduction provided by our acoustic secondary glazing systems, which can reduce external noise by up to 70%.</p>

        <h3>Brompton</h3>

        <p><strong>Brompton</strong> and the surrounding streets feature elegant Victorian and Edwardian architecture, with the <strong>Brompton Conservation Area</strong> protecting the area's distinctive character. Our secondary glazing solutions are designed to work within Conservation Area requirements while providing exceptional performance.</p>

        <h3>West Brompton</h3>

        <p><strong>West Brompton</strong> features fine Victorian terraces and mansion blocks, many within Conservation Areas. Properties in this area benefit from secondary glazing's thermal and acoustic improvements, particularly those facing busy thoroughfares like Fulham Road and Old Brompton Road.</p>

        <h3>Chelsea Harbour</h3>

        <p>While <strong>Chelsea Harbour</strong> features more contemporary architecture, waterfront properties benefit from secondary glazing for enhanced thermal performance and to reduce noise from the Thames and surrounding area.</p>

        <h2>Conservation Areas in Kensington &amp; Chelsea</h2>

        <p>The Royal Borough of Kensington &amp; Chelsea has over <strong>70 designated Conservation Areas</strong>, representing one of the highest concentrations of protected areas in the UK. Our secondary glazing installations respect the character of these important areas:</p>

        <h3>Major Conservation Areas We Serve:</h3>

        <ul>
          <li><strong>The Boltons Conservation Area</strong> - Exceptional Victorian villa development with unique curved layout</li>
          <li><strong>Ladbroke Estate Conservation Area</strong> - Fine Victorian terraces and communal gardens in Notting Hill</li>
          <li><strong>Chelsea Park &amp; Carlyle Conservation Area</strong> - Georgian and Victorian properties in Chelsea</li>
          <li><strong>Brompton Conservation Area</strong> - Victorian terraces around the Brompton Oratory</li>
          <li><strong>Hans Town Conservation Area</strong> - Elegant Georgian and Victorian development in Knightsbridge</li>
          <li><strong>Holland Park Conservation Area</strong> - Grand Victorian and Edwardian villas</li>
          <li><strong>Phillimore Estate Conservation Area</strong> - Distinguished Victorian architecture in Kensington</li>
          <li><strong>Thurloe &amp; Smith's Charity Estate Conservation Area</strong> - Victorian development in South Kensington</li>
          <li><strong>Cornwall Gardens Conservation Area</strong> - Grand Victorian terraces near Gloucester Road</li>
          <li><strong>Queen's Gate Conservation Area</strong> - Elegant Victorian stucco terraces</li>
        </ul>

        <p>Secondary glazing is an <strong>ideal solution for Conservation Area properties</strong> because it's installed internally and doesn't alter the external appearance of your property. This typically means <a href="/conservation-areas-secondary-glazing"><strong>Conservation Area Consent is not required</strong></a>, though we always recommend confirming with the borough's conservation officers.</p>

        <h2>Listed Buildings in Kensington &amp; Chelsea</h2>

        <p>Kensington &amp; Chelsea has one of the highest concentrations of <strong>listed buildings</strong> in England, with over 4,000 listed structures including:</p>

        <ul>
          <li><strong>Grade I listed buildings</strong> - Buildings of exceptional interest (including Kensington Palace, Royal Hospital Chelsea, Natural History Museum)</li>
          <li><strong>Grade II* listed buildings</strong> - Particularly important buildings of more than special interest</li>
          <li><strong>Grade II listed buildings</strong> - Buildings of special interest</li>
        </ul>

        <p>For <strong>listed building secondary glazing</strong>, our solutions are designed to be fully reversible and preserve original windows completely intact. We have extensive experience working with <a href="/listed-buildings-secondary-glazing"><strong>Grade I, Grade II*, and Grade II listed properties</strong></a> throughout the borough and can provide supporting documentation for <strong>Listed Building Consent</strong> applications when required.</p>

        <h2>Why Kensington &amp; Chelsea Properties Need Secondary Glazing</h2>

        <h3>Traffic Noise Reduction</h3>

        <p>Kensington &amp; Chelsea features some of London's busiest roads including <strong>Kensington High Street, King's Road, Fulham Road, Brompton Road, and Old Brompton Road</strong>. Properties facing these major thoroughfares experience significant traffic noise throughout the day and night.</p>

        <p>Our acoustic secondary glazing systems can reduce external noise by <strong>up to 70% (45dB reduction)</strong>, transforming the internal environment of your property and creating peaceful, comfortable living spaces despite the external urban noise.</p>

        <h3>Thermal Efficiency for Period Properties</h3>

        <p>The majority of properties in Kensington &amp; Chelsea were built between 1840 and 1910, featuring single-glazed windows with poor thermal performance. Modern expectations for comfort and rising energy costs make thermal improvements essential.</p>

        <p>Secondary glazing can reduce heat loss through windows by <strong>up to 60%</strong>, improving U-values from approximately 5.0 W/m²K (single glazing) to 1.8-2.8 W/m²K. This results in warmer rooms, reduced condensation, and lower energy bills—all while preserving your property's historic windows completely intact.</p>

        <h3>Security Enhancement</h3>

        <p>High-value properties in Kensington &amp; Chelsea require enhanced security. Secondary glazing provides an additional physical barrier that significantly improves security without the visual intrusion of external security bars or shutters that would be inappropriate for period properties.</p>

        <p>Our secondary glazing systems can be fitted with <strong>secure locking mechanisms</strong> and optional <strong>laminated security glass</strong>, providing peace of mind while maintaining your property's elegant appearance.</p>

        <h3>Protecting Heritage Features</h3>

        <p>Many properties in Kensington &amp; Chelsea feature irreplaceable architectural details including:</p>

        <ul>
          <li>Original timber sash windows with period glazing bars</li>
          <li>Decorative etched or stained glass</li>
          <li>Historic shutters and window furniture</li>
          <li>Ornate architraves and internal joinery</li>
        </ul>

        <p>Secondary glazing protects these features by reducing condensation (which causes timber decay), providing UV protection for fabrics, and eliminating the need for replacement windows that would destroy original features.</p>

        <h2>Window Types Common in Kensington &amp; Chelsea</h2>

        <p>We provide specialist secondary glazing for all traditional window types found in Kensington &amp; Chelsea properties:</p>

        <h3>Sash Windows</h3>

        <p><a href="/sash-window-secondary-glazing"><strong>Box sash windows</strong></a> are the predominant window type in Georgian, Victorian, and Edwardian properties throughout the borough. Our secondary glazing systems are designed specifically to work with sash windows, with options including:</p>

        <ul>
          <li><strong>Vertical sliding secondary glazing</strong> - Mirrors the operation of your original sash windows</li>
          <li><strong>Horizontal sliding secondary glazing</strong> - Provides easy access while maintaining slim sightlines</li>
          <li><strong>Lift-out panels</strong> - For occasional access or seasonal installation</li>
          <li><strong>Fixed panels</strong> - For windows that don't require opening</li>
        </ul>

        <h3>Bay Windows</h3>

        <p>Many Victorian properties feature elegant bay windows, either square bays or curved bows. We manufacture bespoke secondary glazing to precisely fit bay window configurations, maintaining the elegant proportions while providing comprehensive thermal and acoustic improvements.</p>

        <h3>Casement Windows</h3>

        <p>Some properties feature side-hung or top-hung casement windows, particularly in Arts &amp; Crafts or early 20th-century buildings. Our secondary glazing solutions are tailored to work with casement configurations, preserving their operation and appearance.</p>

        <h3>French Windows &amp; Doors</h3>

        <p>Period French windows and glazed doors benefit from secondary glazing panels that can be opened independently, maintaining access to gardens and balconies while providing thermal and acoustic benefits when closed.</p>

        <h2>Secondary Glazing Options for Kensington &amp; Chelsea Properties</h2>

        <h3>Slim-Profile Systems</h3>

        <p>For properties where minimal visual impact is essential, our <strong>slim-profile secondary glazing</strong> features unobtrusive frames as narrow as 15mm, ensuring the secondary glazing doesn't dominate sightlines or detract from your period windows' elegant proportions.</p>

        <h3>Heritage-Style Systems</h3>

        <p>For properties with particularly fine joinery or where the secondary glazing will be more visible, we offer <strong>heritage-style systems</strong> with traditional profiles and finishes that complement period architecture. These can include decorative glazing bars to match original window designs.</p>

        <h3>Acoustic Systems</h3>

        <p>For properties on busy roads, our specialist <strong>acoustic secondary glazing</strong> uses thicker glass (typically 6.4mm or 6.8mm laminated) and a wider air gap (typically 100mm or more) to achieve maximum noise reduction of up to 45dB.</p>

        <h3>Thermal Systems</h3>

        <p>For maximum thermal performance, our systems can incorporate <strong>low-emissivity (Low-E) glass</strong> and optimal air gaps to achieve U-values as low as 1.8 W/m²K, providing thermal performance comparable to modern double glazing while preserving original windows.</p>

        <h2>Planning &amp; Consent in Kensington &amp; Chelsea</h2>

        <h3>Conservation Area Requirements</h3>

        <p>With over 70 <a href="/conservation-areas-secondary-glazing"><strong>Conservation Areas</strong></a> in the borough, many properties fall under additional planning controls. The good news is that secondary glazing is typically installed internally and doesn't alter external appearance, meaning <strong>Conservation Area Consent is usually not required</strong>.</p>

        <p>However, many areas have <strong>Article 4 Directions</strong> that remove certain permitted development rights. While Article 4 Directions typically restrict external alterations like window replacement, secondary glazing's internal installation generally falls outside these restrictions.</p>

        <h3>Listed Building Consent</h3>

        <p>For <a href="/listed-buildings-secondary-glazing"><strong>listed properties</strong></a>, any works affecting the character of the building require <strong>Listed Building Consent</strong>, even internal alterations. However, well-designed secondary glazing often gains approval because:</p>

        <ul>
          <li>It's fully reversible - original windows remain intact</li>
          <li>It protects historic fabric from condensation damage</li>
          <li>It provides essential thermal improvements without replacement</li>
          <li>It's widely recognized as best practice by conservation bodies including Historic England</li>
        </ul>

        <p>We have extensive experience preparing applications for Listed Building Consent and can provide drawings, specifications, and technical information to support your application.</p>

        <h2>Our Service in Kensington &amp; Chelsea</h2>

        <p>As specialist secondary glazing installers serving the Royal Borough of Kensington &amp; Chelsea, we provide:</p>

        <h3>Free Heritage Property Survey</h3>

        <p>Every project begins with a detailed survey of your property. Our specialists assess your existing windows, discuss your requirements for thermal performance, noise reduction, and security, and recommend the most appropriate secondary glazing solution that respects your property's architectural character.</p>

        <h3>Planning Guidance</h3>

        <p>We provide guidance on whether your installation requires Conservation Area Consent or Listed Building Consent, and can liaise with <strong>Kensington &amp; Chelsea's conservation officers</strong> if needed. We understand the borough's planning requirements and can provide supporting documentation for consent applications.</p>

        <h3>Bespoke Manufacturing</h3>

        <p>All our secondary glazing is <strong>custom-manufactured</strong> to precisely fit your window openings. We can accommodate unusual shapes, bay windows, arched windows, and period features, ensuring perfect fit and optimal performance.</p>

        <h3>Expert Installation</h3>

        <p>Our experienced installers understand the importance of working carefully with valuable period properties. We use appropriate fixings that respect historic fabric, protect original joinery and decoration, and ensure all work is completed to the highest standards.</p>

        <h3>Full Guarantee</h3>

        <p>All our installations are backed by comprehensive guarantees covering both materials and workmanship, giving you complete peace of mind.</p>

        <h2>Benefits of Secondary Glazing in Kensington &amp; Chelsea</h2>

        <h3>Preserve Property Value</h3>

        <p>Properties in Kensington &amp; Chelsea command premium prices partly due to their period features. Replacing original windows with modern alternatives can significantly reduce value and character. Secondary glazing preserves original features completely intact while providing modern performance.</p>

        <h3>Maintain Architectural Integrity</h3>

        <p>The architectural heritage of Kensington &amp; Chelsea is one of the borough's most valuable assets. Secondary glazing maintains this heritage while improving comfort and efficiency.</p>

        <h3>Reduce Energy Costs</h3>

        <p>With large properties and high ceilings common in the borough, heating costs can be substantial. Secondary glazing can reduce heat loss by up to 60%, resulting in significant annual energy savings.</p>

        <h3>Improve Comfort</h3>

        <p>Eliminating drafts, reducing cold spots near windows, and minimizing external noise all contribute to significantly improved comfort and liveability.</p>

        <h3>Reduce Condensation</h3>

        <p>Condensation on historic windows leads to timber decay, peeling paint, and mold growth. Secondary glazing dramatically reduces condensation, protecting your property's valuable original joinery.</p>

        <h3>Environmental Benefits</h3>

        <p>Improving the thermal performance of existing windows is more environmentally sustainable than replacement. You reduce energy consumption while avoiding the carbon cost of manufacturing new windows and disposing of historic materials.</p>

        <h2>Neighboring Areas We Serve</h2>

        <p>We also provide secondary glazing services to areas adjacent to Kensington &amp; Chelsea:</p>

        <ul>
          <li><a href="/service-areas/westminster"><strong>Westminster Secondary Glazing</strong></a> - Including Belgravia, Mayfair, Pimlico, and Marylebone</li>
          <li><a href="/service-areas/hammersmith-fulham"><strong>Hammersmith &amp; Fulham Secondary Glazing</strong></a> - Including Fulham, Hammersmith, and Shepherd's Bush</li>
          <li><a href="/service-areas/wandsworth"><strong>Wandsworth Secondary Glazing</strong></a> - Including Battersea, Wandsworth Town, and Clapham</li>
          <li><a href="/service-areas/camden"><strong>Camden Secondary Glazing</strong></a> - Including Bloomsbury, Hampstead, and Camden Town</li>
        </ul>

        <h2>Window Solutions for Period Properties</h2>

        <p>In addition to secondary glazing, we offer specialist solutions for various period window types:</p>

        <ul>
          <li><a href="/victorian-windows-secondary-glazing"><strong>Victorian Windows Secondary Glazing</strong></a> - Expert solutions for Victorian properties throughout the borough</li>
          <li><a href="/georgian-windows-secondary-glazing"><strong>Georgian Windows Secondary Glazing</strong></a> - Sympathetic glazing for Georgian townhouses and terraces</li>
          <li><a href="/edwardian-property-secondary-glazing"><strong>Edwardian Property Secondary Glazing</strong></a> - Solutions for Edwardian houses and mansion blocks</li>
          <li><a href="/sash-window-secondary-glazing"><strong>Sash Window Secondary Glazing</strong></a> - Specialist solutions for period box sash windows</li>
        </ul>

        <h2>Get Your Free Kensington &amp; Chelsea Property Survey</h2>

        <p>If you own a property in the Royal Borough of Kensington &amp; Chelsea and are looking to improve thermal efficiency, reduce noise, or enhance security while preserving architectural character, contact <a href="/"><strong>Secondary Glazing Specialist</strong></a> today.</p>

        <p>We offer a <strong>free, no-obligation survey and quotation</strong> for properties throughout Kensington &amp; Chelsea. Our conservation specialists will assess your property, discuss your requirements, and recommend the most appropriate secondary glazing solution for your historic home.</p>

        <p><strong>Call us today</strong> or <strong>request a free survey online</strong> to discover how secondary glazing can transform your Kensington &amp; Chelsea property while respecting its architectural heritage.</p>

        <p><strong>Expert secondary glazing for Kensington &amp; Chelsea heritage properties - preserving character, enhancing comfort.</strong></p>

        {/* End SEO Content Block */}
      </div>

      <EnhancedSEO
        title="Secondary Glazing Kensington & Chelsea | Listed Buildings & Conservation Areas"
        description="Expert secondary glazing for listed buildings and conservation areas in Kensington, Chelsea, Knightsbridge, South Kensington, and Notting Hill. Free heritage property surveys."
        canonicalPath="/service-areas/kensington-chelsea"
        keywords={[
          "secondary glazing Kensington",
          "Chelsea secondary glazing",
          "RBKC glazing",
          "listed building glazing Kensington",
          "conservation area windows Chelsea",
          "heritage glazing Kensington Chelsea",
          "Knightsbridge secondary glazing",
          "Notting Hill glazing"
        ]}
      />

      <MainNav />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">Royal Borough Service Area</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Secondary Glazing Kensington & Chelsea | Heritage Property Specialists
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              The Royal Borough of Kensington and Chelsea is home to some of London's most prestigious{" "}
              <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">listed buildings</Link> and{" "}
              <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">conservation areas</Link>. 
              With strict planning regulations protecting the borough's architectural heritage, secondary glazing offers 
              the ideal solution for improving{" "}
              <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline">thermal efficiency</Link> and{" "}
              <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">noise reduction</Link> without 
              compromising the character of period properties.
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
                <p className="text-sm text-muted-foreground">All RBKC Postcodes</p>
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
                <h2 className="text-3xl font-bold mb-6">Expert Secondary Glazing Services in Kensington & Chelsea</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Secondary Glazing Specialist provides expert <strong>secondary glazing services throughout Kensington & Chelsea</strong>, 
                  including Kensington, Chelsea, Knightsbridge, South Kensington, Notting Hill, Holland Park, Earls Court, and surrounding areas. 
                  Our specialist team has extensive experience working with the borough's planning department and conservation officers to 
                  deliver sympathetic solutions that meet strict heritage requirements.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Whether you own a{" "}
                  <Link to="/georgian-windows-secondary-glazing" className="text-primary hover:underline">Georgian townhouse</Link> in Chelsea, a{" "}
                  <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian villa</Link> in Kensington, or a 
                  period property in one of the borough's many conservation areas, we provide bespoke{" "}
                  <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline">secondary glazing solutions</Link> that 
                  preserve architectural character while reducing heat loss by up to 75%.
                </p>
              </div>

              {/* Areas We Serve */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Areas We Serve in Kensington & Chelsea</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Kensington</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Kensington is renowned for its elegant Victorian and Edwardian properties, many of which are{" "}
                        <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">Grade II listed</Link>.
                      </p>
                      <ul className="space-y-1 text-sm">
                        {kensingtonAreas.map((area, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-primary" />
                            {area}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Chelsea</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Chelsea features some of London's most valuable heritage properties, with numerous{" "}
                        <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">conservation areas</Link>.
                      </p>
                      <ul className="space-y-1 text-sm">
                        {chelseaAreas.map((area, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-primary" />
                            {area}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Knightsbridge</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Knightsbridge features elegant period properties and high-profile addresses.
                      </p>
                      <ul className="space-y-1 text-sm">
                        {knightsbridgeAreas.map((area, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-primary" />
                            {area}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Notting Hill</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Notting Hill is famous for its{" "}
                        <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian terraces</Link> and 
                        strict conservation area regulations.
                      </p>
                      <ul className="space-y-1 text-sm">
                        {nottingHillAreas.map((area, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-primary" />
                            {area}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Conservation Areas */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Conservation Areas in Kensington & Chelsea</h2>
                <p className="text-muted-foreground mb-4">
                  The Royal Borough of Kensington and Chelsea has <strong>over 80 conservation areas</strong> - more than any 
                  other London borough. Major conservation areas include:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
                  {conservationAreas.map((area, index) => (
                    <div key={index} className="bg-muted/50 px-3 py-2 rounded text-sm">
                      {area}
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground">
                  We have extensive experience working within these conservation areas and provide full planning guidance 
                  for all secondary glazing installations.
                </p>
              </div>

              {/* Listed Buildings */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Listed Buildings in Kensington & Chelsea</h2>
                <p className="text-muted-foreground mb-4">
                  The Royal Borough has <strong>over 4,000 listed buildings</strong>, including numerous Grade I and Grade II* properties. 
                  Our team specializes in providing{" "}
                  <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">secondary glazing solutions for listed buildings</Link>, 
                  with a high success rate for Listed Building Consent applications.
                </p>
                <p className="text-muted-foreground mb-4">
                  We have successfully completed secondary glazing installations on:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <strong>Grade I listed Georgian townhouses</strong>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <strong>Grade II* Victorian villas</strong>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <strong>Grade II Edwardian mansion blocks</strong>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <strong>Period properties in conservation areas</strong>
                  </li>
                </ul>
              </div>

              {/* Why Secondary Glazing */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Secondary Glazing for Kensington & Chelsea Properties?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Meets Strict Planning Requirements</h3>
                      <p className="text-sm text-muted-foreground">
                        Kensington & Chelsea has some of the strictest planning regulations in London. Secondary glazing 
                        is installed internally without altering external appearance, typically not requiring planning permission.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Landmark className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Preserves Period Features</h3>
                      <p className="text-sm text-muted-foreground">
                        Many properties feature original{" "}
                        <Link to="/sash-window-secondary-glazing" className="text-primary hover:underline">sash windows</Link> and 
                        decorative glazing. Secondary glazing preserves these while dramatically improving performance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Volume2 className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        <Link to="/noise-reduction-secondary-glazing" className="hover:text-primary">Reduces Traffic Noise</Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Major roads like Brompton Road, Fulham Road, and Kings Road generate significant traffic noise. 
                        Secondary glazing <strong>blocks up to 80%</strong> of external noise pollution.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <ThermometerSun className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        <Link to="/thermal-insulation-secondary-glazing" className="hover:text-primary">Dramatically Lowers Energy Bills</Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Period properties often have high heating costs due to single glazing.{" "}
                        <strong>Secondary glazing reduces heat loss by up to 75%</strong>, significantly lowering energy bills.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Studies */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Case Studies: Kensington & Chelsea</h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-3">Grade II Listed Victorian Villa, South Kensington</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        A five-bedroom Victorian villa in the Queens Gate Conservation Area required improved insulation 
                        without replacing original windows. We installed secondary glazing throughout, achieving:
                      </p>
                      <ul className="grid grid-cols-2 gap-2">
                        <li className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <strong>72% reduction in heat loss</strong>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <strong>£850 annual energy saving</strong>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <strong>LBC approved</strong>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <strong>Original sash windows preserved</strong>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-3">Georgian Townhouse, Chelsea</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        A Grade II* Georgian townhouse on Cheyne Walk required noise reduction from traffic while 
                        preserving its historic character. Secondary glazing provided:
                      </p>
                      <ul className="grid grid-cols-2 gap-2">
                        <li className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <strong>78% reduction in traffic noise</strong>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <strong>No external alterations</strong>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <strong>Reversible installation</strong>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <strong>Improved comfort throughout</strong>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-muted-foreground mt-4">
                  <Link to="/case-studies" className="text-primary hover:underline">View more case studies</Link>
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
                <h2 className="text-2xl font-bold mb-4">Get Your Free Kensington & Chelsea Property Survey</h2>
                <p className="mb-6 opacity-90">
                  Contact us today for a free, no-obligation survey of your Kensington & Chelsea property. Our specialist 
                  team understands the unique requirements of the Royal Borough and will provide expert guidance on 
                  secondary glazing solutions that preserve your property's character.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="secondary">
                    <Link to="/quote-request">Request Free Quote</Link>
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
                  <CardTitle>Other Areas We Serve</CardTitle>
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
                    <li>
                      <Link to="/locations" className="text-sm text-primary hover:underline font-medium">
                        View all 38 service areas
                      </Link>
                    </li>
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
                    <li><Link to="/guides/secondary-vs-double-glazing" className="text-sm text-primary hover:underline">Secondary vs Double Glazing</Link></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-primary-foreground">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm opacity-90">Ready to improve your Kensington or Chelsea property?</p>
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

export default KensingtonChelsea;
