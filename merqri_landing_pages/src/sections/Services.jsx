import React from "react";
import { services } from "../constants";
import ServiceBox from "../components/ServiceBox";
import Button from "../components/Button";
// import Button from ";

const Services = () => {
  return (
    <section className="bg-secondary mt-16 px-10" id="services">
      <div className="py-20">
        <div className="">
          <h1 className="text-white font-semibold text-center text-[20px] mb-8">
            OUR SERVICES
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-[5rem] md:gap-[10rem] servicesBox">
          <div className="flex flex-col items-center">
            <ServiceBox
              title="Affordable House Removals"
              imgUrl="/images/left1.png"
              content="We offer a complete range of moving services, ensuring a seamless ‘door-to-door’ relocation experience for individuals."
            />
            {/* <Button bgColor="#ffff" text="Find Out More" color="#27285C" /> */}
          </div>
          <div className="flex flex-col items-center">
            <ServiceBox
              title="Office & Business Removals"
              imgUrl="/images/service2.png"
              content="We provide professional assistance in moving offices and institutions regardless of their business profile"
            />
            {/* <Button bgColor="#ffff" text="Find Out More" color="#27285C" /> */}
          </div>
          <div className="flex flex-col items-center">
            <ServiceBox
              title="Offers transportation services across the cities"
              imgUrl="/images/service3.png"
              content="We provide professional assistance in moving offices and institutions, regardless of their business profile jlk."
            />
            {/* <Button bgColor="#ffff" text="Find Out More" color="#27285C" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
