"use client"

import { AlertCircle, Home, RefreshCw, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function PaymentFailedPage() {
  const searchParams = useSearchParams()
  const reason = searchParams.get("reason")

  const getErrorMessage = (reason) => {
    switch (reason) {
      case "verification_failed":
        return "Payment verification failed. Please try again."
      case "callback_error":
        return "Payment processing error occurred."
      case "timeout":
        return "Payment request timed out. Please try again."
      default:
        return "Payment was not successful. No charges have been made to your account."
    }
  }

  const getErrorSolution = (reason) => {
    switch (reason) {
      case "verification_failed":
        return "This usually happens due to network issues. Please check your internet connection and try again."
      case "callback_error":
        return "There was a technical issue processing your payment. Our team has been notified."
      case "timeout":
        return "The payment request took too long to process. Please try again with a stable internet connection."
      default:
        return "Please check your payment details and try again. If the issue persists, contact our support team."
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Error Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-4">
            <AlertCircle className="text-red-500 w-12 h-12" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Payment Failed</h1>
          <p className="text-xl text-gray-600">We couldn t process your payment</p>
        </div>

        {/* Error Details Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border mb-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold text-red-800 mb-2">What happened?</h2>
            <p className="text-red-700 mb-4">{getErrorMessage(reason)}</p>
            <p className="text-red-600 text-sm">{getErrorSolution(reason)}</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">💡 Quick Tips</h3>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• Ensure you have sufficient balance in your account</li>
              <li>• Check if your card/UPI is enabled for online transactions</li>
              <li>• Try using a different payment method</li>
              <li>• Clear your browser cache and cookies</li>
              <li>• Use a stable internet connection</li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/complete-digital-marketing-course-7999"
              className="flex-1 inline-flex items-center justify-center bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              <RefreshCw className="mr-2 w-5 h-5" />
              Try Payment Again
            </Link>

            <Link
              href="/"
              className="flex-1 inline-flex items-center justify-center bg-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              <Home className="mr-2 w-5 h-5" />
              Back to Home
            </Link>
          </div>

          {/* Contact Support */}
          <div className="bg-white rounded-xl shadow-lg p-6 border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
              Need Help? Contact Our Support Team
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center bg-green-50 text-green-700 px-6 py-3 rounded-lg hover:bg-green-100 transition-colors border border-green-200"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call: +91 9876543210
              </a>

              <a
                href="mailto:support@nextbiz.in"
                className="flex items-center justify-center bg-blue-50 text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-100 transition-colors border border-blue-200"
              >
                <Mail className="mr-2 w-5 h-5" />
                Email: support@nextbiz.in
              </a>
            </div>

            <div className="mt-4 text-center text-sm text-gray-500">
              Our support team is available 24/7 to help you complete your enrollment
            </div>
          </div>

          {/* Course Info Reminder */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
              🎯 Don t Miss Out on This Limited Offer!
            </h3>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-4 mb-3">
                <span className="text-2xl font-bold text-indigo-600">₹7,999</span>
                <span className="text-lg text-gray-400 line-through">₹15,999</span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold">SAVE 50%</span>
              </div>
              <p className="text-gray-600 text-sm">
                Complete Digital Marketing Course • Lifetime Access • Job Placement Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
