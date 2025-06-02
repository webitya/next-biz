import { Phone, Email, LocationOn, Schedule, WhatsApp, Directions } from "@mui/icons-material"
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
    },
    {
      icon: <WhatsApp className="w-8 h-8" />,
      title: "WhatsApp",
      details: ["+91 9693245941"],
      action: "https://wa.me/919693245941",
    },
    {
      icon: <Email className="w-8 h-8" />,
      title: "Email",
      details: ["nextbiz.in@gmail.com", "contact@nextbiz.in"],
      action: "mailto:contact@nextbiz.in",
    },
    {
      icon: <LocationOn className="w-8 h-8" />,
      title: "Office Address",
      details: ["Main Road, Ranchi", "Jharkhand, India - 834001"],
      action: "https://www.google.com/maps?q=ranchi+jharkhand",
    },
    {
      icon: <Schedule className="w-8 h-8" />,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      action: null,
    },
    {
      icon: <Directions className="w-8 h-8" />,
      title: "Get Directions",
      details: ["Find us on Google Maps"],
      action: "https://www.google.com/maps?q=ranchi+jharkhand",
    },
  ]

  return (
    <div className="pt-20">
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
            department: [
              {
                "@type": "Organization",
                name: "Google Ads Management",
                description: "Expert Google Ads services in Ranchi",
              },
              {
                "@type": "Organization",
                name: "Social Media Marketing",
                description: "Facebook, Instagram and LinkedIn marketing for Jharkhand businesses",
              },
              {
                "@type": "Organization",
                name: "Email Marketing",
                description: "Automated email campaigns for businesses in Ranchi",
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
              Contact <span className="gradient-text">NextBiz.in</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business with expert digital marketing? Visit our office in Ranchi or reach out
              online. We re here to help businesses across Jharkhand succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="glass-effect p-6 rounded-lg text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-purple-400 mb-4 flex justify-center">{info.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-300 text-sm">
                      {info.action ? (
                        <a href={info.action} className="hover:text-purple-400 transition-colors">
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Visit Our Office in Ranchi</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We re conveniently located in the heart of Ranchi, Jharkhand. Stop by for a free consultation about your
              digital marketing needs.
            </p>
          </div>

          <div className="glass-effect p-4 rounded-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 w-full h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117711.91484915413!2d85.27596097937392!3d23.34456554478453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104aa5db7dd%3A0xdc09d49d6899f43e!2sRanchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1685123456789!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NextBiz.in office location in Ranchi, Jharkhand"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="glass-effect p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6">Get a Free Consultation</h2>
              <ContactForm />
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4 gradient-text">Why Choose NextBiz.in in Ranchi?</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Local expertise in Ranchi and Jharkhand markets
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Specialized in performance-driven digital marketing
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Google and Meta certified marketing professionals
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Proven track record with 500+ successful campaigns
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Competitive pricing tailored for Jharkhand businesses
                  </li>
                </ul>
              </div>

              <div className="glass-effect p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3">Areas We Serve in Jharkhand</h4>
                <p className="text-gray-300 text-sm mb-4">
                  While our office is in Ranchi, we provide digital marketing services throughout Jharkhand including:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    <span>Ranchi</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    <span>Jamshedpur</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    <span>Dhanbad</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    <span>Bokaro</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    <span>Hazaribagh</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    <span>Deoghar</span>
                  </div>
                </div>
              </div>

              <div className="glass-effect p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3">Free Digital Marketing Audit</h4>
                <p className="text-gray-300 text-sm">
                  Contact us today to receive a free audit of your current digital marketing efforts. Our Ranchi-based
                  experts will identify opportunities to improve your online presence and ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
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
              <div key={index} className="glass-effect p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-purple-400">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
