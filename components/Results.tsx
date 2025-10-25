import React, { useState, useEffect, useCallback } from 'react';
import { Question, UserAnswers } from '../types';
import { CheckIcon, XIcon } from './icons';

interface ResultsProps {
    questions: Question[];
    userAnswers: UserAnswers;
    onRestart: () => void;
    setTitle: string;
    isPracticeMode: boolean;
}

const Results: React.FC<ResultsProps> = ({ questions, userAnswers, onRestart, setTitle, isPracticeMode }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const score = questions.reduce((acc, q) => {
        return acc + (userAnswers[q.id] === q.correctAnswer ? 1 : 0);
    }, 0);

    const handleJumpToQuestion = useCallback((index: number) => {
        if (index >= 0 && index < questions.length) {
            setCurrentQuestionIndex(index);
        }
    }, [questions.length]);
    
    const handleNextQuestion = useCallback(() => {
        handleJumpToQuestion(currentQuestionIndex + 1);
    }, [currentQuestionIndex, handleJumpToQuestion]);

    const handlePrevQuestion = useCallback(() => {
        handleJumpToQuestion(currentQuestionIndex - 1);
    }, [currentQuestionIndex, handleJumpToQuestion]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
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
    }, [handlePrevQuestion, handleNextQuestion]);
    
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
        const wasAnswered = userAnswers[question.id] !== undefined;

        if (isCorrect) {
            return 'bg-green-100 border-green-400 text-green-800 ring-2 ring-green-500';
        }
        if (isSelected && !isCorrect) {
            return 'bg-red-100 border-red-400 text-red-800';
        }
        if (!isSelected && wasAnswered){
            return 'border-gray-200 text-gray-500 opacity-75';
        }
        return 'border-gray-200 text-gray-700';
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto">
            <div className="bg-white rounded-lg p-6 mb-8 text-center shadow-lg border border-gray-200">
                <h2 className="text-2xl font-bold mb-2 text-gray-900">Kết quả {setTitle}</h2>
                <p className="text-4xl font-bold text-gray-800">{score} / {questions.length}</p>
                 <button
                    onClick={onRestart}
                    className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                >
                    Về màn hình chính
                </button>
            </div>

            {/* Question Navigation Grid */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-700 text-center">Xem lại câu trả lời</h3>
                <div className="flex flex-wrap justify-center items-center gap-1">
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
                             const isCorrectAnswer = key === currentQuestion.correctAnswer;
                             const isSelectedAnswer = userAnswers[currentQuestion.id] === key;

                            return (
                            <div key={key} className={`flex items-center p-3 rounded-md border transition-all duration-300 ${getOptionClasses(currentQuestion, key)}`}>
                                { isSelectedAnswer && !isCorrectAnswer ? <XIcon /> : (isCorrectAnswer ? <CheckIcon /> : <div className="w-5 h-5" />) }
                                <span className="ml-3">{key}. {value}</span>
                            </div>
                        )})}
                    </div>
                    <div className="mt-4 p-4 bg-cyan-50/50 rounded-md border border-cyan-500/30">
                       <p className="font-bold text-cyan-700">Lý giải:</p>
                       <p className="text-gray-800">{currentQuestion.explanation}</p>
                    </div>
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
        </div>
    );
};

export default Results;