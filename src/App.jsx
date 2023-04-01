import { useState, useEffect } from 'react';
import axios from 'axios';
import { getRandomNumber } from './assets/JS/getRandomNumber';
import Location from './components/Location';
import ResidentInfo from './components/ResidentInfo';
import Input from './components/Input';
import Paginacion from './components/Paginacion';
import headerSVG from './assets/SVG/header.svg';

function App() {
  const [locationData, setLocationData] = useState();
  const [inputLocationValue, setInputLocationValue] = useState('');

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [max, setMaximo] = useState(null);

  const getLocation = async (idLocation) => {
    const URL = `https://rickandmortyapi.com/api/location/${idLocation}`;
    try {
      const res = await axios.get(URL);
      setLocationData(res.data);
      setMaximo(Math.ceil(res.data.residents.length / perPage));
    } catch (error) {
      console.log(error);
    }
  };

  const inputHandler = (e) => {
    if (e.target.value > 0 || e.target.value === '') {
      const inputValue = e.target.value;

      if (/^\d*$/.test(inputValue)) setInputLocationValue(inputValue);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (inputLocationValue.length > 0) {
      getLocation(inputLocationValue);
    }
  };

  useEffect(() => {
    getLocation(getRandomNumber());
  }, []);

  return (
    <div className="App mb-8 min-h-screen flex gap-5 justify-start flex-col items-center ">
      <header>
        <img className="max-h-[250px]" src={headerSVG} alt="" />
      </header>
      <Input
        inputHandler={inputHandler}
        onSubmitHandler={onSubmitHandler}
        inputLocationValue={inputLocationValue}
      />
      {locationData && (
        <Location
          name={locationData.name}
          type={locationData.type}
          dimension={locationData.dimension}
          residentsNumber={locationData.residents.length}
        />
      )}
      <section>
        <h2 className="m-2 text-4xl font-normal text-center">Habitantes:</h2>
        {locationData && locationData.residents.length > 10 && (
          <Paginacion page={page} setPage={setPage} max={max} />
        )}
      </section>
      {locationData && (
        <section className="flex flex-wrap gap-7 justify-center items-center max-w-[1000px] w-[90%]">
          {locationData.residents.length > 0 ? (
            locationData.residents
              .slice((page - 1) * perPage, (page - 1) * perPage + perPage)
              .map((resident) => <ResidentInfo key={resident} url={resident} />)
          ) : (
            <div className="pb-4 flex flex-col gap-5">
              <p className="text-center text-2xl">No hay habitantes en esta zona</p>
              <img
                className="h-[400px] w-[400px] rounded-[50%] lg:hover:scale-105 lg:hover:shadow-black lg:hover:shadow-2xl transition p-1 outline-[3px] outline outline-white animate-pulse"
                src="https://images3.alphacoders.com/812/812062.png"
                alt="no people"
              />
            </div>
          )}
        </section>
      )}
      {locationData && locationData.residents.length > 10 && (
        <Paginacion page={page} setPage={setPage} max={max} />
      )}
    </div>
  );
}

export default App;
