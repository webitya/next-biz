"use client"

import { BugIcon as Error, Home, RefreshCwIcon as Refresh } from "lucide-react"
import Link from "next/link"

export default function PaymentFailedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
        <div className="mb-6">
          <Error className="text-red-500 mx-auto mb-4 w-16 h-16" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Failed</h1>
          <p className="text-gray-600">We could not process your payment. Please try again.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-800 text-sm">
            Your payment was not successful. No charges have been made to your account.
          </p>
        </div>

        <div className="space-y-3">
          <Link
            href="/complete-digital-marketing-course-7999"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            <Refresh className="mr-2" />
            Try Again
          </Link>

          <Link
            href="/"
            className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center"
          >
            <Home className="mr-2" />
            Back to Home
          </Link>

          <div className="text-sm text-gray-500">
            Need help? Contact us at{" "}
            <a href="mailto:info@nextbiz.in" className="text-blue-600 hover:underline">
              info@nextbiz.in
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
