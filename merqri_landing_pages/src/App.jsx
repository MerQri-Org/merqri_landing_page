import {
  BrowserRouter as BroswerRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Toast, ToastProvider, ToastViewport } from "./components/ui/toast"
import Home from "./pages/Home";
import Partnership from "./pages/Partnership";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Waitlist from "./pages/Waitlist";
import Booking from "./pages/Booking"
import Support from "./pages/Support"
import FAQPage from "./pages/FAQs";
import ContactPage from "./pages/Contact";
import PartnerApplicationPage from "./pages/PartnerApplication"; 
// import usePageTracking from "./usePageTracking";

const App = () => {
  // usePageTracking();

  return (
    <div>
      <ToastProvider>
      <BroswerRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="waitlist" element={<Waitlist />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/support" element={<Support />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/partner-application' element={<PartnerApplicationPage />} />
        </Routes>
        <Footer />

        <Toast />
        <ToastViewport/>
      </BroswerRouter>
      </ToastProvider>
    </div>
  );
};

export default App;
