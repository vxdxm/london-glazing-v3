import { MainNav } from "@/components/MainNav";
import WhatsAppButton from "@/components/WhatsAppButton";
import { IntelligentSEO } from "@/components/seo/IntelligentSEO";
import { Footer } from "@/components/Footer";
import { OptimizedLazyImage } from "@/components/ui/optimized-lazy-image";
import { RelatedContent } from "@/components/seo/RelatedContent";

const Gallery = () => {
  const galleryItems = [
    {
      src: "/lovable-uploads/a474bf13-8a99-4bc1-b49a-9eaebe5b31ad.png",
      alt: "Modern sash windows with secondary glazing installation showing thermal efficiency improvements",
      description: "Contemporary sash windows enhanced with slim-line secondary glazing for improved thermal efficiency"
    },
    {
      src: "/lovable-uploads/b435a0a1-65cb-4dd3-9596-37ce74c9378e.png",
      alt: "Elegant bay window secondary glazing solution with noise reduction benefits",
      description: "Elegant bay window configuration with bespoke secondary glazing solution"
    },
    {
      src: "/lovable-uploads/c4397e06-c94f-421b-ad89-a31553ba1990.png",
      alt: "Heritage property secondary glazing with discrete installation and acoustic improvements",
      description: "Heritage property featuring discrete secondary glazing with noise reduction benefits"
    },
    {
      src: "/lovable-uploads/c7e8f368-37e7-4802-84d8-e96a040ac74c.png",
      alt: "Minimalist secondary glazing unit perfect for modern urban apartments",
      description: "Minimalist secondary glazing installation perfect for modern apartments"
    },
    {
      src: "/lovable-uploads/84bdd7cf-5970-4949-a908-9ccf79610741.png",
      alt: "Custom triple window secondary glazing with privacy glass for bay windows",
      description: "Custom-fitted secondary glazing for bay window configuration with privacy glass"
    },
    {
      src: "/lovable-uploads/f491fe90-350d-4010-9359-769a93c85044.png",
      alt: "Period property window with conservation-compliant secondary glazing",
      description: "Period property window with sympathetic secondary glazing installation"
    },
    {
      src: "/lovable-uploads/7f03d371-d4b3-4061-afe2-9723cde940ee.png",
      alt: "Large-scale commercial secondary glazing for optimal thermal performance",
      description: "Large-scale commercial secondary glazing installation for optimal thermal performance"
    },
    {
      src: "/lovable-uploads/96267b17-0746-47d6-a83c-5554a6954fc7.png",
      alt: "Traditional sash window with heritage-friendly secondary glazing solution",
      description: "Traditional sash window with discrete secondary glazing for heritage properties"
    },
    {
      src: "/lovable-uploads/fe5cbcd6-a864-4fa4-b66b-5ccf4aa8dc73.png",
      alt: "French doors with bespoke secondary glazing for thermal insulation",
      description: "Bespoke secondary glazing solution for French doors with thermal insulation"
    },
    {
      src: "/lovable-uploads/397428a6-c620-4dc7-82d4-124e85a0fb40.png",
      alt: "Modern apartment secondary glazing with noise-reducing properties",
      description: "Contemporary living space with noise-reducing secondary glazing"
    },
    {
      src: "/lovable-uploads/1e7ffedd-febf-41f0-a433-5150f9faa867.png",
      alt: "Urban property with acoustic secondary glazing for city noise reduction",
      description: "City apartment featuring acoustic secondary glazing for noise reduction"
    },
    {
      src: "/lovable-uploads/234f2a10-75eb-4670-9ef4-2b0337062fff.png",
      alt: "Period bay window with energy-efficient secondary glazing installation",
      description: "Energy-efficient secondary glazing installation in period bay window"
    },
    {
      src: "/lovable-uploads/ce9088f5-c5ca-4b25-8db2-64d26a4ee954.png",
      alt: "Triple window configuration with matching secondary glazing units",
      description: "Elegant triple window setup with matching secondary glazing units"
    },
    {
      src: "/lovable-uploads/c2f200dd-d56e-45c6-9eaf-0aeb8ccde2a2.png",
      alt: "Specialized curved bay window secondary glazing with custom fitting",
      description: "Specialized curved bay window secondary glazing installation"
    },
    {
      src: "/lovable-uploads/78d4ec89-4da8-46df-b9cf-722eaa162852.png",
      alt: "Listed building approved secondary glazing solution maintaining heritage character",
      description: "Listed building window with approved secondary glazing solution"
    }
  ];

  // Get first 3 images for preloading
  const preloadImages = galleryItems.slice(0, 3).map(item => item.src);

  return (
    <div className="min-h-screen">
      <IntelligentSEO
        title="Secondary Glazing Gallery | London Installation Examples & Case Studies"
        description="Browse our extensive gallery of secondary glazing installations across London. Real examples of noise reduction, thermal efficiency, and security enhancement solutions for residential and commercial properties."
        keywords={[
          "secondary glazing gallery",
          "glazing installation examples",
          "London window improvements",
          "noise reduction gallery",
          "thermal insulation examples",
          "heritage glazing solutions",
          "before and after windows"
        ]}
        service={{
          name: "Secondary Glazing Installation Gallery",
          description: "Professional gallery showcasing secondary glazing installations across London",
          category: "Construction & Home Improvement",
          availability: "InStock"
        }}
        type="website"
      />
      <MainNav />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-center">Our Gallery</h1>
        
        <div className="prose max-w-3xl mx-auto mb-12 text-center text-gray-600">
          <p className="text-lg">
            Explore our portfolio of expertly installed secondary glazing solutions. Each project showcases our commitment 
            to enhancing both the aesthetic and functional aspects of windows across residential and commercial properties. 
            From historic renovations to modern installations, discover how our secondary glazing systems provide superior 
            noise reduction, thermal efficiency, and security while preserving the original character of your windows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div key={index} className="animate-fade-up group">
              <OptimizedLazyImage
                src={item.src}
                alt={item.alt}
                className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform group-hover:scale-105"
                priority={index < 3}
                aspectRatio={16/9}
                width={400}
                height={225}
              />
              <p className="mt-2 text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        
        <RelatedContent currentPath="/gallery" className="mt-16" />
      </div>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Gallery;
