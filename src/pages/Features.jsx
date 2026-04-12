import React from 'react';
import { useTranslation } from 'react-i18next';
import Bb from '../component/Bb';
import Cc from '../component/Cc';

const Features = () => {
  const { t } = useTranslation();
  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
          <span className="gradient-text">{t('features.title')}</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
          {t('features.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-gray-900/60 rounded-2xl p-8 border border-gray-800 card-hover">
          <h3 className="text-2xl font-bold text-white mb-4"><i className="fas fa-stethoscope text-orange-400 mr-3"></i>{t('features.early_detection.title')}</h3>
          <p className="text-gray-400">{t('features.early_detection.desc')}</p>
        </div>
        <div className="bg-gray-900/60 rounded-2xl p-8 border border-gray-800 card-hover">
          <h3 className="text-2xl font-bold text-white mb-4"><i className="fas fa-user-shield text-green-400 mr-3"></i>{t('features.privacy_first.title')}</h3>
          <p className="text-gray-400">{t('features.privacy_first.desc')}</p>
        </div>
      </div>

      <Bb />
      <div className="mt-8">
        <Cc />
      </div>
    </div>
  );
};

export default Features;
