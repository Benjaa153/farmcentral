import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
    boreal,
    galeno,
    mora,
    osde,
    pami,
    prensa,
    recetario,
    sancor,
    subsidio,
    swiss,
} from './obrasocial';

const ObrasSociales = () => {
    const obrasSociales = [
        boreal,
        galeno,
        mora,
        osde,
        pami,
        prensa,
        recetario,
        sancor,
        subsidio,
        swiss,
    ];

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 1000,
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
                <h2 className="text-4xl font-lora text-center text-darkcyan mb-8">
                    Obras Sociales
                </h2>
                <Slider {...sliderSettings} className="slick-slider">
                    {obrasSociales.map((obra, index) => (
                        <div key={index} className="p-4">
                            <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                                <img
                                    src={obra}
                                    alt={`Obra Social ${index + 1}`}
                                    className="w-full h-32 object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ObrasSociales;
