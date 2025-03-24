import React from 'react';
import goal from '../assets/goal.jpg';
import laughing from '../assets/laughing.png';
import yourgoal from '../assets/yourgoal.png';

const Goal = () => {
  return (
    <div className="bg-white p-6 md:p-12 max-w-5xl mx-auto text-center font-sans relative">
      {/* Your Goal Image with Fade-In Effect */}
      <img src={yourgoal} alt="yourgoal" className="mx-auto animate-fadeIn" />

      {/* Goal Image with Scale Animation */}
      <img src={goal} alt="goal" className="my-10 transform transition duration-500 hover:scale-110" />

      {/* Laughing Emoji - Hidden on Mobile, Visible on md+ with Bounce */}
      <div className="absolute top-0 right-10 text-3xl animate-bounce hidden md:block">
        <img src={laughing} alt="laughing" />
      </div>
    </div>
  );
};

export default Goal;
