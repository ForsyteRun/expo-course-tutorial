import Course from "@/components/course/Course";
import type { ICourse } from "@/types/course.interface";
import { StorageEnum } from "@/types/storage.enum";
import { getItemFromStorage } from "@/utils/getItemFormStorage";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";

const CourseScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [course, setCourse] = useState<ICourse | null>(null);

  useEffect(() => {
    const getItems = async () => {
      const courses = await getItemFromStorage<ICourse[]>(StorageEnum.COURSES);

      const isExistingCourse = courses?.find((item) => item.id === id);

      if (isExistingCourse) {
        setCourse(isExistingCourse);
      }
    };

    getItems();
  }, []);

  return course && <Course course={course} />;
};

export default CourseScreen;
