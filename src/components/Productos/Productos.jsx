import React from 'react'
import ProdPerfumes from './ProdPerfumes.jsx'
import ProdOrtopedia from './ProdOrtopedia.jsx'
import ProdCuidPerson from './ProdCuidPerson.jsx'

function Productos() {
  return (
    <div className="mt-10  font-lora" id='productos'>
      <h2 className="font-lora text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-darkcyan mb-10" data-aos="fade-down">Productos</h2>
      <ProdOrtopedia />
      <h2 className="font-lora text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-darkcyan mb-10" data-aos="fade-down">Perfumeria</h2>
      <ProdPerfumes/>
      <h2 className="font-lora text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-darkcyan mb-10" data-aos="fade-down">Cuidado personal</h2>
      <ProdCuidPerson/>
    </div>

  )
}

export default Productos