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
    title: "Secondary Glazing vs Double Glazing: Which Is Right for You?",
    excerpt: "A comprehensive comparison of secondary glazing and double glazing to help you make the best choice for your property.",
    date: "2024-11-15",
    readTime: "9 min read",
    category: "Guides",
    image: "/lovable-uploads/8c4a189d-e7e2-4118-a885-5a0a81e1bdf7.png",
    content: (
      <>
        <p className="lead">When looking to improve your windows, you have two main options: secondary glazing and double glazing. Here's a comprehensive comparison to help you decide.</p>
        
        <h2>What's the Difference?</h2>
        <p><strong>Double glazing</strong> replaces your existing windows with sealed units containing two panes of glass.</p>
        <p><strong>Secondary glazing</strong> adds a separate window on the inside of your existing windows.</p>
        
        <h2>Noise Reduction Comparison</h2>
        <p>Secondary glazing typically provides better acoustic insulation:</p>
        <ul>
          <li><strong>Double glazing:</strong> 25-30 dB reduction</li>
          <li><strong>Secondary glazing:</strong> 40-50 dB reduction</li>
        </ul>
        <p>The larger air gap in secondary glazing (100mm+) is more effective at blocking sound than the small gap in double glazing (typically 12-16mm).</p>
        
        <h2>Thermal Performance</h2>
        <p>Both options improve thermal insulation:</p>
        <ul>
          <li><strong>Double glazing:</strong> U-value around 1.4-1.6 W/m²K</li>
          <li><strong>Secondary glazing:</strong> U-value around 1.8-2.0 W/m²K</li>
        </ul>
        <p>While double glazing has a slight edge, secondary glazing still provides excellent thermal improvement over single glazing.</p>
        
        <h2>When to Choose Secondary Glazing</h2>
        <ul>
          <li>Listed buildings and conservation areas</li>
          <li>Period properties where character is important</li>
          <li>When noise reduction is the primary concern</li>
          <li>When you want to preserve original windows</li>
          <li>Rental properties or when budget is limited</li>
        </ul>
        
        <h2>When to Choose Double Glazing</h2>
        <ul>
          <li>Modern properties without planning restrictions</li>
          <li>When original windows are beyond repair</li>
          <li>When maximum thermal performance is priority</li>
          <li>New builds or major renovations</li>
        </ul>
        
        <h2>Cost Comparison</h2>
        <p>Secondary glazing is typically 30-50% cheaper than double glazing replacement, making it an attractive option for many homeowners.</p>
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
          <div className="prose prose-lg max-w-none">
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
