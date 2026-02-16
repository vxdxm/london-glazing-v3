import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const blogPosts = [
  {
    slug: "acoustic-secondary-glazing-guide",
    title: "Acoustic Secondary Glazing: The Ultimate Guide to Soundproofing London Period Homes",
    excerpt: "Expert guide to acoustic secondary glazing using 10.8mm Stadip Silence glass and 100mm air gaps. Learn how to achieve 70-80% noise reduction in listed buildings and conservation areas.",
    date: "2025-01-15",
    readTime: "20 min read",
    category: "Acoustic Glazing",
    image: "https://cdn.marblism.com/p_JLSZ_DV64.webp"
  },
  {
    slug: "listed-building-secondary-glazing-guide",
    title: "Secondary Glazing for Listed Buildings: Preserving the Past, Protecting Your Comfort",
    excerpt: "Conservation-approved secondary glazing for Grade I & II listed buildings. Fully reversible heritage window solutions that don't require planning permission.",
    date: "2025-01-20",
    readTime: "18 min read",
    category: "Heritage",
    image: "https://cdn.marblism.com/aOHcpxw0n9w.webp"
  },
  {
    slug: "epc-energy-efficiency-guide",
    title: "How Secondary Glazing Cuts Heating Bills by 15-30% and Boosts Your EPC Rating",
    excerpt: "Essential guide for homeowners and landlords. Learn how secondary glazing improves EPC ratings, reduces heating bills, and helps meet MEES regulations for London properties.",
    date: "2025-01-25",
    readTime: "15 min read",
    category: "Energy Efficiency",
    image: "https://cdn.marblism.com/6GWAbKSlQsx.webp"
  },
  {
    slug: "condensation-mould-prevention-guide",
    title: "How to Stop Window Condensation & Prevent Mould on Sash Windows",
    excerpt: "Why period homes suffer from condensation, the science behind thermal bridges, and how secondary glazing achieves 99% condensation reduction. Essential reading for London homeowners.",
    date: "2025-02-01",
    readTime: "16 min read",
    category: "Condensation",
    image: "https://cdn.marblism.com/e1o-1fuIm0f.webp"
  },
  {
    slug: "commercial-mees-compliance-secondary-glazing",
    title: "MEES 2030 Compliance: Why Commercial Landlords Are Choosing Secondary Glazing",
    excerpt: "How secondary glazing helps London commercial landlords meet MEES EPC C rating by 2030. Cost-effective compliance for listed buildings, offices, and heritage properties.",
    date: "2026-02-12",
    readTime: "14 min read",
    category: "Commercial",
    image: "https://cdn.marblism.com/mbnmDdlBu5b.webp"
  },
  {
    slug: "hospitality-secondary-glazing-noise-reduction",
    title: "Hotel Secondary Glazing: Stop Noise Complaints & Protect Your TripAdvisor Rating",
    excerpt: "How London boutique hotels use acoustic secondary glazing to eliminate noise complaints, boost TripAdvisor scores, and increase occupancy by 18%. Room-by-room installation with zero disruption.",
    date: "2026-02-12",
    readTime: "16 min read",
    category: "Hospitality",
    image: "https://cdn.marblism.com/GzOZow2Lbmo.webp"
  },
  {
    slug: "education-secondary-glazing-schools",
    title: "5 Ways Secondary Glazing Transforms School Learning Environments",
    excerpt: "How secondary glazing helps UK schools meet BB93 acoustic standards, cut heating bills by 65%, and support neurodiverse learners. Zero-disruption half-term installation.",
    date: "2026-02-12",
    readTime: "15 min read",
    category: "Education",
    image: "https://cdn.marblism.com/tCWers5eiC4.webp"
  },
  {
    slug: "secondary-glazing-london-borough-guide",
    title: "Secondary Glazing London: The Borough-by-Borough Guide to Soundproofing Your Home",
    excerpt: "Discover how secondary glazing reduces noise by up to 80% across London boroughs. Expert guide covering Kensington, Islington, Hackney, Clapham, and Heathrow flight paths.",
    date: "2026-02-16",
    readTime: "22 min read",
    category: "London Guide",
    image: "https://cdn.marblism.com/uk6fLpdpaD0.webp"
  },
  {
    slug: "secondary-glazing-cost-london",
    title: "How Much Does Secondary Glazing Cost in London? Complete 2026 Price Guide",
    excerpt: "Comprehensive pricing guide for secondary glazing in London. From budget options at £350 per window to premium acoustic solutions, discover what affects costs and how to get the best value.",
    date: "2024-12-22",
    readTime: "18 min read",
    category: "Pricing",
    image: "/images/blog/cost-guide-hero.webp"
  },
  {
    slug: "planning-permission-secondary-glazing-conservation-areas",
    title: "Planning Permission for Secondary Glazing in Conservation Areas: Complete Guide 2026",
    excerpt: "Everything you need to know about planning regulations, permitted development rights, and conservation officer requirements for secondary glazing installations in London.",
    date: "2024-12-20",
    readTime: "15 min read",
    category: "Planning",
    image: "/images/blog/planning-permission-hero.webp"
  },
  {
    slug: "secondary-glazing-listed-buildings-guide",
    title: "Complete Guide to Secondary Glazing for Listed Buildings",
    excerpt: "Everything you need to know about installing secondary glazing in Grade I and Grade II listed properties while maintaining heritage compliance.",
    date: "2024-12-15",
    readTime: "8 min read",
    category: "Heritage",
    image: "/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg"
  },
  {
    slug: "noise-reduction-london-homes",
    title: "How Secondary Glazing Reduces Noise in London Homes",
    excerpt: "Discover how secondary glazing can reduce external noise by up to 80% and create a peaceful living environment in busy London locations.",
    date: "2024-12-10",
    readTime: "6 min read",
    category: "Noise Reduction",
    image: "/lovable-uploads/675b8861-030a-48d3-adbe-f9706ec54947.png"
  },
  {
    slug: "thermal-efficiency-benefits",
    title: "The Thermal Efficiency Benefits of Secondary Glazing",
    excerpt: "Learn how secondary glazing improves your home's thermal insulation, reduces energy bills, and increases comfort throughout the year.",
    date: "2024-12-05",
    readTime: "5 min read",
    category: "Energy Efficiency",
    image: "/images/blog/thermal-efficiency-hero.webp"
  },
  {
    slug: "conservation-area-window-solutions",
    title: "Window Solutions for Conservation Areas: Complete 2026 Guide",
    excerpt: "Comprehensive guide to window upgrades in London conservation areas. Learn about planning regulations, secondary glazing benefits, cost comparisons, and expert tips for preserving your heritage property.",
    date: "2024-12-24",
    readTime: "22 min read",
    category: "Conservation",
    image: "/images/blog/conservation-hero.webp"
  },
  {
    slug: "sash-window-secondary-glazing-options",
    title: "Complete Guide to Secondary Glazing for Sash Windows in London",
    excerpt: "Comprehensive guide to secondary glazing options for period sash windows. Compare vertical sliding, lift-out, hinged and fixed systems with costs, performance data, and London case studies.",
    date: "2024-12-26",
    readTime: "25 min read",
    category: "Window Types",
    image: "/images/blog/sash-window-types.webp"
  },
  {
    slug: "secondary-glazing-vs-double-glazing",
    title: "Secondary Glazing vs Double Glazing: Which is Best for Listed Buildings?",
    excerpt: "A comprehensive comparison of secondary glazing and double glazing for Victorian, Georgian, and Edwardian properties. Discover which solution offers the best performance, compliance, and value.",
    date: "2024-11-15",
    readTime: "12 min read",
    category: "Guides",
    image: "/images/blog/secondary-glazing-vs-double-glazing.webp"
  }
];

