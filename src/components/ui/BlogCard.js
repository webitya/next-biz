"use client"
import { AccessTime, Person } from "@mui/icons-material"

export default function BlogCard({ blog, index = 0 }) {
  // Handle click with proper event handling
  const handleCardClick = (e) => {
    // Prevent any event bubbling issues
    e.stopPropagation()

    // Use window.location for more reliable navigation after filtering
    if (typeof window !== "undefined") {
      window.location.href = `/blog/${blog.slug}`
    }
  }

  return (
    <article
      className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 group cursor-pointer"
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          handleCardClick(e)
        }
      }}
    >
      <div className="relative h-32 sm:h-40 overflow-hidden">
        <img
          src={blog.image || "/placeholder.svg?height=200&width=300"}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
          <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded-md text-xs font-medium">
            {blog.tags && blog.tags[0]}
          </span>
        </div>
      </div>

      <div className="p-3 sm:p-4">
        <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
          {blog.title}
        </h3>

        <p className="text-gray-600 mb-3 line-clamp-2 text-sm leading-relaxed">{blog.excerpt}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3 text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <Person className="w-3 h-3" />
              <span className="truncate max-w-16 sm:max-w-none">{blog.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <AccessTime className="w-3 h-3" />
              <span>{blog.readTime}</span>
            </div>
          </div>

          <span className="text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-sm transition-colors">
            <span className="hidden sm:inline">Read →</span>
            <span className="sm:hidden">→</span>
          </span>
        </div>
      </div>
    </article>
  )
}
