export interface ICourse {
  id: string;
  title: string;
  image: string;
  description: string;
  content: IChapter[];
  completedChapters: string[];
  quiz: IQuiz[];
  complitedQuizes?: ISelectedQuizOptions[];
  isQuizComplited?: boolean;
}

export interface IChapter {
  title: string;
  content: IChaptersContent[];
}

export interface IChaptersContent {
  code: string;
  example: string;
  topic: string;
  explain: string;
}

export interface IQuiz {
  question: string;
  "corect-answer": string;
  options: string[];
}

export interface ISelectedQuizOptions extends IQuiz {
  selected: string;
  isCorrect: boolean;
}
