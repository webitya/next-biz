import { Inter } from "next/font/google"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: {
    default: "Best Digital Marketing Agency in Ranchi, Jharkhand | NextBiz.in",
    template: "%s | NextBiz.in - Ranchi's Top Digital Marketing Agency",
  },
  description:
    "Ranchi's #1 digital marketing agency specializing in Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads & Email Marketing. Local experts serving businesses across Jharkhand.",
  keywords: [
    "digital marketing agency Ranchi",
    "best Google Ads agency Jharkhand",
    "Facebook ads Ranchi",
    "Instagram ads Jharkhand",
    "LinkedIn marketing Ranchi",
    "email marketing agency Jharkhand",
    "PPC services Ranchi",
    "social media marketing Jharkhand",
    "local SEO Ranchi",
    "digital advertising Jharkhand",
    "marketing consultant Ranchi",
    "business promotion Jharkhand",
    "web marketing Ranchi",
    "online advertising Jharkhand",
  ],
  authors: [{ name: "NextBiz Team - Ranchi, Jharkhand" }],
  creator: "NextBiz.in - Ranchi",
  publisher: "NextBiz.in - Digital Marketing Agency Ranchi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nextbiz.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nextbiz.in",
    title: "Best Digital Marketing Agency in Ranchi, Jharkhand | NextBiz.in",
    description:
      "Ranchi's #1 digital marketing agency specializing in Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads & Email Marketing. Local experts serving businesses across Jharkhand.",
    siteName: "NextBiz.in - Ranchi's Top Digital Marketing Agency",
    images: [
      {
        url: "https://nextbiz.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NextBiz.in - Digital Marketing Agency in Ranchi, Jharkhand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Digital Marketing Agency in Ranchi, Jharkhand | NextBiz.in",
    description:
      "Ranchi's #1 digital marketing agency specializing in Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads & Email Marketing. Local experts serving businesses across Jharkhand.",
    creator: "@nextbiz",
    images: ["https://nextbiz.in/twitter-image.jpg"],
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
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    bing: "bing-verification-code",
  },
  category: "Digital Marketing Agency in Ranchi, Jharkhand",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "NextBiz.in - Digital Marketing Agency Ranchi",
              url: "https://nextbiz.in",
              logo: "https://nextbiz.in/logo.png",
              description:
                "Ranchi's #1 digital marketing agency specializing in Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads & Email Marketing. Local experts serving businesses across Jharkhand.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Main Road",
                addressLocality: "Ranchi",
                addressRegion: "Jharkhand",
                postalCode: "834001",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "23.3441",
                longitude: "85.3096",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9693245941",
                contactType: "customer service",
                email: "contact@nextbiz.in",
                areaServed: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh", "Jharkhand"],
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: [
                "https://facebook.com/nextbiz",
                "https://twitter.com/nextbiz",
                "https://linkedin.com/company/nextbiz",
                "https://instagram.com/nextbiz",
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday"],
                  opens: "10:00",
                  closes: "16:00",
                },
              ],
              priceRange: "₹₹",
              hasMap: "https://www.google.com/maps?q=ranchi+jharkhand",
              founder: {
                "@type": "Person",
                name: "NextBiz Founder",
              },
              foundingDate: "2019",
              foundingLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Ranchi",
                  addressRegion: "Jharkhand",
                  addressCountry: "IN",
                },
              },
              areaServed: {
                "@type": "State",
                name: "Jharkhand",
              },
              makesOffer: [
                {
                  "@type": "Offer",
                  name: "Google Ads Management",
                  description: "Expert Google Ads campaign management for businesses in Ranchi and Jharkhand",
                },
                {
                  "@type": "Offer",
                  name: "Facebook & Instagram Ads",
                  description: "Strategic social media advertising for local businesses in Jharkhand",
                },
                {
                  "@type": "Offer",
                  name: "LinkedIn Marketing",
                  description: "B2B marketing solutions for companies in Ranchi and across Jharkhand",
                },
                {
                  "@type": "Offer",
                  name: "Email Marketing",
                  description: "Automated email campaigns for businesses in Jharkhand",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "87",
              },
              review: [
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "Rajesh Kumar",
                  },
                  datePublished: "2023-11-15",
                  reviewBody:
                    "NextBiz transformed our online presence in Ranchi. Their Google Ads campaigns increased our store visits by 45% within just two months.",
                },
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "Priya Singh",
                  },
                  datePublished: "2023-10-22",
                  reviewBody:
                    "As a small business in Jharkhand, we were struggling to compete online until we partnered with NextBiz. Their local expertise made all the difference.",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
