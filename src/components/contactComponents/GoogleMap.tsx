const GoogleMap: React.FC = () => (
  <div className="flex flex-col items-center my-14">
    <h2 className="text-2xl font-bold text-center mb-4">Find Us on Google Maps</h2>
    <div className="w-full md:w-1/2 h-96">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1381.1309713213507!2d-58.423332224448984!3d-34.58135741646064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5849bd8e50f%3A0x966d8efc80c35754!2sUriarte%202434%2C%20C1425FNI%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1721670934759!5m2!1ses!2sar"
        className="w-full h-full"
        loading="lazy"
      ></iframe>
    </div>
  </div>
);

export default GoogleMap;


