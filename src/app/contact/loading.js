export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-r from-orange-400 to-orange-500"></div>
        <div className="absolute top-1/3 left-0 w-full h-1/3 bg-gradient-to-r from-white to-gray-100"></div>
        <div className="absolute top-2/3 left-0 w-full h-1/3 bg-gradient-to-r from-green-400 to-green-500"></div>
      </div>

      {/* Glassmorphism Container */}
      <div className="relative z-10 text-center">
        <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 p-12 max-w-md mx-auto">
          {/* Contact Loading Animation */}
          <div className="relative mb-8">
            <div className="relative w-24 h-24 mx-auto">
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-orange-500 border-r-white border-b-green-500 animate-spin"></div>
              <div
                className="absolute inset-2 rounded-full border-4 border-transparent border-t-orange-400 border-r-gray-100 border-b-green-400 animate-spin"
                style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
              ></div>

              {/* Contact Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
            Loading Contact
          </h2>
          <p className="text-gray-700/80 mb-6 font-medium">Connecting you to our team...</p>

          <div className="w-full bg-white/30 rounded-full h-2 mb-4 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-full animate-pulse"></div>
          </div>

          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-24 right-24 w-16 h-16 bg-orange-200/30 backdrop-blur-sm rounded-full animate-float"></div>
      <div
        className="absolute bottom-24 left-24 w-12 h-12 bg-green-200/30 backdrop-blur-sm rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
    </div>
  )
}
