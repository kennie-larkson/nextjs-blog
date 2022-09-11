import React from "react";

function Body({ children }) {
  return (
    <div className="phone:container flex border border-t-0 p-10 mx-20 my-10 ">
      {children}
    </div>
  );
}

export default Body;

//bg-slate-200  my-10
