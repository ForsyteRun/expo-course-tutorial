import { View, Text, FlatList } from "react-native";
import React, { FC } from "react";
import type { ICourse } from "@/types/course.interface";

interface ICoursesProps {
  courses: ICourse[];
}

const Courses: FC<ICoursesProps> = ({ courses }) => {
  return (
    <View>
      <FlatList
        data={courses}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default Courses;
