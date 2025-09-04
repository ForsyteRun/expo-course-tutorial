import Toast from "@/components/Toast";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ActivityIndicator, View } from "react-native";

export default function RootLayout() {
  const [loaded] = useFonts({
    "Roboto-Black": require("./../assets/fonts/RobotoCondensed-Black.ttf"),
    "Roboto-Regular": require("./../assets/fonts/RobotoCondensed-Regular.ttf"),
    "Roboto-Italic": require("./../assets/fonts/RobotoCondensed-Italic.ttf"),
  });

  if (!loaded) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <>
      <Stack screenOptions={{ headerShown: false, animation: "fade" }}></Stack>
      <Toast />
    </>
  );
}
