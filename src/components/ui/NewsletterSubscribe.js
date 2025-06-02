"use client"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { Email, CheckCircle, Error, Send, TrendingUp, Insights, Business } from "@mui/icons-material"

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // EmailJS configuration for newsletter
      const serviceId = "YOUR_SERVICE_ID" // Replace with your EmailJS service ID
      const templateId = "YOUR_NEWSLETTER_TEMPLATE_ID" // Replace with your newsletter template ID
      const publicKey = "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key

      const templateParams = {
        subscriber_email: email,
        to_name: "NextBiz Newsletter Team",
        from_name: "NextBiz Website",
        message: `New newsletter subscription from: ${email}`,
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      setSubmitStatus("success")
      setEmail("")
    } catch (error) {
      console.error("EmailJS error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Weekly Marketing Tips",
      description: "Get actionable digital marketing strategies delivered to your inbox",
    },
    {
      icon: <Insights className="w-6 h-6" />,
      title: "Industry Insights",
      description: "Stay ahead with the latest trends in digital marketing for Jharkhand businesses",
    },
    {
      icon: <Business className="w-6 h-6" />,
      title: "Local Market Updates",
      description: "Exclusive insights about the Ranchi and Jharkhand business landscape",
    },
  ]

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-2xl overflow-hidden">
      <div className="relative p-12">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center"></div>
        </div>

        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
              📧 Newsletter
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Stay Updated with Ranchi s Digital Marketing Trends
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Subscribe to our newsletter and never miss the latest insights and updates specifically for businesses in
              Jharkhand. Join 500+ local business owners who trust our expertise.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-blue-100 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
              <div className="text-center">
                <p className="text-green-100 font-medium">Successfully subscribed!</p>
                <p className="text-green-200 text-sm">Welcome to the NextBiz community.</p>
              </div>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-lg flex items-center justify-center">
              <Error className="w-5 h-5 text-red-300 mr-3" />
              <div className="text-center">
                <p className="text-red-100 font-medium">Subscription failed</p>
                <p className="text-red-200 text-sm">Please try again or contact us directly.</p>
              </div>
            </div>
          )}

          {/* Subscription Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Email className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-10 pr-4 py-4 bg-white/90 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-all text-gray-800 placeholder-gray-500"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed min-w-[140px]"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    <span>Subscribing...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Subscribe</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-blue-100 text-sm text-center mt-4">
              No spam, unsubscribe at any time. Read our{" "}
              <a href="/privacy-policy" className="text-white hover:underline">
                Privacy Policy
              </a>
            </p>
          </form>

          {/* Social Proof */}
          <div className="text-center mt-8">
            <div className="flex items-center justify-center space-x-6 text-blue-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm">Subscribers</div>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Weekly</div>
                <div className="text-sm">Updates</div>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm">Free</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
