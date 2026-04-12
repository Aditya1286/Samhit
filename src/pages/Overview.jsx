import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import DynamicStats from '../component/DynamicStats';

const HeaderSection = ({ startQuiz, setShowModal }) => {
  const { t } = useTranslation();
  return (
    <div className="text-center mb-12 sm:mb-16 fade-in">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">
        {t('overview.header.title_1')}
        <span className="gradient-text block">{t('overview.header.title_2')}</span>
      </h1>
      <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
        {t('overview.header.subtitle')}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button onClick={startQuiz} className="btn-orange w-full sm:w-auto px-8 py-4 rounded-full text-white font-semibold text-lg">
          {t('overview.header.start_assessment')}
        </button>
        <button onClick={() => setShowModal(true)} className="w-full sm:w-auto text-white hover:text-orange-400 transition-colors flex items-center justify-center">
          {t('overview.header.learn_more')} <i className="fas fa-arrow-right ml-2"></i>
        </button>
      </div>
    </div>
  );
};



const PrivacySection = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 sm:p-8 mb-12 sm:mb-16">
      <div className="text-center mb-6">
        <i className="fas fa-shield-alt text-3xl sm:text-4xl text-green-400 mb-4"></i>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{t('overview.privacy.title')}</h3>
        <p className="text-sm sm:text-base text-gray-400">{t('overview.privacy.subtitle')}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="text-center">
          <i className="fas fa-lock text-xl sm:text-2xl text-green-400 mb-3"></i>
          <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">{t('overview.privacy.card1.title')}</h4>
          <p className="text-xs sm:text-sm text-gray-400">{t('overview.privacy.card1.desc')}</p>
        </div>
        <div className="text-center">
          <i className="fas fa-user-secret text-xl sm:text-2xl text-green-400 mb-3"></i>
          <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">{t('overview.privacy.card2.title')}</h4>
          <p className="text-xs sm:text-sm text-gray-400">{t('overview.privacy.card2.desc')}</p>
        </div>
        <div className="text-center">
          <i className="fas fa-trash-alt text-xl sm:text-2xl text-green-400 mb-3"></i>
          <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">{t('overview.privacy.card3.title')}</h4>
          <p className="text-xs sm:text-sm text-gray-400">{t('overview.privacy.card3.desc')}</p>
        </div>
      </div>
    </div>
  );
};

const LearnMoreModal = ({ showModal, setShowModal }) => {
  const { t } = useTranslation();
  return (
    showModal && (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-gray-900 rounded-2xl p-4 sm:p-8 max-w-full sm:max-w-2xl w-full mx-4 overflow-y-auto max-h-[90vh]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">{t('overview.modal.title')}</h2>
            <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-white">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="space-y-6 text-gray-300">
            <p className="text-sm sm:text-base">
              {t('overview.modal.desc1')}
            </p>
            <h3 className="text-lg sm:text-xl font-semibold text-white">{t('overview.modal.features_title')}</h3>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base">
              {(t('overview.modal.features', { returnObjects: true }) || []).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <h3 className="text-lg sm:text-xl font-semibold text-white">{t('overview.modal.how_it_works_title')}</h3>
            <ol className="list-decimal list-inside space-y-1 sm:space-y-2 text-sm sm:text-base">
              {(t('overview.modal.how_it_works', { returnObjects: true }) || []).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
            <p className="text-sm sm:text-base">
              {t('overview.modal.desc2')}
            </p>
            <div className="bg-blue-900/30 border border-blue-700/50 rounded-xl p-4">
              <h4 className="font-semibold text-blue-300 mb-2 text-sm sm:text-base">
                <i className="fas fa-info-circle mr-2"></i>
                {t('overview.modal.privacy_note_title')}
              </h4>
              <p className="text-blue-200 text-xs sm:text-sm">
                {t('overview.modal.privacy_note_desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

const Overview = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const startQuiz = () => {
    navigate('/assessment');
  };

  return (
    <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8 fade-in flex items-center justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <HeaderSection startQuiz={startQuiz} setShowModal={setShowModal} />
        <DynamicStats />
        <PrivacySection />
      </div>
      <LearnMoreModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Overview;
