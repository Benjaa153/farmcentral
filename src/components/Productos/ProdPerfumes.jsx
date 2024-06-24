import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { boosNight, poloRojo, kingAzul, queenrosa, shakirap, hersecret } from './prod.js';

function ProdOrtopedia() {
  const [showAll, setShowAll] = useState(false);

  const products = [
    { id: 1, img: boosNight, title: 'Boos Intense Night', description: 'Enérgica y sofisticada, perfecta para las noches llenas de intensidad y emoción. Notas cálidas y especiadas que capturan la esencia de la aventura nocturna.' },
    { id: 2, img: poloRojo, title: 'Weelington Polo Club', description: 'Fresca y deportiva que refleja el espíritu competitivo y elegante del polo. Notas cítricas y amaderadas que evocan la brisa del campo de juego.' },
    { id: 3, img: kingAzul, title: 'King of seduction Absolute', description: 'Poderosa y magnética, ideal para el hombre seguro de sí mismo. Notas de cítricos vibrantes y maderas nobles que seducen con elegancia.' },
    { id: 4, img: queenrosa, title: 'Queen of seduction lively muse', description: 'Vibrante y femenina, diseñada para la mujer que inspira y deslumbra. Notas florales y frutales que capturan la esencia de la seducción.' },
    { id: 5, img: shakirap, title: 'Shakira Sweet Dreams', description: 'Suave y acogedora, perfecta para soñar despierto. Notas dulces y florales que envuelven en un abrazo de ensueño.' },
    { id: 6, img: hersecret, title: 'HerSecret Temptation', description: 'Misteriosa y tentadora, ideal para la mujer que guarda secretos seductores. Notas orientales y florales que hechizan y encantan.' },
  ];

  const displayedProducts = showAll ? products : products.slice(0, 3);

  return (
    <div className="bg-gray-100 py-12 font-lora">
      <section className="flex flex-wrap justify-center container mx-auto">
        <AnimatePresence>
          {displayedProducts.map(product => (
            <motion.div
              key={product.id}
              className="flex flex-col mb-8 px-4 w-full sm:w-1/2 md:w-1/3"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-lg shadow-lg flex flex-col h-full p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="mb-5 h-48 overflow-hidden flex items-center justify-center">
                  <img src={product.img} alt={product.title} className="w-full h-full object-contain"/>
                </div>
                <h3 className="text-2xl text-darkcyan uppercase font-lora mb-4 text-center">{product.title}</h3>
                <p className="text-lg text-black mb-4 flex-grow">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
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
