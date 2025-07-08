import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { getRelatedContent, type RelatedContent as RelatedContentType } from '@/utils/content-intelligence';

interface RelatedContentProps {
  currentPath: string;
  className?: string;
  limit?: number;
}

/**
 * Related Content component for intelligent content suggestions
 * Enhances internal linking and user engagement
 */
export const RelatedContent: React.FC<RelatedContentProps> = ({
  currentPath,
  className = '',
  limit = 4
}) => {
  const relatedItems = getRelatedContent(currentPath, limit);

  if (relatedItems.length === 0) {
    return null;
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      residential: 'bg-blue-100 text-blue-800',
      commercial: 'bg-green-100 text-green-800',
      specialized: 'bg-purple-100 text-purple-800',
      general: 'bg-gray-100 text-gray-800'
    };
    return colors[category as keyof typeof colors] || colors.general;
  };

  return (
    <section className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Related Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relatedItems.map((item, index) => (
            <Card key={item.url} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <Button asChild variant="outline" size="sm">
                    <Link to={item.url} className="flex items-center space-x-1">
                      <span>Learn More</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </Button>
                  <span className="text-xs text-muted-foreground">
                    Relevance: {Math.round(item.relevanceScore * 100)}%
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};