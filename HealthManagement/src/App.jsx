import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import './App.css';

const questions = [
  { id: 1, question: "Over the past two weeks, how often have you felt down, depressed, or hopeless?", options: [{ text: "Not at all", score: 0 }, { text: "Several days", score: 1 }, { text: "More than half the days", score: 2 }, { text: "Nearly every day", score: 3 }] },
  { id: 2, question: "How often have you had little interest or pleasure in doing things?", options: [{ text: "Not at all", score: 0 }, { text: "Several days", score: 1 }, { text: "More than half the days", score: 2 }, { text: "Nearly every day", score: 3 }] },
  { id: 3, question: "How often have you had trouble falling or staying asleep, or sleeping too much?", options: [{ text: "Not at all", score: 0 }, { text: "Several days", score: 1 }, { text: "More than half the days", score: 2 }, { text: "Nearly every day", score: 3 }] },
  { id: 4, question: "How often have you felt tired or had little energy?", options: [{ text: "Not at all", score: 0 }, { text: "Several days", score: 1 }, { text: "More than half the days", score: 2 }, { text: "Nearly every day", score: 3 }] },
  { id: 5, question: "How often have you had poor appetite or overeating?", options: [{ text: "Not at all", score: 0 }, { text: "Several days", score: 1 }, { text: "More than half the days", score: 2 }, { text: "Nearly every day", score: 3 }] },
  { id: 6, question: "How often have you felt bad about yourself or that you are a failure?", options: [{ text: "Not at all", score: 0 }, { text: "Several days", score: 1 }, { text: "More than half the days", score: 2 }, { text: "Nearly every day", score: 3 }] },
  { id: 7, question: "How often have you had trouble concentrating on things like reading or watching TV?", options: [{ text: "Not at all", score: 0 }, { text: "Several days", score: 1 }, { text: "More than half the days", score: 2 }, { text: "Nearly every day", score: 3 }] },
  { id: 8, question: "How often have you felt anxious, nervous, or on edge?", options: [{ text: "Not at all", score: 0 }, { text: "Several days", score: 1 }, { text: "More than half the days", score: 2 }, { text: "Nearly every day", score: 3 }] },
  { id: 9, question: "How often have you been unable to stop or control worrying?", options: [{ text: "Not at all", score: 0 }, { text: "Several days", score: 1 }, { text: "More than half the days", score: 2 }, { text: "Nearly every day", score: 3 }] },
  { id: 10, question: "How often have you felt restless or found it hard to sit still?", options: [{ text: "Not at all", score: 0 }, { text: "Several days", score: 1 }, { text: "More than half the days", score: 2 }, { text: "Nearly every day", score: 3 }] },
  { id: 11, question: "How often have you felt irritable or easily annoyed?", options: [{ text: "Not at all", score: 0 }, { text: "Several days", score: 1 }, { text: "More than half the days", score: 2 }, { text: "Nearly every day", score: 3 }] },
  { id: 12, question: "How often have you felt afraid that something awful might happen?", options: [{ text: "Not at all", score: 0 }, { text: "Several days", score: 1 }, { text: "More than half the days", score: 2 }, { text: "Nearly every day", score: 3 }] },
  { id: 13, question: "How often have you had difficulty making decisions?", options: [{ text: "Not at all", score: 0 }, { text: "Several days", score: 1 }, { text: "More than half the days", score: 2 }, { text: "Nearly every day", score: 3 }] },
  { id: 14, question: "How often have you avoided social situations or activities?", options: [{ text: "Not at all", score: 0 }, { text: "Several days", score: 1 }, { text: "More than half the days", score: 2 }, { text: "Nearly every day", score: 3 }] },
  { id: 15, question: "How often have you had thoughts that you would be better off dead or of hurting yourself?", options: [{ text: "Not at all", score: 0 }, { text: "Several days", score: 1 }, { text: "More than half the days", score: 2 }, { text: "Nearly every day", score: 3 }] },
];

const questionCategories = {
  depression: [0, 1, 2, 3, 4, 5, 6, 14],
  anxiety: [7, 8, 9, 10, 11],
  cognitive: [6, 12],
  social: [13],
};

