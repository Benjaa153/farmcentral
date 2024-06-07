import React from 'react';
import whatsappIcon from '../images/Whatsapp.png';

function WhatsappBut() {
    return (
      <div className="fixed bottom-20 right-5 z-50 animate-bounce">
        <a
          href="https://api.whatsapp.com/send?phone=3863569828"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsappIcon} alt="WhatsApp" className="w-16 h-16" />
        </a>
      </div>
    );
  }
  
  export default WhatsappBut;