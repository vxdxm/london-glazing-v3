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
    readTime: "18 min read",
    category: "Pricing",
    image: "/images/blog/cost-guide-hero.webp",
    content: (
      <>
        <p className="lead">If you're considering secondary glazing for your London property, the first question on your mind is likely: "How much will this cost me?" Whether you're dealing with traffic noise on Marylebone Road, trying to improve energy efficiency in a Victorian terrace, or need planning-compliant solutions for a listed building in Westminster, understanding secondary glazing costs is crucial for making an informed decision.</p>
        
        <h2>Quick Answer: Secondary Glazing Costs in London</h2>
        
        <p>Here's what you can expect to pay for professional secondary glazing installation in London in 2026:</p>
        
        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-muted/30 p-5 rounded-lg text-center">
            <h4 className="font-semibold text-lg mb-2">Standard Windows</h4>
            <p className="text-2xl font-bold text-primary">£350-£450</p>
            <p className="text-sm text-muted-foreground">per window (including installation)</p>
          </div>
          
          <div className="bg-muted/30 p-5 rounded-lg text-center">
            <h4 className="font-semibold text-lg mb-2">Heritage & Bespoke</h4>
            <p className="text-2xl font-bold text-primary">£500-£1,200</p>
            <p className="text-sm text-muted-foreground">per window</p>
          </div>
          
          <div className="bg-muted/30 p-5 rounded-lg text-center">
            <h4 className="font-semibold text-lg mb-2">Acoustic Specialist</h4>
            <p className="text-2xl font-bold text-primary">£600-£1,400</p>
            <p className="text-sm text-muted-foreground">per window</p>
          </div>
        </div>
        
        <p>These prices reflect London's premium market, specialist expertise requirements for heritage properties, and higher labour costs compared to other UK regions.</p>
        
        <h2>What Affects Secondary Glazing Costs?</h2>
        
        <h3>Window Size & Dimensions</h3>
        
        <p>Window size is the primary cost driver. Here's how sizing affects pricing:</p>
        
        <img 
          src="/images/blog/cost-window-size-type.webp" 
          alt="Secondary Glazing Cost Guide showing window size and type pricing for London 2026" 
          className="w-full rounded-lg my-8"
        />
        
        <div className="space-y-4 my-6">
          <div className="border-l-4 border-primary pl-4">
            <p><strong>Small Windows (up to 1m²): £350-£450</strong></p>
            <p className="text-sm text-muted-foreground">Typical examples: Small bathroom or kitchen windows, standard cottage windows</p>
          </div>
          
          <div className="border-l-4 border-primary pl-4">
            <p><strong>Medium Windows (1-2m²): £450-£700</strong></p>
            <p className="text-sm text-muted-foreground">Standard Victorian sash windows, modern casement windows, bedroom windows</p>
          </div>
          
          <div className="border-l-4 border-primary pl-4">
            <p><strong>Large Windows (2-4m²): £700-£1,200</strong></p>
            <p className="text-sm text-muted-foreground">Georgian drawing room windows, large living room windows, French doors</p>
          </div>
          
          <div className="border-l-4 border-primary pl-4">
            <p><strong>Oversized Windows (4m²+): £1,200-£2,000+</strong></p>
            <p className="text-sm text-muted-foreground">Picture windows, commercial-sized openings, full-height Georgian windows</p>
          </div>
        </div>
        
        <h3>Window Type & Style</h3>
        
        <p>Different window styles require specialized secondary glazing approaches:</p>
        
        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-3 text-left font-semibold">Window Type</th>
                <th className="border border-border p-3 text-left font-semibold">Price Range</th>
                <th className="border border-border p-3 text-left font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-3 font-medium">Victorian Sash Windows</td>
                <td className="border border-border p-3">£450-£700</td>
                <td className="border border-border p-3 text-sm">Most common in London, require vertical sliding or lift-out systems</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="border border-border p-3 font-medium">Georgian Multi-Pane Sash</td>
                <td className="border border-border p-3">£600-£900</td>
                <td className="border border-border p-3 text-sm">Complex glazing bar patterns, heritage requirements</td>
              </tr>
              <tr>
                <td className="border border-border p-3 font-medium">Casement Windows</td>
                <td className="border border-border p-3">£350-£500</td>
                <td className="border border-border p-3 text-sm">Simpler installation, various opening options</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="border border-border p-3 font-medium">Bay Windows</td>
                <td className="border border-border p-3">£1,200-£2,500</td>
                <td className="border border-border p-3 text-sm">Requires 3-5 separate panels, complex installation</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3>Glass Specification Impact</h3>
        
        <p>The type of glass significantly affects both performance and cost:</p>
        
        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-3 text-left font-semibold">Glass Type</th>
                <th className="border border-border p-3 text-left font-semibold">Cost Impact</th>
                <th className="border border-border p-3 text-left font-semibold">Performance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-3">4mm Standard Float Glass</td>
                <td className="border border-border p-3">Base price</td>
                <td className="border border-border p-3 text-sm">20-25dB noise reduction, basic thermal</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="border border-border p-3">6.4mm Acoustic Laminate</td>
                <td className="border border-border p-3">+£50-£80/window</td>
                <td className="border border-border p-3 text-sm">30-35dB, suitable for moderate traffic</td>
              </tr>
              <tr>
                <td className="border border-border p-3">6.8mm Acoustic Laminate</td>
                <td className="border border-border p-3">+£80-£120/window</td>
                <td className="border border-border p-3 text-sm">35-40dB, ideal for busy roads</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="border border-border p-3">10.8mm Acoustic Laminate</td>
                <td className="border border-border p-3">+£150-£200/window</td>
                <td className="border border-border p-3 text-sm">40-45dB, airports/major roads</td>
              </tr>
              <tr>
                <td className="border border-border p-3">Low-E Thermal Glass</td>
                <td className="border border-border p-3">+£40-£70/window</td>
                <td className="border border-border p-3 text-sm">Reduces heat loss by up to 70%</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3>Frame Types & Operation</h3>
        
        <ul>
          <li><strong>Fixed Panels:</strong> Most economical — no opening mechanism, suitable where ventilation not required</li>
          <li><strong>Horizontal Sliding:</strong> Standard pricing — most popular option, easy daily use</li>
          <li><strong>Vertical Sliding:</strong> +10-15% cost premium — essential for sash windows, maintains period appearance</li>
          <li><strong>Hinged Opening:</strong> +15-25% cost premium — full opening access, required for emergency egress</li>
          <li><strong>Lift-Out Panels:</strong> +20-30% cost premium — seasonal removal option, popular for listed buildings</li>
        </ul>
        
        <h2>Installation Complexity Factors</h2>
        
        <h3>Property Access</h3>
        
        <ul>
          <li><strong>Ground Floor Installation:</strong> Standard pricing — easy access for materials and tools</li>
          <li><strong>Upper Floor Installation:</strong> +£50-£100 per window — ladder or scaffold access required</li>
          <li><strong>Listed Building Requirements:</strong> +20-50% premium — specialist heritage expertise, reversible fixing methods</li>
        </ul>
        
        <h3>Location Within London</h3>
        
        <img 
          src="/images/blog/cost-london-zones.webp" 
          alt="Secondary glazing pricing by London zones and installation complexity factors" 
          className="w-full rounded-lg my-8"
        />
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-muted/30 p-5 rounded-lg">
            <h4 className="font-semibold text-lg mb-2">Central London (Zones 1-2)</h4>
            <p className="text-sm mb-2">Westminster, Kensington & Chelsea</p>
            <p className="font-semibold">Standard rates quoted above</p>
          </div>
          
          <div className="bg-muted/30 p-5 rounded-lg">
            <h4 className="font-semibold text-lg mb-2">Inner London (Zones 3-4)</h4>
            <p className="text-sm mb-2">Wandsworth, Hackney</p>
            <p className="font-semibold text-primary">-5-10% discount</p>
          </div>
          
          <div className="bg-muted/30 p-5 rounded-lg">
            <h4 className="font-semibold text-lg mb-2">Outer London (Zones 5-6)</h4>
            <p className="text-sm mb-2">Croydon, Kingston</p>
            <p className="font-semibold text-primary">-10-15% discount</p>
          </div>
          
          <div className="bg-muted/30 p-5 rounded-lg">
            <h4 className="font-semibold text-lg mb-2">Home Counties</h4>
            <p className="text-sm mb-2">Surrey, Kent, Essex, Hertfordshire</p>
            <p className="font-semibold">Standard pricing</p>
          </div>
        </div>
        
        <h2>Complete Home Cost Examples</h2>
        
        <img 
          src="/images/blog/cost-home-examples.webp" 
          alt="Complete home cost examples for secondary glazing in London - Victorian, Georgian and Townhouse properties" 
          className="w-full rounded-lg my-8"
        />
        
        <div className="space-y-6 my-8">
          <div className="bg-muted/50 p-6 rounded-lg">
            <h4 className="font-semibold text-lg mb-2">2-Bedroom Victorian Conversion (8 windows)</h4>
            <p className="text-sm text-muted-foreground mb-4">Top floor flat in Clapham, mix of sash and casement, 6.4mm acoustic (facing road)</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm">4 x sash windows: £2,200-£2,800</p>
                <p className="text-sm">4 x casement windows: £1,400-£1,800</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-primary">Total: £3,600-£5,200</p>
              </div>
            </div>
          </div>
          
          <div className="bg-muted/50 p-6 rounded-lg">
            <h4 className="font-semibold text-lg mb-2">3-Bedroom Georgian Terraced House (12 windows)</h4>
            <p className="text-sm text-muted-foreground mb-4">Grade II listed in Bloomsbury, all Georgian sash multi-pane</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm">8 x standard Georgian sash: £4,800-£6,400</p>
                <p className="text-sm">4 x large drawing room sash: £2,000-£2,800</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-primary">Total: £6,800-£9,600</p>
              </div>
            </div>
          </div>
          
          <div className="bg-muted/50 p-6 rounded-lg">
            <h4 className="font-semibold text-lg mb-2">4-Bedroom Townhouse (18 windows)</h4>
            <p className="text-sm text-muted-foreground mb-4">Conservation area in Marylebone, mixed Victorian/Georgian, high-spec acoustic</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm">Various sized sash windows: £8,400-£12,600</p>
                <p className="text-sm">Installation + consultation: £1,400-£2,200</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-primary">Total: £10,800-£16,200</p>
              </div>
            </div>
          </div>
        </div>
        
        <h2>Cost Comparison: Secondary vs Replacement Glazing</h2>
        
        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-3 text-left font-semibold">Factor</th>
                <th className="border border-border p-3 text-left font-semibold">Secondary Glazing</th>
                <th className="border border-border p-3 text-left font-semibold">Replacement Double Glazing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-3 font-medium">Cost per window</td>
                <td className="border border-border p-3 text-primary font-semibold">£350-£1,200</td>
                <td className="border border-border p-3">£800-£2,500</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="border border-border p-3 font-medium">Heritage compliance</td>
                <td className="border border-border p-3 text-primary font-semibold">Excellent</td>
                <td className="border border-border p-3">Often not permitted</td>
              </tr>
              <tr>
                <td className="border border-border p-3 font-medium">Disruption</td>
                <td className="border border-border p-3 text-primary font-semibold">Minimal (2-4 hours/window)</td>
                <td className="border border-border p-3">Full day per window</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="border border-border p-3 font-medium">Noise reduction</td>
                <td className="border border-border p-3 text-primary font-semibold">75-80%</td>
                <td className="border border-border p-3">50%</td>
              </tr>
              <tr>
                <td className="border border-border p-3 font-medium">Heat loss reduction</td>
                <td className="border border-border p-3">65%</td>
                <td className="border border-border p-3">70%</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p><strong>Savings with Secondary Glazing:</strong> 30-50% cost reduction while maintaining heritage compliance and achieving superior noise reduction.</p>
        
        <h2>Return on Investment</h2>
        
        <h3>Energy Bill Savings</h3>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-muted/30 p-5 rounded-lg">
            <h4 className="font-semibold mb-2">Typical Victorian Terrace (2,500 sq ft)</h4>
            <ul className="text-sm space-y-1">
              <li>Annual heating bill: £1,800 before</li>
              <li>Reduction: 35-40%</li>
              <li>Annual savings: £650-£750</li>
              <li className="font-semibold text-primary">Payback period: 4-6 years</li>
            </ul>
          </div>
          
          <div className="bg-muted/30 p-5 rounded-lg">
            <h4 className="font-semibold mb-2">Georgian Townhouse (3,500 sq ft)</h4>
            <ul className="text-sm space-y-1">
              <li>Annual heating bill: £2,800 before</li>
              <li>Reduction: 30-35%</li>
              <li>Annual savings: £900-£1,050</li>
              <li className="font-semibold text-primary">Payback period: 5-7 years</li>
            </ul>
          </div>
        </div>
        
        <h3>Property Value Impact</h3>
        
        <p>Independent surveys suggest secondary glazing adds <strong>2-3% to property values</strong> in heritage areas where replacement windows aren't permitted. For a £1.2M Victorian terrace, this represents £24,000-£36,000 added value.</p>
        
        <h2>Ways to Reduce Costs Without Compromising Quality</h2>
        
        <img 
          src="/images/blog/cost-reduce-tips.webp" 
          alt="Ways to reduce secondary glazing costs without compromising quality - phased installation, smart glass selection and volume discounts" 
          className="w-full rounded-lg my-8"
        />
        
        <h3>Prioritize Strategic Installation</h3>
        
        <ol>
          <li><strong>Phase 1:</strong> Street-facing windows (maximum noise benefit)</li>
          <li><strong>Phase 2:</strong> Bedrooms (sleep quality improvement)</li>
          <li><strong>Phase 3:</strong> Living areas (comfort enhancement)</li>
          <li><strong>Phase 4:</strong> Secondary spaces (bathrooms, hallways)</li>
        </ol>
        
        <h3>Smart Glass Selection</h3>
        
        <ul>
          <li><strong>Standard glass for low-noise areas:</strong> South-facing garden windows</li>
          <li><strong>Acoustic glass for noise zones:</strong> Street-facing windows</li>
          <li><strong>Thermal glass for problem areas:</strong> North-facing windows in older properties</li>
        </ul>
        
        <h3>Volume Discounts</h3>
        
        <ul>
          <li><strong>5-8 windows:</strong> 5% discount typically available</li>
          <li><strong>9-15 windows:</strong> 10-15% discount possible</li>
          <li><strong>Whole house projects:</strong> Up to 20% savings on large installations</li>
        </ul>
        
        <h2>Hidden Costs to Consider</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div>
            <h4 className="font-semibold mb-2">Survey and Quotation</h4>
            <ul className="text-sm space-y-1">
              <li><strong>Our Service:</strong> FREE comprehensive survey</li>
              <li><strong>Industry Standard:</strong> Many charge £150-£300</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Planning Applications (if required)</h4>
            <ul className="text-sm space-y-1">
              <li>Listed building consent: £100-£300</li>
              <li>Conservation area consent: £100-£300</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Future Maintenance</h4>
            <ul className="text-sm space-y-1">
              <li>Annual cleaning: £15-£25 per window</li>
              <li>Seal replacement (10-15 years): £50-£80</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Financing Options</h4>
            <ul className="text-sm space-y-1">
              <li>0% finance available for larger projects</li>
              <li>Staged installation payments</li>
            </ul>
          </div>
        </div>
        
        <h2>Red Flags: Too-Good-To-Be-True Pricing</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-destructive/10 p-5 rounded-lg">
            <h4 className="font-semibold mb-3">Warning Signs</h4>
            <ul className="text-sm space-y-2">
              <li>Under £300 per window installed</li>
              <li>No site survey offered</li>
              <li>Pressure for immediate decision</li>
              <li>No heritage expertise</li>
            </ul>
          </div>
          
          <div className="bg-primary/10 p-5 rounded-lg">
            <h4 className="font-semibold mb-3">Quality Indicators</h4>
            <ul className="text-sm space-y-2">
              <li>Comprehensive 10+ year warranty</li>
              <li>Minimum £2M public liability insurance</li>
              <li>Specific listed building expertise</li>
              <li>Transparent cost breakdown</li>
            </ul>
          </div>
        </div>
        
        <h2>Frequently Asked Questions About Costs</h2>
        
        <div className="space-y-4 my-8">
          <div className="bg-muted/30 p-4 rounded-lg">
            <p className="font-semibold">Is secondary glazing more cost-effective than replacement windows?</p>
            <p className="mt-2">Yes, particularly for heritage properties. Secondary glazing costs 30-50% less than replacement double glazing while often providing superior noise reduction.</p>
          </div>
          
          <div className="bg-muted/30 p-4 rounded-lg">
            <p className="font-semibold">How long do secondary glazing installations pay for themselves?</p>
            <p className="mt-2">Typically 4-7 years through energy savings, with immediate benefits in comfort and noise reduction.</p>
          </div>
          
          <div className="bg-muted/30 p-4 rounded-lg">
            <p className="font-semibold">Are there additional costs for listed buildings?</p>
            <p className="mt-2">Installation costs may increase by 20-50% due to specialist requirements, but this ensures compliance with planning regulations.</p>
          </div>
          
          <div className="bg-muted/30 p-4 rounded-lg">
            <p className="font-semibold">Can I install secondary glazing room by room?</p>
            <p className="mt-2">Absolutely. Many clients prioritize noisy street-facing windows first, then gradually complete their property.</p>
          </div>
          
          <div className="bg-muted/30 p-4 rounded-lg">
            <p className="font-semibold">What warranty is included in the price?</p>
            <p className="mt-2">Our installations include a comprehensive 10-year warranty covering both materials and installation.</p>
          </div>
        </div>
        
        <h2>Get Your Free, No-Obligation Quote Today</h2>
        
        <p>Understanding the cost is just the first step. Every London property is unique, with specific challenges relating to heritage requirements, noise issues, and architectural features. Our free survey service ensures you receive accurate pricing tailored to your exact needs.</p>
        
        <p><strong>Ready to transform your London property with secondary glazing?</strong></p>
        
        <p><strong>Call <a href="tel:02070601572" className="text-primary hover:underline">020 7060 1572</a></strong> for your comprehensive FREE survey and detailed quotation. Our team understands London's unique property landscape and will provide transparent, competitive pricing with no hidden costs.</p>
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
    title: "Window Solutions for Conservation Areas: Complete 2026 Guide",
    excerpt: "Comprehensive guide to window upgrades in London conservation areas. Learn about planning regulations, secondary glazing benefits, cost comparisons, and expert tips for preserving your heritage property.",
    date: "2024-12-24",
    readTime: "22 min read",
    category: "Conservation",
    image: "/lovable-uploads/b22e5c1c-3ce0-40fa-a0e6-479e72daed1b.png",
    content: (
      <>
        <p className="lead">Living in a London conservation area comes with unique privileges and responsibilities. Your beautiful period property contributes to the capital's historic character, but it also means navigating specific regulations when it comes to window improvements. Whether you're dealing with draughty single-glazed windows, excessive noise, or rising energy bills, there are practical solutions that respect both planning requirements and your home's heritage.</p>
        
        <p>This comprehensive guide covers everything you need to know about window solutions for conservation areas in 2026, from understanding planning permission requirements to discovering why secondary glazing has become the preferred choice for thousands of London homeowners.</p>
        
        <h2>What Are Conservation Areas and Why Do They Matter?</h2>
        
        <p>Conservation areas are special parts of London designated by local councils to preserve and enhance areas of particular architectural or historic interest. Currently, there are over <strong>650 conservation areas</strong> across London's boroughs, protecting everything from Georgian garden squares in Bloomsbury to Victorian terraces in Richmond.</p>
        
        <p>These designations don't freeze properties in time, but they do ensure that any changes preserve the area's special character. For windows specifically, this means maintaining the original proportions, materials, and architectural details that define your neighbourhood's unique identity.</p>
        
        <p>The good news? Conservation area status doesn't prevent you from improving your windows' performance. It simply requires a more thoughtful approach that balances modern comfort with historic preservation.</p>
        
        <h2>Understanding Conservation Area Window Regulations by London Borough</h2>
        
        <p>London's 33 boroughs each manage their own conservation areas, leading to variations in requirements and interpretation. However, several key principles apply across the capital:</p>
        
        <h3>Standard Conservation Area Rules</h3>
        
        <p>In most conservation areas without additional restrictions, you can replace windows on a <strong>like-for-like basis</strong> without planning permission. This means matching the original material, design, opening mechanism, and glazing pattern. Many boroughs now accept high-quality timber, aluminium, or even uPVC windows that closely replicate the original appearance.</p>
        
        <h3>Article 4 Direction Properties</h3>
        
        <p>Some conservation areas have additional protection called <strong>Article 4 Direction</strong>, which removes permitted development rights for certain alterations. Under Article 4, even like-for-like window replacements require planning permission. This typically applies to the most sensitive conservation areas, including:</p>
        
        <ul>
          <li><strong>Westminster:</strong> Parts of Belgravia, Mayfair, and Marylebone</li>
          <li><strong>Camden:</strong> Areas of Bloomsbury and Hampstead</li>
          <li><strong>Kensington & Chelsea:</strong> Sections of Holland Park and Notting Hill</li>
          <li><strong>Richmond:</strong> Historic Richmond town centre and Twickenham riverside</li>
        </ul>
        
        <h3>Front vs. Rear Elevation Differences</h3>
        
        <p>Most boroughs distinguish between front-facing (street-visible) and rear windows. Front elevations typically require planning permission for any changes, while rear windows often have more flexibility, especially if not visible from public areas.</p>
        
        <h2>Planning Permission Requirements for Conservation Area Windows</h2>
        
        <p>Understanding when you need planning permission can save months of delays and thousands of pounds in application fees.</p>
        
        <h3>When Planning Permission IS Required</h3>
        
        <ul>
          <li><strong>Article 4 Direction properties:</strong> Any external window changes</li>
          <li><strong>Front elevations:</strong> Windows visible from public streets or spaces</li>
          <li><strong>Material changes:</strong> Switching from timber to uPVC or aluminium</li>
          <li><strong>Design alterations:</strong> Changing glazing patterns, window proportions, or opening mechanisms</li>
          <li><strong>Single to double glazing:</strong> Often considered a material change requiring permission</li>
        </ul>
        
        <h3>When Planning Permission ISN'T Required</h3>
        
        <ul>
          <li><strong>Like-for-like replacements:</strong> Same material, design, and appearance</li>
          <li><strong>Rear elevations:</strong> Not visible from public areas (borough-dependent)</li>
          <li><strong>Internal secondary glazing:</strong> Installed on the room side of existing windows</li>
          <li><strong>Minor repairs:</strong> Restoration work that doesn't alter the window's appearance</li>
        </ul>
        
        <h3>Planning Application Process and Costs</h3>
        
        <p>If planning permission is required, expect the process to take <strong>8-12 weeks</strong> from validation. Application fees start at <strong>£528</strong> for single properties, rising to <strong>£1,043</strong> for multiple dwellings. You'll need:</p>
        
        <ul>
          <li>Heritage statement explaining how proposals respect the area's character</li>
          <li>Technical drawings at 1:20 scale for elevations and 1:5 scale for details</li>
          <li>Photographs showing existing windows and their context</li>
          <li>Materials and colour specifications</li>
        </ul>
        
        <h2>Why Secondary Glazing Is the Ideal Solution for Conservation Areas</h2>
        
        <p>Secondary glazing has emerged as the preferred window solution for conservation area properties, and it's easy to understand why. Rather than replacing existing windows, secondary glazing adds a discrete internal layer that delivers modern performance while preserving original features completely.</p>
        
        <h3>No Planning Permission Required</h3>
        
        <p>Because secondary glazing is installed internally and doesn't alter the external appearance, it typically doesn't require planning permission in conservation areas. This includes properties with Article 4 Direction, where window replacement would need full planning approval.</p>
        
        <h3>Preserving Architectural Character</h3>
        
        <p>Secondary glazing maintains <strong>100% of your windows' original character</strong>. Period features like glazing bars, window furniture, opening mechanisms, and proportions remain untouched. This is particularly important for properties with:</p>
        
        <ul>
          <li><strong>Original sash windows:</strong> Maintaining the authentic counterweight system</li>
          <li><strong>Leaded lights:</strong> Preserving delicate glazing patterns</li>
          <li><strong>Period hardware:</strong> Keeping original locks, handles, and stays</li>
          <li><strong>Architectural details:</strong> Protecting carved surrounds and decorative elements</li>
        </ul>
        
        <h3>Completely Reversible</h3>
        
        <p>Unlike window replacement, secondary glazing can be completely removed without trace, returning windows to their original state. This reversibility is highly valued by conservation officers and adds to property appeal for future buyers who prefer period authenticity.</p>
        
        <h3>Superior Performance Benefits</h3>
        
        <p>Modern secondary glazing systems deliver exceptional results:</p>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-muted/30 p-5 rounded-lg">
            <h4 className="font-semibold text-lg mb-3">Thermal Efficiency</h4>
            <p className="text-3xl font-bold text-primary mb-2">Up to 70%</p>
            <p className="text-sm text-muted-foreground">Reduction in heat loss</p>
          </div>
          <div className="bg-muted/30 p-5 rounded-lg">
            <h4 className="font-semibold text-lg mb-3">Noise Reduction</h4>
            <p className="text-3xl font-bold text-primary mb-2">80%</p>
            <p className="text-sm text-muted-foreground">Reduction in external noise</p>
          </div>
          <div className="bg-muted/30 p-5 rounded-lg">
            <h4 className="font-semibold text-lg mb-3">Draught Elimination</h4>
            <p className="text-3xl font-bold text-primary mb-2">100%</p>
            <p className="text-sm text-muted-foreground">Seals gaps causing cold spots</p>
          </div>
          <div className="bg-muted/30 p-5 rounded-lg">
            <h4 className="font-semibold text-lg mb-3">Condensation Control</h4>
            <p className="text-3xl font-bold text-primary mb-2">Significant</p>
            <p className="text-sm text-muted-foreground">Reduces moisture problems</p>
          </div>
        </div>
        
        <h2>Cost Comparisons: Secondary Glazing vs. Window Replacement</h2>
        
        <p>For conservation area properties, secondary glazing offers compelling financial advantages beyond avoiding planning application costs.</p>
        
        <h3>Secondary Glazing Costs</h3>
        
        <div className="space-y-3 my-6">
          <div className="flex justify-between items-center border-b border-border pb-2">
            <span>Standard casement windows</span>
            <span className="font-semibold">£200-350 per m²</span>
          </div>
          <div className="flex justify-between items-center border-b border-border pb-2">
            <span>Sash window systems</span>
            <span className="font-semibold">£300-450 per m²</span>
          </div>
          <div className="flex justify-between items-center border-b border-border pb-2">
            <span>High-performance acoustic</span>
            <span className="font-semibold">£400-600 per m²</span>
          </div>
          <div className="flex justify-between items-center border-b border-border pb-2">
            <span>Custom heritage systems</span>
            <span className="font-semibold">£500-750 per m²</span>
          </div>
        </div>
        
        <h3>Window Replacement Costs (Including Conservation Area Requirements)</h3>
        
        <div className="space-y-3 my-6">
          <div className="flex justify-between items-center border-b border-border pb-2">
            <span>Planning application fees</span>
            <span className="font-semibold">£528-1,043</span>
          </div>
          <div className="flex justify-between items-center border-b border-border pb-2">
            <span>Heritage consultant</span>
            <span className="font-semibold">£1,500-3,000</span>
          </div>
          <div className="flex justify-between items-center border-b border-border pb-2">
            <span>Architect drawings</span>
            <span className="font-semibold">£2,000-4,000</span>
          </div>
          <div className="flex justify-between items-center border-b border-border pb-2">
            <span>High-quality timber sash windows</span>
            <span className="font-semibold">£1,200-2,500 per window</span>
          </div>
          <div className="flex justify-between items-center border-b border-border pb-2">
            <span>Installation and making good</span>
            <span className="font-semibold">£500-800 per window</span>
          </div>
        </div>
        
        <div className="bg-primary/10 p-6 rounded-lg my-8">
          <h4 className="font-semibold text-lg mb-3">Cost Comparison Example: 5-Window Front Elevation</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold text-primary mb-2">Secondary Glazing</p>
              <p className="text-2xl font-bold">£6,000-12,000</p>
              <p className="text-sm text-muted-foreground">Including installation</p>
            </div>
            <div>
              <p className="font-semibold text-destructive mb-2">Heritage Window Replacement</p>
              <p className="text-2xl font-bold">£15,000-25,000</p>
              <p className="text-sm text-muted-foreground">Plus planning fees and potential delays</p>
            </div>
          </div>
        </div>
        
        <h2>Case Studies: Conservation Area Success Stories</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-muted/50 p-6 rounded-lg">
            <h4 className="font-semibold text-lg mb-2">Hampstead Garden Suburb: Edwardian Villa</h4>
            <p className="mb-3"><strong>Challenge:</strong> Grade II listed Edwardian property suffering from significant heat loss through original steel casement windows. Westminster's Article 4 Direction prevented window replacement without extensive planning procedures.</p>
            <p className="mb-3"><strong>Solution:</strong> Bespoke secondary glazing system with slimline frames matching the original steel profiles. Low-E glass provided thermal efficiency while magnetic opening allowed summer ventilation.</p>
            <p><strong>Results:</strong> 65% reduction in heat loss, £400 annual energy savings, and complete preservation of original Arts and Crafts character. Installation completed in one day with no external alterations.</p>
          </div>
          
          <div className="bg-muted/50 p-6 rounded-lg">
            <h4 className="font-semibold text-lg mb-2">Richmond Riverside: Georgian Townhouse</h4>
            <p className="mb-3"><strong>Challenge:</strong> Beautiful Georgian townhouse facing the Thames suffering from traffic noise and river dampness affecting original sash windows. Planning constraints prevented double glazing installation.</p>
            <p className="mb-3"><strong>Solution:</strong> High-performance acoustic secondary glazing with 12mm air gap. Systems designed to complement the property's elegant proportions while delivering superior noise reduction.</p>
            <p><strong>Results:</strong> 85% noise reduction from riverside traffic, eliminated condensation issues, and preserved the authentic Georgian window operation. Property value increased due to improved comfort without compromising period character.</p>
          </div>
          
          <div className="bg-muted/50 p-6 rounded-lg">
            <h4 className="font-semibold text-lg mb-2">Belgravia Square: Victorian Mansion Flat</h4>
            <p className="mb-3"><strong>Challenge:</strong> Top-floor flat with original Victorian windows causing excessive heat loss and noise from busy square. Landlord restrictions prevented permanent window alterations.</p>
            <p className="mb-3"><strong>Solution:</strong> Removable secondary glazing system allowing tenant improvements without permanent modifications. Magnetic catches enabled easy removal for window maintenance.</p>
            <p><strong>Results:</strong> Dramatic improvement in winter comfort, reduced heating bills by 40%, and effective noise control. System easily removable at lease end, satisfying both tenant and landlord requirements.</p>
          </div>
        </div>
        
        <h2>Step-by-Step Guide for Conservation Area Homeowners</h2>
        
        <div className="space-y-4 my-8">
          <div className="border-l-4 border-primary pl-4">
            <h4 className="font-semibold">Step 1: Determine Your Property's Status</h4>
            <p>Check with your local planning office whether your property is in a conservation area and if Article 4 Direction applies. Most borough websites have interactive maps showing conservation area boundaries and restrictions.</p>
          </div>
          
          <div className="border-l-4 border-primary pl-4">
            <h4 className="font-semibold">Step 2: Assess Your Current Windows</h4>
            <p>Evaluate your existing windows' condition, performance, and heritage value. Consider whether restoration might be more appropriate than replacement for particularly significant examples.</p>
          </div>
          
          <div className="border-l-4 border-primary pl-4">
            <h4 className="font-semibold">Step 3: Define Your Priorities</h4>
            <p>Identify your main concerns: thermal efficiency, noise reduction, security, or maintenance. This helps determine whether secondary glazing, restoration, or replacement is most suitable.</p>
          </div>
          
          <div className="border-l-4 border-primary pl-4">
            <h4 className="font-semibold">Step 4: Explore Secondary Glazing Options</h4>
            <p>For most conservation area properties, secondary glazing offers the best balance of performance improvement and heritage preservation. Consult specialists who understand conservation area requirements and can design systems that complement your windows' character.</p>
          </div>
          
          <div className="border-l-4 border-primary pl-4">
            <h4 className="font-semibold">Step 5: Obtain Multiple Quotations</h4>
            <p>Get quotes from at least three suppliers, ensuring they understand conservation area constraints and can provide references from similar properties in your area.</p>
          </div>
          
          <div className="border-l-4 border-primary pl-4">
            <h4 className="font-semibold">Step 6: Plan Installation Timing</h4>
            <p>Secondary glazing installation is typically completed in 1-2 days for most properties, with minimal disruption. Avoid peak heating season if possible to maximize immediate comfort benefits.</p>
          </div>
        </div>
        
        <h2>Common Mistakes to Avoid</h2>
        
        <div className="space-y-4 my-8">
          <div className="bg-destructive/10 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive">Assuming All Conservation Areas Have Identical Rules</h4>
            <p>Each borough interprets conservation area guidance differently. Always check specific local requirements rather than assuming general principles apply to your property.</p>
          </div>
          
          <div className="bg-destructive/10 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive">Choosing Inappropriate Materials</h4>
            <p>Modern uPVC windows might be acceptable in some conservation areas but completely inappropriate for Grade II listed Georgian properties. Match solutions to your property's specific character and significance.</p>
          </div>
          
          <div className="bg-destructive/10 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive">Ignoring Neighbours' Experiences</h4>
            <p>Talk to neighbours who've undertaken similar work. Their experiences with local planning officers and contractors provide valuable practical insights.</p>
          </div>
          
          <div className="bg-destructive/10 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive">Rushing Planning Applications</h4>
            <p>Poorly prepared planning applications face delays and potential refusal. Invest in proper heritage statements and technical drawings to avoid costly resubmissions.</p>
          </div>
          
          <div className="bg-destructive/10 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive">Overlooking Maintenance Access</h4>
            <p>Ensure any solution allows continued access for window maintenance and cleaning. Traditional sash windows require regular maintenance that shouldn't be compromised.</p>
          </div>
        </div>
        
        <h2>Expert Tips for Conservation Area Properties</h2>
        
        <h3>Work with Specialists</h3>
        <p>Choose contractors experienced in conservation area work who understand both technical requirements and heritage sensitivities. Generic window companies often lack the specialist knowledge required.</p>
        
        <h3>Consider Building Performance Holistically</h3>
        <p>Windows are one element of building performance. Consider how window improvements integrate with other conservation-appropriate upgrades like draught-proofing and improved insulation.</p>
        
        <h3>Document Everything</h3>
        <p>Take detailed photographs before any work begins. This protects against disputes and provides valuable records for future maintenance or alterations.</p>
        
        <h3>Maintain Original Features</h3>
        <p>Where possible, maintain original window furniture, glazing patterns, and operating mechanisms. These details contribute significantly to authenticity and character.</p>
        
        <h3>Plan for Future Flexibility</h3>
        <p>Choose solutions that don't prevent future restoration or upgrading. Secondary glazing's reversibility is particularly valuable for this reason.</p>
        
        <h2>London Conservation Areas We Serve</h2>
        
        <p>Our specialist teams regularly work across London's most prestigious conservation areas, including:</p>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-muted/30 p-5 rounded-lg">
            <h4 className="font-semibold mb-2">Central London</h4>
            <p>Belgravia, Mayfair, Marylebone, Bloomsbury, Fitzrovia, Covent Garden</p>
          </div>
          <div className="bg-muted/30 p-5 rounded-lg">
            <h4 className="font-semibold mb-2">North London</h4>
            <p>Hampstead, Highgate, Primrose Hill, Camden Square, Regent's Park</p>
          </div>
          <div className="bg-muted/30 p-5 rounded-lg">
            <h4 className="font-semibold mb-2">West London</h4>
            <p>Holland Park, Notting Hill, Ladbroke Grove, Little Venice, Paddington</p>
          </div>
          <div className="bg-muted/30 p-5 rounded-lg">
            <h4 className="font-semibold mb-2">South West London</h4>
            <p>Richmond, Barnes, Putney, Wimbledon Village, Clapham Old Town</p>
          </div>
          <div className="bg-muted/30 p-5 rounded-lg">
            <h4 className="font-semibold mb-2">East London</h4>
            <p>Spitalfields, Whitechapel, Greenwich, Blackheath, Canary Wharf</p>
          </div>
          <div className="bg-muted/30 p-5 rounded-lg">
            <h4 className="font-semibold mb-2">South East London</h4>
            <p>Dulwich, Herne Hill, Bermondsey, London Bridge, Borough</p>
          </div>
        </div>
        
        <p>Each area presents unique characteristics and planning considerations that our experienced teams understand intimately.</p>
        
        <h2>Frequently Asked Questions</h2>
        
        <div className="space-y-4 my-8">
          <div className="bg-muted/30 p-4 rounded-lg">
            <p className="font-semibold">Do I need planning permission for secondary glazing in conservation areas?</p>
            <p className="mt-2">Generally no, because secondary glazing doesn't alter the external appearance. However, for Grade II listed properties, you may need Listed Building Consent regardless of conservation area status.</p>
          </div>
          
          <div className="bg-muted/30 p-4 rounded-lg">
            <p className="font-semibold">Can secondary glazing match the performance of replacement double glazing?</p>
            <p className="mt-2">Modern secondary glazing systems often exceed double glazing performance, particularly for noise reduction. Thermal efficiency is comparable, while maintaining complete authenticity.</p>
          </div>
          
          <div className="bg-muted/30 p-4 rounded-lg">
            <p className="font-semibold">Will secondary glazing affect my property's value?</p>
            <p className="mt-2">Quality secondary glazing typically enhances property value by improving comfort without compromising character. Many buyers prefer authentic period windows with modern performance over replacement alternatives.</p>
          </div>
          
          <div className="bg-muted/30 p-4 rounded-lg">
            <p className="font-semibold">How long does secondary glazing last?</p>
            <p className="mt-2">High-quality secondary glazing systems last 20-30 years with minimal maintenance. The primary windows remain protected from weather exposure, often extending their lifespan significantly.</p>
          </div>
          
          <div className="bg-muted/30 p-4 rounded-lg">
            <p className="font-semibold">Can I still open my windows with secondary glazing?</p>
            <p className="mt-2">Yes, modern systems include opening panels for ventilation and cleaning access. Magnetic or sliding systems allow normal window operation while maintaining thermal performance.</p>
          </div>
          
          <div className="bg-muted/30 p-4 rounded-lg">
            <p className="font-semibold">Is secondary glazing suitable for all window types?</p>
            <p className="mt-2">Secondary glazing adapts to virtually any window configuration, including sash windows, casements, bay windows, and unusual heritage shapes that would be impossible to replicate in replacement windows.</p>
          </div>
        </div>
        
        <h2>Taking the Next Step</h2>
        
        <p>Conservation area window improvements don't have to mean choosing between comfort and character. Secondary glazing offers a proven solution that respects your property's heritage while delivering the modern performance your family deserves.</p>
        
        <p>Our conservation area specialists understand the unique challenges of historic London properties and work exclusively with solutions that preserve architectural integrity while maximizing comfort and efficiency.</p>
        
        <p><strong>Ready to explore your options?</strong> Contact our conservation area specialists for a free consultation and quotation. We'll assess your specific property, explain the relevant planning considerations, and design a solution that enhances both comfort and character.</p>
        
        <p><strong>Call us today on <a href="tel:02070601572" className="text-primary hover:underline">020 7060 1572</a></strong> or email <a href="mailto:info@secondaryglazingspecialist.co.uk" className="text-primary hover:underline">info@secondaryglazingspecialist.co.uk</a> to book your free conservation area consultation.</p>
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
