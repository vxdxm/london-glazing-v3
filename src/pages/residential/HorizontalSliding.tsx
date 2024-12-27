import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HorizontalSliding = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Horizontal Sliding Windows</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="w-full h-64 mb-8 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705"
                alt="Horizontal sliding window installation showing smooth operation and wide opening"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Features & Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Smooth horizontal sliding operation</li>
                <li>Perfect for wide window openings</li>
                <li>Easy access to primary windows</li>
                <li>Excellent ventilation options</li>
                <li>Ideal for large windows</li>
                <li>Minimal maintenance required</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>High-quality aluminum frames</li>
                <li>Smooth-glide track system</li>
                <li>Multiple locking points for security</li>
                <li>Weather-sealed edges</li>
                <li>Various glass options available</li>
                <li>Custom sizing available</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HorizontalSliding;