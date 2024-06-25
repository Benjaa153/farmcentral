import React, { useState } from 'react';
import fondo from '../../images/skincaresolpng.png';
import limpiezamodal from '../../images/modalSkincarelimpieza.jpg';

function Recipes1() {
       {/*Estado para controlar la visibilidad del modal*/}
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className='flex items-center justify-center mb-2 font-lora'>
            {/* Card */}
            <div className='relative w-full sm:w-[320px] md:w-[480px] lg:w-[640px] h-[400px] flex flex-col justify-between z-10'>
                {/* Imagen */}
                <div className='relative w-full h-[240px] rounded-2xl overflow-hidden'>
                    <img src={fondo} alt="Fondo" className='w-full h-full object-cover rounded-2xl' />
                </div>
                {/* container */}
                <div className='relative w-full h-[150px] bg-mayablue rounded-2xl rounded-tl-none'>
                    <span className='absolute left-0 w-1/2 h-[80px] -top-[80px] bg-mayablue border-t-[10px] border-r-[10px] border-white rounded-tr-[25px]'>
                        {/* Botón para abrir el modal */}
                        <button onClick={() => setIsModalOpen(true)} className='relative bg-sombra py-2 px-4 m-3 block rounded-lg font- text-center text-white transform hover:scale-105 transition-transform'>
                            VER MAS
                        </button>
                    </span>
                    <div className="bg-azulonda p-4 rounded-2xl rounded-tl-none">
                        <h1 className="text-2xl lg:text-3xl xl:text-2xl  mb-2 text-white font-semibold">Limpieza</h1>
                        <p className="text-white">La limpieza facial elimina impurezas, prepara la piel para absorber mejor los tratamientos y activa la renovación celular</p>
                    </div>
                </div>
            </div>
            {/* Modal */}
            {isModalOpen && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
                    <div className={`bg-azulonda p-5 rounded-lg w-11/12 sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 max-h-[90vh] overflow-y-auto 
                    ${isModalOpen ? 'animate-fade-in' : 'animate-fade-out'}`}>
                        {/* Contenido del modal */}
                        <div className="relative flex w-full flex-col rounded-xl bg-white text-gray-700 shadow-md">
                            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-darkcyan text-white shadow-lg">
                                <img src={limpiezamodal} alt="Limpieza skincare" className='w-full h-full object-cover rounded-2xl' />
                                <h5 className="flex items-center justify-center h-full mb-2 block text-xl  leading-snug text-blue-gray-900 text-lora">
                                    Recomendaciones
                                </h5>
                            </div>
                            <div className="p-6 space-y-4">
                                <h5 className="mb-2 block text-xl  leading-snug text-blue-gray-900 font-semibold">
                                    Recomendaciones
                                </h5>
                                <ul className="list-disc space-y-2 pl-5 text-base ">
                                    <li>
                                        <strong>Lavado:</strong> Comienza lavando tu rostro con productos adecuados para tu tipo de piel. Utiliza agua tibia y un limpiador suave para eliminar impurezas y maquillaje.
                                    </li>
                                    <li>
                                        <strong>Exfoliación:</strong> Aplica un exfoliante para remover células muertas y promover la renovación de la piel. Hazlo con movimientos suaves y circulares, evitando la zona delicada alrededor de los ojos.
                                    </li>
                                    <li>
                                        <strong>Mascarilla:</strong> Después de exfoliar, puedes aplicar una mascarilla calmante que se ajuste a las necesidades de tu piel. Esto ayudará a nutrir y revitalizar tu rostro.
                                    </li>
                                    <li>
                                        <strong>Tonificación:</strong> Utiliza un tónico para equilibrar el pH de la piel y prepararla para la hidratación. Aplica el tónico con un algodón suave, dando ligeros toques sobre la piel.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Botón para cerrar el modal */}
                        <button onClick={() => setIsModalOpen(false)} className='relative bg-sombra py-2 px-4 m-3 
                        block rounded-lg  text-center text-white transform hover:scale-105 transition-transform'>
                        Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Recipes1;
