import { Input } from "@/components/ui/input";

interface ContactFormInputProps {
  id: string;
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
}

export function ContactFormInput({
  id,
  label,
  value,
  onChange,
  name,
  type = "text",
  disabled = false,
  required = false,
}: ContactFormInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-2">
        {label}
      </label>
      <Input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
      />
    </div>
  );
}