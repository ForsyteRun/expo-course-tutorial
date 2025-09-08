import CourseOptions from "@/components/home/CourseOptions";
import CourseProgress from "@/components/home/CourseProgress";
import Courses from "@/components/home/Courses";
import Header from "@/components/home/Header";
import NoCourse from "@/components/home/NoCourse";
import { useDataFromStorage } from "@/hooks/useDataFromStorage";
import React from "react";
import { ActivityIndicator, FlatList, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const { courses, loading, getDataFromStorage } = useDataFromStorage();

  return (
    <SafeAreaView className="flex-1 bg-WHITE">
      <Image
        source={require("@/assets/images/wave.png")}
        className="absolute"
      />
      <Header />
      {courses ? (
        <FlatList
          onRefresh={getDataFromStorage}
          refreshing={loading}
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
