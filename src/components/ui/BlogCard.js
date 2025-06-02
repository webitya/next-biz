import Link from "next/link"
import Image from "next/image"
import { AccessTime, Person } from "@mui/icons-material"

export default function BlogCard({ blog }) {
  return (
    <article className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={blog.image || "/placeholder.svg"}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="p-6">
        <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
          <div className="flex items-center space-x-1">
            <Person className="w-4 h-4" />
            <span>{blog.author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <AccessTime className="w-4 h-4" />
            <span>{blog.readTime}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
          <Link href={`/blog/${blog.slug}`} className="hover:text-purple-400 transition-colors">
            {blog.title}
          </Link>
        </h3>

        <p className="text-gray-300 mb-4 line-clamp-3">{blog.excerpt}</p>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {blog.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <Link
            href={`/blog/${blog.slug}`}
            className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  )
}
