import React from "react";
import ready1 from "../assets/ready1.jpg";
import ready2 from "../assets/ready2.png";

const Ready = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-orange-50 p-10 text-center m-20">
      {/* Title */}
      <h2 className="text-3xl font-bold">READY TO BEGIN?</h2>
      <p className="font-semibold italic text-gray-600">Just follow these easy steps:</p>

      {/* Image and Steps Container */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10 w-full">
        {/* Mobile Mockup Image (Centered on Mobile) */}
        <div className="w-60 sm:w-72 md:w-80">
        <img
          src={ready1}
          alt="Mobile Mockup"
          className="w-full object-cover mix-blend-multiply bg-transparent h-[60vh]"
          style={{ backgroundColor: 'transparent' }}
        />
        </div>

        {/* Steps (Stacked on Mobile) */}
        <div className="flex flex-col space-y-4 text-left">
          <p className="flex items-center text-lg">
            <span className="bg-black text-white font-bold px-3 py-1 rounded-full mr-3">
              01
            </span>
            CHOOSE YOUR SERVICE
          </p>
          <p className="flex items-center text-lg">
            <span className="bg-black text-white font-bold px-3 py-1 rounded-full mr-3">
              02
            </span>
            FILL OUT THE DETAILS
          </p>
          <p className="flex items-center text-lg">
            <span className="bg-black text-white font-bold px-3 py-1 rounded-full mr-3">
              03
            </span>
            PAY AND CONFIRM YOUR SESSION
          </p>
          <p className="flex items-center text-lg">
            <span className="bg-black text-white font-bold px-3 py-1 rounded-full mr-3">
              04
            </span>
            RECEIVE A CUSTOMISED{" "}
            <span className="bg-teal-300 px-2 ml-2 rounded-md">WELLNESS BOX</span>
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <button className="bg-yellow-500 hover:bg-yellow-600 font-bold text-lg py-3 px-6 rounded-lg border-2 border-yellow-500 shadow-md transition-all mt-10">
        GET STARTED &gt;
      </button>
    </div>
  );
};

export default Ready;
