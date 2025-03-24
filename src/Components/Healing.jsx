import React from "react";
import holdinghand from '../assets/holdinghand.png';
import healing from '../assets/healing.png';

const Healing = () => {
  return (
    <div className="bg-white px-6 md:p-12 max-w-5xl mx-auto text-center font-sans relative">
      
      {/* Illustration - Positioned Above Header on Mobile with Fade In */}
      <div className="flex justify-center md:absolute md:top-0 md:right-10 animate-fadeIn">
        <img 
          src={holdinghand} 
          alt="People holding hands" 
          className="w-24 md:w-36 mt-[10px] md:mt-0 transition-transform duration-500 hover:scale-130" 
        />
      </div>

      {/* Header Section */}
      <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mt-4 animate-fadeIn">
        HEALING HAPPENS HERE!
      </h2>
      <p className="text-gray-600 mt-4 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
        When we say, 'We get you,' we truly mean it. Mending Mind isn’t just a project—it’s a vision
        that’s personal, real, and rooted in the belief that no one should ever feel alone in their journey.
        Because everybody deserves the right kind of support, in the way that works best for them.
      </p>

      {/* Feedback Boxes and Emojis */}
      <div className="mt-8 flex justify-center items-center max-w-3xl mb-5 mx-auto">
        <img 
          src={healing} 
          alt="Healing Emojis" 
          className=" transition-transform duration-500 hover:scale-110"
        />
      </div>
    </div>
  );
};

export default Healing;
