import { PRACTICE_OPTIONS, PracticeName } from "@/constants/images";
import { useRouter } from "expo-router";
import { View, Text, FlatList, Image, Pressable } from "react-native";

const CourseOptions = () => {
  const router = useRouter();

  const handlePress = (name: PracticeName) => {
    router.push({
      pathname: "/practice/[type]",
      params: { type: name },
    });
  };

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
            <Pressable
              className="mr-4 mb-5"
              onPress={() => handlePress(item.name)}
            >
              <Image
                source={item.image}
                className="w-[150px] h-[150px] rounded-xl"
              />
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default CourseOptions;
