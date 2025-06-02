import { blogs } from "../../data/blogs"
import BlogCard from "../../components/ui/BlogCard"
import NewsletterSubscribe from "../../components/ui/NewsletterSubscribe"

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
  const categories = [
    { name: "All Posts", count: blogs.length, active: true },
    { name: "Google Ads", count: blogs.filter((blog) => blog.tags.includes("Google Ads")).length },
    {
      name: "Meta Ads",
      count: blogs.filter((blog) => blog.tags.includes("Meta Ads") || blog.tags.includes("Facebook")).length,
    },
    { name: "LinkedIn", count: blogs.filter((blog) => blog.tags.includes("LinkedIn Ads")).length },
    { name: "Email Marketing", count: blogs.filter((blog) => blog.tags.includes("Email Marketing")).length },
    {
      name: "Local Business",
      count: blogs.filter((blog) => blog.tags.includes("Local Business") || blog.tags.includes("Ranchi")).length,
    },
  ]

  const featuredPost = blogs[0]
  const recentPosts = blogs.slice(1, 4)
  const allPosts = blogs.slice(1)

  return (
    <div className="pt-20 bg-gradient-to-b from-blue-50 via-white to-gray-50 min-h-screen">
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
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              📚 Knowledge Hub
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Marketing Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest digital marketing insights, strategies, and tips specifically tailored for
              businesses in Ranchi and across Jharkhand.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Browse by Category</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    category.active
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Featured Article</h2>
              <p className="text-gray-600">Our top pick for Ranchi businesses this week</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image || "/placeholder.svg?height=400&width=600"}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="p-8 lg:p-12">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredPost.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{featuredPost.author}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                      <span>•</span>
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>

                    <a
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md"
                    >
                      Read Article →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Latest Articles</h2>
            <p className="text-gray-600">Fresh insights for Ranchi businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <NewsletterSubscribe />
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">All Articles</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our complete collection of digital marketing insights for businesses in Ranchi and Jharkhand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border border-gray-200">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Ready to Implement These Strategies?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Our team of experts in Ranchi can help you implement these digital marketing strategies for your business.
            Get a free consultation today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg"
            >
              Get Free Consultation
            </a>
            <a
              href="/services"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
