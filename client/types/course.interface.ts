export interface ICourse {
  id: string;
  title: string;
  image: string;
  description: string;
  content: IChapter[];
  completedChapters: string[];
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
