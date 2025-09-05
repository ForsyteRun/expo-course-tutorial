import type { IChapters } from "@/types/course.interface";
import Entypo from "@expo/vector-icons/Entypo";
import React, { FC } from "react";
import { FlatList, Text, View } from "react-native";

interface ChaptersProps {
  chapters: IChapters[];
}

const Chapters: FC<ChaptersProps> = ({ chapters }) => {
  return (
    <View className="px-4 pb-10">
      <Text className="text-2xl font-[Roboto-Black] mb-2">Chapters</Text>
      <FlatList
        data={chapters}
        renderItem={({ item, index }) => (
          <View className="flex-row items-center justify-between rounded-lg border border-GRAY p-2 mb-2">
            <View className="w-[80%] flex-row items-center justify-start gap-1">
              <Text className="text-[14px]">{index + 1}. </Text>
              <Text className="text-[14px]">{item.title}</Text>
            </View>
            <Entypo name="controller-play" size={24} color="#0075ff" />
          </View>
        )}
      />
    </View>
  );
};

export default Chapters;
