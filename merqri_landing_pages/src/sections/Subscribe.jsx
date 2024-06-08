import { SlArrowRightCircle } from "react-icons/sl";
import Button from "../components/Button";
import { handleJoinWaitList } from "../apis/JoinWaitlist";
import React, { useState } from "react";

const Subscribe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <section className="bg-[#D9D9D9]" id="contact">
      <div className="px-5 md:px-20 py-[10rem] flex flex-col md:flex-row gap-10 md:gap-0">
        <div className="md:w-[45%]">
          <img src="/images/left2.png" alt="" className="w-[500px]" />
        </div>

        <div className="md:w-[60%] flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="text-[3rem] text-primary font-[600]">
              Moving Made Easy: <br /> We'll Be There Soon!
            </h1>
            <p className="text-sm md:w-[80%]">
              Get ready for a smooth move with Merqri! Our app is coming soon,
              packed with information and resources to make your move a breeze.
            </p>
            <p className="text-sm md:w-[70%]">
              In the meantime, sign up below to be notified when our app goes
              live and receive exclusive offers!
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5 w-[100%]">
              <label htmlFor="" className="text-secondary text-[1.6rem]">
                Your Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="border-b-4 border-secondary focus:outline-none text-xl bg-[#D9D9D9]"
              />
            </div>
            <div className="flex flex-col gap-5 w-[100%]">
              <div className="flex justify-between">
                <label htmlFor="" className="text-secondary text-[1.6rem]">
                  Your Email
                </label>
                <button 
                onClick={(event) => handleJoinWaitList(name, email, setMessage, event)}
                className="text-secondary font-semibold py-2 px-4 rounded-lg cursor-pointer text-xs md:text-sm">
                  <SlArrowRightCircle size={40} />
                </button>
              </div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="border-b-4 border-secondary focus:outline-none text-xl bg-[#D9D9D9]"
              />
            </div>
            {message && <div className="text-center text-[1.5rem] mt-10 text-primary font-semibold">{message}</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
