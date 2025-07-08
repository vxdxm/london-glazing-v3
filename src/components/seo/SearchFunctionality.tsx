import React, { useState, useEffect, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { contentDatabase, type ContentPage } from '@/utils/content-intelligence';
import { useNavigate } from 'react-router-dom';

interface SearchResult extends ContentPage {
  relevanceScore: number;
}

interface SearchFunctionalityProps {
  onClose?: () => void;
  autoFocus?: boolean;
}

/**
 * Advanced search functionality with schema markup and intelligent results
 */
export const SearchFunctionality: React.FC<SearchFunctionalityProps> = ({ 
  onClose, 
  autoFocus = false 
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Calculate search results with relevance scoring
  const searchResults = useMemo(() => {
    if (!query.trim()) return [];

    const queryLower = query.toLowerCase();
    const results: SearchResult[] = [];

    contentDatabase.forEach(page => {
      let relevanceScore = 0;

      // Title match (highest weight)
      if (page.title.toLowerCase().includes(queryLower)) {
        relevanceScore += 3;
      }

      // Description match (medium weight)
      if (page.description.toLowerCase().includes(queryLower)) {
        relevanceScore += 2;
      }

      // Keywords match (medium weight)
      page.keywords.forEach(keyword => {
        if (keyword.toLowerCase().includes(queryLower)) {
          relevanceScore += 2;
        }
      });

      // Partial matches (lower weight)
      const queryWords = queryLower.split(' ');
      queryWords.forEach(word => {
        if (word.length > 2) {
          if (page.title.toLowerCase().includes(word)) relevanceScore += 1;
          if (page.description.toLowerCase().includes(word)) relevanceScore += 0.5;
        }
      });

      if (relevanceScore > 0) {
        results.push({ ...page, relevanceScore });
      }
    });

    return results.sort((a, b) => b.relevanceScore - a.relevanceScore).slice(0, 8);
  }, [query]);

  // Handle search submission
  const handleSearch = (selectedResult?: SearchResult) => {
    if (selectedResult) {
      navigate(selectedResult.path);
      setIsOpen(false);
      setQuery('');
      onClose?.();
    } else if (searchResults.length > 0) {
      navigate(searchResults[0].path);
      setIsOpen(false);
      setQuery('');
      onClose?.();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        onClose?.();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  return (
    <div className="relative">
      {/* Search Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://secondaryglazingspecialist.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://secondaryglazingspecialist.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />

      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="search"
          placeholder="Search secondary glazing solutions..."
          className="pl-10 pr-10"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          autoFocus={autoFocus}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleSearch();
            }
          }}
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
            onClick={() => {
              setQuery('');
              setIsOpen(false);
            }}
          >
            <X className="h-3 w-3" />
          </Button>
        )}
      </div>

      {/* Search Results */}
      {isOpen && query.trim() && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 max-h-96 overflow-y-auto shadow-lg">
          <CardContent className="p-0">
            {searchResults.length > 0 ? (
              <div className="divide-y">
                {searchResults.map((result, index) => (
                  <button
                    key={result.path}
                    className="w-full p-4 text-left hover:bg-muted transition-colors focus:bg-muted focus:outline-none"
                    onClick={() => handleSearch(result)}
                  >
                    <div className="font-medium text-sm">{result.title}</div>
                    <div className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {result.description}
                    </div>
                    <div className="flex items-center mt-2 space-x-2">
                      <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                        {result.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Relevance: {Math.round(result.relevanceScore * 10)}%
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="p-4 text-center text-muted-foreground">
                <p>No results found for "{query}"</p>
                <p className="text-xs mt-1">Try searching for "sash windows", "noise reduction", or "thermal insulation"</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};