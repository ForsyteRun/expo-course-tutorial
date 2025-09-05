import { IMAGES } from "@/constants/images";
import type { ICourse } from "@/types/course.interface";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Dimensions, Image, SafeAreaView, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";

const Course = () => {
  const params = useLocalSearchParams();

  const height = Dimensions.get("window").height;

  const course = JSON.parse(params.course as string) as ICourse;
  return (
    <SafeAreaView>
      <Image
        source={IMAGES[course.image as keyof typeof IMAGES]}
        className="w-full"
        style={{ height: height * 0.4 }}
        resizeMode="contain"
      />
      <View className=" flex gap-4 px-4">
        <Text
          className="text-2xl font-[Roboto-Black] "
          style={{ lineHeight: 20 }}
        >
          {course.title}
        </Text>
        <View className="flex-row items-center justify-start gap-2">
          <Feather name="book-open" size={20} color="black" />
          <Text className="text-lg">{course.content.length} Chapters</Text>
        </View>
        <Text className="text-lg opacity-60" style={{ lineHeight: 20 }}>
          {course.description}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Course;
