// import { Business, People, Innovation, Award } from "@mui/icons-material"
import { Business, People, EmojiEvents, MilitaryTech } from "@mui/icons-material";

import AboutScene from "../../components/3d/AboutScene"

export const metadata = {
  title: "About Us - NextBiz.in",
  description:
    "Learn about NextBiz.in - a team of passionate digital marketing professionals based in Ranchi, Jharkhand dedicated to transforming businesses with innovative marketing solutions.",
}

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "100+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ]

  const values = [
    {
      icon: <EmojiEvents className="w-8 h-8" />,
      title: "Innovation",
      description: "We stay ahead of digital marketing trends to provide cutting-edge solutions for Ranchi businesses.",
    },
    {
      icon: <People className="w-8 h-8" />,
      title: "Client-Centric",
      description:
        "Your success is our priority. We tailor solutions to meet the unique needs of Jharkhand businesses.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We maintain the highest standards in all our digital marketing campaigns and strategies.",
    },
    {
      icon: <Business className="w-8 h-8" />,
      title: "Results-Driven",
      description: "We focus on delivering measurable outcomes that drive business growth for our clients in Ranchi.",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About <span className="gradient-text">NextBiz.in</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a team of passionate digital marketing professionals based in Ranchi, Jharkhand dedicated to
              transforming businesses with innovative marketing solutions and strategic insights.
            </p>
          </div>

          {/* 3D Scene */}
          <AboutScene />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-300 mb-6">
                Founded in Ranchi, Jharkhand with a vision to help local businesses thrive in the digital landscape,
                NextBiz.in specializes in performance marketing and digital advertising solutions that deliver
                measurable results.
              </p>
              <p className="text-gray-300 mb-6">
                We believe that businesses in Jharkhand deserve access to the same expert digital marketing strategies
                available to companies in metropolitan areas, tailored to the unique needs and challenges of our local
                market.
              </p>
              <p className="text-gray-300">
                Our team combines deep expertise in Google Ads, Meta advertising, LinkedIn marketing, and email
                automation to deliver campaigns that not only meet current goals but also scale for future growth,
                helping Ranchi businesses compete effectively in the digital space.
              </p>
            </div>
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Our Mission</h3>
              <p className="text-gray-300 mb-6">
                To empower businesses in Ranchi and across Jharkhand with expert digital marketing solutions that drive
                sustainable growth and deliver exceptional ROI through data-driven strategies.
              </p>
              <h3 className="text-2xl font-bold mb-4 gradient-text">Our Vision</h3>
              <p className="text-gray-300">
                To be the leading digital marketing partner for businesses in Jharkhand seeking to dominate their
                markets through performance-driven advertising and marketing automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we interact with our clients and partners in Ranchi
              and throughout Jharkhand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass-effect p-6 rounded-lg text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-purple-400 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Our diverse team of experts brings together years of experience in digital marketing, business strategy, and
            technology to serve businesses in Ranchi and across Jharkhand.
          </p>

          <div className="glass-effect p-12 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Ready to Work Together?</h3>
            <p className="text-gray-300 mb-8">
              We're always excited to take on new challenges and help businesses in Ranchi achieve their goals. Let's
              discuss how we can help transform your business with expert digital marketing.
            </p>
            <a
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 inline-block"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
