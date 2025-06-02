import Link from "next/link"
import { ArrowForward, Rocket, TrendingUp, Security, Support, LocationOn, Phone } from "@mui/icons-material"
import HomeScene from "../components/3d/HomeScene"

export const metadata = {
  title: "Best Digital Marketing Agency in Ranchi, Jharkhand | NextBiz.in",
  description:
    "Top-rated digital marketing agency in Ranchi, Jharkhand. Expert Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads & Email Marketing services for local businesses. Get a free consultation today!",
  keywords: [
    "digital marketing agency Ranchi",
    "Google Ads agency Jharkhand",
    "Facebook ads Ranchi",
    "social media marketing Jharkhand",
    "best digital marketing Ranchi",
    "SEO services Jharkhand",
    "PPC agency Ranchi",
    "email marketing Jharkhand",
    "local business marketing Ranchi",
  ],
}

export default function HomePage() {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Performance Marketing",
      description:
        "Data-driven campaigns that maximize ROI and deliver measurable business growth for Ranchi businesses.",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Google Ads Management",
      description:
        "Expert Google Ads campaigns across Search, Display, Shopping, and YouTube platforms optimized for Jharkhand.",
    },
    {
      icon: <Security className="w-8 h-8" />,
      title: "Meta Advertising",
      description:
        "Strategic Facebook and Instagram campaigns that reach your target audience effectively in Ranchi and beyond.",
    },
    {
      icon: <Support className="w-8 h-8" />,
      title: "Email Marketing",
      description:
        "Comprehensive email campaigns that nurture leads and drive customer retention for local businesses.",
    },
  ]

  const testimonials = [
    {
      quote:
        "NextBiz transformed our online presence in Ranchi. Their Google Ads campaigns increased our store visits by 45% within just two months.",
      author: "Rajesh Kumar",
      business: "Ranchi Retail Solutions",
    },
    {
      quote:
        "As a small business in Jharkhand, we were struggling to compete online until we partnered with NextBiz. Their local expertise made all the difference.",
      author: "Priya Singh",
      business: "Harmony Wellness Center, Ranchi",
    },
    {
      quote:
        "Their understanding of the Ranchi market helped us target the right customers. Our ROI has increased by 120% since working with NextBiz.",
      author: "Amit Sharma",
      business: "Jharkhand Auto Parts",
    },
  ]

  return (
    <div className="relative">
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "NextBiz.in - Digital Marketing Agency",
            image: "https://nextbiz.in/logo.png",
            "@id": "https://nextbiz.in",
            url: "https://nextbiz.in",
            telephone: "+91-9693245941",
            priceRange: "₹₹",
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
            sameAs: [
              "https://facebook.com/nextbiz",
              "https://twitter.com/nextbiz",
              "https://linkedin.com/company/nextbiz",
              "https://instagram.com/nextbiz",
            ],
            areaServed: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: "23.3441",
                longitude: "85.3096",
              },
              geoRadius: "50000",
            },
            servesCuisine: "Digital Marketing Services",
            review: {
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
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "87",
            },
          }),
        }}
      />

      {/* 3D Background Scene */}
      <HomeScene />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center z-10">
          <div className="mb-6 flex items-center justify-center text-purple-400">
            <LocationOn className="w-6 h-6 mr-2" />
            <span className="text-lg">Ranchi, Jharkhand</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Ranchi s Premier</span>
            <br />
            Digital Marketing Agency
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with Jharkhand s leading digital marketing experts. Specialized in Google Ads,
            Facebook Ads, Instagram Ads, LinkedIn Ads, and Email Marketing for local businesses in Ranchi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Explore Services</span>
              <ArrowForward className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Local Business Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Digital Marketing Solutions for <span className="gradient-text">Ranchi Businesses</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We understand the unique challenges and opportunities in the Jharkhand market. Our locally-tailored
              strategies help businesses in Ranchi stand out from the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass-effect p-6 rounded-lg hover:bg-white/20 transition-all duration-300">
                <div className="text-purple-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Ranchi Businesses Choose <span className="gradient-text">NextBiz.in</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              As a local digital marketing agency in Jharkhand, we bring unique advantages to businesses in Ranchi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-lg hover:bg-white/20 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Local Market Expertise</h3>
              <p className="text-gray-300">
                We understand Ranchi s unique market dynamics, consumer behavior, and competitive landscape. Our
                strategies are tailored specifically for success in Jharkhand.
              </p>
            </div>
            <div className="glass-effect p-8 rounded-lg hover:bg-white/20 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Proven Results</h3>
              <p className="text-gray-300">
                We have helped over 100 businesses in Ranchi and across Jharkhand achieve measurable growth through our
                data-driven digital marketing strategies.
              </p>
            </div>
            <div className="glass-effect p-8 rounded-lg hover:bg-white/20 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Personalized Service</h3>
              <p className="text-gray-300">
                As a Ranchi-based agency, we provide face-to-face consultations and personalized service that national
                agencies can not match. We have invested in your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Trusted by <span className="gradient-text">Ranchi Businesses</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what other local businesses in Jharkhand have to say about our digital marketing services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-effect p-8 rounded-lg">
                <div className="text-2xl text-purple-400 mb-4"></div>
                <p className="text-gray-300 mb-6 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Areas Served Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Serving Businesses Throughout <span className="gradient-text">Jharkhand</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              While we are based in Ranchi, we provide digital marketing services to businesses across Jharkhand.
            </p>
          </div>

          <div className="glass-effect p-8 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Ranchi</h3>
                <p className="text-gray-300 text-sm">Main Road, Circular Road, Lalpur, Doranda, Morabadi</p>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Jamshedpur</h3>
                <p className="text-gray-300 text-sm">Bistupur, Sakchi, Sonari, Kadma, Telco</p>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Dhanbad</h3>
                <p className="text-gray-300 text-sm">Bank More, Hirapur, Jharia, Dhaiya, Saraidhela</p>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Bokaro</h3>
                <p className="text-gray-300 text-sm">Sector 1, Sector 4, City Center, Chas, Bermo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-effect p-12 rounded-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Grow Your Ranchi Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of businesses in Ranchi and across Jharkhand that have already revolutionized their
              operations with our digital marketing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <ArrowForward className="w-5 h-5" />
              </Link>
              <a
                href="tel:+919693245941"
                className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
