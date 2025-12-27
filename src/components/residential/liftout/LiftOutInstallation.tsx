import { Clock, GraduationCap, FileText, Wrench, Calendar, Phone } from "lucide-react";

const LiftOutInstallation = () => {
  const postInstallation = [
    { icon: FileText, text: "Written removal/reinstallation instructions" },
    { icon: Wrench, text: "Storage recommendations" },
    { icon: Calendar, text: "Seasonal timing guidance" },
    { icon: Phone, text: "Optional annual service (or confident DIY handling)" }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Installation Process</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-muted rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-semibold text-lg">Installation Time</h3>
              <p className="text-2xl font-bold text-primary">45-75 minutes</p>
              <p className="text-sm text-muted-foreground">per window</p>
            </div>
          </div>
          <p className="text-muted-foreground">
            Faster than hinged systems but slightly longer than fixed due to the removal training component.
          </p>
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h3 className="font-semibold text-lg">The Critical Difference: Training</h3>
          </div>
          <p className="text-muted-foreground">
            Unlike fixed or hinged systems, you need to know how to remove and reinstall your panels. Our installers demonstrate the process thoroughly, ensuring you're completely comfortable with seasonal handling.
          </p>
        </div>
      </div>

      <div className="bg-muted rounded-lg p-6">
        <h3 className="font-semibold text-xl mb-4">Post-Installation, You Receive:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {postInstallation.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <item.icon className="h-5 w-5 text-primary" />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiftOutInstallation;
