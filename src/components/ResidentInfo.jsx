import axios from 'axios';
import React, { useState, useEffect } from 'react';

const ResidentInfo = ({ url }) => {
  const [residentData, setResidentData] = useState();

  const getResidentData = async () => {
    try {
      const res = await axios.get(url);
      setResidentData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getResidentData();
  }, []);

  return (
    <section className="max-w-[310px] resident lg:hover:scale-110 transition bg-[#062226] rounded relative">
      {residentData && (
        <>
          <img className="p-1 rounded-md" src={residentData.image} alt="residentImage" />
          <div className="p-3">
            <div className="py-1 px-6 flex justify-center items-center rounded absolute top-4 left-0 bg-[#062226]">
              {residentData.status === 'Alive' ? (
                <div className="ml-1 h-4 w-4 absolute left-1 rounded-[50%] bg-green-600"></div>
              ) : residentData.status === 'Dead' ? (
                <div className="ml-1 h-4 w-4 absolute left-1 rounded-[50%] bg-rose-900"></div>
              ) : (
                <div className="ml-1 h-4 w-4 absolute left-1 rounded-[50%] bg-gray-500"></div>
              )}
              <p className="ml-1 pl-1 text-sm">{residentData.status}</p>
            </div>
            <h2 className="text-2xl">{residentData.name}</h2>
            <hr className="my-2 border-[0.5px] border-[#084851]" />
            <div>
              <h3 className="text-[#7E7E7E] text-sm font-semibold">Raza</h3>
              <p className="text-[#FBFBFB]">{residentData.species}</p>
            </div>
            <div>
              <h3 className="text-[#7E7E7E] text-sm font-semibold">Origen</h3>
              <p className="text-[#FBFBFB]">{residentData.origin.name}</p>
            </div>
            <div>
              <h3 className="text-[#7E7E7E] text-sm font-semibold">
                Aparicion en episodios
              </h3>
              <p className="text-[#FBFBFB]">{residentData.episode.length}</p>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ResidentInfo;
