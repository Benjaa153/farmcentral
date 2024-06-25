import React, { useState } from 'react';
import fondo from '../../images/skincarehidratacion.jpg';
import hidratacionmodal from '../../images/hidratacionmodal.jpg'

function Recipes2() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className='flex items-center justify-center mb-2 font-lora'>
            {/* Card */}
            <div className='relative w-full sm:w-[320px] md:w-[480px] lg:w-[640px] h-[400px] flex flex-col justify-between z-10'>
                {/* Imagen */}
                <div className='relative w-full h-[240px] rounded-2xl overflow-hidden'>
                    <img src={fondo} alt="Fondo" className='w-full h-full object-cover rounded-2xl' />
                </div>
                {/* Container */}
                <div className='relative w-full h-[150px] bg-mayablue rounded-2xl rounded-tl-none'>
                    {/* Botón para abrir el modal */}
                    <span className='absolute left-0 w-1/2 h-[80px] -top-[80px] bg-mayablue border-t-[10px] border-r-[10px] border-white rounded-tr-[25px]'>
                        <button onClick={() => setIsModalOpen(true)} className='relative bg-sombra py-2 px-4 m-3 block rounded-lg  text-center text-white transform hover:scale-105 transition-transform'>
                            VER MAS
                        </button>
                    </span>
                    <div className="bg-azulonda p-4 rounded-2xl rounded-tl-none">
                        <h1 className="text-2xl lg:text-3xl xl:text-2xl  mb-2 text-white font-semibold">Hidratacion</h1>
                        <p className="text-white">La hidratación es clave para una piel resistente y elástica, previene la sequedad y mejora el aspecto general de la piel</p>
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
                                <img src={hidratacionmodal} alt="Hidratacion modal" className='w-full h-full object-cover rounded-2xl' />
                            </div>
                            <div className="p-6 space-y-4">
                                <h5 className="mb-2 block text-xl  leading-snug text-blue-gray-900 font-semibold">
                                    Recomendaciones
                                </h5>
                                <ul className="list-disc space-y-2 pl-5 text-base ">
                                    <li>
                                        <strong>Productos Adecuados: </strong>Elige productos específicos para tu tipo de piel, como el Gel de Limpieza Profunda Aveno para pieles sensibles.
                                    </li>
                                    <li>
                                        <strong>Cuidado nocturno: </strong>Incluye en tu rutina un elixir nocturno para revitalizar la piel durante la noche.
                                    </li>
                                    <li>
                                        <strong>Limpieza: </strong>Siempre realiza la hidratacion luego de una limpieza.
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
    );
}

export default Recipes2;
