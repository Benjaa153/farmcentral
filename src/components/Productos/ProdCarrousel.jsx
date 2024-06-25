import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const arrowStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  color: 'black',
  fontSize: '1.2rem',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 1,
  cursor: 'pointer'
};

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button style={{ ...arrowStyle, right: '10px' }} onClick={onClick}>
      &#9654;
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button style={{ ...arrowStyle, left: '10px' }} onClick={onClick}>
      &#9664;
    </button>
  );
}

const ProductCarousel = ({ title, products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className="w-full">
      <h3 className="text-2xl text-darkcyan uppercase font-lora mb-4 text-center">{title}</h3>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mb-5 h-48 w-48 overflow-hidden flex items-center justify-center mx-auto">
              <img src={product.img} alt={product.title} className="object-contain h-full w-full" />
            </div>
            <p className="text-lg text-black mb-4 text-center">{product.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
