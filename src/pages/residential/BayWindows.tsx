import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GlassOptions from "@/components/residential/GlassOptions";

const BayWindows = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <article className="prose lg:prose-xl max-w-none">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-8">Bay Window Secondary Glazing: Complete Guide</h1>
              <p className="text-gray-700 mb-4">
                Our bay window secondary glazing solutions are expertly designed to follow the contours 
                of your existing bay windows, preserving their architectural beauty while significantly 
                improving thermal and acoustic performance.
              </p>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a"
                alt="Elegant bay window installation"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Bay Window Styles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Traditional Bay Configuration</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <img 
                      src="https://images.unsplash.com/photo-1496307653780-42ee777d4833"
                      alt="Traditional bay window"
                      className="rounded-lg w-full h-[200px] object-cover mb-4"
                    />
                    <p className="text-gray-700">
                      Classic bay window configuration with multiple panels that follow the original window's 
                      angles. Perfect for Victorian and Edwardian properties, maintaining their period character 
                      while improving insulation.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Matches original window angles</li>
                      <li>Preserves period features</li>
                      <li>Enhanced thermal performance</li>
                      <li>Superior noise reduction</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Modern Bay System</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <img 
                      src="/lovable-uploads/7b385715-0bca-41ee-be8b-7df9caa5ac51.png"
                      alt="Modern bay window system"
                      className="rounded-lg w-full h-[200px] object-cover mb-4"
                    />
                    <p className="text-gray-700">
                      Contemporary bay window solutions featuring sleek frames and maximized glass area. 
                      Ideal for modern properties or updated traditional homes seeking a more current aesthetic.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Minimalist frame design</li>
                      <li>Maximum glass area</li>
                      <li>Improved thermal efficiency</li>
                      <li>Contemporary aesthetics</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Technical Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Frame System</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Slim aluminum profiles</li>
                    <li>Custom angle adaptors</li>
                    <li>Color-matched finishes</li>
                    <li>Discrete framework</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Operation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Smooth sliding mechanism</li>
                    <li>Easy-clean access</li>
                    <li>Multiple opening options</li>
                    <li>Secure locking system</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Installation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Professional fitting</li>
                    <li>Minimal disruption</li>
                    <li>Custom measurements</li>
                    <li>Quality assurance</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <GlassOptions />
        </article>
      </div>
    </div>
  );
};

export default BayWindows;