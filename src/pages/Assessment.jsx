import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import { fetchAssessmentQuestions } from '../lib/api';
import { useTranslation } from 'react-i18next';

const QuizContainer = ({ questions, currentQuestion, answers, selectAnswer, setCurrentQuestion }) => {
  const { t } = useTranslation();
  const question = questions[currentQuestion];
  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div>
      <div className="mb-6 sm:mb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs sm:text-sm text-gray-400">{t('assessment.progress')}</span>
          <span className="text-xs sm:text-sm text-gray-400">{currentQuestion + 1} {t('assessment.of')} {questions.length}</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
          <div className="progress-bar h-2 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
        </div>
      </div>
      <div className="card-hover bg-gray-900 rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 fade-in text-center relative overflow-hidden border border-gray-800/50 shadow-2xl shadow-black">
        {question.type === 'puzzle' && (
           <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest"><i className="fas fa-brain mr-2"></i>{t('assessment.cognitive_test')}</div>
        )}
        {question.imageUrl && (
           <div className="mb-6 rounded-xl overflow-hidden shadow-black shadow-inner">
              <img src={question.imageUrl} alt="Assessment visual" className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-700" />
           </div>
        )}
        <h2 className={`text-xl sm:text-2xl font-semibold ${question.imageUrl ? 'mt-4' : 'mt-2'} mb-8 text-white leading-relaxed`}>{t(`api_questions.q${question.id}.question`, { defaultValue: question.question })}</h2>
        
        <div className="space-y-3 sm:space-y-4 text-left">
          {question.options.map((option, index) => {
            const isSelected = answers[currentQuestion] !== undefined && answers[currentQuestion].score === option.score;
            return (
              <button
                key={index}
                className={`w-full text-left p-4 rounded-xl cursor-pointer transition-all duration-300 border ${isSelected ? 'bg-gradient-to-r from-orange-500/10 to-transparent border-orange-500/50 shadow-md shadow-orange-500/10' : 'bg-black/20 border-white/5 hover:bg-gray-800 hover:border-gray-700'}`}
                onClick={() => selectAnswer({ score: option.score, weight: question.weight, category: question.category })}
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 border-2 ${isSelected ? 'border-orange-500' : 'border-gray-600'} rounded-full mr-4 flex-shrink-0 relative flex items-center justify-center transition-colors`}>
                    {isSelected && <div className="w-2.5 h-2.5 bg-orange-500 rounded-full animate-pulse"></div>}
                  </div>
                  <span className={`${isSelected ? 'text-white' : 'text-gray-300'} text-sm sm:text-base font-medium`}>{t(`api_questions.q${question.id}.options.${index}`, { defaultValue: option.text })}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
        <button
          onClick={() => setCurrentQuestion(currentQuestion - 1)}
          className="text-gray-400 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex items-center font-medium px-4 py-2"
          disabled={currentQuestion === 0}
        >
          <i className="fas fa-arrow-left mr-2"></i> {t('assessment.previous_step')}
        </button>
        <div className="text-xs sm:text-sm text-gray-500 flex items-center bg-gray-900/50 px-4 py-2 rounded-full border border-gray-800">
          <i className="fas fa-shield-check mr-2 text-green-500/70"></i>
          {t('assessment.encryption_active')}
        </div>
      </div>
    </div>
  );
};

const ResultsSection = ({ algorithmResults, resultData, resetQuiz }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const { categoryScores, overallPercentage } = algorithmResults;
  const { t } = useTranslation();

  const downloadResults = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    let yPosition = 20;
    const margin = 20;
    const maxWidth = pageWidth - 2 * margin;

    const addText = (text, x, y, options = {}) => {
      const fontSize = options.fontSize || 12;
      doc.setFontSize(fontSize);
      doc.setFont("helvetica", options.fontStyle || "normal");
      const lines = doc.splitTextToSize(text, maxWidth);
      let lineY = y;
      lines.forEach((line) => {
        if (lineY + 10 > pageHeight - margin) {
          doc.addPage();
          lineY = margin;
        }
        doc.text(line, x, lineY, { align: options.align || "left" });
        lineY += 7;
      });
      return lineY;
    };

    yPosition = addText("Mental Health Assessment Results", pageWidth / 2, yPosition, { fontSize: 16, align: "center" });
    yPosition = addText("SAMHIT", pageWidth / 2, yPosition, { align: "center" });
    yPosition += 10;
    const currentDate = new Date().toLocaleString();
    yPosition = addText(`Date: ${currentDate}`, margin, yPosition);
    yPosition += 10;
    yPosition = addText("Result Summary", margin, yPosition, { fontSize: 14, fontStyle: "bold" });
    yPosition = addText(`Level: ${resultData.level}`, margin, yPosition);
    yPosition = addText(`Risk Severity: ${overallPercentage.toFixed(1)}%`, margin, yPosition);
    yPosition += 10;
    yPosition = addText("Category Breakdown", margin, yPosition, { fontSize: 14, fontStyle: "bold" });
    Object.entries(categoryScores).forEach(([category, data]) => {
      const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
      yPosition = addText(`${categoryName}: ${data.percentage.toFixed(0)}% severity`, margin, yPosition);
    });
    yPosition += 10;
    yPosition = addText("Interpretation", margin, yPosition, { fontSize: 14, fontStyle: "bold" });
    yPosition = addText(resultData.message, margin, yPosition);
    yPosition += 10;
    yPosition = addText("Recommendations", margin, yPosition, { fontSize: 14, fontStyle: "bold" });
    yPosition = addText(resultData.recommendation, margin, yPosition);
    yPosition += 10;
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(10);
      doc.text(`Page ${i} of ${pageCount}`, pageWidth / 2, pageHeight - 10, { align: "center" });
    }
    doc.save(`Assessment_Results_${new Date().toISOString().split('T')[0]}.pdf`);
  };

  return (
    <div className="fade-in">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">{t('assessment.results_title')}</h2>
        <p className="text-lg sm:text-xl text-gray-400">{t('assessment.results_subtitle')}</p>
      </div>
      <div className={`result-card rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 border ${resultData.borderClass} ${resultData.className} bg-gray-900/40 backdrop-blur-md shadow-2xl`}>
        <div className="flex items-center mb-6 pb-6 border-b border-gray-800">
          <div className={`${resultData.icon} text-4xl sm:text-5xl mr-5`}></div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-1 text-white tracking-tight">{resultData.level}</h3>
            <p className="text-sm sm:text-base text-gray-400 font-medium">{t('assessment.risk_index')}: {overallPercentage.toFixed(1)}%</p>
          </div>
        </div>
        <p className="text-base sm:text-lg mb-8 text-gray-300 leading-relaxed font-medium">{resultData.message}</p>
        <div className="bg-black/60 rounded-xl p-5 sm:p-6 mb-6 border border-gray-800/80">
          <h4 className="font-semibold text-white mb-3 text-sm sm:text-base flex items-center">
            <i className="fas fa-lightbulb mr-3 text-orange-400 text-lg"></i>
            {t('assessment.recommendation')}
          </h4>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{resultData.recommendation}</p>
        </div>
        <div className="bg-black/40 rounded-xl p-5 sm:p-6 mb-6 border border-gray-800/60">
          <h4 className="font-semibold text-white mb-5 text-sm sm:text-base flex items-center">
            <i className="fas fa-project-diagram mr-3 text-blue-400 text-lg"></i>
            {t('assessment.cluster_analysis')}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {Object.entries(categoryScores).map(([category, data]) => {
              const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
              const colorClass = data.percentage > 66 ? 'text-red-400' : data.percentage > 33 ? 'text-yellow-400' : 'text-green-400';
              const bgGradient = data.percentage > 66 ? 'from-red-500 to-red-400' : data.percentage > 33 ? 'from-yellow-500 to-yellow-400' : 'from-green-500 to-green-400';
              return (
                <div key={category} className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/30">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-200 font-semibold text-sm sm:text-base">{categoryName}</span>
                    <span className={`${colorClass} font-black text-sm sm:text-base`}>{data.percentage.toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-black/60 rounded-full h-2.5 overflow-hidden">
                    <div
                      className={`bg-gradient-to-r ${bgGradient} h-2.5 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${data.percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-blue-900/20 border border-blue-900/50 rounded-xl p-5 sm:p-6 mb-6 sm:mb-8 backdrop-blur-sm">
        <h4 className="font-semibold text-blue-400 mb-3 text-sm flex items-center tracking-wide uppercase">
          <i className="fas fa-info-circle mr-2"></i>
          {t('assessment.clinical_disclaimer_title')}
        </h4>
        <p className="text-blue-200/70 text-xs sm:text-sm leading-relaxed">
          {t('assessment.clinical_disclaimer_desc')}
        </p>
      </div>
      <div className="text-center space-y-5">
        <button onClick={resetQuiz} className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 w-full sm:w-auto px-8 py-4 rounded-full text-white font-bold text-base sm:text-lg transition-all transform hover:scale-105 shadow-xl shadow-orange-500/20 border border-orange-400/20">
          <i className="fas fa-redo mr-3"></i>
          {t('assessment.retake')}
        </button>
        <div>
          <button onClick={downloadResults} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base font-medium inline-flex items-center mt-2 group">
            <span className="p-2 rounded-full bg-gray-800 mr-2 group-hover:bg-gray-700 transition-colors"><i className="fas fa-download"></i></span>
            {t('assessment.download_pdf')}
          </button>
        </div>
      </div>
    </div>
  );
};

const Assessment = () => {
  const { t } = useTranslation();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [algorithmResults, setAlgorithmResults] = useState(null);
  const [resultData, setResultData] = useState({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    setLoading(true);
    try {
      const data = await fetchAssessmentQuestions();
      setQuestions(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const calculateAdvancedAlgorithm = (currentAnswers) => {
    const categoryScores = {};
    let totalScoreWeighted = 0;
    let maxPossibleWeighted = 0;

    Object.values(currentAnswers).forEach((ans) => {
      const maxScoreForQuestion = 3 * ans.weight;
      const weightedScore = ans.score * ans.weight;
      
      if(!categoryScores[ans.category]) {
        categoryScores[ans.category] = { score: 0, maxScore: 0 };
      }
      
      categoryScores[ans.category].score += weightedScore;
      categoryScores[ans.category].maxScore += maxScoreForQuestion;

      totalScoreWeighted += weightedScore;
      maxPossibleWeighted += maxScoreForQuestion;
    });

    Object.keys(categoryScores).forEach(cat => {
       categoryScores[cat].percentage = categoryScores[cat].maxScore > 0 ? (categoryScores[cat].score / categoryScores[cat].maxScore) * 100 : 0;
    });

    const overallPercentage = maxPossibleWeighted > 0 ? (totalScoreWeighted / maxPossibleWeighted) * 100 : 0;

    return { categoryScores, totalScoreWeighted, maxPossibleWeighted, overallPercentage };
  };

  const selectAnswer = (answerData) => {
    const newAnswers = { ...answers, [currentQuestion]: answerData };
    setAnswers(newAnswers);
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const algResults = calculateAdvancedAlgorithm(newAnswers);
        setAlgorithmResults(algResults);
        setShowResults(true);
        calculateAndShowResults(algResults.overallPercentage);
      }
    }, 350);
  };

  const calculateAndShowResults = (percentage) => {
    let data;
    if (percentage <= 25) {
      data = {
        level: t('assessment.results.minimal.level'),
        icon: 'fas fa-check-circle text-green-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]',
        className: 'result-minimal',
        borderClass: 'border-green-500/30',
        message: t('assessment.results.minimal.message'),
        recommendation: t('assessment.results.minimal.recommendation'),
      };
    } else if (percentage <= 50) {
      data = {
        level: t('assessment.results.mild.level'),
        icon: 'fas fa-exclamation-triangle text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]',
        className: 'result-mild',
        borderClass: 'border-yellow-500/30',
        message: t('assessment.results.mild.message'),
        recommendation: t('assessment.results.mild.recommendation'),
      };
    } else if (percentage <= 75) {
      data = {
        level: t('assessment.results.moderate.level'),
        icon: 'fas fa-exclamation-circle text-orange-400 drop-shadow-[0_0_15px_rgba(251,146,60,0.5)]',
        className: 'result-moderate',
        borderClass: 'border-orange-500/30',
        message: t('assessment.results.moderate.message'),
        recommendation: t('assessment.results.moderate.recommendation'),
      };
    } else {
      data = {
        level: t('assessment.results.severe.level'),
        icon: 'fas fa-heartbeat text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)] animate-pulse',
        className: 'result-severe',
        borderClass: 'border-red-500/50 block-alert',
        message: t('assessment.results.severe.message'),
        recommendation: t('assessment.results.severe.recommendation'),
      };
    }
    setResultData(data);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setAlgorithmResults(null);
    setResultData({});
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    loadQuestions();
  };

  if (loading) {
    return (
      <div className="py-24 flex flex-col items-center justify-center min-h-[60vh] fade-in">
         <div className="w-16 h-16 border-4 border-gray-800 border-t-orange-500 rounded-full animate-spin mb-6 shadow-lg shadow-orange-500/20"></div>
         <h2 className="text-2xl font-bold text-white tracking-widest uppercase mb-2">{t('assessment.connecting_api')}</h2>
         <p className="text-gray-400 text-sm">{t('assessment.retrieving_algos')}</p>
      </div>
    );
  }

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto fade-in">
      {!showResults ? (
        <QuizContainer
          questions={questions}
          currentQuestion={currentQuestion}
          answers={answers}
          selectAnswer={selectAnswer}
          setCurrentQuestion={setCurrentQuestion}
        />
      ) : (
        <ResultsSection
          algorithmResults={algorithmResults}
          resultData={resultData}
          resetQuiz={resetQuiz}
        />
      )}
    </div>
  );
};

export default Assessment;
