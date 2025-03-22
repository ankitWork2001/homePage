import React from "react";
import care1 from "../assets/care1.png";
import care2 from "../assets/care2.png";
import care3 from "../assets/care3.png";
import care4 from "../assets/care4.png";

const Care = () => {
  return (
    <div className=" bg-amber-300 flex-col m-20 ">
      <div className="ml-50 p-10 flex gap-x-20">
        <img src={care1} alt="" className="h-105" />
        <div className="mt-10">
          <p className="text-3xl font-bold"> PROVIDING CARE</p>
          <p className="text-2xl ml-7">tailored to Your needs</p>
        </div>
      </div>
      <div className="flex p-5">
        <div className="p-10 ">
          <div className="flex-col bg-amber-50 border-amber-50 rounded-lg p-2">
            <div className="flex-col w-2/3 mt-10">
              <p className="text-3xl font-bold">Personal Therapy Sessions</p>
              <p className="text-2xl">
                For couples and individuals of all ages (children, teens,
                adults, seniors, couples)
              </p>
              <button className="border-amber-400  mt-3 bg-amber-400 p-2 font-bold">
                KNOW MORE{" "}
              </button>
            </div>
            <img src={care2} alt="" className="h-65 rounded-2xl p-4" />
          </div>
        </div>
        <div className="p-10 ">
          <div className="flex-col bg-amber-50 border-amber-50 rounded-lg p-2">
            <div className="flex-col w-2/3 mt-10 ">
              <p className="text-3xl font-bold">
                Wellness Programs for All Sectors
              </p>
              <p className="text-2xl">
                For corporates, schools, hospitals, NGOs, community clubs, and
                more.
              </p>
              <button className="border-amber-400  mt-3 bg-amber-400 p-2 font-bold">
                KNOW MORE{" "}
              </button>
            </div>
            <img src={care3} alt="" className="h-65 rounded-2xl p-4" />
          </div>
        </div>
        <div className=" p-10">
          <div className="flex-col bg-amber-50 border-amber-50 rounded-lg p-2">
            <div className="flex-col w-2/3 mt-10">
              <p className="text-3xl font-bold">Internships & Courses</p>
              <p className="text-2xl">
                For curious learners and professionals aspiring to learn and
                upskill.
              </p>
              <button className="border-amber-400  mt-3 bg-amber-400 p-2 font-bold">
                KNOW MORE{" "}
              </button>
            </div>
            <img src={care4} alt="" className="h-65 rounded-2xl p-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Care;
