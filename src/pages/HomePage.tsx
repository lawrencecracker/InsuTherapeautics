// src/pages/HomePage.tsx
import React, { useState } from 'react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

function HomePage({ onNavigate }: HomePageProps) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const closeModal = () => setSelectedItem(null);

  const getItemDetails = (item: string) => {
    const details = {
      'buccal-delivery': {
        title: 'Buccal Delivery',
        content: 'Our proprietary buccal delivery system enables systemic absorption of peptide therapeutics through the inner cheek mucosa. This approach bypasses gastrointestinal degradation and first-pass metabolism, providing rapid and reliable drug delivery. The buccal mucosa is highly vascularized, allowing for quick systemic exposure while avoiding the enzymatic breakdown that occurs in the digestive tract.'
      },
      'peptide-focused': {
        title: 'Peptide-Focused Design',
        content: 'Our formulation architecture is specifically optimized for insulin, GLP-1, and other metabolic peptides. We employ advanced stabilization techniques to maintain peptide integrity during processing, storage, and delivery. This peptide-centric approach ensures maximum bioavailability and therapeutic efficacy across our product pipeline.'
      },
      'patient-centric': {
        title: 'Patient-Centric Use',
        content: 'We prioritize patient experience by developing needle-free dosage forms that are discreet, easy to use, and suitable for daily administration. Our buccal delivery system eliminates the pain and anxiety associated with injections, improving treatment adherence and quality of life for people with diabetes and metabolic disorders.'
      },
      'mealtime-insulin': {
        title: 'Mealtime Insulin',
        content: 'Our lead program focuses on developing rapid-onset buccal insulin formulations for mealtime glucose control. This needle-free alternative provides fast-acting insulin delivery that mimics the natural physiological response to meals. Clinical studies show comparable pharmacokinetic profiles to injectable insulin with improved patient acceptance and adherence.'
      },
      'glp1-peptides': {
        title: 'GLP-1 Peptides',
        content: 'We are exploring buccal delivery of GLP-1 receptor agonists and GLP-1-derived therapeutics. These medications help regulate blood sugar, reduce appetite, and support weight management. Our buccal formulations offer improved stability and bioavailability compared to traditional oral GLP-1 medications, potentially expanding treatment options for metabolic disease management.'
      },
      'combination-therapies': {
        title: 'Combination Therapies',
        content: 'Future development includes combination products that deliver insulin alongside GLP-1 peptides through our buccal platform. These fixed-dose combinations could provide comprehensive metabolic control with simplified dosing regimens. Our platform technology enables co-formulation of multiple peptides while maintaining their individual therapeutic profiles.'
      }
    };
    return details[item as keyof typeof details] || null;
  };

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-extrabold text-teal-800 mb-6 leading-tight">
            Transforming Diabetes Care with Buccal Insulin Delivery
          </h1>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            At Insu Therapeutics, we are redefining how people with diabetes access and manage insulin. Our mission is to deliver a safe, effective, and needle-free alternative to traditional injectable insulin — improving quality of life for millions worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button
              onClick={() => onNavigate('technology')}
              className="px-8 py-4 bg-teal-600 text-white rounded-xl hover:bg-teal-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
            >
              Explore Our Technology
            </button>
            <button
              onClick={() => onNavigate('investor')}
              className="px-8 py-4 bg-white text-teal-600 border-2 border-teal-600 rounded-xl hover:bg-teal-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
            >
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* Why Insu Therapeutics Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">Why Insu Therapeutics?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Conventional insulin injections can be painful, intimidating, and act as a barrier to optimal diabetes management. We believe there's a better way.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
              <p className="text-lg text-gray-700 leading-relaxed">
                Using cutting-edge buccal delivery technology, our lead product enables rapid insulin absorption through the mucosal lining of the cheek — offering fast action without needles. This innovation was pioneered from leading research at the University of British Columbia and advances decades of work in oral peptide delivery systems with improved stability and efficacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer" onClick={() => setSelectedItem('buccal-delivery')}>
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full mx-auto flex items-center justify-center shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Buccal Delivery</h3>
              <p className="text-gray-600 leading-relaxed">Absorption through the inner cheek enables systemic exposure while bypassing gastrointestinal degradation.</p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer" onClick={() => setSelectedItem('peptide-focused')}>
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto flex items-center justify-center shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Peptide-Focused Design</h3>
              <p className="text-gray-600 leading-relaxed">Formulation architecture optimized specifically for insulin, GLP-1, and metabolic peptides.</p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer" onClick={() => setSelectedItem('patient-centric')}>
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto flex items-center justify-center shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Patient-Centric Use</h3>
              <p className="text-gray-600 leading-relaxed">Needle-free dosage forms designed for daily, discreet use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Science You Can Trust Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Science You Can Trust</h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            We leverage robust, peer-reviewed scientific foundations and a deep understanding of mucosal drug delivery to create formulations that are both efficacious and practical. Our approach balances biopharmaceutics, patient usability, and scalable manufacturing to deliver real clinical value.
          </p>
        </div>
      </section>

      {/* Pipeline Snapshot Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">What We Are Building</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-teal-500 cursor-pointer" onClick={() => setSelectedItem('mealtime-insulin')}>
              <h3 className="text-2xl font-bold mb-4 text-teal-700">Mealtime Insulin</h3>
              <p className="text-gray-600 leading-relaxed">Focus: rapid onset buccal insulin delivery</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-blue-500 cursor-pointer" onClick={() => setSelectedItem('glp1-peptides')}>
              <h3 className="text-2xl font-bold mb-4 text-blue-700">GLP-1 Peptides</h3>
              <p className="text-gray-600 leading-relaxed">Exploration of buccal GLP-1 and GLP-1-derived therapeutics</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold mb-4 text-green-700">Combination Therapies</h3>
              <p className="text-gray-600 leading-relaxed">Future insulin + GLP-1 peptide strategies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-r from-teal-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">A Platform, Not a Single Product</h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Insu Therapeutics is building a peptide delivery platform with applications across diabetes and metabolic disease—unlocking future opportunities beyond a single therapeutic asset.
          </p>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Get Involved</h2>
          <p className="text-xl mb-8 font-light">
            Whether you're a clinician, advocate, or someone living with diabetes, we welcome your engagement.
            Connect with us to learn more about our technology, clinical progress, and opportunities to partner.
          </p>
          <div className="flex flex-col items-center gap-4 mb-8">
            <p className="text-lg">📧 info@insutherapeutics.com</p>
            <p className="text-lg">📍 Based in Vancouver, Canada</p>
          </div>
          <button
            onClick={() => onNavigate('investor')}
            className="px-10 py-4 bg-teal-600 text-white rounded-xl hover:bg-teal-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg"
          >
            Contact Insu Therapeutics
          </button>
        </div>
      </section>

      {/* Modal for Item Details */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold text-gray-900">{getItemDetails(selectedItem)?.title}</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">{getItemDetails(selectedItem)?.content}</p>
              <div className="mt-8 flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-6 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-colors duration-300 font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
