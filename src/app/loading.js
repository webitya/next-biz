export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-purple-500/30 rounded-full animate-spin border-t-purple-500 mx-auto mb-4"></div>
          <div className="w-16 h-16 border-4 border-cyan-500/30 rounded-full animate-spin border-t-cyan-500 absolute top-2 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Loading NextBiz.in</h2>
        <p className="text-gray-400">Preparing your experience...</p>
      </div>
    </div>
  )
}
