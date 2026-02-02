// src/pages/RegulatoryPage.tsx
import React from 'react';

function RegulatoryPage() {
  return (
    <div className="space-y-16">
      {/* Regulatory Philosophy Section */}
      <section className="bg-yellow-50 py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold text-yellow-700 mb-6">
            Regulatory-Aligned Development
          </h1>
          <p className="text-lg text-gray-700">
            Programs are designed to align with FDA and Health Canada expectations for peptide drug products and novel delivery systems.
          </p>
        </div>
      </section>

      {/* Clinical Focus Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Clinical Focus</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Pharmacokinetics & bioavailability</li>
            <li>Onset of action</li>
            <li>Buccal safety & tolerability</li>
          </ul>
        </div>
      </section>

      {/* Pathway Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Development Pathway</h2>
          <p className="text-gray-600">
            Insu Therapeutics is developing regulated drug products intended to follow established IND / CTA pathways.
          </p>
        </div>
      </section>
    </div>
  );
}

export default RegulatoryPage;
