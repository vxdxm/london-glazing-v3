
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const NoiseSourcesTable = () => {
  return (
    <div className="bg-secondary/50 p-6 rounded-lg mb-12">
      <h2 id="common-noise-sources" className="text-2xl font-semibold mb-4">Common Noise Sources and Their dB Levels</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Noise Source</TableHead>
            <TableHead>Typical dB Level</TableHead>
            <TableHead>Perceived Loudness</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Rustling leaves</TableCell>
            <TableCell>20 dB</TableCell>
            <TableCell>Just audible</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Quiet residential area at night</TableCell>
            <TableCell>30-40 dB</TableCell>
            <TableCell>Very quiet</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Normal conversation</TableCell>
            <TableCell>60 dB</TableCell>
            <TableCell>Comfortable hearing level</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Busy office</TableCell>
            <TableCell>70 dB</TableCell>
            <TableCell>Moderately loud</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>City traffic (from inside car)</TableCell>
            <TableCell>80-85 dB</TableCell>
            <TableCell>Very loud, annoying</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Motorcycle, lawn mower</TableCell>
            <TableCell>90-95 dB</TableCell>
            <TableCell>Very loud, hearing damage after prolonged exposure</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Subway train, car horn</TableCell>
            <TableCell>100 dB</TableCell>
            <TableCell>Uncomfortably loud</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Rock concert, chainsaw</TableCell>
            <TableCell>110-120 dB</TableCell>
            <TableCell>Extremely loud, pain threshold begins</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default NoiseSourcesTable;
