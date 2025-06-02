export const metadata = {
  title: "Privacy Policy - NextBiz.in",
  description: "Learn about how NextBiz.in collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold mb-8">
          Privacy <span className="gradient-text">Policy</span>
        </h1>

        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-gray-300 mb-8">
            <strong>Last updated:</strong> January 1, 2024
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p className="text-gray-300 mb-4">
                We collect information you provide directly to us, such as when you create an account, contact us, or
                use our services. This may include:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Name and contact information (email address, phone number)</li>
                <li>Business information and requirements</li>
                <li>Communication preferences</li>
                <li>Technical information about your systems and requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Communicate with you about products, services, and events</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing and Disclosure</h2>
              <p className="text-gray-300 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except as described in this policy:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>With your consent or at your direction</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
                <li>With trusted service providers who assist in our operations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
              <p className="text-gray-300 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Retention</h2>
              <p className="text-gray-300 mb-4">
                We retain your personal information for as long as necessary to provide our services and fulfill the
                purposes outlined in this policy, unless a longer retention period is required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
              <p className="text-gray-300 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Request data portability</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Tracking</h2>
              <p className="text-gray-300 mb-4">
                We use cookies and similar tracking technologies to collect information about your browsing activities
                and to provide personalized content and advertisements. You can control cookies through your browser
                settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Third-Party Links</h2>
              <p className="text-gray-300 mb-4">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices
                or content of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-300 mb-4">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the
                new policy on this page and updating the  Last updated date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about this privacy policy or our data practices, please contact us:
              </p>
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
                    <strong>Address:</strong> India
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
