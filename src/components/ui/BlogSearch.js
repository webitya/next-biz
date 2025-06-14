"use client"
import { useState, useEffect } from "react"
import { Search, FilterList, Close, Tune } from "@mui/icons-material"

export default function BlogSearch({ categories, blogs, onFilteredResults }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Posts")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)

  // Search suggestions based on blog titles and tags
  const generateSuggestions = (term) => {
    if (!term || term.length < 2) return []

    const allSuggestions = []

    // Add blog titles that match
    blogs.forEach((blog) => {
      if (blog.title.toLowerCase().includes(term.toLowerCase())) {
        allSuggestions.push({
          type: "title",
          text: blog.title,
          category: blog.tags[0],
        })
      }
    })

    // Add tags that match
    const allTags = [...new Set(blogs.flatMap((blog) => blog.tags))]
    allTags.forEach((tag) => {
      if (tag.toLowerCase().includes(term.toLowerCase())) {
        allSuggestions.push({
          type: "tag",
          text: tag,
          category: "Tag",
        })
      }
    })

    // Add popular search terms
    const popularTerms = [
      "Google Ads optimization",
      "Facebook marketing",
      "Instagram advertising",
      "LinkedIn B2B",
      "Email automation",
      "Local business marketing",
      "Performance marketing",
      "Digital marketing ROI",
      "Social media strategy",
      "PPC campaigns",
    ]

    popularTerms.forEach((popular) => {
      if (popular.toLowerCase().includes(term.toLowerCase())) {
        allSuggestions.push({
          type: "popular",
          text: popular,
          category: "Popular",
        })
      }
    })

    return allSuggestions.slice(0, 6) // Limit to 6 suggestions
  }

  // Filter blogs based on search term and category
  const filterBlogs = (term, category) => {
    let filtered = blogs

    // Filter by category first
    if (category !== "All Posts") {
      filtered = filtered.filter((blog) =>
        blog.tags.some(
          (tag) =>
            tag.toLowerCase().includes(category.toLowerCase()) || category.toLowerCase().includes(tag.toLowerCase()),
        ),
      )
    }

    // Then filter by search term
    if (term) {
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(term.toLowerCase()) ||
          blog.excerpt.toLowerCase().includes(term.toLowerCase()) ||
          blog.tags.some((tag) => tag.toLowerCase().includes(term.toLowerCase())) ||
          blog.author.toLowerCase().includes(term.toLowerCase()),
      )
    }

    return filtered
  }

  // Update suggestions when search term changes
  useEffect(() => {
    const newSuggestions = generateSuggestions(searchTerm)
    setSuggestions(newSuggestions)
    setShowSuggestions(searchTerm.length >= 2 && newSuggestions.length > 0)
  }, [searchTerm, blogs])

  // Filter results whenever search term or category changes
  useEffect(() => {
    const filtered = filterBlogs(searchTerm, selectedCategory)
    onFilteredResults(filtered)
  }, [searchTerm, selectedCategory, blogs, onFilteredResults])

  const handleSearch = (e) => {
    e.preventDefault()
    setShowSuggestions(false)
    setIsMobileFiltersOpen(false)
    const filtered = filterBlogs(searchTerm, selectedCategory)
    onFilteredResults(filtered)
  }

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.text)
    setShowSuggestions(false)

    // If it's a tag suggestion, also set the category
    if (suggestion.type === "tag") {
      const matchingCategory = categories.find(
        (cat) =>
          cat.toLowerCase().includes(suggestion.text.toLowerCase()) ||
          suggestion.text.toLowerCase().includes(cat.toLowerCase()),
      )
      if (matchingCategory) {
        setSelectedCategory(matchingCategory)
      }
    }
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    setIsFilterOpen(false)
    setIsMobileFiltersOpen(false)
    // Immediately filter when category changes
    const filtered = filterBlogs(searchTerm, category)
    onFilteredResults(filtered)
  }

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("All Posts")
    setShowSuggestions(false)
    setIsMobileFiltersOpen(false)
    onFilteredResults(blogs) // Show all blogs
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-3 sm:p-4">
      {/* Mobile Layout */}
      <div className="sm:hidden space-y-3">
        {/* Search Input Row */}
        <div className="flex gap-2">
          {/* Search Input with Suggestions */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setShowSuggestions(searchTerm.length >= 2 && suggestions.length > 0)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              placeholder="Search articles..."
              className="w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900 placeholder-gray-500 text-sm"
            />

            {/* Mobile Search Suggestions Dropdown */}
            {showSuggestions && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-64 overflow-y-auto">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full text-left px-3 py-2.5 hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="text-gray-800 font-medium text-sm truncate">{suggestion.text}</div>
                        <div className="text-xs text-gray-500 mt-0.5">
                          {suggestion.type === "title" && "Article"}
                          {suggestion.type === "tag" && "Topic"}
                          {suggestion.type === "popular" && "Popular"}
                        </div>
                      </div>
                      <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded ml-2 flex-shrink-0">
                        {suggestion.category}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Filter Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
            className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors"
          >
            <Tune className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Mobile Filters Panel */}
        {isMobileFiltersOpen && (
          <div className="bg-gray-50 rounded-lg p-3 space-y-3">
            {/* Category Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleCategoryChange(category)}
                    className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-700 border border-gray-300 hover:bg-blue-50"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Action Buttons */}
            <div className="flex gap-2">
              <button
                type="submit"
                onClick={handleSearch}
                className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>
              <button
                type="button"
                onClick={clearFilters}
                className="px-4 py-2.5 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              >
                Clear
              </button>
            </div>
          </div>
        )}

        {/* Mobile Quick Filter Tags - Hidden when filters panel is open */}
        {!isMobileFiltersOpen && (
          <div className="pt-3 border-t border-gray-200">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-xs text-gray-500">Quick filters:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["Google Ads", "Meta Ads", "LinkedIn", "Email Marketing", "Local Business"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleCategoryChange(tag)}
                  className={`px-2 py-1 text-xs rounded-full transition-colors ${
                    selectedCategory === tag
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Desktop Layout - Original Design */}
      <div className="hidden sm:block">
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
          {/* Search Input */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setShowSuggestions(searchTerm.length >= 2 && suggestions.length > 0)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              placeholder="Search articles, topics, or tags..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900 placeholder-gray-500"
            />

            {/* Desktop Search Suggestions Dropdown */}
            {showSuggestions && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-64 overflow-y-auto">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-gray-800 font-medium">{suggestion.text}</div>
                        <div className="text-xs text-gray-500 mt-1">
                          {suggestion.type === "title" && "Article"}
                          {suggestion.type === "tag" && "Topic"}
                          {suggestion.type === "popular" && "Popular Search"}
                        </div>
                      </div>
                      <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">{suggestion.category}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Category Filter */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center justify-between w-full sm:w-48 px-4 py-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-2">
                <FilterList className="w-5 h-5 text-gray-400" />
                <span className="text-gray-700 text-sm truncate">{selectedCategory}</span>
              </div>
              <div className={`transform transition-transform ${isFilterOpen ? "rotate-180" : ""}`}>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {/* Desktop Category Dropdown */}
            {isFilterOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleCategoryChange(category)}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-blue-50 transition-colors ${
                      selectedCategory === category ? "bg-blue-50 text-blue-700 font-medium" : "text-gray-700"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
          >
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
        </form>

        {/* Desktop Quick Filter Tags */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-sm text-gray-500">Quick filters:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Google Ads", "Meta Ads", "LinkedIn", "Email Marketing", "Local Business"].map((tag) => (
              <button
                key={tag}
                onClick={() => handleCategoryChange(tag)}
                className={`px-3 py-1 text-xs rounded-full transition-colors ${
                  selectedCategory === tag
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Filters - Shared between mobile and desktop */}
      {(searchTerm || selectedCategory !== "All Posts") && (
        <div className="flex items-center justify-between mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
          <div className="flex items-center space-x-2 flex-wrap gap-1">
            <span className="text-xs sm:text-sm text-gray-500">Filters:</span>
            {searchTerm && (
              <span className="inline-flex items-center px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 text-xs sm:text-sm rounded-full">
                <span className="truncate max-w-24 sm:max-w-none">{searchTerm}</span>
                <button onClick={() => setSearchTerm("")} className="ml-1 sm:ml-2 hover:text-blue-600">
                  <Close className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedCategory !== "All Posts" && (
              <span className="inline-flex items-center px-2 sm:px-3 py-1 bg-purple-100 text-purple-800 text-xs sm:text-sm rounded-full">
                <span className="truncate max-w-20 sm:max-w-none">{selectedCategory}</span>
                <button onClick={() => setSelectedCategory("All Posts")} className="ml-1 sm:ml-2 hover:text-purple-600">
                  <Close className="w-3 h-3" />
                </button>
              </span>
            )}
          </div>

          {/* Clear All Filters */}
          <button
            onClick={clearFilters}
            className="text-xs sm:text-sm text-gray-500 hover:text-red-600 transition-colors"
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  )
}
