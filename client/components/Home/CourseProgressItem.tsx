import { IMAGES } from "@/constants/images";
import type { ICourse } from "@/types/course.interface";
import cn from "classnames";
import { useRouter } from "expo-router";
import { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import * as Progress from "react-native-progress";

interface ICourseProgressItemProps {
  course: ICourse;
  className?: string;
}

const CourseProgressItem: FC<ICourseProgressItemProps> = ({
  course,
  className,
}) => {
  const router = useRouter();

  const handleProgress = (course: ICourse) => {
    return course?.completedChapters?.length / course.content.length;
  };

  const handlePress = () => {
    router.push(`/courses/${course.id}`);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className={cn(
        "flex items-start justify-between gap-10 bg-BG_GRAY rounded-2xl mr-4 p-4",
        className
      )}
    >
      <View className="flex-row items-start gap-2">
        <Image
          source={IMAGES[course.image as keyof typeof IMAGES]}
          className="w-[70px] h-[50px] rounded-lg"
        />
        <View className="w-[150px]">
          <Text className="text-xl">{course.title}</Text>
        </View>
      </View>
      <View className="w-full">
        <Progress.Bar progress={handleProgress(course)} width={null} />
        <Text className="text-sm opacity-50 mt-1">
          {course?.completedChapters?.length || 0} chapters comleted of{" "}
          {course.content.length}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CourseProgressItem;
