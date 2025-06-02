"use client"

import Link from "next/link"
import { Home, ArrowBack } from "@mui/icons-material"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold gradient-text">404</h1>
          <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
          <p className="text-gray-400 mb-8">
            Sorry, we could not find the page you are looking for. It might have been moved, deleted, or you entered the
            wrong URL.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full border border-purple-500 text-purple-400 py-3 px-6 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <ArrowBack className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </div>

        <div className="mt-12 glass-effect p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Need Help?</h3>
          <p className="text-gray-300 text-sm mb-4">
            If you believe this is an error, please contact our support team.
          </p>
          <Link href="/contact" className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors">
            Contact Support →
          </Link>
        </div>
      </div>
    </div>
  )
}
