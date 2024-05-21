import React from "react";
import { SlArrowRightCircle } from "react-icons/sl";

const WaitlistJoin = () => {
  return (
    <section className="bg-white px-5 md:px-20 py-20 flex flex-col items-center">
      <div className="flex flex-col gap-10 w-full md:px-20">
        <div className="flex flex-col gap-5">
          <label htmlFor="" className="text-secondary text-[1.5rem] md:text-[2.5rem]">
            Your Name
          </label>
          <input
            type="text"
            className=" border-b-4 border-secondary focus:outline-none text-xl"
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <label htmlFor="" className="text-secondary text-[1.5rem] md:text-[2.5rem]">
              Your Email
            </label>
            <button className="text-secondary font-semibold py-2 px-4 rounded-lg cursor-pointer text-xs md:text-sm">
              <SlArrowRightCircle size={50} />
            </button>
          </div>
          <input
            type="text"
            className="border-b-4 border-secondary focus:outline-none text-xl"
          />
        </div>
      </div>
      <div className="text-center flex justify-center mt-10">
        <p className="text-[2rem] text-secondary md:w-[53%] text-center">
          We are just starting our journey, but we promise that it will be cool!
        </p>
      </div>
    </section>
  );
};

export default WaitlistJoin;
