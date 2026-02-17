import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-20 py-10 ">
      <h4 className="bg-black text-white uppercase px-6 py-3 rounded-full">
        Target Audiance
      </h4>
      <button className=" bg-gray-300 text-black uppercase px-6 py-3 rounded-full tracking-widest text-sm">
        Digital Banking Platform
      </button>
    </div>
  );
};

export default Navbar;
