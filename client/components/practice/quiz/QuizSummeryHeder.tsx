import Button from "@/components/Button";
import type { ISelectedQuizOptions } from "@/types/course.interface";
import { useRouter } from "expo-router";
import { FC } from "react";
import { Image, Text, View } from "react-native";

interface IQuizSummeryHederProps {
  complitedQuizes: ISelectedQuizOptions[];
}

const QuizSummeryHeder: FC<IQuizSummeryHederProps> = ({ complitedQuizes }) => {
  const router = useRouter();

  const isCorrectCount = complitedQuizes.filter(
    (quiz) => quiz.isCorrect
  ).length;

  const totalQA = complitedQuizes.length;

  const calcResult = () => {
    return (isCorrectCount / totalQA) * 100;
  };

  const handleGoHome = () => {
    router.push("/(tabs)/home");
  };

  return (
    <View>
      <Text className="text-xl text-WHITE text-center">Quiz Summery</Text>
      <View className="flex gap-3 bg-WHITE p-4 rounded-2xl mt-10">
        <Image
          source={require("@/assets/images/trophy.png")}
          className="w-[100px] h-[100px]"
          style={{ marginTop: -60, alignSelf: "center" }}
        />
        <Text className="text-2xl font-[Roboto-Black] text-center">
          {calcResult() > 60 ? "Congratulations!" : "Try again!"}
        </Text>
        <Text className="text-sm text-center">
          You gave {calcResult().toFixed(0)}% correct answers
        </Text>

        <View className="flex-row items-center justify-evenly ">
          <Text className="text-sm text-center">Q: {totalQA}</Text>
          <Text className="text-sm text-center">✅: {isCorrectCount}</Text>
          <Text className="text-sm text-center">
            ❌: {totalQA - isCorrectCount}
          </Text>
        </View>
      </View>
      <Button
        onPress={handleGoHome}
        className="flex-row items-center justify-center w-full py-3 rounded-2xl bg-PRIMARY mt-5"
        textClassName="text-WHITE"
      >
        Back to home
      </Button>
    </View>
  );
};

export default QuizSummeryHeder;
