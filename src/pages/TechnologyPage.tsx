// src/pages/TechnologyPage.tsx
import React from 'react';

function TechnologyPage() {
  return (
    <div className="space-y-20">
      {/* Intro Section */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-extrabold text-teal-800 mb-6 leading-tight">
            Buccal Delivery Platform for Peptide Therapeutics
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Our proprietary platform enables systemic delivery of peptide drugs through the buccal mucosa, bypassing gastrointestinal degradation and first-pass metabolism.
          </p>
        </div>
      </section>

      {/* Why Buccal Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Buccal Delivery?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Highly vascularized absorption site</h3>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Rapid systemic exposure</h3>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Reduced enzymatic degradation</h3>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Suitable for time-sensitive peptide therapies</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Architecture Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Platform Architecture (Conceptual)</h2>
          <div className="space-y-12">
            <div className="flex items-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-8 shadow-lg">1</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Stabilized Peptide Phase</h3>
                <p className="text-lg text-gray-600 leading-relaxed">Peptide stability maintained during processing and storage.</p>
              </div>
            </div>
            <div className="flex items-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-8 shadow-lg">2</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Mucoadhesive Matrix</h3>
                <p className="text-lg text-gray-600 leading-relaxed">Temporary adhesion to the buccal mucosa ensures close contact.</p>
              </div>
            </div>
            <div className="flex items-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-8 shadow-lg">3</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Permeation-Enabled Transport</h3>
                <p className="text-lg text-gray-600 leading-relaxed">Formulation optimized for mucosal transport.</p>
              </div>
            </div>
            <div className="flex items-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-8 shadow-lg">4</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Systemic Uptake</h3>
                <p className="text-lg text-gray-600 leading-relaxed">Rapid absorption into systemic circulation.</p>
              </div>
            </div>
          </div>
          {/* Illustration placeholder */}
          <div className="mt-16 text-center">
            <div className="w-full h-80 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl mx-auto shadow-lg flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <p className="text-gray-500 text-lg">Schematic illustration of the platform architecture</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dosage Forms Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Dosage Forms Under Development</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Buccal tablets</h3>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Thin films / wafers</h3>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-8 text-lg">Selection will be guided by clinical performance and patient usability.</p>
        </div>
      </section>

      {/* Translation Section */}
      <section className="py-20 bg-gradient-to-r from-teal-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Designed for Clinical Translation</h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Formulation and process development consider scalability, dose reproducibility, and regulatory expectations from the outset.
          </p>
        </div>
      </section>
    </div>
  );
}

export default TechnologyPage;
