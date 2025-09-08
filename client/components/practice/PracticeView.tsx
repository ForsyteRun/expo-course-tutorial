import { View, Text, Pressable, Image } from "react-native";
import React, { FC } from "react";
import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { IPricticeOption } from "@/constants/images";

interface IPracticeOptionProps {
  option: IPricticeOption;
}

const PracticeView: FC<IPracticeOptionProps> = ({ option }) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <View>
      <View className="relative">
        <Pressable
          onPress={handleGoBack}
          className="absolute top-4 left-4 z-40 bg-WHITE p-2 rounded-lg"
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>
        <Image source={option.image} className="w-full h-[200px]" />
      </View>
      <Text>{option.name}</Text>
    </View>
  );
};

export default PracticeView;
