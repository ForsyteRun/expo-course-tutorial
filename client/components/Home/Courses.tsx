import { IMAGES } from "@/constants/images";
import type { ICourse } from "@/types/course.interface";
import Feather from "@expo/vector-icons/Feather";
import { FC } from "react";
import { Dimensions, FlatList, Image, Text, View } from "react-native";
interface ICoursesProps {
  courses: ICourse[];
}

const Courses: FC<ICoursesProps> = ({ courses }) => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <View className="px-4">
      <Text className="text-2xl font-[Roboto-Black] mb-5">Courses</Text>
      <FlatList
        data={courses}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={{ width: screenWidth - 60 }}
            className="flex items-start justify-start gap-3 p-4 bg-BG_GRAY rounded-2xl mr-4"
          >
            <Image
              source={IMAGES[item.image as keyof typeof IMAGES]}
              className="w-full h-[200px] rounded-lg"
              resizeMode="cover"
            />
            <View style={{ width: screenWidth - 70 }}>
              <Text className="text-lg mt-2">{item.title}</Text>
              <View className="flex-row items-center justify-start gap-2 mt-4">
                <Feather name="book-open" size={20} color="black" />
                <Text className="text-lg">{item.content.length} Chapters</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Courses;
