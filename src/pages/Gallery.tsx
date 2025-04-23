
import { MainNav } from "@/components/MainNav";
import WhatsAppButton from "@/components/WhatsAppButton";
import GetQuoteButton from "@/components/GetQuoteButton";
import { Helmet } from "react-helmet";
import { InfoCard } from "@/components/ui/info-card";
import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const galleryItems = [
    {
      src: "/lovable-uploads/a474bf13-8a99-4bc1-b49a-9eaebe5b31ad.png",
      alt: "Modern sash windows with secondary glazing",
      description: "Contemporary sash windows enhanced with slim-line secondary glazing for improved thermal efficiency"
    },
    {
      src: "/lovable-uploads/b435a0a1-65cb-4dd3-9596-37ce74c9378e.png",
      alt: "Bay window secondary glazing installation",
      description: "Elegant bay window configuration with bespoke secondary glazing solution"
    },
    {
      src: "/lovable-uploads/c4397e06-c94f-421b-ad89-a31553ba1990.png",
      alt: "Period property secondary glazing",
      description: "Heritage property featuring discrete secondary glazing with noise reduction benefits"
    },
    {
      src: "/lovable-uploads/c7e8f368-37e7-4802-84d8-e96a040ac74c.png",
      alt: "Slim-line secondary glazing unit",
      description: "Minimalist secondary glazing installation perfect for modern apartments"
    },
    {
      src: "/lovable-uploads/84bdd7cf-5970-4949-a908-9ccf79610741.png",
      alt: "Triple window secondary glazing",
      description: "Custom-fitted secondary glazing for bay window configuration with privacy glass"
    },
    {
      src: "/lovable-uploads/f491fe90-350d-4010-9359-769a93c85044.png",
      alt: "Traditional window with secondary glazing",
      description: "Period property window with sympathetic secondary glazing installation"
    },
    {
      src: "/lovable-uploads/7f03d371-d4b3-4061-afe2-9723cde940ee.png",
      alt: "Commercial secondary glazing solution",
      description: "Large-scale commercial secondary glazing installation for optimal thermal performance"
    },
    {
      src: "/lovable-uploads/96267b17-0746-47d6-a83c-5554a6954fc7.png",
      alt: "Sash window with secondary glazing",
      description: "Traditional sash window with discrete secondary glazing for heritage properties"
    },
    {
      src: "/lovable-uploads/fe5cbcd6-a864-4fa4-b66b-5ccf4aa8dc73.png",
      alt: "French doors secondary glazing",
      description: "Bespoke secondary glazing solution for French doors with thermal insulation"
    },
    {
      src: "/lovable-uploads/397428a6-c620-4dc7-82d4-124e85a0fb40.png",
      alt: "Modern apartment secondary glazing",
      description: "Contemporary living space with noise-reducing secondary glazing"
    },
    {
      src: "/lovable-uploads/1e7ffedd-febf-41f0-a433-5150f9faa867.png",
      alt: "Urban property secondary glazing",
      description: "City apartment featuring acoustic secondary glazing for noise reduction"
    },
    {
      src: "/lovable-uploads/234f2a10-75eb-4670-9ef4-2b0337062fff.png",
      alt: "Bay window thermal solution",
      description: "Energy-efficient secondary glazing installation in period bay window"
    },
    {
      src: "/lovable-uploads/ce9088f5-c5ca-4b25-8db2-64d26a4ee954.png",
      alt: "Triple window configuration",
      description: "Elegant triple window setup with matching secondary glazing units"
    },
    {
      src: "/lovable-uploads/c2f200dd-d56e-45c6-9eaf-0aeb8ccde2a2.png",
      alt: "Curved bay window solution",
      description: "Specialized curved bay window secondary glazing installation"
    },
    {
      src: "/lovable-uploads/78d4ec89-4da8-46df-b9cf-722eaa162852.png",
      alt: "Heritage window treatment",
      description: "Listed building window with approved secondary glazing solution"
    },
    // Placeholder images that can be easily replaced
    {
      src: "/lovable-uploads/placeholder.svg",
      alt: "Secondary glazing installation",
      description: "Custom secondary glazing installation project",
      customClass: "placeholder-image" // Custom class for styling
    },
    {
      src: "/lovable-uploads/placeholder.svg",
      alt: "Modern window treatment",
      description: "Contemporary window enhancement with secondary glazing",
      customClass: "placeholder-image"
    },
    {
      src: "/lovable-uploads/placeholder.svg",
      alt: "Residential glazing project",
      description: "Home improvement secondary glazing solution",
      customClass: "placeholder-image"
    },
    {
      src: "/lovable-uploads/placeholder.svg",
      alt: "Commercial window installation",
      description: "Office building secondary glazing project",
      customClass: "placeholder-image"
    },
    {
      src: "/lovable-uploads/placeholder.svg",
      alt: "Heritage property glazing",
      description: "Listed building sympathetic secondary glazing",
      customClass: "placeholder-image"
    },
    {
      src: "/lovable-uploads/placeholder.svg",
      alt: "Acoustic glazing solution",
      description: "Noise reduction secondary glazing installation",
      customClass: "placeholder-image"
    },
    {
      src: "/lovable-uploads/placeholder.svg",
      alt: "Thermal improvement project",
      description: "Energy efficiency secondary glazing solution",
      customClass: "placeholder-image"
    },
    {
      src: "/lovable-uploads/placeholder.svg",
      alt: "Sash window enhancement",
      description: "Period sash window with secondary glazing",
      customClass: "placeholder-image"
    },
    {
      src: "/lovable-uploads/placeholder.svg",
      alt: "Modern office glazing",
      description: "Commercial space secondary glazing project",
      customClass: "placeholder-image"
    },
    {
      src: "/lovable-uploads/placeholder.svg",
      alt: "Victorian property glazing",
      description: "Heritage window secondary glazing installation",
      customClass: "placeholder-image"
    },
    {
      src: "/lovable-uploads/placeholder.svg",
      alt: "Residential noise reduction",
      description: "Sound insulation secondary glazing project",
      customClass: "placeholder-image"
    },
    {
      src: "/lovable-uploads/placeholder.svg",
      alt: "Contemporary window solution",
      description: "Modern secondary glazing installation",
      customClass: "placeholder-image"
    }
  ];

  const handleImageClick = (index: number) => {
    setSelectedImage(selectedImage === index ? null : index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Secondary Glazing Project Gallery | Window Installation Examples</title>
        <meta name="description" content="Browse our gallery of secondary glazing installations. See real examples of noise reduction, thermal efficiency, and security enhancement solutions for residential and commercial properties." />
        <meta name="keywords" content="secondary glazing gallery, window installations, glazing examples, noise reduction, thermal insulation, before and after" />
        <meta property="og:title" content="Secondary Glazing Project Gallery | Installation Examples" />
        <meta property="og:description" content="Explore our portfolio of expertly installed secondary glazing solutions. See real examples of our work across London." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/gallery" />
      </Helmet>
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
            <div 
              key={index} 
              className={`animate-fade-up group cursor-pointer transition-all duration-300 hover:shadow-xl rounded-lg overflow-hidden ${item.customClass || ''}`}
              onClick={() => handleImageClick(index)}
              data-item-id={`gallery-item-${index}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity" />
              </div>
              <div className="p-4 bg-white">
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4" onClick={closeModal}>
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <button 
                className="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-800 hover:bg-gray-200 z-10"
                onClick={closeModal}
              >
                ✕
              </button>
              <img 
                src={galleryItems[selectedImage].src} 
                alt={galleryItems[selectedImage].alt} 
                className="w-full h-auto max-h-[80vh] object-contain bg-white p-2 rounded-lg shadow-xl" 
              />
              <div className="mt-4 bg-white p-4 rounded-lg">
                <p className="font-medium text-lg">{galleryItems[selectedImage].alt}</p>
                <p className="text-gray-600">{galleryItems[selectedImage].description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <WhatsAppButton />
      <GetQuoteButton />
    </div>
  );
};

export default Gallery;
