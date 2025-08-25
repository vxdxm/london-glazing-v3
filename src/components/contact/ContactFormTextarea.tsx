import { Textarea } from "@/components/ui/textarea";

interface ContactFormTextareaProps {
  id: string;
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name?: string;
  disabled?: boolean;
  required?: boolean;
}

export function ContactFormTextarea({
  id,
  label,
  value,
  onChange,
  name,
  disabled = false,
  required = false,
}: ContactFormTextareaProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-2">
        {label}
      </label>
      <Textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="min-h-[150px]"
        disabled={disabled}
      />
    </div>
  );
}