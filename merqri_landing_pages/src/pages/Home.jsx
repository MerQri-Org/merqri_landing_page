import React from "react";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import AboutUs from "../sections/AboutUs";
import Partner from "../sections/Partner";
//import Testimonies from "../sections/Testimonies";
import Subscribe from "../sections/Subscribe";

const Home = () => {
  return (
    <section>
      <section>
        <Hero />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <AboutUs />
      </section>
      <section>
        <Partner />
      </section>
      {/* <section>
        <Testimonies />
      </section> */}
      <section>
        <Subscribe />
      </section>
    </section>
  );
};

export default Home;
