import type { ICourse } from "@/types/course.interface";
import { FC } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import Chapters from "./Chapters";
import Intro from "./Intro";

interface CourseProps {
  course: ICourse;
}

const Course: FC<CourseProps> = ({ course }) => {
  return (
    <SafeAreaView>
      <FlatList
        data={[]}
        renderItem={() => null}
        ListHeaderComponent={
          <View className="flex gap-6">
            <Intro course={course} />
            <Chapters course={course} courseId={course.id} />
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Course;
