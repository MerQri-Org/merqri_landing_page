import React from "react";
import Button from "../components/Button";

const Partner = () => {
  return (
    <section className=" bg-primary">
      <div className="mx-20  flex  justify-between py-24">
        <div className="relative">
          <img src="/images/partner1.png" alt="" />
          <div className="absolute top-[17rem] left-[15rem]">
            <img src="/images/partner2.png" alt="" />
          </div>
        </div>
        <div>
          <div className=" mt-10">
            <h1 className=" text-white text-[2rem] w-[42rem] font-semibold">
              EXPLORE LIMITLESS POSSIBILITIES WITH MERQRI: YOUR TRUSTED MOVING
              PARTNER
            </h1>
            <p className="text-white text-sm w-[42rem] text-center mt-5">
              Are you a moving company seeking a reliable and strategic
              partnership? Look no further! Name invites you to join hands with
              us and unlock a world of opportunities in the moving industry.
            </p>
          </div>
          <div className="mt-20 flex gap-8">
            <div className=" w-[0.3rem] h-[4rem] bg-white" />
            <p className="text-white mt-10 -ml-7">Expertise</p>
            <div className=" w-[0.3rem] h-[4rem] bg-white" />
            <p className="text-white mt-10 -ml-7">Expanded Services</p>
            <div className=" w-[0.3rem] h-[4rem] bg-white" />
            <p className="text-white mt-10 -ml-7">Reliability</p>
            <div className=" w-[0.3rem] h-[4rem] bg-white" />
            <p className="text-white mt-10 -ml-7">Transparent Collaboration</p>
          </div>


          <div className="mt-24  flex justify-center">
          <Button bgColor="#27285C" text="Partner with us" color="#ffff" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
