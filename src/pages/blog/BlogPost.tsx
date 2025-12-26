import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Blog post content database
const blogPostsContent: Record<string, {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: React.ReactNode;
}> = {
  "secondary-glazing-cost-london": {
    title: "How Much Does Secondary Glazing Cost in London? Complete 2026 Price Guide",
    excerpt: "Comprehensive pricing guide for secondary glazing in London. From budget options at £350 per window to premium acoustic solutions, discover what affects costs and how to get the best value.",
    date: "2024-12-22",
    readTime: "14 min read",
    category: "Pricing",
    image: "/lovable-uploads/675b8861-030a-48d3-adbe-f9706ec54947.png",
    content: (
      <>
        <p className="lead">Secondary glazing costs in London typically range from £350 to £1,200 per window, depending on size, glass type, and frame style. This comprehensive guide breaks down exactly what you can expect to pay and how to get the best value for your property.</p>
        
        <p>Whether you're looking to reduce noise from busy London streets, improve thermal efficiency in a Victorian terrace, or meet conservation requirements for a listed building, understanding the true cost of secondary glazing helps you budget effectively and avoid surprises.</p>
        
        <h2>Average Secondary Glazing Prices in London (2026)</h2>
        
        <p>Here's what London homeowners typically pay for professional secondary glazing installation:</p>
        
        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-3 text-left font-semibold">Window Type</th>
                <th className="border border-border p-3 text-left font-semibold">Price Range</th>
                <th className="border border-border p-3 text-left font-semibold">Average Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-3">Small fixed panel (up to 1m²)</td>
                <td className="border border-border p-3">£350 - £500</td>
                <td className="border border-border p-3">£425</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="border border-border p-3">Standard sash window</td>
                <td className="border border-border p-3">£500 - £800</td>
                <td className="border border-border p-3">£650</td>
              </tr>
              <tr>
                <td className="border border-border p-3">Large sash window (Victorian/Georgian)</td>
                <td className="border border-border p-3">£700 - £1,000</td>
                <td className="border border-border p-3">£850</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="border border-border p-3">Bay window (3 panels)</td>
                <td className="border border-border p-3">£1,500 - £2,500</td>
                <td className="border border-border p-3">£2,000</td>
              </tr>
              <tr>
                <td className="border border-border p-3">Acoustic specialist glazing</td>
                <td className="border border-border p-3">£800 - £1,200</td>
                <td className="border border-border p-3">£1,000</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="border border-border p-3">Horizontal sliding unit</td>
                <td className="border border-border p-3">£600 - £900</td>
                <td className="border border-border p-3">£750</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p><strong>Note:</strong> These prices include professional survey, manufacture, and installation. DIY kits are available from around £150-£300 per window but are not recommended for period properties or where acoustic performance is important.</p>
        
        <h2>What Affects Secondary Glazing Costs?</h2>
        
        <h3>1. Window Size and Shape</h3>
        <p>Larger windows require more materials and more complex installation. Non-standard shapes (arched, circular, or triangular) significantly increase costs due to bespoke manufacturing requirements.</p>
        <ul>
          <li><strong>Standard rectangular:</strong> Base pricing applies</li>
          <li><strong>Arched tops:</strong> Add 30-50% to base price</li>
          <li><strong>Circular windows:</strong> Add 50-100% to base price</li>
          <li><strong>Unusual shapes:</strong> Priced individually</li>
        </ul>
        
        <h3>2. Glass Type and Specification</h3>
        <p>The glass you choose has a major impact on both cost and performance:</p>
        
        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-3 text-left font-semibold">Glass Type</th>
                <th className="border border-border p-3 text-left font-semibold">Cost Impact</th>
                <th className="border border-border p-3 text-left font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-3">4mm standard float</td>
                <td className="border border-border p-3">Base price</td>
                <td className="border border-border p-3">Basic thermal improvement</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="border border-border p-3">6mm toughened</td>
                <td className="border border-border p-3">+£30-50 per m²</td>
                <td className="border border-border p-3">Safety and durability</td>
              </tr>
              <tr>
                <td className="border border-border p-3">6.4mm acoustic laminate</td>
                <td className="border border-border p-3">+£60-80 per m²</td>
                <td className="border border-border p-3">Noise reduction (roads)</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="border border-border p-3">10.8mm acoustic laminate</td>
                <td className="border border-border p-3">+£100-150 per m²</td>
                <td className="border border-border p-3">Maximum noise reduction</td>
              </tr>
              <tr>
                <td className="border border-border p-3">Low-E coated</td>
                <td className="border border-border p-3">+£40-60 per m²</td>
                <td className="border border-border p-3">Enhanced thermal efficiency</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3>3. Frame Type and Finish</h3>
        <p>Frame options range from budget aluminium to premium heritage profiles:</p>
        <ul>
          <li><strong>Standard white aluminium:</strong> Base price</li>
          <li><strong>Powder-coated colours:</strong> +10-15%</li>
          <li><strong>Wood-effect finishes:</strong> +15-20%</li>
          <li><strong>Slim heritage profiles:</strong> +20-30%</li>
          <li><strong>Timber frames:</strong> +40-60%</li>
        </ul>
        
        <h3>4. Opening Mechanism</h3>
        <p>How the secondary glazing opens affects both cost and functionality:</p>
        <ul>
          <li><strong>Fixed panels (lift-out):</strong> Most affordable option</li>
          <li><strong>Horizontal sliding:</strong> Mid-range pricing</li>
          <li><strong>Vertical sliding:</strong> Higher cost due to balance mechanisms</li>
          <li><strong>Hinged casement:</strong> Similar to vertical sliding</li>
          <li><strong>Tilt and turn:</strong> Premium option</li>
        </ul>
        
        <h2>Cost by London Borough</h2>
        
        <p>Installation costs can vary slightly between London areas due to access, parking, and congestion charges:</p>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-muted/30 p-5 rounded-lg">
            <h4 className="font-semibold text-lg mb-3">Central London</h4>
            <p className="text-sm mb-2">Westminster, Kensington & Chelsea, Camden</p>
            <p className="text-primary font-semibold">+5-10% on base prices</p>
            <p className="text-sm text-muted-foreground">Parking restrictions and access challenges</p>
          </div>
          
          <div className="bg-muted/30 p-5 rounded-lg">
            <h4 className="font-semibold text-lg mb-3">Inner London</h4>
            <p className="text-sm mb-2">Islington, Hackney, Lambeth, Southwark</p>
            <p className="text-primary font-semibold">Standard pricing</p>
            <p className="text-sm text-muted-foreground">Good access, standard installation</p>
          </div>
          
          <div className="bg-muted/30 p-5 rounded-lg">
            <h4 className="font-semibold text-lg mb-3">Outer London</h4>
            <p className="text-sm mb-2">Richmond, Bromley, Croydon, Barnet</p>
            <p className="text-primary font-semibold">Standard to -5%</p>
            <p className="text-sm text-muted-foreground">Easier access, less congestion</p>
          </div>
          
          <div className="bg-muted/30 p-5 rounded-lg">
            <h4 className="font-semibold text-lg mb-3">Home Counties</h4>
            <p className="text-sm mb-2">Surrey, Kent, Essex, Hertfordshire</p>
            <p className="text-primary font-semibold">Standard pricing</p>
            <p className="text-sm text-muted-foreground">Travel costs offset by easier installation</p>
          </div>
        </div>
        
        <h2>Whole-House Cost Examples</h2>
        
        <p>To help you budget, here are typical costs for complete secondary glazing installations:</p>
        
        <div className="space-y-6 my-8">
          <div className="bg-muted/50 p-6 rounded-lg">
            <h4 className="font-semibold text-lg mb-2">2-Bed Victorian Flat (6 windows)</h4>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div>
                <p className="text-sm text-muted-foreground">Budget Option</p>
                <p className="text-xl font-bold text-primary">£2,800 - £3,500</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Standard Option</p>
                <p className="text-xl font-bold text-primary">£3,500 - £4,500</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Premium Acoustic</p>
                <p className="text-xl font-bold text-primary">£5,000 - £6,500</p>
              </div>
            </div>
          </div>
          
          <div className="bg-muted/50 p-6 rounded-lg">
            <h4 className="font-semibold text-lg mb-2">3-Bed Victorian Terrace (10 windows)</h4>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div>
                <p className="text-sm text-muted-foreground">Budget Option</p>
                <p className="text-xl font-bold text-primary">£4,500 - £5,500</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Standard Option</p>
                <p className="text-xl font-bold text-primary">£6,000 - £8,000</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Premium Acoustic</p>
                <p className="text-xl font-bold text-primary">£8,500 - £11,000</p>
              </div>
            </div>
          </div>
          
          <div className="bg-muted/50 p-6 rounded-lg">
            <h4 className="font-semibold text-lg mb-2">4-Bed Georgian Townhouse (15 windows)</h4>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div>
                <p className="text-sm text-muted-foreground">Budget Option</p>
                <p className="text-xl font-bold text-primary">£7,000 - £9,000</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Standard Option</p>
                <p className="text-xl font-bold text-primary">£10,000 - £13,000</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Premium Acoustic</p>
                <p className="text-xl font-bold text-primary">£14,000 - £18,000</p>
              </div>
            </div>
          </div>
        </div>
        
        <h2>Secondary Glazing vs Double Glazing: Cost Comparison</h2>
        
        <p>How does secondary glazing compare to replacing windows with double glazing?</p>
        
        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-3 text-left font-semibold">Factor</th>
                <th className="border border-border p-3 text-left font-semibold">Secondary Glazing</th>
                <th className="border border-border p-3 text-left font-semibold">Double Glazing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-3 font-medium">Average cost per window</td>
                <td className="border border-border p-3 text-primary font-semibold">£500 - £800</td>
                <td className="border border-border p-3">£800 - £1,500</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="border border-border p-3 font-medium">Installation time</td>
                <td className="border border-border p-3 text-primary font-semibold">1-2 hours per window</td>
                <td className="border border-border p-3">Half day per window</td>
              </tr>
              <tr>
                <td className="border border-border p-3 font-medium">Disruption</td>
                <td className="border border-border p-3 text-primary font-semibold">Minimal</td>
                <td className="border border-border p-3">Significant</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="border border-border p-3 font-medium">Planning permission</td>
                <td className="border border-border p-3 text-primary font-semibold">Rarely needed</td>
                <td className="border border-border p-3">Often required</td>
              </tr>
              <tr>
                <td className="border border-border p-3 font-medium">Noise reduction</td>
                <td className="border border-border p-3 text-primary font-semibold">Up to 80%</td>
                <td className="border border-border p-3">Up to 50%</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p><strong>Bottom line:</strong> Secondary glazing costs approximately 40-60% less than double glazing replacement while providing superior noise reduction and requiring no planning permission for most properties.</p>
        
        <h2>How to Save Money on Secondary Glazing</h2>
        
        <ol>
          <li><strong>Get multiple quotes</strong> — Always obtain at least 3 quotes from reputable installers</li>
          <li><strong>Consider fixed panels</strong> — Lift-out panels cost less than sliding mechanisms</li>
          <li><strong>Prioritise key rooms</strong> — Install in bedrooms and living areas first</li>
          <li><strong>Bulk discounts</strong> — Whole-house installations often include 10-15% discounts</li>
          <li><strong>Off-peak installation</strong> — Some companies offer discounts for flexible scheduling</li>
          <li><strong>Standard glass for mild noise</strong> — Only upgrade to acoustic glass where truly needed</li>
        </ol>
        
        <h2>What's Included in the Price?</h2>
        
        <p>A professional secondary glazing quote should include:</p>
        <ul>
          <li><strong>Free home survey</strong> — Accurate measurements and assessment</li>
          <li><strong>Bespoke manufacture</strong> — Units made to exact specifications</li>
          <li><strong>Professional installation</strong> — By trained fitters</li>
          <li><strong>All materials and fixings</strong> — Nothing hidden</li>
          <li><strong>Waste removal</strong> — Packaging and any debris</li>
          <li><strong>Guarantee</strong> — Typically 10 years on frames, 5 years on glass</li>
        </ul>
        
        <h2>Return on Investment</h2>
        
        <p>Secondary glazing provides excellent value through:</p>
        <ul>
          <li><strong>Energy savings:</strong> £200-£400 per year on heating bills</li>
          <li><strong>Property value:</strong> Enhanced EPC rating and improved saleability</li>
          <li><strong>Payback period:</strong> Typically 5-8 years through energy savings alone</li>
          <li><strong>Noise reduction:</strong> Significant quality of life improvement (harder to quantify!)</li>
        </ul>
        
        <h2>Frequently Asked Questions</h2>
        
        <div className="space-y-4 my-8">
          <div className="bg-muted/30 p-4 rounded-lg">
            <p className="font-semibold">Is secondary glazing worth the cost?</p>
            <p className="mt-2">Yes, especially in London where noise pollution is significant and period properties cannot have replacement double glazing. The combination of noise reduction, thermal improvement, and heritage compliance makes it excellent value.</p>
          </div>
          
          <div className="bg-muted/30 p-4 rounded-lg">
            <p className="font-semibold">Can I install secondary glazing myself to save money?</p>
            <p className="mt-2">DIY kits exist, but professional installation is recommended for period properties. Poor installation can reduce effectiveness by 50% or more and may not meet warranty requirements.</p>
          </div>
          
          <div className="bg-muted/30 p-4 rounded-lg">
            <p className="font-semibold">Do I need the most expensive acoustic glass?</p>
            <p className="mt-2">Not always. Standard 6mm glass provides good noise reduction for typical street noise. Premium acoustic glass is best for properties facing main roads, railway lines, or flight paths.</p>
          </div>
          
          <div className="bg-muted/30 p-4 rounded-lg">
            <p className="font-semibold">Are there any grants available?</p>
            <p className="mt-2">Currently, there are limited grants specifically for secondary glazing. However, some local authorities offer energy efficiency grants that may cover part of the cost. Check with your borough council.</p>
          </div>
        </div>
        
        <h2>Get Your Free Quote</h2>
        
        <p>Ready to find out exactly what secondary glazing would cost for your London property? We offer free, no-obligation surveys and quotes with transparent pricing.</p>
        
        <p><strong>Call <a href="tel:02070601572" className="text-primary hover:underline">020 7060 1572</a></strong> or request your free quote online. We'll provide a detailed breakdown of costs specific to your windows and requirements.</p>
      </>
    )
  },
  "planning-permission-secondary-glazing-conservation-areas": {
    title: "Planning Permission for Secondary Glazing in Conservation Areas: Complete Guide 2026",
    excerpt: "Everything you need to know about planning regulations, permitted development rights, and conservation officer requirements for secondary glazing installations.",
    date: "2024-12-20",
    readTime: "15 min read",
    category: "Planning",
    image: "/images/blog/planning-permission-hero.webp",
    content: (
      <>
        <p className="lead">If you're a homeowner in a London conservation area wondering whether you need planning permission for secondary glazing, you're not alone. This is one of the most common concerns we hear from property owners in Westminster, Kensington & Chelsea, Camden, and other heritage-rich boroughs.</p>
        
        <p>The good news? <strong>Secondary glazing typically doesn't require planning permission in conservation areas</strong> because it's installed internally and doesn't alter the external appearance of your property. However, there are important exceptions and considerations you need to understand before proceeding.</p>
        
        <h2>Understanding Conservation Areas in London</h2>
        
        <p>Conservation areas are designated to preserve the special architectural and historic character of particular neighborhoods. London has over 1,000 conservation areas, with Westminster alone containing 75+ designated zones including Belgravia, Mayfair, and Covent Garden.</p>
        
        <p>Unlike listed building protection (which applies to individual properties), conservation area designation focuses on preserving the overall character and appearance of the streetscape. This means any external alterations that could affect the area's visual appeal may require planning permission.</p>
        
        <figure className="my-8">
          <img 
            src="/images/blog/planning-conservation-area.webp" 
            alt="Aerial view of a London conservation area showing period properties and Georgian architecture" 
            className="w-full rounded-lg"
          />
          <figcaption className="text-sm text-muted-foreground mt-2 text-center">Aerial view of a typical London conservation area with Georgian and Victorian architecture</figcaption>
        </figure>
        
        <h2>When Planning Permission IS Required vs NOT Required</h2>
        
        <h3>No Permission Typically Needed</h3>
        
        <p><strong>Single-occupancy houses</strong> in conservation areas generally don't need planning permission for secondary glazing because:</p>
        <ul>
          <li>The installation is entirely internal</li>
          <li>No external appearance changes occur</li>
          <li>The work is fully reversible</li>
          <li>Original windows remain untouched</li>
        </ul>
        
        <h3>Permission May Be Required</h3>
        
        <p><strong>Flats and commercial buildings</strong> might need planning permission, particularly:</p>
        <ul>
          <li>Work affecting the principal elevation (street-facing side)</li>
          <li>Buildings with shared ownership or management companies</li>
          <li>Properties where internal alterations could impact the building's historic fabric</li>
        </ul>
        
        <p><strong>Listed buildings within conservation areas</strong> face dual protection. While conservation area rules might not require permission, Listed Building Consent is typically needed due to the building's individual protected status.</p>
        
        <h2>Article 4 Directions Explained</h2>
        
        <p>Some conservation areas have Article 4 Directions that remove certain permitted development rights. These special designations require planning permission for work that would normally be allowed without consent.</p>
        
        <p>Common Article 4 restrictions include:</p>
        <ul>
          <li>Window replacements or alterations</li>
          <li>Roof changes</li>
          <li>Front boundary treatments</li>
          <li>Sometimes even internal alterations</li>
        </ul>
        
        <p>However, secondary glazing installations are rarely affected by Article 4 Directions since they don't alter the building's external appearance.</p>
        
        <h2>Listed Buildings vs Conservation Areas: Key Differences</h2>
        
        <p>Understanding the distinction between conservation area designation and listed building status is crucial:</p>
        
        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-muted/30 p-5 rounded-lg">
            <h4 className="font-semibold text-lg mb-3">Conservation Areas</h4>
            <ul className="space-y-2 text-sm">
              <li>Protect the character of entire neighborhoods</li>
              <li>Focus on external appearance and streetscape</li>
              <li>Secondary glazing typically permitted without consent</li>
            </ul>
          </div>
          
          <div className="bg-muted/30 p-5 rounded-lg">
            <h4 className="font-semibold text-lg mb-3">Listed Buildings</h4>
            <ul className="space-y-2 text-sm">
              <li>Protect individual properties of special historic interest</li>
              <li>Require Listed Building Consent for most alterations</li>
              <li>Secondary glazing may require consent, especially in sensitive locations</li>
            </ul>
          </div>
          
          <div className="bg-muted/30 p-5 rounded-lg">
            <h4 className="font-semibold text-lg mb-3">Dual Protection</h4>
            <ul className="space-y-2 text-sm">
              <li>Many properties in conservation areas are also listed</li>
              <li>Both conservation area and listed building rules apply</li>
              <li>Listed Building Consent typically required regardless of conservation area status</li>
            </ul>
          </div>
        </div>
        
        <figure className="my-8">
          <img 
            src="/images/blog/planning-sash-window.webp" 
            alt="Traditional sash window with secondary glazing in a period property" 
            className="w-full rounded-lg"
          />
          <figcaption className="text-sm text-muted-foreground mt-2 text-center">Secondary glazing installed on a traditional sash window preserves the original character</figcaption>
        </figure>
        
        <h2>How to Check Your Property's Status</h2>
        
        <p>Before proceeding with secondary glazing installation, verify your property's designation status:</p>
        <ol>
          <li><strong>Check the local planning authority website</strong> (Westminster, Camden, etc.)</li>
          <li><strong>Use the Historic England website</strong> to search for listed building status</li>
          <li><strong>Contact the council's conservation officer</strong> for specific guidance</li>
          <li><strong>Review any Article 4 Direction maps</strong> for your area</li>
        </ol>
        
        <h3>Borough-Specific Considerations</h3>
        
        <div className="space-y-4 my-6">
          <div className="border-l-4 border-primary pl-4">
            <p><strong>Westminster:</strong> With 11,000+ listed buildings and extensive conservation areas, pre-consultation is especially important. Areas like Belgravia and St. James's have strict heritage protection.</p>
          </div>
          
          <div className="border-l-4 border-primary pl-4">
            <p><strong>Kensington & Chelsea:</strong> The borough's 70+ conservation areas include South Kensington and Knightsbridge. Many properties face dual listed building and conservation area protection.</p>
          </div>
          
          <div className="border-l-4 border-primary pl-4">
            <p><strong>Camden:</strong> Areas like Bloomsbury and Regent's Park have specific conservation policies that may affect installation methods.</p>
          </div>
        </div>
        
        <h2>The Application Process (When Required)</h2>
        
        <p>If planning permission or Listed Building Consent is needed:</p>
        
        <div className="bg-muted/50 p-6 rounded-lg my-8">
          <ol className="space-y-4">
            <li><strong>1. Pre-application advice</strong> — Speak with the conservation officer first</li>
            <li><strong>2. Prepare detailed drawings</strong> showing existing windows and proposed secondary glazing</li>
            <li><strong>3. Submit heritage statement</strong> explaining how the proposal preserves character</li>
            <li><strong>4. Include reversibility information</strong> demonstrating the installation's temporary nature</li>
            <li><strong>5. Allow 8-12 weeks</strong> for determination</li>
          </ol>
        </div>
        
        <h2>Why Secondary Glazing Is Usually Approved</h2>
        
        <p>Secondary glazing receives favorable consideration in heritage contexts because:</p>
        <ul>
          <li><strong>Preserves original windows</strong> — No damage to historic fabric</li>
          <li><strong>Fully reversible</strong> — Can be removed without trace</li>
          <li><strong>Improves building performance</strong> — Supports conservation through better thermal efficiency</li>
          <li><strong>Reduces condensation</strong> — Protects original window frames from moisture damage</li>
          <li><strong>Heritage-sensitive approach</strong> — Maintains authentic external appearance</li>
        </ul>
        
        <h2>Real Case Studies from London</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-muted/30 p-5 rounded-lg">
            <h4 className="font-semibold mb-2">Westminster Georgian Townhouse</h4>
            <p>A Grade II listed Georgian property in Pimlico required Listed Building Consent for acoustic secondary glazing. The application emphasized the reversible nature and heritage benefits, receiving approval within 10 weeks.</p>
          </div>
          
          <div className="bg-muted/30 p-5 rounded-lg">
            <h4 className="font-semibold mb-2">Kensington Conservation Area Flat</h4>
            <p>A mansion flat in South Kensington Conservation Area installed secondary glazing without planning permission, as the work didn't affect the principal elevation and remained entirely internal.</p>
          </div>
          
          <div className="bg-muted/30 p-5 rounded-lg">
            <h4 className="font-semibold mb-2">Camden Victorian Terrace</h4>
            <p>A Victorian terrace in Bloomsbury Conservation Area required consultation due to Article 4 Direction restrictions, but secondary glazing was approved as it didn't trigger the specific limitations.</p>
          </div>
        </div>
        
        <figure className="my-8">
          <img 
            src="/images/blog/planning-interior-room.webp" 
            alt="Elegant period living room with tall sash windows featuring secondary glazing" 
            className="w-full rounded-lg"
          />
          <figcaption className="text-sm text-muted-foreground mt-2 text-center">A beautifully preserved period room with secondary glazing maintaining the original window character</figcaption>
        </figure>
        
        <h2>Recent Regulatory Changes (2024)</h2>
        
        <p>The May 2024 General Permitted Development Order introduced changes to window alteration rights in conservation areas. However, these primarily affect window replacements rather than secondary glazing installations.</p>
        
        <p>Key updates include:</p>
        <ul>
          <li>Modified permitted development rights for like-for-like window replacements</li>
          <li>Simplified application processes for combined works</li>
          <li>Continued protection for listed buildings requiring specific consent</li>
        </ul>
        
        <h2>Common Mistakes to Avoid</h2>
        
        <ol>
          <li><strong>Assuming no permission needed</strong> — Always check your specific property status</li>
          <li><strong>Proceeding without consultation</strong> — Pre-application advice prevents complications</li>
          <li><strong>Ignoring Article 4 Directions</strong> — Check for additional restrictions in your area</li>
          <li><strong>Choosing inappropriate designs</strong> — Ensure secondary glazing suits the property's character</li>
          <li><strong>Skipping heritage considerations</strong> — Work must respect the building's historic value</li>
        </ol>
        
        <h2>Professional Installation Considerations</h2>
        
        <p>Choose installers experienced with heritage properties who understand:</p>
        <ul>
          <li>Conservation area requirements</li>
          <li>Listed building sensitivities</li>
          <li>Appropriate materials and techniques</li>
          <li>Reversibility requirements</li>
          <li>Local authority expectations</li>
        </ul>
        
        <h2>Frequently Asked Questions</h2>
        
        <div className="space-y-4 my-8">
          <div className="bg-muted/30 p-4 rounded-lg">
            <p className="font-semibold">Do I need permission for secondary glazing in any conservation area?</p>
            <p className="mt-2">Not typically for houses, but flats and listed buildings may require consent. Always check first.</p>
          </div>
          
          <div className="bg-muted/30 p-4 rounded-lg">
            <p className="font-semibold">What about Article 4 Directions?</p>
            <p className="mt-2">These rarely affect secondary glazing since it doesn't change external appearance, but verify your area's specific restrictions.</p>
          </div>
          
          <div className="bg-muted/30 p-4 rounded-lg">
            <p className="font-semibold">How long does Listed Building Consent take?</p>
            <p className="mt-2">Usually 8-12 weeks, though pre-application advice can speed the process.</p>
          </div>
          
          <div className="bg-muted/30 p-4 rounded-lg">
            <p className="font-semibold">Can secondary glazing be refused?</p>
            <p className="mt-2">Rarely, as it preserves original windows while improving performance. Refusals typically relate to inappropriate design rather than the concept itself.</p>
          </div>
          
          <div className="bg-muted/30 p-4 rounded-lg">
            <p className="font-semibold">Do building regulations apply?</p>
            <p className="mt-2">Secondary glazing installations typically fall under minor works, but check with Building Control if structural changes are needed.</p>
          </div>
        </div>
        
        <h2>Getting Started: Your Next Steps</h2>
        
        <p>The key to successful secondary glazing installation in conservation areas is early consultation and professional guidance. While planning permission is usually unnecessary, understanding your property's specific status prevents delays and complications.</p>
        
        <p><strong>Ready to explore secondary glazing for your heritage property?</strong> Our team specializes in conservation area and listed building installations across London. We provide free planning advice consultations and can guide you through any consent requirements specific to your property.</p>
        
        <p>Contact us today for expert guidance tailored to your conservation area property. With over 15 years of heritage glazing experience, we'll ensure your installation respects your building's character while delivering the thermal and acoustic performance you need.</p>
        
        <p><strong>Call <a href="tel:02070601572" className="text-primary hover:underline">020 7060 1572</a></strong> or request your free consultation to discuss planning requirements for your specific property and location.</p>
      </>
    )
  },
  "secondary-glazing-listed-buildings-guide": {
    title: "Complete Guide to Secondary Glazing for Listed Buildings",
    excerpt: "Everything you need to know about installing secondary glazing in Grade I and Grade II listed properties while maintaining heritage compliance.",
    date: "2024-12-15",
    readTime: "8 min read",
    category: "Heritage",
    image: "/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
    content: (
      <>
        <p className="lead">Installing secondary glazing in a listed building requires careful consideration of heritage requirements and planning regulations. This comprehensive guide walks you through everything you need to know.</p>
        
        <h2>Understanding Listed Building Classifications</h2>
        <p>In England, listed buildings are classified into three grades:</p>
        <ul>
          <li><strong>Grade I:</strong> Buildings of exceptional interest (only 2.5% of listed buildings)</li>
          <li><strong>Grade II*:</strong> Particularly important buildings of more than special interest</li>
          <li><strong>Grade II:</strong> Buildings of special interest, warranting every effort to preserve them</li>
        </ul>
        
        <h2>Why Secondary Glazing Is Ideal for Listed Buildings</h2>
        <p>Secondary glazing is often the preferred solution for listed buildings because:</p>
        <ul>
          <li>It's fully reversible and non-invasive</li>
          <li>Original windows remain untouched and preserved</li>
          <li>It doesn't alter the external appearance of the property</li>
          <li>Listed Building Consent is rarely required for internal works</li>
        </ul>
        
        <h2>Planning and Consent Requirements</h2>
        <p>While secondary glazing typically doesn't require Listed Building Consent because it's an internal addition, we always recommend:</p>
        <ul>
          <li>Consulting with your local conservation officer</li>
          <li>Documenting the existing windows before installation</li>
          <li>Using sympathetic frame profiles that complement the period</li>
          <li>Ensuring the secondary glazing is easily removable</li>
        </ul>
        
        <h2>Best Secondary Glazing Options for Heritage Properties</h2>
        <p>For listed buildings, we recommend:</p>
        <ul>
          <li><strong>Vertical sliding units:</strong> Perfect for sash windows, maintaining the original operating style</li>
          <li><strong>Lift-out panels:</strong> Completely removable for maintenance and cleaning</li>
          <li><strong>Hinged casements:</strong> Ideal for casement-style original windows</li>
        </ul>
        
        <h2>Performance Benefits</h2>
        <p>Secondary glazing in listed buildings can achieve:</p>
        <ul>
          <li>Up to 80% reduction in external noise</li>
          <li>65% improvement in thermal insulation</li>
          <li>Significant reduction in draughts</li>
          <li>Protection of original window fabric</li>
        </ul>
        
        <h2>Get Expert Advice</h2>
        <p>Our team has extensive experience working with Grade I and Grade II listed buildings across London. We understand the unique requirements and can guide you through the entire process.</p>
      </>
    )
  },
  "noise-reduction-london-homes": {
    title: "How Secondary Glazing Reduces Noise in London Homes",
    excerpt: "Discover how secondary glazing can reduce external noise by up to 80% and create a peaceful living environment in busy London locations.",
    date: "2024-12-10",
    readTime: "6 min read",
    category: "Noise Reduction",
    image: "/lovable-uploads/675b8861-030a-48d3-adbe-f9706ec54947.png",
    content: (
      <>
        <p className="lead">Living in London means dealing with constant noise from traffic, construction, and urban life. Secondary glazing offers an effective solution to create a peaceful sanctuary in your home.</p>
        
        <h2>Understanding Sound and Decibels</h2>
        <p>Sound is measured in decibels (dB). Here's what different levels mean:</p>
        <ul>
          <li><strong>30 dB:</strong> Quiet library</li>
          <li><strong>60 dB:</strong> Normal conversation</li>
          <li><strong>70 dB:</strong> Busy street traffic</li>
          <li><strong>85 dB:</strong> Heavy traffic or construction</li>
        </ul>
        
        <h2>How Secondary Glazing Reduces Noise</h2>
        <p>Secondary glazing works by creating an air gap between the original window and the secondary unit. This gap acts as a buffer zone that significantly reduces sound transmission.</p>
        <p>The key factors affecting noise reduction are:</p>
        <ul>
          <li><strong>Air gap size:</strong> Larger gaps (100mm+) provide better acoustic performance</li>
          <li><strong>Glass thickness:</strong> Thicker or laminated glass absorbs more sound energy</li>
          <li><strong>Frame sealing:</strong> Airtight seals prevent sound leakage</li>
          <li><strong>Glass mass:</strong> Heavier glass blocks more sound</li>
        </ul>
        
        <h2>Noise Reduction Results</h2>
        <p>With properly installed secondary glazing, you can expect:</p>
        <ul>
          <li><strong>Standard installation:</strong> 35-40 dB reduction</li>
          <li><strong>Acoustic-rated glass:</strong> 45-50 dB reduction</li>
          <li><strong>Maximum specification:</strong> Up to 54 dB reduction</li>
        </ul>
        
        <h2>Best Solutions for Different Noise Sources</h2>
        <p>Different noise problems require different solutions:</p>
        <ul>
          <li><strong>Road traffic:</strong> 10mm+ laminated acoustic glass</li>
          <li><strong>Aircraft noise:</strong> Maximum air gap with heavy glass</li>
          <li><strong>Railway noise:</strong> Laminated glass with vibration-dampening seals</li>
          <li><strong>Nightlife/bars:</strong> Triple-layer acoustic glazing</li>
        </ul>
        
        <h2>Real London Case Studies</h2>
        <p>We've helped hundreds of London residents escape noise pollution, from properties near Heathrow to homes on busy arterial roads in Central London.</p>
      </>
    )
  },
  "thermal-efficiency-benefits": {
    title: "The Thermal Efficiency Benefits of Secondary Glazing",
    excerpt: "Learn how secondary glazing improves your home's thermal insulation, reduces energy bills, and increases comfort throughout the year.",
    date: "2024-12-05",
    readTime: "5 min read",
    category: "Energy Efficiency",
    image: "/images/blog/thermal-efficiency-hero.webp",
    content: (
      <>
        <p className="lead">With rising energy costs, improving your home's thermal efficiency has never been more important. Secondary glazing offers significant energy savings while preserving your original windows.</p>
        
        <h2>Understanding Heat Loss Through Windows</h2>
        <p>Windows are responsible for approximately 20-30% of heat loss in a typical home. Single-glazed windows, common in period properties, are particularly inefficient.</p>
        
        <h2>How Secondary Glazing Improves Thermal Performance</h2>
        <p>Secondary glazing creates a trapped air layer that acts as insulation. This layer:</p>
        <ul>
          <li>Reduces conductive heat transfer</li>
          <li>Minimises convective heat loss</li>
          <li>Creates a barrier against cold draughts</li>
          <li>Helps maintain consistent room temperatures</li>
        </ul>
        
        <h2>U-Value Improvements</h2>
        <p>U-values measure heat loss - lower is better:</p>
        <ul>
          <li><strong>Single glazing:</strong> 5.0-5.8 W/m²K</li>
          <li><strong>With secondary glazing:</strong> 1.8-2.0 W/m²K</li>
          <li><strong>With Low-E secondary glazing:</strong> 1.2-1.6 W/m²K</li>
        </ul>
        
        <h2>Energy Bill Savings</h2>
        <p>Our customers typically see:</p>
        <ul>
          <li>10-15% reduction in annual heating bills</li>
          <li>Payback period of 5-7 years</li>
          <li>Improved EPC ratings for property sales/rentals</li>
        </ul>
        
        <h2>Additional Benefits</h2>
        <p>Beyond thermal efficiency, you'll also experience:</p>
        <ul>
          <li>Reduced condensation on original windows</li>
          <li>Elimination of cold spots near windows</li>
          <li>More even heating throughout rooms</li>
          <li>Reduced carbon footprint</li>
        </ul>
      </>
    )
  },
  "conservation-area-window-solutions": {
    title: "Window Solutions for Conservation Areas",
    excerpt: "Understanding the planning requirements and best practices for upgrading windows in conservation areas across London.",
    date: "2024-11-28",
    readTime: "7 min read",
    category: "Conservation",
    image: "/lovable-uploads/b22e5c1c-3ce0-40fa-a0e6-479e72daed1b.png",
    content: (
      <>
        <p className="lead">Conservation areas in London have specific requirements for window alterations. Secondary glazing provides an excellent solution that meets these requirements while improving comfort.</p>
        
        <h2>What Is a Conservation Area?</h2>
        <p>Conservation areas are designated zones where special attention is paid to protecting and enhancing the architectural or historic character of the area.</p>
        
        <h2>Planning Restrictions in Conservation Areas</h2>
        <p>In conservation areas, you typically need planning permission to:</p>
        <ul>
          <li>Replace windows with different styles</li>
          <li>Change window materials (e.g., timber to uPVC)</li>
          <li>Alter the external appearance of windows</li>
        </ul>
        
        <h2>Why Secondary Glazing Works in Conservation Areas</h2>
        <p>Secondary glazing is ideal because:</p>
        <ul>
          <li>It's installed internally, preserving external appearance</li>
          <li>No planning permission is usually required</li>
          <li>Original windows remain intact</li>
          <li>It's completely reversible</li>
        </ul>
        
        <h2>London Conservation Areas We Serve</h2>
        <p>We work extensively in conservation areas across London, including:</p>
        <ul>
          <li>Belgravia and Mayfair</li>
          <li>Hampstead and Highgate</li>
          <li>Richmond and Barnes</li>
          <li>Greenwich and Blackheath</li>
          <li>Holland Park and Notting Hill</li>
        </ul>
      </>
    )
  },
  "sash-window-secondary-glazing-options": {
    title: "Secondary Glazing Options for Sash Windows",
    excerpt: "Explore the different secondary glazing solutions available for traditional sash windows, from vertical sliders to lift-out panels.",
    date: "2024-11-20",
    readTime: "6 min read",
    category: "Window Types",
    image: "/lovable-uploads/c7e8e6e5-c8f0-4b15-9cc5-25481ef35ee8.png",
    content: (
      <>
        <p className="lead">Sash windows are a defining feature of period London properties. Choosing the right secondary glazing option ensures you maintain their character while improving performance.</p>
        
        <h2>Vertical Sliding Secondary Glazing</h2>
        <p>The most popular option for sash windows, vertical sliders:</p>
        <ul>
          <li>Mirror the operation of original sash windows</li>
          <li>Allow full access to the original window for cleaning</li>
          <li>Feature spring or spiral balances for smooth operation</li>
          <li>Available in slim-profile aluminium frames</li>
        </ul>
        
        <h2>Lift-Out Panels</h2>
        <p>For windows that don't need regular opening:</p>
        <ul>
          <li>Simple installation and removal</li>
          <li>Most cost-effective option</li>
          <li>Excellent acoustic and thermal performance</li>
          <li>Minimal frame profile for unobtrusive appearance</li>
        </ul>
        
        <h2>Horizontal Sliders</h2>
        <p>An alternative for wide sash windows:</p>
        <ul>
          <li>Two or more sliding panels</li>
          <li>Easy access for ventilation</li>
          <li>Good for bay windows with sash windows</li>
        </ul>
        
        <h2>Choosing the Right Option</h2>
        <p>Consider these factors when selecting secondary glazing for sash windows:</p>
        <ul>
          <li>How often you open the windows</li>
          <li>Available reveal depth</li>
          <li>Primary concern (noise, heat, or both)</li>
          <li>Budget considerations</li>
        </ul>
      </>
    )
  },
  "secondary-glazing-vs-double-glazing": {
    title: "Secondary Glazing vs Double Glazing: Which is Best for Listed Buildings and Period Properties?",
    excerpt: "A comprehensive comparison of secondary glazing and double glazing for Victorian, Georgian, and Edwardian properties. Discover which solution offers the best performance, compliance, and value.",
    date: "2024-11-15",
    readTime: "12 min read",
    category: "Guides",
    image: "/images/blog/secondary-glazing-vs-double-glazing.webp",
    content: (
      <>
        <p className="lead">If you own a Victorian terrace, Georgian townhouse, or any period property, you've likely faced this dilemma: how do you improve energy efficiency and reduce noise without compromising your home's historic character? The choice between secondary glazing and double glazing isn't just about performance — it's about preservation, planning permission, and practicality.</p>
        
        <p><strong>For listed buildings and conservation areas, secondary glazing is almost always the superior choice.</strong> Here's why, backed by real data and expert insights.</p>
        
        <h2>What is Secondary Glazing?</h2>
        <p>Secondary glazing involves adding a second pane of glass to the interior side of your existing windows, creating an insulating air gap typically between 100-150mm. This system preserves your original windows completely while providing modern thermal and acoustic benefits.</p>
        <p>The key advantage? <strong>It's practically invisible from the street</strong>, maintaining your property's authentic appearance while delivering measurable performance improvements.</p>
        
        <h2>What is Double Glazing?</h2>
        <p>Double glazing replaces your entire window with two panes of glass separated by a 12-20mm cavity, usually filled with argon gas. While highly effective for modern properties, it fundamentally alters the window's appearance and structure.</p>
        
        <h2>Head-to-Head Performance Comparison</h2>
        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-3 text-left font-semibold">Factor</th>
                <th className="border border-border p-3 text-left font-semibold">Secondary Glazing</th>
                <th className="border border-border p-3 text-left font-semibold">Double Glazing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-3 font-medium">Heat Loss Reduction</td>
                <td className="border border-border p-3">65-70%</td>
                <td className="border border-border p-3">90%</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="border border-border p-3 font-medium">Noise Reduction</td>
                <td className="border border-border p-3 text-primary font-semibold">Up to 80%</td>
                <td className="border border-border p-3">~50%</td>
              </tr>
              <tr>
                <td className="border border-border p-3 font-medium">Cost</td>
                <td className="border border-border p-3 text-primary font-semibold">£350-£1,200 per window</td>
                <td className="border border-border p-3">£700-£2,400 per window</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="border border-border p-3 font-medium">Planning Permission</td>
                <td className="border border-border p-3 text-primary font-semibold">Not required (even listed buildings)</td>
                <td className="border border-border p-3">Usually required for heritage properties</td>
              </tr>
              <tr>
                <td className="border border-border p-3 font-medium">Installation Time</td>
                <td className="border border-border p-3">1-2 hours per window</td>
                <td className="border border-border p-3">Full day per window + removal</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="border border-border p-3 font-medium">Reversibility</td>
                <td className="border border-border p-3 text-primary font-semibold">100% reversible</td>
                <td className="border border-border p-3">Permanent alteration</td>
              </tr>
              <tr>
                <td className="border border-border p-3 font-medium">Payback Period</td>
                <td className="border border-border p-3 text-primary font-semibold">3-8 years</td>
                <td className="border border-border p-3">15-25 years</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="border border-border p-3 font-medium">Impact on Original Windows</td>
                <td className="border border-border p-3 text-primary font-semibold">Zero - preserves completely</td>
                <td className="border border-border p-3">Total replacement</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h2>Why Secondary Glazing Wins for Heritage Properties</h2>
        
        <h3>1. No Planning Permission Headaches</h3>
        <p><strong>The biggest advantage: secondary glazing doesn't require planning permission</strong>, even on Grade I, II*, or II listed buildings. Conservation officers consistently approve secondary glazing because it doesn't alter the external appearance.</p>
        <p>Double glazing, however, typically requires listed building consent and conservation area approval — a process that can take months and often results in rejection.</p>
        
        <h3>2. Superior Acoustic Performance</h3>
        <p>Here's where secondary glazing actually outperforms double glazing: <strong>noise reduction</strong>. The 100-150mm air gap in secondary glazing systems provides superior acoustic insulation compared to double glazing's narrow 12-20mm cavity.</p>
        <ul>
          <li><strong>Secondary glazing</strong>: Up to 80% noise reduction</li>
          <li><strong>Double glazing</strong>: Approximately 50% noise reduction</li>
        </ul>
        <p>For London properties facing busy roads, railway lines, or flight paths, this difference is significant.</p>
        
        <h3>3. Preserves Historic Character</h3>
        <p>Secondary glazing maintains the exact appearance of your original windows from the street. The slim frames are barely visible from inside, and completely invisible externally. This preservation of authentic character is crucial for:</p>
        <ul>
          <li>Listed building compliance</li>
          <li>Conservation area requirements</li>
          <li>Property value protection</li>
          <li>Historic integrity</li>
        </ul>
        
        <h3>4. Cost-Effective Solution</h3>
        <p>Secondary glazing costs approximately <strong>half the price of double glazing</strong>, with potential savings of up to 80% compared to full window replacement. Typical costs:</p>
        <ul>
          <li><strong>Secondary glazing</strong>: £350-£1,200 per window</li>
          <li><strong>Double glazing replacement</strong>: £700-£2,400 per window</li>
        </ul>
        <p>With energy savings of £200-£400 annually on heating bills, secondary glazing typically pays for itself within 3-8 years.</p>
        
        <h2>When Double Glazing Makes Sense</h2>
        <p>Double glazing is the better choice for:</p>
        <ul>
          <li><strong>Modern properties</strong> (post-1970) with no heritage restrictions</li>
          <li><strong>New builds</strong> where there are no existing windows to preserve</li>
          <li><strong>Properties with already-replaced windows</strong> that have no historic value</li>
          <li><strong>Long-term installations</strong> where the 20-45 year lifespan provides better value</li>
        </ul>
        <p>However, these scenarios rarely apply to Victorian, Georgian, or Edwardian properties where preservation is key.</p>
        
        <h2>Real-World Case Study: Victorian Terrace in Westminster</h2>
        <div className="bg-muted/50 p-6 rounded-lg my-6">
          <p className="font-semibold mb-4">A Grade II listed Victorian terrace in Westminster installed secondary glazing throughout the property:</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-destructive mb-2">Before:</h4>
              <ul className="space-y-1">
                <li>Annual heating bills: £2,400</li>
                <li>External noise levels: 78dB (main road traffic)</li>
                <li>Planning restrictions: No external alterations permitted</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">After Secondary Glazing:</h4>
              <ul className="space-y-1">
                <li>Annual heating bills: £1,650 (£750 saving)</li>
                <li>Internal noise levels: 52dB (70% reduction)</li>
                <li>Installation time: 2 days for entire property</li>
                <li>Planning permission: Not required</li>
              </ul>
            </div>
          </div>
          
          <p className="mt-4 font-semibold text-primary">Result: The installation paid for itself in 4.2 years while preserving the building's Grade II listing status.</p>
        </div>
        
        <h2>The Heritage Property Advantage</h2>
        <p>For period property owners, secondary glazing provides:</p>
        <ol>
          <li><strong>Immediate compliance</strong> with conservation requirements</li>
          <li><strong>Faster installation</strong> with minimal disruption</li>
          <li><strong>Reversible improvements</strong> that don't affect property insurability</li>
          <li><strong>Enhanced comfort</strong> without compromising authenticity</li>
        </ol>
        <p>Conservation officers across London consistently recommend secondary glazing for listed buildings because it achieves meaningful improvements without compromising the original fabric.</p>
        
        <h2>Frequently Asked Questions</h2>
        
        <div className="space-y-4 my-6">
          <div className="bg-muted/30 p-4 rounded-lg">
            <p className="font-semibold">Q: Will secondary glazing affect my property's value?</p>
            <p className="mt-2">A: Secondary glazing typically increases property value by improving energy efficiency while preserving historic character — both highly valued by period property buyers.</p>
          </div>
          
          <div className="bg-muted/30 p-4 rounded-lg">
            <p className="font-semibold">Q: How long does secondary glazing last?</p>
            <p className="mt-2">A: Quality secondary glazing systems last 20-30 years with minimal maintenance, comparable to double glazing lifespan.</p>
          </div>
          
          <div className="bg-muted/30 p-4 rounded-lg">
            <p className="font-semibold">Q: Can I install secondary glazing myself?</p>
            <p className="mt-2">A: While possible for standard windows, heritage properties often have unique dimensions and requirements that benefit from professional assessment and installation.</p>
          </div>
          
          <div className="bg-muted/30 p-4 rounded-lg">
            <p className="font-semibold">Q: What about condensation between the panes?</p>
            <p className="mt-2">A: Professional secondary glazing systems include ventilation channels that prevent condensation buildup when properly installed.</p>
          </div>
        </div>
        
        <h2>Making the Right Choice</h2>
        <p>For listed buildings and period properties, the choice is clear: <strong>secondary glazing provides the optimal balance of performance, compliance, and preservation</strong>. While double glazing offers superior thermal performance, the regulatory hurdles and permanent alterations make it unsuitable for most heritage properties.</p>
        
        <p>Secondary glazing delivers:</p>
        <ul>
          <li>65-70% thermal improvement</li>
          <li>Up to 80% noise reduction</li>
          <li>100% planning compliance</li>
          <li>Complete reversibility</li>
          <li>Half the cost of replacement</li>
        </ul>
        
        <p>The question isn't whether secondary glazing performs as well as double glazing — it's whether you can achieve double glazing legally and appropriately for your heritage property. In most cases, you can't.</p>
        
        <h2>Ready to Upgrade Your Period Property?</h2>
        <p>If you own a listed building or period property in London, secondary glazing offers the perfect solution for modern comfort without compromising historic integrity. Our heritage property specialists provide free consultations, planning guidance, and bespoke solutions for Victorian, Georgian, and Edwardian windows.</p>
      </>
    )
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !blogPostsContent[slug]) {
    return <Navigate to="/blog" replace />;
  }
  
  const post = blogPostsContent[slug];
  const slugs = Object.keys(blogPostsContent);
  const currentIndex = slugs.indexOf(slug);
  const prevSlug = currentIndex > 0 ? slugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < slugs.length - 1 ? slugs[currentIndex + 1] : null;
  
  return (
    <>
      <EnhancedSEO
        title={`${post.title} | Secondary Glazing Specialist Blog`}
        description={post.excerpt}
        canonicalPath={`/blog/${slug}`}
        type="article"
        keywords={[post.category.toLowerCase(), "secondary glazing", "london windows"]}
      />
      
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "datePublished": post.date,
            "dateModified": post.date,
            "author": {
              "@type": "Organization",
              "name": "Secondary Glazing Specialist"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Secondary Glazing Specialist",
              "logo": {
                "@type": "ImageObject",
                "url": "https://secondaryglazingspecialist.com/lovable-uploads/b39446b8-e7b5-4000-ac4b-a7a691a5bb14.png"
              }
            },
            "image": `https://secondaryglazingspecialist.com${post.image}`,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://secondaryglazingspecialist.com/blog/${slug}`
            }
          })}
        </script>
      </Helmet>
      
      <MainNav />
      
      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-3xl">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link to="/blog" className="text-primary hover:underline flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </nav>
          
          {/* Header */}
          <header className="mb-8">
            <span className="text-sm font-medium text-primary mb-2 block">{post.category}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </header>
          
          {/* Featured Image */}
          <div className="aspect-video mb-8 rounded-lg overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="max-w-none space-y-6 text-lg leading-8 text-foreground/90 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-14 [&>h2]:mb-6 [&>h2]:text-foreground [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-10 [&>h3]:mb-4 [&>h3]:text-foreground [&>p]:mb-6 [&>ul]:my-6 [&>ul]:space-y-3 [&>ul]:pl-6 [&>ul]:list-disc [&>ol]:my-6 [&>ol]:space-y-3 [&>ol]:pl-6 [&>ol]:list-decimal [&>ul>li]:leading-8 [&>ol>li]:leading-8 [&_.lead]:text-xl [&_.lead]:leading-9 [&_.lead]:mb-8 [&_.lead]:text-muted-foreground">
            {post.content}
          </div>
          
          {/* Navigation */}
          <nav className="mt-12 pt-8 border-t border-border flex justify-between gap-4">
            {prevSlug ? (
              <Link to={`/blog/${prevSlug}`}>
                <Button variant="outline" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Previous Article
                </Button>
              </Link>
            ) : <div />}
            {nextSlug ? (
              <Link to={`/blog/${nextSlug}`}>
                <Button variant="outline" className="flex items-center gap-2">
                  Next Article
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            ) : <div />}
          </nav>
          
          {/* CTA */}
          <div className="mt-12 text-center bg-secondary/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Need Expert Advice?
            </h2>
            <p className="text-muted-foreground mb-6">
              Our specialists are ready to help you find the perfect secondary glazing solution.
            </p>
            <Link to="/quote-request">
              <Button size="lg">Get Free Quote</Button>
            </Link>
          </div>
        </article>
      </main>
      
      <Footer />
    </>
  );
};

export default BlogPost;
