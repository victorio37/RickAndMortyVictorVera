import React from 'react';

const Input = ({ onSubmitHandler, inputHandler, inputLocationValue }) => {
  return (
    <>
      <form
        className="flex gap-4
      "
        onSubmit={onSubmitHandler}
      >
        <input
          className="p-1 text-black rounded-md placeholder:text-center"
          type="search"
          name="inputLocation"
          id="idInputLocation"
          placeholder="Only numbers 1 to 126"
          onChange={inputHandler}
          value={inputLocationValue}
        />
        <button
          className="py-2 px-4 lg:active:animate-pulse lg:hover:scale-110 lg:hover:shadow-md lg:hover:shadow-black transition lg:active:scale-90 rounded-xl bg-gray-900"
          type="submit"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </>
  );
};

export default Input;
