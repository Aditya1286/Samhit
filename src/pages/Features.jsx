import React from 'react';
import Bb from '../component/Bb';
import Cc from '../component/Cc';

const Features = () => {
  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
          <span className="gradient-text">Core Features</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
          Discover how SAMहित helps you understand and manage your mental health through a series of carefully designed features tailored to your well-being.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-gray-900/60 rounded-2xl p-8 border border-gray-800 card-hover">
          <h3 className="text-2xl font-bold text-white mb-4"><i className="fas fa-stethoscope text-orange-400 mr-3"></i>Early Detection</h3>
          <p className="text-gray-400">Our primary focus is identifying potential mental health concerns at an early stage, which is critical for effective management and faster recovery. It evaluates symptoms commonly associated with psychological distress.</p>
        </div>
        <div className="bg-gray-900/60 rounded-2xl p-8 border border-gray-800 card-hover">
          <h3 className="text-2xl font-bold text-white mb-4"><i className="fas fa-user-shield text-green-400 mr-3"></i>Privacy First</h3>
          <p className="text-gray-400">We prioritize your confidentiality. We do not require any login or personal identification, ensuring all your sessions and data remain perfectly private. No data is sent to our servers.</p>
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
