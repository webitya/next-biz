import Link from "next/link"
import Image from "next/image"
import { AccessTime, Person, ArrowForward } from "@mui/icons-material"

export default function BlogCard({ blog }) {
  return (
    <article className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={blog.image || "/placeholder.svg?height=300&width=400"}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
            {blog.tags[0]}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center space-x-1">
            <Person className="w-4 h-4" />
            <span>{blog.author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <AccessTime className="w-4 h-4" />
            <span>{blog.readTime}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{blog.excerpt}</p>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {blog.tags.slice(1, 3).map((tag) => (
              <span key={tag} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>

          <Link
            href={`/blog/${blog.slug}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors group"
          >
            Read More
            <ArrowForward className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  )
}
