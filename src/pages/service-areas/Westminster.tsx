import React from "react";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ServiceAreaSchema } from "@/components/seo/ServiceAreaSchema";
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

const Westminster = () => {
  const conservationAreas = [
    "Westminster Abbey", "Whitehall", "Trafalgar Square", "Covent Garden", "Soho",
    "Mayfair", "Marylebone", "Belgravia", "Pimlico", "Victoria", "St James's",
    "Fitzrovia", "Regent's Park", "Paddington", "Bayswater", "Hyde Park"
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
    { title: "Sash Windows", href: "/residential/sash-windows" },
    { title: "Casement Windows", href: "/residential/casement-windows" },
    { title: "Bay Windows", href: "/residential/bay-windows" },
    { title: "Fixed Secondary Glazing", href: "/residential/fixed-secondary-glazing" },
    { title: "Horizontal Sliding", href: "/residential/horizontal-sliding" },
    { title: "Crittall Windows", href: "/residential/crittall-windows" },
  ];

  const otherAreas = [
    { title: "Central London", href: "/areas/central-london" },
    { title: "Kensington & Chelsea", href: "/service-areas/kensington-chelsea" },
    { title: "Camden", href: "/service-areas/camden" },
    { title: "Islington", href: "/service-areas/islington" },
    { title: "South London", href: "/areas/south-london" },
    { title: "North London", href: "/areas/north-london" },
    { title: "Home Counties", href: "/areas/home-counties" },
  ];

  const nearbyLocations = [
    { title: "Georgian Belgravia", href: "/locations/georgian-belgravia" },
    { title: "Listed Kensington", href: "/locations/listed-kensington" },
    { title: "Victorian Islington", href: "/locations/victorian-islington" },
    { title: "Edwardian Hampstead", href: "/locations/edwardian-hampstead" },
    { title: "Conservation Richmond", href: "/locations/conservation-richmond" },
    { title: "Chelsea Draught Proofing", href: "/locations/chelsea-draught-proofing" },
  ];

  return (
    <div className="min-h-screen">
      <ServiceAreaSchema
        areaName="Westminster"
        areaDescription="Expert secondary glazing services for listed buildings and conservation areas in Westminster, including Mayfair, Belgravia, Marylebone, Pimlico, and St James's."
        neighborhoods={["Mayfair", "Belgravia", "Marylebone", "Pimlico", "St James's", "Soho", "Covent Garden"]}
        conservationAreas={conservationAreas}
      />
      {/* SEO CONTENT - Hidden from users, visible to crawlers */}
      <div style={{ display: 'none' }} className="seo-content">
        {/* SEO Content Block for Westminster Secondary Glazing */}
        
        <h1>Secondary Glazing Westminster | Expert Heritage Window Solutions</h1>
        
        <h2>Specialist Secondary Glazing Services Across the City of Westminster</h2>
        
        <p>The <strong>City of Westminster</strong> encompasses some of London's most prestigious addresses, from the grand stucco terraces of Belgravia and Pimlico to the elegant Georgian squares of Marylebone and Mayfair. <a href="/">Secondary Glazing Specialist</a> provides expert <strong>secondary glazing services throughout Westminster</strong>, offering sympathetic solutions that preserve the architectural heritage of this historic borough while delivering exceptional thermal performance, noise reduction, and enhanced comfort.</p>
        
        <p>With over 75 Conservation Areas, more than 11,000 listed buildings including over 600 Grade I and Grade II* structures, Westminster contains the highest concentration of protected heritage in the UK. Our bespoke secondary glazing solutions are designed to work within the strict planning requirements of this unique borough, preserving period features while providing modern performance benefits.</p>
        
        <h2>Why Westminster Properties Need Secondary Glazing</h2>
        
        <h3>Extensive Heritage Protection</h3>
        
        <p><strong>Westminster</strong> has the most stringent planning environment in London due to its exceptional architectural and historical importance. The borough contains:</p>
        
        <ul>
          <li>Over <strong>11,000 listed buildings</strong> - More than any other UK local authority</li>
          <li>Over <strong>75 Conservation Areas</strong> - Covering vast areas of the borough</li>
          <li>The <strong>Westminster World Heritage Site</strong> - Palace of Westminster and Westminster Abbey</li>
          <li>Numerous <strong>Royal Parks</strong> and protected vistas</li>
          <li>Central London's most significant <a href="/georgian-windows-secondary-glazing">Georgian</a>, <a href="/victorian-windows-secondary-glazing">Victorian</a>, and <a href="/edwardian-property-secondary-glazing">Edwardian</a> architecture</li>
        </ul>
        
        <p><a href="/conservation-areas-secondary-glazing">Secondary glazing for conservation areas</a> is installed internally, preserving external appearance and typically not requiring planning permission—making it the ideal solution for Westminster's protected properties.</p>
        
        <h3>Significant Urban Noise</h3>
        
        <p>Westminster experiences some of London's highest noise levels due to:</p>
        
        <ul>
          <li><strong>Major arterial routes</strong> - Marylebone Road, Park Lane, Victoria Street, Vauxhall Bridge Road</li>
          <li><strong>Central London traffic</strong> - Constant flow of vehicles, buses, and emergency services</li>
          <li><strong>Commercial activity</strong> - West End theatres, restaurants, shops, and nightlife</li>
          <li><strong>Railway infrastructure</strong> - Major stations including Victoria, Paddington, Marylebone</li>
          <li><strong>Westminster Bridge and Embankment</strong> - High traffic volumes</li>
        </ul>
        
        <p>Our acoustic secondary glazing can reduce external noise by up to <strong>80% (45dB reduction)</strong>, creating peaceful interiors despite Westminster's busy urban environment.</p>
        
        <h3>Period Property Characteristics</h3>
        
        <p>The majority of Westminster's residential properties are period buildings featuring:</p>
        
        <ul>
          <li><strong>Single-glazed <a href="/sash-window-secondary-glazing">sash windows</a></strong> - Beautiful but thermally inefficient</li>
          <li><strong>Large glazing areas</strong> - Generous windows creating light-filled rooms but significant heat loss</li>
          <li><strong>High ceilings</strong> - Challenging to heat, particularly with poor window performance</li>
          <li><strong>Valuable original features</strong> - Windows that contribute significantly to property value</li>
        </ul>
        
        <p>Secondary glazing reduces heat loss by up to 60% while keeping original windows completely intact.</p>
        
        <h3>High Property Values</h3>
        
        <p>Westminster properties command premium values, and owners expect premium solutions. Original period windows are a significant value contributor—replacing them can reduce property value substantially. Secondary glazing preserves these valuable features while providing modern performance.</p>
        
        <h2>Areas We Cover in Westminster</h2>
        
        <h3>Belgravia</h3>
        
        <p><strong>Belgravia</strong> represents the pinnacle of London's grand stucco architecture, with magnificent Regency and early Victorian terraces arranged around elegant garden squares including Belgrave Square, Eaton Square, and Chester Square. Properties feature large <a href="/sash-window-secondary-glazing">sash windows</a> with elegant proportions. Our secondary glazing preserves the pristine street scenes while dramatically improving thermal and acoustic performance in these exceptional <a href="/listed-buildings-secondary-glazing">listed properties</a>.</p>
        
        <h3>Mayfair</h3>
        
        <p><strong>Mayfair</strong> contains some of London's finest <a href="/georgian-windows-secondary-glazing">Georgian</a> and Victorian townhouses, particularly around Grosvenor Square, Berkeley Square, and numerous elegant streets. Many properties are Grade I or Grade II* listed buildings requiring particularly sensitive approaches. Secondary glazing provides essential noise reduction from West End traffic while preserving architectural integrity.</p>
        
        <h3>Pimlico</h3>
        
        <p><strong>Pimlico</strong> features extensive mid-Victorian stucco terraces, particularly Thomas Cubitt's grand development with uniform architectural character. The area's numerous Conservation Areas require external appearance to be maintained. Secondary glazing is ideal for Pimlico properties, reducing noise from busy Vauxhall Bridge Road and Belgrave Road while preserving street scene uniformity.</p>
        
        <h3>Marylebone</h3>
        
        <p><strong>Marylebone</strong> contains beautiful <a href="/georgian-windows-secondary-glazing">Georgian</a> and Victorian architecture, including significant terraces around Manchester Square, Portman Square, and elegant streets like Harley Street and Wimpole Street. Properties often face significant traffic noise from Marylebone Road and Baker Street. Our acoustic secondary glazing creates peaceful interiors essential for the area's many residential and consulting room uses.</p>
        
        <h3>St James's</h3>
        
        <p><strong>St James's</strong> features some of London's most exclusive properties, including grand townhouses and mansion flats with exceptional architectural quality. The area's prominence and heritage protection require sympathetic window improvements that don't alter external appearance.</p>
        
        <h3>Covent Garden</h3>
        
        <p><strong>Covent Garden</strong> properties combine residential use with the area's vibrant theatre and entertainment district. Secondary glazing provides essential noise reduction from West End activity while preserving the area's historic character.</p>
        
        <h3>Westminster &amp; Victoria</h3>
        
        <p>The <strong>Westminster and Victoria</strong> areas feature a mix of Victorian mansion blocks and later developments. Properties near Victoria Station and along Victoria Street benefit significantly from secondary glazing's noise reduction capabilities.</p>
        
        <h3>Paddington &amp; Bayswater</h3>
        
        <p><strong>Paddington and Bayswater</strong> contain extensive Victorian stucco terraces and garden squares including Hyde Park Gardens and Westbourne Terrace. Properties often face noise from Bayswater Road and Edgware Road. Secondary glazing transforms these properties while preserving Conservation Area character.</p>
        
        <h3>Fitzrovia</h3>
        
        <p><strong>Fitzrovia</strong> features elegant Georgian and Victorian terraces, with many properties converted to flats. The area's proximity to central London creates significant noise challenges that secondary glazing effectively addresses.</p>
        
        <h3>Queen's Park &amp; Maida Vale</h3>
        
        <p><strong>Queen's Park and Maida Vale</strong> feature beautiful Victorian and Edwardian mansion blocks and terraces. The areas contain numerous Conservation Areas requiring sensitive window improvements.</p>
        
        <h2>Conservation Areas in Westminster</h2>
        
        <p>Westminster contains over <strong>75 Conservation Areas</strong>, more than any other London borough. Major Conservation Areas where we regularly work include:</p>
        
        <ul>
          <li><strong>Belgravia Conservation Area</strong> - Grand Regency/Victorian stucco terraces and squares</li>
          <li><strong>Mayfair Conservation Area</strong> - Exceptional Georgian townhouses and estates</li>
          <li><strong>Pimlico Conservation Area</strong> - Thomas Cubitt's mid-Victorian development</li>
          <li><strong>Marylebone High Street Conservation Area</strong> - Georgian and Victorian mixed-use streets</li>
          <li><strong>Portman Estate Conservation Area</strong> - Georgian planned development</li>
          <li><strong>Bayswater Conservation Area</strong> - Victorian stucco terraces and garden squares</li>
          <li><strong>Covent Garden Conservation Area</strong> - Historic market area with varied architecture</li>
          <li><strong>Savoy Conservation Area</strong> - Thames-side historic area</li>
          <li><strong>Whitehall Conservation Area</strong> - Government quarter with significant architecture</li>
          <li><strong>Maida Vale Conservation Area</strong> - Victorian and Edwardian mansion flats and villas</li>
        </ul>
        
        <p>Our secondary glazing installations comply with Westminster's conservation area requirements across the borough, preserving external appearance while delivering exceptional internal comfort.</p>
        
        <h2>Listed Buildings in Westminster</h2>
        
        <p>Westminster contains over <strong>11,000 listed buildings</strong>, including:</p>
        
        <ul>
          <li><strong>Over 600 Grade I listed buildings</strong> - Buildings of exceptional interest</li>
          <li><strong>Over 1,000 Grade II* listed buildings</strong> - Particularly important buildings</li>
          <li><strong>Over 9,000 Grade II listed buildings</strong> - Buildings of special interest</li>
        </ul>
        
        <p>Many residential properties in Westminster hold listed status. Our <a href="/listed-buildings-secondary-glazing">listed buildings secondary glazing service</a> provides:</p>
        
        <ul>
          <li>Guidance on Listed Building Consent requirements</li>
          <li>Documentation for consent applications to Westminster's conservation officers</li>
          <li>Fully reversible installations meeting heritage requirements</li>
          <li>Extensive experience with Westminster's planning department</li>
          <li>Sympathetic approaches appropriate for different listing grades</li>
        </ul>
        
        <h2>Secondary Glazing for Different Westminster Property Types</h2>
        
        <h3>Georgian Townhouses</h3>
        
        <p><strong>Georgian townhouses</strong> in areas like Mayfair and Marylebone feature elegant six-over-six or twelve-over-twelve <a href="/georgian-windows-secondary-glazing">sash windows</a> with fine glazing bars. Our slim secondary glazing systems preserve delicate proportions while dramatically improving thermal and acoustic performance. Perfect for Westminster's Georgian squares and terraces.</p>
        
        <h3>Regency &amp; Early Victorian Stucco Terraces</h3>
        
        <p><strong>Belgravia and Pimlico</strong> showcase magnificent stucco terraces with large sash windows and elegant proportions. Secondary glazing respects the uniform street scenes essential to these Conservation Areas while providing modern performance benefits.</p>
        
        <h3>Victorian Mansion Blocks</h3>
        
        <p><strong>Victorian mansion flats</strong> (particularly late Victorian and Edwardian) are common throughout Westminster, especially in Bayswater, Maida Vale, and Victoria. These properties often suffer from traffic noise and draughty single-glazed windows. Our secondary glazing provides exceptional acoustic insulation and thermal performance without altering elegant facades.</p>
        
        <h3>Mews Properties</h3>
        
        <p>Westminster contains numerous <strong>historic mews</strong> converted from stables and carriage houses to desirable residences. These characterful properties benefit from secondary glazing that preserves original windows (often unusual sizes) while improving comfort.</p>
        
        <h2>Benefits of Secondary Glazing for Westminster Properties</h2>
        
        <h3>Planning Compliance</h3>
        
        <p>Secondary glazing's internal installation means it typically doesn't require planning permission in Westminster's Conservation Areas or Listed Building Consent (though we always recommend confirming). This avoids costly and uncertain planning processes.</p>
        
        <h3>Exceptional Noise Reduction</h3>
        
        <p>Transform your living environment with up to <strong>80% noise reduction (45dB)</strong>. Essential for Westminster properties facing:</p>
        
        <ul>
          <li>Marylebone Road (A501) traffic</li>
          <li>Park Lane and Oxford Street congestion</li>
          <li>Victoria Street and Vauxhall Bridge Road</li>
          <li>Edgware Road and Bayswater Road</li>
          <li>West End theatre and entertainment noise</li>
          <li>Emergency service routes through central London</li>
        </ul>
        
        <h3>Dramatic Thermal Improvement</h3>
        
        <p>Reduce heat loss by up to <strong>60%</strong> and heating costs by <strong>15-25%</strong>. Particularly valuable in Westminster's large period properties with high ceilings, numerous windows, and substantial heating requirements.</p>
        
        <h3>Preserves Property Value</h3>
        
        <p>Original period windows are a significant value contributor in Westminster's premium property market. Secondary glazing preserves these features while providing modern performance, maintaining and potentially enhancing property values.</p>
        
        <h3>Enhanced Security</h3>
        
        <p>Additional glazing provides an extra physical barrier with locking mechanisms available. Important for ground floor and basement properties in this high-value central London location.</p>
        
        <h3>Condensation Control</h3>
        
        <p>Eliminate condensation that damages original timber windows and decorative plasterwork—common issues in period properties with single glazing.</p>
        
        <h2>Why Choose Secondary Glazing Over Double Glazing in Westminster?</h2>
        
        <h3>Conservation Compliance</h3>
        
        <p>Secondary glazing doesn't alter external appearance, avoiding planning restrictions that often prevent window replacement in Westminster's Conservation Areas and listed buildings.</p>
        
        <h3>Preserves Original Windows</h3>
        
        <p>Original <a href="/georgian-windows-secondary-glazing">Georgian</a>, <a href="/victorian-windows-secondary-glazing">Victorian</a>, and <a href="/edwardian-property-secondary-glazing">Edwardian</a> windows are irreplaceable features contributing to Westminster's architectural significance and property values.</p>
        
        <h3>Superior Acoustic Performance</h3>
        
        <p>With optimized air gaps (100-150mm), secondary glazing typically outperforms standard double glazing for noise reduction—crucial for Westminster's busy locations.</p>
        
        <h3>Cost Effective</h3>
        
        <p>Secondary glazing is typically <strong>30-50% less expensive</strong> than replacement windows, with no planning application costs, masonry work, or external redecoration.</p>
        
        <h3>Reversible Solution</h3>
        
        <p>Fully reversible without damage to original windows—important for listed buildings and conservation areas where reversibility is valued.</p>
        
        <h3>Faster Installation</h3>
        
        <p>Installation typically completed in <strong>1-2 days</strong> with minimal disruption, compared to weeks for window replacement.</p>
        
        <h2>Planning &amp; Conservation in Westminster</h2>
        
        <h3>Westminster Planning Environment</h3>
        
        <p>Westminster City Council has one of the most rigorous planning environments in the UK due to the borough's exceptional heritage.</p>
        
        <h3>Article 4 Directions</h3>
        
        <p>Many Westminster Conservation Areas have <strong>Article 4 Directions</strong> removing permitted development rights. However, because secondary glazing is an internal alteration that doesn't change external appearance, it typically falls outside Article 4 restrictions.</p>
        
        <h3>Conservation Area Consent</h3>
        
        <p>While window replacement requires planning permission in Conservation Areas, secondary glazing typically doesn't because it preserves existing windows and external appearance. We can provide guidance specific to your property's location.</p>
        
        <h3>Listed Building Consent</h3>
        
        <p>For Westminster's numerous listed buildings, even internal alterations may require consent. However, secondary glazing applications are often approved because the solution is reversible and preserves original windows. We have extensive experience supporting consent applications with Westminster's conservation officers.</p>
        
        <h2>Our Westminster Secondary Glazing Services</h2>
        
        <h3>Heritage Property Surveys</h3>
        
        <p>Detailed surveys by conservation specialists who understand Westminster's architectural periods and planning environment.</p>
        
        <h3>Conservation &amp; Planning Guidance</h3>
        
        <p>Expert advice on Westminster's planning requirements, Conservation Area regulations, and Listed Building Consent processes. We can liaise with Westminster City Council's conservation officers when needed.</p>
        
        <h3>Bespoke Manufacturing</h3>
        
        <p>All secondary glazing <strong>custom-manufactured</strong> to fit Westminster's varied period window configurations, accommodating unusual sizes, bay windows, and architectural details.</p>
        
        <h3>Expert Installation</h3>
        
        <p>Experienced installers who understand the importance of working carefully with Westminster's valuable heritage properties, using appropriate fixings and protecting period features.</p>
        
        <h3>Acoustic Optimization</h3>
        
        <p>Specialist <strong>acoustic secondary glazing</strong> with enhanced noise reduction for properties on Westminster's busy roads, using laminated acoustic glass and optimized air gaps.</p>
        
        <h3>Thermal Performance</h3>
        
        <p>Systems achieving <strong>U-values as low as 1.8 W/m²K</strong>, transforming thermal efficiency while preserving original windows.</p>
        
        <h2>Window Types in Westminster Properties</h2>
        
        <p>Our secondary glazing solutions are suitable for all traditional window types found in Westminster:</p>
        
        <ul>
          <li><strong><a href="/sash-window-secondary-glazing">Sash Windows</a></strong> - Georgian, Victorian, and Edwardian box sash configurations</li>
          <li><strong><a href="/georgian-windows-secondary-glazing">Georgian Windows</a></strong> - Six-over-six, twelve-over-twelve period configurations</li>
          <li><strong><a href="/victorian-windows-secondary-glazing">Victorian Windows</a></strong> - Two-over-two, one-over-one, decorative glazing</li>
          <li><strong><a href="/edwardian-property-secondary-glazing">Edwardian Windows</a></strong> - Large one-over-one with decorative top lights</li>
          <li><strong>Bay Windows</strong> - Curved and angled bay configurations</li>
          <li><strong>French Doors</strong> - Period doors to balconies and terraces</li>
          <li><strong>Arched Windows</strong> - Gothic and classical arched configurations</li>
        </ul>
        
        <h2>Neighboring Service Areas</h2>
        
        <p>We also provide specialist secondary glazing services in boroughs adjacent to Westminster:</p>
        
        <ul>
          <li><strong><a href="/service-areas/kensington-chelsea">Kensington &amp; Chelsea Secondary Glazing</a></strong> - Covering Kensington, Chelsea, Notting Hill</li>
          <li><strong><a href="/service-areas/camden">Camden Secondary Glazing</a></strong> - Covering Bloomsbury, Hampstead, Camden Town</li>
          <li><strong><a href="/service-areas/lambeth">Lambeth Secondary Glazing</a></strong> - Covering Kennington, Waterloo, Lambeth</li>
          <li><strong><a href="/service-areas/wandsworth">Wandsworth Secondary Glazing</a></strong> - Covering Battersea, Nine Elms, Wandsworth</li>
        </ul>
        
        <h2>Why Choose Secondary Glazing Specialist for Your Westminster Property</h2>
        
        <ul>
          <li><strong>Westminster expertise:</strong> Extensive experience throughout the City of Westminster</li>
          <li><strong>Conservation knowledge:</strong> Deep understanding of Westminster's Conservation Areas and listed buildings</li>
          <li><strong>Planning support:</strong> Guidance through Westminster's planning environment and liaison with conservation officers</li>
          <li><strong>Bespoke solutions:</strong> Custom-manufactured systems for Westminster's varied period architecture</li>
          <li><strong>Quality craftsmanship:</strong> Installations worthy of Westminster's exceptional properties</li>
          <li><strong>Proven performance:</strong> Outstanding thermal and acoustic results</li>
          <li><strong>Heritage sensitivity:</strong> Sympathetic approach respecting architectural significance</li>
          <li><strong>Professional service:</strong> From survey to installation and aftercare</li>
        </ul>
        
        <h2>Get Your Free Westminster Property Survey</h2>
        
        <p>If you own a property in the <strong>City of Westminster</strong> and want to improve thermal efficiency, reduce noise, or enhance security while preserving architectural character and complying with Westminster's planning requirements, contact us today.</p>
        
        <p>We offer <strong>free, no-obligation surveys and quotations</strong> throughout Westminster. Our specialists will assess your property, discuss conservation requirements, and recommend the most appropriate secondary glazing solution for your Westminster home.</p>
        
        <p><strong>Call us today</strong> or <strong>request a free survey online</strong> to discover how secondary glazing can transform your Westminster property while preserving its architectural heritage.</p>
        
        <p><strong>Expert secondary glazing for Westminster properties - preserving heritage, enhancing comfort.</strong></p>
      </div>

      {/* Additional SEO CONTENT - Hidden from users, visible to crawlers */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <header>
          <h1>Secondary Glazing Westminster | Heritage Window Specialists London</h1>
          <nav aria-label="Main Navigation">
            <a href="/">Home</a>
            <a href="/listed-buildings-secondary-glazing">Listed Buildings</a>
            <a href="/conservation-areas-secondary-glazing">Conservation Areas</a>
            <a href="/victorian-windows-secondary-glazing">Victorian Windows</a>
            <a href="/sash-window-secondary-glazing">Sash Windows</a>
            <a href="/georgian-windows-secondary-glazing">Georgian Windows</a>
            <a href="/edwardian-property-secondary-glazing">Edwardian Properties</a>
            <a href="/thermal-insulation-secondary-glazing">Thermal Insulation</a>
            <a href="/noise-reduction-secondary-glazing">Noise Reduction</a>
            <a href="/service-areas">Service Areas</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>

        <main>
          <article>
            <section>
              <h2>Secondary Glazing Experts for Westminster</h2>
              <p>Westminster is home to some of Britain's most iconic architecture, from the <a href="/georgian-windows-secondary-glazing">Georgian townhouses</a> of Mayfair and Belgravia to the <a href="/victorian-windows-secondary-glazing">Victorian terraces</a> of Pimlico. Our specialist secondary glazing solutions protect these <a href="/listed-buildings-secondary-glazing">listed buildings</a> and <a href="/conservation-areas-secondary-glazing">conservation area</a> properties while providing exceptional <a href="/thermal-insulation-secondary-glazing">thermal</a> and <a href="/noise-reduction-secondary-glazing">acoustic performance</a>.</p>
              <p>The City of Westminster contains the highest concentration of Grade I listed buildings in London, including world-famous landmarks and prestigious residential addresses. From the stuccoed terraces of Belgravia to the mansion blocks of Marylebone, Westminster properties require the most sensitive approach to window improvements.</p>
              <p>Our <a href="/listed-buildings-secondary-glazing">listed building secondary glazing</a> solutions are designed specifically for Westminster's heritage properties. Installed internally behind your existing <a href="/sash-window-secondary-glazing">sash windows</a> or casement windows, secondary glazing is invisible from the street, meaning no planning permission is typically required.</p>
            </section>

            <section>
              <h2>Conservation Areas We Serve in Westminster</h2>
              <p>Westminster has over 50 conservation areas protecting its unique architectural heritage. We provide <a href="/conservation-areas-secondary-glazing">conservation-approved secondary glazing</a> across all of them, including:</p>
              <ul>
                <li><strong>Westminster Abbey</strong> - Historic abbey precincts</li>
                <li><strong>Whitehall</strong> - Government quarter conservation area</li>
                <li><strong>Mayfair</strong> - Prestigious Georgian townhouses</li>
                <li><strong>Belgravia</strong> - Stuccoed terraces and garden squares</li>
                <li><strong>Pimlico</strong> - Victorian residential streets</li>
                <li><strong>Marylebone</strong> - Georgian and Victorian mixed architecture</li>
                <li><strong>St James's</strong> - Historic commercial and residential</li>
                <li><strong>Fitzrovia</strong> - Georgian squares and Victorian terraces</li>
                <li><strong>Regent's Park</strong> - Nash terraces and villas</li>
                <li><strong>Bayswater</strong> - Victorian stucco-fronted properties</li>
              </ul>
            </section>

            <section>
              <h2>Benefits for Westminster Properties</h2>
              <h3>Thermal Insulation</h3>
              <p>Reduce heat loss by up to 65% through your period windows. Essential for the tall sash windows common in Westminster's Georgian and Victorian properties. <a href="/thermal-insulation-secondary-glazing">Learn more about thermal insulation</a>.</p>
              <h3>Noise Reduction</h3>
              <p>Block up to 80% of traffic noise from busy Westminster streets with our <a href="/noise-reduction-secondary-glazing">acoustic glazing</a> options. Perfect for properties near major roads like Park Lane, Victoria Street, and the Embankment.</p>
              <h3>Heritage Preservation</h3>
              <p>Preserve your original windows and the character of your <a href="/listed-buildings-secondary-glazing">listed building</a>. Our fully reversible installations leave no permanent alterations.</p>
              <h3>Enhanced Security</h3>
              <p>Add an extra layer of security with laminated glass options, providing significant resistance to forced entry for ground-floor windows.</p>
            </section>

            <section>
              <h2>Window Types We Work With</h2>
              <ul>
                <li><a href="/sash-window-secondary-glazing"><strong>Sash Windows</strong></a> - Vertical sliding windows typical in Georgian and Victorian properties</li>
                <li><a href="/residential/casement-windows"><strong>Casement Windows</strong></a> - Side-hinged windows</li>
                <li><a href="/residential/bay-windows"><strong>Bay Windows</strong></a> - Multi-angled installations</li>
                <li><a href="/residential/crittall-windows"><strong>Crittall Windows</strong></a> - Steel-framed windows</li>
                <li><strong>Arched Windows</strong> - Bespoke solutions for curved features</li>
                <li><strong>Leaded Light Windows</strong> - Preserving decorative glazing</li>
              </ul>
            </section>

            <section>
              <h2>Related Services</h2>
              <ul>
                <li><a href="/listed-buildings-secondary-glazing">Listed Buildings Secondary Glazing</a></li>
                <li><a href="/conservation-areas-secondary-glazing">Conservation Areas Secondary Glazing</a></li>
                <li><a href="/victorian-windows-secondary-glazing">Victorian Windows Secondary Glazing</a></li>
                <li><a href="/georgian-windows-secondary-glazing">Georgian Windows Secondary Glazing</a></li>
                <li><a href="/edwardian-property-secondary-glazing">Edwardian Property Secondary Glazing</a></li>
                <li><a href="/thermal-insulation-secondary-glazing">Thermal Insulation Solutions</a></li>
                <li><a href="/noise-reduction-secondary-glazing">Noise Reduction Glazing</a></li>
              </ul>
            </section>

            <section>
              <h2>Other Areas We Serve</h2>
              <ul>
                <li><a href="/service-areas/kensington-chelsea">Kensington &amp; Chelsea Secondary Glazing</a></li>
                <li><a href="/service-areas/camden">Camden Secondary Glazing</a></li>
                <li><a href="/service-areas/islington">Islington Secondary Glazing</a></li>
                <li><a href="/areas/central-london">Central London Secondary Glazing</a></li>
                <li><a href="/areas/north-london">North London Secondary Glazing</a></li>
                <li><a href="/areas/south-london">South London Secondary Glazing</a></li>
                <li><a href="/service-areas">View all 38 service areas</a></li>
              </ul>
            </section>

            <section>
              <h2>Get Your Free Westminster Property Survey</h2>
              <p>Contact us today for a free, no-obligation survey of your Westminster property. Our heritage specialists will visit your property, assess your windows, and provide a detailed quote.</p>
              <p><a href="/contact">Contact us today</a> or <a href="/quote-request">request a free quote</a>.</p>
            </section>
          </article>
        </main>

        <footer>
          <nav aria-label="Footer Navigation">
            <h3>Our Services</h3>
            <ul>
              <li><a href="/listed-buildings-secondary-glazing">Listed Buildings</a></li>
              <li><a href="/conservation-areas-secondary-glazing">Conservation Areas</a></li>
              <li><a href="/victorian-windows-secondary-glazing">Victorian Windows</a></li>
              <li><a href="/sash-window-secondary-glazing">Sash Windows</a></li>
            </ul>

            <h3>Nearby Areas</h3>
            <ul>
              <li><a href="/service-areas/kensington-chelsea">Kensington &amp; Chelsea</a></li>
              <li><a href="/service-areas/camden">Camden</a></li>
              <li><a href="/service-areas/islington">Islington</a></li>
              <li><a href="/service-areas">All Service Areas</a></li>
            </ul>

            <h3>Company</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/quote-request">Get a Quote</a></li>
            </ul>
          </nav>
          <p>&copy; 2025 <a href="/">Secondary Glazing Specialist</a>. All rights reserved.</p>
        </footer>
      </div>

      <Helmet>
        <title>Secondary Glazing Westminster | Heritage Window Specialists London</title>
        <meta 
          name="description" 
          content="Expert secondary glazing for Westminster's listed buildings and conservation areas. Solutions for Georgian, Victorian and Edwardian properties. Free heritage surveys."
        />
        <meta 
          name="keywords" 
          content="secondary glazing Westminster, Westminster listed buildings, Mayfair glazing, Belgravia secondary glazing, heritage windows Westminster, conservation area glazing"
        />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/service-areas/westminster" />
      </Helmet>

      <MainNav />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">City of Westminster</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Secondary Glazing Westminster
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Westminster is home to some of Britain's most iconic architecture, from the 
              <Link to="/georgian-windows-secondary-glazing" className="text-primary hover:underline"> Georgian townhouses</Link> of 
              Mayfair and Belgravia to the <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian terraces</Link> of 
              Pimlico. Our specialist secondary glazing solutions protect these 
              <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline"> listed buildings</Link> and 
              <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline"> conservation area</Link> properties 
              while providing exceptional <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline">thermal</Link> and 
              <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline"> acoustic performance</Link>.
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
                <p className="text-sm text-muted-foreground">All Westminster Postcodes</p>
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
              
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6">Secondary Glazing Experts for Westminster</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The City of Westminster contains the highest concentration of Grade I listed buildings in 
                  London, including world-famous landmarks and prestigious residential addresses. From the 
                  stuccoed terraces of Belgravia to the mansion blocks of Marylebone, Westminster properties 
                  require the most sensitive approach to window improvements.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">listed building secondary glazing</Link> solutions 
                  are designed specifically for Westminster's heritage properties. Installed internally behind 
                  your existing <Link to="/sash-window-secondary-glazing" className="text-primary hover:underline">sash windows</Link> or 
                  <Link to="/residential/casement-windows" className="text-primary hover:underline"> casement windows</Link>, 
                  secondary glazing is invisible from the street, meaning no planning permission is typically required.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Westminster faces unique challenges including traffic noise from major routes like Park Lane, 
                  Victoria Street, and the Embankment. Our <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">acoustic glazing</Link> can 
                  reduce external noise by up to 80%, transforming the comfort of your home. Combined with 
                  <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline"> thermal insulation</Link> benefits 
                  of up to 65% heat loss reduction, secondary glazing is the ideal solution for period properties.
                </p>
              </div>

              {/* Conservation Areas */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Conservation Areas We Serve</h2>
                <p className="text-muted-foreground mb-6">
                  Westminster has over 50 conservation areas protecting its unique architectural heritage. We provide 
                  <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline"> conservation-approved secondary glazing</Link> across 
                  all of them, including:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {conservationAreas.map((area, index) => (
                    <div key={index} className="bg-muted/50 px-3 py-2 rounded text-sm">
                      {area}
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits Section */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Benefits for Westminster Properties</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <Thermometer className="h-6 w-6 text-primary" />
                        <CardTitle className="text-lg">
                          <Link to="/thermal-insulation-secondary-glazing" className="hover:text-primary">Thermal Insulation</Link>
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Reduce heat loss by up to 65% through your period windows. Essential for the tall 
                        sash windows common in Westminster's Georgian and Victorian properties.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <Volume2 className="h-6 w-6 text-primary" />
                        <CardTitle className="text-lg">
                          <Link to="/noise-reduction-secondary-glazing" className="hover:text-primary">Noise Reduction</Link>
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Block up to 80% of traffic noise from busy Westminster streets with our acoustic 
                        glazing options. Perfect for properties near major roads.
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
                        Preserve your original windows and the character of your listed building. Our 
                        fully reversible installations leave no permanent alterations.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <Shield className="h-6 w-6 text-primary" />
                        <CardTitle className="text-lg">
                          <Link to="/specialized/security-glazing" className="hover:text-primary">Enhanced Security</Link>
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Add an extra layer of security with laminated glass options, providing 
                        significant resistance to forced entry for ground-floor windows.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Our Approach */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6">Our Westminster Service</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We have extensive experience working in Westminster, from Grade I listed properties in 
                  Mayfair to <Link to="/edwardian-property-secondary-glazing" className="text-primary hover:underline">Edwardian mansion blocks</Link> in 
                  Victoria. Our team works closely with Westminster City Council conservation officers to 
                  ensure all installations meet the highest heritage standards.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Whether you have <Link to="/residential/sash-windows" className="text-primary hover:underline">sash windows</Link>, 
                  <Link to="/residential/bay-windows" className="text-primary hover:underline"> bay windows</Link>, or 
                  <Link to="/residential/crittall-windows" className="text-primary hover:underline"> Crittall windows</Link>, 
                  we provide bespoke solutions. Explore our <Link to="/case-studies" className="text-primary hover:underline">case studies</Link> or 
                  learn about the <Link to="/benefits" className="text-primary hover:underline">benefits of secondary glazing</Link>. 
                  For existing installations, see our <Link to="/secondary-glazing-repairs" className="text-primary hover:underline">repairs service</Link>.
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
                <h2 className="text-2xl font-bold mb-4">Get Your Free Westminster Survey</h2>
                <p className="mb-6 opacity-90">
                  Our heritage specialists will visit your property, assess your windows, and provide 
                  a detailed quote with no obligation.
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
                    <li><Link to="/guides/secondary-vs-double-glazing" className="text-sm text-primary hover:underline">Secondary vs Double Glazing</Link></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-primary-foreground">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm opacity-90">Ready to improve your Westminster property?</p>
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

export default Westminster;
