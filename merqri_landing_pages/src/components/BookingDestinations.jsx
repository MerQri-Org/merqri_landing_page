import { useState, useEffect } from "react"

import PropTypes from 'prop-types';

const LocationInput = ({ label, placeholder, value, onChange, id }) => (
  <div className="mb-6">
    <label className="block text-sm font-medium text-gray-900 mb-2">{label}</label>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent"
    />
  </div>
)

LocationInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
}

const MoveTypeSelect = ({ value, onChange }) => (
  <div className="mb-6">
    <label className="block text-sm font-medium text-gray-900 mb-2">Move Type</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent">
      <option value="">Select move type</option>
      <option value="residential">Residential Move</option>
      <option value="commercial">Commercial Move</option>
      <option value="international">International Move</option>
    </select>
  </div>
)

MoveTypeSelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

const ServiceCard = ({ service }) => (
  <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#FF7A00] transition-colors">
    <div className="flex justify-between items-start mb-4">
      <>
        <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
        <p className="text-sm text-gray-500">{service.description}</p>
      </>
      <div className="text-xl font-bold text-[#FF7A00]">{service.currency}{service.price}</div>
    </div>
    <div className="flex gap-4 text-sm text-gray-500">
      <div>Rating: {service.rating}⭐</div>
      <div>•</div>
      <div>{service.reviewCount} reviews</div>
    </div>
  </div>
)

ServiceCard.propTypes = {
  service: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    reviewCount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired
  }).isRequired,
}

export default function BookingDestinationsForm({ goToNextStep }) {
  const [fromLocation, setFromLocation] = useState("")
  const [toLocation, setToLocation] = useState("")
  const [moveType, setMoveType] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [selectedService, setSelectedService] = useState(null)

  const handleServiceSelect = (service) => {
    setSelectedService(service)
    console.log("Selected Service:", service) // Debugging log
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!fromLocation || !toLocation || !moveType) return

    setIsSearching(true)

    // Simulated API call - replace with actual API endpoint
    try {
      // Simulated delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Simulated results
    const results = [
      {
        id: 1,
        name: "Premium Movers",
        description: "Professional moving service with insurance",
        price: 12990,
        rating: 4.8,
        reviewCount: 156,
        currency: "₦",
      },
      {
        id: 2,
        name: "Quick Transport",
        description: "Fast and efficient moving solution",
        price: 899,
        rating: 4.5,
        reviewCount: 98,
        currency: "₦",
      },
      {
        id: 3,
        name: "Safe Relocation",
        description: "Secure and careful moving service",
        price: 10990,
        rating: 4.7,
        reviewCount: 123,
        currency: "₦",
      },
    ]

      setSearchResults(results)
    } catch (error) {
      console.error("Error searching for services:", error)
    } finally {
      setIsSearching(false);
    }
}


useEffect(() => {
    const loadGoogleMapsScript = () => {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAX3OGKVoMrsVQBNMoWABoKCkATHyOA7WQ&libraries=places`;
        script.async = true;
        script.onload = () => initializeAutocomplete();
        document.body.appendChild(script);
    };

    const initializeAutocomplete = () => {
        const fromInput = document.getElementById("from-location");
        const toInput = document.getElementById("to-location");

        new window.google.maps.places.Autocomplete(fromInput);
        new window.google.maps.places.Autocomplete(toInput);
    };

    loadGoogleMapsScript();
}, []);

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
                <h1 className="text-2xl font-semibold text-gray-900 mb-1">Booking Destinations</h1>
                <p className="text-gray-500">Select Your Move Location</p>
            </div>
            <form onSubmit={handleSearch}>
            
                <LocationInput
                    label="From Location"
                    placeholder="Enter current location"
                    value={fromLocation}
                    onChange={setFromLocation}
                    id="from-location"
                />

                <LocationInput
                    label="To Location"
                    placeholder="Enter destination"
                    value={toLocation}
                    onChange={setToLocation}
                    id="to-location"
                />

                <MoveTypeSelect value={moveType} onChange={setMoveType} />

                <button
                    type="submit"
                    disabled={!fromLocation || !toLocation || !moveType || isSearching}
                    className="w-full bg-[#FF7A00] text-white py-3 rounded-lg mb-6 hover:bg-[#e66f00] transition-colors disabled:opacity-50"
                >
                    {isSearching ? "Searching..." : "Search Available Services"}
                </button>
            </form>

            {searchResults.length > 0 && (
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Available Services</h2>
                    {searchResults.map((service) => (
                        <div key={service.id} onClick={() => handleServiceSelect(service)}>
                            <ServiceCard service={service} />
                        </div>
                    ))}
                </div>
            )}

            {selectedService && (
                <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900">Selected Service</h3>
                    <ServiceCard service={selectedService} />
                </div>
            )}

            <div className="flex justify-between mt-8">
                <button onClick={() => window.history.back()} className="px-6 py-2 text-gray-600 hover:text-gray-900">
                    Previous
                </button>
                <button
                    onClick={goToNextStep}
                    disabled={!selectedService}
                    className="px-6 py-2 bg-[#FF7A00] text-white rounded-lg hover:bg-[#e66f00] transition-colors"
                >
                    Next
                </button>
            </div>
        </div>
    </div>
);
}


BookingDestinationsForm.propTypes = {
  goToNextStep: PropTypes.func.isRequired,
}