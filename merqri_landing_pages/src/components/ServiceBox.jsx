import React from "react";
import Button from "./Button";

const ServiceBox = ({ title, imgUrl, content }) => {
  return (
    <div className=" flex flex-col items-center gap-5">
      <img src={imgUrl} alt="image" />
      <p className="text-white text-center text-lg">{title}</p>
      <p className="w-[25rem] text-[#BEBECE] text-center text-[16px]">{content}</p>
      <Button bgColor="#ffff" text="Find Out More" color="#27285C" />
    </div>
  );
};

export default ServiceBox;
