export interface ICourse {
  title: string;
  image: string;
  description: string;
  content: IChapters[];
}

export interface IChapters {
  title: string;
  content: string[];
}
