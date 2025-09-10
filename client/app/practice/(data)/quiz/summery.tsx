import QuizSummery from "@/components/practice/quiz/QuizSummery";
import type { ISelectedQuizOptions } from "@/types/course.interface";
import { useLocalSearchParams } from "expo-router";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Summery = () => {
  const { result } = useLocalSearchParams();

  const complitedQuizes = JSON.parse(
    result as string
  ) as ISelectedQuizOptions[];

  if (!complitedQuizes?.length) return;

  return (
    <SafeAreaView>
      <Image
        source={require("@/assets/images/wave.png")}
        className="absolute h-150 w-full"
      />
      <QuizSummery complitedQuizes={complitedQuizes} />
    </SafeAreaView>
  );
};

export default Summery;
