import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts({
    'Roboto-Black': require('./../assets/fonts/RobotoCondensed-Black.ttf'),
    'Roboto-Regular': require('./../assets/fonts/RobotoCondensed-Regular.ttf'),
    'Roboto-Italic': require('./../assets/fonts/RobotoCondensed-Italic.ttf')
  });

  return <Stack screenOptions={{ headerShown: false, animation: 'fade' }}></Stack>;
}
