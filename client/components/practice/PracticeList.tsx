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
import AntDesign from "@expo/vector-icons/AntDesign";
interface IPracticeListProps {
  icon: ImageSourcePropType;
}

const PracticeList: FC<IPracticeListProps> = ({ icon }) => {
  const { courses, loading } = useDataFromStorage();

  return (
    <View className="flex-1 bg-BG_GRAY">
      {loading ? (
        <ActivityIndicator size={"large"} color={"red"} className="flex-1" />
      ) : (
        <FlatList
          data={courses}
          numColumns={2}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View className="w-[48%] relative items-center bg-WHITE m-1 p-4 rounded-2xl">
              <AntDesign
                name="checkcircle"
                size={18}
                color="#999"
                className="absolute top-2 right-2"
              />
              <Image source={icon} className="w-20 h-20" />
              <Text className="text-[14px] text-center">{item.title}</Text>
            </View>
          )}
          contentContainerStyle={{
            padding: 10,
            justifyContent: "center",
          }}
        />
      )}
    </View>
  );
};

export default PracticeList;
