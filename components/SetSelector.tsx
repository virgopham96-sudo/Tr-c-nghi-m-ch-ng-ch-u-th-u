
import React from 'react';

interface SetSelectorProps {
    totalSets: number;
    onSelectSet: (setIndex: number) => void;
}

const SetSelector: React.FC<SetSelectorProps> = ({ totalSets, onSelectSet }) => {
    return (
        <div className="p-4 md:p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-cyan-600">Chọn bộ đề ôn luyện</h2>
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