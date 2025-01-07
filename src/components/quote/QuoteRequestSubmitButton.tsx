interface QuoteRequestSubmitButtonProps {
  isSubmitting: boolean;
}

export function QuoteRequestSubmitButton({ isSubmitting }: QuoteRequestSubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full"
    >
      {isSubmitting ? "Submitting..." : "Submit Quote Request"}
    </button>
  );
}