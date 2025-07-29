/**
 * Automatic XML Sitemap Generation for Enhanced SEO
 */

export interface SitemapEntry {
  url: string;
  lastModified: string;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  images?: Array<{
    url: string;
    caption?: string;
    title?: string;
  }>;
}

export interface SitemapSection {
  name: string;
  entries: SitemapEntry[];
}

// Main sitemap entries
export const mainSitemapEntries: SitemapEntry[] = [
  {
    url: '/',
    lastModified: '2024-01-25',
    changeFrequency: 'weekly',
    priority: 1.0,
    images: [
      {
        url: '/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg',
        caption: 'Professional secondary glazing installation',
        title: 'Secondary Glazing Specialist Hero Image'
      }
    ]
  },
  {
    url: '/quote-request',
    lastModified: '2024-01-20',
    changeFrequency: 'monthly',
    priority: 0.9
  },
  {
    url: '/gallery',
    lastModified: '2024-01-22',
    changeFrequency: 'weekly',
    priority: 0.8
  },
  {
    url: '/faqs',
    lastModified: '2024-01-18',
    changeFrequency: 'monthly',
    priority: 0.7
  },
  {
    url: '/contact',
    lastModified: '2024-01-15',
    changeFrequency: 'monthly',
    priority: 0.8
  }
];

// Residential services sitemap
export const residentialSitemapEntries: SitemapEntry[] = [
  {
    url: '/residential',
    lastModified: '2024-01-20',
    changeFrequency: 'weekly',
    priority: 0.9
  },
  {
    url: '/residential/sash-windows',
    lastModified: '2024-01-22',
    changeFrequency: 'monthly',
    priority: 0.8
  },
  {
    url: '/residential/bay-windows',
    lastModified: '2024-01-21',
    changeFrequency: 'monthly',
    priority: 0.8
  },
  {
    url: '/residential/casement-windows',
    lastModified: '2024-01-20',
    changeFrequency: 'monthly',
    priority: 0.8
  },
  {
    url: '/residential/horizontal-sliding',
    lastModified: '2024-01-19',
    changeFrequency: 'monthly',
    priority: 0.7
  },
  {
    url: '/residential/combination',
    lastModified: '2024-01-18',
    changeFrequency: 'monthly',
    priority: 0.7
  }
];

// Commercial services sitemap
export const commercialSitemapEntries: SitemapEntry[] = [
  {
    url: '/commercial',
    lastModified: '2024-01-20',
    changeFrequency: 'weekly',
    priority: 0.9
  },
  {
    url: '/commercial/office-buildings',
    lastModified: '2024-01-19',
    changeFrequency: 'monthly',
    priority: 0.8
  },
  {
    url: '/commercial/hospitality-sector',
    lastModified: '2024-01-18',
    changeFrequency: 'monthly',
    priority: 0.7
  },
  {
    url: '/commercial/healthcare-industry',
    lastModified: '2024-01-17',
    changeFrequency: 'monthly',
    priority: 0.7
  },
  {
    url: '/commercial/educational-sector',
    lastModified: '2024-01-16',
    changeFrequency: 'monthly',
    priority: 0.7
  }
];

