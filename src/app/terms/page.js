export const metadata = {
  title: "Terms of Service - NextBiz.in",
  description: "Read the terms and conditions for using NextBiz.in services and website.",
}

export default function TermsPage() {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold mb-8">
          Terms of <span className="gradient-text">Service</span>
        </h1>

        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-gray-300 mb-8">
            <strong>Last updated:</strong> January 1, 2024
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-4">
                By accessing and using NextBiz.in services, you accept and agree to be bound by the terms and provision
                of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
              <p className="text-gray-300 mb-4">
                NextBiz.in provides business technology solutions including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>AI and Machine Learning solutions</li>
                <li>Digital marketing services</li>
                <li>Cybersecurity consulting</li>
                <li>Custom software development</li>
                <li>Cloud solutions and infrastructure</li>
                <li>Business analytics and intelligence</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
              <p className="text-gray-300 mb-4">As a user of our services, you agree to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Not engage in any activity that could harm our systems or other users</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
              <p className="text-gray-300 mb-4">
                Payment terms are specified in individual service agreements. Generally:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Payments are due as specified in the service agreement</li>
                <li>Late payments may incur additional charges</li>
                <li>Refunds are subject to our refund policy</li>
                <li>All prices are subject to applicable taxes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
              <p className="text-gray-300 mb-4">
                All content, features, and functionality of our services are owned by NextBiz.in and are protected by
                copyright, trademark, and other intellectual property laws. Custom solutions developed for clients
                remain the property of the client upon full payment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Confidentiality</h2>
              <p className="text-gray-300 mb-4">
                We maintain strict confidentiality regarding client information and business data. Both parties agree to
                protect confidential information shared during the course of our business relationship.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-300 mb-4">
                NextBiz.in shall not be liable for any indirect, incidental, special, consequential, or punitive
                damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Service Availability</h2>
              <p className="text-gray-300 mb-4">
                While we strive to maintain high availability, we do not guarantee uninterrupted access to our services.
                Scheduled maintenance and unforeseen circumstances may cause temporary service interruptions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Termination</h2>
              <p className="text-gray-300 mb-4">
                Either party may terminate services with appropriate notice as specified in individual service
                agreements. Upon termination, all obligations cease except those that by their nature should survive
                termination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Governing Law</h2>
              <p className="text-gray-300 mb-4">
                These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall
                be resolved through appropriate legal channels in Indian jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Changes to Terms</h2>
              <p className="text-gray-300 mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                posting. Continued use of our services constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Contact Information</h2>
              <p className="text-gray-300 mb-4">For questions about these terms of service, please contact us:</p>
              <div className="glass-effect p-6 rounded-lg">
                <ul className="text-gray-300 space-y-2">
                  <li>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:contact@nextbiz.in" className="text-purple-400 hover:text-purple-300">
                      contact@nextbiz.in
                    </a>
                  </li>
                  <li>
                    <strong>Phone:</strong>{" "}
                    <a href="tel:+919263512763" className="text-purple-400 hover:text-purple-300">
                      +91 9263512763
                    </a>
                  </li>
                  <li>
                    <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM IST
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
