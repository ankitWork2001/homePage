import React from 'react';
import gif1 from '../assets/gif1.gif';
import gif2 from '../assets/gif2.gif';

const Anxiety = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-full max-w-6xl mx-auto">
        <img 
          src={gif1} 
          alt="Anxiety GIF 1" 
          className="w-full h-auto sm:h-[40vh] md:h-[60vh] lg:h-[80vh] object-cover mb-8 sm:mb-12 md:mb-16 lg:mb-20" 
        />
        
        <img 
          src={gif2} 
          alt="Anxiety GIF 2" 
          className="w-full h-auto sm:h-[15vh] md:h-[18vh] lg:h-[20vh] object-cover mb-8 sm:mb-12 md:mb-16 lg:mb-20" 
        />
      </div>
    </div>
  );
}

export default Anxiety;