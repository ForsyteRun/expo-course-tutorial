import {
  View,
  Text,
  ImageSourcePropType,
  Image,
  FlatList,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { FC } from "react";
import { useDataFromStorage } from "@/hooks/useDataFromStorage";
import AntDesign from "@expo/vector-icons/AntDesign";
import type { ICourse } from "@/types/course.interface";
import { useRouter } from "expo-router";
import { PRACTICE_OPTIONS, PracticeName } from "@/constants/images";
interface IPracticeListProps {
  icon: ImageSourcePropType;
  name: PracticeName;
  path: (typeof PRACTICE_OPTIONS)[number]["path"];
}

const PracticeList: FC<IPracticeListProps> = ({ icon, name, path }) => {
  const { courses, loading } = useDataFromStorage();
  const router = useRouter();

  const handleQuizTopic = (course: ICourse) => {
    if (name === "Quiz") {
      router.push({
        pathname: path,
        params: { course: JSON.stringify(course) },
      });
    }

    if (name === "Flashcards") {
      router.push({
        pathname: path,
        params: { course: JSON.stringify(course) },
      });
    }

    if (name === "Question & ans") {
      router.push({
        pathname: path,
        params: { course: JSON.stringify(course) },
      });
    }
  };

  return (
    <View className="flex-1 bg-BG_GRAY">
      {loading ? (
        <ActivityIndicator size={"large"} color={"red"} className="flex-1" />
      ) : (
        <FlatList
          data={courses}
          numColumns={2}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => handleQuizTopic(item)}
              className="w-[48%] relative items-center bg-WHITE m-1 p-4 rounded-2xl"
            >
              {name === "Quiz" && item.isQuizComplited && (
                <AntDesign
                  name="checkcircle"
                  size={18}
                  color="green"
                  className="absolute top-2 right-2"
                />
              )}
              <Image source={icon} className="w-20 h-20" />
              <Text className="text-[14px] text-center">{item.title}</Text>
            </Pressable>
          )}
          contentContainerStyle={{
            padding: 10,
            justifyContent: "center",
          }}
        />
      )}
    </View>
  );
};

export default PracticeList;
