"use client"

import { useState } from "react"
import {
  CheckCircle,
  Star,
  Users,
  Clock,
  Award,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  User,
  CreditCard,
  Shield,
} from "lucide-react"

export default function DigitalMarketingCoursePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showPayment, setShowPayment] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      alert("Please fill all required fields")
      return
    }

    setIsLoading(true)

    try {
      // Store user data and initiate payment
      const response = await fetch("/api/initiate-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          amount: 7999,
          courseName: "Complete Digital Marketing Course",
        }),
      })

      const data = await response.json()

      if (data.success) {
        // Redirect to PhonePe payment
        window.location.href = data.paymentUrl
      } else {
        alert("Payment initiation failed. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const courseFeatures = [
    "Complete SEO Mastery",
    "Google Ads & Facebook Ads",
    "Social Media Marketing",
    "Content Marketing Strategy",
    "Email Marketing Automation",
    "Analytics & Reporting",
    "Affiliate Marketing",
    "Influencer Marketing",
    "E-commerce Marketing",
    "Lead Generation Techniques",
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Digital Marketing Manager",
      content: "This course transformed my career. I got promoted within 3 months!",
      rating: 5,
    },
    {
      name: "Rahul Kumar",
      role: "Freelance Marketer",
      content: "Best investment I made. Now earning 6 figures as a freelancer.",
      rating: 5,
    },
    {
      name: "Sneha Patel",
      role: "Business Owner",
      content: "Increased my business revenue by 300% using these strategies.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-indigo-600">NextBiz.in</div>
            <div className="flex items-center space-x-4">
              <Phone className="text-indigo-600" />
              <span className="text-gray-700">+91 9876543210</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="mr-2" />
                Limited Time Offer - 50% OFF
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Master <span className="text-indigo-600">Digital Marketing</span> in 90 Days
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Transform your career with our comprehensive digital marketing course. Learn from industry experts and
                get job-ready skills.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                  <Users className="text-indigo-600 mr-2" />
                  <span className="text-gray-700">10,000+ Students</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                  <Clock className="text-indigo-600 mr-2" />
                  <span className="text-gray-700">100+ Hours Content</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                  <Award className="text-indigo-600 mr-2" />
                  <span className="text-gray-700">Industry Certified</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-8">
                <div className="text-4xl font-bold text-indigo-600">₹7,999</div>
                <div className="text-2xl text-gray-400 line-through">₹15,999</div>
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">50% OFF</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Enroll Now & Start Learning</h2>
                <p className="text-gray-600">Fill the form below to get instant access</p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="inline mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="inline mr-2" />
                    Address *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter your complete address"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-indigo-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <CreditCard className="mr-2" />
                      Pay ₹7,999 & Start Learning
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center text-sm text-gray-500">
                  <Shield className="mr-2" />
                  Secure payment powered by PhonePe
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What You will Learn</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master all aspects of digital marketing with our comprehensive curriculum
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseFeatures.map((feature, index) => (
              <div key={index} className="flex items-center p-6 bg-gray-50 rounded-lg">
                <CheckCircle className="text-green-500 mr-4 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">See how our students transformed their careers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">{testimonial.content}</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Do not Miss This Limited Time Offer!</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of successful digital marketers. Enroll now and get 50% off!
          </p>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="text-4xl font-bold text-white">₹7,999</div>
            <div className="text-2xl text-indigo-200 line-through">₹15,999</div>
          </div>
          <a
            href="#enrollment-form"
            className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            <TrendingUp className="mr-2" />
            Enroll Now & Save 50%
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">NextBiz.in</div>
              <p className="text-gray-400">Empowering careers through quality digital marketing education.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="mr-2" />
                  +91 9876543210
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2" />
                  info@nextbiz.in
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2 text-gray-400">
                <div>Privacy Policy</div>
                <div>Terms of Service</div>
                <div>Refund Policy</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 NextBiz.in. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
