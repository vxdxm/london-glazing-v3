import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const blogPosts = [
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
    image: "/lovable-uploads/e79d2f3f-21eb-4775-bb5c-f173badcc02f.png"
  },
  {
    slug: "conservation-area-window-solutions",
    title: "Window Solutions for Conservation Areas",
    excerpt: "Understanding the planning requirements and best practices for upgrading windows in conservation areas across London.",
    date: "2024-11-28",
    readTime: "7 min read",
    category: "Conservation",
    image: "/lovable-uploads/b22e5c1c-3ce0-40fa-a0e6-479e72daed1b.png"
  },
  {
    slug: "sash-window-secondary-glazing-options",
    title: "Secondary Glazing Options for Sash Windows",
    excerpt: "Explore the different secondary glazing solutions available for traditional sash windows, from vertical sliders to lift-out panels.",
    date: "2024-11-20",
    readTime: "6 min read",
    category: "Window Types",
    image: "/lovable-uploads/c7e8e6e5-c8f0-4b15-9cc5-25481ef35ee8.png"
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
