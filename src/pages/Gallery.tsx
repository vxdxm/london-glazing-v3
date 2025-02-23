
import { MainNav } from "@/components/MainNav";
import WhatsAppButton from "@/components/WhatsAppButton";

const Gallery = () => {
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
    }
  ];

  return (
    <div className="min-h-screen">
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
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform group-hover:scale-105"
                loading="lazy"
              />
              <p className="mt-2 text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Gallery;
