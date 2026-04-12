import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DynamicStats from '../component/DynamicStats';

const HeaderSection = ({ startQuiz, setShowModal }) => (
  <div className="text-center mb-12 sm:mb-16 fade-in">
    <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">
      Mental Health
      <span className="gradient-text block">Assessment</span>
    </h1>
    <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
      Early detection systems are proof that there's power in understanding minds before they break.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <button onClick={startQuiz} className="btn-orange w-full sm:w-auto px-8 py-4 rounded-full text-white font-semibold text-lg">
        Start Assessment
      </button>
      <button onClick={() => setShowModal(true)} className="w-full sm:w-auto text-white hover:text-orange-400 transition-colors flex items-center justify-center">
        Learn More <i className="fas fa-arrow-right ml-2"></i>
      </button>
    </div>
  </div>
);



const PrivacySection = () => (
  <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 sm:p-8 mb-12 sm:mb-16">
    <div className="text-center mb-6">
      <i className="fas fa-shield-alt text-3xl sm:text-4xl text-green-400 mb-4"></i>
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Your Privacy is Protected</h3>
      <p className="text-sm sm:text-base text-gray-400">We use advanced encryption and privacy measures to keep your data secure</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
      <div className="text-center">
        <i className="fas fa-lock text-xl sm:text-2xl text-green-400 mb-3"></i>
        <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">End-to-End Encryption</h4>
        <p className="text-xs sm:text-sm text-gray-400">All responses are encrypted and never stored on our servers</p>
      </div>
      <div className="text-center">
        <i className="fas fa-user-secret text-xl sm:text-2xl text-green-400 mb-3"></i>
        <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Anonymous Assessment</h4>
        <p className="text-xs sm:text-sm text-gray-400">No personal information required to complete the assessment</p>
      </div>
      <div className="text-center">
        <i className="fas fa-trash-alt text-xl sm:text-2xl text-green-400 mb-3"></i>
        <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Auto-Delete</h4>
        <p className="text-xs sm:text-sm text-gray-400">Session data is automatically cleared after completion</p>
      </div>
    </div>
  </div>
);

const LearnMoreModal = ({ showModal, setShowModal }) => (
  showModal && (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-2xl p-4 sm:p-8 max-w-full sm:max-w-2xl w-full mx-4 overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">About the Assessment</h2>
          <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-white">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="space-y-6 text-gray-300">
          <p className="text-sm sm:text-base">
            The Mental Health Assessment by SAMहित is a scientifically designed tool to help individuals understand their current mental health status. It evaluates symptoms related to depression, anxiety, cognitive function, and social behavior.
          </p>
          <h3 className="text-lg sm:text-xl font-semibold text-white">Key Features:</h3>
          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base">
            <li>Based on clinically validated questionnaires</li>
            <li>Anonymous and confidential</li>
            <li>Provides immediate results and recommendations</li>
            <li>Helps in early detection of potential mental health issues</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-semibold text-white">How It Works:</h3>
          <ol className="list-decimal list-inside space-y-1 sm:space-y-2 text-sm sm:text-base">
            <li>Answer 15 carefully selected questions</li>
            <li>Receive an immediate analysis of your responses</li>
            <li>Get personalized recommendations based on your score</li>
            <li>Access resources for further support if needed</li>
          </ol>
          <p className="text-sm sm:text-base">
            Remember, this assessment is not a diagnostic tool but a screening instrument. It's designed to provide insights and guide you towards appropriate resources or professional help if necessary.
          </p>
          <div className="bg-blue-900/30 border border-blue-700/50 rounded-xl p-4">
            <h4 className="font-semibold text-blue-300 mb-2 text-sm sm:text-base">
              <i className="fas fa-info-circle mr-2"></i>
              Privacy Note:
            </h4>
            <p className="text-blue-200 text-xs sm:text-sm">
              Your responses are processed locally in your browser and are not stored or transmitted to any server. We prioritize your privacy and confidentiality.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
);

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
