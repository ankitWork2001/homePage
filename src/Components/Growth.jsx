import React from "react";
import growth1 from "../assets/growth1.png";

const Growth = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-6 m-6 text-gray-800 relative overflow-hidden">
      <p className="text-4xl font-bold text-center">PROMISING GROWTH</p>
      <p className="text-lg text-center text-gray-600 italic">Since Day One</p>

      <img
        src={growth1}
        alt="Growth"
        className="absolute w-40 h-45  
          xs:w-40 xs:left-220 xs:-top-1 
          sm:w-80 sm:left-120 sm:-top-10 
          md:w-96 md:left-150 md:-top-10
          lg:w-[400px] lg:left-200 lg:-top-10
          xl:w-[450px] xl:left-250 xl:-top-10 transition-all"
      />

      <div className="flex items-center gap-4 mt-12">
        <p className="text-3xl cursor-pointer select-none">&lt;</p>

        <button className="p-4 border-2 rounded-lg font-semibold bg-teal-100 hover:bg-teal-300 w-36 sm:w-40 lg:w-44 shadow-md transition-all">
          6 YEARS
        </button>
        <button className="p-4 border-2 rounded-lg font-semibold bg-teal-100 hover:bg-teal-300 w-36 sm:w-40 lg:w-44 shadow-md transition-all">
          4.9/5 STARS
        </button>
        <button className="p-4 border-2 rounded-lg font-semibold bg-teal-100 hover:bg-teal-300 w-36 sm:w-40 lg:w-44 shadow-md transition-all">
          3000+ SESSIONS
        </button>

        <p className="text-3xl cursor-pointer select-none">&gt;</p>
      </div>

      <button className="bg-amber-400 hover:bg-amber-500 font-bold py-3 px-6 rounded-lg border-2 border-amber-400 shadow-md transition-all mt-4">
        GET TO KNOW US BETTER &gt;
      </button>
    </div>
  );
};

export default Growth;
