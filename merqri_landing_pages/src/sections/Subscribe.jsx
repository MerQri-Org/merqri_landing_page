import Button from "../components/Button";
import React from "react";

const Subscribe = () => {
  return (
    <section className="bg-[#D9D9D9]" id="contact">
      <div className="px-10 py-[10rem] flex flex-col md:flex-row gap-32">
        <div className="-mt-10 md:w-[100%]">
          <img src="/images/suscribe1.png" alt="" className="w-[400px]" />
            <img src="/images/suscribe2.png" alt="" className="w-[300px] -mt-40 " />
        </div>

        <div className="flex flex-col items-center">
         <div>
         <h1 className="text-[#21243D] text-2xl font-semibold">
            SUBSCRIBE FOR EXCLUSIVE MOVING INSIGHTS AND SPECIAL OFFER!
          </h1>
          <p className="text-[15px] mt-10 text-[#1E1E1E]">
            Join the MerQri community and stay one step ahead in the world of
            seamless relocations. Subscribe to our newsletter for a wealth of
            moving insights, expert tips, and exclusive offers designed just for
            you.
          </p>

          <div  className="flex flex-col md:flex-row gap-10 items-center mt-14">
            <input type="text" placeholder="Full name" className="text-primary  py-2 px-4 rounded-lg" />
            <input type="text" placeholder="Email"  className="text-primary py-2 px-4 rounded-lg" />
          </div>
         </div>

          <div className="mt-10">
            <Button bgColor="#27285C" text="Subscribe" color="#ffff" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
