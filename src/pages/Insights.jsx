import React from 'react';

const Insights = () => {
  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
          <span className="gradient-text cursor-default">Your Insights</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
          Our assessment calculates a personalized index based on 15 specialized questions. Below is an overview of what the insights entail.
        </p>
      </div>

      <div className="space-y-8">
        <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-2xl p-8 border border-gray-700 card-hover text-left">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mr-4">
              <i className="fas fa-chart-line text-orange-500 text-xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-white">Score-Based Breakdowns</h3>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Upon completion, you receive a percentage score grouped across different categories such as Cognitive Thinking, Emotional Well-being, Anxiety levels, and Depression traits. This granular breakdown helps pinpoint exactly where you are thriving and where you might need more support.
          </p>
        </div>

        <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-2xl p-8 border border-gray-700 card-hover text-left">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
              <i className="fas fa-lightbulb text-blue-500 text-xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-white">Personalized Suggestions</h3>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Your results inform actionable recommendations tailored to your score. Whether it means practicing light mindfulness techniques, reaching out to social groups, or seeking professional screening, our platform guides you towards your next positive steps.
          </p>
        </div>

        <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-2xl p-8 border border-gray-700 card-hover text-left">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mr-4">
              <i className="fas fa-file-pdf text-green-500 text-xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-white">Downloadable Analytics</h3>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Get your comprehensive, offline-ready overview generated dynamically in PDF format. Keep your insights with you to track your mental health journey over time or share securely with a healthcare provider if you so choose.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Insights;
