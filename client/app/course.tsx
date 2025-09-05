import Course from "@/components/course/Course";
import type { ICourse } from "@/types/course.interface";
import { useLocalSearchParams } from "expo-router";
import React from "react";

const CourseScreen = () => {
  const params = useLocalSearchParams();
  const course = JSON.parse(params.course as string) as ICourse;

  return <Course course={course} />;
};

export default CourseScreen;
