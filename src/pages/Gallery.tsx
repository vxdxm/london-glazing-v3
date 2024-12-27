import { MainNav } from "@/components/MainNav";

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <MainNav />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Gallery images with descriptions */}
          <div className="animate-fade-up group">
            <img
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
              alt="Software code on monitor"
              className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform group-hover:scale-105"
            />
            <p className="mt-2 text-sm text-gray-600">Modern software development environment</p>
          </div>
          <div className="animate-fade-up group">
            <img
              src="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a"
              alt="Glass building architecture"
              className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform group-hover:scale-105"
            />
            <p className="mt-2 text-sm text-gray-600">Contemporary architectural design</p>
          </div>
          <div className="animate-fade-up group">
            <img
              src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2"
              alt="Modern building perspective"
              className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform group-hover:scale-105"
            />
            <p className="mt-2 text-sm text-gray-600">Innovative building solutions</p>
          </div>
          <div className="animate-fade-up group">
            <img
              src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e"
              alt="Building facade"
              className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform group-hover:scale-105"
            />
            <p className="mt-2 text-sm text-gray-600">Modern architectural excellence</p>
          </div>
          <div className="animate-fade-up group">
            <img
              src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace"
              alt="White building structure"
              className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform group-hover:scale-105"
            />
            <p className="mt-2 text-sm text-gray-600">Clean architectural design</p>
          </div>
          <div className="animate-fade-up group">
            <img
              src="https://images.unsplash.com/photo-1486718448742-163732cd1544"
              alt="Minimalist structure"
              className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform group-hover:scale-105"
            />
            <p className="mt-2 text-sm text-gray-600">Minimalist architectural approach</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;