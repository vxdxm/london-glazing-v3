/**
 * Content Intelligence System for automatic internal linking and content suggestions
 */

export interface ContentPage {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  category: 'residential' | 'commercial' | 'specialized' | 'general';
  lastModified: string;
}

export interface InternalLink {
  text: string;
  url: string;
  relevanceScore: number;
}

export interface RelatedContent {
  title: string;
  url: string;
  description: string;
  category: string;
  relevanceScore: number;
}

// Content database for intelligent linking
export const contentDatabase: ContentPage[] = [
  {
    path: '/residential/sash-windows',
    title: 'Sash Window Secondary Glazing',
    description: 'Professional secondary glazing solutions for traditional sash windows',
    keywords: ['sash windows', 'traditional', 'heritage', 'sliding'],
    category: 'residential',
    lastModified: '2026-01-01'
  },
  {
    path: '/residential/bay-windows',
    title: 'Bay Window Secondary Glazing',
    description: 'Specialist bay window secondary glazing installations',
    keywords: ['bay windows', 'curved', 'panoramic', 'Victorian'],
    category: 'residential',
    lastModified: '2026-01-01'
  },
  {
    path: '/specialized/noise-reduction',
    title: 'Noise Reduction Secondary Glazing',
    description: 'Advanced acoustic glazing for maximum noise reduction',
    keywords: ['noise reduction', 'acoustic', 'soundproofing', 'traffic noise'],
    category: 'specialized',
    lastModified: '2026-01-01'
  },
  {
    path: '/specialized/thermal-insulation',
    title: 'Thermal Insulation Secondary Glazing',
    description: 'Energy-efficient secondary glazing for thermal insulation',
    keywords: ['thermal insulation', 'energy efficiency', 'heat retention', 'insulation'],
    category: 'specialized',
    lastModified: '2026-01-01'
  },
  {
    path: '/commercial/office-buildings',
    title: 'Office Building Secondary Glazing',
    description: 'Commercial secondary glazing solutions for office buildings',
    keywords: ['office buildings', 'commercial', 'workplace', 'productivity'],
    category: 'commercial',
    lastModified: '2026-01-01'
  }
];

// Calculate relevance score between two content pieces
export const calculateRelevanceScore = (currentKeywords: string[], targetKeywords: string[]): number => {
  const intersection = currentKeywords.filter(keyword => 
    targetKeywords.some(target => target.toLowerCase().includes(keyword.toLowerCase()))
  );
  
  const union = [...new Set([...currentKeywords, ...targetKeywords])];
  return intersection.length / union.length;
};

// Generate automatic internal links based on content context
export const generateInternalLinks = (currentPath: string, contentText: string): InternalLink[] => {
  const currentPage = contentDatabase.find(page => page.path === currentPath);
  if (!currentPage) return [];

  const links: InternalLink[] = [];
  const textLower = contentText.toLowerCase();

  contentDatabase.forEach(page => {
    if (page.path === currentPath) return; // Skip self-links

    // Check if any keywords from the target page appear in the current content
    page.keywords.forEach(keyword => {
      if (textLower.includes(keyword.toLowerCase())) {
        const relevanceScore = calculateRelevanceScore(currentPage.keywords, page.keywords);
        
        if (relevanceScore > 0.2) { // Only suggest if relevance is above threshold
          links.push({
            text: keyword,
            url: page.path,
            relevanceScore
          });
        }
      }
    });
  });

  // Sort by relevance and return top 5
  return links.sort((a, b) => b.relevanceScore - a.relevanceScore).slice(0, 5);
};

// Get related content suggestions
export const getRelatedContent = (currentPath: string, limit: number = 4): RelatedContent[] => {
  const currentPage = contentDatabase.find(page => page.path === currentPath);
  if (!currentPage) return [];

  const related: RelatedContent[] = [];

  contentDatabase.forEach(page => {
    if (page.path === currentPath) return; // Skip current page

    const relevanceScore = calculateRelevanceScore(currentPage.keywords, page.keywords);
    
    if (relevanceScore > 0.1) {
      related.push({
        title: page.title,
        url: page.path,
        description: page.description,
        category: page.category,
        relevanceScore
      });
    }
  });

  // Sort by relevance and category preference (same category gets boost)
  return related
    .sort((a, b) => {
      const categoryBonus = a.category === currentPage.category ? 0.1 : 0;
      return (b.relevanceScore + categoryBonus) - a.relevanceScore;
    })
    .slice(0, limit);
};

// Generate dynamic meta descriptions based on content
export const generateDynamicMetaDescription = (
  baseDescription: string,
  currentPath: string,
  customKeywords?: string[]
): string => {
  const currentPage = contentDatabase.find(page => page.path === currentPath);
  if (!currentPage) return baseDescription;

  const keywords = customKeywords || currentPage.keywords;
  const keywordPhrase = keywords.slice(0, 3).join(', ');
  
  // Add location and service specificity
  const locationPhrase = 'London specialist';
  const servicePhrase = 'professional installation';
  
  return `${baseDescription} Expert ${keywordPhrase} solutions from ${locationPhrase} with ${servicePhrase}.`;
};

// Content freshness indicator
export const getContentFreshness = (lastModified: string): 'fresh' | 'recent' | 'outdated' => {
  const modifiedDate = new Date(lastModified);
  const now = new Date();
  const daysDiff = Math.floor((now.getTime() - modifiedDate.getTime()) / (1000 * 60 * 60 * 24));

  if (daysDiff <= 30) return 'fresh';
  if (daysDiff <= 90) return 'recent';
  return 'outdated';
};

// Auto-suggest keywords based on content analysis
export const suggestKeywords = (content: string): string[] => {
  const commonTerms = [
    'secondary glazing', 'window installation', 'noise reduction', 'thermal insulation',
    'energy efficiency', 'acoustic glazing', 'heritage windows', 'listed buildings',
    'sash windows', 'bay windows', 'casement windows', 'double glazing',
    'London glazing', 'professional installation', 'window specialist'
  ];

  const contentLower = content.toLowerCase();
  const suggestions: string[] = [];

  commonTerms.forEach(term => {
    if (contentLower.includes(term.toLowerCase())) {
      suggestions.push(term);
    }
  });

  return [...new Set(suggestions)]; // Remove duplicates
};