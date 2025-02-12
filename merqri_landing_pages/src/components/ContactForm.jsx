import { useState } from "react"
import useToast  from "../components/ui/use-toast"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Button } from "../components/ui/button"
import { Loader2, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { sendContactMessage } from "../apis/contact"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(event) {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(event.target)
      const response = await sendContactMessage(formData)

      if (response.success) {
        toast({
          title: "Message Sent",
          description: "We'll get back to you as soon as possible.",
        })
        event.target.reset()
      } else {
        throw new Error(response.message || "Something went wrong")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-6xl mx-auto pt-16 px-8">
      <div className="flex justify-between items-center mb-12">
        {/* <img
          src="/images/logo.png"
          alt="MerQri Logo"
          className="h-8"
        /> */}
        <div className="text-sm">
          Need immediate help?{" "}
          <a href="tel:+1234567890" className="text-[#FF7A00] font-medium">
            Call Us
          </a>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">Contact Us</h1>
          <p className="text-gray-500">
            We&apos;d love to hear from you. Please fill out this form or use our contact information below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input type="text" name="name" placeholder="Your Name" required />
            <Input type="email" name="email" placeholder="Your Email" required />
            <Input type="tel" name="phone" placeholder="Your Phone Number" />
            <Textarea name="message" placeholder="Your Message" required rows={5} />
            <Button type="submit" disabled={isSubmitting} className="w-full bg-[#FF7A00] hover:bg-[#e66f00]">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>

          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-[#FF7A00] mr-3" />
                  <span>+1 (234) 567-8900</span>
                </div>
                <div className="flex items-center">
                  <Mail href="info@merqri.com.ng" className="h-5 w-5 text-[#FF7A00] mr-3" />
                  <span>info@merqri.com.ng</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-[#FF7A00] mr-3 mt-1" />
                  <span>
                    123 Moving Street, Suite 456
                    <br />
                    Relocation City, ST 78901
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-[#FF7A00]">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="https://x.com/movewithmerqri?s=21&t=1pq2fkM-m4QczdukiWBAyg" className="text-gray-600 hover:text-[#FF7A00]">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com/movewithqri?igsh=cjByYWxpZ3MyOXZw&utm_source=qr" className="text-gray-600 hover:text-[#FF7A00]">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/company/merqri/" className="text-gray-600 hover:text-[#FF7A00]">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4">Business Hours</h2>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}