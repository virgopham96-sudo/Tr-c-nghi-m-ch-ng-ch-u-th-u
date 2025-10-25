import React from 'react';
import { HistoryEntry } from '../types';

interface HistoryProps {
    history: HistoryEntry[];
    onBack: () => void;
    onClearHistory: () => void;
}

const History: React.FC<HistoryProps> = ({ history, onBack, onClearHistory }) => {
    
    const formatTime = (seconds: number) => {
        if (isNaN(seconds) || seconds < 0) return "00:00";
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="p-4 md:p-8 max-w-4xl mx-auto animate-fade-in">
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
                <h2 className="text-3xl font-bold text-gray-900 inline-block">Lịch sử làm bài</h2>
            </div>

            {history.length > 0 && (
                 <div className="text-right mb-4">
                    <button
                        onClick={onClearHistory}
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
                    >
                        Xoá toàn bộ lịch sử
                    </button>
                </div>
            )}

            {history.length === 0 ? (
                <div className="text-center bg-white p-8 rounded-lg shadow-md border border-gray-200">
                    <p className="text-gray-600 text-lg">Chưa có lịch sử làm bài nào.</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {history.map((entry) => (
                        <div key={entry.id} className="bg-white p-4 rounded-lg shadow-md border border-gray-200 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
                            <div className="col-span-2 md:col-span-1">
                                <p className="font-bold text-lg text-cyan-700">{entry.setTitle}</p>
                                <p className="text-sm text-gray-500">{entry.date}</p>
                            </div>
                            <div className="text-center">
                                <p className="text-sm text-gray-500">Điểm</p>
                                <p className="font-bold text-2xl text-cyan-600">{entry.score}/100</p>
                            </div>
                             <div className="text-center">
                                <p className="text-sm text-gray-500">Số câu đúng</p>
                                <p className="font-semibold text-lg text-gray-700">{entry.correctCount}/{entry.totalQuestions}</p>
                            </div>
                             <div className="text-center">
                                <p className="text-sm text-gray-500">Thời gian</p>
                                <p className="font-semibold text-lg text-gray-700">{formatTime(entry.completionTime)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default History;
