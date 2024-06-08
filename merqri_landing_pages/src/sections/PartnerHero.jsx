import React from "react";
import Button from "../components/Button";
import { goals } from "../constants";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const PartnerHero = () => {
  return (
    <section className="px-4 md:px-14 w-full bg-secondary" id="/">
      <div className="md:flex items-center gap-28 py-24">
        <div className="">
          <h1 className="text-[2rem] md:text-[3rem] w-full lg:w-[35rem] text-white font-[500]">
            <span className=" text-primary"> WELCOME TO MERQRI -</span> Elevate
            your moving Business with Us!
          </h1>
          <p className="w-full lg:w-[35rem] text-white text-sm lg:text-[15px] mt-2">
            At MERQRI, we believe in the power of strategic
            partnerships. If you're a moving company seeking growth, efficiency,
            and a competitive edge in the industry, you're in the right place.
            Explore the possibilities of becoming a valued vendor in our
            network.
          </p>
          <div className="mt-24 flex items-center bg-white text-secondary font-semibold py-3 px-6 rounded-lg cursor-pointer text-xs md:text-sm gap-2 w-fit">
            <Link to="/waitlist" className={``}>
              Join Waitlist
            </Link>
            <GoArrowUpRight size={23} />
          </div>
        </div>
        <div className="">
          <img src="/images/partner.png" alt="bus" className="w-[800px]" />
        </div>
      </div>
    </section>
  );
};

export default PartnerHero;
