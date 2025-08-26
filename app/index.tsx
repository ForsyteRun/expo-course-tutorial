import Button from "@/components/Button";
import { Image, Text, View } from "react-native";

import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import "./../global.css";

export default function Index() {
  const router = useRouter();

  const handleAuth = (variant: 'login' | 'register') => {
    router.push(`/auth/${variant}`);
  };

  return (
    <SafeAreaView
      className="flex-1 bg-WHITE"
    >
      <View className="flex-1 items-center justify-center ">
        <Image source={require("./../assets/images/landing.jpg")} className="w-full h-full" />
      </View>
      <View className="flex items-center justify-start h-[55%] bg-PRIMARY rounded-t-xl px-10 pt-5">
        <Text className="text-center text-2xl text-WHITE font-[Roboto-Black] pb-2" >Welcome to Course-Tutorial</Text>
        <Text className="text-center text-sm text-WHITE pb-8">Transform your ideas into engaging learning experiences with AI 🍏 📖</Text>
        <Button onPress={() => handleAuth('register')} className="w-full capitalize  bg-WHITE py-3  mb-5" textClassName="font-[Roboto-Regular] text-sm">Get Started</Button>
        <Button onPress={() => handleAuth('login')} className="w-full capitalize bg-PRIMARY border border-WHITE py-3 mb-7" textClassName="font-[Roboto-Regular] text-WHITE text-sm">Already have an account</Button>
      </View>
    </SafeAreaView>
  );
}
