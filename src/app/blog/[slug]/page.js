import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowBack, AccessTime, Person, Share } from "@mui/icons-material"
import { blogs } from "../../../data/blogs"
import BlogCard from "../../../components/ui/BlogCard"

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
    }
  }

  return {
    title: `${blog.title} - NextBiz.in Blog`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      publishedTime: blog.date,
      authors: [blog.author],
      tags: blog.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
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
    .slice(0, 2)

  return (
    <div className="pt-20">
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blog.title,
            description: blog.excerpt,
            author: {
              "@type": "Person",
              name: blog.author,
            },
            datePublished: blog.date,
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
              "@id": `https://nextbiz.in/blog/${blog.slug}`,
            },
          }),
        }}
      />

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/blog"
          className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
        >
          <ArrowBack className="w-5 h-5" />
          <span>Back to Blog</span>
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            {blog.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">{blog.title}</h1>

          <div className="flex items-center justify-between flex-wrap gap-4 text-gray-400">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Person className="w-5 h-5" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <AccessTime className="w-5 h-5" />
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

            <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors">
              <Share className="w-5 h-5" />
              <span>Share</span>
            </button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-64 sm:h-96 mb-12 rounded-2xl overflow-hidden">
          <Image src={blog.image || "/placeholder.svg"} alt={blog.title} fill className="object-cover" />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <div
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className="text-gray-300 leading-relaxed [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-white [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:mb-6 [&>ul]:mb-6 [&>ol]:mb-6 [&>li]:mb-2"
          />
        </div>

        {/* Author Bio */}
        <div className="glass-effect p-8 rounded-2xl mt-12 mb-12">
          <h3 className="text-xl font-bold mb-4">About the Author</h3>
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">{blog.author.charAt(0)}</span>
            </div>
            <div>
              <h4 className="font-semibold text-lg">{blog.author}</h4>
              <p className="text-gray-300 mt-2">
                Expert in business technology and digital transformation with years of experience helping companies
                leverage cutting-edge solutions for growth.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-12 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedPosts.map((post) => (
                <BlogCard key={post.id} blog={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-effect p-12 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our solutions can help you achieve your business goals.
            </p>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 inline-block"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
