import { PRACTICE_OPTIONS } from "@/constants/images";
import { View, Text, FlatList, Image } from "react-native";

const CourseOptions = () => {
  return (
    <View className="px-4">
      <Text className="text-2xl font-[Roboto-Black] mb-5">CourseOptions</Text>
      <FlatList
        data={PRACTICE_OPTIONS}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <View className="mr-4 mb-5">
              <Image
                source={item.image}
                className="w-[150px] h-[150px] rounded-xl"
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default CourseOptions;
