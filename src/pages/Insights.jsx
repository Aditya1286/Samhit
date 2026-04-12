import React from 'react';
import { useTranslation } from 'react-i18next';

const Insights = () => {
  const { t } = useTranslation();
  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
          <span className="gradient-text cursor-default">{t('insights.title')}</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
          {t('insights.subtitle')}
        </p>
      </div>

      <div className="space-y-8">
        <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-2xl p-8 border border-gray-700 card-hover text-left">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mr-4">
              <i className="fas fa-chart-line text-orange-500 text-xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-white">{t('insights.card1.title')}</h3>
          </div>
          <p className="text-gray-400 leading-relaxed">
            {t('insights.card1.desc')}
          </p>
        </div>

        <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-2xl p-8 border border-gray-700 card-hover text-left">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
              <i className="fas fa-lightbulb text-blue-500 text-xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-white">{t('insights.card2.title')}</h3>
          </div>
          <p className="text-gray-400 leading-relaxed">
            {t('insights.card2.desc')}
          </p>
        </div>

        <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-2xl p-8 border border-gray-700 card-hover text-left">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mr-4">
              <i className="fas fa-file-pdf text-green-500 text-xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-white">{t('insights.card3.title')}</h3>
          </div>
          <p className="text-gray-400 leading-relaxed">
            {t('insights.card3.desc')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Insights;
