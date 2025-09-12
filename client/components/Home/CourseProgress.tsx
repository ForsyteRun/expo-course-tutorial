import { View, Text, FlatList, Image, Dimensions } from "react-native";
import { FC, memo } from "react";
import type { ICourse } from "@/types/course.interface";
import { IMAGES } from "@/constants/images";
import * as Progress from "react-native-progress";
import CourseProgressItem from "./CourseProgressItem";

interface ICourseProgressProps {
  courses: ICourse[];
}

const CourseProgress: FC<ICourseProgressProps> = memo(({ courses }) => {
  return (
    <View className="px-4 mb-5">
      <Text className="text-2xl font-[Roboto-Black] mb-5">Progress</Text>
      <View>
        <FlatList
          data={courses}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <CourseProgressItem course={item} />}
        />
      </View>
    </View>
  );
});

export default CourseProgress;
