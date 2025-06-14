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
          {/* Indian Flag Inspired Loading Animation */}
          <div className="relative mb-8">
            {/* Spinning Ring with Indian Flag Colors */}
            <div className="relative w-24 h-24 mx-auto">
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-orange-500 border-r-white border-b-green-500 animate-spin"></div>
              <div
                className="absolute inset-2 rounded-full border-4 border-transparent border-t-orange-400 border-r-gray-100 border-b-green-400 animate-spin"
                style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
              ></div>
              <div
                className="absolute inset-4 rounded-full border-4 border-transparent border-t-orange-300 border-r-gray-200 border-b-green-300 animate-spin"
                style={{ animationDuration: "2s" }}
              ></div>

              {/* Center Chakra-inspired element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-4 h-4 border-2 border-white rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Floating Dots */}
            <div
              className="absolute -top-2 -left-2 w-3 h-3 bg-orange-400 rounded-full animate-bounce"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="absolute -top-2 -right-2 w-3 h-3 bg-green-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-bounce"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute -bottom-2 -right-2 w-3 h-3 bg-orange-300 rounded-full animate-bounce"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>

          {/* Loading Text */}
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
            Loading NextBiz.in
          </h2>
          <p className="text-gray-700/80 mb-6 font-medium">Preparing your digital marketing experience...</p>

          {/* Progress Bar */}
          <div className="w-full bg-white/30 rounded-full h-2 mb-4 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-full animate-pulse"></div>
          </div>

          {/* Loading Dots */}
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="mt-6 text-gray-600/80 text-sm font-medium">Ranchi s Premier Digital Marketing Agency</p>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-orange-200/30 backdrop-blur-sm rounded-full animate-float"></div>
      <div
        className="absolute top-40 right-32 w-12 h-12 bg-green-200/30 backdrop-blur-sm rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-32 left-32 w-20 h-20 bg-blue-200/30 backdrop-blur-sm rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-20 right-20 w-14 h-14 bg-orange-200/30 backdrop-blur-sm rounded-full animate-float"
        style={{ animationDelay: "0.5s" }}
      ></div>
    </div>
  )
}
