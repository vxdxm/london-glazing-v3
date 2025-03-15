
import { MainNav } from "@/components/MainNav";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Helmet } from "react-helmet";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const SoundTransmissionGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Understanding Decibels & Sound Transmission | Acoustic Glazing Guide</title>
        <meta 
          name="description" 
          content="Learn about sound measurement in decibels (dB), sound transmission, and how secondary glazing reduces noise. Expert acoustic glazing guide by Secondary Glazing Specialist." 
        />
        <meta 
          name="keywords" 
          content="decibels, sound transmission, acoustic glazing, dB scale, noise reduction, sound insulation, secondary glazing" 
        />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/specialized/sound-transmission-guide" />
      </Helmet>
      
      <MainNav />
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Understanding Decibels & Sound Transmission</h1>
        
        <div className="prose max-w-none mb-12">
          <p className="text-lg mb-6">
            Sound reduction is measured in decibels (dB), but understanding what this means and how it applies to 
            acoustic glazing requires some background knowledge. This guide explains the key concepts behind 
            sound measurement, transmission, and how secondary glazing works to create quieter living and working spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">What is a Decibel (dB)?</h2>
              <p className="text-gray-600 mb-6">
                A decibel (dB) is a unit used to measure the intensity of sound. The decibel scale is logarithmic, 
                not linear, which means that an increase of 10 dB represents a sound that is 10 times more intense 
                or about twice as loud to human ears.
              </p>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Whisper (20 dB)</p>
                  <Progress value={20} className="h-3" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Normal conversation (60 dB)</p>
                  <Progress value={60} className="h-3" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Heavy traffic (80 dB)</p>
                  <Progress value={80} className="h-3" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Motorcycle (95 dB)</p>
                  <Progress value={95} className="h-3" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Rock concert (110 dB)</p>
                  <Progress value={110} className="h-3 bg-amber-500" />
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                The human ear can detect sounds from 0 dB (threshold of hearing) to about 140 dB 
                (threshold of pain).
              </p>
            </CardContent>
          </Card>

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
        </div>

        <div className="space-y-12 mb-12">
          <div>
            <h2 className="text-3xl font-semibold mb-6">How Sound Travels Through Windows</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4">
                  Sound travels as a wave through air, causing vibrations when it hits a surface like a window. 
                  Single-pane windows offer minimal resistance to these sound waves, allowing them to pass through 
                  with little reduction in intensity.
                </p>
                <p className="text-gray-600 mb-4">
                  When sound waves hit a window, three things happen:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                  <li>Some sound is reflected back</li>
                  <li>Some sound is absorbed by the glass</li>
                  <li>Some sound passes through to the other side</li>
                </ul>
                <p className="text-gray-600">
                  Standard windows are particularly vulnerable to sound transmission due to their relatively thin 
                  glass and the direct pathway they provide between outside and inside environments.
                </p>
              </div>
              <Card className="p-6 bg-secondary/30">
                <h3 className="text-xl font-semibold mb-4">Factors Affecting Sound Transmission</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-3">
                  <li><span className="font-medium">Glass mass:</span> Heavier, thicker glass absorbs more sound energy</li>
                  <li><span className="font-medium">Air gaps:</span> Larger gaps between panes disrupt sound wave continuity</li>
                  <li><span className="font-medium">Different glass thicknesses:</span> Using varying thicknesses prevents resonance</li>
                  <li><span className="font-medium">Lamination:</span> Acoustic interlayers dampen vibrations</li>
                  <li><span className="font-medium">Edge sealing:</span> Proper sealing prevents sound leakage around frames</li>
                  <li><span className="font-medium">Frame quality:</span> Solid frames transmit less vibration</li>
                </ul>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-6">How Secondary Glazing Reduces Noise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 bg-secondary/30">
                <h3 className="text-xl font-semibold mb-4">The Science Behind Acoustic Secondary Glazing</h3>
                <p className="text-gray-600 mb-4">
                  Secondary glazing creates a highly effective sound barrier through multiple mechanisms:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-3">
                  <li><span className="font-medium">Air gap principle:</span> The substantial air gap (typically 100-200mm) between primary and secondary glazing disrupts sound wave transmission</li>
                  <li><span className="font-medium">Mass-air-mass resonance:</span> The combination of two glass panes with an air space creates a system that's difficult for sound to penetrate</li>
                  <li><span className="font-medium">Acoustic decoupling:</span> Independent frames prevent vibration transfer between panes</li>
                  <li><span className="font-medium">Laminated glass:</span> Special acoustic laminated glass incorporates sound-damping PVB interlayers</li>
                </ul>
              </Card>
              <div>
                <p className="text-gray-600 mb-4">
                  Secondary glazing is particularly effective at reducing noise because it adds another barrier with 
                  a significant air gap between the panes. This air gap is crucial - it's much more effective than 
                  the narrow gap in double glazing.
                </p>
                <p className="text-gray-600 mb-4">
                  When properly installed with acoustic glass, secondary glazing can reduce noise levels by up to 
                  45-48 dB, which means that loud external noise like heavy traffic or trains would be reduced to a 
                  whisper-like level inside your property.
                </p>
                <div className="bg-blue-50 p-4 rounded-md border border-blue-100 mt-6">
                  <h4 className="font-semibold text-blue-800 mb-2">Technical Insight</h4>
                  <p className="text-blue-700 text-sm">
                    A 10 dB reduction in sound equates to a perceived 50% reduction in loudness to human ears. 
                    This means our systems providing 45-48 dB reduction can make even the loudest urban environments 
                    feel peaceful and quiet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-secondary/50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Common Noise Sources and Their dB Levels</h2>
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

        <div className="prose max-w-none mb-12">
          <h2 className="text-3xl font-semibold mb-6">Noise Reduction in Practice</h2>
          <p className="text-gray-600 mb-4">
            When we specify a noise reduction of 45 dB for our premium acoustic glazing solutions, here's what that means in practice:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>A busy road with 85 dB traffic noise would be reduced to approximately 40 dB inside - quieter than a library</li>
            <li>A passing train at 100 dB would be reduced to about 55 dB - barely louder than a normal conversation</li>
            <li>Aircraft noise at 110 dB would be brought down to around 65 dB - noticeable but not disruptive</li>
          </ul>
          <p className="text-gray-600">
            The human perception of sound is subjective, but as a rule of thumb, a 10 dB reduction feels like a halving of loudness. 
            This means that our 45 dB reduction solutions can make even the noisiest environments feel dramatically quieter.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SoundTransmissionGuide;
