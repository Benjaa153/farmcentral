import React from 'react';
import SocialIcon from './SocialIcon';
import { FaArrowUp } from 'react-icons/fa'; // Importar el ícono de flecha hacia arriba

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className='mt-20 bg-keppel'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-white text-sm pb-4 font-lora'>
                <span>© 2023 SoftFusion. All rights reserved.</span>
                <span>Terms · Privacy Policy</span>
                <SocialIcon/>
            </div>
            
            {/* Botón de flecha hacia arriba */}
            <button
                className="fixed bottom-10 right-10 bg-darkcyan text-white p-2 rounded-full shadow-md hover:shadow-lg transition duration-300"
                onClick={scrollToTop}
            >
                <FaArrowUp className="text-xl" />
            </button>
        </footer>
    );
}

export default Footer;
