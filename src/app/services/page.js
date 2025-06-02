import { TrendingUp, Analytics, Business, Email, Facebook, LinkedIn } from "@mui/icons-material"
import ServicesScene from "../../components/3d/ServicesScene"

export const metadata = {
  title: "Digital Marketing Services in Ranchi, Jharkhand | NextBiz.in",
  description:
    "Comprehensive digital marketing services in Ranchi including Google Ads, Facebook & Instagram Ads, LinkedIn Marketing, and Email Campaigns. Trusted by 100+ businesses in Jharkhand.",
  keywords: [
    "digital marketing services Ranchi",
    "Google Ads management Jharkhand",
    "Facebook ads agency Ranchi",
    "Instagram marketing Jharkhand",
    "LinkedIn ads Ranchi",
    "email marketing services Jharkhand",
    "PPC management Ranchi",
    "social media marketing Jharkhand",
    "best marketing agency Ranchi",
  ],
}

export default function ServicesPage() {
  const services = [
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Performance Marketing",
      description:
        "Data-driven performance marketing strategies that maximize ROI and drive measurable business growth for companies in Ranchi and across Jharkhand.",
      features: ["ROI Optimization", "Conversion Tracking", "A/B Testing", "Performance Analytics"],
      price: "Starting from ₹25,000",
    },
    {
      icon: <Analytics className="w-12 h-12" />,
      title: "Google Ads Management",
      description:
        "Expert Google Ads campaign management including Search, Display, Shopping, and YouTube ads to maximize your online visibility in Ranchi and throughout Jharkhand.",
      features: ["Local Search Campaigns", "Display Advertising", "Shopping Ads", "YouTube Marketing"],
      price: "Starting from ₹20,000",
    },
    {
      icon: <Facebook className="w-12 h-12" />,
      title: "Meta Ads (Facebook & Instagram)",
      description:
        "Strategic Meta advertising campaigns across Facebook and Instagram to reach your target audience in Ranchi and drive conversions for Jharkhand businesses.",
      features: ["Facebook Ads", "Instagram Marketing", "Local Audience Targeting", "Creative Optimization"],
      price: "Starting from ₹18,000",
    },
    {
      icon: <LinkedIn className="w-12 h-12" />,
      title: "LinkedIn Ads",
      description:
        "Professional B2B marketing campaigns on LinkedIn to connect with decision-makers and generate high-quality leads for businesses in Ranchi and Jharkhand.",
      features: ["Sponsored Content", "Lead Generation", "B2B Targeting", "Professional Networking"],
      price: "Starting from ₹22,000",
    },
    {
      icon: <Email className="w-12 h-12" />,
      title: "Email Marketing",
      description:
        "Comprehensive email marketing campaigns that nurture leads, retain customers, and drive repeat business for companies throughout Jharkhand.",
      features: ["Campaign Design", "Automation Setup", "List Management", "Performance Tracking"],
      price: "Starting from ₹15,000",
    },
    {
      icon: <Business className="w-12 h-12" />,
      title: "Local Business Marketing",
      description:
        "Specialized marketing solutions for local businesses in Ranchi and Jharkhand to increase visibility, foot traffic, and sales in your community.",
      features: ["Google Business Profile", "Local SEO", "Geo-Targeted Ads", "Community Engagement"],
      price: "Starting from ₹20,000",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We analyze your business needs and identify opportunities in the Ranchi and Jharkhand market.",
    },
    {
      step: "02",
      title: "Strategy",
      description: "We develop a customized strategy tailored to your specific goals and the local Jharkhand audience.",
    },
    {
      step: "03",
      title: "Implementation",
      description: "Our expert team implements the solution with campaigns optimized for the Ranchi market.",
    },
    {
      step: "04",
      title: "Support",
      description: "We provide ongoing support and optimization to ensure continued success in Jharkhand.",
    },
  ]

  const localClients = [
    "Ranchi Retail Association",
    "Jharkhand Chamber of Commerce",
    "Ranchi Hotels Group",
    "Jharkhand Educational Institute",
    "Ranchi Healthcare Services",
    "Jharkhand Manufacturing Association",
  ]

  return (
    <div className="pt-20">
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: [
              {
                "@type": "Service",
                position: 1,
                name: "Google Ads Management in Ranchi",
                description: "Expert Google Ads campaign management for businesses in Ranchi and Jharkhand",
                provider: {
                  "@type": "LocalBusiness",
                  name: "NextBiz.in - Digital Marketing Agency Ranchi",
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
                offers: {
                  "@type": "Offer",
                  price: "20000",
                  priceCurrency: "INR",
                },
              },
              {
                "@type": "Service",
                position: 2,
                name: "Facebook & Instagram Ads in Ranchi",
                description: "Strategic social media advertising for local businesses in Jharkhand",
                provider: {
                  "@type": "LocalBusiness",
                  name: "NextBiz.in - Digital Marketing Agency Ranchi",
                },
                areaServed: {
                  "@type": "State",
                  name: "Jharkhand",
                },
                offers: {
                  "@type": "Offer",
                  price: "18000",
                  priceCurrency: "INR",
                },
              },
              {
                "@type": "Service",
                position: 3,
                name: "LinkedIn Marketing in Ranchi",
                description: "B2B marketing solutions for companies in Ranchi and across Jharkhand",
                provider: {
                  "@type": "LocalBusiness",
                  name: "NextBiz.in - Digital Marketing Agency Ranchi",
                },
                areaServed: {
                  "@type": "State",
                  name: "Jharkhand",
                },
                offers: {
                  "@type": "Offer",
                  price: "22000",
                  priceCurrency: "INR",
                },
              },
              {
                "@type": "Service",
                position: 4,
                name: "Email Marketing in Ranchi",
                description: "Automated email campaigns for businesses in Jharkhand",
                provider: {
                  "@type": "LocalBusiness",
                  name: "NextBiz.in - Digital Marketing Agency Ranchi",
                },
                areaServed: {
                  "@type": "State",
                  name: "Jharkhand",
                },
                offers: {
                  "@type": "Offer",
                  price: "15000",
                  priceCurrency: "INR",
                },
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Digital Marketing Services in <span className="gradient-text">Ranchi</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed to help businesses in Ranchi and across Jharkhand
              achieve measurable growth and ROI.
            </p>
          </div>

          {/* 3D Scene */}
          <ServicesScene />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Digital Marketing Services in <span className="gradient-text">Jharkhand</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-effect p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-gray-700 pt-6">
                  <div className="text-lg font-semibold text-purple-400 mb-4">{service.price}</div>
                  <a
                    href="/contact"
                    className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 block text-center"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Clients Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Trusted by Businesses Across <span className="gradient-text">Jharkhand</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We've helped hundreds of businesses in Ranchi and throughout Jharkhand achieve their digital marketing
              goals.
            </p>
          </div>

          <div className="glass-effect p-8 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {localClients.map((client, index) => (
                <div key={index} className="text-center p-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {client.charAt(0)}
                  </div>
                  <p className="text-gray-300">{client}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and client satisfaction in Ranchi and
              across Jharkhand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-effect p-12 rounded-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Grow Your Business in Ranchi?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your digital marketing requirements and create a customized solution for your business in
              Jharkhand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300"
              >
                Start Your Project
              </a>
              <a
                href="tel:+919693245941"
                className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Call Now: +91 9693245941
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
