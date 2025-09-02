import { useState } from "react";
import { Minus, Plus } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

interface FAQProps {
  faqs: FAQItem[];
}

export default function FAQ({ faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-2">FAQ</h2>
      <p className="text-center text-gray-600 mb-8">
        Answers to your Most Common Questions
      </p>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center bg-teal-900 text-white px-4 py-3 font-medium focus:outline-none"
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <Minus className="w-5 h-5" />
              ) : (
                <Plus className="w-5 h-5" />
              )}
            </button>

            {openIndex === index && (
              <div className="px-4 py-3 bg-white text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
