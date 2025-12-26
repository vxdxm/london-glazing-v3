import React from "react";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { Link } from "react-router-dom";
import { TreePine, MapPin, CheckCircle, Home, Phone, ThermometerSun, Volume2, Shield, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/MainNav";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import RelatedContentSidebar from "@/components/seo/RelatedContentSidebar";
import CTASection from "@/components/seo/CTASection";

const breadcrumbItems = [
  { label: "Services", href: "/residential" },
  { label: "Heritage Properties", href: "/listed-buildings-secondary-glazing" },
  { label: "Conservation Areas Secondary Glazing" },
];

const relatedLinks = [
  { title: "Listed Buildings Glazing", href: "/listed-buildings-secondary-glazing", description: "Grade I, II*, II solutions" },
  { title: "Victorian Windows", href: "/victorian-windows-secondary-glazing", description: "Period sash window solutions" },
  { title: "Georgian Windows", href: "/georgian-windows-secondary-glazing", description: "Georgian property glazing" },
  { title: "Edwardian Properties", href: "/edwardian-property-secondary-glazing", description: "Edwardian home solutions" },
  { title: "Noise Reduction", href: "/noise-reduction-secondary-glazing", description: "Block external noise" },
  { title: "Thermal Insulation", href: "/thermal-insulation-secondary-glazing", description: "Reduce heat loss" },
  { title: "Sash Windows", href: "/sash-window-secondary-glazing", description: "Traditional sash solutions" },
];

const serviceAreas = [
  { title: "Kensington & Chelsea", href: "/service-areas/kensington-chelsea", description: "South Kensington, Chelsea, Notting Hill" },
  { title: "Westminster", href: "/service-areas/westminster", description: "Belgravia, Pimlico, Mayfair, St James's" },
  { title: "Camden", href: "/service-areas/camden", description: "Bloomsbury, Hampstead, Primrose Hill" },
  { title: "Islington", href: "/service-areas/islington", description: "Barnsbury, Canonbury, Highbury" },
  { title: "Central London", href: "/areas/central-london", description: "City and Central boroughs" },
  { title: "North London", href: "/areas/north-london", description: "Highgate, Muswell Hill, Crouch End" },
  { title: "South London", href: "/areas/south-london", description: "Dulwich, Blackheath, Greenwich" },
  { title: "West London", href: "/areas/west-london", description: "Fulham, Richmond, Chiswick" },
  { title: "East London", href: "/areas/east-london", description: "Hackney, Stoke Newington" },
  { title: "Home Counties", href: "/areas/home-counties", description: "Surrey, Hertfordshire, Essex" },
];

const ConservationAreasSecondaryGlazing = () => {
  return (
    <div className="min-h-screen">
      {/* SEO CONTENT - Hidden from users, visible to crawlers */}
      <div style={{ display: 'none' }} className="seo-content">
        {/* SEO Content Block for Conservation Areas Secondary Glazing */}
        
        <h1>Conservation Areas Secondary Glazing | Sympathetic Window Solutions London</h1>
        
        <h2>Expert Secondary Glazing for Conservation Areas Across London</h2>
        
        <p>If you own a property in a <strong>Conservation Area</strong>, you understand the importance of preserving its character while improving comfort and energy efficiency. <a href="/"><strong>Secondary Glazing Specialist</strong></a> provides expert <strong>secondary glazing for conservation areas</strong> across London, offering a sympathetic solution that respects architectural heritage while delivering modern performance benefits.</p>
        
        <p>Our specialist secondary glazing systems are designed specifically for <strong>conservation area properties</strong>, working within planning restrictions to provide exceptional thermal insulation, noise reduction, and enhanced security without altering the external appearance of your historic windows.</p>
        
        <h2>What is a Conservation Area?</h2>
        
        <p>A <strong>Conservation Area</strong> is a designated area of special architectural or historic interest, the character or appearance of which it is desirable to preserve or enhance. There are over 10,000 Conservation Areas in England, with London alone containing more than 850 designated areas covering approximately 25% of the capital.</p>
        
        <p><strong>Conservation Area designation</strong> means that special planning controls apply to protect the area's historic and architectural character. These controls typically restrict:</p>
        
        <ul>
          <li>External alterations to buildings</li>
          <li>Demolition of buildings or structures</li>
          <li>Work to trees above a certain size</li>
          <li>Changes to roof materials and elevations</li>
          <li>Window and door replacements</li>
        </ul>
        
        <p>For property owners, this means that even work that would normally fall under <strong>permitted development rights</strong> may require formal <strong>Conservation Area Consent</strong> or planning permission.</p>
        
        <h2>Conservation Area Consent Requirements</h2>
        
        <p>When planning any external alterations to a property within a Conservation Area, it's essential to understand the consent requirements:</p>
        
        <h3>Planning Permission in Conservation Areas</h3>
        
        <p>Many Conservation Areas have <strong>Article 4 Directions</strong> in place, which remove permitted development rights for certain types of work. This means that alterations that would normally be allowed without planning permission require formal approval from your local planning authority.</p>
        
        <p>The good news is that <strong>secondary glazing</strong> is typically installed on the <em>internal</em> side of your existing windows, meaning it doesn't alter the external appearance of your property. This internal installation approach often means that <strong>Conservation Area Consent is not required</strong> for secondary glazing, though we always recommend confirming with your local conservation officer.</p>
        
        <h3>Article 4 Directions Explained</h3>
        
        <p><strong>Article 4 Directions</strong> are planning tools used by local authorities to withdraw permitted development rights in Conservation Areas. They are commonly applied to protect the character of areas with uniform architectural features.</p>
        
        <p>Common restrictions under Article 4 Directions include:</p>
        
        <ul>
          <li>Replacement of windows and doors</li>
          <li>Changes to roof materials</li>
          <li>Installation of satellite dishes or solar panels on prominent elevations</li>
          <li>External painting or rendering</li>
          <li>Installation of external double glazing</li>
        </ul>
        
        <p>Because <a href="/"><strong>secondary glazing</strong></a> is installed internally and doesn't alter the external appearance, it typically falls outside Article 4 restrictions. However, each Conservation Area has unique characteristics, and we recommend consulting with your local planning authority or conservation officer.</p>
        
        <h2>Why Choose Secondary Glazing for Conservation Areas?</h2>
        
        <p>Secondary glazing offers numerous advantages for <strong>conservation area properties</strong>:</p>
        
        <h3>1. Preserves Original Windows</h3>
        
        <p>Unlike replacement double glazing, <strong>secondary glazing</strong> preserves your original historic windows completely intact. Your property's character and architectural integrity remain unchanged, while you enjoy all the benefits of modern glazing performance.</p>
        
        <h3>2. No External Alterations</h3>
        
        <p>Secondary glazing is installed on the internal side of your existing windows, meaning the external appearance of your property remains completely unchanged. This internal installation typically means <strong>no planning permission is required</strong> in Conservation Areas.</p>
        
        <h3>3. Exceptional Thermal Performance</h3>
        
        <p>Modern secondary glazing systems can achieve <strong>U-values as low as 1.8 W/m²K</strong>, dramatically improving the thermal efficiency of single-glazed historic windows. The air gap between your original window and the secondary unit provides excellent insulation, reducing heat loss by up to 60%.</p>
        
        <h3>4. Outstanding Noise Reduction</h3>
        
        <p>The secondary pane creates an effective acoustic barrier, reducing external noise by up to <strong>70% (over 40dB reduction)</strong>. This is particularly valuable in busy urban Conservation Areas where traffic noise can be significant.</p>
        
        <h3>5. Enhanced Security</h3>
        
        <p>Secondary glazing adds an additional physical barrier, significantly improving your property's security. Our systems can be fitted with locking mechanisms, providing peace of mind while maintaining your windows' historic appearance.</p>
        
        <h3>6. Reduces Condensation</h3>
        
        <p>By improving thermal performance, secondary glazing helps prevent condensation forming on your original windows, protecting historic timber and paintwork from moisture damage.</p>
        
        <h3>7. Cost-Effective Solution</h3>
        
        <p>Secondary glazing is typically <strong>30-50% less expensive</strong> than replacement windows, with no need for costly planning applications, listed building consent processes, or restoration of external masonry.</p>
        
        <h2>Conservation Areas We Serve Across London</h2>
        
        <p>We provide specialist <strong>secondary glazing services</strong> throughout London's Conservation Areas, with particular expertise in the following boroughs:</p>
        
        <h3>Royal Borough of Kensington &amp; Chelsea</h3>
        
        <p>Home to over 70 Conservation Areas including prestigious areas such as <a href="/service-areas/kensington-chelsea"><strong>The Boltons, Ladbroke Estate, Chelsea Park &amp; Carlyle, and Hans Town</strong></a>. Our secondary glazing solutions are perfect for the area's Georgian terraces, Victorian villas, and Edwardian mansion blocks.</p>
        
        <h3>City of Westminster</h3>
        
        <p><a href="/service-areas/westminster"><strong>Westminster</strong></a> contains over 75 Conservation Areas, including Mayfair, Belgravia, Pimlico, and Marylebone. We specialize in secondary glazing for the area's elegant townhouses, garden squares, and historic estates.</p>
        
        <h3>Royal Borough of Greenwich</h3>
        
        <p>With the <strong>Maritime Greenwich World Heritage Site</strong> and numerous Conservation Areas, Greenwich requires particularly sensitive approaches to window improvements. Our secondary glazing systems preserve the area's naval and architectural heritage.</p>
        
        <h3>London Borough of Camden</h3>
        
        <p><a href="/service-areas/camden"><strong>Camden</strong></a> features over 35 Conservation Areas including Bloomsbury, Hampstead, and Primrose Hill. Our solutions work beautifully with the area's Georgian squares, Victorian terraces, and Arts &amp; Crafts properties.</p>
        
        <h3>London Borough of Islington</h3>
        
        <p><a href="/service-areas/islington"><strong>Islington</strong></a> contains over 40 Conservation Areas with exceptional Georgian and Victorian terraces. Our slim-profile secondary glazing systems are ideal for the area's elegant townhouses and garden squares.</p>
        
        <h3>London Borough of Richmond upon Thames</h3>
        
        <p><a href="/service-areas/richmond-upon-thames"><strong>Richmond</strong></a> includes Conservation Areas such as Richmond Green, Petersham, and Ham Common. Our secondary glazing solutions complement the area's historic village character and riverside properties.</p>
        
        <h3>London Borough of Wandsworth</h3>
        
        <p><a href="/service-areas/wandsworth"><strong>Wandsworth</strong></a> features numerous Conservation Areas including Clapham Old Town and Wandsworth Town. We provide sympathetic secondary glazing for Victorian terraces and Edwardian properties throughout the borough.</p>
        
        <h3>London Borough of Hammersmith &amp; Fulham</h3>
        
        <p><a href="/service-areas/hammersmith-fulham"><strong>Hammersmith &amp; Fulham</strong></a> contains Conservation Areas such as Brook Green and Fulham Palace Road. Our solutions work perfectly with the area's Victorian and Edwardian housing stock.</p>
        
        <h2>Our Conservation Area Secondary Glazing Services</h2>
        
        <p>We offer comprehensive secondary glazing solutions tailored to Conservation Area requirements:</p>
        
        <h3>Heritage Property Survey</h3>
        
        <p>Every project begins with a detailed survey of your property. Our specialists assess your existing windows, discuss your requirements, and recommend the most appropriate secondary glazing solution that respects your property's character while delivering optimal performance.</p>
        
        <h3>Planning Guidance &amp; Support</h3>
        
        <p>While secondary glazing typically doesn't require planning permission in Conservation Areas, we provide guidance on local requirements and can liaise with conservation officers if needed. We understand the nuances of different Conservation Areas and can provide supporting documentation if required.</p>
        
        <h3>Bespoke Manufacturing</h3>
        
        <p>All our secondary glazing units are <strong>custom-manufactured</strong> to precisely fit your existing window openings. We can match historic profiles, accommodate unusual shapes, and work with your property's unique architectural features.</p>
        
        <h3>Sympathetic Installation</h3>
        
        <p>Our experienced installers understand the importance of working carefully with historic properties. We use appropriate fixings, protect original paintwork and joinery, and ensure all work is carried out to the highest conservation standards.</p>
        
        <h3>Window Types We Work With</h3>
        
        <p>Our secondary glazing solutions are suitable for all traditional window types commonly found in Conservation Areas:</p>
        
        <ul>
          <li><a href="/sash-window-secondary-glazing"><strong>Sash Windows</strong></a> - Georgian, Victorian, and Edwardian box sash windows</li>
          <li><a href="/victorian-windows-secondary-glazing"><strong>Victorian Windows</strong></a> - Multi-pane and decorative glazing patterns</li>
          <li><a href="/georgian-windows-secondary-glazing"><strong>Georgian Windows</strong></a> - Six-over-six and twelve-over-twelve pane configurations</li>
          <li><strong>Casement Windows</strong> - Side-hung and top-hung historic casements</li>
          <li><strong>Bay Windows</strong> - Curved and angled bay configurations</li>
          <li><strong>Arched Windows</strong> - Period arched and Gothic-style windows</li>
        </ul>
        
        <h2>Secondary Glazing for Listed Buildings in Conservation Areas</h2>
        
        <p>Many properties within Conservation Areas also hold <a href="/listed-buildings-secondary-glazing"><strong>listed building status</strong></a> (Grade I, Grade II*, or Grade II). If your property is both in a Conservation Area AND listed, the requirements are more stringent:</p>
        
        <p><strong>Listed Building Consent</strong> is required for any works that affect the character of a listed building, even internal alterations. However, well-designed secondary glazing can often gain approval because:</p>
        
        <ul>
          <li>It's fully reversible - original windows remain intact</li>
          <li>It preserves the external appearance</li>
          <li>It protects historic windows from damage</li>
          <li>It provides essential thermal improvements without replacement</li>
        </ul>
        
        <p>We have extensive experience working with <strong>listed buildings in Conservation Areas</strong> and can provide documentation and support for your Listed Building Consent application.</p>
        
        <h2>Working with Conservation Officers</h2>
        
        <p>Each London borough has conservation officers who oversee works within Conservation Areas. While secondary glazing typically doesn't require their approval, we recommend informing them of your plans, particularly for:</p>
        
        <ul>
          <li>Properties in prominent locations</li>
          <li>Buildings that contribute significantly to the Conservation Area's character</li>
          <li>Properties with Article 4 Directions</li>
          <li>Listed buildings within Conservation Areas</li>
        </ul>
        
        <p>We can provide specifications, drawings, and technical information to support discussions with conservation officers, and we're happy to meet with them to discuss proposed installations.</p>
        
        <h2>Benefits for Different Property Types</h2>
        
        <h3>Georgian Terraces</h3>
        
        <p>Georgian properties in Conservation Areas typically feature elegant six-over-six or twelve-over-twelve sash windows. Our slim secondary glazing systems preserve the fine glazing bars and proportions while dramatically improving thermal and acoustic performance.</p>
        
        <h3>Victorian Villas</h3>
        
        <p>Victorian properties often feature decorative windows with colored or etched glass. Our secondary glazing protects these irreplaceable features while reducing heat loss and noise, making these characterful homes more comfortable year-round.</p>
        
        <h3>Edwardian Mansion Blocks</h3>
        
        <p>Early 20th-century mansion flats in Conservation Areas frequently suffer from traffic noise and single-glazed windows. Secondary glazing provides exceptional acoustic insulation and thermal performance without altering the buildings' elegant Edwardian character.</p>
        
        <h3>Arts &amp; Crafts Properties</h3>
        
        <p>Arts &amp; Crafts houses often feature distinctive leaded light windows and handcrafted joinery. Our bespoke secondary glazing solutions protect these unique features while improving comfort and reducing energy costs.</p>
        
        <h2>Thermal Performance &amp; Energy Efficiency</h2>
        
        <p>Properties in Conservation Areas often have poor energy efficiency due to single-glazed historic windows. Secondary glazing offers dramatic improvements:</p>
        
        <ul>
          <li><strong>U-value reduction:</strong> From approximately 5.0 W/m²K (single glazing) to 1.8-2.8 W/m²K (with secondary glazing)</li>
          <li><strong>Heat loss reduction:</strong> Up to 60% reduction in heat loss through windows</li>
          <li><strong>Energy cost savings:</strong> Typical savings of 15-25% on annual heating costs</li>
          <li><strong>Carbon reduction:</strong> Significant reduction in your property's carbon footprint</li>
        </ul>
        
        <p>These improvements are achieved while keeping your historic windows fully intact and your property's Conservation Area character preserved.</p>
        
        <h2>Acoustic Performance</h2>
        
        <p>Many Conservation Areas are in busy urban locations where traffic noise is a significant issue. Secondary glazing provides exceptional noise reduction:</p>
        
        <ul>
          <li><strong>Standard systems:</strong> 30-35dB noise reduction</li>
          <li><strong>Acoustic systems:</strong> 40-45dB noise reduction</li>
          <li><strong>Heavy-duty acoustic systems:</strong> Up to 50dB noise reduction</li>
        </ul>
        
        <p>This transforms the internal environment of your Conservation Area property, creating peaceful, comfortable living spaces despite external noise.</p>
        
        <h2>Reversibility &amp; Future Flexibility</h2>
        
        <p>One of the key advantages of secondary glazing for Conservation Area properties is its <strong>complete reversibility</strong>:</p>
        
        <ul>
          <li>Original windows remain completely unchanged</li>
          <li>Secondary glazing can be removed without leaving permanent alterations</li>
          <li>Property can be returned to its original state if required</li>
          <li>No damage to historic fabric or architectural features</li>
        </ul>
        
        <p>This reversibility is often a key factor in gaining approval for works in sensitive Conservation Areas.</p>
        
        <h2>Get Your Free Conservation Area Property Survey</h2>
        
        <p>If your property is located in a Conservation Area and you're looking to improve thermal efficiency, reduce noise, or enhance security while preserving its historic character, <strong>secondary glazing</strong> is the ideal solution.</p>
        
        <p>Contact <a href="/"><strong>Secondary Glazing Specialist</strong></a> today for a <strong>free, no-obligation survey and quotation</strong>. Our conservation specialists will assess your property, discuss your requirements, and recommend the most appropriate secondary glazing solution for your Conservation Area home.</p>
        
        <p><strong>Call us today</strong> or <strong>request a free survey online</strong> to discover how secondary glazing can transform your Conservation Area property while respecting its architectural heritage.</p>
        
        <h3>Related Services:</h3>
        
        <ul>
          <li><a href="/listed-buildings-secondary-glazing"><strong>Listed Buildings Secondary Glazing</strong></a> - Specialist solutions for Grade I, II*, and II properties</li>
          <li><a href="/victorian-windows-secondary-glazing"><strong>Victorian Windows Secondary Glazing</strong></a> - Expert solutions for Victorian properties</li>
          <li><a href="/georgian-windows-secondary-glazing"><strong>Georgian Windows Secondary Glazing</strong></a> - Sympathetic glazing for Georgian architecture</li>
          <li><a href="/sash-window-secondary-glazing"><strong>Sash Window Secondary Glazing</strong></a> - Specialist secondary glazing for period sash windows</li>
          <li><a href="/edwardian-property-secondary-glazing"><strong>Edwardian Property Secondary Glazing</strong></a> - Solutions for Edwardian homes and flats</li>
        </ul>
        
        <h3>Service Areas:</h3>
        
        <ul>
          <li><a href="/service-areas/kensington-chelsea"><strong>Kensington &amp; Chelsea Secondary Glazing</strong></a></li>
          <li><a href="/service-areas/westminster"><strong>Westminster Secondary Glazing</strong></a></li>
          <li><a href="/service-areas/camden"><strong>Camden Secondary Glazing</strong></a></li>
          <li><a href="/service-areas/islington"><strong>Islington Secondary Glazing</strong></a></li>
          <li><a href="/service-areas/richmond-upon-thames"><strong>Richmond upon Thames Secondary Glazing</strong></a></li>
          <li><a href="/service-areas/wandsworth"><strong>Wandsworth Secondary Glazing</strong></a></li>
          <li><a href="/service-areas/hammersmith-fulham"><strong>Hammersmith &amp; Fulham Secondary Glazing</strong></a></li>
          <li><a href="/"><strong>View All London Service Areas</strong></a></li>
        </ul>
        
        {/* End SEO Content Block */}
      </div>

      <EnhancedSEO
        title="Conservation Area Secondary Glazing | Expert Heritage Solutions London"
        description="Specialist secondary glazing for properties in conservation areas. Meet planning requirements while improving insulation and reducing noise. Free surveys across London conservation areas."
        canonicalPath="/conservation-areas-secondary-glazing"
        keywords={[
          "conservation area secondary glazing",
          "Article 4 direction glazing",
          "heritage area windows",
          "conservation approved glazing",
          "period property windows London",
          "conservation officer approved",
          "planning permission glazing",
          "heritage property insulation"
        ]}
      />
      
      <MainNav />
      
      <div className="container mx-auto px-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6">
              <TreePine className="h-5 w-5" />
              <span className="font-medium">Conservation Specialists</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Conservation Area Secondary Glazing | Preserve Character While Improving Efficiency
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              If your property is located in a <strong>conservation area</strong>, you will understand the importance of 
              preserving architectural character while maintaining comfort and energy efficiency. Our specialist 
              <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline"> thermal insulation</Link> and{" "}
              <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">noise reduction</Link> solutions 
              are designed specifically for heritage properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/quote-request">Get Free Survey</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:02070601572">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Our Experts
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="prose prose-lg max-w-none">
                
                {/* Introduction */}
                <section className="mb-12 not-prose">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Expert Secondary Glazing for Conservation Areas Across London
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Secondary Glazing Specialist provides expert <strong>secondary glazing solutions for conservation area properties</strong> throughout 
                    London, helping homeowners meet strict planning requirements while dramatically improving{" "}
                    <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline">thermal insulation</Link> and{" "}
                    <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">noise reduction</Link>.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    With over 15 years of experience working in London's conservation areas, we understand the unique challenges and 
                    regulations governing period properties. Our bespoke secondary glazing installations preserve the external appearance 
                    of your home while reducing heat loss by up to 75% and blocking up to 80% of external noise.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you own a{" "}
                    <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian terrace</Link>,{" "}
                    <Link to="/georgian-windows-secondary-glazing" className="text-primary hover:underline">Georgian townhouse</Link>, or{" "}
                    <Link to="/edwardian-property-secondary-glazing" className="text-primary hover:underline">Edwardian property</Link>, 
                    our specialist team delivers sympathetic solutions that satisfy conservation officers and enhance your quality of life.
                  </p>
                </section>

                {/* Understanding Conservation Areas */}
                <section className="mb-12 not-prose">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Understanding Conservation Areas
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Conservation areas</strong> are designated areas of special architectural or historic interest, where the character 
                    and appearance must be preserved and enhanced. London has over <strong>1,000 conservation areas</strong>, covering 
                    approximately 25% of the capital.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Properties in conservation areas face restrictions on:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>External alterations</strong> - Any changes to the exterior typically require planning permission</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Window replacements</strong> - Replacing original windows often prohibited or heavily restricted</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Materials</strong> - Must be in keeping with the character of the area</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Design</strong> - Any additions must respect the existing architectural style</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Secondary glazing offers the ideal solution</strong> - it provides all the benefits of modern double glazing 
                    without altering the external appearance of your property.
                  </p>
                </section>

                {/* Planning Permission */}
                <section className="mb-12 not-prose">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Do I Need Planning Permission?
                  </h2>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">Internal Secondary Glazing (Usually No Permission Required)</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    If the secondary glazing is installed entirely on the <strong>interior</strong> and does not alter the external appearance 
                    of the property, planning permission is typically not required. This is one of the major advantages of secondary glazing 
                    over replacement windows.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3">When Permission May Be Required</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Planning permission may be required if:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Your property is also <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">listed</Link> (requires Listed Building Consent)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">The installation affects the external appearance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">The property fronts a main road or public highway</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Your local authority has specific Article 4 directions in place</span>
                    </li>
                  </ul>

                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <FileText className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Free Planning Guidance</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          We provide <strong>free planning guidance</strong> for all conservation area properties and liaise directly 
                          with conservation officers when required.
                        </p>
                        <Button asChild variant="outline" size="sm">
                          <Link to="/quote-request">Request Planning Support</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Benefits */}
                <section className="mb-12 not-prose">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Benefits of Secondary Glazing in Conservation Areas
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-muted/30 rounded-lg p-6">
                      <Shield className="h-8 w-8 text-primary mb-4" />
                      <h3 className="font-semibold text-foreground mb-2">Preserve Original Windows</h3>
                      <p className="text-sm text-muted-foreground">
                        Secondary glazing allows you to <strong>keep your original period windows</strong> intact - essential in 
                        conservation areas where window replacement is restricted.
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-6">
                      <Home className="h-8 w-8 text-primary mb-4" />
                      <h3 className="font-semibold text-foreground mb-2">No External Alterations</h3>
                      <p className="text-sm text-muted-foreground">
                        Because secondary glazing is installed on the interior, <strong>there are no external changes</strong> to 
                        your property - a key requirement in conservation areas.
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-6">
                      <ThermometerSun className="h-8 w-8 text-primary mb-4" />
                      <h3 className="font-semibold text-foreground mb-2">
                        <Link to="/thermal-insulation-secondary-glazing" className="hover:text-primary">Superior Thermal Performance</Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        The air gap creates exceptional thermal insulation, <strong>reducing heat loss by up to 75%</strong> - 
                        far superior to traditional single glazing.
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-6">
                      <Volume2 className="h-8 w-8 text-primary mb-4" />
                      <h3 className="font-semibold text-foreground mb-2">
                        <Link to="/noise-reduction-secondary-glazing" className="hover:text-primary">Dramatic Noise Reduction</Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Secondary glazing <strong>blocks up to 80% of external noise pollution</strong> - particularly beneficial 
                        in busy conservation areas.
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-6">
                      <CheckCircle className="h-8 w-8 text-primary mb-4" />
                      <h3 className="font-semibold text-foreground mb-2">Reversible Solution</h3>
                      <p className="text-sm text-muted-foreground">
                        If circumstances change, secondary glazing can be <strong>completely removed</strong> without any lasting 
                        impact on your original windows.
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-6">
                      <Home className="h-8 w-8 text-primary mb-4" />
                      <h3 className="font-semibold text-foreground mb-2">Cost-Effective</h3>
                      <p className="text-sm text-muted-foreground">
                        Secondary glazing is typically <strong>more affordable</strong> than attempting to replace windows in a 
                        conservation area.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Window Types */}
                <section className="mb-12 not-prose">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Window Types We Work With
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our specialist team has experience installing secondary glazing on all period window types commonly found in conservation areas:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <Link to="/sash-window-secondary-glazing" className="text-primary hover:underline font-semibold">Sash windows</Link> - 
                        Vertical sliding windows typical in Victorian and Georgian properties
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <Link to="/residential/casement-windows" className="text-primary hover:underline font-semibold">Casement windows</Link> - 
                        Side-hinged windows common in Edwardian and Arts & Crafts properties
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <Link to="/residential/bay-windows" className="text-primary hover:underline font-semibold">Bay windows</Link> - 
                        Multi-angled windows requiring specialist measurement and installation
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong>Arched windows</strong> - Gothic and Victorian arched features requiring bespoke solutions
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong>Leaded light windows</strong> - Decorative glazing patterns preserved behind secondary glazing
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong>Stained glass windows</strong> - Protecting valuable stained glass while improving insulation
                      </span>
                    </li>
                  </ul>
                </section>

                {/* Conservation Areas We Serve */}
                <section className="mb-12 not-prose">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Conservation Areas We Serve
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We provide specialist <strong>conservation area secondary glazing services</strong> across London's most prestigious conservation areas:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {serviceAreas.map((area, index) => (
                      <Link
                        key={index}
                        to={area.href}
                        className="flex flex-col p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span className="font-medium">{area.title}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{area.description}</span>
                      </Link>
                    ))}
                  </div>
                  <p className="text-muted-foreground mt-4">
                    <Link to="/locations" className="text-primary hover:underline">View all 38 service areas across London</Link>
                  </p>
                </section>

                {/* Our Process */}
                <section className="mb-12 not-prose">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Our Process for Conservation Area Properties
                  </h2>
                  <ol className="space-y-4">
                    <li className="flex items-start gap-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0">1</span>
                      <div>
                        <h3 className="font-semibold text-foreground">Free Conservation Area Property Survey</h3>
                        <p className="text-sm text-muted-foreground">We visit your home to assess your windows and discuss your requirements</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0">2</span>
                      <div>
                        <h3 className="font-semibold text-foreground">Planning Guidance</h3>
                        <p className="text-sm text-muted-foreground">We advise whether planning permission is required and provide support if needed</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0">3</span>
                      <div>
                        <h3 className="font-semibold text-foreground">Bespoke Design</h3>
                        <p className="text-sm text-muted-foreground">Each installation is custom-designed to complement your period property</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0">4</span>
                      <div>
                        <h3 className="font-semibold text-foreground">Conservation Officer Liaison</h3>
                        <p className="text-sm text-muted-foreground">If required, we liaise with your local conservation officer</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0">5</span>
                      <div>
                        <h3 className="font-semibold text-foreground">Expert Installation</h3>
                        <p className="text-sm text-muted-foreground">Our trained specialists install secondary glazing with care and precision</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0">6</span>
                      <div>
                        <h3 className="font-semibold text-foreground">Comprehensive Warranty</h3>
                        <p className="text-sm text-muted-foreground">All installations covered by our warranty and aftercare service</p>
                      </div>
                    </li>
                  </ol>
                </section>

                {/* Case Study */}
                <section className="mb-12 not-prose">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Case Study: Victorian Terrace in Camden Conservation Area
                  </h2>
                  <div className="bg-muted/30 rounded-lg p-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      A Victorian terrace in the <strong>Camden conservation area</strong> was suffering from high energy bills and 
                      significant street noise. The owners wanted to improve comfort without replacing their original{" "}
                      <Link to="/sash-window-secondary-glazing" className="text-primary hover:underline">sash windows</Link>.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We installed bespoke <strong>secondary glazing</strong> throughout the property, achieving:
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <strong>68% reduction</strong> in heat loss
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <strong>£450 annual saving</strong> on heating bills
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <strong>75% reduction</strong> in street noise
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <strong>No planning permission required</strong> (internal installation)
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <strong>Original windows preserved</strong> and protected
                      </li>
                    </ul>
                    <p className="text-sm text-muted-foreground italic">
                      The conservation officer praised the solution as "exemplary heritage conservation combined with modern efficiency."
                    </p>
                  </div>
                  <p className="text-muted-foreground mt-4">
                    <Link to="/case-studies" className="text-primary hover:underline">View more case studies</Link>
                  </p>
                </section>

                {/* Why Choose Us */}
                <section className="mb-12 not-prose">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Why Choose Secondary Glazing Specialist?
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>15+ years</strong> working in London conservation areas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Expert knowledge</strong> of conservation area regulations and requirements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>High success rate</strong> with planning applications (when required)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Bespoke solutions</strong> tailored to period properties</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>No external alterations</strong> - maintain your property's character</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Free surveys and quotes</strong> for conservation area properties</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Comprehensive warranty</strong> and aftercare support</span>
                    </li>
                  </ul>
                </section>

                {/* Related Services */}
                <section className="mb-12 not-prose">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Related Services
                  </h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">Listed Buildings Secondary Glazing</Link>
                    <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian Windows Secondary Glazing</Link>
                    <Link to="/sash-window-secondary-glazing" className="text-primary hover:underline">Sash Window Secondary Glazing</Link>
                    <Link to="/georgian-windows-secondary-glazing" className="text-primary hover:underline">Georgian Windows Secondary Glazing</Link>
                    <Link to="/edwardian-property-secondary-glazing" className="text-primary hover:underline">Edwardian Property Secondary Glazing</Link>
                    <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline">Thermal Insulation Solutions</Link>
                    <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">Noise Reduction Glazing</Link>
                    <Link to="/benefits" className="text-primary hover:underline">Benefits of Secondary Glazing</Link>
                    <Link to="/secondary-glazing-repairs" className="text-primary hover:underline">Repairs & Maintenance</Link>
                    <Link to="/gallery" className="text-primary hover:underline">View Gallery</Link>
                  </div>
                </section>

              </article>

              {/* Hero CTA */}
              <div className="mt-12">
                <CTASection 
                  variant="hero"
                  title="Get Your Free Conservation Area Property Survey"
                  description="Contact us today for a free, no-obligation survey of your conservation area property. Our specialist team will assess your windows, advise on planning requirements, and provide expert guidance on secondary glazing solutions."
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <RelatedContentSidebar 
                  title="Related Services" 
                  links={relatedLinks} 
                />
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                      <li><Link to="/quote-request" className="text-primary hover:underline">Request a Quote</Link></li>
                      <li><Link to="/gallery" className="text-primary hover:underline">View Gallery</Link></li>
                      <li><Link to="/case-studies" className="text-primary hover:underline">Case Studies</Link></li>
                      <li><Link to="/faqs" className="text-primary hover:underline">FAQs</Link></li>
                      <li><Link to="/contact" className="text-primary hover:underline">Contact Us</Link></li>
                    </ul>
                  </CardContent>
                </Card>
                <CTASection variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default ConservationAreasSecondaryGlazing;
