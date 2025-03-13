
import { Wrench, ShieldCheck, Hammer } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const CommonIssues = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-8">Common Secondary Glazing Issues</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="bg-sky-100 p-3 rounded-full">
              <Wrench className="h-6 w-6 text-sky-700" />
            </div>
            <CardTitle>Spiral Balance Failures</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Worn or broken spiral balances causing sashes to drop or become difficult to operate. 
              This common issue can make vertical sliding units virtually unusable if not repaired.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="bg-sky-100 p-3 rounded-full">
              <ShieldCheck className="h-6 w-6 text-sky-700" />
            </div>
            <CardTitle>Alignment Problems</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Misaligned frames causing sticking, dragging, or gaps that reduce energy efficiency and 
              noise insulation capabilities of your secondary glazing.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="bg-sky-100 p-3 rounded-full">
              <Hammer className="h-6 w-6 text-sky-700" />
            </div>
            <CardTitle>Hardware Damage</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Broken locks, handles, or catches that compromise security and functionality. 
              Our repair service includes replacement of all secondary glazing hardware.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CommonIssues;