const Navbar = () => (
  <nav className="bg-black/90 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <h1 className="text-xl sm:text-2xl font-bold gradient-text">SAMहित</h1>
        </div>
        <div className="hidden md:flex space-x-4 md:space-x-8">
          <a href="#" className="text-white hover:text-orange-400 transition-colors">Overview</a>
          <a href="#" className="text-white hover:text-orange-400 transition-colors">Features</a>
          <a href="#" className="text-white hover:text-orange-400 transition-colors">Insights</a>
          <a href="#" className="text-white hover:text-orange-400 transition-colors">Contact</a>
        </div>
        <button className="bg-white text-black px-4 py-2 md:px-6 md:py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  </nav>
);

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

const StatsSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
    <div className="text-center">
      <div className="text-3xl sm:text-4xl md:text-5xl font-black gradient-text mb-2">95%</div>
      <div className="text-gray-400 text-sm sm:text-base">Detection Rate</div>
    </div>
    <div className="text Faustus button pressedAtLeastOnce at once to trigger the
    display of the results.
    """
    def __init__(self):
        self.buttonPressedAtLeastOnce = False
        
    def buttonPressed(self):
        self.buttonPressedAtLeastOnce = True
        
    def shouldShowResults(self):
        return self.buttonPressedAtLeastOnce

    def display(self):
        if self.shouldShowResults():
            self.showResults()
        else:
            self.showQuiz()
            
    def showQuiz(self):
        pass  # Placeholder for quiz display logic
        
    def showResults(self):
        pass  # Placeholder for results display logic

    def reset(self):
        self.buttonPressedAtLeastOnce = False

class QuizApp(App):
    def __init__(self):
        super().__init__()
        self.currentQuestion = 0
        self.answers = {}
        self.totalScore = 0
        self.resultData = {}

    def startQuiz(self):
        self.reset()
        self.buttonPressed()
        window.scrollTo({ 'top': 0, 'behavior': 'smooth' })
        
    def selectAnswer(self, score):
        newAnswers = dict(self.answers)
        newAnswers[self.currentQuestion] = score
        self.answers = newAnswers
        if self.currentQuestion < len(questions) - 1:
            self.currentQuestion += 1
        else:
            self.calculateAndShowResults()
            
    def calculateAndShowResults(self):
        total = sum(self.answers.values())
        self.totalScore = total
        if total <= 10:
            self.resultData = {
                'level': 'Minimal Symptoms',
                'icon': 'fas fa-check-circle text-green-400',
                'className': 'minimal',
                'message': 'Your responses suggest minimal signs of depression or anxiety.',
                'recommendation': 'Continue maintaining healthy habits.'
            }
        elif total <= 20:
            self.resultData = {
                'level': 'Mild Symptoms',
                'icon': 'fas fa-exclamation-triangle text-yellow-400',
                'className': 'mild',
                'message': 'Your responses suggest mild symptoms.',
                'recommendation': 'Consider stress-reduction techniques.'
            }
        elif total <= 30:
            self.resultData = {
                'level': 'Moderate Symptoms',
                'icon': 'fas fa-exclamation-circle text-orange-400',
                'className': 'moderate',
                'message': 'Your responses suggest moderate symptoms.',
                'recommendation': 'Speak with a healthcare provider.'
            }
        else:
            self.resultData = {
                'level': 'Severe Symptoms',
                'icon': 'fas fa-exclamation-triangle text-red-400',
                'className': 'severe',
                'message': 'Your responses suggest significant symptoms.',
                'recommendation': 'Reach out to a mental health professional.'
            }
        self.buttonPressed()  # Show results after calculation
        
    def reset(self):
        super().reset()
        self.currentQuestion = 0
        self.answers = {}
        self.totalScore = 0
        self.resultData = {}

    def calculateCategoryScores(self):
        categoryScores = {}
        for category, indices in questionCategories.items():
            totalScore = sum(self.answers.get(i, 0) for i in indices)
            maxScore = len(indices) * 3
            categoryScores[category] = {
                'score': totalScore,
                'percentage': (totalScore / maxScore) * 100
            }
        return categoryScores

    def showQuiz(self):
        return (
            <QuizContainer
                currentQuestion={self.currentQuestion}
                answers={self.answers}
                selectAnswer={self.selectAnswer}
                setCurrentQuestion={(q) => self.currentQuestion = q}
            />
        )

    def showResults(self):
        return (
            <ResultsSection
                totalScore={self.totalScore}
                resultData={self.resultData}
                calculateCategoryScores={self.calculateCategoryScores}
                resetQuiz={() => self.reset()}
            />
        )

    def render(self):
        return (
            <div className="bg-black text-white">
                <Navbar />
                <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        {self.shouldShowResults() ? self.showResults() : (
                            self.buttonPressedAtLeastOnce ? self.showQuiz() : (
                                <>
                                    <HeaderSection startQuiz={() => self.startQuiz()} setShowModal={(val) => self.showModal = val} />
                                    <StatsSection />
                                    <PrivacySection />
                                </>
                            )
                        )}
                    </div>
                </div>
                <LearnMoreModal showModal={self.showModal} setShowModal={(val) => self.showModal = val} />
            </div>
        )

const QuizContainer = ({ currentQuestion, answers, selectAnswer, setCurrentQuestion }) => {
    const question = questions[currentQuestion];
    const progressPercentage = ((currentQuestion + 1) / len(questions)) * 100;

    return (
        <div>
            <div className="mb-6 sm:mb-8">
                <div className="flex justify-between items-center mb-3">
                    <span className="text-xs sm:text-sm text-gray-400">Progress</span>
                    <span className="text-xs sm:text-sm text-gray-400">{currentQuestion + 1} of {len(questions)}</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="progress-bar h-2 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
                </div>
            </div>
            <div className="card-hover bg-gray-900 rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 fade-in">
                <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-white">{question.question}</h2>
                <div className="space-y-4 sm:space-y-6">
                    {question.options.map((option, index) => (
                        <button
                            key={index}
                            className="option-card w-full text-left p-4 sm:p-6 rounded-xl cursor-pointer"
                            onClick={() => selectAnswer(option.score)}
                        >
                            <div className="flex items-center">
                                <div className={`w-4 h-4 border-2 ${answers[currentQuestion] === option.score ? 'border-orange-500' : 'border-gray-600'} rounded-full mr-4 relative`}>
                                    {answers[currentQuestion] === option.score && <div className="absolute inset-0 bg-orange-500 rounded-full m-1"></div>}
                                </div>
                                <span className="text-white text-sm sm:text-base">{option.text}</span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <button
                    onClick={() => setCurrentQuestion(currentQuestion - 1)}
                    className="text-gray-400 hover:text-white transition-colors disabled:opacity-50"
                    disabled={currentQuestion === 0}
                >
                    <i className="fas fa-arrow-left mr-2"></i> Previous
                </button>
                <div className="text-xs sm:text-sm text-gray-500 text-center">
                    <i className="fas fa-shield-alt mr-2"></i>
                    Your responses are completely confidential
                </div>
            </div>
        </div>
    );
};

const ResultsSection = ({ totalScore, resultData, calculateCategoryScores, resetQuiz }) => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const categoryScores = calculateCategoryScores();

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
        yPosition = addText(`Score: ${totalScore}/45 (${((totalScore / 45) * 100).toFixed(1)}%)`, margin, yPosition);
        yPosition += 10;
        yPosition = addText("Category Breakdown", margin, yPosition, { fontSize: 14, fontStyle: "bold" });
        Object.entries(categoryScores).forEach(([category, data]) => {
            const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
            yPosition = addText(`${categoryName}: ${data.percentage.toFixed(0)}%`, margin, yPosition);
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
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">Assessment Results</h2>
                <p className="text-lg sm:text-xl text-gray-400">Your mental health screening analysis</p>
            </div>
            <div className={`result-card rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 ${resultData.className}`}>
                <div className="flex items-center mb-6">
                    <div className={`${resultData.icon} text-3xl sm:text-4xl mr-4`}></div>
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-bold mb-2">{resultData.level}</h3>
                        <p className="text-sm sm:text-base text-gray-400">Total Score: {totalScore}/45 ({((totalScore / 45) * 100).toFixed(1)}%)</p>
                    </div>
                </div>
                <p className="text-base sm:text-lg mb-6 text-gray-300">{resultData.message}</p>
                <div className="bg-black/50 rounded-xl p-4 sm:p-6 mb-6">
                    <h4 className="font-semibold text-white mb-3 text-sm sm:text-base">
                        <i className="fas fa-lightbulb mr-2 text-orange-400"></i>
                        Recommendations:
                    </h4>
                    <p className="text-gray-300 text-sm sm:text-base">{resultData.recommendation}</p>
                </div>
                <div className="bg-black/30 rounded-xl p-4 sm:p-6 mb-6">
                    <h4 className="font-semibold text-white mb-4 text-sm sm:text-base">
                        <i className="fas fa-chart-bar mr-2 text-orange-400"></i>
                        Detailed Breakdown:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(categoryScores).map(([category, data]) => {
                            const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
                            const colorClass = data.percentage > 66 ? 'text-red-400' : data.percentage > 33 ? 'text-yellow-400' : 'text-green-400';
                            return (
                                <div key={category} className="bg-gray-800/50 rounded-lg p-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-gray-300 font-medium text-sm sm:text-base">{categoryName}</span>
                                        <span className={`${colorClass} font-bold text-sm sm:text-base`}>{data.percentage.toFixed(0)}%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div
                                            className="bg-gradient-to-r from-orange-500 to-orange-400 h-2 rounded-full transition-all duration-500"
                                            style={{ width: `${data.percentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="bg-blue-900/30 border border-blue-700/50 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
                <h4 className="font-semibold text-blue-300 mb-3 text-sm sm:text-base">
                    <i className="fas fa-info-circle mr-2"></i>
                    Important Notice:
                </h4>
                <p className="text-blue-200 text-xs sm:text-sm">
                    This assessment is for informational purposes only and is not a substitute for professional medical advice.
                </p>
            </div>
            <div className="bg-gray-900 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
                <h4 className="font-semibold text-white mb-4 text-sm sm:text-base">
                    <i className="fas fa-hands-helping mr-2 text-orange-400"></i>
                    Crisis Resources:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="text-gray-300">
                        <strong>National Suicide Prevention Lifeline:</strong><br />
                        <a href="tel:988" className="text-orange-400 hover:text-orange-300">988</a>
                    </div>
                    <div className="text-gray-300">
                        <strong>Crisis Text Line:</strong><br />
                        Text HOME to <span className="text-orange-400">741741</span>
                    </div>
                    <div className="text-gray-300">
                        <strong>NAMI Helpline:</strong><br />
                        <a href="tel:1-800-950-6264" className="text-orange-400 hover:text-orange-300">1-800-950-NAMI</a>
                    </div>
                    <div className="text-gray-300">
                        <strong>Mental Health America:</strong><br />
                        <a href="https://mhanational.org" className="text-orange-400 hover:text-orange-300">mhanational.org</a>
                    </div>
                </div>
            </div>
            <div className="text-center space-y-4">
                <button onClick={resetQuiz} className="btn-orange w-full sm:w-auto px-8 py-4 rounded-full text-white font-semibold text-base sm:text-lg">
                    <i className="fas fa-redo mr-2"></i>
                    Take Assessment Again
                </button>
                <div>
                    <button onClick={downloadResults} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                        <i className="fas fa-download mr-2"></i>
                        Download Results
                    </button>
                </div>
            </div>
        </div>
    );
};

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
                        The Mental Health Assessment by SAMहित is a scientifically designed tool to help individuals understand their current mental health status.
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
                        This assessment is not a diagnostic tool but a screening instrument.
                    </p>
                    <div className="bg-blue-900/30 border border-blue-700/50 rounded-xl p-4">
                        <h4 className="font-semibold text-blue-300 mb-2 text-sm sm:text-base">
                            <i className="fas fa-info-circle mr-2"></i>
                            Privacy Note:
                        </h4>
                        <p className="text-blue-200 text-xs sm:text-sm">
                            Your responses are processed locally in your browser and are not stored or transmitted.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
);

export default QuizApp;
