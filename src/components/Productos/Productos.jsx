import React from 'react'
import Prodskincare from './ProdSkincare.jsx'
import ProdGeneral from './ProdGeneral.jsx'
function Productos() {
  return (
    <div className="mt-10" id='productos'>
      <h2 className="font-lora text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-keppel mb-10" data-aos="fade-down">Skincare</h2>
      <Prodskincare />
      <h2 className="font-lora text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-keppel mb-10" data-aos="fade-down">Perfumeria</h2>
      <ProdGeneral/>
    </div>

  )
}

export default Productos