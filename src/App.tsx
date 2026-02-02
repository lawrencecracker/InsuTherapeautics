import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TechnologyPage from './pages/TechnologyPage';
import InvestorPage from './pages/InvestorPage';
import MediaPage from './pages/MediaPage';
import RegulatoryPage from './pages/RegulatoryPage';

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
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
