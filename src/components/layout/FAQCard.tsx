import { HelpCircle } from "lucide-react";

interface FAQCardProps {
  question: string;
  answer: string;
}

export default function FAQCard({ question, answer }: FAQCardProps) {
  return (
    <div>
      <h3 className="flex items-center mb-4 text-lg font-medium text-secondary-900">
        <HelpCircle className="flex-shrink-0 mr-2 size-5 text-primary-400" />
        {question}
      </h3>
      <p className="text-secondary-500">{answer}</p>
    </div>
  );
}
