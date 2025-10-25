
import React from 'react';
import { BookOpenIcon, ClipboardListIcon, ShuffleIcon } from './icons';

interface ModeSelectorProps {
    onSelectPracticeAll: () => void;
    onSelectTestBySet: () => void;
    onSelectTestRandom: () => void;
}

const ModeSelector: React.FC<ModeSelectorProps> = ({
    onSelectPracticeAll,
    onSelectTestBySet,
    onSelectTestRandom,
}) => {
    return (
        <div className="p-4 md:p-8 max-w-2xl mx-auto flex flex-col items-center justify-center min-h-[60vh] animate-fade-in">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Chọn chế độ</h2>
                <p className="mt-4 text-lg text-slate-600">Bắt đầu quá trình ôn luyện của bạn ngay bây giờ!</p>
            </div>
            <div className="w-full space-y-5">
                <button
                    onClick={onSelectPracticeAll}
                    className="w-full text-left p-6 bg-white border-2 border-slate-200 rounded-xl shadow-lg hover:border-cyan-500 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex items-center gap-x-5 group"
                >
                    <div className="bg-cyan-100 p-3 rounded-lg">
                        <BookOpenIcon className="h-8 w-8 text-cyan-600" />
                    </div>
                    <div>
                        <span className="text-xl font-bold text-slate-800 group-hover:text-cyan-700">Chế độ Luyện tập</span>
                        <span className="block text-sm font-normal mt-1 text-slate-600">
                            Ôn tập toàn bộ 340 câu hỏi. Nhận phản hồi và giải thích ngay lập tức.
                        </span>
                    </div>
                </button>
                <button
                    onClick={onSelectTestBySet}
                    className="w-full text-left p-6 bg-white border-2 border-slate-200 rounded-xl shadow-lg hover:border-cyan-500 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex items-center gap-x-5 group"
                >
                     <div className="bg-cyan-100 p-3 rounded-lg">
                        <ClipboardListIcon className="h-8 w-8 text-cyan-600" />
                    </div>
                    <div>
                        <span className="text-xl font-bold text-slate-800 group-hover:text-cyan-700">Thi theo bộ đề</span>
                        <span className="block text-sm font-normal mt-1 text-slate-600">
                            Chọn 1 trong 34 bộ đề. Làm bài thi tính giờ 15 phút.
                        </span>
                    </div>
                </button>
                <button
                    onClick={onSelectTestRandom}
                    className="w-full text-left p-6 bg-white border-2 border-slate-200 rounded-xl shadow-lg hover:border-cyan-500 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex items-center gap-x-5 group"
                >
                     <div className="bg-cyan-100 p-3 rounded-lg">
                        <ShuffleIcon className="h-8 w-8 text-cyan-600" />
                    </div>
                    <div>
                        <span className="text-xl font-bold text-slate-800 group-hover:text-cyan-700">Thi ngẫu nhiên</span>
                        <span className="block text-sm font-normal mt-1 text-slate-600">
                            Làm bài thi ngẫu nhiên 70 câu. Tính giờ 60 phút.
                        </span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default ModeSelector;