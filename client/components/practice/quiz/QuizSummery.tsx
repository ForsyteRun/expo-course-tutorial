import type { ISelectedQuizOptions } from "@/types/course.interface";
import { FC } from "react";
import { FlatList, View } from "react-native";
import QuizSummeryFooter from "./QuizSummeryFooter";
import QuizSummeryHeder from "./QuizSummeryHeder";

interface IQuizSummeryProps {
  complitedQuizes: ISelectedQuizOptions[];
}
const QuizSummery: FC<IQuizSummeryProps> = ({ complitedQuizes }) => {
  return (
    <FlatList
      data={[]}
      renderItem={() => null}
      ListHeaderComponent={() => {
        return (
          <View className="flex gap-5 p-6">
            <QuizSummeryHeder complitedQuizes={complitedQuizes} />
            <QuizSummeryFooter complitedQuizes={complitedQuizes} />
          </View>
        );
      }}
    />
  );
};

export default QuizSummery;
