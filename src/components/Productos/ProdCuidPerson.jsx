import React, { useState } from 'react';
import garnierHidratanteSerum from './ImagenesCuidPersonal/garnierHidratanteSerum.jpg'
import { gelLimpieza, niveaHidra, shampoohead, desodorante, serumAmarillo, serumRojo, serumVerde, 
  garnierAguaMicelarAcido, garnierMicelarVitamina, garnierHidratanteFps,
  garnierHidratanteSerum,
  neutrogenaAcido,
  neutrogenaExfolianteAcne,
  neutrogenaHydro,
  lorealAcidoGel,
  lorealAcidoOjos,
  lorealLimpieza,
  lorealSerumOjos,
  lorealSerumRelleno,
  dermaglosAzul,
  dermaglosMorado,
  dermaglosRojo,
  dermaglosMarron,
} from './prod.js';
import ProductCarousel from './ProdCarrousel.jsx';

function ProdCuidPerson() {
  const [showAll, setShowAll] = useState(false);

  const niveaSerums = [
    { img: serumAmarillo, title: 'Amarillo', description: 'Reduce y previene manchas causadas por el sol, envejecimiento y factores hormonales. Unifica el tono, aporta luminosidad, previene el envejecimiento. Contiene ácido hialurónico.' },
    { img: serumRojo, title: 'Rojo (Antiedad)', description: 'Aumenta la producción de colágeno, ayuda a rellenar arrugas profundas.' },
    { img: serumVerde, title: 'Verde (Marcas Post Acné)', description: 'Fórmula refrescante, textura ligera en gel, efecto matificante. Enriquecido con ácido hialurónico, ácido salicílico y extracto de té verde.' },
  ];

  const garnierMicelar = [
    { img: garnierAguaMicelarAcido, title: 'Con Ácido Salicílico', description: 'Limpia la piel, remueve el maquillaje y las bacterias que causan el acné y los puntos negros.' },
    { img: garnierMicelarVitamina, title: 'Con Vitamina C', description: 'Enriquecida con vitamina C para potenciar la luminosidad de tu piel: limpia, desmaquilla y unifica el tono de la piel.' },
  ];

  const garnierHidra = [
    { img: garnierHidratanteFps, title: 'Hidratante Tono Uniforme FPS 30', description: 'Textura ligera con protección FPS30. Esta crema hidrata, protege y unifica el tono de la piel en 7 días.' },
    { img: garnierHidratanteSerum, title: 'Hidratante Serum Gel', description: 'Gel hidratante con textura en aqua ULTRA LIGERA. Hidrata el rostro hasta por 48 horas y controla el brillo resultando en una piel sin sensación grasosa.' },
  ];

  const neutrogena = [
    { img: neutrogenaAcido, title: 'Limpieza en Gel', description: 'Ofrece una limpieza profunda dejando la piel purificada y visiblemente menos grasa durante todo el día, eliminando impurezas y manteniendo su equilibrio natural sin dejar sensación de sequedad.' },
    { img: gelLimpieza, title: 'Exfoliante', description: 'Remueve las impurezas y grasitud de la piel dejando una sensación refrescante. Con sus microesferas revitalizantes, produce una suave espuma que elimina las impurezas de la superficie de la piel.' },
    { img: neutrogenaExfolianteAcne, title: 'Contra el Acné', description: 'Exfoliante facial para pieles con tendencia acneica. El exfoliante antiacné Neutrogena ayuda en el tratamiento del acné mientras desobstruye los poros, reduce los puntos negros y las espinillas.' },
  ];

  const loreal = [
    { img: lorealAcidoGel, title: 'Gel con Ácido Hialurónico', description: 'Gel facial con ácido hialurónico para una hidratación profunda y una piel más suave y tersa.' },
    { img: lorealAcidoOjos, title: 'Serum para Ojos', description: 'Serum para ojos con ácido hialurónico que reduce las arrugas y ojeras, dejando una mirada más fresca y descansada.' },
    { img: lorealLimpieza, title: 'Gel de Limpieza', description: 'Gel limpiador facial que elimina las impurezas y refresca la piel, ideal para el uso diario.' },
    { img: lorealSerumOjos, title: 'Serum Contorno de Ojos', description: 'Serum para el contorno de ojos que hidrata y reduce las líneas de expresión.' },
    { img: lorealSerumRelleno, title: 'Serum Rellenador', description: 'Serum rellenador con ácido hialurónico que hidrata y rellena las arrugas desde el interior.' },
  ];

  const dermaglosUltra = [
    { img: dermaglosAzul, title: 'Celeste +30 años', description: 'Crema facial antiarrugas para mujeres de más de 30 años, hidrata y protege la piel.' },
    { img: dermaglosMorado, title: 'Morada +40 años', description: 'Crema facial antiarrugas para mujeres de más de 40 años, reafirma y revitaliza la piel.' },
    { img: dermaglosRojo, title: 'Roja +50 años', description: 'Crema facial antiarrugas para mujeres de más de 50 años, nutre y regenera la piel.' },
    { img: dermaglosMarron, title: 'Marrón +60 años', description: 'Crema facial antiarrugas para mujeres de más de 60 años, fortalece y rejuvenece la piel.' },
  ];

  const products = [
    { id: 1, img: niveaHidra, title: 'Nivea Hidratación Express', description: 'Proporciona una hidratación intensa y duradera, dejando la piel del cuerpo suave y tersa al instante. Su fórmula ligera y de rápida absorción es perfecta para el uso diario.' },
    { id: 2, img: shampoohead, title: 'Head & Shoulders Limpieza Renovadora', description: 'Diseñado para eliminar la caspa y proporcionar una limpieza profunda al cuero cabelludo. Su fórmula refrescante deja el cabello limpio y con una sensación de frescura duradera.' },
    { id: 3, img: desodorante, title: 'Rexona Invisible 72 hr', description: 'Protección duradera contra el sudor y el mal olor durante 72 horas. Su fórmula anti manchas blancas y amarillas protege la ropa, manteniéndote fresco y seco todo el día.' },
    { id: 4, img: neutrogenaHydro, title: 'Neutrogena HydroBoost', description: 'Alto poder antioxidante, textura ultra liviana contiene ácido hialurónico, vitamina C y protección solar FPS 25.' },
    { id: 5, component: <ProductCarousel title="Nivea Serums Antimanchas" products={niveaSerums} /> }, 
    { id: 6, component: <ProductCarousel title="Garnier Agua Micelar" products={garnierMicelar} /> },
    { id: 7, component: <ProductCarousel title="Garnier Express Aclara Anti Manchas" products={garnierHidra} /> },
    { id: 8, component: <ProductCarousel title="Neutrogena Exfoliantes" products={neutrogena} /> },
    { id: 9, component: <ProductCarousel title="L'Oréal" products={loreal} /> },
    { id: 10, component: <ProductCarousel title="Dermaglós Ultra" products={dermaglosUltra} /> },
  ];

  const displayedProducts = showAll ? products : products.slice(0, 3);

  return (
    <div className="bg-gray-100 py-12 font-lora">
      <section className="flex flex-wrap justify-center container mx-auto">
        {displayedProducts.map(product => (
          <div key={product.id} className="flex flex-col mb-8 px-4 w-full sm:w-1/2 md:w-1/3">
            <div className="bg-white rounded-lg shadow-lg flex flex-col h-full p-6 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              {product.component ? (
                product.component
              ) : (
                <>
                  <div className="mb-5 h-48 overflow-hidden flex items-center justify-center">
                    <img src={product.img} alt={product.title} className="w-full h-full object-contain"/>
                  </div>
                  <h3 className="text-2xl text-darkcyan uppercase font-lora mb-4 text-center">{product.title}</h3>
                  <p className="text-lg text-black mb-4 flex-grow">{product.description}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </section>
      <div className="text-center mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-darkcyan text-white py-2 px-4 rounded-full hover:bg-cyan-700 transition-colors duration-300 h-12"
        >
          {showAll ? 'Ver menos' : 'Ver más'}
        </button>
      </div>
    </div>
  );
}

export default ProdCuidPerson;
