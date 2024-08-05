import ContactForm from "@/components/contactComponents/ContactForm";
import ContactInfo from "@/components/contactComponents/ContactInfo";
import GoogleMap from "@/components/contactComponents/GoogleMap";

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-4xl font-bold text-center mt-3">
          CONTACT US
        </h2>
        <div className="flex flex-col md:flex-row md:justify-between w-full">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <ContactInfo />
          </div>
          <div className="md:w-2/3">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <GoogleMap />
      </div>
    </div>
  );
};

export default Contact;
