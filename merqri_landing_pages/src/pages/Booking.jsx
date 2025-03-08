import { useState } from "react";
import Sidebar from "../components/Sidebar";
import PersonalDataForm from "../components/PersonalDataForm";
import BookingDestinationsForm from "../components/BookingDestinations";
import PaymentForm from "../components/PaymentForm";
import ConfirmationPage from "../components/ConfirmationPage";

export default function Booking() {
  const [currentStep, setCurrentStep] = useState(1);

  const goToNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  // Steps data
  const steps = ["Personal Info", "Destinations", "Payment", "Confirmation"];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar: Only visible on desktops */}
      <div className="hidden md:flex">
        <Sidebar currentStep={currentStep} />
      </div>

      {/* Main Content */}
      <main className="w-full md:flex-1 px-4 py-6 mt-14 md:p-10">
        {/* Progress Indicator (Only on Mobile) */}
        <div className="md:hidden flex justify-between items-center mb-6">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center w-full">
              {/* Step Number */}
              <div
                className={`w-8 h-8 flex items-center justify-center text-white font-bold rounded-full transition ${
                  currentStep > index + 1
                    ? "bg-green-500"
                    : currentStep === index + 1
                    ? "bg-[#FF7A00]"
                    : "bg-gray-300"
                }`}
              >
                {index + 1}
              </div>

              {/* Step Label */}
              <span
                className={`text-xs mt-2 ${
                  currentStep === index + 1 ? "text-[#FF7A00] font-semibold" : "text-gray-500"
                }`}
              >
                {step}
              </span>

              {/* Connector Line (Hidden for Last Step) */}
              {index !== steps.length - 1 && (
                <div
                  className={`h-1 w-full ${
                    currentStep > index + 1 ? "bg-green-500" : "bg-gray-300"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>

        {/* Forms Based on Step */}
        {currentStep === 1 && <PersonalDataForm goToNextStep={goToNextStep} />}
        {currentStep === 2 && <BookingDestinationsForm goToNextStep={goToNextStep} />}
        {currentStep === 3 && <PaymentForm goToNextStep={goToNextStep} />}
        {currentStep === 4 && <ConfirmationPage />}

        {/* Next Step Button - Centered on mobile */}
        {/* {currentStep < 4 && (
          <div className="flex justify-center mt-6">
            <button
              onClick={goToNextStep}
              className="bg-[#FF7A00] text-white px-6 py-2 rounded-lg hover:bg-[#e66f00] transition"
            >
              Next Step
            </button>
          </div>
        )} */}
      </main>
    </div>
  );
}
