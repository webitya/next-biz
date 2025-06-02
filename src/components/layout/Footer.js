import Link from "next/link"
import { Phone, Email, Facebook, Twitter, LinkedIn, Instagram, LocationOn, WhatsApp } from "@mui/icons-material"

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-gray-800 font-bold text-xl">NextBiz.in</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Ranchi s leading digital marketing agency. We specialize in Performance Marketing, Google Ads, Meta Ads,
              LinkedIn Ads, and Email Marketing for businesses across Jharkhand.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="w-5 h-5 text-blue-600" />
                <span>+91 9693245941</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <WhatsApp className="w-5 h-5 text-blue-600" />
                <a href="https://wa.me/919693245941" className="hover:text-blue-600 transition-colors">
                  WhatsApp Us
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Email className="w-5 h-5 text-blue-600" />
                <span>nextbiz.in@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Email className="w-5 h-5 text-blue-600" />
                <span>contact@nextbiz.in</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <LocationOn className="w-5 h-5 text-blue-600" />
                <span>Main Road, Ranchi, Jharkhand, India - 834001</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-600">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-4 text-blue-600">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Google Ads Management
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Facebook & Instagram Ads
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">
                  LinkedIn Marketing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Email Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas Served & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-600">Areas Served</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Ranchi</li>
              <li className="text-gray-600">Jamshedpur</li>
              <li className="text-gray-600">Dhanbad</li>
              <li className="text-gray-600">Bokaro</li>
              <li className="text-gray-600">Hazaribagh</li>
              <li className="text-gray-600">All of Jharkhand</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-4 text-blue-600">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-blue-600">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <LinkedIn className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; 2024 NextBiz.in - Digital Marketing Agency in Ranchi, Jharkhand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
