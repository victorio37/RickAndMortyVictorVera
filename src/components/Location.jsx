import React from 'react';

const Location = ({ name, type, dimension, residentsNumber }) => {
  return (
    <section className="w-full flex flex-wrap justify-center gap-3 text-center">
      <article className="lg:hover:scale-105 transition flex flex-col justify-center items-center rounded-lg p-1 w-[200px] bg-[#062226] shadow-md shadow-black">
        <h2 className="text-[20px] font-bold">Nombre</h2>
        <p className="text-[14px] font-light">{name}</p>
      </article>
      <article className="lg:hover:scale-105 transition flex flex-col justify-center items-center rounded-lg p-1 w-[200px] bg-[#062226] shadow-md shadow-black">
        <h2 className="text-[20px] font-bold">tipo</h2>
        <p className="text-[14px] font-light">{type}</p>
      </article>
      <article className="lg:hover:scale-105 transition flex flex-col justify-center items-center rounded-lg p-1 w-[200px] bg-[#062226] shadow-md shadow-black">
        <h2 className="text-[20px] font-bold">dimension</h2>
        <p className="text-[14px] font-light">{dimension}</p>
      </article>
      <article className="lg:hover:scale-105 transition flex flex-col justify-center items-center rounded-lg p-1 w-[200px] bg-[#062226] shadow-md shadow-black">
        <h2 className="text-[20px] font-bold">poblacion</h2>
        <p className="text-[14px] font-light">{residentsNumber}</p>
      </article>
    </section>
  );
};

export default Location;
