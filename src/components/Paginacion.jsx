import React from 'react';

const Paginacion = ({ page, setPage, max }) => {
  const nextPage = () => {
    setPage(page + 1);
  };
  const prevPage = () => {
    setPage(page - 1);
  };

  return (
    <div className="p-2 flex justify-center items-center gap-5">
      <button
        className="p-3 lg:active:animate-pulse lg:hover:scale-110 lg:hover:shadow-md lg:hover:shadow-black transition lg:active:scale-90 bg-gray-900 rounded-xl"
        disabled={page === 1 || page < 1}
        onClick={prevPage}
      >
        <i className="fa-solid fa-left-long"></i>
      </button>
      <p className="text-xl font-light">
        {page} de {max}
      </p>
      <button
        className="p-3 lg:active:animate-pulse lg:hover:scale-110 lg:hover:shadow-md lg:hover:shadow-black transition lg:active:scale-90 bg-gray-900 rounded-xl"
        disabled={page === Math.ceil(max) || page > Math.ceil(max)}
        onClick={nextPage}
      >
        <i className="fa-solid fa-right-long"></i>
      </button>
    </div>
  );
};

export default Paginacion;
