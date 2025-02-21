
interface ResultDisplayProps {
  result: number | null;
}

const ResultDisplay = ({ result }: ResultDisplayProps) => {
  if (result === null) return null;

  return (
    <div className="mt-6 p-4 bg-green-50 rounded-lg">
      <h3 className="text-lg font-semibold text-center text-green-800">
        Estimated Noise Reduction
      </h3>
      <p className="text-2xl font-bold text-center text-green-600 mt-2">
        {result}dB
      </p>
      <p className="text-sm text-center text-green-700 mt-2">
        Combined noise reduction with secondary glazing
      </p>
    </div>
  );
};

export default ResultDisplay;
