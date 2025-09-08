import type { IPricticeOption } from "@/constants/images";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { FC } from "react";
import { Image, Pressable, View } from "react-native";
import PracticeList from "./PracticeList";

interface IPracticeOptionProps {
  option: IPricticeOption;
}

const PracticeView: FC<IPracticeOptionProps> = ({ option }) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <View className="flex-1">
      <View className="relative">
        <Pressable
          onPress={handleGoBack}
          className="absolute top-4 left-4 z-40 bg-WHITE p-2 rounded-lg"
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>
        <Image source={option.image} className="w-full h-[200px]" />
      </View>
      <PracticeList icon={option.icon} />
    </View>
  );
};

export default PracticeView;
