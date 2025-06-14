import Link from "next/link"
import {
  Phone,
  Email,
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  LocationOn,
  WhatsApp,
} from "@mui/icons-material"

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200" aria-label="Site Footer">
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
              <strong>NextBiz.in</strong> is a leading digital marketing agency based in Ranchi, Jharkhand.
              We specialize in Google Ads, Meta Ads, LinkedIn Marketing, and Email Campaigns to grow businesses across Jharkhand.
            </p>

            <address className="not-italic space-y-2 text-gray-600 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="text-blue-600 w-5 h-5" />
                <span>+91 9693245941</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="text-blue-600 w-5 h-5" />
                <span>+91 9263512763</span>
              </div>

              <div className="flex items-center space-x-2">
                <WhatsApp className="text-blue-600 w-5 h-5" />
                <a
                  href="https://wa.me/919693245941"
                  className="hover:text-blue-600 transition-colors"
                  title="WhatsApp NextBiz"
                >
                  Chat on WhatsApp (9693...)
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <WhatsApp className="text-blue-600 w-5 h-5" />
                <a
                  href="https://wa.me/919263512763"
                  className="hover:text-blue-600 transition-colors"
                  title="WhatsApp NextBiz"
                >
                  Chat on WhatsApp (9263...)
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <Email className="text-blue-600 w-5 h-5" />
                <a href="mailto:contact@nextbiz.in" className="hover:text-blue-600 transition-colors">
                  contact@nextbiz.in
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Email className="text-blue-600 w-5 h-5" />
                <a href="mailto:indianextbiz@gmail.com" className="hover:text-blue-600 transition-colors">
                  indianextbiz@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <LocationOn className="text-blue-600 w-5 h-5" />
                <span>Harmu, Ranchi, Jharkhand</span>
              </div>
              <div className="flex items-center space-x-2">
                <LocationOn className="text-blue-600 w-5 h-5" />
                <span>Daru, Hazaribagh, Jharkhand</span>
              </div>
            </address>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick Links">
            <h3 className="text-lg font-semibold mb-4 text-blue-600">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-blue-600">Our Services</Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-blue-600">Latest Blog Posts</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact Us</Link>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-4 text-blue-600">Top Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-600 hover:text-blue-600">Google Ads Management</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-blue-600">Meta (Facebook & Instagram) Ads</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-blue-600">LinkedIn B2B Marketing</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-blue-600">Email Automation</Link>
              </li>
            </ul>
          </nav>

          {/* Areas & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-600">Areas We Serve</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Ranchi</li>
              <li>Jamshedpur</li>
              <li>Dhanbad</li>
              <li>Bokaro</li>
              <li>Hazaribagh</li>
              <li>Entire Jharkhand</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-4 text-blue-600">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-600 hover:text-blue-600">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-blue-600">Terms & Conditions</Link>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-blue-600">Follow NextBiz</h4>
              <div className="flex space-x-3">
                <a href="#" aria-label="Facebook" title="Facebook" className="text-gray-600 hover:text-blue-600">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" aria-label="Twitter" title="Twitter" className="text-gray-600 hover:text-blue-600">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" aria-label="LinkedIn" title="LinkedIn" className="text-gray-600 hover:text-blue-600">
                  <LinkedIn className="w-5 h-5" />
                </a>
                <a href="#" aria-label="Instagram" title="Instagram" className="text-gray-600 hover:text-blue-600">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} <strong>NextBiz.in</strong> - Performance Marketing Agency in Jharkhand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
