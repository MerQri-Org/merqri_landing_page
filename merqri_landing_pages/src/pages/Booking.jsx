import { useState } from "react"
import Sidebar from "../components/Sidebar"
import PersonalDataForm from "../components/PersonalDataForm"
import BookingDestinationsForm from "../components/BookingDestinations"
import PaymentForm from "../components/PaymentForm"
import ConfirmationPage from "../components/ConfirmationPage"

export default function Booking() {
  const [currentStep, setCurrentStep] = useState(1)

  const goToNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1)
  }

return (
    <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1">
            {currentStep < 4 && <button onClick={goToNextStep}>Next Step</button>}
            {currentStep === 1 && <PersonalDataForm goToNextStep={goToNextStep} />}
            {currentStep === 2 && <BookingDestinationsForm goToNextStep={goToNextStep} />}
            {currentStep === 3 && <PaymentForm goToNextStep={goToNextStep} />}
            {currentStep === 4 && <ConfirmationPage />}
        </main>
    </div>
)
}

