
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
    const [visibleExplanations, setVisibleExplanations] = useState<Record<number, boolean>>({});

    const score = questions.reduce((acc, q) => {
        return acc + (userAnswers[q.id] === q.correctAnswer ? 1 : 0);
    }, 0);

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

    const toggleExplanation = (questionId: number) => {
        setVisibleExplanations(prev => ({
            ...prev,
            [questionId]: !prev[questionId]
        }));
    };

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

            <div className="space-y-6">
                {questions.map((q, index) => (
                    <div key={q.id} className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
                        <p className="text-lg font-semibold mb-4"><span className="font-bold text-cyan-600">Câu {index + 1}:</span> {q.question}</p>
                        <div className="space-y-3 mb-4">
                            {Object.entries(q.options).map(([key, value]) => {
                                const isCorrect = key === q.correctAnswer;
                                const isSelected = userAnswers[q.id] === key;
                                return (
                                <div key={key} className={`flex items-center p-3 rounded-md border ${getOptionClasses(q, key)}`}>
                                    {isCorrect && <CheckIcon />}
                                    {isSelected && !isCorrect && <XIcon />}
                                    <span className="ml-3">{key}. {value}</span>
                                </div>
                            )})}
                        </div>
                        <div className="mt-4 text-right">
                            <button
                                onClick={() => toggleExplanation(q.id)}
                                className="text-cyan-600 hover:text-cyan-500 font-semibold text-sm py-1 px-3 rounded-md bg-gray-100 hover:bg-gray-200 transition-all"
                            >
                                {visibleExplanations[q.id] ? 'Ẩn lý giải' : 'Xem lý giải'}
                            </button>
                        </div>
                        {visibleExplanations[q.id] && (
                            <div className="mt-2 p-4 bg-gray-50 rounded-md border border-cyan-500/30">
                               <p className="font-bold text-cyan-600">Lý giải:</p>
                               <p className="text-gray-700">{q.explanation}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Results;