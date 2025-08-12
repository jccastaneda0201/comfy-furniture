const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">We love</h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto text-gray-700 text-center">
        Descubre nuestra colección de muebles diseñados para brindar{' '}
        <span className="font-semibold text-[#0e4b8b]">confort</span>y elegancia a tu hogar. Cada
        pieza combina estilo, durabilidad y el toque acogedor que hará que cada rincón cuente una
        historia.
      </p>
    </>
  );
};
export default About;
