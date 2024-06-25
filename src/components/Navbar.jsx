import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaTimes, FaMapMarkerAlt, FaInstagram } from "react-icons/fa"; // Importa los íconos de mapa e Instagram
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const content = (
    <div
      className={`bg-white lg:hidden block absolute top-20 w-full left-0 right-0 transition`}
    >
      <ul className="text-center text-x1 p-20">
        <li className="my-4 py-4 border-b border-mayablue hover:bg-tropicalindigo hover:text-white hover:rounded">
          <Link spy={true} smooth={true} to="hero" onClick={handleClick}>
            Inicio
          </Link>
        </li>
        <li className="my-4 py-4 border-b border-mayablue hover:bg-tropicalindigo hover:text-white hover:rounded">
          <Link spy={true} smooth={true} to="us" onClick={handleClick}>
            Nosotros
          </Link>
        </li>
        <li className="my-4 py-4 border-b border-mayablue hover:bg-tropicalindigo hover:text-white hover:rounded">
          <Link spy={true} smooth={true} to="recipes" onClick={handleClick}>
            Tips
          </Link>
        </li>
        <li className="my-4 py-4 border-b border-mayablue hover:bg-tropicalindigo hover:text-white hover:rounded">
          <Link spy={true} smooth={true} to="productos" onClick={handleClick}>
            Productos
          </Link>
        </li>
        {/* Enlace para el mapa */}
        <li className="my-4 py-4 border-b border-mayablue hover:bg-flame hover:text-white hover:rounded">
          <Link spy={true} smooth={true} to="mapas" onClick={handleClick}>
            <FaMapMarkerAlt className="inline-block mr-2" />
            Ubicacion
          </Link>
        </li>
        {/* Enlace para Instagram */}
        <li className="my-4 py-4 border-b border-mayablue hover:bg-flame hover:text-white hover:rounded">
          <a
            href="https://www.instagram.com/farmaciacentral7/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
          >
            <FaInstagram className="inline-block mr-2" />
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );

  return (
    <nav className={`bg-${scrolling ? 'white' : 'transparent'}`}>
      <div className="h-10vh flex justify-between z=50 text-tropicalindigo lg:py-5 lg:px-20 py-4">
        <div className="flex items-center flex-1">
          {/* Contenido del logo o nombre */}
        </div>
        <div className="sm:flex sm:mr-5 lg:flex md:flex lg:flex-1 items center justify-end font-normal hidden">
          <div className="flex items-center">
            <ul className="flex gap-8 sm:mx-auto md:mr-16 lg:mr-16 text-[18px]">
              <li className="hover:text-mayablue transition border-b-2 hover:border-tiffanyblue cursor-pointer">
                <Link spy={true} smooth={true} to="hero">
                  Inicio
                </Link>
              </li>
              <li className="hover:text-mayablue transition border-b-2 hover:border-tiffanyblue cursor-pointer">
                <Link spy={true} smooth={true} to="us">
                  Nosotros
                </Link>
              </li>
              <li className="hover:text-mayablue transition border-b-2 hover:border-tiffanyblue cursor-pointer">
                <Link spy={true} smooth={true} to="recipes">
                  Tips
                </Link>
              </li>
              <li className="hover:text-mayablue transition border-b-2 hover:border-tiffanyblue cursor-pointer">
                <Link spy={true} smooth={true} to="productos">
                  Productos
                </Link>
              </li>
              {/* Enlace para el mapa */}
              <li className="hover:text-flame transition border-b-2 hover:border-flame cursor-pointer">
                <Link spy={true} smooth={true} to="mapas">
                  <FaMapMarkerAlt className="inline-block mr-2" />
                  Ubicacion
                </Link>
              </li>
              {/* Enlace para Instagram */}
              <li className="hover:text-flame transition border-b-2 hover:border-flame cursor-pointer">
                <a
                  href="https://www.instagram.com/farmaciacentral7/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="inline-block mr-2" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button
          className="block sm:hidden transition m-4 p-2 rounded-lg"
          onClick={handleClick}
        >
          {click ? (
            <FaTimes className="text-2xl text-black" />
          ) : (
            <CiMenuFries className="text-2xl text-black" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
