import CourseOptions from "@/components/home/CourseOptions";
import Courses from "@/components/home/Courses";
import Header from "@/components/home/Header";
import NoCourse from "@/components/home/NoCourse";
import { useDataFromStorage } from "@/hooks/useDataFromStorage";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const { courses } = useDataFromStorage();

  return (
    <SafeAreaView className="flex-1 bg-WHITE">
      <Header />
      {courses ? (
        <View>
          <CourseOptions />
          <Courses courses={courses} />
        </View>
      ) : (
        <NoCourse />
      )}
    </SafeAreaView>
  );
}
