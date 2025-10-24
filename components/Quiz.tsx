import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Question, UserAnswers } from '../types';

interface QuizProps {
    questions: Question[];
    onSubmit: (answers: UserAnswers) => void;
    onBack: () => void;
    setNumber: number;
}

const Quiz: React.FC<QuizProps> = ({ questions, onSubmit, onBack, setNumber }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<UserAnswers>({});
    const [timeRemaining, setTimeRemaining] = useState(15 * 60); // 15 minutes in seconds
    const [isFading, setIsFading] = useState(false); // State for fade transition
    const [showHint, setShowHint] = useState(false); // State for hint visibility

    // Ref to hold the latest answers to avoid stale closure in setInterval
    const answersRef = useRef(selectedAnswers);
    answersRef.current = selectedAnswers;

    useEffect(() => {
        const timerId = setInterval(() => {
            setTimeRemaining(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(timerId);
                    onSubmit(answersRef.current); // Auto-submit with latest answers
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timerId); // Cleanup on unmount
    }, [onSubmit]);

    const handleOptionChange = (questionId: number, option: 'A' | 'B' | 'C' | 'D') => {
        setSelectedAnswers(prev => ({
            ...prev,
            [questionId]: option
        }));
    };
    
    const answeredCount = useMemo(() => Object.keys(selectedAnswers).length, [selectedAnswers]);

    const handleSubmit = () => {
        onSubmit(selectedAnswers);
    };

    const handleJumpToQuestion = (index: number) => {
        if (index !== currentQuestionIndex) {
            setIsFading(true);
            setShowHint(false); // Hide hint when changing question
            setTimeout(() => {
                setCurrentQuestionIndex(index);
                setIsFading(false);
            }, 150);
        }
    };
    
    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            handleJumpToQuestion(currentQuestionIndex + 1);
        }
    };

    const handlePrevQuestion = () => {
        if (currentQuestionIndex > 0) {
            handleJumpToQuestion(currentQuestionIndex - 1);
        }
    };

    const toggleHint = () => {
        setShowHint(prev => !prev);
    };

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const timerClasses = timeRemaining < 60 
        ? 'text-red-500 font-bold animate-pulse' 
        : 'text-blue-600';

    const currentQuestion = questions[currentQuestionIndex];

    const getQuestionNavClasses = (index: number) => {
        const baseClasses = "w-10 h-10 flex items-center justify-center rounded-md font-bold text-sm transition-all duration-200 border";
        if (index === currentQuestionIndex) {
            return `${baseClasses} bg-cyan-500 text-white border-cyan-600 shadow-md`;
        }
        if (selectedAnswers[questions[index].id]) {
            return `${baseClasses} bg-green-500 text-white border-green-600 hover:bg-green-600`;
        }
        return `${baseClasses} bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400`;
    };


    return (
        <div className="p-4 md:p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6 text-cyan-600">Bộ đề {setNumber}</h2>
            
            {/* Question Navigation Grid */}
            <div className="mb-6">
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

            <div className="pb-24"> {/* Add padding-bottom to avoid overlap with sticky footer */}
                {currentQuestion && (
                    <div className={`bg-white rounded-lg p-6 shadow-lg border border-gray-200 min-h-[250px] transition-opacity duration-150 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                        <p className="text-lg font-semibold mb-4"><span className="font-bold text-cyan-600">Câu {currentQuestionIndex + 1}:</span> {currentQuestion.question}</p>
                        <div className="space-y-3">
                            {Object.entries(currentQuestion.options).map(([key, value]) => (
                                <label key={key} className="flex items-center p-3 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">
                                    <input
                                        type="radio"
                                        name={`question-${currentQuestion.id}`}
                                        value={key}
                                        checked={selectedAnswers[currentQuestion.id] === key}
                                        onChange={() => handleOptionChange(currentQuestion.id, key as 'A' | 'B' | 'C' | 'D')}
                                        className="h-5 w-5 text-cyan-600 bg-gray-100 border-gray-300 focus:ring-cyan-500 focus:ring-2"
                                    />
                                    <span className="ml-4 text-gray-700">{key}. {value}</span>
                                </label>
                            ))}
                        </div>
                         <div className="mt-4 text-right">
                            <button
                                onClick={toggleHint}
                                className="text-cyan-600 hover:text-cyan-500 font-semibold text-sm py-1 px-3 rounded-md bg-gray-100 hover:bg-gray-200 transition-all"
                            >
                                {showHint ? 'Ẩn gợi ý' : 'Xem gợi ý'}
                            </button>
                        </div>
                        {showHint && (
                            <div className="mt-2 p-4 bg-gray-50 rounded-md border border-cyan-500/30 animate-fade-in">
                               <p className="font-bold text-cyan-600">Gợi ý:</p>
                               <p className="text-gray-700">{currentQuestion.explanation}</p>
                            </div>
                        )}
                    </div>
                )}
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
            <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-gray-200">
                <div className="max-w-4xl mx-auto p-4 flex justify-between items-center">
                    <button
                        onClick={onBack}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-lg transition-colors"
                    >
                        Quay lại
                    </button>
                    <div className="text-center">
                         <div className={`text-xl font-mono ${timerClasses}`}>{formatTime(timeRemaining)}</div>
                         <div className="text-sm text-gray-500">Đã trả lời: {answeredCount}/{questions.length}</div>
                    </div>
                    <button
                        onClick={handleSubmit}
                        className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                    >
                        Nộp bài
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Quiz;