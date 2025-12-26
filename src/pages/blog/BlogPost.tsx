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
    image: "/lovable-uploads/e79d2f3f-21eb-4775-bb5c-f173badcc02f.png",
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
