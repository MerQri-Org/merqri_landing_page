import {
  BrowserRouter as BroswerRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Partnership from "./pages/Partnership";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Waitlist from "./pages/Waitlist";
import Booking from "./pages/Booking"
// import usePageTracking from "./usePageTracking";

const App = () => {
  // usePageTracking();

  return (
    <div>
      <BroswerRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="waitlist" element={<Waitlist />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
        <Footer />
      </BroswerRouter>
    </div>
  );
};

export default App;
