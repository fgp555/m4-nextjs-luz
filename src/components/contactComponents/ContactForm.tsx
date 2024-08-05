const ContactForm: React.FC = () => {
  return (
    <div className="bg-black p-6 border rounded-xl shadow-md mt-10 mr-10">
      <h2 className="text-2xl font-bold mb-4">Send Message</h2>
      <p className="text-white mb-6">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, impedit praesentium dolorum quis, possimus voluptas commodi cupiditate accusamus nulla ducimus eligendi.
      </p>
      <form className="text-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input type="text" name="name" placeholder="Your Name" className="w-full p-2 border rounded" />
          <input type="email" name="email" placeholder="Email Address" className="w-full p-2 border rounded" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input type="text" name="phone" placeholder="Phone Number" className="w-full p-2 border rounded" />
          <input type="text" name="subject" placeholder="Subject" className="w-full p-2 border rounded" />
        </div>
        <textarea name="message" cols={15} rows={5} placeholder="Message" className="w-full p-2 border rounded mb-4" />
        <button type="submit" value="Enviar" className="w-full py-3 text-black bg-white border border-black rounded-md hover:bg-pink-0 hover:text-black">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
