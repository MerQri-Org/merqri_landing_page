import React from "react";
import Button from "../components/Button";
import { goals } from "../constants";
const Hero = () => {
  return (
    <section className="mx-20">
      <div className="flex mt-[8rem] ">
        <div className=" mt-10">
          <h1 className="text-[3rem] w-[35rem] text-primary font-[500]">
            SEAMLESS RELOCATION AWAITS!
          </h1>
          <p className="w-[35rem] text-text_color text-sm mt-2">
            Your smooth move starts here! Unlock the best moving experience with
            our curated list of top-notch moving companies. Let's make  your
            relocation stress-free and efficient!{" "}
          </p>

          <div className="mt-14">
          <Button bgColor="#27285C" text="Order Now" color="#ffff" />
          </div>
        </div>
        <div className="relative -ml-20">
          <img src="/images/bus.png" alt="bus" className=" w-[1100px]" />
          <div className="absolute top-[18rem] right-[1rem]">
            <img src="/images/box.png" alt="box" className="" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-14 mb-10">
        {goals.map((goal, index) => (
          <div key={index} className="flex items-center">
            <div  className=" bg-primary p-2 rounded-full">
              <goal.icon className="text-white text-[1.5rem]" />
            </div>
            <p className="ml-4 text-text_color text-[16px] w-[100px] leading-5 ">{goal.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
