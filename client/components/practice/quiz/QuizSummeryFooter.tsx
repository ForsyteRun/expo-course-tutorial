import { View, Text, FlatList } from "react-native";
import React, { FC } from "react";
import { ISelectedQuizOptions } from "@/types/course.interface";
import cn from "classnames";

interface IQuizSummeryFooterProps {
  complitedQuizes: ISelectedQuizOptions[];
}

const QuizSummeryFooter: FC<IQuizSummeryFooterProps> = ({
  complitedQuizes,
}) => {
  return (
    <View>
      <Text className="text-xl text-BLACK font-[Roboto-Black] my-4">
        Summery
      </Text>
      <FlatList
        data={complitedQuizes}
        renderItem={({ item }) => (
          <View
            className={cn("flex p-4 rounded-2xl border my-2", {
              "bg-LIGHT_GREEN border-GREEN": item.isCorrect,
              "bg-BG_RED border-RED": !item.isCorrect,
            })}
          >
            <Text className="text-sm">{item.question}</Text>
            <Text className="text-[8px]">
              Ans: {item.options[+item.selected]}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default QuizSummeryFooter;
