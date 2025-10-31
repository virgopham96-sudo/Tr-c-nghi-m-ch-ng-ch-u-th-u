

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import ModeSelector from './components/ModeSelector';
import SetSelector from './components/SetSelector';
import Quiz from './components/Quiz';
import Results from './components/Results';
import PracticeAll from './components/PracticeAll';
import History from './components/History';
import { allSetsData } from './data/sets';
import { Question, UserAnswers } from './types';

// Fisher-Yates shuffle algorithm
const shuffleArray = (array: Question[]): Question[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

type View = 'mode-select' | 'set-select' | 'quiz' | 'results' | 'practice-all' | 'history';

function App() {
    const [view, setView] = useState<View>('mode-select');
    const [currentSetIndex, setCurrentSetIndex] = useState<number | null>(null);
    const [submittedAnswers, setSubmittedAnswers] = useState<UserAnswers | null>(null);
    const [isPracticeMode, setIsPracticeMode] = useState<boolean>(false);
    const [completionTime, setCompletionTime] = useState<number | null>(null);

    const totalSets = allSetsData.length;
    const allQuestions = useMemo(() => allSetsData.flat(), []);
    
    const quizTitle = useMemo(() => {
        const mode = isPracticeMode ? 'Luyện tập' : 'Thi';
        if (currentSetIndex === null) return '';
        if (currentSetIndex === -1) return `${mode} ngẫu nhiên`;
        return `${mode} bộ đề ${currentSetIndex + 1}`;
    }, [currentSetIndex, isPracticeMode]);
    
    const currentQuestions: Question[] = useMemo(() => {
        if (currentSetIndex === null) return [];
        
        if (currentSetIndex === -1) { // Random quiz mode
            const shuffled = shuffleArray(allQuestions);
            return shuffled.slice(0, 70);
        }

        return allSetsData[currentSetIndex] || [];
    }, [currentSetIndex, allQuestions]);

    const handleSubmitQuiz = useCallback((answers: UserAnswers, timeTaken: number) => {
        setSubmittedAnswers(answers);
        setCompletionTime(timeTaken);
        setView('results');
    }, []);


    const handleSelectPracticeAll = () => {
        setView('practice-all');
    };

    const handleSelectTestBySet = () => {
        setIsPracticeMode(false);
        setView('set-select');
    };

    const handleSelectTestRandom = () => {
        setIsPracticeMode(false);
        setCurrentSetIndex(-1); // Random mode
        setSubmittedAnswers(null);
        setView('quiz');
    };
    
    const handleSelectSupport = () => {
        setView('history');
    };

    const handleSelectSet = (setIndex: number) => {
        setCurrentSetIndex(setIndex);
        setSubmittedAnswers(null);
        setView('quiz');
    };
    
    const handleGoBackToMainMenu = () => {
        setView('mode-select');
        setCurrentSetIndex(null);
        setSubmittedAnswers(null);
        setIsPracticeMode(false);
        setCompletionTime(null);
    };

    const quizTotalTime = useMemo(() => {
        if (currentSetIndex === -1) { // Random quiz
            return 60 * 60; // 60 minutes
        }
        if (currentSetIndex !== null) { // Set quiz
            return 15 * 60; // 15 minutes
        }
        return 0;
    }, [currentSetIndex]);


    const renderContent = () => {
        switch (view) {
            case 'history':
                 return <History onBack={handleGoBackToMainMenu} />;
            case 'practice-all':
                return (
                    <PracticeAll
                        questions={allQuestions}
                        onBack={handleGoBackToMainMenu}
                    />
                );
            case 'quiz':
                return (
                    <Quiz
                        questions={currentQuestions}
                        onSubmit={handleSubmitQuiz}
                        onBack={handleGoBackToMainMenu}
                        setTitle={quizTitle}
                        isPracticeMode={isPracticeMode}
                        totalTime={quizTotalTime}
                    />
                );
            case 'results':
                return (
                    <Results
                        questions={currentQuestions}
                        userAnswers={submittedAnswers!}
                        onRestart={handleGoBackToMainMenu}
                        setTitle={quizTitle}
                        isPracticeMode={isPracticeMode}
                        completionTime={completionTime!}
                    />
                );
            case 'set-select':
                return (
                    <SetSelector
                        totalSets={totalSets}
                        onSelectSet={handleSelectSet}
                        onBack={handleGoBackToMainMenu}
                    />
                );
            case 'mode-select':
            default:
                return (
                    <ModeSelector
                        onSelectPracticeAll={handleSelectPracticeAll}
                        onSelectTestBySet={handleSelectTestBySet}
                        onSelectTestRandom={handleSelectTestRandom}
                        onSelectSupport={handleSelectSupport}
                    />
                );
        }
    };

    return (
        <div className="min-h-screen font-sans flex flex-col">
            <header className="bg-white/95 backdrop-blur-sm shadow-md sticky top-0 z-10 border-b border-slate-200">
                <div className="container mx-auto px-4 py-4">
                    <h1 className="text-2xl md:text-3xl font-bold text-center text-slate-900 tracking-tight">ÔN THI CHỨNG CHỈ ĐẤU THẦU 2025</h1>
                </div>
            </header>
            <main className="mx-auto px-4 py-4 sm:py-6 md:py-8 flex-grow w-full">
                {renderContent()}
            </main>
            <footer className="text-center p-6 text-slate-500 text-sm border-t border-slate-200 bg-white/30">
                Bản quyền thuộc về "Phạm Văn Bình - Phòng CĐVT - Công ty 790"
            </footer>
        </div>
    );
}

export default App;
