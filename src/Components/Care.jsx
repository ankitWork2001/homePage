import React from "react";
import care1 from "../assets/care1.png";
import care2 from "../assets/care2.png";
import care3 from "../assets/care3.png";
import care4 from "../assets/care4.png";

const Care = () => {
  const data=[
    {
      title: "Personal Therapy Sessions",
      desc: "For couples and individuals of all ages (children, teens, adults, seniors, couples)",
      img: care2,
    },
    {
      title: "Wellness Programs for All Sectors",
      desc: "For corporates, schools, hospitals, NGOs, community clubs, and more.",
      img: care3,
    },
    {
      title: "Internships & Courses",
      desc: "For curious learners and professionals aspiring to learn and upskill.",
      img: care4,
    },
  ]
  return (
    <div className="bg-[#efc345] flex flex-col m-10 p-5">
      {/* Header Section */}
      <div className="flex items-center justify-center gap-x-10 p-10 text-center">
        <img src={care1} style={{ backgroundColor: 'transparent' }} alt="Providing Care" className="h-32" />
        <div>
          <p className="text-3xl font-bold">PROVIDING CARE</p>
          <p className="text-2xl ml-3">Tailored to Your Needs</p>
        </div>
      </div>

      {/* Cards Section */}

      <div className="hidden md:grid grid-cols-3 gap-10 p-5">
        
        {data.map((item, index) => (
          <VerticalCard key={index} {...item} />
        ))}


      </div>

      <HorizontalCard/>
    </div>
  );
};

const VerticalCard = ({title, desc, img}) => {
  return (
    <div className={`bg-[#f7f1ea] border border-amber-100 rounded-4xl py-16 px-8 shadow-lg flex flex-col items-center`}>
      <p className="text-2xl font-bold text-center">{title}</p>
      <p className="text-lg mt-2 text-center max-w-50">{desc}</p>
      <img src={img} alt={title} className="h-40 w-auto rounded-2xl mt-4 mx-auto relative" />
      <button className="border border-amber-400 bg-amber-400 text-white font-bold py-2 px-4 mt-3 rounded-lg">
        KNOW MORE
      </button>
    </div>
  );
}

const HorizontalCard = () => {
  const data = [
    {
      title: "Personal Therapy Sessions",
      desc: "For couples and individuals of all ages (children, teens, adults, seniors, couples)",
      img: care2,
    },
    {
      title: "Wellness Programs for All Sectors",
      desc: "For corporates, schools, hospitals, NGOs, community clubs, and more.",
      img: care3,
    },
    {
      title: "Internships & Courses",
      desc: "For curious learners and professionals aspiring to learn and upskill.",
      img: care4,
    },
  ];

  return (
    <div className="flex flex-col gap-y-5 md:hidden">
      {data.map((item, index) => (
        <div key={index} className="bg-[#f7f1ea] flex flex-row items-center p-6 rounded-4xl shadow-lg">
          {index % 2 === 0 ? (
            <>
              <div className="w-1/2 flex justify-center">
                <img src={item.img} alt={item.title} className="h-40 w-auto rounded-2xl" />
              </div>
              <div className="w-1/2 flex flex-col items-start text-left p-6">
                <p className="text-2xl font-bold">{item.title}</p>
                <p className="text-lg mt-2">{item.desc}</p>
                <button className="border border-amber-400 bg-amber-400 text-white font-bold py-2 px-4 mt-3 rounded-lg hover:bg-amber-500 transition-colors">
                  KNOW MORE
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="w-1/2 flex flex-col items-start text-left p-6">
                <p className="text-2xl font-bold">{item.title}</p>
                <p className="text-lg mt-2">{item.desc}</p>
                <button className="border border-amber-400 bg-amber-400 text-white font-bold py-2 px-4 mt-3 rounded-lg hover:bg-amber-500 transition-colors">
                  KNOW MORE
                </button>
              </div>
              <div className="w-1/2 flex justify-center">
                <img src={item.img} alt={item.title} className="h-40 w-auto rounded-2xl" />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Care;
