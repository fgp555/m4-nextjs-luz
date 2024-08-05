import React from 'react';
import { FaShippingFast, FaShieldAlt, FaHeadset } from 'react-icons/fa';

const HomeFeatures: React.FC = () => {
  const features = [
    {
      icon: <FaShippingFast className="text-white text-4xl" />,
      title: "Secure Shipping",
      description: "We offer fast and secure shipping to ensure your products arrive safely."
    },
    {
      icon: <FaShieldAlt className="text-white text-4xl" />,
      title: "Warranty Protection",
      description: "All our products come with a comprehensive warranty to give you peace of mind."
    },
    {
      icon: <FaHeadset className="text-white text-4xl" />,
      title: "24/7 Support",
      description: "Our support team is available around the clock to assist you with any inquiries."
    }
  ];

  return (
    <div className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-black p-6 rounded-lg shadow-md text-center hover:bg-pink-0 transition duration-300">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeFeatures;
