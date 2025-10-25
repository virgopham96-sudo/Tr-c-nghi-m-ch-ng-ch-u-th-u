import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { Question, UserAnswers } from '../types';
import { ArrowUpIcon } from './icons';

interface QuizProps {
    questions: Question[];
    onSubmit: (answers: UserAnswers) => void;
    onBack: () => void;
    setTitle: string;
    isPracticeMode: boolean;
}

const Quiz: React.FC<QuizProps> = ({ questions, onSubmit, onBack, setTitle, isPracticeMode }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<UserAnswers>({});
    const [timeRemaining, setTimeRemaining] = useState(60 * 60); // 60 minutes in seconds
    const [isFading, setIsFading] = useState(false); // State for fade transition
    const [showHint, setShowHint] = useState(false); // State for hint visibility
    const [showGoToTop, setShowGoToTop] = useState(false);
    const [autoNext, setAutoNext] = useState(false);
    const [isGridVisible, setIsGridVisible] = useState(false);

    // Ref to hold the latest answers to avoid stale closure in setInterval
    const answersRef = useRef(selectedAnswers);
    answersRef.current = selectedAnswers;
    
    const toggleGridVisibility = () => {
        setIsGridVisible(prev => !prev);
    };

    useEffect(() => {
        if (isPracticeMode) return; // Don't start timer in practice mode

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
    }, [onSubmit, isPracticeMode]);
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowGoToTop(true);
            } else {
                setShowGoToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleJumpToQuestion = useCallback((index: number) => {
        if (index >= 0 && index < questions.length && index !== currentQuestionIndex) {
            setIsFading(true);
            setShowHint(false); // Hide hint when changing question
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

    const handleOptionChange = (questionId: number, option: 'A' | 'B' | 'C' | 'D') => {
        setSelectedAnswers(prev => ({
            ...prev,
            [questionId]: option
        }));
        if (autoNext) {
            setTimeout(() => {
                handleNextQuestion();
            }, 300);
        }
    };
    
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const activeElement = document.activeElement as HTMLElement;

            // Allow up/down arrows if focus is within the options container
            if (activeElement && activeElement.closest('.quiz-options-container')) {
                 if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
                    const options = Array.from(
                        document.querySelectorAll<HTMLInputElement>('input[type="radio"][name^="question-"]')
                    );
                    const currentIndex = options.findIndex(opt => opt.checked);
                    
                    let nextIndex;
                    if (event.key === 'ArrowUp') {
                        nextIndex = currentIndex > 0 ? currentIndex - 1 : options.length - 1;
                    } else { // ArrowDown
                        nextIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0;
                    }

                    if (options[nextIndex]) {
                         options[nextIndex].click();
                         options[nextIndex].focus();
                    }
                    event.preventDefault();
                    return; 
                 }
            }
            
            // Global left/right navigation
            if (event.key === 'ArrowLeft') {
                handlePrevQuestion();
                event.preventDefault();
            } else if (event.key === 'ArrowRight') {
                handleNextQuestion();
                event.preventDefault();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handlePrevQuestion, handleNextQuestion, questions, currentQuestionIndex, selectedAnswers, autoNext]);


    
    const answeredCount = useMemo(() => Object.keys(selectedAnswers).length, [selectedAnswers]);

    const handleSubmit = () => {
        onSubmit(selectedAnswers);
    };
    
    const handleGoToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
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
        let baseClasses = "w-10 h-10 flex items-center justify-center rounded-md font-bold text-sm transition-all duration-200 border transform hover:-translate-y-0.5 hover:shadow-lg hover:ring-2 hover:ring-cyan-400";
        if (index === currentQuestionIndex) {
            return `${baseClasses} bg-cyan-500 text-white border-cyan-600 shadow-md`;
        }
        if (selectedAnswers[questions[index].id]) {
            return `${baseClasses} bg-green-500 text-white border-green-600`;
        }
        return `${baseClasses} bg-white text-gray-700 border-gray-300`;
    };


    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">{setTitle}</h2>
            
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
            )}

            <div className="pb-24"> {/* Add padding-bottom to avoid overlap with sticky footer */}
                {currentQuestion && (
                    <div className={`bg-white rounded-lg p-6 shadow-lg border border-gray-200 min-h-[250px] transition-opacity duration-150 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                        <p className="text-lg font-semibold mb-4"><span className="font-bold text-cyan-600">Câu {currentQuestionIndex + 1}:</span> {currentQuestion.question}</p>
                        <div className="space-y-3 quiz-options-container">
                            {Object.entries(currentQuestion.options).map(([key, value]) => (
                                <label key={key} className="flex items-center p-3 rounded-md hover:bg-gray-100 cursor-pointer transition-colors focus-within:ring-2 focus-within:ring-cyan-500">
                                    <input
                                        type="radio"
                                        name={`question-${currentQuestion.id}`}
                                        value={key}
                                        checked={selectedAnswers[currentQuestion.id] === key}
                                        onChange={() => handleOptionChange(currentQuestion.id, key as 'A' | 'B' | 'C' | 'D')}
                                        className="h-5 w-5 text-cyan-600 bg-gray-100 border-gray-300 focus:outline-none focus:ring-0"
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

            {showGoToTop && (
                <button
                    onClick={handleGoToTop}
                    className="fixed bottom-28 right-4 md:right-8 z-20 p-3 bg-cyan-500 text-white rounded-full shadow-lg hover:bg-cyan-600 transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 animate-fade-in"
                    aria-label="Lên đầu trang"
                >
                    <ArrowUpIcon />
                </button>
            )}

            <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-gray-200">
                <div className="max-w-7xl mx-auto p-4 flex justify-center items-center gap-x-8 md:gap-x-16">
                    <button
                        onClick={onBack}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-lg transition-colors"
                    >
                        Quay lại
                    </button>
                    <div className="flex flex-col items-center">
                         {!isPracticeMode ? (
                             <>
                                <div className={`text-xl font-mono ${timerClasses}`}>{formatTime(timeRemaining)}</div>
                                <div className="text-sm text-gray-500">Đã trả lời: {answeredCount}/{questions.length}</div>
                             </>
                         ) : (
                             <>
                                <div className="text-lg font-semibold text-gray-700 h-7 flex items-center">Chế độ Luyện tập</div>
                                <div className="text-sm text-gray-500">Đã trả lời: {answeredCount}/{questions.length}</div>
                             </>
                         )}
                         <div className="mt-1">
                            <label className="flex items-center justify-center text-sm text-gray-600 cursor-pointer select-none">
                                <input
                                    type="checkbox"
                                    checked={autoNext}
                                    onChange={(e) => setAutoNext(e.target.checked)}
                                    className="h-4 w-4 rounded text-cyan-600 focus:ring-cyan-500 border-gray-300"
                                />
                                <span className="ml-2">Tự động chuyển câu khi chọn đáp án</span>
                            </label>
                        </div>
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