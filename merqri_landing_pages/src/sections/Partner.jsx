import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const Partner = () => {
  return (
    <section className=" bg-primary" id="partners">
      <div className="px-10 flex flex-col md:flex-row items-center justify-between py-24">
        <div className="relative w-[60%]">
          <img src="/images/left.png" alt="" />
          {/* <div className="absolute top-[17rem] left-[15rem]">
            <img src="/images/partner2.png" alt="" />
          </div> */}
        </div>
        <div className="flex flex-col items-center">
          <div className="mt-10">
            <h1 className=" text-white md:text-[2rem] font-semibold text-center">
              EXPLORE LIMITLESS POSSIBILITIES WITH MERQRI: YOUR TRUSTED MOVING
              PARTNER
            </h1>
            <p className="text-white text-sm text-center mt-5">
              Are you a moving company seeking a reliable and strategic
              partnership? Look no further! Name invites you to join hands with
              us and unlock a world of opportunities in the moving industry.
            </p>
          </div>
          <div className="mt-20 flex gap-8">
            <div className=" w-[0.3rem] h-[4rem] bg-white" />
            <p className="text-white mt-10 -ml-7">Expertise</p>
            <div className=" w-[0.3rem] h-[4rem] bg-white" />
            <p className="text-white mt-5 md:mt-10 -ml-7">Expanded Services</p>
            <div className=" w-[0.3rem] h-[4rem] bg-white" />
            <p className="text-white mt-10 -ml-7">Reliability</p>
            <div className=" w-[0.3rem] h-[4rem] bg-white" />
            {/* <p className="text-white mt-5 md:mt-10 -ml-7">Transparent Collaboration</p> */}
          </div>


          <div className="mt-24 flex items-center bg-secondary text-white font-semibold py-3 px-6 rounded-lg cursor-pointer text-xs md:text-sm gap-2">
          <Link to="/waitlist"
            className={``}
          >
            Join Waitlist
          </Link>
          <GoArrowUpRight size={23} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
