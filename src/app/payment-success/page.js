"use client"

import { useSearchParams } from "next/navigation"
import { CheckCircle, Home, BookOpen, Mail } from "lucide-react"
import Link from "next/link"

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams()
  const transactionId = searchParams.get("txn")

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
        <div className="mb-6">
          <CheckCircle className="text-green-500 mx-auto mb-4 w-16 h-16" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
          <p className="text-gray-600">Thank you for enrolling in our Complete Digital Marketing Course</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="text-sm text-gray-500 mb-1">Transaction ID</div>
          <div className="font-mono text-sm text-gray-800">{transactionId}</div>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex items-center text-left">
            <Mail className="text-blue-500 mr-3" />
            <div>
              <div className="font-medium text-gray-900">Check Your Email</div>
              <div className="text-sm text-gray-600">Confirmation sent to your email</div>
            </div>
          </div>

          <div className="flex items-center text-left">
            <BookOpen className="text-blue-500 mr-3" />
            <div>
              <div className="font-medium text-gray-900">Course Access</div>
              <div className="text-sm text-gray-600">You will receive access within 24 hours</div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <Link
            href="/"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            <Home className="mr-2" />
            Back to Home
          </Link>

          <div className="text-sm text-gray-500">
            Questions? Contact us at{" "}
            <a href="mailto:info@nextbiz.in" className="text-blue-600 hover:underline">
              info@nextbiz.in
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
