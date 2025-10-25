import React from 'react';

interface ModeSelectorProps {
    onSelectPracticeAll: () => void;
    onSelectTestBySet: () => void;
    onSelectTestRandom: () => void;
}

const ModeSelector: React.FC<ModeSelectorProps> = ({
    onSelectPracticeAll,
    onSelectTestBySet,
    onSelectTestRandom
}) => {
    return (
        <div className="p-4 md:p-8 max-w-lg mx-auto flex flex-col items-center justify-center min-h-[60vh] animate-fade-in">
            <div className="w-full space-y-5">
                <button
                    onClick={onSelectPracticeAll}
                    className="w-full text-center p-6 bg-cyan-600 text-white rounded-lg shadow-lg hover:bg-cyan-700 transform hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                    <span className="text-xl font-bold">Chế độ Luyện tập</span>
                    <span className="text-sm font-normal mt-2 text-cyan-100">
                        Ôn tập toàn bộ 340 câu hỏi có sẵn. Nhận phản hồi và giải thích ngay lập tức.
                    </span>
                </button>
                <button
                    onClick={onSelectTestBySet}
                    className="w-full text-center p-6 bg-white border-2 border-cyan-600 rounded-lg shadow-lg hover:bg-cyan-50 transform hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                     <span className="text-xl font-bold text-cyan-700">Thi theo bộ đề</span>
                     <span className="text-sm font-normal mt-2 text-gray-600">
                        Chọn 1 trong 34 bộ đề. Làm bài thi tính giờ 15 phút.
                    </span>
                </button>
                <button
                    onClick={onSelectTestRandom}
                    className="w-full text-center p-6 bg-white border-2 border-cyan-600 rounded-lg shadow-lg hover:bg-cyan-50 transform hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                     <span className="text-xl font-bold text-cyan-700">Thi ngẫu nhiên</span>
                     <span className="text-sm font-normal mt-2 text-gray-600">
                        Làm bài thi ngẫu nhiên 70 câu. Tính giờ 60 phút.
                    </span>
                </button>
            </div>
        </div>
    );
};

export default ModeSelector;