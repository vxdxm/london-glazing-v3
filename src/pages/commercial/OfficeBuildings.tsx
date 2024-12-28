import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const OfficeBuildings = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Office Buildings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-full mb-4">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src="/lovable-uploads/cbea2331-f6cd-428a-8004-9fc8ae8d4de8.png"
                    alt="Office partition with secondary glazing showing a workspace with bookshelves and a view into an industrial area"
                    className="rounded-lg object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
              <CardTitle>Sound Insulation Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Our advanced secondary glazing systems provide exceptional noise reduction for office environments, creating quieter, more productive workspaces.
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Up to 80% noise reduction</li>
                <li>Ideal for city center locations</li>
                <li>Minimal disruption during installation</li>
                <li>Compatible with existing window systems</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-full mb-4">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src="https://images.unsplash.com/photo-1496307653780-42ee777d4833"
                    alt="Modern glass building"
                    className="rounded-lg object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
              <CardTitle>Energy Efficiency Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Secondary glazing significantly improves thermal insulation, reducing energy costs and creating a more comfortable work environment.
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Reduced heating and cooling costs</li>
                <li>Better temperature control</li>
                <li>Elimination of drafts</li>
                <li>Lower carbon footprint</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OfficeBuildings;