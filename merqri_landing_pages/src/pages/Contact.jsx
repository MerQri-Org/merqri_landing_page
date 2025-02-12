import ContactForm from "../components/ContactForm"
import { ToastContextProvider } from "../components/ui/toast-context"
export default function ContactPage() {
    return (
      <div className="min-h-screen bg-gray-50">
        <ToastContextProvider>
          <ContactForm />
        </ToastContextProvider>
      </div>
    )
}