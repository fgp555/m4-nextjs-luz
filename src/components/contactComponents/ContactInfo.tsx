import { FaPhoneAlt, FaEnvelope, FaFax, FaMapMarkerAlt } from 'react-icons/fa';

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-6 text-black ml-10 mt-16">
      <div className="bg-pink-0 p-3 m-5 rounded-lg transition transform hover:bg-black hover:text-white hover:scale-105 flex items-center">
        <FaPhoneAlt className="text-2xl mr-4 text-black" />
        <div>
          <h3 className="text-xl font-bold">Phone Number</h3>
          <p>123456789</p>
        </div>
      </div>
      <div className="bg-pink-0 p-3 m-5 rounded-lg transition transform hover:bg-black hover:text-white hover:scale-105 flex items-center">
        <FaEnvelope className="text-2xl mr-4 text-black" />
        <div>
          <h3 className="text-xl font-bold">Email Address</h3>
          <p>applecenter@gmail.com</p>
        </div>
      </div>
      <div className="bg-pink-0 p-3 m-5 rounded-lg transition transform hover:bg-black hover:text-white hover:scale-105 flex items-center">
        <FaFax className="text-2xl mr-4 text-black" />
        <div>
          <h3 className="text-xl font-bold">Fax Address</h3>
          <p>123456789</p>
        </div>
      </div>
      <div className="bg-pink-0 p-3 m-5 rounded-lg transition transform hover:bg-black hover:text-white hover:scale-105 flex items-center">
        <FaMapMarkerAlt className="text-2xl mr-4 text-black" />
        <div>
          <h3 className="text-xl font-bold">Location</h3>
          <p>Uruarte 2434, CABA, ARG</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
