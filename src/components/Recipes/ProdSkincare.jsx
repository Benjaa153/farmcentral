import React from 'react';
import Skincare1 from '../../images/productos1.jpeg';
import Skincare2 from '../../images/productos2.jpg';
import Skincare3 from '../../images/productos3.jpeg';

function Prodskincare() {
  return (
    <div>
      <section className="flex flex-wrap justify-center pb-24 container mx-auto " data-aos="fade-down" >
        <div className="flex flex-col mb-5 px-4 w-full sm:w-1/2 md:w-1/3">
          <img src={Skincare1} alt="Ultra estructura"  className="mb-5"/>
          <h3 className="text-2xl text-darkcyan uppercase font-lora mb-4 text-center " >Ultra estructura</h3>
          <p className="text-lg text-black" >Es un elixir nocturno diseñado para revitalizar la piel mientras descansas. 
          Su fórmula avanzada trabaja en armonía con el ciclo natural de regeneración de la piel, 
          nutriéndola intensamente y reduciendo la apariencia de las arrugas. Con cada aplicación, 
          se promueve la elasticidad y firmeza, gracias a su capacidad para estimular la producción de colágeno.</p>
        </div>

        <div className="flex flex-col mb-5 px-4 w-full sm:w-1/2 md:w-1/3">
          <img src={Skincare2} alt="Ultra hidratacion"  className="mb-5"/>
          <h3 className="text-2xl text-darkcyan uppercase font-lora mb-4 text-center" >Ultra volumen</h3>
          <p >La Crema Facial Dermaglós Ultra volumen es una solución innovadora para mantener la piel hidratada 
          y fresca. Su fórmula única ofrece una hidratación profunda durante 24 horas, combatiendo los primeros signos del 
          envejecimiento gracias a su efecto antioxidante. Con una textura ultra liviana y de rápida absorción, es adecuada 
          para todo tipo de piel, proporcionando un cuidado suave pero efectivo.</p>
        </div>

        <div className="flex flex-col mb-5 px-4 w-full sm:w-1/2 md:w-1/3">
          <img src={Skincare3} alt="Limpieza profunda"  className="mb-5"/>
          <h3 className="text-2xl text-darkcyan uppercase font-lora mb-4 text-center">Limpieza profunda</h3>
          <p >El Gel de Limpieza Profunda Aveno es un producto excepcional para quienes buscan una limpieza facial y corporal 
          que sea a la vez suave y efectiva. Este gel está especialmente formulado para pieles sensibles y reactivas, incluso 
          aquellas con tendencia atópica o deshidratadas.</p>
        </div>
      </section>
    </div>
  )
}

export default Prodskincare;
