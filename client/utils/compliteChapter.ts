import type { ICourse } from "@/types/course.interface";
import { StorageEnum } from "@/types/storage.enum";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const compliteChapter = async (courseId: string, chapterId: string) => {
  try {
    const rowCourses = await AsyncStorage.getItem(StorageEnum.COURSES);

    if (rowCourses) {
      const courses = JSON.parse(rowCourses) as ICourse[];

      const course = courses.find((c) => c.id === courseId);

      if (!course) return;

      if (course.completedChapters?.length) {
        course.completedChapters = Array.from(
          new Set([...course.completedChapters, chapterId])
        );
      } else {
        course.completedChapters = [chapterId];
      }

      await AsyncStorage.setItem(StorageEnum.COURSES, JSON.stringify(courses));
    }

    return true;
  } catch {
    return false;
  }
};
