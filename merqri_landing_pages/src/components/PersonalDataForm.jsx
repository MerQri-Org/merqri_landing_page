import PropTypes from 'prop-types';
import { Button } from "../components/ui/button"

const InputField = ({ label, placeholder, type = "text" }) => (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-900 mb-2">{label}</label>
  <input
    type={type}
    placeholder={placeholder}
      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent"
    />
    </div>
  )
  
  InputField.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string,
  }

  export default function PersonalDataForm({ goToNextStep }) {
    const handleSubmit = (event) => {
        event.preventDefault()
        // Perform form validation and submission logic here
        goToNextStep()
      }
    return (
      <div className="max-w-xl mx-auto pt-16 px-8">
        <div className="flex justify-end mb-12">
          <div className="text-sm">
            Having issues?{" "}
            <a href="/support" className="text-[#FF7A00] font-medium">
              Get Help
            </a>
          </div>
        </div>
  
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-1">Personal Data</h1>
            <p className="text-gray-500">Setup Your Personal Details</p>
          </div>
  
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <InputField label="First name" placeholder="Enter first name" />
              <InputField label="Last name" placeholder="Enter last name" />
            </div>
  
            <InputField label="Email" placeholder="Enter email" type="email" />
  
            <InputField label="Phone Number" placeholder="Enter number" type="tel" />
  
            <Button
              type="submit"
              className="w-full bg-[#FF7A00] text-white py-3 rounded-lg mt-4 hover:bg-[#e66f00] transition-colors" 
            >
              Next
            </Button>
          </form>
        </div>
      </div>
    )
}

PersonalDataForm.propTypes = {
  goToNextStep: PropTypes.func.isRequired,
}