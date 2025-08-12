import { Link } from 'react-router-dom';

import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';

const carouselImages = [hero1, hero2, hero3, hero4];
const Hero = () => {
  return (
    <section className="relative grid lg:grid-cols-2 gap-16 items-center bg-gradient-to-r from-[#f9f5f0] via-white to-[#f1e8dd] px-6 py-16 rounded-2xl shadow-lg">
      {/* Texto */}
      <div className="animate-fadeIn">
        <h1 className="max-w-2xl text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0e4b8b] leading-tight">
          Muebles que transforman tu hogar
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-700">
          Descubre nuestra colección de muebles elegantes y funcionales, diseñados para brindar
          confort y estilo a cada rincón de tu casa.
        </p>
        <div className="mt-8">
          <Link
            to="/products"
            className="btn btn-lg border-0 bg-[#0e4b8b] hover:bg-[#4da6e7] text-white rounded-xl shadow-md transition-all duration-300"
          >
            Ver productos
          </Link>
        </div>
      </div>

      {/* Carrusel */}
      <div className="hidden lg:flex h-[28rem] carousel carousel-center p-4 space-x-6 bg-white/80 rounded-2xl shadow-md">
        {carouselImages.map((image, index) => (
          <div key={index} className="carousel-item">
            <img
              src={image}
              className="rounded-xl h-full w-80 object-cover shadow-sm hover:shadow-xl transition-shadow duration-300"
              alt={`Producto ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
