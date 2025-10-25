export interface Question {
  id: number;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
}

export type UserAnswers = Record<number, 'A' | 'B' | 'C' | 'D'>;

// FIX: Add the exported member 'HistoryEntry' to fix the import error in components/History.tsx.
export interface HistoryEntry {
  id: number;
  setTitle: string;
  date: string;
  score: number;
  correctCount: number;
  totalQuestions: number;
  completionTime: number;
}
