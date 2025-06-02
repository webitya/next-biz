"use client"
import { useEffect } from "react"
import { Refresh, Home } from "@mui/icons-material"

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-red-400 text-4xl">⚠</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Something went wrong!</h1>
          <p className="text-gray-400 mb-8">
            We encountered an unexpected error. Our team has been notified and is working to fix this issue.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={reset}
            className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Refresh className="w-5 h-5" />
            <span>Try Again</span>
          </button>

          <a href="/" className="w-full border border-purple-500 text-purple-400 py-3 px-6 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </a>
        </div>

        <div className="mt-12 glass-effect p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Still having issues?</h3>
          <p className="text-gray-300 text-sm mb-4">Contact our support team for immediate assistance.</p>
          <div className="space-y-2 text-sm">
            <a href="tel:+919693245941" className="block text-purple-400 hover:text-purple-300 transition-colors">
              📞 +91 9693245941
            </a>
            <a
              href="mailto:contact@nextbiz.in"
              className="block text-purple-400 hover:text-purple-300 transition-colors"
            >
              📧 contact@nextbiz.in
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
