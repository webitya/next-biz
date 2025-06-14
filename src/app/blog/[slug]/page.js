import { notFound } from "next/navigation"
import Link from "next/link"
import { blogs } from "../../../data/blogs"
import BlogCard from "../../../components/ui/BlogCard"
import BlogPostClient from "../../../components/ui/BlogPostClient"

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }))
}

export async function generateMetadata({ params }) {
  const blog = blogs.find((blog) => blog.slug === params.slug)

  if (!blog) {
    return {
      title: "Blog Post Not Found - NextBiz.in",
      description: "The requested blog post could not be found. Browse our other digital marketing articles.",
    }
  }

  return {
    title: `${blog.title} | NextBiz.in Blog`,
    description: blog.excerpt,
    keywords: blog.tags.join(", "),
    authors: [{ name: blog.author }],
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      publishedTime: blog.date,
      authors: [blog.author],
      tags: blog.tags,
      url: `https://nextbiz.in/blog/${blog.slug}`,
      siteName: "NextBiz.in - Digital Marketing Agency Ranchi",
      images: [
        {
          url: blog.image || "https://nextbiz.in/og-blog-default.jpg",
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      creator: "@nextbiz",
      images: [blog.image || "https://nextbiz.in/twitter-blog-default.jpg"],
    },
    alternates: {
      canonical: `https://nextbiz.in/blog/${blog.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export default function BlogPost({ params }) {
  const blog = blogs.find((blog) => blog.slug === params.slug)

  if (!blog) {
    notFound()
  }

  const relatedPosts = blogs
    .filter((post) => post.id !== blog.id && post.tags.some((tag) => blog.tags.includes(tag)))
    .slice(0, 3)

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blog.title,
            description: blog.excerpt,
            image: blog.image || "https://nextbiz.in/blog-default.jpg",
            author: {
              "@type": "Person",
              name: blog.author,
            },
            publisher: {
              "@type": "Organization",
              name: "NextBiz.in",
              logo: {
                "@type": "ImageObject",
                url: "https://nextbiz.in/logo.png",
              },
            },
            datePublished: blog.date,
            dateModified: blog.date,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://nextbiz.in/blog/${blog.slug}`,
            },
            keywords: blog.tags.join(", "),
            articleSection: blog.tags[0],
            wordCount: blog.content.replace(/<[^>]*>/g, "").split(" ").length,
          }),
        }}
      />

      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          href="/blog"
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to Blog</span>
        </Link>
      </div>

      {/* Client Component for Interactive Features */}
      <BlogPostClient blog={blog} />

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl font-bold mb-6 text-gray-800 flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <BlogCard key={post.id} blog={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-blue-100 mb-6">
              Let s discuss how our solutions can help you achieve your business goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
