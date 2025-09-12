import CourseOptions from "@/components/home/CourseOptions";
import CourseProgress from "@/components/home/CourseProgress";
import Courses from "@/components/home/Courses";
import Header from "@/components/home/Header";
import NoCourse from "@/components/home/NoCourse";
import { useDataFromStorage } from "@/hooks/useDataFromStorage";
import React from "react";
import { ActivityIndicator, FlatList, Image, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function Home() {
  const { courses, loading, getDataFromStorage } = useDataFromStorage();
  const { bottom } = useSafeAreaInsets();

  return (
    <SafeAreaView
      className="flex-1 h-full inset-0bg-WHITE"
      edges={["top", "left", "right"]}
    >
      <Image
        source={require("@/assets/images/wave.png")}
        className="absolute"
      />
      <Header />
      {courses ? (
        <FlatList
          onRefresh={getDataFromStorage}
          refreshing={loading}
          contentContainerStyle={{ paddingBottom: bottom }}
          data={[]}
          ListHeaderComponent={
            <View>
              <CourseProgress courses={courses} />
              <CourseOptions />
              <Courses courses={courses} />
            </View>
          }
          renderItem={() => null}
        />
      ) : loading ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <NoCourse />
      )}
    </SafeAreaView>
  );
}
