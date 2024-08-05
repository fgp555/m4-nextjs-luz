/* eslint-disable @next/next/no-img-element */

const About: React.FC = () => {
    const handleEmailClick = () => {
      window.location.href = 'mailto:applecenter@gmail.com';
    };
  
    return (
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-justify md:w-2/4 md:mx-auto md:pl-28 md:my-10">
            <h2 className="text-4xl font-bold mb-4">ABOUT US</h2>
            <p className="text-lg mb-4">
            Located in Palermo, Buenos Aires, our company specializes in the sale of Apple products. We offer a wide range of devices, from iPhones and MacBooks to accessories, ensuring quality and specialized technical support.
            </p>
          </div>
          <div className="w-full md:w-3/4 md:mx-auto mt-4 md:mt-0">
            <img className="w-full h-64 object-cover md:h-auto md:object-contain" src="https://image.cnbcfm.com/api/v1/image/106948405-1632815267928-gettyimages-1229236616-MC_NewIphone12_6516.jpeg?v=1632828483&w=929&h=523&vtcrop=y" alt="About Us Image" />
          </div>
        </div>
  
        <div className="flex flex-col items-center md:flex-row md:justify-center mt-8 md:my-20">
          <div className="text-justify md:w-1/2 md:pr-8">
            <h3 className="text-2xl font-bold mb-4">OUR STORY</h3>
            <p className="text-lg mb-4">
            Founded in 2015, our company started as a small shop in Palermo. Initially focused on device repair, we later expanded our business to include the sale of Apple products. Over the years, we have built a reputation for quality and reliability, earning the trust of our community. Our commitment to excellence has allowed us to grow steadily and continue providing top-notch service.
          
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img className="w-full h-64 object-cover md:h-auto md:object-contain" src="https://t3.ftcdn.net/jpg/06/05/82/26/360_F_605822691_Zqiu1rcNSoaiCVUfMDcppKy2y2Ov1pJY.jpg" alt="Our Story Image" />
          </div>
        </div>
  
        <div className="flex flex-col items-center md:flex-row-reverse md:justify-center mt-8">
          <div className="text-justify md:w-1/2 md:pl-8">
            <h3 className="text-2xl font-bold mb-4">OUR TEAM</h3>
            <p className="text-lg mb-4">
            Our team consists of experts passionate about Apple technology. Although we are a small company, each member is highly skilled, providing personalized and close-knit service that sets us apart in the competitive Buenos Aires market.
            </p>
          </div>
          <div className="w-full md:w-1/2 md:mb-5">
            <img className="w-full h-64 object-cover mmd:h-72 md:w-80 md:object-cover md:mx-auto" src="https://image.jimcdn.com/app/cms/image/transf/dimension=4000x3000:format=jpg/path/s7906ecb552df4438/image/ifa0128fbf2369141/version/1637335974/qu%C3%A9-tan-bien-est%C3%A1n-atendiendo-sus-vendedores-a-sus-clientes.jpg" alt="Our Team Image" />
          </div>
        </div>
  
        <div className="text-center mt-8 p-5 my-10 md:w-2/4 md:mx-auto">
          <h4 className="text-2xl font-bold mb-4">If you want to join our team, send us your CV</h4>
          <button className="w-full py-2 rounded-full bg-white text-black font-bold hover:bg-black hover:text-white transform hover:scale-105 transition duration-300" onClick={handleEmailClick}>Contact Us</button>
        </div>
      </div>
    );
  };
  
  export default About;
  