import React, { useState } from 'react';
import { 
  gelLimpieza, niveaHidra, shampoohead, desodorante, serumAmarillo, serumRojo, serumVerde, 
  garnierAguaMicelarAcido, garnierMicelarVitamina, garnierHidratanteFps,
  neutrogenaAcido, neutrogenaExfolianteAcne, neutrogenaHydro, lorealAcidoGel, lorealAcidoOjos, 
  lorealSerumOjos, lorealSerumRelleno, dermaglosAzul, dermaglosMorado, 
  dermaglosRojo, dermaglosMarron, garnierHidratanteSerum, lorealLimpieza,dermaglosLeche,dermaglosSerum,
  dermaglosSerumC,
  dermaglosSerumA,
  dermaglosFacialHidra,
  dermaglosFacialAgua,
  dermaglosFacialNoche,
  dermaglosFacialDia,
  dermaglosFacialDesmaquilla,
  dermaglosFacialNutre,
  dermaglosFacialNormal,
  dermaglosFacialGrasa,
  dermaglosFacialFPS,
  dermaglosHombrehidra,
  dermaglosHombreLimp,
  dermaglosCorpHidra,
  dermaglosCorpSeca,
  dermaglosCorpSpray,
  dermaglosCorplHidraProf,
  dermaglosManosUltrahidra,
  dermaglosManosHidraEsencial,
  dermaglosManosHidraRege,
  elviveGloss,

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

  const dermaglosSerumCont = [
    { img: dermaglosSerum, title: 'Niacinamida', description: 'Serum con niacinamida que ayuda a reducir la inflamación y el enrojecimiento, mejora la textura de la piel y minimiza los poros.' },
    { img: dermaglosSerumC, title: 'Vitamina C', description: 'Serum con vitamina C que aporta luminosidad, unifica el tono de la piel y combate los signos del envejecimiento.' },
    { img: dermaglosSerumA, title: 'Ácido Hialurónico', description: 'Serum con ácido hialurónico que hidrata profundamente, mejora la elasticidad y rellena las líneas finas.' },
  ];

  const dermaglosFacial = [
    { img: dermaglosFacialHidra, title: 'Tónico Hidratante Descongestivo', description: 'Tónico que hidrata y descongestiona la piel, proporcionando una sensación de frescura.' },
    { img: dermaglosLeche, title: 'Leche de Limpieza Activa', description: 'Elimina en profundidad el maquillaje y las impurezas diarias permitiendo a la piel respirar libremente sin dejar sensación de grasitud.' },
    { img: dermaglosFacialAgua, title: 'Agua Micelar 6 en 1', description: 'Limpia, desmaquilla, tonifica, refresca, suaviza y equilibra la piel.' },
    { img: dermaglosFacialNoche, title: 'Crema Nutritiva de Noche', description: 'Crema que nutre y regenera la piel durante la noche, dejándola suave y revitalizada.' },
    { img: dermaglosFacialDia, title: 'Emulsión Hidratante de Día', description: 'Hidratante ligera que proporciona una hidratación duradera y protege la piel durante el día.' },
    { img: dermaglosFacialDesmaquilla, title: 'Desmaquillante Bifaz para Ojos y Labios', description: 'Remueve el maquillaje a prueba de agua, sin residuo graso, sin alcohol. Todo tipo de piel.' },
    { img: dermaglosFacialNutre, title: 'Crema Nutritiva de Noche para Pieles Secas y Muy Secas', description: 'Crema que nutre intensamente las pieles secas y muy secas durante la noche.' },
    { img: dermaglosFacialNormal, title: 'Gel de Limpieza Pieles Normales', description: 'Limpia en profundidad, elimina impurezas, mantiene la piel suave e hidratada.' },
    { img: dermaglosFacialGrasa, title: 'Gel de Limpieza Pieles Grasas', description: 'Gel que elimina el exceso de grasa y las impurezas, dejando la piel limpia y fresca.' },
    { img: dermaglosFacialFPS, title: 'Crema Protectora FPS 30', description: 'Crema hidratante matificante, hidrata sin efecto graso, previene la aparición de manchas, protege de las agresiones ambientales. Pieles mixtas a grasas.' },
  ];

  const dermaglosHombres = [
    { img: dermaglosHombrehidra, title: 'Crema Gel Hidratante + After Shave', description: 'Hidrata la piel y calma la irritación causada por el afeitado, dejando una sensación de frescura.' },
    { img: dermaglosHombreLimp, title: 'Gel de Limpieza', description: 'Gel que limpia en profundidad la piel masculina, eliminando impurezas y el exceso de grasa.' },
  ];

  const dermaglosCorp = [
    { img: dermaglosCorpHidra, title: 'Leche Corporal Hidratación Intensa para Piel Seca', description: 'Leche corporal que proporciona una hidratación intensa para pieles secas.' },
    { img: dermaglosCorpSeca, title: 'Leche Corporal Hidratación para Piel Extra Seca y Sensible', description: 'Leche corporal que hidrata y calma las pieles extra secas y sensibles.' },
    { img: dermaglosCorpSpray, title: 'Spray Corporal Hidratante', description: 'Spray hidratante que proporciona una hidratación inmediata y duradera.' },
    { img: dermaglosCorplHidraProf, title: 'Leche Corporal Hidratación Profunda para Piel Muy Seca', description: 'Leche corporal que hidrata profundamente las pieles muy secas.' },
  ];

  const dermaglosManos = [
    { img: dermaglosManosUltrahidra, title: 'Ultrahidratante para Manos', description: 'Crema ultrahidratante que nutre y protege las manos secas.' },
    { img: dermaglosManosHidraEsencial, title: 'Hidratación Esencial para Manos', description: 'Crema hidratante que suaviza y protege las manos.' },
    { img: dermaglosManosHidraRege, title: 'Hidratación Regeneradora para Manos', description: 'Crema regeneradora que hidrata y rejuvenece las manos.' },
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
    { id: 11, component: <ProductCarousel title="Dermaglós Serum" products={dermaglosSerumCont} /> },
    { id: 12, component: <ProductCarousel title="Dermaglós Facial" products={dermaglosFacial} /> },
    { id: 13, component: <ProductCarousel title="Dermaglós Hombres" products={dermaglosHombres} /> },
    { id: 14, component: <ProductCarousel title="Dermaglós Corporal" products={dermaglosCorp} /> },
    { id: 15, component: <ProductCarousel title="Dermaglós Manos" products={dermaglosManos} /> },
    { id: 16, img: elviveGloss, title: "Elvive Glycolic Gloss", description: 'Combina shampoo, acondicionador, crema para peinar y tratamiento intensivo para hidratar profundamente el cabello, dejándolo suave, brillante y libre de frizz.'},
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
                <h3 className="text-2xl text-darkcyan uppercase font-lora mb-4 text-center">{product.title}</h3>
                  <div className="mb-5 h-48 overflow-hidden flex items-center justify-center">
                    <img src={product.img} alt={product.title} className="w-full h-full object-contain"/>
                  </div>
                  
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
