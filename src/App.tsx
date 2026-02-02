import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Footer from './components/Footer';
import CookiesBanner from './components/CookiesBanner';
import HomePage from './pages/HomePage';
import TechnologyPage from './pages/TechnologyPage';
import InvestorPage from './pages/InvestorPage';
import MediaPage from './pages/MediaPage';
import RegulatoryPage from './pages/RegulatoryPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import TermsPage from './pages/TermsPage';
import ProductPage from './pages/ProductPage';
import CookiesPolicyPage from './pages/CookiesPolicyPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'technology':
        return <TechnologyPage />;
      case 'investor':
        return <InvestorPage />;
      case 'media':
        return <MediaPage />;
      case 'regulatory':
        return <RegulatoryPage />;
      case 'about':
        return <AboutUsPage />;
      case 'contact':
        return <ContactUsPage />;
      case 'terms':
        return <TermsPage />;
      case 'product':
        return <ProductPage />;
      case 'cookies':
        return <CookiesPolicyPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      <CookiesBanner />
      <Analytics />
    </div>
  );
}

export default App;
