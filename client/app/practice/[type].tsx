import { PRACTICE_OPTIONS } from "@/constants/images";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";

const Practice = () => {
  const router = useRouter();
  const { type } = useLocalSearchParams();

  const option = PRACTICE_OPTIONS.find((item) => item.name === type);

  if (!option) return;

  const handleGoBack = () => {
    router.back();
  };

  return (
    <SafeAreaView>
      <View className="relative">
        <Pressable
          onPress={handleGoBack}
          className="absolute top-4 left-4 z-40 bg-WHITE p-2 rounded-lg"
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>
        <Image source={option.image} className="w-full h-[200px]" />
      </View>
      <Text>{option.name}</Text>
    </SafeAreaView>
  );
};

export default Practice;
