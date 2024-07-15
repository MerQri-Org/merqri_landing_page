import Hero from "../sections/Hero";
import Services from "../sections/Services";
import AboutUs from "../sections/AboutUs";
import Partner from "../sections/Partner";
// import Testimonies from "../sections/Testimonies";
import Subscribe from "../sections/Subscribe";
import PictureSlide from "../sections/PictureSlide";

const Home = () => {
  return (
    <main>
      {/* <Hero /> */}
      <Hero />
      <Services />
      <PictureSlide />
      <AboutUs />
      <Partner />
      {/* Uncomment the following section when Testimonies component is ready */}
      {/* <Testimonies /> */}
      <Subscribe />
    </main>
  );
};

export default Home;
