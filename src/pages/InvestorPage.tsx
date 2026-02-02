// src/pages/InvestorPage.tsx
import React from 'react';

function InvestorPage() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-extrabold text-green-800 mb-6 leading-tight">
            A Platform Opportunity in Metabolic Disease
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Insulin, GLP-1, and beyond—without injections.
          </p>
        </div>
      </section>

      {/* Market Drivers Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Market Drivers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">Peptide therapies dominate diabetes and obesity care.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">Injection burden limits adoption and adherence.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">Combination therapy is becoming standard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Insu Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Insu Therapeutics?</h2>
          <div className="grid md:grid-cols-1 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mr-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Focused on insulin + GLP-1 relevance</h3>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Buccal route offers speed and convenience</h3>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mr-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Platform extensibility beyond one asset</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Creation Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Value Creation Roadmap</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-green-600"></div>
            <div className="space-y-12">
              <div className="flex items-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">1</div>
                <div className="ml-8 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Lead asset: Buccal mealtime insulin</h3>
                </div>
              </div>
              <div className="flex items-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">2</div>
                <div className="ml-8 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Platform expansion: GLP-1 peptides</h3>
                </div>
              </div>
              <div className="flex items-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">3</div>
                <div className="ml-8 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Long-term: multi-peptide metabolic therapies</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InvestorPage;
