import React from "react";
import growth1 from "../assets/growth1.png";

const Growth = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-6 px-4 py-6 text-gray-800 relative overflow-hidden">
      {/* Title & Image Section */}
      <div className="relative w-full flex flex-col items-center">
        {/* Title (Centered) */}
        <div className="text-center relative">
          <p className="text-2xl sm:text-4xl font-bold relative inline-block">
            PROMISING{" "}
            <span className="relative inline-block px-2 bg-teal-200 rounded-lg">
              GROWTH
            </span>
          </p>
          <p className="text-md sm:text-lg text-gray-600 italic">
            since day <span className="text-yellow-500 font-semibold">One</span>
          </p>
        </div>

        {/* Image on the right */}
        <div className="absolute top-0 right-0 w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56">
          <img src={growth1} alt="Growth" className="w-full" />
        </div>
      </div>

      {/* Stats Buttons */}
      <div className="flex items-center justify-center gap-2 sm:gap-6 mt-6">
        <p className="text-xl sm:text-3xl cursor-pointer select-none">&lt;</p>

        <button className="p-4 sm:p-5 border-2 rounded-lg font-bold text-lg bg-teal-100 hover:bg-teal-300 w-32 sm:w-40 lg:w-44 shadow-md transition-all">
          6 YEARS
        </button>
        <button className="p-4 sm:p-5 border-2 rounded-lg font-bold text-lg bg-teal-100 hover:bg-teal-300 w-32 sm:w-40 lg:w-44 shadow-md transition-all">
          4.9/5 STARS
        </button>
        <button className="p-4 sm:p-5 border-2 rounded-lg font-bold text-lg bg-teal-100 hover:bg-teal-300 w-32 sm:w-40 lg:w-44 shadow-md transition-all">
          3000+ SESSIONS
        </button>

        <p className="text-xl sm:text-3xl cursor-pointer select-none">&gt;</p>
      </div>

      {/* CTA Button */}
      <button className="bg-yellow-500 hover:bg-yellow-600 font-bold text-lg py-3 px-6 rounded-lg border-2 border-yellow-500 shadow-md transition-all mt-4 flex items-center gap-2">
        GET TO KNOW US BETTER &gt;
      </button>
    </div>
  );
};

export default Growth;