// Specialized services sitemap
export const specializedSitemapEntries: SitemapEntry[] = [
  {
    url: '/specialized',
    lastModified: '2024-01-20',
    changeFrequency: 'weekly',
    priority: 0.9
  },
  {
    url: '/specialized/noise-reduction',
    lastModified: '2024-01-23',
    changeFrequency: 'weekly',
    priority: 0.9
  },
  {
    url: '/specialized/thermal-insulation',
    lastModified: '2024-01-22',
    changeFrequency: 'monthly',
    priority: 0.8
  },
  {
    url: '/specialized/acoustic-glazing',
    lastModified: '2024-01-21',
    changeFrequency: 'monthly',
    priority: 0.8
  },
  {
    url: '/specialized/security-glazing',
    lastModified: '2024-01-20',
    changeFrequency: 'monthly',
    priority: 0.7
  },
  {
    url: '/locations/canary-wharf-offices',
    lastModified: '2025-01-29',
    changeFrequency: 'monthly',
    priority: 0.8
  },
  {
    url: '/locations/clapham-busy-roads',
    lastModified: '2025-01-29',
    changeFrequency: 'monthly',
    priority: 0.8
  },
  {
    url: '/locations/heathrow-aircraft',
    lastModified: '2025-01-29',
    changeFrequency: 'monthly',
    priority: 0.8
  },
  {
    url: '/locations/kings-cross-train-noise',
    lastModified: '2025-01-29',
    changeFrequency: 'monthly',
    priority: 0.8
  },
  {
    url: '/locations/shoreditch-urban-noise',
    lastModified: '2025-01-29',
    changeFrequency: 'monthly',
    priority: 0.8
  }
];

export const generateXMLSitemap = (entries: SitemapEntry[], baseUrl = 'https://secondaryglazingspecialist.com'): string => {
  const header = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;
  
  const footer = `</urlset>`;
  
  const urls = entries.map(entry => {
    let urlXml = `  <url>
    <loc>${baseUrl}${entry.url}</loc>
    <lastmod>${entry.lastModified}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>`;

    // Add image sitemap entries if present
    if (entry.images && entry.images.length > 0) {
      entry.images.forEach(image => {
        urlXml += `
    <image:image>
      <image:loc>${baseUrl}${image.url}</image:loc>`;
        
        if (image.caption) {
          urlXml += `
      <image:caption>${image.caption}</image:caption>`;
        }
        
        if (image.title) {
          urlXml += `
      <image:title>${image.title}</image:title>`;
        }
        
        urlXml += `
    </image:image>`;
      });
    }

    urlXml += `
  </url>`;
    
    return urlXml;
  }).join('\n');
  
  return `${header}\n${urls}\n${footer}`;
};

export const generateSitemapIndex = (sitemaps: Array<{ name: string; lastModified: string }>, baseUrl = 'https://secondaryglazingspecialist.com'): string => {
  const header = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  
  const footer = `</sitemapindex>`;
  
  const sitemapEntries = sitemaps.map(sitemap => `  <sitemap>
    <loc>${baseUrl}/sitemap-${sitemap.name}.xml</loc>
    <lastmod>${sitemap.lastModified}</lastmod>
  </sitemap>`).join('\n');
  
  return `${header}\n${sitemapEntries}\n${footer}`;
};

// Generate all sitemaps
export const generateAllSitemaps = () => {
  const sitemaps = [
    {
      name: 'main',
      content: generateXMLSitemap(mainSitemapEntries),
      lastModified: '2024-01-25'
    },
    {
      name: 'residential',
      content: generateXMLSitemap(residentialSitemapEntries),
      lastModified: '2024-01-22'
    },
    {
      name: 'commercial',
      content: generateXMLSitemap(commercialSitemapEntries),
      lastModified: '2024-01-20'
    },
    {
      name: 'specialized',
      content: generateXMLSitemap(specializedSitemapEntries),
      lastModified: '2024-01-23'
    }
  ];

  const sitemapIndex = generateSitemapIndex(
    sitemaps.map(s => ({ name: s.name, lastModified: s.lastModified }))
  );

  return {
    sitemaps,
    index: sitemapIndex
  };
};

// Utility to check if sitemap needs updating
export const needsSitemapUpdate = (lastGenerated: string, entries: SitemapEntry[]): boolean => {
  const lastGenDate = new Date(lastGenerated);
  const mostRecentEntry = entries.reduce((latest, entry) => {
    const entryDate = new Date(entry.lastModified);
    return entryDate > latest ? entryDate : latest;
  }, new Date(0));
  
  return mostRecentEntry > lastGenDate;
};