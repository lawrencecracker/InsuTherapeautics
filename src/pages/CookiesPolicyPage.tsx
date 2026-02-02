import React from 'react';

function CookiesPolicyPage() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-extrabold text-teal-800 mb-6 leading-tight">
            Cookies Policy
          </h1>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Learn about how we use cookies to enhance your experience on our website.
          </p>
        </div>
      </section>

      {/* Cookies Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Cookies</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Cookies are small text files that are stored on your computer or mobile device when you visit our website. They allow us to remember your preferences and improve your browsing experience.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Cookies</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mb-6 space-y-2">
              <li>To ensure the website functions properly</li>
              <li>To remember your cookie preferences</li>
              <li>To analyze website traffic and usage patterns</li>
              <li>To improve our website's performance and user experience</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                <p className="text-gray-700 leading-relaxed">These cookies are necessary for the website to function and cannot be switched off in our systems.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                <p className="text-gray-700 leading-relaxed">These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Managing Cookies</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              You can control and manage cookies in various ways. Most web browsers allow you to control cookies through their settings. You can set your browser to block or alert you about cookies, but please note that some parts of our website may not work properly without cookies.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Cookies</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We may use third-party services that place cookies on your device. These services include analytics providers that help us understand how our website is used.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We may update this Cookies Policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CookiesPolicyPage;
