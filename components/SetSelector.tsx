import React from 'react';

interface SetSelectorProps {
    totalSets: number;
    onSelectSet: (setIndex: number) => void;
    onBack: () => void;
}

const SetSelector: React.FC<SetSelectorProps> = ({ totalSets, onSelectSet, onBack }) => {
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
                <h2 className="text-3xl font-bold text-gray-900 inline-block">Chọn bộ đề</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {Array.from({ length: totalSets }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => onSelectSet(i)}
                        className="p-4 bg-white rounded-lg text-lg font-semibold text-gray-700 shadow-md border border-gray-200 hover:bg-cyan-500 hover:text-white hover:shadow-lg hover:border-cyan-500 transform hover:-translate-y-1 transition-all duration-300"
                    >
                        Bộ đề {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SetSelector;
