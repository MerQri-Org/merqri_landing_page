import React from "react";
import { services } from "../constants";
import ServiceBox from "../components/ServiceBox";

const Services = () => {
  return (
    <section className="bg-secondary mt-16">
      <div className="py-20">
        <div className="">
          <h1 className="text-white  font-semibold text-center text-[20px] mb-8">OUR SERVICES</h1>
        </div>
        <div className="flex justify-center gap-[10rem]">
          <ServiceBox
            title="Affordable House Removals"
            imgUrl="/images/service1.png"
            content="We offer a complete range of moving services, ensuring a seamless ‘door-to-door’ relocation experience for individuals."
          />
          <ServiceBox
            title="Office & Business Removals"
            imgUrl="/images/service2.png"
            content="We provide professional assistance in moving offices and institutions regardless of their business profile"
          />
          <ServiceBox
            title="We offer transportation services across the cities"
            imgUrl="/images/service3.png"
            content="We provide professional assistance in moving offices and institutions regardless of"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
