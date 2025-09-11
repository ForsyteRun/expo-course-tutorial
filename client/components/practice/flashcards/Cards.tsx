import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { Dispatch, FC, SetStateAction } from "react";
import { ICourse } from "@/types/course.interface";
import FlipCard from "react-native-flip-card";
interface ICardsProps {
  data: ICourse;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const Cards: FC<ICardsProps> = ({ data, setCurrentPage }) => {
  const width = Dimensions.get("screen").width;

  const getCurrentPage = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    return Math.round(offsetX / width);
  };

  return (
    <View className="mt-10">
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data.flashcards}
        onScroll={(event) => {
          const page = getCurrentPage(event);
          setCurrentPage(page);
        }}
        renderItem={({ item }) => (
          <View
            className="h-[400px] mr-4 bg-WHITE rounded-2xl"
            style={{ width: width * 0.91 }}
          >
            <FlipCard>
              <Text className="text-xl text-center font-[Roboto-Black] rounded-2xl p-10">
                {item.question}
              </Text>
              <Text className="h-full  text-center text-xl bg-PRIMARY  rounded-2xl p-10">
                {item["corect-answer"]}
              </Text>
            </FlipCard>
          </View>
        )}
      />
    </View>
  );
};

export default Cards;
