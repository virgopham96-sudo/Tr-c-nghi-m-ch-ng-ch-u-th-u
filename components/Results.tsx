import React, { useState } from 'react';
import { Question, UserAnswers } from '../types';
import { CheckIcon, XIcon } from './icons';

interface ResultsProps {
    questions: Question[];
    userAnswers: UserAnswers;
    onRestart: () => void;
    setNumber: number;
}

const Results: React.FC<ResultsProps> = ({ questions, userAnswers, onRestart, setNumber }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [visibleExplanations, setVisibleExplanations] = useState<Record<number, boolean>>({});

    const score = questions.reduce((acc, q) => {
        return acc + (userAnswers[q.id] === q.correctAnswer ? 1 : 0);
    }, 0);

    const handleJumpToQuestion = (index: number) => {
        setCurrentQuestionIndex(index);
    };
    
    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handlePrevQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };
    
    const toggleExplanation = (questionId: number) => {
        setVisibleExplanations(prev => ({
            ...prev,
            [questionId]: !prev[questionId]
        }));
    };
    
    const getQuestionNavClasses = (index: number) => {
        const baseClasses = "w-10 h-10 flex items-center justify-center rounded-md font-bold text-sm transition-all duration-200 border";
        const question = questions[index];
        const isCorrect = userAnswers[question.id] === question.correctAnswer;

        if (index === currentQuestionIndex) {
            return `${baseClasses} bg-cyan-500 text-white border-cyan-600 shadow-md scale-110`;
        }
        if (isCorrect) {
            return `${baseClasses} bg-green-100 text-green-800 border-green-400 hover:bg-green-200`;
        }
        return `${baseClasses} bg-red-100 text-red-800 border-red-400 hover:bg-red-200`;
    };

    const getOptionClasses = (question: Question, optionKey: string): string => {
        const isCorrect = optionKey === question.correctAnswer;
        const isSelected = userAnswers[question.id] === optionKey;
        
        if (isCorrect) {
            return 'bg-green-100 border-green-400 text-green-800';
        }
        if (isSelected && !isCorrect) {
            return 'bg-red-100 border-red-400 text-red-800';
        }
        return 'border-gray-200 text-gray-700';
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="p-4 md:p-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 mb-8 text-center shadow-lg border border-gray-200">
                <h2 className="text-2xl font-bold mb-2 text-cyan-600">Kết quả Bộ đề {setNumber}</h2>
                <p className="text-4xl font-bold text-gray-800">{score} / {questions.length}</p>
                 <button
                    onClick={onRestart}
                    className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                >
                    Chọn bộ đề khác
                </button>
            </div>

            {/* Question Navigation Grid */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-700 text-center">Xem lại câu trả lời</h3>
                <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                    {questions.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleJumpToQuestion(index)}
                            className={getQuestionNavClasses(index)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>

            {/* Single Question View */}
            {currentQuestion && (
                <div key={currentQuestion.id} className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 animate-fade-in">
                    <p className="text-lg font-semibold mb-4"><span className="font-bold text-cyan-600">Câu {currentQuestionIndex + 1}:</span> {currentQuestion.question}</p>
                    <div className="space-y-3 mb-4">
                        {Object.entries(currentQuestion.options).map(([key, value]) => {
                            const isCorrect = key === currentQuestion.correctAnswer;
                            return (
                            <div key={key} className={`flex items-center p-3 rounded-md border ${getOptionClasses(currentQuestion, key)}`}>
                                {isCorrect ? <CheckIcon /> : <XIcon />}
                                <span className="ml-3">{key}. {value}</span>
                            </div>
                        )})}
                    </div>
                    <div className="mt-4 text-right">
                        <button
                            onClick={() => toggleExplanation(currentQuestion.id)}
                            className="text-cyan-600 hover:text-cyan-500 font-semibold text-sm py-1 px-3 rounded-md bg-gray-100 hover:bg-gray-200 transition-all"
                        >
                            {visibleExplanations[currentQuestion.id] ? 'Ẩn lý giải' : 'Xem lý giải'}
                        </button>
                    </div>
                    {visibleExplanations[currentQuestion.id] && (
                        <div className="mt-2 p-4 bg-gray-50 rounded-md border border-cyan-500/30 animate-fade-in">
                           <p className="font-bold text-cyan-600">Lý giải:</p>
                           <p className="text-gray-700">{currentQuestion.explanation}</p>
                        </div>
                    )}
                </div>
            )}
            
            {/* Sequential Navigation */}
            <div className="flex justify-between items-center mt-8">
                <button
                    onClick={handlePrevQuestion}
                    disabled={currentQuestionIndex === 0}
                    className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-6 rounded-lg transition-colors border border-gray-300 disabled:bg-gray-100/50 disabled:text-gray-400 disabled:cursor-not-allowed"
                >
                    Câu trước
                </button>
                <span className="font-semibold text-lg text-gray-600">
                    {currentQuestionIndex + 1} / {questions.length}
                </span>
                <button
                    onClick={handleNextQuestion}
                    disabled={currentQuestionIndex === questions.length - 1}
                    className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-6 rounded-lg transition-colors border border-gray-300 disabled:bg-gray-100/50 disabled:text-gray-400 disabled:cursor-not-allowed"
                >
                    Câu tiếp theo
                </button>
            </div>
        </div>
    );
};

export default Results;