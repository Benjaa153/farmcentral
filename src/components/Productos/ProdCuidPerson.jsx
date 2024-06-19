import React, { useState } from 'react';
import { gelLimpieza, gelExfo, protecSolar, shampoohead, desodorante, } from './prod.js';
import niveaHidra from './Imagenes/niveaHidratacion.png'
function ProdOrtopedia() {
  const [showAll, setShowAll] = useState(false);

  const products = [
    { id: 1, img: gelLimpieza, title: 'Neutrogena gel de limpieza facial', description: 'Formulado para eliminar eficazmente el exceso de grasa y las impurezas de la piel, dejándola fresca y limpia sin resecarla.' },
    { id: 2, img: gelExfo, title: 'Nivea Exfoliante facial', description: 'Contiene microesferas que eliminan suavemente las células muertas de la piel, mejorando la textura y proporcionando una piel más suave y radiante.' },
    { id: 3, img: niveaHidra, title: 'Nivea hidratacion express', description: 'Proporciona una hidratación intensa y duradera, dejando la piel del cuerpo suave y tersa al instante. Su fórmula ligera y de rápida absorción es perfecta para el uso diario.' },
    { id: 4, img: protecSolar, title: 'Cocoa Beach protector solar 30fps', description: 'Ofrece una protección efectiva contra los rayos UVA y UVB con un factor de protección solar de 30. Su fórmula resistente al agua es ideal para actividades al aire libre.' },
    { id: 5, img: shampoohead, title: 'Head & shoulders limpieza renovadora', description: 'Diseñado para eliminar la caspa y proporcionar una limpieza profunda al cuero cabelludo. Su fórmula refrescante deja el cabello limpio y con una sensación de frescura duradera.' },
    { id: 6, img: desodorante, title: 'Rexona invisible 72 hr', description: 'Protección duradera contra el sudor y el mal olor durante 72 horas. Su fórmula anti manchas blancas y amarillas protege la ropa, manteniéndote fresco y seco todo el día.' },
  ];

  const displayedProducts = showAll ? products : products.slice(0, 3);

  return (
    <div className="bg-gray-100 py-12 " data-aos="fade-down">
      <section className="flex flex-wrap justify-center container mx-auto">
        {displayedProducts.map(product => (
          <div key={product.id} className="flex flex-col mb-8 px-4 w-full sm:w-1/2 md:w-1/3">
            <div className="bg-white rounded-lg shadow-lg flex flex-col h-full p-6 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <div className="mb-5 h-48 overflow-hidden flex items-center justify-center">
                <img src={product.img} alt={product.title} className="w-full h-full object-contain"/>
              </div>
              <h3 className="text-2xl text-darkcyan uppercase font-lora mb-4 text-center">{product.title}</h3>
              <p className="text-lg text-black mb-4 flex-grow">{product.description}</p>
            </div>
          </div>
        ))}
      </section>
      <div className="text-center mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-darkcyan text-white py-2 px-4 rounded-full hover:bg-cyan-700 transition-colors duration-300"
        >
          {showAll ? 'Ver menos' : 'Ver más'}
        </button>
      </div>
    </div>
  );
}

export default ProdOrtopedia;
