import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useSearchParams } from "react-router-dom";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { blogPosts, POSTS_PER_PAGE } from "@/data/blogPosts";

const SITE_URL = "https://secondaryglazingspecialist.com";

const buildPagePath = (page: number) => (page <= 1 ? "/blog" : `/blog?page=${page}`);

const Blog = () => {
  const [searchParams] = useSearchParams();
  const totalPages = Math.max(1, Math.ceil(blogPosts.length / POSTS_PER_PAGE));
  const requestedPage = Number(searchParams.get("page") ?? "1");
  const currentPage = Number.isFinite(requestedPage)
    ? Math.min(Math.max(1, Math.trunc(requestedPage)), totalPages)
    : 1;

  const startIdx = (currentPage - 1) * POSTS_PER_PAGE;
  const pagePosts = blogPosts.slice(startIdx, startIdx + POSTS_PER_PAGE);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  const prevUrl = !isFirstPage ? `${SITE_URL}${buildPagePath(currentPage - 1)}` : null;
  const nextUrl = !isLastPage ? `${SITE_URL}${buildPagePath(currentPage + 1)}` : null;
  const canonicalPath = buildPagePath(currentPage);
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  const featuredPost = isFirstPage ? pagePosts[0] : null;
  const gridPosts = isFirstPage ? pagePosts.slice(1) : pagePosts;

  const pageTitle = isFirstPage
    ? "Secondary Glazing Blog | Expert Guides | London Specialist"
    : `Secondary Glazing Blog — Page ${currentPage} of ${totalPages}`;
  const pageDescription = isFirstPage
    ? "Expert guides on secondary glazing for listed buildings, noise reduction and thermal efficiency from London's leading specialists."
    : `Page ${currentPage} of expert guides on secondary glazing, acoustic performance, planning consent, and heritage window solutions.`;

  return (
    <>
      <EnhancedSEO
        title={pageTitle}
        description={pageDescription}
        canonicalPath={canonicalPath}
        type="website"
        keywords={["secondary glazing blog", "window glazing articles", "listed building windows", "noise reduction tips", "thermal insulation guides"]}
      />

      <Helmet>
        {prevUrl && <link rel="prev" href={prevUrl} />}
        {nextUrl && <link rel="next" href={nextUrl} />}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "@id": `${SITE_URL}/blog#blog`,
            "name": "Secondary Glazing Specialist Blog",
            "description": "Expert insights and guides on secondary glazing for London properties",
            "url": `${SITE_URL}/blog`,
            "publisher": {
              "@type": "Organization",
              "name": "Secondary Glazing Specialist",
              "logo": {
                "@type": "ImageObject",
                "url": `${SITE_URL}/lovable-uploads/b39446b8-e7b5-4000-ac4b-a7a691a5bb14.png`
              }
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "datePublished": post.date,
              "url": `${SITE_URL}/blog/${post.slug}`,
              "image": post.image.startsWith("http") ? post.image : `${SITE_URL}${post.image}`
            }))
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": `${canonicalUrl}#collection`,
            "url": canonicalUrl,
            "name": pageTitle,
            "description": pageDescription,
            "isPartOf": { "@id": `${SITE_URL}/blog#blog` },
            ...(prevUrl ? { "previousItem": prevUrl } : {}),
            ...(nextUrl ? { "nextItem": nextUrl } : {}),
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": pagePosts.length,
              "itemListOrder": "https://schema.org/ItemListOrderDescending",
              "itemListElement": pagePosts.map((post, idx) => ({
                "@type": "ListItem",
                "position": startIdx + idx + 1,
                "url": `${SITE_URL}/blog/${post.slug}`,
                "name": post.title
              }))
            }
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
            {totalPages > 1 && (
              <p className="text-sm text-muted-foreground mt-3">
                Page {currentPage} of {totalPages}
              </p>
            )}
          </div>
          
          {/* Featured Post (page 1 only) */}
          {featuredPost && (
          <Link to={`/blog/${featuredPost.slug}`} className="block mb-12">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto">
                  <img 
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <span className="text-sm font-medium text-primary mb-2">{featuredPost.category}</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{featuredPost.title}</h2>
                  <p className="text-muted-foreground mb-4">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredPost.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
          )}
          
          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridPosts.map((post) => (
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

          {/* Pagination */}
          {totalPages > 1 && (
            <nav
              className="mt-12 flex flex-wrap items-center justify-center gap-2"
              aria-label="Blog pagination"
            >
              {prevUrl ? (
                <Link
                  to={buildPagePath(currentPage - 1)}
                  rel="prev"
                  className="inline-flex items-center gap-1 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-secondary/60 transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" /> Previous
                </Link>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground opacity-50">
                  <ChevronLeft className="h-4 w-4" /> Previous
                </span>
              )}

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Link
                  key={page}
                  to={buildPagePath(page)}
                  aria-current={page === currentPage ? "page" : undefined}
                  className={`inline-flex h-10 min-w-10 items-center justify-center rounded-lg border px-3 text-sm font-medium transition-colors ${
                    page === currentPage
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border hover:bg-secondary/60"
                  }`}
                >
                  {page}
                </Link>
              ))}

              {nextUrl ? (
                <Link
                  to={buildPagePath(currentPage + 1)}
                  rel="next"
                  className="inline-flex items-center gap-1 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-secondary/60 transition-colors"
                >
                  Next <ChevronRight className="h-4 w-4" />
                </Link>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground opacity-50">
                  Next <ChevronRight className="h-4 w-4" />
                </span>
              )}
            </nav>
          )}

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
