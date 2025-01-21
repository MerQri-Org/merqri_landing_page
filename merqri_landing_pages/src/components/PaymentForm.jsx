import { useState } from "react"
import { usePaystackPayment } from "react-paystack"
import PropTypes from 'prop-types';

const PaymentCard = ({ isSelected, onClick, cardType, lastDigits }) => (
  <div
    onClick={onClick}
    className={`p-4 border rounded-lg cursor-pointer transition-all ${
      isSelected ? "border-[#FF7A00] bg-orange-50" : "border-gray-200 hover:border-[#FF7A00]"
    }`}
  >
    <div className="flex items-center gap-3">
      <div
        className={`w-4 h-4 rounded-full border-2 ${isSelected ? "border-[#FF7A00] bg-[#FF7A00]" : "border-gray-300"}`}
      />
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">{cardType}</span>
        <span className="text-sm text-gray-500">****{lastDigits}</span>
      </div>
    </div>
</div>
)

PaymentCard.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  cardType: PropTypes.string.isRequired,
  lastDigits: PropTypes.string.isRequired,
}






const InputField = ({ label, placeholder, type = "text", value, onChange, error }) => (
  <div className="mb-6">
    <label className="block text-sm font-medium text-gray-900 mb-2">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full px-4 py-3 rounded-lg border ${
        error ? "border-red-500" : "border-gray-200"
      } focus:outline-none focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent`}
    />
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
  </div>
)

InputField.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    
}

export default function PaymentForm({ goToNextStep }) {
PaymentForm.propTypes = {
  goToNextStep: PropTypes.func.isRequired,
}
  const [paymentMethod, setPaymentMethod] = useState("new")
  const [cardNumber, setCardNumber] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [cvv, setCvv] = useState("")
  const [cardName, setCardName] = useState("")
  const [errors, setErrors] = useState({})

  const config = {
    reference: new Date().getTime().toString(),
    email: "user@example.com", // This should come from your app state
    amount: 2000000, // Amount should be in kobo (₦20,000)
    publicKey: "pk_test_98e4251c89cc17047f658a65a0e6d6300f3ebb49", // Replace with your Paystack public key
  }

  const onSuccess = (reference) => {
    console.log("Payment successful!", reference)
    goToNextStep()
    // Handle successful payment
  }

  const onClose = () => {
    console.log("Payment closed")
    // Handle payment modal close
  }

  const initializePayment = usePaystackPayment(config)

  const handleSubmit = (e) => {
    e.preventDefault()

    // Basic validation
    const newErrors = {}
    if (!cardNumber) newErrors.cardNumber = "Card number is required"
    if (!expiryDate) newErrors.expiryDate = "Expiry date is required"
    if (!cvv) newErrors.cvv = "CVV is required"
    if (!cardName) newErrors.cardName = "Cardholder name is required"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Initialize Paystack payment
    initializePayment(onSuccess, onClose)
  }

  return (
    <div className="max-w-xl mx-auto pt-16 px-8">
      <div className="flex justify-end mb-12">
        <div className="text-sm">
          Having issues?{" "}
          <a href="#" className="text-[#FF7A00] font-medium">
            Get Help
          </a>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">Make Payment</h1>
          <p className="text-gray-500">Use Debit or Credit Card</p>
        </div>

        <div className="mb-8 space-y-3">
          <PaymentCard
            isSelected={paymentMethod === "saved"}
            onClick={() => setPaymentMethod("saved")}
            cardType="Visa"
            lastDigits="4242"
          />
          <PaymentCard
            isSelected={paymentMethod === "new"}
            onClick={() => setPaymentMethod("new")}
            cardType="Add new card"
            lastDigits=""
          />
        </div>

        {paymentMethod === "new" && (
          <form onSubmit={handleSubmit}>
            <InputField
              label="Card Number"
              placeholder="0000 0000 0000 0000"
              value={cardNumber}
              onChange={setCardNumber}
              error={errors.cardNumber}
            />

            <div className="grid grid-cols-2 gap-4">
              <InputField
                label="Expiry Date"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={setExpiryDate}
                error={errors.expiryDate}
              />
              <InputField
                label="CVV"
                placeholder="123"
                type="password"
                value={cvv}
                onChange={setCvv}
                error={errors.cvv}
              />
            </div>

            <InputField
              label="Cardholder Name"
              placeholder="Enter cardholder name"
              value={cardName}
              onChange={setCardName}
              error={errors.cardName}
            />

            <div className="mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-[#FF7A00] focus:ring-[#FF7A00]" />
                <span className="ml-2 text-sm text-gray-600">Save card for future payments</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF7A00] text-white py-3 rounded-lg mb-6 hover:bg-[#e66f00] transition-colors"
            >
              Pay ₦20,000
            </button>
          </form>
        )}

        <div className="flex justify-between mt-8">
          <button onClick={() => window.history.back()} className="px-6 py-2 text-gray-600 hover:text-gray-900">
            Previous
          </button>
          {paymentMethod === "saved" && (
            <button
              onClick={() => initializePayment(onSuccess, onClose)}
              className="px-6 py-2 bg-[#FF7A00] text-white rounded-lg hover:bg-[#e66f00] transition-colors"
            >
              Pay Now
            </button>
          )}
        </div>
      </div>
    </div>
  )
}