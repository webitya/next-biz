import {
  Business,
  People,
  TrendingUp,
  Support,
  LocationOn,
  Phone,
  Email,
  CheckCircle,
  Star,
  Analytics,
} from "@mui/icons-material"
import AboutScene from "../../components/3d/AboutScene"

export const metadata = {
  title: "About Us - NextBiz.in",
  description:
    "Learn about NextBiz.in - a team of passionate digital marketing professionals based in Ranchi, Jharkhand dedicated to transforming businesses with innovative marketing solutions.",
}

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Star className="w-6 h-6" /> },
    { number: "100+", label: "Happy Clients", icon: <People className="w-6 h-6" /> },
    { number: "5+", label: "Years Experience", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Support className="w-6 h-6" /> },
  ]

  const values = [
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Innovation",
      description: "We stay ahead of digital marketing trends to provide cutting-edge solutions for Ranchi businesses.",
      features: ["Latest Technology", "Creative Strategies", "Future-Ready Solutions"],
    },
    {
      icon: <People className="w-10 h-10" />,
      title: "Client-Centric",
      description:
        "Your success is our priority. We tailor solutions to meet the unique needs of Jharkhand businesses.",
      features: ["Personalized Service", "Dedicated Support", "Custom Solutions"],
    },
    {
      icon: <Star className="w-10 h-10" />,
      title: "Excellence",
      description: "We maintain the highest standards in all our digital marketing campaigns and strategies.",
      features: ["Quality Assurance", "Best Practices", "Proven Results"],
    },
    {
      icon: <Analytics className="w-10 h-10" />,
      title: "Data-Driven",
      description: "We focus on delivering measurable outcomes that drive business growth for our clients in Ranchi.",
      features: ["Performance Analytics", "ROI Tracking", "Continuous Optimization"],
    },
  ]

  const expertise = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Google Ads Expertise",
      description: "Certified Google Ads specialists with proven track record in Ranchi market",
      achievement: "Google Partner Certified",
    },
    {
      icon: <Analytics className="w-8 h-8" />,
      title: "Performance Marketing",
      description: "Data-driven campaigns that maximize ROI for Jharkhand businesses",
      achievement: "120% Average ROI Increase",
    },
    {
      icon: <Support className="w-8 h-8" />,
      title: "Market Analysis",
      description: "Deep understanding of local Ranchi and Jharkhand market dynamics",
      achievement: "Local Market Leaders",
    },
    {
      icon: <Business className="w-8 h-8" />,
      title: "Business Growth",
      description: "Helping businesses scale and expand across Jharkhand region",
      achievement: "500+ Successful Projects",
    },
  ]

  const milestones = [
    {
      year: "2019",
      title: "Founded in Ranchi",
      description: "Started our journey to help local businesses in Jharkhand succeed online",
    },
    {
      year: "2020",
      title: "First 50 Clients",
      description: "Reached our first milestone of 50 satisfied clients across Ranchi",
    },
    {
      year: "2021",
      title: "Google Partner Status",
      description: "Achieved Google Partner certification, validating our expertise",
    },
    {
      year: "2022",
      title: "Expanded Services",
      description: "Added comprehensive digital marketing services for Jharkhand businesses",
    },
    {
      year: "2023",
      title: "100+ Success Stories",
      description: "Celebrated 100+ successful digital transformation projects",
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description: "Recognized as leading digital marketing agency in Ranchi, Jharkhand",
    },
  ]

  return (
    <div className="pt-20 bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-80"></div>
        </div>

        {/* 3D Scene as Background */}
        <div className="absolute top-0 right-0 w-full h-full z-0 opacity-30">
          <AboutScene />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="mb-6 flex items-center justify-center text-blue-600">
              <LocationOn className="w-5 h-5 mr-2" />
              <span className="text-lg font-medium">Based in Ranchi, Serving Jharkhand</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About NextBiz.in
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We are a team of passionate digital marketing professionals based in Ranchi, Jharkhand dedicated to
              transforming businesses with innovative marketing solutions and strategic insights.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/80 p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3 text-blue-600">{stat.icon}</div>
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/80">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in Ranchi, Jharkhand with a vision to help local businesses thrive in the digital landscape,
                NextBiz.in specializes in performance marketing and digital advertising solutions that deliver
                measurable results.
              </p>
              <p className="text-gray-600 mb-6">
                We believe that businesses in Jharkhand deserve access to the same expert digital marketing strategies
                available to companies in metropolitan areas, tailored to the unique needs and challenges of our local
                market.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-600">Local market expertise in Jharkhand</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-600">Certified digital marketing professionals</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-600">Proven track record of success</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/80">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  To empower businesses in Ranchi and across Jharkhand with expert digital marketing solutions that
                  drive sustainable growth and deliver exceptional ROI through data-driven strategies.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/80">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Our Vision
                </h3>
                <p className="text-gray-600">
                  To be the leading digital marketing partner for businesses in Jharkhand seeking to dominate their
                  markets through performance-driven advertising and marketing automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized knowledge and proven experience in digital marketing for Ranchi and Jharkhand businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/80 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-blue-600 mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                <div className="bg-blue-50 px-3 py-1 rounded-full text-blue-600 text-xs font-medium">
                  {item.achievement}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we interact with our clients and partners in Ranchi
              and throughout Jharkhand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/80 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-blue-600 mb-6 flex justify-center">{value.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">{value.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{value.description}</p>
                <div className="space-y-2">
                  {value.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center">
                      <Star className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup in Ranchi to becoming Jharkhand s leading digital marketing agency.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/80">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-800">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-3xl shadow-xl">
            <div className="bg-white p-12 rounded-3xl">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">Ready to Work Together?</h2>
              <p className="text-xl text-gray-600 mb-8">
                We are always excited to take on new challenges and help businesses in Ranchi achieve their goals. Let s
                discuss how we can help transform your business with expert digital marketing.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>+91 9117834352</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <Email className="w-5 h-5 text-blue-600" />
                  <span>contact@nextbiz.in</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <LocationOn className="w-5 h-5 text-blue-600" />
                  <span>Ranchi, Jharkhand</span>
                </div>
              </div>

              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-block shadow-lg"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
