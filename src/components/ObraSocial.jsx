import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ObrasSociales = () => {
    const obrasSociales = [
        'Subsidio de salud',
        'Osde',
        'Pami',
        'Swiss Medical',
        'Sancor Salud',
        'Prensa',
        'Boreal',
        'Mora',
        'Galeno',
        'Recetario solidario',
    ];

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <div className="bg-gray-200 py-12 font-lora" data-aos="fade-down">
            <div className="container mx-auto">
                <h2 className="text-4xl font-lora text-center text-mayablue mb-8">
                    Obras Sociales
                </h2>
                <Slider {...sliderSettings} className="slick-slider">
                    {obrasSociales.map((obra, index) => (
                        <div key={index} className="p-4 ">
                            <div className="bg-keppel rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                                <p className="text-lg text-center text-gray-800">
                                    {obra}
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ObrasSociales;
