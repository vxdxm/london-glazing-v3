import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HorizontalSliding = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Horizontal Sliding Windows</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Standard Horizontal Sliding</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <img 
                  src="/lovable-uploads/8068257b-94f9-43c7-a875-52753b438956.png"
                  alt="Standard horizontal sliding window"
                  className="rounded-lg w-full h-[200px] object-cover mb-4"
                />
                <p>
                  Our standard horizontal sliding system typically consists of 2 or 3 panels, which is standard for majority of the windows. 
                  This classic design combines functionality with ease of use, perfect for residential applications where traditional window 
                  styles are preferred.
                </p>
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
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
                  alt="Multi-track sliding window system"
                  className="rounded-lg w-full h-[200px] object-cover mb-4"
                />
                <p>
                  Our advanced multi-track sliding system can accommodate 3 to 5 panels within one window frame, offering maximum flexibility 
                  for larger openings. Perfect for creating panoramic views and seamless indoor-outdoor transitions in modern homes and 
                  commercial spaces.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HorizontalSliding;