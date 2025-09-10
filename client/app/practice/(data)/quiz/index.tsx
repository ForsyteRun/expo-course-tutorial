import QuizContent from "@/components/practice/quiz/QuizContent";
import QuizHeader from "@/components/practice/quiz/QuizHeader";
import type { ICourse } from "@/types/course.interface";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Quiz = () => {
  const { course } = useLocalSearchParams();

  const data = JSON.parse(course as string) as ICourse;

  const [index, setIndex] = useState(0);

  return (
    <SafeAreaView className="flex-1 relative bg-BG_GRAY">
      <Image
        source={require("@/assets/images/wave.png")}
        className="absolute"
      />
      <QuizHeader count={data.quiz.length} index={index} />
      <QuizContent data={data} index={index} setIndex={setIndex} />
    </SafeAreaView>
  );
};

export default Quiz;
