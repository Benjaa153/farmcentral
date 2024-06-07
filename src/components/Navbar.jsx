import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
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
    <>
      <div className="bg-[white] lg:hidden block absolute top-16 w-full left-0 right-0 transition">
        <ul className="text-center text-x1 p-20">
          <Link spy={true} smooth={true} to="hero">
            <li className="my-4 py-4 border-b border-mayablue hover:bg-tropicalindigo hover:text-[white] hover:rounded">
              Inicio
            </li>
          </Link>
          <Link spy={true} smooth={true} to="us">
            <li className="my-4 py-4 border-b border-mayablue hover:bg-tropicalindigo hover:text-[white] hover:rounded">
              Nosotros
            </li>
          </Link>
          <Link spy={true} smooth={true} to="recipes">
            <li className="my-4 py-4 border-b border-mayablue hover:bg-tropicalindigo hover:text-[white] hover:rounded">
              Tips
            </li>
          </Link>
          <Link spy={true} smooth={true} to="productos">
            <li className="my-4 py-4 border-b border-mayablue hover:bg-tropicalindigo hover:text-[white] hover:rounded">
            Productos
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <nav className={`bg-${scrolling ? "white" : "transparent"}`}>
      <div className="h-10vh flex justify-between z=50 text-tropicalindigo lg:py-5 lg:px-20 py-4">
        <div className="flex items-center flex-1">
         
        </div>
        <div className="sm:flex sm:mr-5 lg:flex md:flex lg:flex-1 items center justify-end font-normal hidden">
          <div className="flex items-center">
            <ul className="flex gap-8 sm:mx-auto md:mr-16 lg:mr-16 text-[18px]">
              <Link spy={true} smooth={true} to="hero">
                <li className="hover:text-mayablue	 transition border-b-2 hover:border-tiffanyblue cursor-pointer">
                  Inicio
                </li>
              </Link>
              <Link spy={true} smooth={true} to="us">
                <li className="hover:text-mayablue	 transition border-b-2 hover:border-tiffanyblue cursor-pointer">
                  Nosotros
                </li>
              </Link>
              <Link spy={true} smooth={true} to="recipes">
                <li className="hover:text-mayablue	 transition border-b-2 hover:border-tiffanyblue cursor-pointer">
                  Tips
                </li>
              </Link>
              <Link spy={true} smooth={true} to="productos">
                <li className="hover:text-mayablue	 transition border-b-2 hover:border-tiffanyblue cursor-pointer">
                  Productos
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button className="block sm:hidden transition m-4" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
