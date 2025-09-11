import { ICourse } from "@/types/course.interface";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { FC, useState } from "react";
import { Image, Pressable } from "react-native";
import { View, Text, FlatList } from "react-native";

interface IQaViewProps {
  data: ICourse;
}
const QaView: FC<IQaViewProps> = ({ data }) => {
  const router = useRouter();
  const [QIndex, setQIndex] = useState<number | null>(null);

  const handlePress = (index: number) => {
    if (QIndex === index) {
      setQIndex(null);
    } else {
      setQIndex(index);
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <View className="flex-1 p-4 bg-BG_GRAY">
      <Image
        source={require("@/assets/images/wave.png")}
        className="absolute"
      />
      <Ionicons
        onPress={handleGoBack}
        name="arrow-back"
        size={24}
        color="#fff"
      />
      <View className="mt-5">
        <Text className="text-xl text-WHITE font-[Roboto-Black]">
          Question & Answers
        </Text>
        <Text className="text-sm text-WHITE">{data.title}</Text>
      </View>
      <FlatList
        data={data.questions}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View className="my-4">
            <Pressable
              onPress={() => handlePress(index)}
              className="bg-WHITE p-4 rounded-2xl"
            >
              <Text className="text-md font-bold py-2">{item.question}</Text>

              {QIndex === index && (
                <View className="border-t border-t-[#999] py-2">
                  <Text className="text-md color-GREEN">{item.answer}</Text>
                </View>
              )}
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

export default QaView;