const Blog = () => {
  return (
    <>
      <EnhancedSEO
        title="Secondary Glazing Blog | Expert Insights & Guides | London Specialist"
        description="Expert articles, guides, and insights on secondary glazing for listed buildings, noise reduction, thermal efficiency, and more. Stay informed with London's leading specialists."
        canonicalPath="/blog"
        type="website"
        keywords={["secondary glazing blog", "window glazing articles", "listed building windows", "noise reduction tips", "thermal insulation guides"]}
      />
      
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Secondary Glazing Specialist Blog",
            "description": "Expert insights and guides on secondary glazing for London properties",
            "url": "https://secondaryglazingspecialist.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Secondary Glazing Specialist",
              "logo": {
                "@type": "ImageObject",
                "url": "https://secondaryglazingspecialist.com/lovable-uploads/b39446b8-e7b5-4000-ac4b-a7a691a5bb14.png"
              }
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "datePublished": post.date,
              "url": `https://secondaryglazingspecialist.com/blog/${post.slug}`,
              "image": `https://secondaryglazingspecialist.com${post.image}`
            }))
          })}
        </script>
      </Helmet>
      
      <MainNav />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Secondary Glazing Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert insights, guides, and tips on secondary glazing for listed buildings, 
              noise reduction, thermal efficiency, and heritage properties.
            </p>
          </div>
          
          {/* Featured Post */}
          <Link to={`/blog/${blogPosts[0].slug}`} className="block mb-12">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <span className="text-sm font-medium text-primary mb-2">{blogPosts[0].category}</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{blogPosts[0].title}</h2>
                  <p className="text-muted-foreground mb-4">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(blogPosts[0].date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {blogPosts[0].readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
          
          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="aspect-video">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <span className="text-sm font-medium text-primary">{post.category}</span>
                    <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{post.excerpt}</CardDescription>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="mt-16 text-center bg-secondary/50 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Improve Your Windows?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Get a free consultation and quote for secondary glazing tailored to your property.
            </p>
            <Link 
              to="/quote-request"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Get Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Blog;
