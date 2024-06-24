import React, { useState, useEffect } from "react";
import { carrusel1, carrusel2, carrusel3, carrusel4, carrusel5 } from "../images";

const Carrusel = () => {
  const images = [carrusel1, carrusel2, carrusel3, carrusel4, carrusel5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  
  return (
    <section
      className="flex flex-col mt-40 mb-40 w-5/6 mx-auto lg:flex-row lg:space-x-10 bg-transparent"
      id="us"
      data-aos="fade-left"
    >
      <div className="w-full md:w-1/2 md:mx-auto">
        <h1 className="text-4xl font-lora text-tiffanyblue" data-aos="fade-down">¿Quienes somos?</h1>
        <p className="pt-5 text-[17px] font-lora" data-aos="fade-up">
        En el corazón de nuestro compromiso con la salud y el bienestar se encuentra nuestra farmacia, 
        un lugar donde la tradición se fusiona con la innovación. Aquí, cada producto es cuidadosamente 
        seleccionado para ofrecer la máxima calidad y eficacia, transformando el cuidado personal en una 
        experiencia única. Nuestra farmacia es un crisol de conocimiento y dedicación, hacia cada uno de 
        nuestros clientes aportado por nuestro Farmacéutico Luis Alvarez, quien les brinda la mejor atención, 
        y a quien pueden consultar sobre sus dudas o problemas de salud garantizando su bienestar.
         Además, somos amantes de la belleza y la cosmética, siempre buscando nuevas formas de realzar 
        tu apariencia y mejorar tu calidad de vida, con ayuda de nuestra cosmetóloga.{' '}
        </p>
      </div>
      <div className="w-full pt-14 lg:p-0 bg-center sm:pt-14 md:w-1/2 lg:w-1/2 lg:mx-auto md:mx-auto flex items-center justify-center" data-aos="fade-up">
        <div
          id="default-carousel"
          className="relative w-full"
          data-carousel="slide"
        >
          <div className="relative h-60 sm:h-60 overflow-hidden rounded-lg md:h-96">
            {images.map((image, index) => (
              <div
                key={index}
                className="absolute w-full h-full top-0 left-0 opacity-0 transition-opacity duration-1000 ease-in-out"
                style={{ opacity: index === currentImageIndex ? 1 : 0 }}
              >
                <img
                  src={image}
                  className="w-full h-full object-cover"
                  alt="..."
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carrusel;
