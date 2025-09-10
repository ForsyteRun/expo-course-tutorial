import type { ICourse } from "@/types/course.interface";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { FC } from "react";
import { View, Text, Dimensions } from "react-native";
import * as Progress from "react-native-progress";

interface IQuizHeaderProps {
  count: number;
  index: number;
}

const QuizHeader: FC<IQuizHeaderProps> = ({ count, index }) => {
  const router = useRouter();

  const screenWidth = Dimensions.get("window").width;

  const handleGoBack = () => {
    router.back();
  };

  const getProgress = () => {
    return index / count;
  };

  return (
    <View className=" px-4">
      <View className="flex-row items-center justify-between mt-4">
        <Ionicons
          onPress={handleGoBack}
          name="arrow-back"
          size={24}
          color="#fff"
        />
        <Text className="text-WHITE">
          {index} of {count}
        </Text>
      </View>
      <Progress.Bar
        progress={getProgress()}
        width={screenWidth * 0.91}
        className="mt-2"
        color="#fff"
      />
    </View>
  );
};

export default QuizHeader;
