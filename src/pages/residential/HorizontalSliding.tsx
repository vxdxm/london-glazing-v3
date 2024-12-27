import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GlassOptions from "@/components/residential/GlassOptions";

const HorizontalSliding = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-4">Horizontal Sliding Windows</h1>
            <p className="text-gray-700 mb-6">
              Our horizontal sliding secondary glazing solutions offer smooth operation and excellent insulation,
              perfect for wide window openings and modern properties.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
              alt="Modern horizontal sliding window installation"
              className="rounded-lg w-full h-[300px] object-cover"
            />
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Window Styles Available</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Standard Horizontal Sliding</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <img 
                    src="/lovable-uploads/41ebf8a1-1774-4e48-ab3c-36589de97413.png"
                    alt="Standard horizontal sliding window"
                    className="rounded-lg w-full h-[200px] object-cover mb-4"
                  />
                  <p className="text-gray-700">
                    Classic horizontal sliding secondary glazing with smooth operation and excellent thermal properties.
                    Typically consisting of 2 or 3 panels which is standard for the majority of windows,
                    perfect for wide window openings and contemporary spaces.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Smooth sliding operation</li>
                    <li>2 to 3 panel configurations standard</li>
                    <li>Ideal for wide openings</li>
                    <li>Easy maintenance</li>
                    <li>Superior weather sealing</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Multi-Track Sliding System</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1486718448742-163732cd1544"
                    alt="Multi-track sliding window system"
                    className="rounded-lg w-full h-[200px] object-cover mb-4"
                  />
                  <p className="text-gray-700">
                    Advanced multi-track system allowing multiple panels to slide independently.
                    Available with 3 to 5 panels within one window frame, perfect for panoramic views 
                    and large openings where maximum flexibility is required.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Independent panel operation</li>
                    <li>3 to 5 panel configurations available</li>
                    <li>Perfect for panoramic windows</li>
                    <li>Enhanced ventilation options</li>
                    <li>Customizable configurations</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Understanding Horizontal Sliding Secondary Glazing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                Horizontal sliding secondary glazing is an excellent solution for modern properties and wide window openings.
                The system consists of panels that slide horizontally along high-quality tracks, providing easy operation
                and access to your primary windows.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Smooth and quiet operation</li>
                <li>Perfect for wide window openings</li>
                <li>Excellent thermal and acoustic insulation</li>
                <li>Easy access for cleaning and maintenance</li>
                <li>Various configurations available</li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1460574283810-2aab119d8511"
                alt="Horizontal sliding window detail"
                className="rounded-lg w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </section>

        <GlassOptions />
      </div>
    </div>
  );
};

export default HorizontalSliding;