import { ImageSourcePropType } from "react-native";

export const IMAGES = {
  "1": require("@/assets/images/courses/1.webp"),
  "2": require("@/assets/images/courses/2.webp"),
  "3": require("@/assets/images/courses/3.webp"),
  "4": require("@/assets/images/courses/4.webp"),
  "5": require("@/assets/images/courses/5.webp"),
  "6": require("@/assets/images/courses/6.webp"),
  "7": require("@/assets/images/courses/7.webp"),
};

export const PRACTICE_OPTIONS: IPricticeOption[] = [
  {
    name: "Quiz",
    image: require("@/assets/images/courses/11.jpg"),
    icon: require("@/assets/images/quiz.png"),
    path: "/practice/(data)/quiz",
  },
  {
    name: "Flashcards",
    image: require("@/assets/images/courses/22.jpg"),
    icon: require("@/assets/images/flash-card.png"),
    path: "/practice/(data)/flashcards",
  },
  {
    name: "Question & ans",
    image: require("@/assets/images/courses/33.jpg"),
    icon: require("@/assets/images/qa.png"),
    path: "/practice/(data)/qa",
  },
];

export type PracticeName = "Quiz" | "Flashcards" | "Question & ans";

export type PracticePath =
  | "/practice/(data)/quiz"
  | "/practice/(data)/flashcards"
  | "/practice/(data)/qa";

export interface IPricticeOption {
  name: PracticeName;
  image: ImageSourcePropType;
  icon: ImageSourcePropType;
  path: PracticePath;
}
