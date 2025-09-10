import type { ICourse, ISelectedQuizOptions } from "@/types/course.interface";
import { StorageEnum } from "@/types/storage.enum";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const compliteQuiz = async (
  courseId: string,
  totalSelectedQuiz: ISelectedQuizOptions[]
) => {
  try {
    const rowCourses = await AsyncStorage.getItem(StorageEnum.COURSES);

    if (rowCourses) {
      const courses = JSON.parse(rowCourses) as ICourse[];
      const course = courses.find((c) => c.id === courseId);

      if (!course) return;

      course.complitedQuizes = totalSelectedQuiz;

      const isCorrectCount = totalSelectedQuiz.filter(
        (quiz) => quiz.isCorrect
      ).length;

      const totalQA = totalSelectedQuiz.length;

      course.isQuizComplited = (isCorrectCount / totalQA) * 100 > 60;

      await AsyncStorage.setItem(StorageEnum.COURSES, JSON.stringify(courses));
    }

    return true;
  } catch {
    return false;
  }
};
