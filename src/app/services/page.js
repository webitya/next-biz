import {
  TrendingUp,
  Analytics,
  Business,
  Email,
  Facebook,
  LinkedIn,
  CheckCircle,
  Star,
  Support,
  LocationOn,
} from "@mui/icons-material"
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
      color: "blue",
    },
    {
      icon: <Analytics className="w-12 h-12" />,
      title: "Google Ads Management",
      description:
        "Expert Google Ads campaign management including Search, Display, Shopping, and YouTube ads to maximize your online visibility in Ranchi and throughout Jharkhand.",
      features: ["Local Search Campaigns", "Display Advertising", "Shopping Ads", "YouTube Marketing"],
      price: "Starting from ₹20,000",
      color: "purple",
    },
    {
      icon: <Facebook className="w-12 h-12" />,
      title: "Meta Ads (Facebook & Instagram)",
      description:
        "Strategic Meta advertising campaigns across Facebook and Instagram to reach your target audience in Ranchi and drive conversions for Jharkhand businesses.",
      features: ["Facebook Ads", "Instagram Marketing", "Local Audience Targeting", "Creative Optimization"],
      price: "Starting from ₹18,000",
      color: "indigo",
    },
    {
      icon: <LinkedIn className="w-12 h-12" />,
      title: "LinkedIn Ads",
      description:
        "Professional B2B marketing campaigns on LinkedIn to connect with decision-makers and generate high-quality leads for businesses in Ranchi and Jharkhand.",
      features: ["Sponsored Content", "Lead Generation", "B2B Targeting", "Professional Networking"],
      price: "Starting from ₹22,000",
      color: "cyan",
    },
    {
      icon: <Email className="w-12 h-12" />,
      title: "Email Marketing",
      description:
        "Comprehensive email marketing campaigns that nurture leads, retain customers, and drive repeat business for companies throughout Jharkhand.",
      features: ["Campaign Design", "Automation Setup", "List Management", "Performance Tracking"],
      price: "Starting from ₹15,000",
      color: "teal",
    },
    {
      icon: <Business className="w-12 h-12" />,
      title: "Local Business Marketing",
      description:
        "Specialized marketing solutions for local businesses in Ranchi and Jharkhand to increase visibility, foot traffic, and sales in your community.",
      features: ["Google Business Profile", "Local SEO", "Geo-Targeted Ads", "Community Engagement"],
      price: "Starting from ₹20,000",
      color: "sky",
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
    <div className="pt-20 bg-gradient-to-b from-blue-50 to-white">
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
      <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        </div>

        {/* 3D Scene as Background */}
        <div className="absolute top-0 right-0 w-full h-full z-0 opacity-40">
          <ServicesScene />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <div className="mb-6 flex items-center justify-center text-blue-600">
              <LocationOn className="w-5 h-5 mr-2" />
              <span className="text-lg font-medium">Ranchi, Jharkhand</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Marketing Services in Ranchi
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed to help businesses in Ranchi and across Jharkhand
              achieve measurable growth and ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
            Our Digital Marketing Services in{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Jharkhand
            </span>
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Tailored solutions to help your business thrive in the digital landscape with strategies specifically
            designed for the Jharkhand market.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const gradientMap = {
                blue: "from-blue-500 to-blue-600",
                purple: "from-purple-500 to-purple-600",
                indigo: "from-indigo-500 to-indigo-600",
                cyan: "from-cyan-500 to-cyan-600",
                teal: "from-teal-500 to-teal-600",
                sky: "from-sky-500 to-sky-600",
              }

              const gradient = gradientMap[service.color] || "from-blue-500 to-blue-600"

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className={`bg-gradient-to-r ${gradient} p-8 text-white`}>
                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-white/90 text-sm">{service.description}</p>
                  </div>

                  <div className="p-6">
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-700 flex items-center">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="border-t border-gray-200 pt-6 flex items-center justify-between">
                      <div className="text-lg font-semibold text-blue-600">{service.price}</div>
                      <a
                        href="/contact"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm"
                      >
                        Get Quote
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and client satisfaction in Ranchi and
              across Jharkhand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div
                key={index}
                className="text-center bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 text-white">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Clients Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Trusted by Businesses Across{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Jharkhand
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have helped hundreds of businesses in Ranchi and throughout Jharkhand achieve their digital marketing
              goals.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {localClients.map((client, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 text-white">
                    {client.charAt(0)}
                  </div>
                  <p className="text-gray-700 font-medium">{client}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Why Choose NextBiz for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Marketing
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We bring unique advantages to businesses in Ranchi and across Jharkhand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-blue-600 mb-4 flex justify-center">
                <Star className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Local Market Expertise</h3>
              <p className="text-gray-600 text-center mb-6">
                We understand Ranchi s unique market dynamics, consumer behavior, and competitive landscape. Our
                strategies are tailored specifically for success in Jharkhand.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Deep local market insights</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Jharkhand-specific strategies</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-blue-600 mb-4 flex justify-center">
                <Analytics className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Data-Driven Results</h3>
              <p className="text-gray-600 text-center mb-6">
                We focus on measurable outcomes and ROI, ensuring every marketing rupee contributes directly to your
                business growth in Ranchi and throughout Jharkhand.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Performance tracking</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Transparent reporting</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-blue-600 mb-4 flex justify-center">
                <Support className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Dedicated Support</h3>
              <p className="text-gray-600 text-center mb-6">
                As a Ranchi-based agency, we provide personalized service and face-to-face consultations that national
                agencies simply can not match.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Dedicated account manager</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Regular strategy meetings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-3xl shadow-xl">
            <div className="bg-white p-12 rounded-3xl">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
                Ready to Grow Your Business in Ranchi?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Let s discuss your digital marketing requirements and create a customized solution for your business in
                Jharkhand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md"
                >
                  Start Your Project
                </a>
                <a
                  href="tel:+919693245941"
                  className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-md"
                >
                  Call Now: +91 9693245941
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
