// src/components/Header.tsx
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'Technology', id: 'technology' },
    { name: 'Investor Thesis', id: 'investor' },
    { name: 'Regulatory & Clinical', id: 'regulatory' },
    { name: 'Media & Publications', id: 'media' },
  ];

  const handleNavigation = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false); // close mobile menu after navigation
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavigation('home')}
              className="text-2xl font-bold text-teal-600 hover:text-teal-700 transition-colors"
            >
              Insu Therapeutics
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                aria-current={currentPage === item.id ? 'page' : undefined}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-teal-600 border-b-2 border-teal-600'
                    : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  aria-current={currentPage === item.id ? 'page' : undefined}
                  className={`px-3 py-2 text-sm font-medium rounded-md text-left transition-colors ${
                    currentPage === item.id
                      ? 'bg-teal-50 text-teal-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-teal-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
