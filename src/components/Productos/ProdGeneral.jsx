
import { poloPortada, boosPortada, boosPortada2, poloPortada2, kingPortada, kingPortada2 } from './prod';

export default function ProductListsCategoriesGrid() {
  return (
    <>
      <div className="">
        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {/* Contenedores de imágenes*/}
            <div data-aos="fade-up" className="group relative block overflow-hidden transition ease-out active:opacity-75 sm:col-span-2 md:col-span-1 flex justify-center items-center">
              <img
                src={boosPortada}
                alt="Product Image"
                className="transition ease-out group-hover:scale-110 mx-auto"
              />
              <div className="absolute inset-0 bg-black/25 transition ease-out group-hover:bg-black/0" />
            </div>
            <div data-aos="fade-up" className="group relative block overflow-hidden transition ease-out active:opacity-75 flex justify-center items-center">
              <img
                src={poloPortada}
                alt="Product Image"
                className="transition ease-out group-hover:scale-110 mx-auto"
              />
              <div className="absolute inset-0 bg-black/25 transition ease-out group-hover:bg-black/0" />
            </div>
            <div data-aos="fade-up"
              className="group relative block overflow-hidden transition ease-out active:opacity-75 flex justify-center items-center"
            >
              <img
                src={kingPortada}
                alt="Product Image"
                className="transition ease-out group-hover:scale-110 mx-auto"
              />
              <div className="absolute inset-0 bg-black/25 transition ease-out group-hover:bg-black/0" />
            </div>
            <div data-aos="fade-up"
              className="group relative block overflow-hidden transition ease-out active:opacity-75 sm:col-span-2 md:col-span-1 flex justify-center items-center"
            >
              <img
                src={boosPortada2}
                alt="Product Image"
                className="transition ease-out group-hover:scale-110 mx-auto"
              />
              <div className="absolute inset-0 bg-black/25 transition ease-out group-hover:bg-black/0" />
            </div>
            <div data-aos="fade-up"
              className="group relative block overflow-hidden transition ease-out active:opacity-75 flex justify-center items-center"
            >
              <img
                src={poloPortada2}
                alt="Product Image"
                className="transition ease-out group-hover:scale-110 mx-auto"
              />
              <div className="absolute inset-0 bg-black/25 transition ease-out group-hover:bg-black/0" />
            </div>
            <div data-aos="fade-up"
              className="group relative block overflow-hidden transition ease-out active:opacity-75 flex justify-center items-center"
            >
              <img
                src={kingPortada2}
                alt="Product Image"
                className="transition ease-out group-hover:scale-110 mx-auto"
              />
              <div className="absolute inset-0 bg-black/25 transition ease-out group-hover:bg-black/0" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
