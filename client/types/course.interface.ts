export interface ICourse {
  title: string;
  image: string;
  content: ITopic[];
}

export interface ITopic {
  title: string;
  content: string[];
}
