//import { useState, useEffect } from 'react';
import logo1 from '../images/logo_n1.png';
//import logo2 from '../images/logo1.png';

const Hero = () => {
/* Animacion del logo para que intercambie los colores
  const [currentLogo, setCurrentLogo] = useState(logo1);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentLogo(currentLogo => currentLogo === logo1 ? logo2 : logo1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
*/
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mx-auto w-11/12 transition-opacity duration-500" id="hero">
      <div className="w-full text-center">
        <div className="mt-10"> 
          <h1 className="font-lora text-5xl sm:text-3xl md:text-4xl lg:text-7xl text-tropicalindigo pb-10   " data-aos="fade-down">
          Farmacia Central
          </h1>
          <h2 className="font-lora text-2xl md:text-4xl lg:text-4xl text-center text-tiffanyblue" data-aos="fade-down">
          Belleza, Cosmética, Cuidado personal
            
          </h2>
        </div>
      </div>
      <div className="w-full sm:w-full md:w-full lg:w-1/3 mt-5 lg:mt-0 flex justify-center">
        {}
        <img src={logo1} alt="logo farmacia central" className="w-3/4 h-auto transition-opacity duration-500" />
      </div>
    </div>
  );
};

export default Hero;
