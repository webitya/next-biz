"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { CheckCircle, BookOpen, Mail, Phone, Users, Home, Download } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const transactionId = searchParams.get("txn")
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!transactionId) {
      router.push("/complete-digital-marketing-course-7999")
      return
    }

    // Try to get user data from localStorage first
    const storedData = localStorage.getItem("enrollmentData")
    if (storedData) {
      try {
        const data = JSON.parse(storedData)
        if (data.transactionId === transactionId) {
          setUserData(data)
        }
      } catch (error) {
        console.error("Error parsing stored data:", error)
      }
    }

    setLoading(false)
  }, [transactionId, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
      </div>
    )
  }

  if (!transactionId) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
            <CheckCircle className="text-green-500 w-12 h-12" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">🎉 Payment Successful!</h1>
          <p className="text-xl text-gray-600">Welcome to the Complete Digital Marketing Course</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Payment Details Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Details</h2>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600">Course</span>
                <span className="font-semibold text-gray-900">Complete Digital Marketing</span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600">Amount Paid</span>
                <span className="font-bold text-green-600 text-xl">₹7,999</span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600">Transaction ID</span>
                <span className="font-mono text-sm text-gray-800 bg-gray-100 px-3 py-1 rounded">{transactionId}</span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600">Payment Date</span>
                <span className="font-semibold text-gray-900">{new Date().toLocaleDateString("en-IN")}</span>
              </div>

              <div className="flex justify-between items-center py-3">
                <span className="text-gray-600">Access</span>
                <span className="font-semibold text-indigo-600">Lifetime</span>
              </div>
            </div>

            {userData && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Enrolled Student</h3>
                <p className="text-gray-700">{userData.name}</p>
                <p className="text-gray-600 text-sm">{userData.email}</p>
              </div>
            )}
          </div>

          {/* Next Steps Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Next?</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <Mail className="text-indigo-600 w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Check Your Email</h3>
                  <p className="text-gray-600 text-sm">Confirmation and course details sent to your email</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Phone className="text-green-600 w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">We'll Contact You</h3>
                  <p className="text-gray-600 text-sm">Our team will call you within 2 hours for onboarding</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <BookOpen className="text-purple-600 w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Course Access</h3>
                  <p className="text-gray-600 text-sm">Full course access within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <Users className="text-orange-600 w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Join Community</h3>
                  <p className="text-gray-600 text-sm">Access to exclusive WhatsApp group</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">🎯 Course Highlights</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 150+ hours of premium content</li>
                <li>• Live sessions with industry experts</li>
                <li>• Real-world projects and case studies</li>
                <li>• Job placement assistance</li>
                <li>• Industry-recognized certificate</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              <Home className="mr-2 w-5 h-5" />
              Back to Home
            </Link>

            <button
              onClick={() => window.print()}
              className="inline-flex items-center justify-center bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Receipt
            </button>
          </div>

          <div className="text-sm text-gray-500 mt-6">
            Questions? Contact us at{" "}
            <a href="mailto:support@nextbiz.in" className="text-indigo-600 hover:underline">
              support@nextbiz.in
            </a>{" "}
            or call{" "}
            <a href="tel:+919876543210" className="text-indigo-600 hover:underline">
              +91 9876543210
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 border">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">🚀 Your Learning Journey Starts Now!</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Week 1-2</h3>
              <p className="text-gray-600 text-sm">Digital Marketing Fundamentals & Strategy</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Week 3-8</h3>
              <p className="text-gray-600 text-sm">Hands-on Training & Live Projects</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Week 9-12</h3>
              <p className="text-gray-600 text-sm">Certification & Job Placement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
