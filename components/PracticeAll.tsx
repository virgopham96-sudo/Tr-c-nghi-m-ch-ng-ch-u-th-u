import React, { useState, useEffect, useCallback } from 'react';
import { Question, UserAnswers } from '../types';
import { CheckIcon, XIcon, ArrowUpIcon } from './icons';

interface PracticeAllProps {
    questions: Question[];
    onBack: () => void;
}

const PracticeAll: React.FC<PracticeAllProps> = ({ questions, onBack }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
    const [isFading, setIsFading] = useState(false);
    const [showGoToTop, setShowGoToTop] = useState(false);
    const [isGridVisible, setIsGridVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowGoToTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const toggleGridVisibility = () => {
        setIsGridVisible(prev => !prev);
    };

    const handleGoToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleJumpToQuestion = useCallback((index: number) => {
        if (index >= 0 && index < questions.length && index !== currentQuestionIndex) {
            setIsFading(true);
            setTimeout(() => {
                setCurrentQuestionIndex(index);
                setIsFading(false);
            }, 150);
        }
    }, [currentQuestionIndex, questions.length]);
    
    const handleNextQuestion = useCallback(() => {
        handleJumpToQuestion(currentQuestionIndex + 1);
    }, [currentQuestionIndex, handleJumpToQuestion]);

    const handlePrevQuestion = useCallback(() => {
        handleJumpToQuestion(currentQuestionIndex - 1);
    }, [currentQuestionIndex, handleJumpToQuestion]);

    const handleOptionChange = useCallback((questionId: number, option: 'A' | 'B' | 'C' | 'D') => {
        if (!userAnswers[questionId]) { // Only allow answering once
            setUserAnswers(prev => ({
                ...prev,
                [questionId]: option
            }));
        }
    }, [userAnswers]);
    
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            // Allow number keys to select answers
            const keyMap = { '1': 'A', '2': 'B', '3': 'C', '4': 'D' };
            const option = keyMap[event.key as keyof typeof keyMap];
            if (option) {
                const currentQuestion = questions[currentQuestionIndex];
                if (currentQuestion) {
                    handleOptionChange(currentQuestion.id, option as 'A' | 'B' | 'C' | 'D');
                }
                event.preventDefault();
                return;
            }

            if (event.key === 'ArrowLeft') {
                handlePrevQuestion();
            } else if (event.key === 'ArrowRight') {
                handleNextQuestion();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handlePrevQuestion, handleNextQuestion, questions, currentQuestionIndex, handleOptionChange]);

    const getQuestionNavClasses = (index: number) => {
        let baseClasses = "w-10 h-10 flex items-center justify-center rounded-md font-bold text-sm transition-all duration-200 border transform hover:-translate-y-0.5 hover:shadow-lg hover:ring-2 hover:ring-cyan-400";
        if (index === currentQuestionIndex) {
            return `${baseClasses} bg-cyan-500 text-white border-cyan-600 shadow-md scale-110`;
        }
        const question = questions[index];
        const userAnswer = userAnswers[question.id];
        if (userAnswer !== undefined) {
            const isCorrect = userAnswer === question.correctAnswer;
            if (isCorrect) {
                 return `${baseClasses} bg-green-500 text-white border-green-600`;
            } else {
                 return `${baseClasses} bg-red-500 text-white border-red-600`;
            }
        }
        return `${baseClasses} bg-white text-gray-700 border-gray-300`;
    };

    const getOptionClasses = (question: Question, optionKey: 'A' | 'B' | 'C' | 'D'): string => {
        const baseClasses = "flex items-center p-3 rounded-md border transition-all duration-300";
        const userAnswer = userAnswers[question.id];
        const isAnswered = userAnswer !== undefined;

        if (!isAnswered) {
            return `${baseClasses} bg-white hover:bg-gray-100 cursor-pointer`;
        }

        const isCorrectAnswer = optionKey === question.correctAnswer;
        const isSelected = userAnswer === optionKey;

        if (isCorrectAnswer) {
            return `${baseClasses} bg-green-100 border-green-400 text-green-800 ring-2 ring-green-500`;
        }
        if (isSelected && !isCorrectAnswer) {
            return `${baseClasses} bg-red-100 border-red-400 text-red-800`;
        }
        return `${baseClasses} bg-white border-gray-200 text-gray-500 opacity-75`;
    };

    const currentQuestion = questions[currentQuestionIndex];
    const isAnswered = currentQuestion && userAnswers[currentQuestion.id] !== undefined;
    
    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto animate-fade-in">
            <div className="relative text-center mb-8">
                <button
                    onClick={onBack}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg transition-colors flex items-center gap-1"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Quay lại
                </button>
                <h2 className="text-3xl font-bold text-gray-900 inline-block">Luyện tập tổng hợp</h2>
            </div>
            
             <div className="text-center mb-4">
                <button
                    onClick={toggleGridVisibility}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                    {isGridVisible ? 'Ẩn danh sách câu hỏi' : 'Hiển thị danh sách câu hỏi'}
                </button>
            </div>

            {isGridVisible && (
                 <div className="mb-6 animate-fade-in">
                    <div className="flex flex-wrap justify-center gap-1">
                        {questions.map((q, index) => (
                            <button
                                key={q.id}
                                onClick={() => handleJumpToQuestion(index)}
                                className={getQuestionNavClasses(index)}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Question Display */}
            {currentQuestion && (
                <div className={`bg-white rounded-lg p-6 shadow-lg border border-gray-200 min-h-[300px] transition-opacity duration-150 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                    <p className="text-lg font-semibold mb-4">
                        <span className="font-bold text-cyan-600">Câu {currentQuestionIndex + 1}:</span> {currentQuestion.question}
                    </p>
                    <div className="space-y-3">
                        {Object.entries(currentQuestion.options).map(([key, value]) => {
                            const optionKey = key as 'A' | 'B' | 'C' | 'D';
                            const isCorrectAnswer = optionKey === currentQuestion.correctAnswer;
                            const isSelectedAnswer = userAnswers[currentQuestion.id] === optionKey;

                            return (
                                <label key={key} className={getOptionClasses(currentQuestion, optionKey)}>
                                    <input
                                        type="radio"
                                        name={`question-${currentQuestion.id}`}
                                        value={key}
                                        checked={isSelectedAnswer}
                                        onChange={() => handleOptionChange(currentQuestion.id, optionKey)}
                                        disabled={isAnswered}
                                        className="h-5 w-5 text-cyan-600 focus:ring-cyan-500 border-gray-300 disabled:cursor-not-allowed"
                                    />
                                    <span className={`ml-3 ${isAnswered ? '' : 'cursor-pointer'}`}>{key}. {value}</span>
                                     {isAnswered && (
                                        <div className="ml-auto">
                                            { isSelectedAnswer && !isCorrectAnswer ? <XIcon /> : (isCorrectAnswer ? <CheckIcon /> : null) }
                                        </div>
                                    )}
                                </label>
                            );
                        })}
                    </div>
                    {isAnswered && (
                        <div className="mt-4 p-4 bg-cyan-50/50 rounded-md border border-cyan-500/30 animate-fade-in">
                           <p className="font-bold text-cyan-700">Lý giải:</p>
                           <p className="text-gray-800">{currentQuestion.explanation}</p>
                        </div>
                    )}
                </div>
            )}
            
             {/* Sequential Navigation */}
            <div className="flex justify-center items-center mt-8 gap-x-8 md:gap-x-16">
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

            {showGoToTop && (
                <button
                    onClick={handleGoToTop}
                    className="fixed bottom-8 right-4 md:right-8 z-20 p-3 bg-cyan-500 text-white rounded-full shadow-lg hover:bg-cyan-600 transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 animate-fade-in"
                    aria-label="Lên đầu trang"
                >
                    <ArrowUpIcon />
                </button>
            )}
        </div>
    );
};

export default PracticeAll;