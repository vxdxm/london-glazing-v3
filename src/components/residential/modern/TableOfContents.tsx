
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TableOfContents = () => {
  return (
    <Card className="mb-8 hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle>Contents</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="grid gap-2 md:grid-cols-2">
          <li>
            <a href="#introduction" className="text-primary hover:underline">Introduction</a>
          </li>
          <li>
            <a href="#historic-buildings" className="text-primary hover:underline">Overview of Historic Buildings</a>
          </li>
          <li>
            <a href="#energy-efficiency" className="text-primary hover:underline">Importance of Energy Efficiency</a>
          </li>
          <li>
            <a href="#benefits" className="text-primary hover:underline">Energy Efficiency Benefits</a>
          </li>
          <li>
            <a href="#preservation" className="text-primary hover:underline">Preservation of Historical Integrity</a>
          </li>
          <li>
            <a href="#comfort" className="text-primary hover:underline">Enhanced Indoor Comfort</a>
          </li>
          <li>
            <a href="#conclusion" className="text-primary hover:underline">Conclusion</a>
          </li>
          <li>
            <a href="#faq" className="text-primary hover:underline">FAQs</a>
          </li>
          <li>
            <a href="#features" className="text-primary hover:underline">Key Features</a>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default TableOfContents;
