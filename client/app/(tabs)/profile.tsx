import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  useEffect(() => {
    const resetData = async () => {
      await AsyncStorage.clear();
      const keys = await AsyncStorage.getAllKeys();
      console.log("Ключи после очистки:", keys); // должно быть []
    };

    resetData();
  }, []);

  return (
    <SafeAreaView>
      <Text>Profile</Text>
    </SafeAreaView>
  );
}
