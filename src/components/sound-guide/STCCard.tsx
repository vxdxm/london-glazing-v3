
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";

const STCCard = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Sound Transmission Class (STC)</h2>
        <p className="text-gray-600 mb-6">
          Sound Transmission Class (STC) is a rating that indicates how well a building element (such as a window) 
          blocks sound. The higher the STC rating, the better the element is at reducing sound transmission.
        </p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>STC Rating</TableHead>
              <TableHead>What You Can Hear</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>20-25</TableCell>
              <TableCell>Normal speech can be heard and understood</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>30-35</TableCell>
              <TableCell>Loud speech can be heard but not understood</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>40-45</TableCell>
              <TableCell>Loud speech is barely audible</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>50+</TableCell>
              <TableCell>Very loud sounds (shouting, musical instruments) are barely heard</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <p className="text-sm text-gray-500 mt-4">
          Single glazed windows typically have an STC rating of 26-28, while our premium acoustic secondary 
          glazing can achieve ratings of 45-48 when properly installed.
        </p>
      </CardContent>
    </Card>
  );
};

export default STCCard;
