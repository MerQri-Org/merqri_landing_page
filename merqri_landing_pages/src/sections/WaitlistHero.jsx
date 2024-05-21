import React from "react";
import { SlArrowRightCircle } from "react-icons/sl";
const WaitlistHero = () => {
  return (
    <section className="px-5 md:px-0 md:pl-10 py-10 flex flex-col md:flex-row gap-10 md:gap-0">
      <div className=" md:w-[60%] flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <h1 className="text-[3rem] text-primary font-[500]">
            Moving Made Easy: <br /> We'll Be There Soon!
          </h1>
          <p className="text-sm md:w-[80%]">
            Get ready for a smooth move with Merqri! Our app is coming soon,
            packed with information and resources to make your move a breeze.
          </p>
          <p className="text-sm md:w-[70%]">
            In the meantime, sign up below to be notified when our app goes live
            and receive exclusive offers!
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5 w-[85%]">
            <label htmlFor="" className="text-secondary text-[2.5rem]">
              Your Name
            </label>
            <input
              type="text"
              className=" border-b-4 border-secondary focus:outline-none text-xl"
            />
          </div>
          <div className="flex flex-col gap-5 w-[85%]">
            <div className="flex justify-between">
              <label htmlFor="" className="text-secondary text-[2.5rem]">
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
        <p className="md:w-[70%] text-sm">
          Stay tuned for the launch of Merqri and experience the difference a
          professional moving company can make.
        </p>
      </div>
      <div>
        <img src="/images/laptop.png" alt="bus" className="w-[1200px]" />
      </div>
    </section>
  );
};

export default WaitlistHero;
