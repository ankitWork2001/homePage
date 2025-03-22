import React from 'react';
import allInclusive from '../assets/allInclusive.png';
import personalized from '../assets/personalized.png'
import whenwhere from '../assets/whenwhere.png'


const Goal = () => {
  return (
    <div className="bg-white p-12 max-w-5xl mx-auto text-center font-sans relative">
      {/* Header Section */}
      <h2 className="text-3xl font-extrabold text-gray-900">
        OUR <span className="bg-blue-200 px-2 rounded">GOAL</span> IS SIMPLE
      </h2>
      <p className="italic text-gray-600 mt-2 text-lg">
        prioritising <span className="font-bold">Your</span> Mental Health
      </p>
      
      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <div className="bg-yellow-100 p-6 rounded-lg flex flex-col items-center shadow-md transition-transform duration-300 hover:scale-105">
          <img src={allInclusive}  alt="All Inclusive" className="w-24 mb-4" />
          <h3 className="font-bold text-lg">All Inclusive?</h3>
          <p className="text-gray-600">Safe space for all.</p>
        </div>
        
        <div className="bg-yellow-100 p-6 rounded-lg flex flex-col items-center shadow-md transition-transform duration-300 hover:scale-105">
          <img src={whenwhere} alt="When Where" className="w-24 mb-4" />
          <h3 className="font-bold text-lg">When? Where?</h3>
          <p className="text-gray-600">Meet us online or offline in Mumbai.</p>
        </div>
        
        <div className="bg-orange-100 p-6 rounded-lg flex flex-col items-center shadow-md transition-transform duration-300 hover:scale-105">
          <img src={personalized} alt="100% Confidential" className="w-24 mb-4" />
          <h3 className="font-bold text-lg">100% Confidential?</h3>
          <p className="text-gray-600">That goes without saying.</p>
        </div>
        
        {/* <div className="bg-yellow-100 p-6 rounded-lg flex flex-col items-center shadow-md transition-transform duration-300 hover:scale-105">
          <img src={personalized} alt="Personalized Attention" className="w-24 mb-4" />
          <h3 className="font-bold text-lg">
            <span className="underline">Personalized Attention?</span>
          </h3>
          <p className="text-gray-600">Above and beyond.</p>
        </div> */}
      </div>
      
      {/* Emoji Reactions */}
      <div className="absolute top-4 right-10 text-3xl animate-bounce">😆</div>
    </div>
  );
}

export default Goal;
