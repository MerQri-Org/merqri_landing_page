import React from "react";
import WhyCom from "../components/WhyCom";

const AboutUs = () => {
  return (
    <section className="flex flex-col md:flex-row px-10 justify-between py-16 items-center" id="about">
      <div className="flex flex-col gap-10">
        <div className="md:w-[60%]">
          <h1 className="font-bold text-primary text-xl">About Us</h1>
          <div className="bg-secondary w-[4rem] h-[0.4rem]" />
          <p className="text-[15px] mt-10">
            Welcome to MerQri, where we turn the challenges of moving into
            seamless transitions and unforgettable experiences. With a passion
            for efficiency and a commitment to excellence, we are your dedicated
            partners in making every move stress-free and enjoyable.
          </p>
        </div>

        <div>
          <h1 className="text-secondary font-semibold">Why Choose Us</h1>
          <div className="flex flex-col gap-5 md:gap-2">
            <div className="flex flex-col md:flex-row gap-5">
              <WhyCom
                bgColor="#E9EAEF"
                contentColor="#27285C"
                titleColor="#27285C"
                title="Professionalism"
                content="Our team comprises experienced and highly trained professionals who are dedicated to handling your 
            belongings with the utmost care and attention. We bring a level of professionalism that sets us apart in the moving industry."
              />
              <WhyCom
                bgColor="#FEF2E6"
                contentColor="#F2800A"
                titleColor="#F2800A"
                title="Tailored Solutions"
                content="We recognize that every move is unique. That's why we offer personalized solutions to meet your specific needs.
               Whether you're moving a household, an office, or a business, we tailor our services to ensure a customized and efficient moving plan."
              />
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <WhyCom
                bgColor="#E9E9E9"
                contentColor="#000"
                titleColor="#000"
                title="Reliability"
                content="With MerQri, you can trust that your belongings are in safe hands. We pride ourselves on our reliability and 
              commitment to delivering on time, every time. Your satisfaction is our priority."
              />
              <WhyCom
                bgColor="#E8F5F6"
                contentColor="#1F9CA4"
                titleColor="#1F9CA4"
                title="Transparent Pricing"
                content="No hidden fees, no surprises. We believe in transparent pricing, and we provide detailed quotes so you know exactly 
              what to expect. Our competitive rates ensure that you get value for your investment."
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
          <img src="/images/right.png" alt="" className="w-[1000px]"/>
          {/* <img src="/images/about2.png" alt="" className="sm:ml-[10rem] -mt-[10rem]" width={500} /> */}
      </div>
    </section>
  );
};

export default AboutUs;
