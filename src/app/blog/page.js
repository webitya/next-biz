import { blogs } from "../../data/blogs"
import BlogPageClient from "../../components/ui/BlogPageClient"

export const metadata = {
  title: "Digital Marketing Blog - Expert Tips & Insights | NextBiz.in",
  description:
    "Stay updated with the latest digital marketing trends, tips, and strategies for businesses in Ranchi and Jharkhand. Expert insights on Google Ads, Facebook Ads, LinkedIn Marketing, and more.",
  keywords: [
    "digital marketing blog",
    "marketing tips Ranchi",
    "Google Ads strategies",
    "Facebook marketing Jharkhand",
    "business growth tips",
    "local marketing insights",
    "performance marketing blog",
    "social media marketing",
  ],
  openGraph: {
    title: "Digital Marketing Blog - Expert Tips & Insights | NextBiz.in",
    description:
      "Stay updated with the latest digital marketing trends, tips, and strategies for businesses in Ranchi and Jharkhand.",
    type: "website",
    url: "https://nextbiz.in/blog",
    siteName: "NextBiz.in - Digital Marketing Agency Ranchi",
    images: [
      {
        url: "https://nextbiz.in/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "NextBiz.in Digital Marketing Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Blog - Expert Tips & Insights | NextBiz.in",
    description:
      "Stay updated with the latest digital marketing trends, tips, and strategies for businesses in Ranchi and Jharkhand.",
    creator: "@nextbiz",
    images: ["https://nextbiz.in/twitter-blog.jpg"],
  },
  alternates: {
    canonical: "https://nextbiz.in/blog",
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

export default function BlogPage() {
  return <BlogPageClient blogs={blogs} />
}
