import CourseProgress from "@/components/home/CourseProgress";
import CourseProgressItem from "@/components/home/CourseProgressItem";
import { useDataFromStorage } from "@/hooks/useDataFromStorage";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function Progress() {
  const { courses, loading, getDataFromStorage } = useDataFromStorage();
  const { bottom } = useSafeAreaInsets();

  return (
    <SafeAreaView
      className="flex-1 bg-WHITE px-4 pt-4"
      edges={["top", "left", "right"]}
    >
      <Image
        source={require("@/assets/images/wave.png")}
        className="absolute"
      />
      <Text className="text-2xl text-WHITE font-[Roboto-Black] pb-5">
        Progress
      </Text>
      {courses ? (
        <FlatList
          onRefresh={getDataFromStorage}
          refreshing={loading}
          showsVerticalScrollIndicator={false}
          data={courses}
          contentContainerStyle={{ gap: 10, paddingBottom: bottom }}
          renderItem={({ item }) => (
            <CourseProgressItem course={item} className="w-full" />
          )}
        />
      ) : (
        <ActivityIndicator size="large" color="red" />
      )}
    </SafeAreaView>
  );
}
