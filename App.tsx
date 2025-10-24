
import React, { useState, useMemo } from 'react';
import SetSelector from './components/SetSelector';
import Quiz from './components/Quiz';
import Results from './components/Results';
import { allQuestions } from './data/questions';
import { Question, UserAnswers } from './types';

const QUESTIONS_PER_SET = 10;

function App() {
    const [currentSetIndex, setCurrentSetIndex] = useState<number | null>(null);
    const [submittedAnswers, setSubmittedAnswers] = useState<UserAnswers | null>(null);

    const totalSets = Math.ceil(allQuestions.length / QUESTIONS_PER_SET);

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
        const start = currentSetIndex * QUESTIONS_PER_SET;
        const end = start + QUESTIONS_PER_SET;
        // In a real app with more questions, you would slice allQuestions.
        // Since we only have 10 sample questions, we'll use them for all sets.
        // To simulate, we could do:
        // return allQuestions.slice(start, end);
        // For now, let's just use the sample data for any selected set.
        return allQuestions.slice(0, 10);
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
        return <SetSelector totalSets={20} onSelectSet={handleSelectSet} />; // Hardcode 20 sets as requested
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