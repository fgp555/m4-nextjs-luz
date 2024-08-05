"use client"
import { faqs } from '@/helpers/faqs.helper';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);


  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); //indice de la pregunta
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 my-20">
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4 text-black">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white border border-gray-300 rounded-lg shadow-md">
            <div
              onClick={() => toggleOpen(index)}
              className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100"
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              {openIndex === index ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </div>
            {openIndex === index && (
              <div className="p-4 bg-gray-100 border-t border-gray-300">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
