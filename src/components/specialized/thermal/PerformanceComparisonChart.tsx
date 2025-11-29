import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import { Thermometer, Volume2, Info } from "lucide-react";
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface PerformanceData {
  name: string;
  glassType: string;
  gap: string;
  thermalPerformance: number; // Lower U-value is better (inverted for display)
  acousticPerformance: number; // dB reduction
  uValue: number; // Actual U-value for display
}

export const PerformanceComparisonChart = () => {
  const performanceData: PerformanceData[] = [
    {
      name: "4mm, 30mm gap",
      glassType: "4mm Standard",
      gap: "30mm",
      thermalPerformance: 31, // (5.8-3.2)/5.8 * 100
      acousticPerformance: 25,
      uValue: 3.2
    },
    {
      name: "4mm, 50mm gap",
      glassType: "4mm Standard",
      gap: "50mm",
      thermalPerformance: 48, // (5.8-3.0)/5.8 * 100
      acousticPerformance: 28,
      uValue: 3.0
    },
    {
      name: "4mm, 100mm gap",
      glassType: "4mm Standard",
      gap: "100mm",
      thermalPerformance: 52, // (5.8-2.8)/5.8 * 100
      acousticPerformance: 35,
      uValue: 2.8
    },
    {
      name: "6.4mm, 30mm gap",
      glassType: "6.4mm Laminated",
      gap: "30mm",
      thermalPerformance: 47, // (5.8-3.1)/5.8 * 100
      acousticPerformance: 32,
      uValue: 3.1
    },
    {
      name: "6.4mm, 50mm gap",
      glassType: "6.4mm Laminated",
      gap: "50mm",
      thermalPerformance: 50, // (5.8-2.9)/5.8 * 100
      acousticPerformance: 36,
      uValue: 2.9
    },
    {
      name: "6.4mm, 100mm gap",
      glassType: "6.4mm Laminated",
      gap: "100mm",
      thermalPerformance: 53, // (5.8-2.7)/5.8 * 100
      acousticPerformance: 42,
      uValue: 2.7
    },
    {
      name: "Low-E 4mm, 100mm",
      glassType: "Low-E 4mm",
      gap: "100mm",
      thermalPerformance: 69, // (5.8-1.8)/5.8 * 100
      acousticPerformance: 35,
      uValue: 1.8
    },
    {
      name: "Low-E 6.4mm, 100mm",
      glassType: "Low-E 6.4mm",
      gap: "100mm",
      thermalPerformance: 71, // (5.8-1.7)/5.8 * 100
      acousticPerformance: 42,
      uValue: 1.7
    },
    {
      name: "DGU 4-12-4",
      glassType: "Double Glazed",
      gap: "Sealed unit",
      thermalPerformance: 79, // (5.8-1.2)/5.8 * 100
      acousticPerformance: 45,
      uValue: 1.2
    },
    {
      name: "DGU Acoustic",
      glassType: "Premium DGU",
      gap: "Sealed unit",
      thermalPerformance: 83, // (5.8-1.0)/5.8 * 100
      acousticPerformance: 48,
      uValue: 1.0
    }
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-background border border-border rounded-lg shadow-lg p-4">
          <p className="font-semibold mb-2">{data.name}</p>
          <p className="text-sm text-muted-foreground mb-1">{data.glassType} • {data.gap}</p>
          <div className="space-y-1">
            <p className="text-sm flex items-center gap-2">
              <Thermometer className="h-3 w-3 text-primary" />
              <span>Thermal: {data.thermalPerformance}% improvement</span>
            </p>
            <p className="text-sm flex items-center gap-2">
              <Volume2 className="h-3 w-3 text-secondary" />
              <span>Acoustic: {data.acousticPerformance}dB reduction</span>
            </p>
            <p className="text-xs text-muted-foreground mt-2">U-value: {data.uValue} W/m²K</p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="mb-16">
      <SectionHeading 
        title="Performance Comparison: Thermal vs Acoustic"
        subtitle="Compare how different glass types and gap sizes affect both insulation and noise reduction"
        className="mb-8"
      />
      
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Secondary Glazing Performance Matrix</CardTitle>
            <TooltipProvider>
              <UITooltip>
                <TooltipTrigger asChild>
                  <Info className="h-5 w-5 text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent className="max-w-sm">
                  <p className="font-semibold mb-2">Reading the Chart</p>
                  <p className="text-sm mb-2"><strong>Thermal Performance:</strong> Shows % improvement in heat retention vs single glazing. Higher is better.</p>
                  <p className="text-sm"><strong>Acoustic Performance:</strong> Shows decibel (dB) reduction. Higher numbers mean better noise blocking.</p>
                </TooltipContent>
              </UITooltip>
            </TooltipProvider>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  dataKey="name" 
                  angle={-45} 
                  textAnchor="end" 
                  height={100}
                  className="text-xs"
                />
                <YAxis 
                  yAxisId="left"
                  label={{ value: 'Thermal Improvement (%)', angle: -90, position: 'insideLeft' }}
                  className="text-xs"
                />
                <YAxis 
                  yAxisId="right"
                  orientation="right"
                  label={{ value: 'Noise Reduction (dB)', angle: 90, position: 'insideRight' }}
                  className="text-xs"
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                  wrapperStyle={{ paddingTop: '20px' }}
                  iconType="circle"
                />
                <Bar 
                  yAxisId="left"
                  dataKey="thermalPerformance" 
                  name="Thermal Performance (%)" 
                  fill="hsl(var(--primary))"
                  radius={[8, 8, 0, 0]}
                />
                <Bar 
                  yAxisId="right"
                  dataKey="acousticPerformance" 
                  name="Acoustic Performance (dB)" 
                  fill="hsl(var(--secondary))"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Thermometer className="h-5 w-5 text-primary" />
                  Thermal Performance Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Gap size</strong> has moderate impact on thermal performance (30mm vs 100mm: ~20% difference)</li>
                  <li>• <strong>Low-E coatings</strong> significantly improve thermal efficiency (~40% better than standard)</li>
                  <li>• <strong>Double glazed units</strong> provide the best thermal performance (80%+ improvement)</li>
                  <li>• <strong>6.4mm vs 4mm</strong> glass has minimal thermal difference (~2-3%)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-secondary/5 border-secondary/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Volume2 className="h-5 w-5 text-secondary" />
                  Acoustic Performance Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Gap size</strong> significantly affects noise reduction (30mm vs 100mm: ~30% improvement)</li>
                  <li>• <strong>6.4mm laminated glass</strong> provides superior acoustic performance (~20% better than 4mm)</li>
                  <li>• <strong>Larger gaps (100mm)</strong> are crucial for both thermal and acoustic benefits</li>
                  <li>• <strong>Best for noise</strong>: Premium DGU with acoustic laminate (48dB reduction)</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <span className="text-primary">💡</span>
              Choosing the Right Solution
            </h4>
            <p className="text-sm text-muted-foreground">
              <strong>For maximum thermal efficiency:</strong> Choose Low-E coated glass or double glazed units with 100mm gaps.
              <br />
              <strong>For maximum noise reduction:</strong> Choose 6.4mm laminated glass with the largest gap possible (100mm+).
              <br />
              <strong>Best all-around:</strong> 6.4mm Low-E laminated glass with 100mm gap offers excellent thermal and acoustic performance.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
