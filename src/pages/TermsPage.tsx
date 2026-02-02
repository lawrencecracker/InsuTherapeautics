import React from 'react';

function TermsPage() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-extrabold text-teal-800 mb-6 leading-tight">
            Terms and Conditions
          </h1>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Please read these terms carefully before using our website.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              By accessing and using the Insu Therapeutics website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Use License</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Permission is granted to temporarily download one copy of the materials on Insu Therapeutics' website for personal, non-commercial transitory viewing only.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Disclaimer</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The materials on Insu Therapeutics' website are provided on an 'as is' basis. Insu Therapeutics makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Limitations</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In no event shall Insu Therapeutics or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Insu Therapeutics' website.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Accuracy of Materials</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The materials appearing on Insu Therapeutics' website could include technical, typographical, or photographic errors. Insu Therapeutics does not warrant that any of the materials on its website are accurate, complete, or current.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Links</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Insu Therapeutics has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Modifications</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Insu Therapeutics may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Governing Law</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of Canada and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TermsPage;
