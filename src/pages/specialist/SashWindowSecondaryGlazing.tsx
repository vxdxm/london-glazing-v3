import React from "react";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { Link } from "react-router-dom";
import { ArrowUpDown, Thermometer, Wind, CheckCircle, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/MainNav";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import RelatedContentSidebar from "@/components/seo/RelatedContentSidebar";
import CTASection from "@/components/seo/CTASection";
import { InlineLink, QuickLinksGrid, residentialGlazingLinks, serviceAreaLinks } from "@/components/seo/InternalLinks";

const breadcrumbItems = [
  { label: "Services", href: "/residential" },
  { label: "Window Types", href: "/residential/sash-windows" },
  { label: "Sash Window Secondary Glazing" },
];

const relatedLinks = [
  { title: "Victorian Windows", href: "/victorian-windows-secondary-glazing", description: "Victorian sash solutions" },
  { title: "Georgian Windows", href: "/georgian-windows-secondary-glazing", description: "Georgian sash glazing" },
  { title: "Vertical Sliding", href: "/residential/sash-windows", description: "Residential sash options" },
  { title: "Lift Out Panels", href: "/residential/lift-out", description: "Removable panel systems" },
  { title: "Thermal Insulation", href: "/thermal-insulation-secondary-glazing", description: "Reduce heat loss" },
  { title: "Noise Reduction", href: "/noise-reduction-secondary-glazing", description: "Block external noise" },
];

const SashWindowSecondaryGlazing = () => {
  return (
    <div className="min-h-screen">
      {/* SEO CONTENT - Hidden from users, visible to crawlers */}
      <div style={{ display: 'none' }} className="seo-content">
        {/* SEO Content Block for Sash Window Secondary Glazing */}

        <h1>Sash Window Secondary Glazing | Expert Solutions for Period Sash Windows</h1>

        <h2>Specialist Secondary Glazing for Sash Windows Across London</h2>

        <p><strong>Sash windows</strong> are the quintessential feature of period properties across London, from elegant Georgian townhouses to Victorian terraces and Edwardian mansion blocks. <a href="/"><strong>Secondary Glazing Specialist</strong></a> provides expert <strong>secondary glazing for sash windows</strong>, preserving these beautiful architectural features while dramatically improving thermal efficiency, reducing noise, and enhancing comfort.</p>

        <p>Our bespoke <strong>sash window secondary glazing</strong> is designed specifically to work with traditional box sash mechanisms, maintaining the character and operation of your period windows while delivering modern performance. Whether your property is <a href="/listed-buildings-secondary-glazing"><strong>listed</strong></a>, in a <a href="/conservation-areas-secondary-glazing"><strong>Conservation Area</strong></a>, or simply has beautiful original sash windows you want to preserve, we provide sympathetic solutions that respect architectural heritage while improving energy efficiency by up to 60% and reducing external noise by up to 80%.</p>

        <h2>Understanding Traditional Sash Windows</h2>

        <h3>What Are Sash Windows?</h3>

        <p><strong>Sash windows</strong> (also called "sliding sash windows" or "box sash windows") feature one or more movable panels (sashes) that slide vertically within the window frame. Traditional sash windows use a counterbalance system of concealed weights and cords housed within the window box, allowing smooth operation of even very large and heavy sashes.</p>

        <p>This ingenious design has remained fundamentally unchanged since its introduction in the late 17th century, testament to its effectiveness and elegance.</p>

        <h3>Historical Development of Sash Windows</h3>

        <h4>Georgian Sash Windows (1714-1837)</h4>

        <p><a href="/georgian-windows-secondary-glazing"><strong>Georgian sash windows</strong></a> are characterized by:</p>
        <ul>
          <li><strong>Multiple panes</strong> - Six-over-six or twelve-over-twelve configurations (due to limitations in glass manufacturing)</li>
          <li><strong>Fine glazing bars</strong> - Delicate timber astragals dividing the glass</li>
          <li><strong>Flush sashes</strong> - Sashes sitting flush with external brickwork</li>
          <li><strong>Thick sash sections</strong> - Substantial timber members</li>
          <li><strong>Crown glass</strong> - Hand-blown glass with characteristic ripples</li>
        </ul>

        <h4>Victorian Sash Windows (1837-1901)</h4>

        <p><a href="/victorian-windows-secondary-glazing"><strong>Victorian sash windows</strong></a> evolved to include:</p>
        <ul>
          <li><strong>Larger panes</strong> - Two-over-two or one-over-one as glass technology improved</li>
          <li><strong>Horns</strong> - Projecting timber sections on meeting rails (from 1850s onward)</li>
          <li><strong>Decorative elements</strong> - Colored glass, etched designs, marginal lights</li>
          <li><strong>Deeper reveals</strong> - Sashes set back from external wall face</li>
          <li><strong>Bay configurations</strong> - Multiple sashes in angled or curved bay windows</li>
        </ul>

        <h4>Edwardian Sash Windows (1901-1910)</h4>

        <p><a href="/edwardian-property-secondary-glazing"><strong>Edwardian sash windows</strong></a> featured:</p>
        <ul>
          <li><strong>Large single panes</strong> - One-over-one configurations common</li>
          <li><strong>Decorative top lights</strong> - Patterned glass in upper sashes</li>
          <li><strong>Refined proportions</strong> - Taller, more elegant dimensions</li>
          <li><strong>Quality joinery</strong> - High standards of craftsmanship</li>
        </ul>

        <h3>Components of Traditional Sash Windows</h3>

        <p>Understanding sash window construction helps explain why secondary glazing is the ideal improvement method:</p>

        <ul>
          <li><strong>Sash box</strong> - The timber frame containing the counterbalance mechanism</li>
          <li><strong>Sashes</strong> - The movable glazed frames (typically two per window)</li>
          <li><strong>Sash weights</strong> - Cast iron weights concealed within the box</li>
          <li><strong>Sash cords</strong> - Traditional ropes connecting sashes to weights</li>
          <li><strong>Pulleys</strong> - Allow cords to run over the top of the box</li>
          <li><strong>Meeting rails</strong> - Central horizontal members where sashes meet</li>
          <li><strong>Glazing bars</strong> - Timber members dividing the glass (when present)</li>
          <li><strong>Parting beads</strong> - Separate the two sashes within the box</li>
          <li><strong>Staff beads</strong> - Hold the inner sash in position</li>
        </ul>

        <h2>Why Sash Windows Need Secondary Glazing</h2>

        <h3>Thermal Performance Issues</h3>

        <p>Traditional single-glazed sash windows have <strong>U-values around 5.0 W/m²K</strong>, resulting in:</p>
        <ul>
          <li><strong>Significant heat loss</strong> - Windows are the primary source of heat loss in period properties</li>
          <li><strong>Cold spots</strong> - Uncomfortable cold areas near windows</li>
          <li><strong>High heating costs</strong> - Excessive energy consumption</li>
          <li><strong>Drafts</strong> - Air infiltration around sashes and through gaps</li>
          <li><strong>Condensation</strong> - Moisture damage to timber and decoration</li>
        </ul>

        <p>Secondary glazing improves U-values to <strong>1.8-2.8 W/m²K</strong>, reducing heat loss by up to 60% while preserving your original sash windows completely intact.</p>

        <h3>Acoustic Challenges</h3>

        <p>Single-glazed sash windows provide minimal sound insulation. Properties on busy roads or in urban areas experience:</p>
        <ul>
          <li>Traffic noise penetration</li>
          <li>Disturbed sleep in front-facing bedrooms</li>
          <li>Difficulty concentrating in home offices</li>
          <li>Reduced quality of life</li>
        </ul>

        <p>Secondary glazing can reduce external noise by <strong>up to 80% (45dB reduction)</strong>, transforming the internal environment.</p>

        <h3>Draft and Air Infiltration</h3>

        <p>Even well-maintained sash windows allow air infiltration through:</p>
        <ul>
          <li>Gaps between sashes and box</li>
          <li>Meeting rail junction</li>
          <li>Around glazing putty</li>
          <li>Through minor gaps in joinery</li>
        </ul>

        <p>Secondary glazing creates an additional sealed layer, dramatically reducing drafts and improving comfort.</p>

        <h3>Condensation and Decay</h3>

        <p>Condensation on cold single-glazed sash windows leads to:</p>
        <ul>
          <li>Timber decay in sashes and sash boxes</li>
          <li>Paint deterioration and peeling</li>
          <li>Mold growth on reveals and sills</li>
          <li>Damage to internal decoration</li>
        </ul>

        <p>Secondary glazing raises the temperature of the internal glass surface, virtually eliminating condensation and protecting your valuable sash windows.</p>

        <h2>Secondary Glazing Options for Sash Windows</h2>

        <h3>Vertical Sliding Secondary Glazing</h3>

        <p><strong>Vertical sliding systems</strong> mirror the operation of your original sash windows, with the secondary glazing sliding vertically. This is the most sympathetic option for:</p>
        <ul>
          <li>Front elevations where visual consistency is important</li>
          <li>Properties in Conservation Areas</li>
          <li>Listed buildings requiring sympathetic design</li>
          <li>Properties where the secondary glazing will be visible</li>
        </ul>

        <p>The secondary unit can be spring-balanced or counterweighted, providing smooth operation that matches your original sashes.</p>

        <h3>Horizontal Sliding Secondary Glazing</h3>

        <p><strong>Horizontal sliding systems</strong> are practical and economical, offering:</p>
        <ul>
          <li>Easy access for cleaning and ventilation</li>
          <li>Slim 15-20mm frames with minimal visual impact</li>
          <li>Excellent performance with optimal sealing</li>
          <li>Simple operation</li>
        </ul>

        <p>While not matching the vertical operation of sash windows, horizontal systems are often preferred for:</p>
        <ul>
          <li>Rear elevations</li>
          <li>Upper floors</li>
          <li>Properties where cost-effectiveness is important</li>
        </ul>

        <h3>Hinged Secondary Glazing</h3>

        <p><strong>Hinged systems</strong> open inward like casement windows, providing:</p>
        <ul>
          <li>Full access to original sash windows</li>
          <li>Easy cleaning of both glazing surfaces</li>
          <li>Wide opening for maximum ventilation</li>
        </ul>

        <p>Suitable for windows requiring frequent access or where sliding systems aren't practical due to space constraints.</p>

        <h3>Lift-Out Secondary Glazing</h3>

        <p><strong>Lift-out panels</strong> can be easily removed and reinstalled, ideal for:</p>
        <ul>
          <li>Windows that don't require regular opening</li>
          <li>Seasonal use (install in winter, remove in summer)</li>
          <li>Maximum performance with minimal visual impact</li>
          <li>Upper floor windows</li>
        </ul>

        <h3>Fixed Secondary Glazing</h3>

        <p><strong>Fixed panels</strong> provide the slimmest possible frames and optimal performance for windows that never need opening, such as:</p>
        <ul>
          <li>Decorative sash windows with colored glass</li>
          <li>Upper floor windows in tall properties</li>
          <li>Windows facing quiet gardens</li>
        </ul>

        <h2>Sash Window Secondary Glazing by Property Type</h2>

        <h3>Georgian Townhouses</h3>

        <p><strong>Georgian properties</strong> typically feature six-over-six or twelve-over-twelve sash windows with fine glazing bars. Our slim-profile secondary glazing preserves the delicate proportions while providing modern thermal and acoustic performance. Ideal for:</p>
        <ul>
          <li>Properties in <a href="/service-areas/kensington-chelsea"><strong>Kensington &amp; Chelsea</strong></a></li>
          <li>Georgian squares in <a href="/service-areas/islington"><strong>Islington</strong></a> and <a href="/service-areas/camden"><strong>Camden</strong></a></li>
          <li>Listed Georgian terraces throughout London</li>
        </ul>

        <h3>Victorian Terraces</h3>

        <p><strong>Victorian terraced houses</strong> are London's most common property type, typically featuring two-over-two or one-over-one sash windows with bay windows to ground and first floors. Secondary glazing is perfect for Victorian terraces because:</p>
        <ul>
          <li>Preserves street scene uniformity</li>
          <li>Doesn't require planning permission in most cases</li>
          <li>Dramatically improves comfort and efficiency</li>
          <li>Protects original windows that contribute to property value</li>
        </ul>

        <h3>Victorian Villas</h3>

        <p><strong>Victorian villas</strong> feature varied sash window sizes and configurations, often with decorative colored glass and ornate joinery. Our bespoke secondary glazing is tailored to each opening, respecting architectural quality while providing superior performance.</p>

        <h3>Edwardian Mansion Flats</h3>

        <p><strong>Edwardian mansion blocks</strong> (common in areas like <a href="/service-areas/kensington-chelsea"><strong>South Kensington</strong></a>, <a href="/service-areas/westminster"><strong>Marylebone</strong></a>, and <a href="/service-areas/wandsworth"><strong>Battersea</strong></a>) often feature large one-over-one sash windows. These properties benefit significantly from secondary glazing's noise reduction, essential for properties on busy roads.</p>

        <h2>Conservation Areas and Listed Buildings</h2>

        <h3>Conservation Area Sash Windows</h3>

        <p>Many sash window properties are within <a href="/conservation-areas-secondary-glazing"><strong>Conservation Areas</strong></a> where replacement windows would require planning permission and are often refused. Secondary glazing is the ideal solution because:</p>
        <ul>
          <li>Installed internally - no change to external appearance</li>
          <li>Typically doesn't require Conservation Area Consent</li>
          <li>Preserves street scene uniformity</li>
          <li>Protects original sash windows that contribute to area character</li>
        </ul>

        <h3>Listed Building Sash Windows</h3>

        <p>For <a href="/listed-buildings-secondary-glazing"><strong>listed buildings</strong></a> (Grade I, Grade II*, or Grade II), secondary glazing is widely approved because:</p>
        <ul>
          <li><strong>Fully reversible</strong> - No permanent alteration to original fabric</li>
          <li><strong>Protective</strong> - Preserves original sash windows and reduces condensation damage</li>
          <li><strong>Historic England approved</strong> - Recognized as best practice for improving thermal performance</li>
        </ul>

        <p>We have extensive experience preparing Listed Building Consent applications and can provide supporting documentation.</p>

        <h2>London Areas We Serve</h2>

        <p>We provide specialist sash window secondary glazing across London, with particular expertise in areas with high concentrations of period sash window properties:</p>

        <ul>
          <li><a href="/service-areas/kensington-chelsea"><strong>Kensington &amp; Chelsea</strong></a> - Georgian and Victorian sash windows in Knightsbridge, Chelsea, Notting Hill</li>
          <li><a href="/service-areas/westminster"><strong>Westminster</strong></a> - Period sash windows in Belgravia, Pimlico, Mayfair, Marylebone</li>
          <li><a href="/service-areas/camden"><strong>Camden</strong></a> - Sash windows in Bloomsbury, Hampstead, Primrose Hill, Kentish Town</li>
          <li><a href="/service-areas/islington"><strong>Islington</strong></a> - Georgian and Victorian sash windows in Canonbury, Barnsbury, Highbury</li>
          <li><a href="/service-areas/wandsworth"><strong>Wandsworth</strong></a> - Victorian sash windows in Clapham, Battersea, Wandsworth Common</li>
          <li><a href="/service-areas/richmond-upon-thames"><strong>Richmond upon Thames</strong></a> - Period sash windows in Richmond, Kew, Twickenham</li>
          <li><a href="/service-areas/hammersmith-fulham"><strong>Hammersmith &amp; Fulham</strong></a> - Victorian and Edwardian sash windows in Fulham, Hammersmith</li>
          <li><a href="/service-areas/lambeth"><strong>Lambeth</strong></a> - Victorian sash windows in Brixton, Stockwell, Kennington</li>
        </ul>

        <h2>Benefits of Secondary Glazing for Sash Windows</h2>

        <h3>Preserves Original Sash Windows</h3>

        <p>Original sash windows are:</p>
        <ul>
          <li><strong>Irreplaceable features</strong> - Historic joinery crafted with traditional methods</li>
          <li><strong>Value contributors</strong> - Replacement can reduce property value significantly</li>
          <li><strong>Architectural character</strong> - Define the character of period properties</li>
          <li><strong>Part of London's heritage</strong> - Contribute to Conservation Areas and historic streetscapes</li>
        </ul>

        <p>Secondary glazing preserves sash windows completely intact while providing all the benefits of modern glazing.</p>

        <h3>Dramatic Thermal Improvement</h3>

        <ul>
          <li><strong>60% reduction in heat loss</strong> through sash windows</li>
          <li><strong>U-values improved from 5.0 to 1.8-2.8 W/m²K</strong></li>
          <li><strong>15-25% reduction in heating costs</strong></li>
          <li><strong>Warmer rooms</strong> with elimination of cold spots</li>
          <li><strong>Reduced carbon footprint</strong></li>
        </ul>

        <h3>Exceptional Noise Reduction</h3>

        <ul>
          <li><strong>Up to 80% noise reduction</strong> (45dB with acoustic glass)</li>
          <li><strong>Quieter bedrooms</strong> - Essential for front-facing rooms on busy roads</li>
          <li><strong>Better concentration</strong> - Improved home working environment</li>
          <li><strong>Improved quality of life</strong> - Peaceful interiors despite external urban noise</li>
        </ul>

        <h3>Eliminates Drafts</h3>

        <p>The sealed secondary glazing layer stops drafts from sash windows, improving comfort significantly even with well-maintained sash mechanisms.</p>

        <h3>Reduces Condensation</h3>

        <p>By raising internal glass temperature, secondary glazing virtually eliminates condensation, protecting timber sash boxes, sashes, and internal decoration from moisture damage.</p>

        <h3>Enhanced Security</h3>

        <p>Secondary glazing provides an additional physical barrier with optional secure locking mechanisms, improving security without visible external changes like security bars.</p>

        <h3>Cost-Effective</h3>

        <p>Secondary glazing is typically <strong>30-50% less expensive</strong> than sash window replacement, with:</p>
        <ul>
          <li>No need for costly planning applications</li>
          <li>No external redecoration</li>
          <li>No structural alterations</li>
          <li>Installation in 1-2 days with minimal disruption</li>
        </ul>

        <h2>Technical Specifications</h2>

        <h3>Frame Profiles</h3>

        <ul>
          <li><strong>Slim 15mm frames</strong> - Minimal visual impact</li>
          <li><strong>Standard 25mm frames</strong> - Balance of strength and aesthetics</li>
          <li><strong>Heritage profiles</strong> - Traditional designs for visible installations</li>
        </ul>

        <h3>Glass Options</h3>

        <ul>
          <li><strong>4mm float glass</strong> - Standard thermal performance</li>
          <li><strong>6.4mm laminated acoustic glass</strong> - Enhanced noise reduction (40dB)</li>
          <li><strong>6.8mm laminated acoustic glass</strong> - Maximum noise reduction (45dB)</li>
          <li><strong>Low-E glass</strong> - Enhanced thermal performance (U-values to 1.8 W/m²K)</li>
          <li><strong>Toughened safety glass</strong> - For lower levels or high-traffic areas</li>
        </ul>

        <h3>Finish Options</h3>

        <ul>
          <li><strong>White</strong> - Standard internal window finish</li>
          <li><strong>Brown</strong> - Complement timber window boxes</li>
          <li><strong>Custom RAL colors</strong> - Match existing joinery</li>
          <li><strong>Woodgrain effects</strong> - Traditional timber appearance</li>
        </ul>

        <h3>Sealing and Hardware</h3>

        <ul>
          <li><strong>High-quality brush seals</strong> - Optimal draft and acoustic sealing</li>
          <li><strong>Discrete handles</strong> - Minimal visual impact</li>
          <li><strong>Period-style furniture</strong> - Traditional designs where appropriate</li>
          <li><strong>Locking mechanisms</strong> - Security and performance</li>
        </ul>

        <h2>Installation Process</h2>

        <h3>1. Survey</h3>

        <p>Our specialists visit to:</p>
        <ul>
          <li>Assess your sash windows and property</li>
          <li>Take precise measurements</li>
          <li>Discuss your requirements and preferences</li>
          <li>Advise on the most appropriate solution</li>
          <li>Provide detailed quotation</li>
        </ul>

        <h3>2. Manufacturing</h3>

        <p>All secondary glazing is <strong>custom-manufactured in the UK</strong> to fit your sash windows precisely, accommodating:</p>
        <ul>
          <li>Out-of-square openings (common in period properties)</li>
          <li>Sash box depths and configurations</li>
          <li>Shutters (where present)</li>
          <li>Decorative architraves and reveals</li>
        </ul>

        <h3>3. Installation</h3>

        <p>Professional installation by experienced craftsmen who:</p>
        <ul>
          <li>Understand period property construction</li>
          <li>Use appropriate fixings that respect original fabric</li>
          <li>Work carefully to protect decoration and features</li>
          <li>Complete installation typically in 1-2 days</li>
        </ul>

        <h3>4. Aftercare</h3>

        <p>Comprehensive guarantee and ongoing support ensure optimal long-term performance.</p>

        <h2>Why Choose Secondary Glazing Over Sash Window Replacement?</h2>

        <h3>Replacement Sash Windows: The Problems</h3>

        <p>Modern replacement sash windows (even "heritage" versions) typically:</p>
        <ul>
          <li><strong>Destroy irreplaceable features</strong> - Original joinery is lost forever</li>
          <li><strong>Reduce property value</strong> - Particularly in Conservation Areas and listed buildings</li>
          <li><strong>Harm street scenes</strong> - Break uniformity in terraces</li>
          <li><strong>Cost significantly more</strong> - 50-100% more expensive than secondary glazing</li>
          <li><strong>Require planning permission</strong> - Often refused in sensitive areas</li>
          <li><strong>Take weeks to complete</strong> - Major disruption compared to 1-2 days for secondary glazing</li>
          <li><strong>Don't last as long</strong> - Original Victorian sash windows are 120+ years old; modern replacements last 20-30 years</li>
        </ul>

        <h3>Secondary Glazing: The Advantages</h3>

        <ul>
          <li><strong>Preserves original sash windows</strong> - Completely intact and protected</li>
          <li><strong>Often matches or exceeds replacement performance</strong> - Particularly for noise reduction</li>
          <li><strong>30-50% less expensive</strong> than replacement</li>
          <li><strong>Installed in 1-2 days</strong> with minimal disruption</li>
          <li><strong>Typically doesn't require planning permission</strong></li>
          <li><strong>Fully reversible</strong> if required</li>
          <li><strong>Protects property value</strong> and character</li>
        </ul>

        <h2>Related Services</h2>

        <ul>
          <li><a href="/victorian-windows-secondary-glazing"><strong>Victorian Windows Secondary Glazing</strong></a> - Period-specific solutions</li>
          <li><a href="/georgian-windows-secondary-glazing"><strong>Georgian Windows Secondary Glazing</strong></a> - For Georgian sash windows</li>
          <li><a href="/edwardian-property-secondary-glazing"><strong>Edwardian Property Secondary Glazing</strong></a> - For Edwardian sash windows</li>
          <li><a href="/listed-buildings-secondary-glazing"><strong>Listed Buildings Secondary Glazing</strong></a> - For listed sash window properties</li>
          <li><a href="/conservation-areas-secondary-glazing"><strong>Conservation Areas Secondary Glazing</strong></a> - For sash windows in protected areas</li>
        </ul>

        <h2>Get Your Free Sash Window Survey</h2>

        <p>If your London property has <strong>traditional sash windows</strong> and you want to improve thermal efficiency, reduce noise, or enhance comfort while preserving these beautiful features, contact <a href="/"><strong>Secondary Glazing Specialist</strong></a> today.</p>

        <p>We offer <strong>free, no-obligation surveys and quotations</strong> for sash window properties across London. Our sash window specialists will assess your windows, discuss your requirements, and recommend the most appropriate secondary glazing solution that preserves your property's character while delivering exceptional performance.</p>

        <p><strong>Call us today</strong> or <strong>request a free survey online</strong> to discover how secondary glazing can transform your sash window property.</p>

        <p><strong>Expert secondary glazing for sash windows - preserving London's architectural heritage, one window at a time.</strong></p>

        {/* End SEO Content Block */}
      </div>
      <EnhancedSEO
        title="Sash Window Secondary Glazing | Vertical Sliding Solutions London"
        description="Expert secondary glazing for sash windows in London. Vertical sliding units match original window operation. Reduce heat loss by 65% and noise by 80%. Free survey available."
        canonicalPath="/sash-window-secondary-glazing"
        keywords={[
          "sash window secondary glazing",
          "vertical sliding secondary glazing",
          "sash window insulation",
          "sliding sash glazing London",
          "box sash secondary glazing",
          "timber sash window solutions"
        ]}
      />
      
      <MainNav />
      
      <div className="container mx-auto px-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-sky-50 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 px-4 py-2 rounded-full mb-6">
              <ArrowUpDown className="h-5 w-5" />
              <span className="font-medium">Sash Window Experts</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sash Window Secondary Glazing
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Maintain the traditional functionality of your sash windows with our <InlineLink href="/residential/sash-windows">vertical 
              sliding secondary glazing</InlineLink>. Designed to match the operation of original box sash 
              windows, our systems provide exceptional <InlineLink href="/thermal-insulation-secondary-glazing">thermal</InlineLink> and <InlineLink href="/noise-reduction-secondary-glazing">acoustic performance</InlineLink>.
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
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Why Choose Vertical Sliding Secondary Glazing?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Sash windows are designed to slide vertically, and our secondary glazing 
                  replicates this movement perfectly. Unlike <InlineLink href="/residential/fixed-secondary-glazing">fixed panels</InlineLink> or <InlineLink href="/residential/casement-windows">hinged units</InlineLink>, 
                  vertical sliding secondary glazing allows you to open both your original 
                  window and the secondary unit independently, maintaining natural ventilation 
                  exactly as intended by the original design.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our systems use precision spiral balances (the same mechanism used in 
                  quality replacement sash windows) to ensure smooth, effortless operation 
                  year after year. The sashes can be tilted inward for easy cleaning of 
                  both the secondary glazing and your original windows - ideal for 
                  <InlineLink href="/victorian-windows-secondary-glazing">Victorian</InlineLink> and <InlineLink href="/georgian-windows-secondary-glazing">Georgian</InlineLink> properties.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Secondary Glazing Options for Sash Windows
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-12 not-prose">
                  <Card className="border-sky-200">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        <Link to="/residential/sash-windows" className="hover:text-primary">Vertical Sliding</Link>
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Our most popular option for sash windows. Matches the operation of 
                        your original windows with independent sliding sashes.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Spiral balance mechanism
                        </li>
                        <li className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Tilt-in for cleaning
                        </li>
                        <li className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Meeting rail options
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-sky-200">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        <Link to="/residential/lift-out" className="hover:text-primary">Lift-Out Panels</Link>
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        A cost-effective option where the secondary panel can be lifted out 
                        for ventilation or cleaning.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Simple operation
                        </li>
                        <li className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Lower cost option
                        </li>
                        <li className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Ideal for limited access
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-sky-200">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        <Link to="/residential/casement-windows" className="hover:text-primary">Hinged Casement</Link>
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Side or top-hung panels that swing open for easy access to your 
                        original windows.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Full window access
                        </li>
                        <li className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Easy cleaning
                        </li>
                        <li className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Quick ventilation
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-sky-200">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        <Link to="/residential/fixed-secondary-glazing" className="hover:text-primary">Fixed Panels</Link>
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Non-opening panels for windows that do not require ventilation, 
                        offering maximum <InlineLink href="/noise-reduction-secondary-glazing">acoustic performance</InlineLink>.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Best acoustic seal
                        </li>
                        <li className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Most economical
                        </li>
                        <li className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Slimmest frame profile
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Performance Benefits
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-12 not-prose">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Thermometer className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        <Link to="/thermal-insulation-secondary-glazing" className="hover:text-primary">Thermal Insulation</Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        The air gap between your sash window and secondary glazing creates 
                        highly effective insulation, reducing heat loss by up to 65% and 
                        eliminating cold spots near windows.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Wind className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Draught Elimination</h3>
                      <p className="text-sm text-muted-foreground">
                        Sash windows are notorious for draughts due to the gaps required for 
                        the sliding mechanism. Secondary glazing creates a complete seal, 
                        eliminating cold air infiltration.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  The Sash Window Challenge
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Traditional sash windows present specific challenges for energy efficiency. 
                  The sliding mechanism requires gaps between the sashes and the frame, and 
                  over time these gaps can increase as the timber shrinks and the window 
                  settles. Additionally, original sash windows typically feature single 
                  glazing, providing minimal insulation - a common issue in <InlineLink href="/victorian-windows-secondary-glazing">Victorian</InlineLink> and 
                  <InlineLink href="/georgian-windows-secondary-glazing">Georgian</InlineLink> properties.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  While draught-proofing can help seal the gaps around the sashes, it cannot 
                  address the fundamental problem of single glazing. Secondary glazing 
                  provides a comprehensive solution, creating an insulating barrier that 
                  addresses both draughts and <InlineLink href="/thermal-insulation-secondary-glazing">thermal performance</InlineLink>.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Installation Process
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our installation process is designed to be quick and non-disruptive. Most 
                  sash windows can be fitted with secondary glazing in under an hour, and 
                  there is no mess or decoration damage. The frames are fixed to your 
                  existing timber surrounds using discreet fixings that can be removed 
                  in the future if required - essential for <InlineLink href="/listed-buildings-secondary-glazing">listed buildings</InlineLink>.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We always survey each window individually, taking precise measurements 
                  to ensure a perfect fit. Our vertical sliding units are manufactured to 
                  order and delivered ready for installation.
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
                  title="Get Your Free Sash Window Survey"
                  description="Our experts will assess your sash windows and recommend the best secondary glazing solution for your property."
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

export default SashWindowSecondaryGlazing;
