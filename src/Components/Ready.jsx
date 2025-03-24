import React from "react";
import ready1 from "../assets/ready1.jpg";
import ready2 from "../assets/ready2.png";

const Ready = () => {
  return (
    <div className="flex flex-col justify-center items-center m-10 bg-orange-50 p-10 pb-0 text-center">
      <h2 className="text-3xl font-bold">READY TO BEGIN?</h2>
      <p className="font-semibold italic">Just follow these easy steps:</p>

      <div className="flex flex-wrap justify-center gap-5 mt-10">
        <img
          src={ready1}
          alt="Step 1"
          className="h-84 object-cover rounded-lg shadow-md max-w-full"
        />
        <img
          src={ready2}
          alt="Step 2"
          className="h-84 object-cover max-w-full mix-blend-multiply"
        />
      </div>

      <button className="bg-amber-400 hover:bg-amber-500 font-bold py-3 px-6 rounded-lg border-2 border-transparent shadow-md transition-all mt-10">
        GET STARTED &gt;
      </button>
    </div>
  );
};

export default Ready;
