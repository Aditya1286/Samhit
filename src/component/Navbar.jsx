import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const handleGetStarted = () => {
    alert(t('navbar.coming_soon'));
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full">
      <nav className="bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 w-full max-w-4xl flex justify-between items-center shadow-2xl shadow-black/40">
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 tracking-tight">SAMहित</h1>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors font-medium">{t('navbar.overview')}</Link>
          <Link to="/features" className="text-sm text-gray-300 hover:text-white transition-colors font-medium">{t('navbar.features')}</Link>
          <Link to="/insights" className="text-sm text-gray-300 hover:text-white transition-colors font-medium">{t('navbar.insights')}</Link>
          <a href="#footer" className="text-sm text-gray-300 hover:text-white transition-colors font-medium">{t('navbar.contact')}</a>
        </div>
        <div className="flex items-center space-x-2 md:space-x-4">
          <select 
            onChange={handleLanguageChange} 
            value={i18n.language}
            className="bg-black/50 text-gray-200 text-xs md:text-sm border border-white/20 rounded px-2 py-1 outline-none focus:border-white transition-colors cursor-pointer"
          >
            <option value="en">Eng</option>
            <option value="hi">हिंदी</option>
            <option value="ml">മലയാളം</option>
            <option value="bn">বাংলা</option>
          </select>
          <button 
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-sm md:text-base text-white px-5 py-2 md:px-6 md:py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-orange-500/25 border border-orange-400/20"
          >
            {t('navbar.get_started')}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
