import { Phone, Email, LocationOn, Schedule, WhatsApp, Directions, Business, Support, Star } from "@mui/icons-material"
import ContactForm from "../../components/ui/ContactForm"

export const metadata = {
  title: "Contact Ranchi's Top Digital Marketing Agency | NextBiz.in",
  description:
    "Get in touch with NextBiz.in, Ranchi's leading digital marketing agency. Visit our office in Ranchi, Jharkhand or call us at +91 9693245941 for a free consultation.",
  keywords: [
    "contact digital marketing agency Ranchi",
    "NextBiz contact Jharkhand",
    "digital marketing consultation Ranchi",
    "marketing agency phone number Jharkhand",
    "Google Ads expert Ranchi",
    "Facebook ads agency contact Jharkhand",
    "visit marketing agency Ranchi",
  ],
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone",
      details: ["+91 9693245941"],
      action: "tel:+919693245941",
      color: "blue",
    },
    {
      icon: <WhatsApp className="w-8 h-8" />,
      title: "WhatsApp",
      details: ["+91 9693245941"],
      action: "https://wa.me/919693245941",
      color: "green",
    },
    {
      icon: <Email className="w-8 h-8" />,
      title: "Email",
      details: ["nextbiz.in@gmail.com", "contact@nextbiz.in"],
      action: "mailto:contact@nextbiz.in",
      color: "purple",
    },
    {
      icon: <LocationOn className="w-8 h-8" />,
      title: "Office Address",
      details: ["Main Road, Ranchi", "Jharkhand, India - 834001"],
      action: "https://www.google.com/maps?q=ranchi+jharkhand",
      color: "red",
    },
    {
      icon: <Schedule className="w-8 h-8" />,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      action: null,
      color: "indigo",
    },
    {
      icon: <Directions className="w-8 h-8" />,
      title: "Get Directions",
      details: ["Find us on Google Maps"],
      action: "https://www.google.com/maps?q=ranchi+jharkhand",
      color: "teal",
    },
  ]

  const services = [
    {
      icon: <Business className="w-6 h-6" />,
      title: "Google Ads Management",
      description: "Expert campaign management for maximum ROI",
    },
    {
      icon: <Support className="w-6 h-6" />,
      title: "Meta Advertising",
      description: "Facebook & Instagram marketing solutions",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "LinkedIn Marketing",
      description: "B2B lead generation and networking",
    },
  ]

  return (
    <div className="pt-20 bg-gradient-to-b from-blue-50 via-white to-gray-50 min-h-screen">
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "NextBiz.in - Digital Marketing Agency Ranchi",
            image: "https://nextbiz.in/logo.png",
            "@id": "https://nextbiz.in",
            url: "https://nextbiz.in",
            telephone: "+91-9693245941",
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
          }),
        }}
      />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <LocationOn className="w-4 h-4 mr-2" />
              Ranchi, Jharkhand
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get in Touch with NextBiz.in
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with expert digital marketing? Visit our office in Ranchi or reach out
              online. We are here to help businesses across Jharkhand succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const colorMap = {
                blue: "from-blue-500 to-blue-600",
                green: "from-green-500 to-green-600",
                purple: "from-purple-500 to-purple-600",
                red: "from-red-500 to-red-600",
                indigo: "from-indigo-500 to-indigo-600",
                teal: "from-teal-500 to-teal-600",
              }

              const gradient = colorMap[info.color] || "from-blue-500 to-blue-600"

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 group"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">
                        {info.action ? (
                          <a href={info.action} className="hover:text-blue-600 transition-colors">
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Why Choose NextBiz.in in Ranchi?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-600">Local expertise in Ranchi and Jharkhand markets</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-600">Specialized in performance-driven digital marketing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-600">Google and Meta certified marketing professionals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-600">Proven track record with 500+ successful campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-600">Competitive pricing tailored for Jharkhand businesses</span>
                  </li>
                </ul>
              </div>

              {/* Our Services */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <h4 className="text-xl font-semibold mb-6 text-gray-800">Our Core Services</h4>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                    >
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
                        {service.icon}
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-1">{service.title}</h5>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Areas Served */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <h4 className="text-xl font-semibold mb-6 text-gray-800">Areas We Serve in Jharkhand</h4>
                <p className="text-gray-600 text-sm mb-4">
                  While our office is in Ranchi, we provide digital marketing services throughout Jharkhand including:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh", "Deoghar"].map((city, index) => (
                    <div key={index} className="flex items-center p-2 bg-blue-50 rounded-lg">
                      <LocationOn className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-gray-700 text-sm font-medium">{city}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Free Audit CTA */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h4 className="text-xl font-semibold mb-4">Free Digital Marketing Audit</h4>
                <p className="text-blue-100 mb-6 text-sm">
                  Contact us today to receive a free audit of your current digital marketing efforts. Our Ranchi-based
                  experts will identify opportunities to improve your online presence and ROI.
                </p>
                <a
                  href="tel:+919693245941"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Free Audit
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Visit Our Office in Ranchi</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We are conveniently located in the heart of Ranchi, Jharkhand. Stop by for a free consultation about your
              digital marketing needs.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 w-full h-96 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117711.91484915413!2d85.27596097937392!3d23.34456554478453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104aa5db7dd%3A0xdc09d49d6899f43e!2sRanchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1685123456789!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NextBiz.in office location in Ranchi, Jharkhand"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: "Do you work with businesses outside of Ranchi?",
                answer:
                  "Yes, while we're based in Ranchi, we work with clients across Jharkhand including Jamshedpur, Dhanbad, Bokaro, Hazaribagh, and other cities. Our digital marketing expertise allows us to serve clients throughout the state, though we have specialized knowledge of the Ranchi market.",
              },
              {
                question: "What makes your digital marketing services different from other agencies in Ranchi?",
                answer:
                  "As a local agency in Ranchi, we understand the unique challenges and opportunities in the Jharkhand market. We focus exclusively on performance marketing with measurable results, combining this performance focus with deep local market knowledge that national agencies simply don't have.",
              },
              {
                question: "What is your minimum budget requirement for businesses in Jharkhand?",
                answer:
                  "Our service packages are designed specifically for the Jharkhand market, starting at ₹15,000 for email marketing campaigns, with comprehensive multi-channel campaigns typically starting at ₹50,000. We tailor our solutions to businesses of all sizes in Ranchi and across Jharkhand.",
              },
              {
                question: "Can I visit your office in Ranchi for a consultation?",
                answer:
                  "We welcome in-person consultations at our Ranchi office. Being locally based in Jharkhand allows us to provide face-to-face meetings that build stronger relationships with our clients. Please call us at +91 9693245941 to schedule an appointment.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <h3 className="text-lg font-semibold mb-3 text-blue-600">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
