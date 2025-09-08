import Course from "@/components/course/Course";
import { useDataFromStorage } from "@/hooks/useDataFromStorage";
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator } from "react-native";

const CourseScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { courses } = useDataFromStorage();

  const course = courses?.find((item) => item.id === id);

  if (!course) return;

  return course ? (
    <Course course={course} />
  ) : (
    <ActivityIndicator size={"large"} color={"red"} />
  );
};

export default CourseScreen;
