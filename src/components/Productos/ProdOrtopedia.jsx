import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  andador,
  bota,
  coderas,
  cuello,
  gemelera,
  inmoMuñeca,
  inmoRodilla,
  malerfinger,
  muletas,
  muñequera,
  rodillera,
  tobillera,
} from './prod.js';

function ProdOrtopedia() {
  const [showAll, setShowAll] = useState(false);

  const products = [
    { id: 1, img: andador, title: 'Andador plegable', description: 'Ofrece soporte adicional y estabilidad, ideal para quienes necesitan ayuda extra para caminar. Su diseño plegable facilita el almacenamiento y transporte.' },
    { id: 2, img: bota, title: 'Bota inmovilizadora', description: 'Bota ortopédica diseñada para inmovilizar y proteger el pie y el tobillo durante la recuperación.' },
    { id: 3, img: coderas, title: 'Coderas', description: 'Protección y soporte para los codos, ideal para recuperación de lesiones y uso durante actividades físicas.' },
    { id: 4, img: cuello, title: 'Cuello ortopédico', description: 'Proporciona soporte y alivio del dolor en el cuello, ideal para recuperación post-traumática o post-quirúrgica.' },
    { id: 5, img: gemelera, title: 'Gemelera', description: 'Soporte compresivo para las pantorrillas, ayuda en la recuperación de lesiones musculares y mejora la circulación.' },
    { id: 6, img: inmoMuñeca, title: 'Inmovilizador de muñeca', description: 'Proporciona soporte y estabilización para muñecas lesionadas, ideal para recuperación de esguinces y fracturas.' },
    { id: 7, img: inmoRodilla, title: 'Inmovilizador de rodilla', description: 'Diseñado para mantener la rodilla inmóvil, ideal para post-cirugía o lesiones graves.' },
    { id: 8, img: malerfinger, title: 'Malerfinger', description: 'Protector para dedos, ideal para recuperación de fracturas y otras lesiones en los dedos.' },
    { id: 9, img: muletas, title: 'Muletas de antebrazo', description: 'Muletas ergonómicas para mayor comodidad y soporte, ajustables en altura para adaptarse a cualquier usuario.' },
    { id: 10, img: muñequera, title: 'Muñequera', description: 'Soporte para la muñeca, ayuda a aliviar el dolor y prevenir lesiones durante actividades físicas.' },
    { id: 11, img: rodillera, title: 'Rodillera', description: 'Proporciona soporte y estabilidad a la rodilla, ideal para recuperación de lesiones y uso preventivo.' },
    { id: 12, img: tobillera, title: 'Tobillera', description: 'Soporte y protección para el tobillo, ayuda en la recuperación de esguinces y otras lesiones.' },
  ];

  const displayedProducts = showAll ? products : products.slice(0, 6);

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
