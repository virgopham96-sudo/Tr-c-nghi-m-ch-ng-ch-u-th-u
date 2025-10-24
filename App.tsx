import React, { useState, useMemo } from 'react';
import SetSelector from './components/SetSelector';
import Quiz from './components/Quiz';
import Results from './components/Results';
import { allSetsData } from './data/sets';
import { Question, UserAnswers } from './types';

function App() {
    const [currentSetIndex, setCurrentSetIndex] = useState<number | null>(null);
    const [submittedAnswers, setSubmittedAnswers] = useState<UserAnswers | null>(null);

    const totalSets = allSetsData.length;

    const handleSelectSet = (setIndex: number) => {
        setCurrentSetIndex(setIndex);
        setSubmittedAnswers(null);
    };

    const handleSubmitQuiz = (answers: UserAnswers) => {
        setSubmittedAnswers(answers);
    };

    const handleGoBackToSelector = () => {
        setCurrentSetIndex(null);
        setSubmittedAnswers(null);
    };

    const currentQuestions: Question[] = useMemo(() => {
        if (currentSetIndex === null) return [];
        return allSetsData[currentSetIndex] || [];
    }, [currentSetIndex]);


    const renderContent = () => {
        if (submittedAnswers && currentSetIndex !== null) {
            return (
                <Results
                    questions={currentQuestions}
                    userAnswers={submittedAnswers}
                    onRestart={handleGoBackToSelector}
                    setNumber={currentSetIndex + 1}
                />
            );
        }
        if (currentSetIndex !== null) {
            return (
                <Quiz
                    questions={currentQuestions}
                    onSubmit={handleSubmitQuiz}
                    onBack={handleGoBackToSelector}
                    setNumber={currentSetIndex + 1}
                />
            );
        }
        return <SetSelector totalSets={totalSets} onSelectSet={handleSelectSet} />;
    };

    return (
        <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
            <header className="bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-10 border-b border-gray-200">
                <div className="container mx-auto px-4 py-4">
                    <h1 className="text-2xl md:text-3xl font-bold text-center text-cyan-600">Ôn luyện Luật Đấu Thầu</h1>
                </div>
            </header>
            <main className="container mx-auto px-4 py-4">
                {renderContent()}
            </main>
        </div>
    );
}

export default App;
