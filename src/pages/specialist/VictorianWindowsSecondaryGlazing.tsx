import React from "react";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { SpecialistPageSchema } from "@/components/seo/SpecialistPageSchema";
import { Link } from "react-router-dom";
import { Home, Thermometer, Volume2, Shield, Phone, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/MainNav";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import RelatedContentSidebar from "@/components/seo/RelatedContentSidebar";
import CTASection from "@/components/seo/CTASection";
import { InlineLink, QuickLinksGrid, residentialGlazingLinks, serviceAreaLinks } from "@/components/seo/InternalLinks";

const breadcrumbItems = [
  { label: "Services", href: "/residential" },
  { label: "Period Properties" },
  { label: "Victorian Windows Secondary Glazing" },
];

const relatedLinks = [
  { title: "Sash Window Glazing", href: "/sash-window-secondary-glazing", description: "Vertical sliding solutions" },
  { title: "Georgian Windows", href: "/georgian-windows-secondary-glazing", description: "Georgian property glazing" },
  { title: "Edwardian Properties", href: "/edwardian-property-secondary-glazing", description: "Edwardian home solutions" },
  { title: "Listed Buildings", href: "/listed-buildings-secondary-glazing", description: "Grade I, II*, II solutions" },
  { title: "Conservation Areas", href: "/conservation-areas-secondary-glazing", description: "Heritage area solutions" },
  { title: "Noise Reduction", href: "/noise-reduction-secondary-glazing", description: "Block external noise" },
  { title: "Office Buildings", href: "/commercial/office-buildings", description: "Victorian office conversions" },
  { title: "Educational Sector", href: "/commercial/educational-sector", description: "Victorian schools" },
  { title: "Hospitality Sector", href: "/commercial/hospitality-sector", description: "Period hotels & restaurants" },
];

const VictorianWindowsSecondaryGlazing = () => {
  return (
    <div className="min-h-screen">
      <SpecialistPageSchema
        serviceName="Victorian Windows Secondary Glazing"
        serviceDescription="Expert secondary glazing for Victorian properties across London. Preserve original sash windows, decorative glazing bars, and period character while improving thermal efficiency by 60% and reducing noise by 80%."
        pageName="Victorian Windows Secondary Glazing London"
        pageDescription="Specialist secondary glazing for Victorian sash windows and period properties"
        priceRange={{ low: 400, high: 1000 }}
        faqs={[
          { question: "Can secondary glazing match Victorian window styles?", answer: "Yes, our bespoke secondary glazing is designed to complement Victorian window features including box sash mechanisms, decorative glazing bars, and period proportions while remaining virtually invisible from inside." },
          { question: "Will secondary glazing affect my Victorian sash windows?", answer: "No, secondary glazing is fitted internally behind your existing windows without any modification to the original sashes. The installation is fully reversible and preserves all period features." }
        ]}
      />
      {/* SEO CONTENT - Hidden from users, visible to crawlers */}
      <div style={{ display: 'none' }} className="seo-content">
        {/* SEO Content Block for Victorian Windows Secondary Glazing */}

        <h1>Victorian Windows Secondary Glazing | Expert Period Property Solutions</h1>

        <h2>Specialist Secondary Glazing for Victorian Windows Across London</h2>

        <p><strong>Victorian properties</strong> represent some of London's most characterful architecture, with elegant terraces, substantial villas, and grand mansion blocks built between 1837 and 1901. <a href="/"><strong>Secondary Glazing Specialist</strong></a> provides expert <strong>secondary glazing for Victorian windows</strong>, preserving the distinctive features of Victorian architecture while delivering exceptional thermal performance, noise reduction, and enhanced comfort.</p>

        <p>Victorian windows are often beautifully crafted with <a href="/sash-window-secondary-glazing"><strong>box sash mechanisms</strong></a>, decorative glazing bars, colored glass, and intricate joinery. Our bespoke secondary glazing solutions protect these irreplaceable features while improving energy efficiency by up to 60% and reducing external noise by up to 80%.</p>

        <h2>Understanding Victorian Windows</h2>

        <p>Victorian windows evolved significantly during Queen Victoria's 64-year reign (1837-1901), reflecting technological advances and changing architectural fashions:</p>

        <h3>Early Victorian Windows (1837-1860)</h3>

        <p><strong>Early Victorian windows</strong> followed Georgian traditions with:</p>
        <ul>
          <li><strong>Multi-pane sash windows</strong> - Six-over-six or eight-over-eight configurations</li>
          <li><strong>Slim glazing bars</strong> - Made possible by improved glass manufacturing</li>
          <li><strong>Vertical sliding sashes</strong> - Box sash mechanisms with concealed weights</li>
          <li><strong>Painted timber frames</strong> - Usually white or off-white externally</li>
        </ul>

        <h3>Mid Victorian Windows (1860-1880)</h3>

        <p><strong>Mid Victorian windows</strong> introduced new features including:</p>
        <ul>
          <li><strong>Larger panes</strong> - Two-over-two sashes became common as glass technology improved</li>
          <li><strong>Decorative elements</strong> - Colored glass, etched designs, and marginal lights</li>
          <li><strong>Bay windows</strong> - Square, canted, and curved bay configurations</li>
          <li><strong>Ornate surrounds</strong> - Elaborate architraves and decorative mouldings</li>
        </ul>

        <h3>Late Victorian Windows (1880-1901)</h3>

        <p><strong>Late Victorian windows</strong> featured:</p>
        <ul>
          <li><strong>One-over-one sashes</strong> - Single large panes in each sash as plate glass became affordable</li>
          <li><strong>Decorative top lights</strong> - Colored or patterned glass in upper sashes</li>
          <li><strong>Elaborate stained glass</strong> - Popular in entrances and stairwells</li>
          <li><strong>Queen Anne Revival details</strong> - Multi-pane upper sashes over single-pane lower sashes</li>
        </ul>

        <h2>Why Victorian Windows Need Secondary Glazing</h2>

        <h3>Thermal Performance</h3>

        <p>Victorian single-glazed windows have poor thermal performance with <strong>U-values around 5.0 W/m²K</strong>, resulting in significant heat loss, cold spots near windows, and high heating bills. Secondary glazing can improve U-values to <strong>1.8-2.8 W/m²K</strong>, reducing heat loss by up to 60% while preserving your original Victorian windows completely intact.</p>

        <h3>Preservation of Irreplaceable Features</h3>

        <p>Victorian windows often feature:</p>
        <ul>
          <li><strong>Original crown glass</strong> - Handmade glass with characteristic ripples and imperfections</li>
          <li><strong>Decorative glazing</strong> - Etched, engraved, or colored glass panels</li>
          <li><strong>Fine glazing bars</strong> - Delicate timber astragals with period profiles</li>
          <li><strong>Original hardware</strong> - Period sash lifts, fasteners, and fittings</li>
          <li><strong>Historic paint layers</strong> - Archaeological evidence of original color schemes</li>
        </ul>

        <p>These features are irreplaceable and contribute significantly to property value and character. Secondary glazing protects them while avoiding the destruction caused by window replacement.</p>

        <h3>Noise Reduction</h3>

        <p>Many Victorian properties are located on busy roads or in urban areas with high traffic noise. Secondary glazing can reduce external noise by <strong>up to 80% (45dB reduction)</strong>, transforming the internal environment of Victorian properties in busy locations.</p>

        <h3>Condensation Control</h3>

        <p>Victorian windows often suffer from severe condensation due to single glazing and poor ventilation. This leads to:</p>
        <ul>
          <li>Timber decay in sashes and frames</li>
          <li>Paint deterioration</li>
          <li>Mold growth on window reveals</li>
          <li>Damage to internal joinery and plasterwork</li>
        </ul>

        <p>Secondary glazing dramatically reduces condensation, protecting your Victorian property's original fabric.</p>

        <h2>Secondary Glazing Options for Victorian Windows</h2>

        <h3>Vertical Sliding Secondary Glazing</h3>

        <p>For <strong>Victorian box sash windows</strong>, our vertical sliding secondary glazing mirrors the operation of your original windows. The secondary unit slides vertically, matching the traditional sash window aesthetic and operation. This is particularly appropriate for:</p>
        <ul>
          <li>Front elevations where visual consistency is important</li>
          <li>Properties in Conservation Areas</li>
          <li>Listed buildings where sympathetic design is essential</li>
        </ul>

        <h3>Horizontal Sliding Secondary Glazing</h3>

        <p><strong>Horizontal sliding systems</strong> provide easy access while maintaining slim sightlines. Ideal for Victorian windows that require frequent opening for ventilation. The slim 15-20mm frames don't detract from the elegant proportions of Victorian sashes.</p>

        <h3>Hinged Secondary Glazing</h3>

        <p>For <strong>Victorian casement windows</strong> (common in Arts &amp; Crafts and Queen Anne Revival properties), hinged secondary glazing can be designed to open inward, providing full access to the original window for cleaning and maintenance.</p>

        <h3>Lift-Out Secondary Glazing</h3>

        <p><strong>Lift-out panels</strong> are ideal for Victorian windows that don't require frequent opening, such as upper floor windows or windows facing quiet gardens. These panels provide excellent performance with minimal visual impact and can be easily removed for seasonal use.</p>

        <h3>Bay Window Secondary Glazing</h3>

        <p>Victorian properties frequently feature <strong>bay windows</strong>—square bays, canted bays, and curved bows. We manufacture bespoke secondary glazing to precisely fit bay configurations, maintaining the elegant lines while providing comprehensive thermal and acoustic improvements.</p>

        <h2>Victorian Property Types</h2>

        <h3>Victorian Terraced Houses</h3>

        <p><strong>Victorian terraces</strong> are found throughout London, typically featuring:</p>
        <ul>
          <li>Two-over-two or one-over-one sash windows</li>
          <li>Bay windows to ground and first floors</li>
          <li>Decorative brickwork and stucco details</li>
          <li>Substantial proportions with high ceilings</li>
        </ul>

        <p>Secondary glazing for Victorian terraces preserves street scene uniformity while dramatically improving internal comfort and reducing heating costs.</p>

        <h3>Victorian Villas</h3>

        <p><strong>Victorian villas</strong> represent the height of Victorian domestic architecture, featuring:</p>
        <ul>
          <li>Large bay windows with multiple sashes</li>
          <li>Decorative colored glass in entrance halls and stairs</li>
          <li>Varied window sizes and configurations</li>
          <li>High-quality original joinery</li>
        </ul>

        <p>Our bespoke secondary glazing for Victorian villas is tailored to each window opening, respecting the property's architectural quality while providing superior performance.</p>

        <h3>Victorian Mansion Blocks</h3>

        <p><strong>Victorian mansion flats</strong> (particularly late Victorian) feature:</p>
        <ul>
          <li>Large sash windows, often floor-to-ceiling</li>
          <li>Exposure to significant traffic noise</li>
          <li>Communal ownership requiring reversible solutions</li>
        </ul>

        <p>Secondary glazing is ideal for mansion flats as it can be installed without external alterations, doesn't require building-wide consent, and is fully reversible if required.</p>

        <h3>Victorian Commercial Conversions</h3>

        <p><strong>Converted Victorian warehouses, schools, and commercial buildings</strong> often feature:</p>
        <ul>
          <li>Very large windows with industrial proportions</li>
          <li>Steel-framed windows (late Victorian)</li>
          <li>Significant thermal and acoustic challenges</li>
        </ul>

        <p>Secondary glazing for Victorian conversions can be custom-designed to fit unusual openings and provide the thermal and acoustic performance essential for comfortable modern living.</p>

        <h2>Conservation Areas and Victorian Properties</h2>

        <p>Many Victorian properties are located within <a href="/conservation-areas-secondary-glazing"><strong>Conservation Areas</strong></a> where external alterations are restricted. Victorian suburbs across London—including areas like:</p>

        <ul>
          <li><a href="/service-areas/kensington-chelsea"><strong>Kensington &amp; Chelsea</strong></a> - Ladbroke Estate, Boltons, Chelsea Park</li>
          <li><a href="/service-areas/islington"><strong>Islington</strong></a> - Barnsbury, Canonbury, Highbury</li>
          <li><a href="/service-areas/camden"><strong>Camden</strong></a> - Gospel Oak, Kentish Town, Belsize Park</li>
          <li><a href="/service-areas/wandsworth"><strong>Wandsworth</strong></a> - Wandsworth Common, Northcote Road</li>
          <li><a href="/service-areas/richmond-upon-thames"><strong>Richmond</strong></a> - Richmond Hill, Kew, Twickenham</li>
        </ul>

        <p>Secondary glazing is the <strong>ideal solution for Victorian properties in Conservation Areas</strong> because:</p>
        <ul>
          <li>It's installed internally, preserving external appearance</li>
          <li>Typically doesn't require Conservation Area Consent</li>
          <li>Preserves street scene uniformity</li>
          <li>Protects original windows that contribute to area character</li>
        </ul>

        <h2>Listed Victorian Buildings</h2>

        <p>Many exceptional Victorian buildings are <a href="/listed-buildings-secondary-glazing"><strong>listed</strong></a> (Grade I, Grade II*, or Grade II), requiring Listed Building Consent for alterations. Secondary glazing is widely approved for listed Victorian properties because:</p>

        <ul>
          <li><strong>Fully reversible</strong> - Can be removed without damage to original fabric</li>
          <li><strong>Preserves original windows</strong> - Historic glazing, joinery, and hardware remain intact</li>
          <li><strong>Protective</strong> - Reduces condensation and protects original windows from damage</li>
          <li><strong>Endorsed by Historic England</strong> - Recognized as best practice for improving thermal performance in historic buildings</li>
        </ul>

        <p>We have extensive experience preparing applications for Listed Building Consent for Victorian properties and can provide supporting documentation, drawings, and specifications.</p>

        <h2>Benefits of Secondary Glazing for Victorian Windows</h2>

        <h3>Energy Efficiency</h3>

        <p>Typical benefits include:</p>
        <ul>
          <li><strong>60% reduction in heat loss</strong> through windows</li>
          <li><strong>15-25% reduction in overall heating costs</strong></li>
          <li><strong>Improved EPC ratings</strong> - Often moving properties from F/G to D/E ratings</li>
          <li><strong>Warmer rooms</strong> - Elimination of cold spots near windows</li>
          <li><strong>Reduced carbon footprint</strong> - Lower energy consumption year-round</li>
        </ul>

        <h3>Acoustic Performance</h3>

        <p>Victorian properties on busy roads benefit from:</p>
        <ul>
          <li><strong>Up to 80% noise reduction</strong> (45dB reduction with acoustic glass)</li>
          <li><strong>Quieter bedrooms</strong> - Essential for front bedrooms facing traffic</li>
          <li><strong>Peaceful living spaces</strong> - Transformed internal environment</li>
          <li><strong>Better sleep quality</strong> - Particularly important for shift workers or sensitive sleepers</li>
        </ul>

        <h3>Comfort Improvements</h3>

        <ul>
          <li><strong>Elimination of drafts</strong> - Even well-maintained Victorian sashes allow air infiltration</li>
          <li><strong>Reduced cold radiation</strong> - Warmer glass surface reduces discomfort near windows</li>
          <li><strong>Better temperature control</strong> - More stable internal temperatures</li>
          <li><strong>Reduced condensation</strong> - Protecting internal decoration and joinery</li>
        </ul>

        <h3>Property Value Protection</h3>

        <p>Original Victorian windows are a <strong>significant value contributor</strong>. Replacement windows can:</p>
        <ul>
          <li>Reduce property value by £10,000-£50,000+ (depending on property value)</li>
          <li>Harm street scene uniformity in terraces</li>
          <li>Destroy irreplaceable architectural features</li>
          <li>Make properties less attractive to discerning buyers</li>
        </ul>

        <p>Secondary glazing preserves value by maintaining original features while providing modern performance.</p>

        <h2>Victorian Windows in Different London Boroughs</h2>

        <p>We provide specialist secondary glazing for Victorian properties across London:</p>

        <ul>
          <li><a href="/service-areas/kensington-chelsea"><strong>Kensington &amp; Chelsea</strong></a> - Grand Victorian terraces and villas in Notting Hill, Brompton, Chelsea</li>
          <li><a href="/service-areas/westminster"><strong>Westminster</strong></a> - Victorian mansion blocks and terraces in Pimlico, Marylebone, Paddington</li>
          <li><a href="/service-areas/camden"><strong>Camden</strong></a> - Victorian suburbs including Kentish Town, Gospel Oak, West Hampstead</li>
          <li><a href="/service-areas/islington"><strong>Islington</strong></a> - Extensive Victorian terraces in Highbury, Canonbury, Barnsbury</li>
          <li><a href="/service-areas/hackney"><strong>Hackney</strong></a> - Victorian terraces in Stoke Newington, Clapton, Dalston</li>
          <li><a href="/service-areas/wandsworth"><strong>Wandsworth</strong></a> - Victorian development around Wandsworth Common, Clapham, Battersea</li>
          <li><a href="/service-areas/lambeth"><strong>Lambeth</strong></a> - Victorian terraces in Brixton, Stockwell, Clapham</li>
          <li><a href="/service-areas/richmond-upon-thames"><strong>Richmond upon Thames</strong></a> - Victorian suburbs in Richmond, Twickenham, Barnes</li>
        </ul>

        <h2>Technical Specifications for Victorian Window Secondary Glazing</h2>

        <h3>Frame Profiles</h3>

        <p>We offer various frame profiles suitable for Victorian windows:</p>
        <ul>
          <li><strong>Slim 15mm frames</strong> - Minimal visual impact for elegant Victorian proportions</li>
          <li><strong>Standard 25mm frames</strong> - Balance of strength and sightlines</li>
          <li><strong>Heritage profiles</strong> - Traditional profiles that complement Victorian joinery</li>
        </ul>

        <h3>Glass Options</h3>

        <ul>
          <li><strong>4mm float glass</strong> - Standard thermal performance</li>
          <li><strong>6.4mm laminated acoustic glass</strong> - Enhanced noise reduction (up to 40dB)</li>
          <li><strong>6.8mm laminated acoustic glass</strong> - Maximum noise reduction (up to 45dB)</li>
          <li><strong>Low-E glass</strong> - Enhanced thermal performance (U-values to 1.8 W/m²K)</li>
        </ul>

        <h3>Finish Options</h3>

        <ul>
          <li><strong>White</strong> - Traditional internal window finish</li>
          <li><strong>Brown</strong> - Suitable for stained timber reveals</li>
          <li><strong>Custom RAL colors</strong> - Match existing internal joinery</li>
          <li><strong>Woodgrain effects</strong> - Complement timber sash boxes and architraves</li>
        </ul>

        <h3>Hardware</h3>

        <ul>
          <li><strong>Discrete handles</strong> - Low-profile designs that don't dominate</li>
          <li><strong>Period-style furniture</strong> - Traditional designs for visible installations</li>
          <li><strong>Locking mechanisms</strong> - Security and draft-sealing</li>
          <li><strong>Brush seals</strong> - High-quality sealing for optimal performance</li>
        </ul>

        <h2>Installation Process for Victorian Windows</h2>

        <h3>Survey &amp; Assessment</h3>

        <p>Our specialists visit your Victorian property to:</p>
        <ul>
          <li>Assess existing window condition and configuration</li>
          <li>Take precise measurements of each opening</li>
          <li>Discuss your requirements for thermal performance, noise reduction, and aesthetics</li>
          <li>Advise on planning requirements if applicable</li>
          <li>Recommend the most appropriate secondary glazing solution</li>
        </ul>

        <h3>Custom Manufacturing</h3>

        <p>All secondary glazing is <strong>bespoke-manufactured</strong> to fit your Victorian window openings precisely. This includes accommodation for:</p>
        <ul>
          <li>Out-of-square openings (common in Victorian properties)</li>
          <li>Period architraves and decorative mouldings</li>
          <li>Window shutters (where present)</li>
          <li>Internal window sills and reveals</li>
        </ul>

        <h3>Professional Installation</h3>

        <p>Our experienced installers:</p>
        <ul>
          <li>Protect your Victorian property's floors, walls, and furnishings</li>
          <li>Use appropriate fixings that respect original fabric</li>
          <li>Work carefully around period features and decoration</li>
          <li>Complete installation typically within 1-2 days</li>
          <li>Leave your property clean and tidy</li>
        </ul>

        <h3>Aftercare</h3>

        <p>We provide comprehensive guarantees and aftercare support, ensuring your secondary glazing continues to perform optimally for many years.</p>

        <h2>Related Victorian Property Services</h2>

        <p>In addition to Victorian window secondary glazing, we offer:</p>

        <ul>
          <li><a href="/sash-window-secondary-glazing"><strong>Sash Window Secondary Glazing</strong></a> - Specialist solutions for box sash windows</li>
          <li><a href="/georgian-windows-secondary-glazing"><strong>Georgian Windows Secondary Glazing</strong></a> - For early Victorian properties with Georgian characteristics</li>
          <li><a href="/edwardian-property-secondary-glazing"><strong>Edwardian Property Secondary Glazing</strong></a> - For late Victorian / early Edwardian properties</li>
          <li><a href="/listed-buildings-secondary-glazing"><strong>Listed Buildings Secondary Glazing</strong></a> - For listed Victorian properties</li>
          <li><a href="/conservation-areas-secondary-glazing"><strong>Conservation Areas Secondary Glazing</strong></a> - For Victorian properties in protected areas</li>
        </ul>

        <h2>Get Your Free Victorian Property Survey</h2>

        <p>If you own a <strong>Victorian property in London</strong> and want to improve thermal efficiency, reduce noise, or enhance comfort while preserving your beautiful Victorian windows, contact <a href="/"><strong>Secondary Glazing Specialist</strong></a> today.</p>

        <p>We offer <strong>free, no-obligation surveys and quotations</strong> for Victorian properties across London. Our Victorian property specialists will assess your windows, discuss your requirements, and recommend the most appropriate secondary glazing solution that respects your property's architectural heritage.</p>

        <p><strong>Call us today</strong> or <strong>request a free survey online</strong> to discover how secondary glazing can transform your Victorian home.</p>

        <p><strong>Expert secondary glazing for Victorian windows - preserving architectural heritage, enhancing modern comfort.</strong></p>

        {/* End SEO Content Block */}
      </div>
      <EnhancedSEO
        title="Victorian Windows Secondary Glazing | Protect Original Sash Windows"
        description="Specialist secondary glazing for Victorian sash windows in London. Preserve original timber frames while improving insulation by 65%. Expert installation for period properties."
        canonicalPath="/victorian-windows-secondary-glazing"
        keywords={[
          "Victorian windows secondary glazing",
          "Victorian sash window insulation",
          "period window glazing",
          "Victorian terrace windows",
          "original sash window protection",
          "Victorian house glazing London"
        ]}
      />
      
      <MainNav />
      
      <div className="container mx-auto px-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-rose-50 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 px-4 py-2 rounded-full mb-6">
              <Home className="h-5 w-5" />
              <span className="font-medium">Victorian Specialists</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Victorian Windows Secondary Glazing
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Protect and preserve your original Victorian <InlineLink href="/sash-window-secondary-glazing">sash windows</InlineLink> while dramatically 
              improving <InlineLink href="/thermal-insulation-secondary-glazing">thermal performance</InlineLink> and reducing <InlineLink href="/noise-reduction-secondary-glazing">noise</InlineLink>. Our bespoke secondary glazing 
              complements period features, not conceals them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/quote-request">Get Free Victorian Survey</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:02070601572">
                  <Phone className="mr-2 h-4 w-4" />
                  Speak to an Expert
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
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Why Victorian Windows Need Special Care
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Victorian properties, built between 1837 and 1901, feature some of the most 
                  beautiful windows ever designed. The tall, elegant <InlineLink href="/sash-window-secondary-glazing">sash windows</InlineLink> with their 
                  slender glazing bars and handmade glass are architectural treasures that 
                  define the character of London's residential streets. Many are protected under 
                  <InlineLink href="/listed-buildings-secondary-glazing">listed building</InlineLink> or <InlineLink href="/conservation-areas-secondary-glazing">conservation area</InlineLink> regulations.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  However, these single-glazed windows were designed in an era before central 
                  heating, when coal fires provided warmth. Today, they can account for up to 
                  40% of a home's heat loss, leading to high energy bills and uncomfortable 
                  living spaces. Secondary glazing provides the solution without sacrificing 
                  the beauty of original windows.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Common Victorian Window Styles We Work With
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-12 not-prose">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">Two-Over-Two Sash</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        The classic mid-Victorian design with two panes in each sash, typically 
                        found in terraced houses from the 1860s-1880s.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <Link to="/residential/sash-windows" className="hover:text-primary">Vertical sliding secondary units</Link>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Matched sightlines available
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">Six-Over-Six Sash</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Earlier Victorian style retaining <InlineLink href="/georgian-windows-secondary-glazing">Georgian</InlineLink> influence, common in 
                        1840s-1860s properties.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Slim frame profiles
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Multiple glazing bar options
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">Bay Windows</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        The iconic Victorian bay, from simple canted designs to elaborate 
                        curved bays in grander properties.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Angled sections expertly fitted
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Curved glass available
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">Arched Windows</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Decorative arched heads and fanlights common in hallways and 
                        above entrance doors.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <Link to="/residential/fixed-secondary-glazing" className="hover:text-primary">Bespoke curved frames</Link>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Heritage-sensitive design
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Benefits for Victorian Properties
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-12 not-prose">
                  <div className="text-center p-6 bg-muted/30 rounded-lg">
                    <Thermometer className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">
                      <Link to="/thermal-insulation-secondary-glazing" className="hover:text-primary">65% Less Heat Loss</Link>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      The air gap between windows creates effective thermal insulation, 
                      dramatically reducing heating costs.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-muted/30 rounded-lg">
                    <Volume2 className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">
                      <Link to="/noise-reduction-secondary-glazing" className="hover:text-primary">80% Noise Reduction</Link>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Acoustic glass options are ideal for Victorian terraces on busy 
                      London roads.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-muted/30 rounded-lg">
                    <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Enhanced Security</h3>
                    <p className="text-sm text-muted-foreground">
                      Add a second barrier with laminated glass for improved protection 
                      against intruders.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Preserving Original Features
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We understand that Victorian windows are often the most valuable original 
                  feature of a period home. Our secondary glazing is designed to be as 
                  unobtrusive as possible, with slim aluminium frames that can be powder-coated 
                  to match your existing woodwork or painted white for a classic look.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  For properties with particularly fine original glazing, including crown glass 
                  or restoration glass, secondary glazing protects these irreplaceable windows 
                  from damage while eliminating draughts and condensation.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  The installation is fully reversible, meaning your original windows can be 
                  accessed for maintenance, cleaning, or future restoration work without any 
                  permanent alterations - essential for <InlineLink href="/listed-buildings-secondary-glazing">listed buildings</InlineLink>.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Victorian Areas We Cover
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  London has more Victorian housing than any other city in the world, and we 
                  have worked on properties across the capital. From the grand villas of 
                  <InlineLink href="/areas/north-london">Hampstead</InlineLink> to the classic terraces of Islington, Hackney, and 
                  <InlineLink href="/areas/south-london">Clapham</InlineLink>, our team has extensive experience with every type of Victorian window.
                </p>

                <QuickLinksGrid 
                  title="Explore Our Glazing Types" 
                  links={residentialGlazingLinks} 
                  columns={3}
                />

                <QuickLinksGrid 
                  title="Areas We Cover" 
                  links={serviceAreaLinks} 
                  columns={4}
                />
              </div>

              {/* Hero CTA */}
              <div className="mt-12">
                <CTASection 
                  variant="hero"
                  title="Get Your Free Victorian Property Survey"
                  description="Our specialists will assess your Victorian windows and recommend the best secondary glazing solution."
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

export default VictorianWindowsSecondaryGlazing;
