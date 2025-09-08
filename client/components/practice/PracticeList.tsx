import {
  View,
  Text,
  ImageSourcePropType,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { FC } from "react";
import { useDataFromStorage } from "@/hooks/useDataFromStorage";

interface IPracticeListProps {
  icon: ImageSourcePropType;
}

const PracticeList: FC<IPracticeListProps> = ({ icon }) => {
  const { courses, loading } = useDataFromStorage();

  return (
    <View className="flex-1">
      {loading ? (
        <ActivityIndicator size={"large"} color={"red"} className="flex-1" />
      ) : (
        <FlatList
          data={courses}
          numColumns={2}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={true}
          renderItem={({ item }) => (
            <View className="w-[45%] flex items-center m-2">
              <Image source={icon} className="w-20 h-20" />
              <Text className="text-[10px] text-center">{item.title}</Text>
            </View>
          )}
          contentContainerStyle={{ padding: 10 }}
        />
      )}
    </View>
  );
};

export default PracticeList;
