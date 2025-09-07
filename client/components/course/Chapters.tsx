import type { IChapter, ICourse } from "@/types/course.interface";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";
import { FC } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
interface ChaptersProps {
  course: ICourse;
  courseId: string;
}

const Chapters: FC<ChaptersProps> = ({ course, courseId }) => {
  const router = useRouter();

  const handlePress = (chapter: IChapter, index: number) => {
    router.push({
      pathname: "/chapter",
      params: {
        chapter: JSON.stringify(chapter),
        chapterId: String(index + 1),
        courseId,
      },
    });
  };

  return (
    <View className="px-4 pb-10">
      <Text className="text-2xl font-[Roboto-Black] mb-2">Chapters</Text>
      <FlatList
        data={course.content}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => handlePress(item, index)}
            className="flex-row items-center justify-between rounded-lg border border-GRAY p-2 mb-2"
          >
            <View className="w-[80%] flex-row items-center justify-start gap-1">
              <Text className="text-[14px]">{index + 1}. </Text>
              <Text className="text-[14px]">{item.title}</Text>
            </View>
            {course?.completedChapters?.includes(String(index + 1)) ? (
              <Feather name="check-circle" size={24} color="green" />
            ) : (
              <Entypo name="controller-play" size={24} color="#0075ff" />
            )}
          </Pressable>
        )}
      />
    </View>
  );
};

export default Chapters;
