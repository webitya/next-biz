"use client"
import { useState } from "react"
import BlogCard from "./BlogCard"
import BlogSearch from "./BlogSearch"
import { Search } from "lucide-react"

export default function BlogPageClient({ blogs }) {
  const [filteredBlogs, setFilteredBlogs] = useState(blogs)

  const categories = [
    "All Posts",
    "Google Ads",
    "Meta Ads",
    "LinkedIn Ads",
    "Email Marketing",
    "Local Business",
    "Performance Marketing",
  ]

  const featuredPost = blogs[0]

  const handleFilteredResults = (filtered) => {
    setFilteredBlogs(filtered)
  }

  return (
    <div className="pt-16 sm:pt-20 bg-gray-50 min-h-screen">
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "NextBiz.in Digital Marketing Blog",
            description: "Digital marketing insights and tips for businesses in Ranchi and Jharkhand",
            url: "https://nextbiz.in/blog",
            publisher: {
              "@type": "Organization",
              name: "NextBiz.in",
              logo: {
                "@type": "ImageObject",
                url: "https://nextbiz.in/logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://nextbiz.in/blog",
            },
            blogPost: blogs.map((blog) => ({
              "@type": "BlogPosting",
              headline: blog.title,
              description: blog.excerpt,
              url: `https://nextbiz.in/blog/${blog.slug}`,
              datePublished: blog.date,
              author: {
                "@type": "Person",
                name: blog.author,
              },
            })),
          }),
        }}
      />

      {/* Header Section */}
      <section className="py-6 sm:py-12 px-3 sm:px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Marketing Blog
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Latest insights and strategies for businesses in Ranchi and Jharkhand
            </p>
          </div>

          {/* Search and Filter */}
          <BlogSearch categories={categories} blogs={blogs} onFilteredResults={handleFilteredResults} />
        </div>
      </section>

      {/* Results Count */}
      <section className="px-3 sm:px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4 sm:mb-6">
            <p className="text-gray-600 text-xs sm:text-sm">
              Showing {filteredBlogs.length} of {blogs.length} articles
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post - Only show if no filters applied */}
      {filteredBlogs.length === blogs.length && featuredPost && (
        <section className="py-4 sm:py-8 px-3 sm:px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 sm:mr-3"></span>
                Featured Article
              </h2>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-40 sm:h-48 lg:h-64">
                  <img
                    src={featuredPost.image || "/placeholder.svg?height=300&width=500"}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded-md text-xs font-medium">Featured</span>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
                    {featuredPost.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 line-clamp-2">
                    {featuredPost.title}
                  </h3>

                  <p className="text-gray-600 mb-3 sm:mb-4 line-clamp-3 text-sm leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 sm:space-x-3 text-xs text-gray-500">
                      <span className="truncate">{featuredPost.author}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>

                    <a
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      <span className="hidden sm:inline">Read More</span>
                      <span className="sm:hidden">Read</span>
                      <span className="ml-1">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-4 sm:py-8 px-3 sm:px-4 lg:px-8 pb-12 sm:pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 flex items-center">
              <span className="w-2 h-2 bg-purple-600 rounded-full mr-2 sm:mr-3"></span>
              {filteredBlogs.length === blogs.length ? "Latest Articles" : "Search Results"}
            </h2>
          </div>

          {filteredBlogs.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredBlogs.slice(filteredBlogs.length === blogs.length ? 1 : 0).map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>

              {/* Load More */}
              {filteredBlogs.length > 9 && (
                <div className="text-center mt-8 sm:mt-12">
                  <button className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm sm:text-base">
                    Load More Articles
                  </button>
                </div>
              )}
            </>
          ) : (
            /* No Results */
            <div className="text-center py-8 sm:py-12">
              <div className="w-16 sm:w-24 h-16 sm:h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Search className="w-6 sm:w-8 h-6 sm:h-8 text-gray-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base px-4">
                Try adjusting your search terms or browse our categories to find what you are looking for.
              </p>
              <button
                onClick={() => {
                  setFilteredBlogs(blogs)
                }}
                className="px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm sm:text-base"
              >
                Show All Articles
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
