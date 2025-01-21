import PropTypes from 'prop-types';

const Step = ({ number, title, subtitle, active, completed }) => (
    <div className="flex items-start gap-3 mb-8">
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center text-sm
        ${completed ? "bg-green-500 text-white" : active ? "bg-[#FF7A00] text-white" : "bg-gray-100 text-gray-400"}`}
      >
        {completed ? "✓" : number}
      </div>
      <div>
        <h3
          className={`text-sm font-medium ${completed ? "text-green-500" : active ? "text-[#FF7A00]" : "text-gray-400"}`}
        >
          {title}
        </h3>
        <p className="text-xs text-gray-400">{subtitle}</p>
      </div>
      </div>
    );
  
  Step.propTypes = {
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    active: PropTypes.bool,
    completed: PropTypes.bool,
  };
  
  
  export default function Sidebar() {
    return (
      <div className="w-72 min-h-screen bg-white p-8 border-r border-gray-100">
        <div className="mb-16">
          <img
            src="/images/logo.png"
            alt="MerQri Logo"
            className="h-8"
          />
        </div>
  
        <div className="mb-16">
          <Step number={1} title="Personal Data" subtitle="Setup Your Personal Details" completed={false} />
          <Step number={2} title="Booking Destinations" subtitle="Select Your Travel Location" completed={false} />
          <Step number={3} title="Make Payment" subtitle="Use Debit or Credit Card" completed={false} />
          <Step number={4} title="Completed" subtitle="Booking and Payment" active={false} />
        </div>
  
        <div className="mt-auto">
          <img
            src="/images/illustration-1.png"
            alt="Illustration"
            className="w-full"
          />
        </div>
      </div>
    )
}