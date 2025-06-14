"use client"
import { useState } from "react"
import {
  AccessTime,
  Person,
  Share,
  BookmarkBorder,
  Facebook,
  Twitter,
  LinkedIn,
  WhatsApp,
  ContentCopy,
} from "@mui/icons-material"

export default function BlogPostClient({ blog }) {
  const [isShareOpen, setIsShareOpen] = useState(false)
  const [copySuccess, setCopySuccess] = useState(false)

  // Get current URL for sharing
  const currentUrl = typeof window !== "undefined" ? window.location.href : `https://nextbiz.in/blog/${blog.slug}`
  const shareTitle = blog.title
  const shareDescription = blog.excerpt

  // Share functions
  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`
    window.open(url, "_blank", "width=600,height=400")
  }

  const shareOnTwitter = () => {
    const text = `${shareTitle} - ${shareDescription}`
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(currentUrl)}`
    window.open(url, "_blank", "width=600,height=400")
  }

  const shareOnLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`
    window.open(url, "_blank", "width=600,height=400")
  }

  const shareOnWhatsApp = () => {
    const text = `${shareTitle} - ${shareDescription} ${currentUrl}`
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl)
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea")
      textArea.value = currentUrl
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    }
  }

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareDescription,
          url: currentUrl,
        })
      } catch (err) {
        console.log("Error sharing:", err)
      }
    } else {
      setIsShareOpen(!isShareOpen)
    }
  }

  return (
    <>
      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-md font-medium">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-800 leading-tight">
              {blog.title}
            </h1>

            <div className="flex items-center justify-between flex-wrap gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Person className="w-4 h-4" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AccessTime className="w-4 h-4" />
                  <span>{blog.readTime}</span>
                </div>
                <time dateTime={blog.date}>
                  {new Date(blog.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>

              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition-colors">
                  <BookmarkBorder className="w-4 h-4" />
                  <span>Save</span>
                </button>

                {/* Share Button with Dropdown */}
                <div className="relative">
                  <button
                    onClick={handleNativeShare}
                    className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    <Share className="w-4 h-4" />
                    <span>Share</span>
                  </button>

                  {/* Share Dropdown */}
                  {isShareOpen && (
                    <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-20 min-w-48">
                      <div className="p-3">
                        <h4 className="text-sm font-medium text-gray-800 mb-3">Share this article</h4>
                        <div className="space-y-2">
                          <button
                            onClick={shareOnFacebook}
                            className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                          >
                            <Facebook className="w-4 h-4 text-blue-600" />
                            <span>Share on Facebook</span>
                          </button>

                          <button
                            onClick={shareOnTwitter}
                            className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                          >
                            <Twitter className="w-4 h-4 text-blue-400" />
                            <span>Share on Twitter</span>
                          </button>

                          <button
                            onClick={shareOnLinkedIn}
                            className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                          >
                            <LinkedIn className="w-4 h-4 text-blue-700" />
                            <span>Share on LinkedIn</span>
                          </button>

                          <button
                            onClick={shareOnWhatsApp}
                            className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors"
                          >
                            <WhatsApp className="w-4 h-4 text-green-600" />
                            <span>Share on WhatsApp</span>
                          </button>

                          <button
                            onClick={copyToClipboard}
                            className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-800 rounded-md transition-colors"
                          >
                            <ContentCopy className="w-4 h-4 text-gray-600" />
                            <span>{copySuccess ? "Copied!" : "Copy Link"}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-64 sm:h-80">
            <img
              src={blog.image || "/placeholder.svg?height=400&width=800"}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            <div className="prose prose-lg max-w-none">
              <div
                dangerouslySetInnerHTML={{ __html: blog.content }}
                className="text-gray-700 leading-relaxed [&>h2]:text-xl [&>h2]:font-bold [&>h2]:text-gray-800 [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:text-gray-800 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:mb-4 [&>ul]:mb-4 [&>ol]:mb-4 [&>li]:mb-2"
              />
            </div>

            {/* Share Section at Bottom */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-gray-800">Share this article</h4>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={shareOnFacebook}
                    className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                    title="Share on Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </button>

                  <button
                    onClick={shareOnTwitter}
                    className="p-2 bg-blue-50 text-blue-400 rounded-lg hover:bg-blue-100 transition-colors"
                    title="Share on Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </button>

                  <button
                    onClick={shareOnLinkedIn}
                    className="p-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
                    title="Share on LinkedIn"
                  >
                    <LinkedIn className="w-5 h-5" />
                  </button>

                  <button
                    onClick={shareOnWhatsApp}
                    className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors"
                    title="Share on WhatsApp"
                  >
                    <WhatsApp className="w-5 h-5" />
                  </button>

                  <button
                    onClick={copyToClipboard}
                    className={`p-2 rounded-lg transition-colors ${
                      copySuccess ? "bg-green-50 text-green-600" : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                    }`}
                    title={copySuccess ? "Copied!" : "Copy Link"}
                  >
                    <ContentCopy className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-bold mb-3 text-gray-800">About the Author</h3>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{blog.author.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{blog.author}</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Expert in business technology and digital transformation with years of experience helping companies
                    leverage cutting-edge solutions for growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Click outside to close share dropdown */}
      {isShareOpen && <div className="fixed inset-0 z-10" onClick={() => setIsShareOpen(false)}></div>}
    </>
  )
}
