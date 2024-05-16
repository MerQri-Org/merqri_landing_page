import Button from "../components/Button";
import React from "react";

const Subscribe = () => {
  return (
    <section className="bg-[#D9D9D9]">
      <div className="mx-20 py-[10rem] flex  justify-between">
        <div className="relative -mt-10">
          <img src="/images/suscribe1.png" alt="" width={450} />
          <div className="absolute top-[16rem] -right-[6rem]">
            <img src="/images/suscribe2.png" alt="" width={330} />
          </div>
        </div>

        <div className="mr-[10rem]">
          <h1 className="text-[#21243D] text-2xl w-[30rem]  font-semibold">
            SUBSCRIBE FOR EXCLUSIVE MOVING INSIGHTS AND SPECIAL OFFER!
          </h1>
          <p className="w-[30rem] text-[15px] mt-10 text-[#1E1E1E]">
            Join the MerQri community and stay one step ahead in the world of
            seamless relocations. Subscribe to our newsletter for a wealth of
            moving insights, expert tips, and exclusive offers designed just for
            you.
          </p>

          <div  className="flex gap-10 items-center mt-14">
            <input type="text" placeholder="Full name" className="text-primary  p-2 rounded-lg w-[15rem]" />
            <input type="text" placeholder="Email"  className="text-primary p-2 rounded-lg w-[15rem]" />
          </div>

          <div className=" mt-10">
            <Button bgColor="#27285C" text="Subscribe" color="#ffff" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
