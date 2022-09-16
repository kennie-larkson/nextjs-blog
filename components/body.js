import React from "react";

function Body({ children }) {
  return (
    <div className="phone:container flex flex-col items-center border border-t-0 border-b-0 p-5 mx-20 my-5 ">
      {children}
    </div>
  );
}

export default Body;
