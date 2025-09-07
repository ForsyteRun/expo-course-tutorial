import Button from "@/components/Button";
import { IMAGES } from "@/constants/images";
import type { ICourse } from "@/types/course.interface";
import Feather from "@expo/vector-icons/Feather";
import React, { FC } from "react";
import { Dimensions, Image, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
interface IntroProps {
  course: ICourse;
}

const Intro: FC<IntroProps> = ({ course }) => {
  const height = Dimensions.get("window").height;

  const { top, left } = useSafeAreaInsets();
  const router = useRouter();

  const handleGoBack = () => {
    router.replace("/(tabs)/home");
  };

  return (
    <View className="relative">
      <Image
        source={IMAGES[course.image as keyof typeof IMAGES]}
        className="w-full"
        style={{ height: height * 0.35 }}
        resizeMode="contain"
      />
      <Ionicons
        name="arrow-back"
        size={30}
        color="black"
        onPress={handleGoBack}
        style={{ position: "absolute", top: top + 10, left: left + 3 }}
      />
      <View className="flex gap-3 px-4">
        <Text
          className="text-xl font-[Roboto-Black]"
          style={{ lineHeight: 20 }}
        >
          {course.title}
        </Text>

        <View className="flex-row items-center justify-start gap-2">
          <Feather name="book-open" size={20} color="black" />
          <Text className="text-sm">{course.content.length} Chapters</Text>
        </View>

        <Text className="text-sm opacity-60" style={{ lineHeight: 15 }}>
          {course.description}
        </Text>

        <Button
          className="flex-row items-center justify-center w-full py-3 rounded-2xl bg-PRIMARY"
          textClassName="text-WHITE"
        >
          Start now
        </Button>
      </View>
    </View>
  );
};

export default Intro;
