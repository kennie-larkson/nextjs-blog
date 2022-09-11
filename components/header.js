import React from "react";

function Header({ home, name }) {
  return (
    <header
      className={`phone:container flex flex-col mx-20 self-center text-white mt-10 justify-center bg-black`}
    >
      {home ? (
        <>
          <img
            src="/images/kennie_.jpg"
            className=" rounded-full h-1/4 w-1/4 mt-10 self-center"
            alt={name}
          />
          <span className="text-center text-lg">{name}</span>
        </>
      ) : (
        <></>
      )}
    </header>
  );
}

export default Header;

//max-w-lg  rounded-full  self-center border border-700 shadow-sm shadow-white-200 self-center flex flex-col
