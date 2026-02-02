import React from 'react';

function ContactUsPage() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-extrabold text-teal-800 mb-6 leading-tight">
            Contact Us
          </h1>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Get in touch with Insu Therapeutics. We're here to answer your questions and discuss opportunities.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">Reach Out</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@insutherapeutics.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">Vancouver, Canada</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in Partnership?</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Whether you're a clinician, investor, or potential collaborator, we'd love to hear from you. Reach out to discuss how we can work together to advance diabetes care.
              </p>
              <button className="px-8 py-4 bg-teal-600 text-white rounded-xl hover:bg-teal-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Find Us</h2>
          <div className="w-full h-80 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl mx-auto shadow-lg flex items-center justify-center">
            <div className="text-center">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <p className="text-gray-500 text-lg">Interactive map of Vancouver location</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUsPage;
