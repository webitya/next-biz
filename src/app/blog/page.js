import { blogs } from "../../data/blogs"
import BlogCard from "../../components/ui/BlogCard"

export const metadata = {
  title: "Digital Marketing Blog | NextBiz.in - Ranchi, Jharkhand",
  description:
    "Stay updated with the latest digital marketing insights, Google Ads tips, Facebook marketing strategies, and local business growth tactics for Ranchi and Jharkhand businesses.",
  keywords: [
    "digital marketing blog Ranchi",
    "Google Ads tips Jharkhand",
    "Facebook marketing blog Ranchi",
    "local business marketing Jharkhand",
    "digital marketing insights Ranchi",
    "social media tips Jharkhand",
    "email marketing blog Ranchi",
  ],
}

export default function BlogPage() {
  return (
    <div className="pt-20">
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

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Digital Marketing <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest digital marketing insights, strategies, and tips specifically tailored for
              businesses in Ranchi and across Jharkhand.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {blogs.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Featured Article</h2>
            <div className="max-w-4xl mx-auto">
              <BlogCard blog={blogs[0]} />
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-12 text-center">Latest Articles for Ranchi Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-effect p-12 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Stay Updated with Ranchi s Digital Marketing Trends</h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter and never miss the latest insights and updates specifically for businesses in
              Jharkhand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
