import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import { Text, View } from "react-native";
export default function Header() {
  const [user] = useState("Ivan");

  return (
    <View className="flex-row items-center justify-between gap-2 py-8 px-4">
      <View>
        <Text className="text-2xl font-[Roboto-Regular]">Hello, {user}!</Text>
        <Text className="text-sm font-[Roboto-Regular]">Lets get started!</Text>
      </View>
      <Feather name="settings" size={24} color="black" />
    </View>
  );
}
