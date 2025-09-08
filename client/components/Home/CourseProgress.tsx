import { View, Text, FlatList, Image, Dimensions } from "react-native";
import { FC, memo } from "react";
import type { ICourse } from "@/types/course.interface";
import { IMAGES } from "@/constants/images";
import * as Progress from "react-native-progress";

interface ICourseProgressProps {
  courses: ICourse[];
}

const CourseProgress: FC<ICourseProgressProps> = memo(({ courses }) => {
  const handleProgress = (course: ICourse) => {
    return course?.completedChapters?.length / course.content.length;
  };

  return (
    <View className="px-4 mb-5">
      <Text className="text-2xl font-[Roboto-Black] mb-5">Progress</Text>
      <View>
        <FlatList
          data={courses}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <View className="flex items-start justify-between gap-10 bg-BG_GRAY rounded-2xl mr-4 p-4">
                <View className="flex-row items-start gap-2">
                  <Image
                    source={IMAGES[item.image as keyof typeof IMAGES]}
                    className="w-[70px] h-[50px] rounded-lg"
                  />
                  <View className="w-[150px]">
                    <Text className="text-xl">{item.title}</Text>
                  </View>
                </View>
                <View>
                  <Progress.Bar progress={handleProgress(item)} width={200} />
                  <Text className="text-sm opacity-50 mt-1">
                    {item?.completedChapters?.length || 0} chapters comleted of{" "}
                    {item.content.length}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
});

export default CourseProgress;
