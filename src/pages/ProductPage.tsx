import React, { useState } from 'react';

function ProductPage() {
  const [expandedBox, setExpandedBox] = useState<string | null>(null);

  const toggleBox = (boxId: string) => {
    setExpandedBox(expandedBox === boxId ? null : boxId);
  };

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-extrabold text-teal-800 mb-6 leading-tight">
            Our Products
          </h1>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Discover our innovative buccal delivery platform for peptide therapeutics.
          </p>
        </div>
      </section>

      {/* Buccal Delivery Box */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Buccal Delivery Technology</h2>
          <div className="grid md:grid-cols-1 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div
                className="cursor-pointer"
                onClick={() => toggleBox('buccal')}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Buccal Insulin Delivery</h3>
                  <svg
                    className={`w-6 h-6 text-teal-600 transform transition-transform ${expandedBox === 'buccal' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our lead product enables rapid insulin absorption through the mucosal lining of the cheek, offering fast action without needles.
                </p>
              </div>
              {expandedBox === 'buccal' && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">How It Works</h4>
                      <p className="text-gray-700 leading-relaxed">
                        The buccal mucosa provides a highly vascularized absorption site, enabling rapid systemic exposure while bypassing gastrointestinal degradation and first-pass metabolism.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Benefits</h4>
                      <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                        <li>Needle-free administration</li>
                        <li>Rapid onset of action</li>
                        <li>Improved patient compliance</li>
                        <li>Reduced enzymatic degradation</li>
                        <li>Suitable for time-sensitive peptide therapies</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Development Status</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Currently in preclinical development, with formulation optimization and pharmacokinetic studies underway.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline Overview */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Product Pipeline</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-teal-500">
              <h3 className="text-2xl font-bold mb-4 text-teal-700">Mealtime Insulin</h3>
              <p className="text-gray-600 leading-relaxed">Focus: rapid onset buccal insulin delivery for prandial glucose control.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">GLP-1 Peptides</h3>
              <p className="text-gray-600 leading-relaxed">Exploration of buccal GLP-1 and GLP-1-derived therapeutics for metabolic disease.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold mb-4 text-green-700">Combination Therapies</h3>
              <p className="text-gray-600 leading-relaxed">Future insulin + GLP-1 peptide strategies for comprehensive diabetes management.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
