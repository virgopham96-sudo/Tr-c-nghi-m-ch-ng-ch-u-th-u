import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { Question, UserAnswers } from '../types';
import { ArrowUpIcon, ChevronLeftIcon, ChevronRightIcon } from './icons';

interface QuizProps {
    questions: Question[];
    onSubmit: (answers: UserAnswers, timeTaken: number) => void;
    onBack: () => void;
    setTitle: string;
    isPracticeMode: boolean;
    totalTime: number;
}

const Quiz: React.FC<QuizProps> = ({ questions, onSubmit, onBack, setTitle, isPracticeMode, totalTime }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<UserAnswers>({});
    const [timeRemaining, setTimeRemaining] = useState(totalTime);
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
                    onSubmit(answersRef.current, totalTime); // Auto-submit with latest answers
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timerId); // Cleanup on unmount
    }, [onSubmit, isPracticeMode, totalTime]);
    
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

    const handleOptionChange = useCallback((questionId: number, option: 'A' | 'B' | 'C' | 'D') => {
        setSelectedAnswers(prev => ({
            ...prev,
            [questionId]: option
        }));
        if (autoNext) {
            setTimeout(() => {
                handleNextQuestion();
            }, 300);
        }
    }, [autoNext, handleNextQuestion]);
    
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const activeElement = document.activeElement as HTMLElement;

            // Allow number keys to select answers
            const keyMap = { '1': 'A', '2': 'B', '3': 'C', '4': 'D' };
            const option = keyMap[event.key as keyof typeof keyMap];
            if (option) {
                const currentQuestion = questions[currentQuestionIndex];
                if (currentQuestion) {
                    handleOptionChange(currentQuestion.id, option as 'A' | 'B' | 'C' | 'D');
                }
                event.preventDefault(); // Prevent default action (e.g., typing '1' in a field)
                return;
            }

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
    }, [handlePrevQuestion, handleNextQuestion, questions, currentQuestionIndex, handleOptionChange]);


    
    const answeredCount = useMemo(() => Object.keys(selectedAnswers).length, [selectedAnswers]);

    const handleSubmit = () => {
        onSubmit(selectedAnswers, totalTime - timeRemaining);
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
        : 'text-slate-800';

    const currentQuestion = questions[currentQuestionIndex];

    const getQuestionNavClasses = (index: number) => {
        let baseClasses = "w-10 h-10 flex items-center justify-center rounded-lg font-bold text-sm transition-all duration-200 border transform hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400";
        if (index === currentQuestionIndex) {
            return `${baseClasses} bg-cyan-500 text-white border-cyan-600 shadow-md`;
        }
        if (selectedAnswers[questions[index].id]) {
            return `${baseClasses} bg-green-500 text-white border-green-600`;
        }
        return `${baseClasses} bg-white text-slate-700 border-slate-300`;
    };


    return (
        <>
            <div className="p-4 md:p-8 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-6 text-slate-900">{setTitle}</h2>

                <div className="mb-6 bg-white/90 backdrop-blur-md border border-slate-200 rounded-xl shadow-lg">
                    <div className="p-4 flex justify-between items-center">
                        <button
                            onClick={onBack}
                            className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-colors"
                        >
                            Thoát
                        </button>
                        <div className="flex flex-col items-center flex-grow text-center px-2">
                             {!isPracticeMode ? (
                                 <>
                                    <div className={`text-2xl font-mono font-bold ${timerClasses}`}>{formatTime(timeRemaining)}</div>
                                    <div className="text-sm text-slate-500">Đã trả lời: {answeredCount}/{questions.length}</div>
                                 </>
                             ) : (
                                 <>
                                    <div className="text-lg font-semibold text-slate-700 h-7 flex items-center">Chế độ Luyện tập</div>
                                    <div className="text-sm text-slate-500">Đã trả lời: {answeredCount}/{questions.length}</div>
                                 </>
                             )}
                             <div className="mt-1 hidden sm:block">
                                <label className="flex items-center justify-center text-sm text-slate-600 cursor-pointer select-none">
                                    <input
                                        type="checkbox"
                                        checked={autoNext}
                                        onChange={(e) => setAutoNext(e.target.checked)}
                                        className="h-4 w-4 rounded text-cyan-600 focus:ring-cyan-500 border-slate-300"
                                    />
                                    <span className="ml-2">Tự động chuyển câu</span>
                                </label>
                            </div>
                        </div>
                        <button
                            onClick={handleSubmit}
                            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            Nộp bài
                        </button>
                    </div>
                </div>
                
                <div className="text-center mb-4">
                    <button
                        onClick={toggleGridVisibility}
                        className="bg-white hover:bg-slate-100 text-slate-700 font-semibold py-2 px-5 rounded-full transition-colors border border-slate-200 shadow-sm"
                    >
                        {isGridVisible ? 'Ẩn danh sách câu hỏi' : 'Hiển thị danh sách câu hỏi'}
                    </button>
                </div>
                
                {isGridVisible && (
                     <div className="mb-8 p-4 bg-white/50 rounded-xl border border-slate-200 animate-fade-in">
                        <div className="flex flex-wrap justify-center gap-2">
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

                <div className="">
                    {currentQuestion && (
                        <div className={`bg-white rounded-xl p-4 sm:p-6 shadow-xl border border-slate-200 transition-opacity duration-150 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                            <div className="max-h-[55vh] overflow-y-auto pr-2">
                                <p className="text-lg font-semibold mb-4 text-slate-800"><span className="font-bold text-cyan-600">Câu {currentQuestionIndex + 1}:</span> {currentQuestion.question}</p>
                                <div className="space-y-3 quiz-options-container">
                                    {Object.entries(currentQuestion.options).map(([key, value]) => (
                                        <div
                                            key={key}
                                            onClick={() => handleOptionChange(currentQuestion.id, key as 'A' | 'B' | 'C' | 'D')}
                                            className={`flex items-center p-4 rounded-lg border-2 transition-all cursor-pointer ${selectedAnswers[currentQuestion.id] === key ? 'bg-cyan-50 border-cyan-500 ring-2 ring-cyan-200' : 'bg-white border-slate-200 hover:bg-cyan-50/50 hover:border-cyan-300'}`}>
                                            <span className="text-slate-700">{key}. {value}</span>
                                        </div>
                                    ))}
                                </div>
                                 <div className="mt-6 text-right">
                                    <button
                                        onClick={toggleHint}
                                        className="text-cyan-600 hover:text-cyan-800 font-semibold text-sm py-1 px-3 rounded-full bg-cyan-50 hover:bg-cyan-100 transition-all"
                                    >
                                        {showHint ? 'Ẩn gợi ý' : 'Xem gợi ý'}
                                    </button>
                                </div>
                                {showHint && (
                                    <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-cyan-200 animate-fade-in">
                                       <p className="font-bold text-cyan-700">Gợi ý:</p>
                                       <p className="text-slate-700">{currentQuestion.explanation}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                    <div className="flex justify-between items-center mt-6">
                        <button
                            onClick={handlePrevQuestion}
                            disabled={currentQuestionIndex === 0}
                            className="bg-white hover:bg-slate-100 text-slate-700 font-bold py-2 px-4 rounded-full transition-colors border border-slate-200 shadow-sm disabled:bg-slate-100/50 disabled:text-slate-400 disabled:cursor-not-allowed disabled:transform-none transform hover:-translate-x-1 flex items-center gap-2"
                            aria-label="Câu hỏi trước"
                        >
                            <ChevronLeftIcon />
                            <span className="hidden sm:inline">Câu trước</span>
                        </button>
                        <span className="font-semibold text-lg text-slate-600">
                            {currentQuestionIndex + 1} / {questions.length}
                        </span>
                        <button
                            onClick={handleNextQuestion}
                            disabled={currentQuestionIndex === questions.length - 1}
                            className="bg-white hover:bg-slate-100 text-slate-700 font-bold py-2 px-4 rounded-full transition-colors border border-slate-200 shadow-sm disabled:bg-slate-100/50 disabled:text-slate-400 disabled:cursor-not-allowed disabled:transform-none transform hover:translate-x-1 flex items-center gap-2"
                            aria-label="Câu hỏi tiếp theo"
                        >
                            <span className="hidden sm:inline">Câu tiếp theo</span>
                            <ChevronRightIcon />
                        </button>
                    </div>
                </div>
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

        </>
    );
};

export default Quiz;