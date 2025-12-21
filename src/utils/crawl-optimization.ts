/**
 * Advanced crawl optimization utilities for maximum search engine efficiency
 */

export const generateImageSitemap = () => {
  const images = [
    {
      url: 'https://secondaryglazingspecialist.com/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg',
      caption: 'Professional secondary glazing installation in London heritage home',
      title: 'Secondary Glazing Installation',
      license: 'https://secondaryglazingspecialist.com/license'
    },
    {
      url: 'https://secondaryglazingspecialist.com/lovable-uploads/b39446b8-e7b5-4000-ac4b-a7a691a5bb14.png',
      caption: 'Secondary Glazing Specialist company logo',
      title: 'Company Logo',
      license: 'https://secondaryglazingspecialist.com/license'
    }
  ];
  
  return images;
};

export const generateVideoSitemap = () => {
  // Video content for future implementation
  const videos = [
    {
      url: 'https://secondaryglazingspecialist.com/videos/installation-process',
      thumbnailUrl: 'https://secondaryglazingspecialist.com/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg',
      title: 'Secondary Glazing Installation Process',
      description: 'Professional installation of secondary glazing in London homes',
      duration: '180',
      publicationDate: '2026-01-01'
    }
  ];
  
  return videos;
};

export const generateNewsSitemap = () => {
  // News content for future implementation
  const news = [
    {
      url: 'https://secondaryglazingspecialist.com/news/latest-glazing-technology',
      title: 'Latest Advances in Secondary Glazing Technology',
      publishDate: '2026-01-01',
      language: 'en',
      genres: 'UserGenerated, Blog',
      keywords: 'secondary glazing, technology, innovation'
    }
  ];
  
  return news;
};

export const optimizeInternalLinkStructure = () => {
  // Create a comprehensive internal link map
  const linkStructure = {
    home: {
      links: ['/residential', '/commercial', '/specialized'],
      anchor: 'Secondary Glazing Services',
      priority: 1.0
    },
    residential: {
      links: ['/specialized', '/'],
      anchor: 'Heritage Glazing Solutions',
      priority: 0.9
    },
    commercial: {
      links: ['/specialized', '/'],
      anchor: 'Commercial Glazing Services',
      priority: 0.9
    },
    specialized: {
      links: ['/residential', '/commercial', '/'],
      anchor: 'Specialized Applications',
      priority: 0.8
    }
  };
  
  return linkStructure;
};

export const generateBreadcrumbNavigation = (path: string) => {
  const breadcrumbs = [
    { name: 'Home', url: '/' }
  ];
  
  const pathSegments = path.split('/').filter(Boolean);
  
  pathSegments.forEach((segment, index) => {
    const url = '/' + pathSegments.slice(0, index + 1).join('/');
    const name = segment.charAt(0).toUpperCase() + segment.slice(1);
    breadcrumbs.push({ name, url });
  });
  
  return breadcrumbs;
};

export const implementCrawlOptimization = () => {
  // Add noindex to search results and dynamic pages
  const path = window.location.pathname;
  
  if (path.includes('/search') || path.includes('?')) {
    const noIndexMeta = document.createElement('meta');
    noIndexMeta.name = 'robots';
    noIndexMeta.content = 'noindex, follow';
    document.head.appendChild(noIndexMeta);
  }
  
  // Add hreflang for international SEO
  const hreflang = document.createElement('link');
  hreflang.rel = 'alternate';
  hreflang.hreflang = 'en-GB';
  hreflang.href = window.location.href;
  document.head.appendChild(hreflang);
  
  // Add prev/next pagination links if applicable
  const currentPage = new URLSearchParams(window.location.search).get('page');
  if (currentPage) {
    const pageNum = parseInt(currentPage);
    if (pageNum > 1) {
      const prevLink = document.createElement('link');
      prevLink.rel = 'prev';
      prevLink.href = `${window.location.pathname}?page=${pageNum - 1}`;
      document.head.appendChild(prevLink);
    }
    
    const nextLink = document.createElement('link');
    nextLink.rel = 'next';
    nextLink.href = `${window.location.pathname}?page=${pageNum + 1}`;
    document.head.appendChild(nextLink);
  }
};