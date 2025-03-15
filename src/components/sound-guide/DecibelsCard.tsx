
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const DecibelsCard = () => {
  return (
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
  );
};

export default DecibelsCard;
