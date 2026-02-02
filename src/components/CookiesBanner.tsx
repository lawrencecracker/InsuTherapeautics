import React, { useState, useEffect } from 'react';

function CookiesBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false);
  };

  const declineCookies = () => {
    // For simplicity, we'll just hide the banner. In a real app, you'd handle non-essential cookies differently.
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 md:mr-4">
          <p className="text-sm leading-relaxed">
            We use cookies to enhance your experience on our website. By continuing to use our site, you agree to our{' '}
            <a href="#cookies" className="underline hover:text-teal-400">Cookies Policy</a>.
          </p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={acceptCookies}
            className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors text-sm font-medium"
          >
            Accept
          </button>
          <button
            onClick={declineCookies}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors text-sm font-medium"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookiesBanner;
