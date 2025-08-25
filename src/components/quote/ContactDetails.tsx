import { Input } from "@/components/ui/input";

interface ContactDetailsProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  onFirstNameChange: (value: string) => void;
  onLastNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
}

const ContactDetails = ({
  firstName,
  lastName,
  email,
  phone,
  onFirstNameChange,
  onLastNameChange,
  onEmailChange,
  onPhoneChange,
}: ContactDetailsProps) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">First Name</label>
          <Input 
            name="firstName"
            required
            value={firstName}
            onChange={(e) => onFirstNameChange(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Last Name</label>
          <Input 
            name="lastName"
            required
            value={lastName}
            onChange={(e) => onLastNameChange(e.target.value)}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <Input 
          name="email"
          type="email" 
          required
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Phone</label>
        <Input 
          name="phone"
          type="tel" 
          required
          value={phone}
          onChange={(e) => onPhoneChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ContactDetails;