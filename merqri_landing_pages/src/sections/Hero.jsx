import React from "react";
import Button from "../components/Button";
import { goals } from "../constants";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const Hero = () => {
  return (
    <section className=" px-4 md:px-10 w-full" id="/">
      <div className="md:flex mt-[8rem]">
        <div className="mt-10">
          <h1 className="text-[2rem] md:text-[3rem] w-full lg:w-[35rem] text-primary font-[500]">
            SEAMLESS RELOCATION AWAITS!
          </h1>
          <p className="w-full lg:w-[35rem] text-text_color text-sm lg:text-[15px] mt-2">
            Your smooth move starts here! Unlock the best moving experience with
            our curated list of top-notch moving companies. Let's make your
            relocation stress-free and efficient!{" "}
          </p>
          <div className="mt-24 flex items-center bg-secondary text-white font-semibold py-3 px-6 rounded-lg cursor-pointer text-xs md:text-sm gap-2 w-fit">
          <Link to="/waitlist"
            className={``}
          >
            Join Waitlist
          </Link>
          <GoArrowUpRight size={23} />
          </div>
        </div>
        <div className="relative -ml-10 md:-ml-30 mt-10 md:mt-0">
          <img src="/images/bus.png" alt="bus" className="w-[1200px]" />
          <img src="/images/box.png" alt="box" className="absolute lg:top-[20rem] -right-[20px] w-[280px] imgClass classs" />
        </div>
      </div>
      {/* <div className="flex items-center mb-10 border w-[10%]">
        {goals.map((goal, index) => (
          <div key={index} className="flex items-center">
            <div className=" bg-primary p-2 rounded-full">
              <goal.icon className="text-white text-[1.5rem]" />
            </div>
            <p className="ml-4 text-text_color text-[16px] leading-5">
              {goal.title}
            </p>
          </div>
        ))}
      </div> */}

      {/* Mobile View */}
    </section>
  );
};

export default Hero;
