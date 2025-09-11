import type { ICourse } from "@/types/course.interface";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { FC, useState } from "react";
import { Dimensions, Image, Text, View } from "react-native";
import * as Progress from "react-native-progress";
import Cards from "./Cards";

interface IFlashcardsViewProps {
  data: ICourse;
}

const FlashcardsView: FC<IFlashcardsViewProps> = ({ data }) => {
  const router = useRouter();
  const width = Dimensions.get("screen").width;

  const [currentPage, setCurrentPage] = useState(0);

  const handleGoBack = () => {
    router.back();
  };

  const getProgress = () => {
    return currentPage / data.flashcards.length;
  };

  return (
    <View className="px-4">
      <Image
        source={require("@/assets/images/wave.png")}
        className="absolute"
      />
      <View className="flex-row items-center justify-between mt-4">
        <Ionicons
          onPress={handleGoBack}
          name="arrow-back"
          size={24}
          color="#fff"
        />
        <Text className="text-WHITE">
          {currentPage + 1} of {data.flashcards.length}
        </Text>
      </View>
      <Progress.Bar
        progress={getProgress()}
        width={width * 0.91}
        className="mt-2"
        color="#fff"
      />
      <Cards data={data} setCurrentPage={setCurrentPage} />
    </View>
  );
};

export default FlashcardsView;
