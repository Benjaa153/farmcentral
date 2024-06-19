import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { silla, andador, muletas, baston4, faja, bota } from './prod.js';

function ProdOrtopedia() {
  const [showAll, setShowAll] = useState(false);

  const products = [
    { id: 1, img: silla, title: 'Silla de ruedas', description: 'Diseñada para ofrecer comodidad y movilidad, ideal para uso diario, con estructura ligera y resistente.' },
    { id: 2, img: andador, title: 'Andador plegable', description: 'Ofrece soporte adicional y estabilidad, ideal para quienes necesitan ayuda extra para caminar. Su diseño plegable facilita el almacenamiento y transporte.' },
    { id: 3, img: muletas, title: 'Muletas de antebrazo', description: 'Muletas ergonómicas para mayor comodidad y soporte, ajustables en altura para adaptarse a cualquier usuario.' },
    { id: 4, img: baston4, title: 'Bastón de cuatro puntas', description: 'Bastón con base de cuatro puntas para una mayor estabilidad y soporte al caminar.' },
    { id: 5, img: faja, title: 'Faja lumbar', description: 'Soporte lumbar ajustable para aliviar el dolor de espalda y proporcionar apoyo durante actividades físicas.' },
    { id: 6, img: bota, title: 'Bota inmovilizadora', description: 'Bota ortopédica diseñada para inmovilizar y proteger el pie y el tobillo durante la recuperación.' },
  ];

  const displayedProducts = showAll ? products : products.slice(0, 3);

  return (
    <div className="bg-gray-100 py-12" data-aos="fade-down">
      <h2 className="text-4xl font-bold text-center text-darkcyan mb-12">Ortopedia</h2>
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
