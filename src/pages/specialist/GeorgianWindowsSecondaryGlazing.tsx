import React from "react";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { SpecialistPageSchema } from "@/components/seo/SpecialistPageSchema";
import { Link } from "react-router-dom";
import { Castle, Eye, Shield, CheckCircle, Phone } from "lucide-react";
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
  { label: "Georgian Windows Secondary Glazing" },
];

const relatedLinks = [
  { title: "Victorian Windows", href: "/victorian-windows-secondary-glazing", description: "Victorian sash solutions" },
  { title: "Sash Window Glazing", href: "/sash-window-secondary-glazing", description: "Vertical sliding solutions" },
  { title: "Listed Buildings", href: "/listed-buildings-secondary-glazing", description: "Grade I, II*, II solutions" },
  { title: "Conservation Areas", href: "/conservation-areas-secondary-glazing", description: "Heritage area solutions" },
  { title: "Thermal Insulation", href: "/thermal-insulation-secondary-glazing", description: "Reduce heat loss" },
  { title: "Noise Reduction", href: "/noise-reduction-secondary-glazing", description: "Block external noise" },
];

const GeorgianWindowsSecondaryGlazing = () => {
  return (
    <div className="min-h-screen">
      <SpecialistPageSchema
        serviceName="Georgian Windows Secondary Glazing"
        serviceDescription="Sympathetic secondary glazing for Georgian properties across London. Preserve delicate glazing bars, fine proportions, and multi-pane sash configurations while improving thermal efficiency and reducing noise."
        pageName="Georgian Windows Secondary Glazing London"
        pageDescription="Specialist secondary glazing for Georgian sash windows and period townhouses"
        priceRange={{ low: 450, high: 1100 }}
        faqs={[
          { question: "Can secondary glazing work with multi-pane Georgian windows?", answer: "Yes, our slim-profile secondary glazing is specifically designed to work with Georgian six-over-six, nine-over-nine, and twelve-over-twelve pane configurations without obscuring the elegant glazing bar patterns." },
          { question: "Is secondary glazing suitable for Georgian listed buildings?", answer: "Absolutely. Secondary glazing is the preferred solution for Georgian listed buildings as it preserves original windows completely and is fully reversible. We handle Listed Building Consent applications where required." }
        ]}
      />
      {/* SEO CONTENT - Hidden from users, visible to crawlers */}
      <div style={{ display: 'none' }} className="seo-content">
        {/* SEO Content Block for Georgian Windows Secondary Glazing */}

        <h1>Georgian Windows Secondary Glazing | Sympathetic Solutions for Georgian Properties</h1>

        <h2>Expert Secondary Glazing for Georgian Windows Across London</h2>

        <p><strong>Georgian architecture</strong> represents some of Britain's finest period building, with elegant proportions, classical symmetry, and beautiful craftsmanship that defined London's development between 1714 and 1837. <a href="/"><strong>Secondary Glazing Specialist</strong></a> provides expert <strong>secondary glazing for Georgian windows</strong>, preserving the delicate glazing bars, fine proportions, and architectural integrity of Georgian properties while delivering exceptional thermal performance and noise reduction.</p>

        <p>Georgian windows are characterized by their multi-pane <a href="/sash-window-secondary-glazing"><strong>sash window</strong></a> configurations—typically six-over-six, nine-over-nine, or twelve-over-twelve panes—with slim glazing bars and elegant proportions. Our bespoke secondary glazing solutions respect these distinctive features while improving energy efficiency by up to 60% and reducing external noise by up to 80%.</p>

        <h2>Understanding Georgian Windows</h2>

        <h3>The Georgian Period (1714-1837)</h3>

        <p>The <strong>Georgian era</strong> spanned the reigns of four King Georges:</p>

        <ul>
          <li><strong>George I (1714-1727)</strong> - Early Georgian</li>
          <li><strong>George II (1727-1760)</strong> - Early to Mid Georgian</li>
          <li><strong>George III (1760-1820)</strong> - Mid to Late Georgian</li>
          <li><strong>George IV (1820-1830)</strong> - Late Georgian / Regency</li>
          <li><strong>William IV (1830-1837)</strong> - Late Georgian</li>
        </ul>

        <p>Georgian architecture was heavily influenced by classical design principles, creating the elegant terraces, squares, and crescents that define much of historic London.</p>

        <h3>Characteristics of Georgian Windows</h3>

        <p><strong>Georgian windows</strong> have distinctive features that make them instantly recognizable:</p>

        <h4>Multi-Pane Sash Configurations</h4>

        <p>Georgian windows feature <strong>multiple small panes</strong> due to limitations in 18th-century glass manufacturing. Common configurations include:</p>

        <ul>
          <li><strong>Six-over-six (6/6)</strong> - Most common configuration with six panes in each sash</li>
          <li><strong>Eight-over-eight (8/8)</strong> - Eight panes per sash, common in larger windows</li>
          <li><strong>Nine-over-nine (9/9)</strong> - Nine panes per sash, typically in grander properties</li>
          <li><strong>Twelve-over-twelve (12/12)</strong> - Twelve panes per sash, found in the finest Georgian townhouses</li>
          <li><strong>Fifteen-over-fifteen (15/15)</strong> - Rare configuration in very grand properties</li>
        </ul>

        <h4>Glazing Bars (Astragals)</h4>

        <p>The timber members dividing the glass panes are called <strong>glazing bars</strong> or <strong>astragals</strong>. Georgian glazing bars are characterized by:</p>

        <ul>
          <li><strong>Delicate sections</strong> - Much finer than later Victorian glazing bars</li>
          <li><strong>Ovolo profile</strong> - Classical curved molding profile</li>
          <li><strong>Mortice and tenon joints</strong> - Traditional joinery at intersections</li>
          <li><strong>Putty glazing</strong> - Small panes set in linseed oil putty</li>
        </ul>

        <h4>Crown Glass</h4>

        <p>Georgian windows often retain original <strong>crown glass</strong>—handmade glass produced by spinning molten glass into circular sheets. Crown glass has:</p>

        <ul>
          <li>Characteristic ripples and imperfections</li>
          <li>Slightly greenish tint</li>
          <li>Variable thickness</li>
          <li>Historical and monetary value</li>
        </ul>

        <p>Preserving original crown glass is essential—it's irreplaceable and contributes significantly to property value and authenticity.</p>

        <h4>Sash Box Construction</h4>

        <p>Georgian <strong>box sash windows</strong> feature:</p>

        <ul>
          <li><strong>Concealed weights</strong> - Cast iron sash weights within timber boxes</li>
          <li><strong>Traditional sash cords</strong> - Often original and still functional</li>
          <li><strong>Substantial timber sections</strong> - Thick, durable hardwood or softwood</li>
          <li><strong>Fine proportions</strong> - Carefully calculated ratios between frame, sash, and glass</li>
        </ul>

        <h3>Evolution Through the Georgian Period</h3>

        <h4>Early Georgian (1714-1750)</h4>

        <p><strong>Early Georgian windows</strong> were heavily influenced by late Stuart design:</p>

        <ul>
          <li>Very thick glazing bars (20-25mm)</li>
          <li>Small panes (typically 6-8 inches)</li>
          <li>Flush frames sitting within reveals</li>
          <li>Heavy timber construction</li>
        </ul>

        <h4>Mid Georgian (1750-1790)</h4>

        <p><strong>Mid Georgian windows</strong> refined proportions and improved technology:</p>

        <ul>
          <li>Thinner glazing bars (15-18mm) as joinery techniques improved</li>
          <li>Larger panes as glass manufacturing advanced</li>
          <li>More elegant proportions</li>
          <li>Introduction of shallow sash boxes</li>
        </ul>

        <h4>Late Georgian / Regency (1790-1837)</h4>

        <p><strong>Late Georgian windows</strong> reached peak elegance:</p>

        <ul>
          <li>Very slim glazing bars (12-15mm)</li>
          <li>Larger individual panes</li>
          <li>Six-over-six becoming standard (replacing twelve-over-twelve)</li>
          <li>Refined proportions and details</li>
          <li>Influence of Regency design (1811-1820)</li>
        </ul>

        <h2>Why Georgian Windows Need Secondary Glazing</h2>

        <h3>Preservation of Irreplaceable Features</h3>

        <p>Georgian windows are <strong>architectural treasures</strong> that cannot be authentically replicated. Original Georgian windows feature:</p>

        <ul>
          <li><strong>Handcrafted joinery</strong> - Traditional mortice and tenon construction</li>
          <li><strong>Period glazing bars</strong> - Authentic profiles and proportions</li>
          <li><strong>Original crown glass</strong> - Irreplaceable handmade glass (where surviving)</li>
          <li><strong>Historical authenticity</strong> - 200-300+ years of history</li>
          <li><strong>Significant value</strong> - Replacement can reduce property value by tens of thousands of pounds</li>
        </ul>

        <p>Secondary glazing preserves these features completely intact while providing modern performance benefits.</p>

        <h3>Thermal Performance Challenges</h3>

        <p>Georgian single-glazed windows have <strong>U-values around 5.0-5.5 W/m²K</strong> due to:</p>

        <ul>
          <li>Single glazing with no insulation</li>
          <li>Multiple panes = multiple thermal bridges via glazing bars</li>
          <li>Air infiltration around sashes</li>
          <li>Large window areas (Georgian rooms typically have generous fenestration)</li>
        </ul>

        <p>This results in:</p>

        <ul>
          <li>Significant heat loss and high energy bills</li>
          <li>Cold spots and uncomfortable rooms in winter</li>
          <li>Difficulty maintaining stable temperatures</li>
          <li>Poor energy efficiency ratings</li>
        </ul>

        <p>Secondary glazing improves U-values to <strong>1.8-2.8 W/m²K</strong>, reducing heat loss by up to 60%.</p>

        <h3>Acoustic Performance</h3>

        <p>Many Georgian properties are located in:</p>

        <ul>
          <li><strong>Central London areas</strong> - High traffic volumes and urban noise</li>
          <li><strong>Main roads</strong> - Properties built when traffic was horse-drawn now face constant vehicle noise</li>
          <li><strong>Commercial areas</strong> - Shops, restaurants, and nightlife</li>
        </ul>

        <p>Secondary glazing can reduce external noise by <strong>up to 80% (45dB reduction)</strong>, transforming the internal environment of Georgian properties in busy locations.</p>

        <h3>Condensation and Preservation</h3>

        <p>Georgian windows often suffer from severe condensation leading to:</p>

        <ul>
          <li><strong>Decay of delicate glazing bars</strong> - Timber rot in fine astragals</li>
          <li><strong>Paint deterioration</strong> - Loss of historic paint layers</li>
          <li><strong>Putty failure</strong> - Traditional linseed putty breaking down</li>
          <li><strong>Crown glass damage</strong> - Moisture affecting irreplaceable original glass</li>
          <li><strong>Internal damage</strong> - Mold, plasterwork deterioration, wallpaper damage</li>
        </ul>

        <p>Secondary glazing dramatically reduces condensation, protecting these valuable windows.</p>

        <h2>Conservation Areas and Listed Georgian Buildings</h2>

        <h3>Georgian Properties in Conservation Areas</h3>

        <p>Many Georgian streets, squares, and terraces are protected within <a href="/conservation-areas-secondary-glazing"><strong>Conservation Areas</strong></a>, including:</p>

        <ul>
          <li><strong>Georgian squares</strong> - Bloomsbury, Islington, Marylebone</li>
          <li><strong>Georgian terraces</strong> - Throughout central and inner London</li>
          <li><strong>Georgian crescents</strong> - Elegant curved developments</li>
          <li><strong>Georgian estates</strong> - Planned developments with architectural uniformity</li>
        </ul>

        <p>In Conservation Areas, window replacement typically requires planning permission and is often refused to preserve architectural character. Secondary glazing is the ideal solution because:</p>

        <ul>
          <li>Installed internally - no change to external appearance</li>
          <li>Typically doesn't require Conservation Area Consent</li>
          <li>Preserves street scene uniformity essential to Georgian architecture</li>
          <li>Protects the multi-pane configuration that defines Georgian windows</li>
        </ul>

        <h3>Listed Georgian Buildings</h3>

        <p>Many Georgian properties hold <a href="/listed-buildings-secondary-glazing"><strong>listed building status</strong></a>, including:</p>

        <ul>
          <li><strong>Grade I listed</strong> - Buildings of exceptional interest (finest Georgian townhouses, landmark buildings)</li>
          <li><strong>Grade II* listed</strong> - Particularly important buildings (significant Georgian terraces, squares)</li>
          <li><strong>Grade II listed</strong> - Buildings of special interest (typical Georgian terraces, individual properties)</li>
        </ul>

        <p>For listed Georgian buildings, secondary glazing is widely approved because:</p>

        <ul>
          <li><strong>Fully reversible</strong> - No permanent alteration to historic fabric</li>
          <li><strong>Preserves original windows</strong> - Georgian glazing bars, sashes, and glass remain intact</li>
          <li><strong>Protective</strong> - Reduces condensation and protects valuable original windows</li>
          <li><strong>Historic England approved</strong> - Recognized as best practice for Georgian properties</li>
        </ul>

        <p>We have extensive experience preparing Listed Building Consent applications for Georgian properties and can provide detailed documentation, drawings, and heritage statements.</p>

        <h2>Secondary Glazing Solutions for Georgian Windows</h2>

        <h3>Slim-Profile Systems</h3>

        <p>For Georgian windows, where <strong>visual impact must be minimized</strong>, we offer slim-profile secondary glazing with:</p>

        <ul>
          <li><strong>15mm frame depth</strong> - Minimal visual intrusion</li>
          <li><strong>Unobtrusive sightlines</strong> - Doesn't compete with delicate glazing bars</li>
          <li><strong>Discrete fixing</strong> - Careful placement to respect period joinery</li>
          <li><strong>Sympathetic design</strong> - Complements rather than dominates Georgian proportions</li>
        </ul>

        <h3>Vertical Sliding Systems</h3>

        <p><strong>Vertical sliding secondary glazing</strong> mirrors the operation of Georgian sash windows, providing the most sympathetic solution for:</p>

        <ul>
          <li>Principal elevations where visual consistency is paramount</li>
          <li>Listed Georgian buildings requiring authentic appearance</li>
          <li>Properties in prominent Conservation Area locations</li>
          <li>Georgian squares and terraces where uniformity is essential</li>
        </ul>

        <h3>Horizontal Sliding Systems</h3>

        <p><strong>Horizontal sliding systems</strong> offer practical performance with slim frames suitable for:</p>

        <ul>
          <li>Rear elevations of Georgian properties</li>
          <li>Upper floors where visibility is limited</li>
          <li>Cost-effective installations without compromising performance</li>
        </ul>

        <h3>Lift-Out Panels</h3>

        <p><strong>Lift-out secondary glazing</strong> provides maximum performance with minimal visual impact, ideal for:</p>

        <ul>
          <li>Georgian windows with decorative glazing bars where frames should be minimized</li>
          <li>Windows that don't require frequent opening</li>
          <li>Seasonal installation options</li>
        </ul>

        <h2>Georgian Property Types</h2>

        <h3>Georgian Terraced Houses</h3>

        <p><strong>Georgian terraces</strong> are one of London's defining architectural forms, featuring:</p>

        <ul>
          <li>Symmetrical facades with regular window patterns</li>
          <li>Six-over-six or twelve-over-twelve sash windows</li>
          <li>Classical proportions and restraint</li>
          <li>Brick construction with stucco details (later Georgian)</li>
        </ul>

        <p>Secondary glazing for Georgian terraces must preserve street scene uniformity while improving individual property performance.</p>

        <h3>Georgian Townhouses</h3>

        <p><strong>Grand Georgian townhouses</strong> (particularly in areas like <a href="/service-areas/kensington-chelsea"><strong>Kensington</strong></a>, <a href="/service-areas/westminster"><strong>Belgravia</strong></a>, and Bloomsbury) feature:</p>

        <ul>
          <li>Multiple stories (typically 4-5 floors plus basement)</li>
          <li>Large sash windows with twelve-over-twelve or fifteen-over-fifteen configurations</li>
          <li>Fine architectural details and superior craftsmanship</li>
          <li>High ceilings and generous proportions</li>
        </ul>

        <p>Our bespoke secondary glazing respects the exceptional quality of these properties while providing superior thermal and acoustic performance.</p>

        <h3>Georgian Squares</h3>

        <p>London's <strong>Georgian squares</strong>—such as Bedford Square, Fitzroy Square, and numerous squares in Islington and Bloomsbury—represent planned developments with architectural unity. Secondary glazing maintains this uniformity as it doesn't alter external appearance.</p>

        <h3>Georgian Mansion Conversions</h3>

        <p>Large <strong>Georgian mansions converted to flats</strong> require secondary glazing solutions that:</p>

        <ul>
          <li>Don't require building-wide consent</li>
          <li>Can be installed by individual leaseholders</li>
          <li>Preserve the building's external appearance</li>
          <li>Provide acoustic separation between flats and from external noise</li>
        </ul>

        <h2>London Areas with Georgian Architecture</h2>

        <p>We provide specialist Georgian window secondary glazing across London's Georgian districts:</p>

        <h3>Bloomsbury (Camden)</h3>

        <p><strong>Bloomsbury</strong> contains some of London's finest Georgian squares including Bedford Square (the only complete Georgian square in London). We provide sympathetic secondary glazing for these exceptional <a href="/service-areas/camden"><strong>Camden Georgian properties</strong></a>.</p>

        <h3>Islington</h3>

        <p><strong>Islington</strong> has extensive Georgian terraces and squares including Canonbury Square, Cloudesley Square, and Barnsbury. Our <a href="/service-areas/islington"><strong>Islington secondary glazing service</strong></a> specializes in these Georgian properties.</p>

        <h3>Kensington</h3>

        <p>Areas of <strong>Kensington</strong> feature fine Georgian development, particularly around Kensington Square and Phillimore Estate. Our <a href="/service-areas/kensington-chelsea"><strong>Kensington &amp; Chelsea service</strong></a> covers these prestigious Georgian properties.</p>

        <h3>Belgravia (Westminster)</h3>

        <p><strong>Belgravia</strong> represents late Georgian / Regency grandeur with magnificent stucco terraces and squares. Our <a href="/service-areas/westminster"><strong>Westminster service</strong></a> provides specialist secondary glazing for these exceptional properties.</p>

        <h3>Marylebone (Westminster)</h3>

        <p><strong>Marylebone</strong> contains Georgian streets and squares including Manchester Square and Portman Square, requiring sympathetic window improvements.</p>

        <h3>Spitalfields</h3>

        <p><strong>Spitalfields</strong> preserves fine early Georgian houses, including rare examples of merchant houses with original features.</p>

        <h3>Greenwich</h3>

        <p>The <strong>Greenwich World Heritage Site</strong> includes significant Georgian architecture requiring particularly sensitive approaches to window improvements.</p>

        <h3>Richmond</h3>

        <p><strong>Richmond</strong> and surrounding areas contain Georgian villas and terraces, particularly around Richmond Green and Hill. Our <a href="/service-areas/richmond-upon-thames"><strong>Richmond service</strong></a> covers these period properties.</p>

        <h2>Benefits of Secondary Glazing for Georgian Windows</h2>

        <h3>Preserves Architectural Integrity</h3>

        <ul>
          <li><strong>Glazing bars remain visible</strong> - Fine astragals preserved completely intact</li>
          <li><strong>Window proportions unchanged</strong> - Classical ratios maintained</li>
          <li><strong>Original glass protected</strong> - Crown glass and period glazing preserved</li>
          <li><strong>Joinery intact</strong> - Traditional mortice and tenon construction undisturbed</li>
          <li><strong>Reversible</strong> - Can be removed without damage to Georgian fabric</li>
        </ul>

        <h3>Exceptional Thermal Performance</h3>

        <ul>
          <li><strong>60% reduction in heat loss</strong> through windows</li>
          <li><strong>U-values improved from 5.0+ to 1.8-2.8 W/m²K</strong></li>
          <li><strong>15-25% reduction in heating costs</strong> - Significant for large Georgian properties</li>
          <li><strong>Warmer rooms</strong> - Elimination of cold spots and drafts</li>
          <li><strong>Stable temperatures</strong> - Better thermal mass utilization</li>
        </ul>

        <h3>Outstanding Acoustic Performance</h3>

        <ul>
          <li><strong>Up to 80% noise reduction</strong> (45dB with acoustic glass)</li>
          <li><strong>Peaceful interiors</strong> - Essential for Georgian properties on busy roads</li>
          <li><strong>Better sleep quality</strong> - Quieter bedrooms facing streets</li>
          <li><strong>Improved concentration</strong> - Better home working environment</li>
        </ul>

        <h3>Condensation Elimination</h3>

        <ul>
          <li><strong>Protects delicate glazing bars</strong> - Prevents rot in fine astragals</li>
          <li><strong>Preserves historic glass</strong> - Protects crown glass from moisture damage</li>
          <li><strong>Maintains decoration</strong> - Prevents wallpaper and plasterwork damage</li>
          <li><strong>Reduces maintenance</strong> - Less frequent redecoration needed</li>
        </ul>

        <h3>Property Value Protection</h3>

        <p>Replacing Georgian windows with modern alternatives—even "heritage style" replicas—can reduce property value significantly. Secondary glazing preserves:</p>

        <ul>
          <li>Original period features that command premium prices</li>
          <li>Architectural authenticity that discerning buyers value</li>
          <li>Street scene uniformity essential in Georgian terraces</li>
          <li>Historical integrity in listed buildings</li>
        </ul>

        <h2>Technical Specifications for Georgian Windows</h2>

        <h3>Frame Profiles</h3>

        <ul>
          <li><strong>15mm slim frames</strong> - Minimal visual impact for delicate Georgian proportions</li>
          <li><strong>20mm standard frames</strong> - Balance of strength and aesthetics</li>
          <li><strong>Custom profiles</strong> - Heritage designs for visible installations</li>
        </ul>

        <h3>Glass Options</h3>

        <ul>
          <li><strong>4mm float glass</strong> - Standard thermal performance (U-value ~2.8 W/m²K with air gap)</li>
          <li><strong>6.4mm laminated acoustic glass</strong> - Enhanced noise reduction (40dB)</li>
          <li><strong>6.8mm laminated acoustic glass</strong> - Maximum noise reduction (45dB)</li>
          <li><strong>Low-E glass</strong> - Enhanced thermal performance (U-value to 1.8 W/m²K)</li>
        </ul>

        <h3>Finishes</h3>

        <ul>
          <li><strong>White</strong> - Traditional Georgian internal window finish</li>
          <li><strong>Off-white / cream</strong> - Period-appropriate alternatives</li>
          <li><strong>Custom colors</strong> - Match existing internal joinery</li>
          <li><strong>Woodgrain effects</strong> - Complement timber sash boxes</li>
        </ul>

        <h3>Air Gap Optimization</h3>

        <p>The air gap between original window and secondary glazing is crucial for performance:</p>

        <ul>
          <li><strong>50-100mm</strong> - Standard for thermal performance</li>
          <li><strong>100-150mm</strong> - Optimal for acoustic performance</li>
          <li><strong>Custom depths</strong> - Tailored to your Georgian window reveals</li>
        </ul>

        <h2>Installation Process for Georgian Properties</h2>

        <h3>Heritage Survey</h3>

        <p>Our specialists conduct detailed surveys of Georgian properties, assessing:</p>

        <ul>
          <li>Window condition and configuration</li>
          <li>Glazing bar profiles and dimensions</li>
          <li>Presence of original crown glass</li>
          <li>Listed building / Conservation Area status</li>
          <li>Internal reveal dimensions and features</li>
          <li>Shutters, architraves, and period details</li>
        </ul>

        <h3>Bespoke Manufacturing</h3>

        <p>All secondary glazing is <strong>custom-manufactured</strong> to fit Georgian window openings precisely, accommodating:</p>

        <ul>
          <li>Out-of-square openings (common in 200+ year old properties)</li>
          <li>Period shutters and shutter boxes</li>
          <li>Decorative architraves and moldings</li>
          <li>Sash box projections and sills</li>
        </ul>

        <h3>Sympathetic Installation</h3>

        <p>Our experienced installers understand Georgian construction and work carefully to:</p>

        <ul>
          <li>Respect original fabric and joinery</li>
          <li>Use appropriate fixings that don't damage period features</li>
          <li>Protect lime plaster and historic decoration</li>
          <li>Work within conservation principles</li>
          <li>Complete installation with minimal disruption (typically 1-2 days)</li>
        </ul>

        <h2>Related Services for Georgian Properties</h2>

        <ul>
          <li><a href="/sash-window-secondary-glazing"><strong>Sash Window Secondary Glazing</strong></a> - Specialist solutions for Georgian box sash windows</li>
          <li><a href="/victorian-windows-secondary-glazing"><strong>Victorian Windows Secondary Glazing</strong></a> - For later period properties</li>
          <li><a href="/listed-buildings-secondary-glazing"><strong>Listed Buildings Secondary Glazing</strong></a> - For listed Georgian properties</li>
          <li><a href="/conservation-areas-secondary-glazing"><strong>Conservation Areas Secondary Glazing</strong></a> - For Georgian properties in protected areas</li>
        </ul>

        <h2>Get Your Free Georgian Property Survey</h2>

        <p>If you own a <strong>Georgian property in London</strong> and want to improve thermal efficiency, reduce noise, or enhance comfort while preserving your beautiful Georgian windows and their delicate glazing bars, contact <a href="/"><strong>Secondary Glazing Specialist</strong></a> today.</p>

        <p>We offer <strong>free, no-obligation surveys and quotations</strong> for Georgian properties across London. Our Georgian architecture specialists will assess your windows, discuss conservation requirements, and recommend the most appropriate secondary glazing solution that respects your property's 18th-century heritage.</p>

        <p><strong>Call us today</strong> or <strong>request a free survey online</strong> to discover how secondary glazing can transform your Georgian home while preserving its architectural treasures.</p>

        <p><strong>Expert secondary glazing for Georgian windows - preserving 18th-century elegance, delivering 21st-century performance.</strong></p>

        {/* End SEO Content Block */}
      </div>
      <EnhancedSEO
        title="Georgian Windows Secondary Glazing | Period-Appropriate Solutions"
        description="Specialist secondary glazing for Georgian windows in London. Preserve original 6-over-6 and 12-pane sash windows while improving insulation. Heritage-sensitive installation."
        canonicalPath="/georgian-windows-secondary-glazing"
        keywords={[
          "Georgian windows secondary glazing",
          "Georgian sash window insulation",
          "6 over 6 window glazing",
          "12 pane window secondary glazing",
          "Georgian townhouse windows",
          "Regency window solutions"
        ]}
      />
      
      <MainNav />
      
      <div className="container mx-auto px-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-100 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-slate-200 text-slate-800 px-4 py-2 rounded-full mb-6">
              <Castle className="h-5 w-5" />
              <span className="font-medium">Georgian Specialists</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Georgian Windows Secondary Glazing
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Period-appropriate secondary glazing for Georgian properties. We understand 
              the architectural significance of Georgian windows and provide solutions 
              that respect their elegant proportions while improving <InlineLink href="/thermal-insulation-secondary-glazing">thermal efficiency</InlineLink> and <InlineLink href="/noise-reduction-secondary-glazing">noise reduction</InlineLink>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/quote-request">Get Free Georgian Survey</Link>
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
                  The Georgian Window Tradition
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Georgian architecture (1714-1830) is defined by its symmetry, proportion, and 
                  classical elegance. The windows of this era, typically featuring six-over-six 
                  or twelve-over-twelve pane configurations, are central to the Georgian aesthetic. 
                  Their multiple glazing bars and slender timber frames create the distinctive 
                  appearance that makes Georgian properties so desirable, especially those in 
                  <InlineLink href="/conservation-areas-secondary-glazing">conservation areas</InlineLink> or with <InlineLink href="/listed-buildings-secondary-glazing">listed building</InlineLink> status.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  These windows often feature crown glass or early cylinder glass, with their 
                  characteristic slight imperfections and beautiful light quality. Replacing 
                  such windows with modern alternatives would be an architectural tragedy, 
                  which is why secondary glazing offers the ideal solution for improving 
                  performance without compromise.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Georgian Window Configurations
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-12 not-prose">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">Six-Over-Six Sash</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        The classic Georgian configuration with six panes in each sash, creating 
                        twelve panes in total. Common in townhouses from 1720-1780.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Slim sightline options
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Optional glazing bar detail
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">Twelve-Over-Twelve</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Earlier Georgian style with smaller panes, reflecting the technical 
                        limitations of early glass manufacturing.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Heritage-sensitive design
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Minimal visual impact
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">Regency Windows</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Later Georgian/Regency style (1811-1820) with larger panes as glass 
                        technology improved, often two-over-two or three-over-three.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <Link to="/residential/sash-windows" className="hover:text-primary">Larger opening sashes</Link>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Elegant curved heads
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">Tall First Floor</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        The principal floor (piano nobile) features taller windows, often 
                        with decorative surrounds and pediments.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Extended height units
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Balanced proportions
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Preserving Georgian Character
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our approach to Georgian properties is guided by respect for the original 
                  architecture. We use the slimmest possible frame profiles to maintain 
                  sightlines, and our <InlineLink href="/sash-window-secondary-glazing">vertical sliding secondary glazing</InlineLink> replicates the 
                  operation of traditional sash windows.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  For properties with particularly important interiors, we can also provide 
                  secondary glazing with dummy glazing bars that align with the original 
                  window divisions, creating an almost invisible installation when viewed 
                  from inside the room - perfect for <InlineLink href="/listed-buildings-secondary-glazing">Grade I and II listed properties</InlineLink>.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-12 not-prose">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <Eye className="h-5 w-5 text-slate-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Slim Sightlines</h3>
                      <p className="text-sm text-muted-foreground">
                        Frame profiles as narrow as 20mm to minimise visual intrusion.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-5 w-5 text-slate-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Original Glass Protected</h3>
                      <p className="text-sm text-muted-foreground">
                        Preserve irreplaceable crown glass and early cylinder glass.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Georgian Areas in London
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  London has some of the finest Georgian architecture in the world, and we have 
                  extensive experience working in these prestigious areas:
                </p>
                <ul className="list-none space-y-2 mb-8 not-prose">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <Link to="/areas/central-london" className="hover:text-primary">Belgravia and Mayfair townhouses</Link>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Bloomsbury and Fitzrovia squares
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <Link to="/areas/east-london" className="hover:text-primary">Spitalfields Georgian houses</Link>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <Link to="/areas/south-london" className="hover:text-primary">Greenwich and Blackheath terraces</Link>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <Link to="/areas/north-london" className="hover:text-primary">Islington and Canonbury crescents</Link>
                  </li>
                </ul>

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Technical Considerations
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Georgian windows often have deep timber box frames which provide an ideal 
                  cavity for secondary glazing. The greater the air gap between the original 
                  window and secondary glazing, the better the <InlineLink href="/thermal-insulation-secondary-glazing">thermal</InlineLink> and <InlineLink href="/noise-reduction-secondary-glazing">acoustic</InlineLink> performance. 
                  With Georgian windows, we can typically achieve gaps of 100-150mm, providing 
                  exceptional insulation.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  The substantial timber reveals also allow for neat installation with the 
                  secondary glazing frames hidden within the window opening, further reducing 
                  visual impact from inside the room. This is also ideal for later 
                  <InlineLink href="/victorian-windows-secondary-glazing">Victorian</InlineLink> and <InlineLink href="/edwardian-property-secondary-glazing">Edwardian</InlineLink> properties.
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
                  title="Get Your Free Georgian Property Survey"
                  description="Our heritage specialists will assess your Georgian windows and recommend the ideal secondary glazing solution."
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

export default GeorgianWindowsSecondaryGlazing;
